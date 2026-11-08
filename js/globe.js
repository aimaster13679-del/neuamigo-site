/* NeuMarry real globe: NASA Blue Marble (day) + Black Marble (city lights at night), soft atmosphere,
   glowing roots lines from where people grew up to the city they live in now. three.js, no network calls.
   Usage: mountGlobe(el, {arcs:[[from,to,colour]], view:[lat,lng], spin:true, zoom:1, labels:true}) -> api {fly(lat,lng), setArcs(list)} */
import * as THREE from './three.module.min.js';

export const PLACES = {
  'Toronto': [43.65, -79.38], 'Vancouver': [49.28, -123.12], 'Montréal': [45.5, -73.57], 'New York': [40.71, -74.0], 'London': [51.5, -0.12],
  'Dubai': [25.2, 55.27], 'Sydney': [-33.87, 151.2], 'Berlin': [52.52, 13.4], 'Houston': [29.76, -95.37],
  'Beirut': [33.89, 35.5], 'Jalisco': [20.66, -103.35], 'Lagos': [6.52, 3.38], 'São Paulo': [-23.55, -46.63], 'Busan': [35.18, 129.08],
  'Gujarat': [23.02, 72.57], 'Manila': [14.6, 120.98], 'Warsaw': [52.23, 21.01], 'Nairobi': [-1.29, 36.82], 'Punjab': [31.33, 75.57], 'Karachi': [24.86, 67.0]
};
const FLAG = { 'Toronto': '🇨🇦', 'Vancouver': '🇨🇦', 'Montréal': '🇨🇦', 'New York': '🇺🇸', 'Houston': '🇺🇸', 'London': '🇬🇧', 'Dubai': '🇦🇪', 'Sydney': '🇦🇺', 'Berlin': '🇩🇪',
  'Beirut': '🇱🇧', 'Jalisco': '🇲🇽', 'Lagos': '🇳🇬', 'São Paulo': '🇧🇷', 'Busan': '🇰🇷', 'Gujarat': '🇮🇳', 'Punjab': '🇮🇳', 'Manila': '🇵🇭', 'Warsaw': '🇵🇱', 'Nairobi': '🇰🇪', 'Karachi': '🇵🇰' };
export const flagOf = p => FLAG[p] || '';
const R = 1;
function v3(lat, lng, r = R) { const p = (90 - lat) * Math.PI / 180, t = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(-r * Math.sin(p) * Math.cos(t), r * Math.cos(p), r * Math.sin(p) * Math.sin(t)); }
export function km(a, b) { const t = x => x * Math.PI / 180, R = 6371; const x = Math.sin(t(b[0] - a[0]) / 2) ** 2 + Math.cos(t(a[0])) * Math.cos(t(b[0])) * Math.sin(t(b[1] - a[1]) / 2) ** 2; return Math.round(2 * R * Math.asin(Math.sqrt(x))); }

const VS = `varying vec2 vUv; varying vec3 vN; varying vec3 vW;
void main(){ vUv=uv; vN=normalize(normalMatrix*normal); vec4 w=modelViewMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*w; }`;
const FS = `uniform sampler2D dayT; uniform sampler2D nightT; uniform vec3 sun; uniform float lt;
varying vec2 vUv; varying vec3 vN; varying vec3 vW;
void main(){ vec3 n=normalize(vN); float d=dot(n,normalize(sun)); float k=smoothstep(-0.25,0.12,d);
 vec3 day=texture2D(dayT,vUv).rgb; vec3 night=texture2D(nightT,vUv).rgb;
 night=pow(night,vec3(1.35))*vec3(1.45,1.18,0.85)*1.6;
 float lu=dot(day,vec3(0.3,0.59,0.11)); vec3 dayL=(pow(day,vec3(0.85))+vec3(0.03,0.08,0.16)*(1.0-smoothstep(0.05,0.3,lu)))*(0.6+1.0*max(d,0.0));
 vec3 c=mix(night+day*0.035,dayL,k);
 vec3 v=normalize(-vW); float rim=pow(1.0-max(dot(n,v),0.0),3.0);
 c+=vec3(0.35,0.6,1.0)*rim*0.35*(0.35+0.65*k);
 // light theme: brighter, softer night
 vec3 sea=vec3(0.16,0.36,0.46)*(1.0-smoothstep(0.05,0.3,lu)); c=mix(c, (pow(day,vec3(0.8))*1.05+sea)*(0.78+0.35*max(d,0.0))+vec3(0.55,0.85,0.8)*rim*0.45, lt);
 vec3 h=normalize(normalize(sun)+v); float water=1.0-smoothstep(0.08,0.25,lu); float spec=pow(max(dot(n,h),0.0),60.0)*0.55*k*water;
 gl_FragColor=vec4(c+spec*vec3(0.8,0.9,1.0),1.0); }`;
const AVS = `varying vec3 vN; varying vec3 vW; void main(){ vN=normalize(normalMatrix*normal); vec4 w=modelViewMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*w; }`;
const AFS = `uniform vec3 col; uniform float lt; varying vec3 vN; varying vec3 vW; void main(){ vec3 v=normalize(-vW); float i=pow(max(0.0,0.62-dot(normalize(vN),v)),2.6); gl_FragColor=vec4(col,1.0)*i*(1.1-lt*0.45); }`;
const LVS = `varying float vt; void main(){ vt=uv.x; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
const LFS = `uniform vec3 col; uniform float time; uniform float draw; varying float vt;
void main(){ if(vt>draw) discard; float head=fract(time*0.35); float g=smoothstep(0.18,0.0,abs(vt-head)); float a=0.55+0.45*g;
 gl_FragColor=vec4(col*(1.0+1.2*g),a); }`;

export function mountGlobe(el, o = {}) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lt = () => { const th = document.documentElement.dataset.theme; if (th) return th === 'light' ? 1 : 0; return (o.light || matchMedia('(prefers-color-scheme: light)').matches) ? 1 : 0; };
  const W = () => el.clientWidth, H = () => el.clientHeight;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.setSize(W(), H());
  renderer.domElement.className = 'gl-c'; el.appendChild(renderer.domElement);
  const scene = new THREE.Scene(); const cam = new THREE.PerspectiveCamera(32, W() / H(), 0.1, 100); const fitZ = () => 4.1 / (o.zoom || 1) * Math.max(1, H() / Math.max(1, W())); cam.position.set(0, 0, fitZ());
  const loader = new THREE.TextureLoader(); const base = o.base || new URL('../img/earth/', import.meta.url).href;
  const dayT = loader.load(base + 'day.jpg'), nightT = loader.load(base + 'night.jpg');
  [dayT, nightT].forEach(t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; });
  const uni = { dayT: { value: dayT }, nightT: { value: nightT }, sun: { value: new THREE.Vector3(-0.35, 0.3, 1.0) }, lt: { value: lt() } };
  const earth = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 96), new THREE.ShaderMaterial({ uniforms: uni, vertexShader: VS, fragmentShader: FS }));
  const group = new THREE.Group(); group.add(earth); scene.add(group);
  const atm = new THREE.Mesh(new THREE.SphereGeometry(R * 1.07, 64, 64), new THREE.ShaderMaterial({ uniforms: { col: { value: new THREE.Color(0.38, 0.62, 1.0) }, lt: { value: lt() } }, vertexShader: AVS, fragmentShader: AFS, blending: THREE.AdditiveBlending, side: THREE.BackSide, transparent: true, depthWrite: false }));
  scene.add(atm);
  /* arcs + pins */
  let arcs = [], labels = [];
  const lay = document.createElement('div'); lay.className = 'gl-lay'; el.appendChild(lay);
  function clearArcs() { arcs.forEach(a => { group.remove(a.line); group.remove(a.p1); group.remove(a.p2); }); arcs = []; labels.forEach(l => l.el.remove()); labels = []; }
  function pin(lat, lng, col) { const pos = v3(lat, lng, R * 1.004);
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.013, 16, 16), new THREE.MeshBasicMaterial({ color: col })); m.position.copy(pos);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.02, 0.032, 40), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .6, side: THREE.DoubleSide, depthWrite: false }));
    ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize()); m.add(ring); m.userData.ring = ring; group.add(m); return m; }
  function label(name, pos, kind) { const d = document.createElement('span'); d.className = 'gl-l ' + kind; d.textContent = `${flagOf(name)} ${name}`; lay.appendChild(d); labels.push({ el: d, pos }); }
  function setArcs(list, animate = true) {
    clearArcs(); const seen = {};
    list.forEach(([a, b, col], i) => {
      const A = PLACES[a], B = PLACES[b]; if (!A || !B) return; const c = new THREE.Color(col || '#FF4F97');
      const s = v3(A[0], A[1]), e = v3(B[0], B[1]); const dist = s.distanceTo(e); const mid = s.clone().add(e).multiplyScalar(.5).normalize().multiplyScalar(R + dist * .38);
      const curve = new THREE.QuadraticBezierCurve3(s.clone().multiplyScalar(1.004), mid, e.clone().multiplyScalar(1.004));
      const g = new THREE.TubeGeometry(curve, 120, o.tube || 0.0075, 8, false);
      const mat = new THREE.ShaderMaterial({ uniforms: { col: { value: c }, time: { value: i * .7 }, draw: { value: animate && !reduce ? 0 : 1 } }, vertexShader: LVS, fragmentShader: LFS, transparent: true, depthWrite: false });
      const line = new THREE.Mesh(g, mat); group.add(line);
      const p1 = pin(A[0], A[1], c), p2 = pin(B[0], B[1], new THREE.Color('#FFFFFF'));
      arcs.push({ line, mat, p1, p2, d: i * .25 });
      if (o.labels !== false) { if (!seen[a]) { label(a, s, 'from'); seen[a] = 1; } if (!seen[b]) { label(b, e, 'to'); seen[b] = 1; } }
    });
  }
  setArcs(o.arcs || []);
  /* view + interaction */
  let rotY = 0, rotX = 0, target = null, drag = null, idle = 0;
  function look(lat, lng) { return [-(lng + 90) * Math.PI / 180, lat * Math.PI / 180 * .9]; }
  [rotY, rotX] = look(...(o.view || [30, -40]));
  function fly(lat, lng) { target = look(lat, lng); idle = 0; }
  el.addEventListener('pointerdown', e => { drag = [e.clientX, e.clientY, rotY, rotX]; target = null; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', e => { if (!drag) return; rotY = drag[2] + (e.clientX - drag[0]) * .006; rotX = Math.max(-1.1, Math.min(1.1, drag[3] + (e.clientY - drag[1]) * .004)); });
  const up = () => { drag = null; idle = 0; }; el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  el.style.touchAction = 'pan-y';
  const ro = new ResizeObserver(() => { renderer.setSize(W(), H()); cam.aspect = W() / H(); cam.position.z = fitZ(); cam.updateProjectionMatrix(); }); ro.observe(el);
  const clock = new THREE.Clock(); let vis = true;
  new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(el);
  const tmp = new THREE.Vector3(), nrm = new THREE.Vector3();
  function frame() {
    requestAnimationFrame(frame); if (!vis) return; const dt = Math.min(clock.getDelta(), .05), T = clock.elapsedTime;
    if (target) { rotY += (target[0] - rotY) * .06; rotX += (target[1] - rotX) * .06; if (Math.abs(target[0] - rotY) < .002) target = null; }
    else if (!drag && o.spin !== false && !reduce) { idle += dt; if (idle > 1.5) rotY += dt * .05; }
    group.rotation.set(rotX, rotY, 0);
    uni.lt.value = lt(); atm.material.uniforms.lt.value = lt();
    arcs.forEach(a => { a.mat.uniforms.time.value = T + a.d * 3; if (a.mat.uniforms.draw.value < 1) a.mat.uniforms.draw.value = Math.min(1, Math.max(0, (T - a.d) * .7));
      const s = 1 + .35 * Math.sin(T * 2.4 + a.d * 4); [a.p1, a.p2].forEach(p => { if (p.userData.ring) p.userData.ring.scale.setScalar(reduce ? 1 : s); }); });
    const w = W(), h = H(); group.updateMatrixWorld();
    labels.forEach(l => { tmp.copy(l.pos).multiplyScalar(1.03).applyMatrix4(group.matrixWorld); nrm.copy(tmp).normalize();
      const facing = nrm.dot(tmp.clone().sub(cam.position).negate().normalize()); tmp.project(cam);
      const lw = l.el.offsetWidth || 80, x = Math.max(lw / 2 + 4, Math.min(w - lw / 2 - 4, (tmp.x * .5 + .5) * w)), y = Math.max(30, (-tmp.y * .5 + .5) * h); l.el.style.transform = `translate(${x}px,${y}px) translate(-50%,-140%)`; l.el.style.opacity = facing > .18 ? 1 : 0; });
    renderer.render(scene, cam);
  }
  frame();
  return { fly, setArcs, el };
}
