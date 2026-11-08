/* Home page globes (hero, Two journeys, Draw your roots line). Real NASA Blue Marble / Black Marble textures, js/globe.js. */
import { mountGlobe, PLACES, km, flagOf } from './globe.js';
const FR = (document.documentElement.lang || '').startsWith('fr');
const $ = id => document.getElementById(id);
function safe(fn) { try { return fn(); } catch (e) { return null; } }
if ($('g-hero')) safe(() => mountGlobe($('g-hero'), { view: [24, -25], zoom: .92, arcs: [['Beirut', 'Toronto', '#FF4F97'], ['Jalisco', 'Toronto', '#FFC93C'], ['Lagos', 'London', '#FF4F97'], ['São Paulo', 'Toronto', '#7FD3FF'], ['Gujarat', 'Toronto', '#FFC93C'], ['Busan', 'Vancouver', '#7FD3FF'], ['Manila', 'Dubai', '#FF4F97']] }));
if ($('g-roots')) safe(() => mountGlobe($('g-roots'), { view: [32, -55], zoom: 1.0, spin: false, arcs: [['Beirut', 'Toronto', '#FF4F97'], ['Jalisco', 'Toronto', '#FFC93C']] }));
const tryG = $('g-try') && safe(() => mountGlobe($('g-try'), { view: [25, -30], zoom: 1.08, spin: false, arcs: [] }));
if (tryG) {
  let from = 'Lagos', to = 'Toronto';
  const mid = (A, B) => { const r = x => x * Math.PI / 180, v = p => [Math.cos(r(p[0])) * Math.cos(r(p[1])), Math.cos(r(p[0])) * Math.sin(r(p[1])), Math.sin(r(p[0]))];
    const a = v(A), b = v(B), m = [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; return [Math.atan2(m[2], Math.hypot(m[0], m[1])) * 180 / Math.PI, Math.atan2(m[1], m[0]) * 180 / Math.PI]; };
  const draw = () => { const A = PLACES[from], B = PLACES[to]; tryG.setArcs([[from, to, '#FF4F97']]); tryG.fly(...mid(A, B));
    $('kmv').textContent = km(A, B).toLocaleString(FR ? 'fr-CA' : 'en') + ' km';
    $('kmt').textContent = FR ? `de ${flagOf(from)} ${from} à ${flagOf(to)} ${to}. Une ligne, deux chez-soi.` : `from ${flagOf(from)} ${from} to ${flagOf(to)} ${to}. One line, two homes.`; };
  document.querySelectorAll('.chip.pk').forEach(b => b.addEventListener('click', () => { const k = b.dataset.k;
    document.querySelectorAll('.chip.pk[data-k="' + k + '"]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
    if (k === 'from') from = b.dataset.v; else to = b.dataset.v; draw(); }));
  draw();
}
