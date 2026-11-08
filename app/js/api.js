// A small Supabase client (auth, database, storage) written for this app,
// so the app needs no build step and no third-party packages.
window.RM_API = (function () {
  'use strict';
  var C = window.RM_CONFIG;
  var KEY = 'rm.session';
  var ses = null;
  try { ses = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { ses = null; }
  var refreshing = null;

  function ApiError(code, message, status) { this.code = code; this.message = message; this.status = status || 0; }
  ApiError.prototype = Object.create(Error.prototype);

  function saveSes(s) {
    ses = s;
    try { if (s) localStorage.setItem(KEY, JSON.stringify(s)); else localStorage.removeItem(KEY); } catch (e) {}
  }
  function withExpiry(s) { s.expires_at = Date.now() + (Number(s.expires_in) || 3600) * 1000; return s; }

  // Friendly messages for the errors members can actually hit.
  var FRIENDLY = {
    invalid_credentials: 'That email and password do not match. Check them and try again.',
    user_already_exists: 'An account with this email already exists. Log in instead.',
    email_exists: 'An account with this email already exists. Log in instead.',
    weak_password: 'Choose a stronger password.',
    email_not_confirmed: 'Confirm your email first: open the link we sent you.',
    over_email_send_rate_limit: 'Too many emails were sent just now. Wait a few minutes and try again.',
    over_request_rate_limit: 'Too many tries. Wait a minute and try again.',
    validation_failed: 'Check the email address.',
    email_address_invalid: 'Check the email address.',
    forbidden: 'You cannot do this yet.',
    verify_first: 'Finish your verification first: ID and selfie, roots and city.',
    event_closed: 'This event is no longer taking reservations.',
    too_late: 'Reservations closed 48 hours before the event.',
    not_your_event: 'This event is for a different community.',
    age_outside_range: 'This event is for a different age group.',
    men_book_later: 'Women book first. Reservations for men open soon.',
    already_reserved: 'You already have a seat.',
    parents_not_allowed: 'Parents cannot join this event.',
    full: 'All seats and the waiting list are full. Try another event.',
    daily_interest_limit: 'You reached today’s limit of interests. Try again tomorrow.',
    too_soon: 'Choose a date at least 9 days from today, so everyone can plan.',
    not_open: 'Only an event that is still filling can be moved.',
    daily_message_limit: 'You reached today’s message limit. Try again tomorrow.',
    rude_words: 'Please keep it respectful. Remove the rude words and try again.',
    money_request: 'Asking for or sending money is not allowed on NeuMarry, and payment details cannot be shared. Never send money to anyone you meet here.',
    admins_only: 'Only the NeuMarry team can do this.',
    purchase_not_found: 'Google Play could not find this purchase. If you were charged, contact us and we will fix it.',
    purchase_other_account: 'This Google Play purchase belongs to a different NeuMarry account. Log in with that account, or contact us.',
    store_unavailable: 'Google Play is not answering right now. Your purchase is safe; it will switch on Gold the next time you open NeuMarry.',
    server_busy: 'The server is busy. Please try again in a moment.',
    paypal_busy: 'PayPal is not answering right now. Nothing was charged. Try again in a minute.',
    not_due: 'Payment opens when the event is confirmed.',
    amount_mismatch: 'The amount paid did not match. Our team will check it and contact you.',
    wrong_order: 'This payment belongs to a different seat. Contact us and we will fix it.',
    no_reservation: 'You do not have a seat at this event.',
    network: 'No internet connection. Check your connection and try again.'
  };
  function friendly(code, fallback) { return FRIENDLY[code] || fallback || 'Something went wrong. Please try again.'; }

  async function parse(r) {
    var t = await r.text();
    if (!t) return null;
    try { return JSON.parse(t); } catch (e) { return t; }
  }

  function errorFrom(r, body) {
    var b = body && typeof body === 'object' ? body : {};
    var rawCode = String(b.error_code || b.code || b.error || '');
    var msg = String(b.msg || b.message || b.error_description || (typeof body === 'string' ? body : ''));
    var code = rawCode;
    if (FRIENDLY[msg]) code = msg;                                   // our database functions raise short codes
    else if (/Invalid login credentials/i.test(msg)) code = 'invalid_credentials';
    else if (/already registered|already exists/i.test(msg)) code = 'user_already_exists';
    else if (/Email not confirmed/i.test(msg)) code = 'email_not_confirmed';
    else if (rawCode === '42501' || /row-level security|permission denied/i.test(msg)) code = 'forbidden';
    var text = FRIENDLY[code] || (r.status >= 500 ? 'The server is busy. Please try again in a moment.' : 'Something went wrong. Please try again.');
    var er = new ApiError(code || 'error_' + r.status, text, r.status); er.raw = msg + ' ' + rawCode; return er;
  }

  async function raw(path, opts) {
    opts = opts || {};
    var h = { apikey: C.key };
    if (opts.headers) for (var k in opts.headers) h[k] = opts.headers[k];
    if (opts.auth !== false) {
      await ensureFresh();
      if (ses && ses.access_token) h.Authorization = 'Bearer ' + ses.access_token;
    }
    var body = opts.body;
    if (body !== undefined && !(body instanceof Blob)) { h['Content-Type'] = 'application/json'; body = JSON.stringify(body); }
    var r;
    try { r = await fetch(C.url + path, { method: opts.method || 'GET', headers: h, body: body }); }
    catch (e) { throw new ApiError('network', friendly('network')); }
    if (r.status === 401 && opts.auth !== false && ses && !opts.retried) {
      var ok = await refresh(true);
      if (ok) { opts.retried = true; return raw(path, opts); }
      saveSes(null);
      if (api.onSignedOut) api.onSignedOut();
      throw new ApiError('signed_out', 'Please log in again.', 401);
    }
    var data = await parse(r);
    if (!r.ok) throw errorFrom(r, data);
    return data;
  }

  async function ensureFresh() {
    if (ses && ses.refresh_token && ses.expires_at && ses.expires_at - Date.now() < 90 * 1000) await refresh(false);
  }
  function refresh(force) {
    if (!ses || !ses.refresh_token) return Promise.resolve(false);
    if (refreshing) return refreshing;
    refreshing = (async function () {
      try {
        var r = await fetch(C.url + '/auth/v1/token?grant_type=refresh_token', {
          method: 'POST', headers: { apikey: C.key, 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh_token: ses.refresh_token })
        });
        var d = await parse(r);
        if (r.ok && d && d.access_token) { saveSes(withExpiry(d)); return true; }
        if (r.status >= 400 && r.status < 500) saveSes(null);
        return false;
      } catch (e) { return false; }
      finally { refreshing = null; }
    })();
    return refreshing;
  }

  function qs(params) {
    var out = [];
    for (var k in params) {
      if (params[k] === undefined || params[k] === null) continue;
      out.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
    }
    return out.length ? '?' + out.join('&') : '';
  }

  var api = {
    ApiError: ApiError,
    friendly: friendly,
    onSignedOut: null,
    session: function () { return ses; },
    userId: function () { return ses && ses.user && ses.user.id || null; },
    email: function () { return ses && ses.user && ses.user.email || ''; },

    // ---------- Auth ----------
    signUp: async function (email, password) {
      var d = await raw('/auth/v1/signup' + qs({ redirect_to: C.redirect }), { method: 'POST', auth: false, body: { email: email, password: password } });
      if (d && d.access_token) { saveSes(withExpiry(d)); return { session: true }; }
      return { session: false, confirm: true };
    },
    signIn: async function (email, password) {
      var d = await raw('/auth/v1/token?grant_type=password', { method: 'POST', auth: false, body: { email: email, password: password } });
      saveSes(withExpiry(d));
      return d;
    },
    recover: function (email) {
      return raw('/auth/v1/recover' + qs({ redirect_to: C.redirect }), { method: 'POST', auth: false, body: { email: email } });
    },
    updatePassword: function (password) {
      return raw('/auth/v1/user', { method: 'PUT', body: { password: password } });
    },
    // Google ID token from Android's account sheet or Google's web button. The raw nonce
    // proves the token was asked for by this app just now.
    signInWithIdToken: async function (idToken, nonce) {
      var d = await raw('/auth/v1/token?grant_type=id_token', { method: 'POST', auth: false, body: { provider: 'google', id_token: idToken, nonce: nonce } });
      saveSes(withExpiry(d));
      return d;
    },
    googleUrl: function () {
      return C.url + '/auth/v1/authorize' + qs({ provider: 'google', redirect_to: C.redirect });
    },
    // Reads the tokens that come back in the address after Google sign-in or an email link.
    takeRedirect: async function (url) {
      var i = url.indexOf('#');
      if (i < 0) return null;
      var p = new URLSearchParams(url.slice(i + 1));
      if (p.get('error') || p.get('error_description')) {
        throw new ApiError(p.get('error_code') || p.get('error') || 'auth', (p.get('error_description') || 'Sign-in did not finish.').replace(/\+/g, ' '));
      }
      var at = p.get('access_token');
      if (!at) return null;
      var s = { access_token: at, refresh_token: p.get('refresh_token'), expires_in: p.get('expires_in') || 3600, token_type: 'bearer', type: p.get('type') || '' };
      withExpiry(s);
      saveSes(s);
      var u = await raw('/auth/v1/user');
      s.user = { id: u.id, email: u.email };
      saveSes(s);
      return s;
    },
    signOut: async function () {
      try { if (ses) await raw('/auth/v1/logout', { method: 'POST' }); } catch (e) {}
      saveSes(null);
    },
    forget: function () { saveSes(null); },

    // ---------- Database ----------
    select: function (table, params) { return raw('/rest/v1/' + table + qs(params || {})); },
    insert: function (table, rows, opts) {
      opts = opts || {};
      var prefer = [opts.returning === false ? 'return=minimal' : 'return=representation'];
      if (opts.upsert) prefer.push('resolution=merge-duplicates');
      return raw('/rest/v1/' + table + qs(opts.onConflict ? { on_conflict: opts.onConflict } : {}), { method: 'POST', body: rows, headers: { Prefer: prefer.join(',') } });
    },
    update: function (table, filter, values) {
      return raw('/rest/v1/' + table + qs(filter), { method: 'PATCH', body: values, headers: { Prefer: 'return=representation' } });
    },
    remove: function (table, filter) { return raw('/rest/v1/' + table + qs(filter), { method: 'DELETE' }); },
    rpc: function (fn, args) { return raw('/rest/v1/rpc/' + fn, { method: 'POST', body: args || {} }); },
    fn: function (name, body) { return raw('/functions/v1/' + name, { method: 'POST', body: body || {} }); },

    // ---------- Storage ----------
    upload: function (bucket, path, blob) {
      return raw('/storage/v1/object/' + bucket + '/' + path.split('/').map(encodeURIComponent).join('/'), {
        method: 'POST', body: blob, headers: { 'Content-Type': blob.type || 'application/octet-stream', 'x-upsert': 'false', 'cache-control': '3600' }
      });
    },
    signMany: async function (bucket, paths, seconds) {
      if (!paths.length) return {};
      var d = await raw('/storage/v1/object/sign/' + bucket, { method: 'POST', body: { paths: paths, expiresIn: seconds || 3600 } });
      var out = {};
      (d || []).forEach(function (x) { if (x && x.signedURL) out[x.path] = C.url + '/storage/v1' + x.signedURL; });
      return out;
    },
    removeFile: function (bucket, path) {
      return raw('/storage/v1/object/' + bucket + '/' + path.split('/').map(encodeURIComponent).join('/'), { method: 'DELETE' });
    }
  };
  return api;
})();
