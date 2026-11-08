// Public settings. The publishable key is safe to ship in the app: row-level
// security in the database decides what each member can read or write.
window.RM_CONFIG = (function () {
  var c = {
    url: 'https://ndxlguuywifovqdzdvtq.supabase.co',
    key: 'sb_publishable_oBR1e77Tx1mNysmxcZ2cgw_qDOpS4gt',
    appId: 'com.neuconet.rootmate',
    redirect: 'com.neuconet.rootmate://auth-callback',
    site: 'https://neumarry.com/',
    support: 'support@neumarry.com',
    // Google sign-in (public id of the "Web application" OAuth client; Supabase checks tokens against it).
    googleClientId: '583611998053-skqaj33g8cl9cjhg6pmq139af9qa92bo.apps.googleusercontent.com',
    version: '0.1.0',
    betaUntil: '2026-11-15T00:00:00Z'
  };
  // In a web browser (https://neumarry.com/app/), sign-in links come back to this same page.
  // Inside the Android app the page runs on https://localhost and keeps the app link above.
  try {
    var host = location.hostname;
    if (location.protocol === 'https:' && host !== 'localhost' && !(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())) {
      c.redirect = location.origin + location.pathname.replace(/index\.html$/, '');
      c.web = true;
    }
  } catch (e) {}
  // Automated tests on this computer point the app at a local test server.
  try {
    var h = location.hostname;
    if (h === '127.0.0.1' || h === 'localhost') {
      var q = new URLSearchParams(location.search).get('api');
      var saved = localStorage.getItem('rm.testApi');
      if (q) { localStorage.setItem('rm.testApi', q); }
      if (q || saved) { c.url = q || saved; c.redirect = location.origin + location.pathname; }
      if (new URLSearchParams(location.search).get('web') === '1') c.web = true; // tests of the browser version
    }
  } catch (e) {}
  return c;
})();
