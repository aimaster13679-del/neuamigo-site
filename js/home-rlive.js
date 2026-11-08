/* Roots Live on the website (same look as the app, his ok 7 Nov 2026): MapLibre GL globes with Natural Earth relief
   (tiles.openfreemap.org, free), world-atlas country shapes, glowing roots lines with moving comets, glass city chips.
   Mounts #g-hero, #g-roots and #g-try (with the "Draw your roots line" chips). Falls back to nothing when WebGL is missing. */
(function(){
const PLACES={'Toronto':[43.65,-79.38],'Vancouver':[49.28,-123.12],'Montréal':[45.5,-73.57],'New York':[40.71,-74],'London':[51.5,-.12],'Dubai':[25.2,55.27],'Sydney':[-33.87,151.2],'Berlin':[52.52,13.4],'Houston':[29.76,-95.37],
 'Beirut':[33.89,35.5],'Jalisco':[20.66,-103.35],'Lagos':[6.52,3.38],'São Paulo':[-23.55,-46.63],'Busan':[35.18,129.08],'Gujarat':[23.02,72.57],'Manila':[14.6,120.98],'Warsaw':[52.23,21.01],'Nairobi':[-1.29,36.82],'Punjab':[31.33,75.57],'Karachi':[24.86,67]};
const FLAG={'Toronto':'🇨🇦','Vancouver':'🇨🇦','Montréal':'🇨🇦','New York':'🇺🇸','Houston':'🇺🇸','London':'🇬🇧','Dubai':'🇦🇪','Sydney':'🇦🇺','Berlin':'🇩🇪','Beirut':'🇱🇧','Jalisco':'🇲🇽','Lagos':'🇳🇬','São Paulo':'🇧🇷','Busan':'🇰🇷','Gujarat':'🇮🇳','Punjab':'🇮🇳','Manila':'🇵🇭','Warsaw':'🇵🇱','Nairobi':'🇰🇪','Karachi':'🇵🇰'};
const flagOf=p=>FLAG[p]||'';const FR=(document.documentElement.lang||'').indexOf('fr')===0;
const km=(a,b)=>{const t=x=>x*Math.PI/180,R=6371;const x=Math.sin(t(b[0]-a[0])/2)**2+Math.cos(t(a[0]))*Math.cos(t(b[0]))*Math.sin(t(b[1]-a[1])/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(x)))};
const BASE=(document.querySelector('script[src*="home-rlive"]')||{}).src||'';const ROOT=BASE.replace(/js\/home-rlive\.js.*$/,'');
const TILES=window.RL_TILES||'https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png';
const dark=()=>document.documentElement.dataset.theme==='dark';
function webgl(){try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'))}catch(e){return false}}

function rlSig(seed){let h=2166136261;for(const c of String(seed)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}let a=h>>>0;
 const R=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
 const d=document.documentElement.dataset.theme==='dark';const id='ws'+(h%1e7);const pal=d?[['#7EE7BC','#FFE27A'],['#B8F08A','#5FD3A2'],['#FFE27A','#9FE6C6'],['#5FD3A2','#D4F2B6']]:[['#0E9F6E','#E8B800'],['#5DBB2E','#0E9F6E'],['#E8B800','#3CC28C'],['#0E7A55','#9BD86A']];
 let defs='',lay='';for(let L=0;L<4;L++){const k=3+Math.floor(R()*6),ph=R()*6.28,A=26+L*7+R()*6,B=10+R()*14,C=R()*.35,p=pal[L];let path='';
  for(let i=0;i<=200;i++){const t=i/200*Math.PI*2,r=A+B*Math.cos(k*t+ph)+C*B*Math.cos((k*2+1)*t);path+=(i?'L':'M')+(100+r*Math.cos(t)).toFixed(1)+' '+(100+r*Math.sin(t)).toFixed(1)}
  defs+=`<linearGradient id="${id}g${L}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient>`;
  lay+=`<g class="rl-r" style="animation-duration:${40+L*18}s;animation-direction:${L%2?'reverse':'normal'}"><path d="${path}Z" fill="url(#${id}g${L})" fill-opacity="${d?.1:.13}" stroke="url(#${id}g${L})" stroke-width="${L===3?1.6:1.1}"/></g>`}
 return `<svg viewBox="0 0 200 200" aria-hidden="true"><defs>${defs}</defs>${lay}</svg>`}
function sigs(){document.querySelectorAll('.rl-sg[data-seed]').forEach(e=>e.innerHTML=rlSig(e.dataset.seed))}
sigs();new MutationObserver(sigs).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
if(!webgl())return;
let CJ=null;
function gc(a,b,n=80){const r=x=>x*Math.PI/180,d=x=>x*180/Math.PI;const[l1,p1]=a.map(r),[l2,p2]=b.map(r);const D=2*Math.asin(Math.sqrt(Math.sin((p2-p1)/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin((l2-l1)/2)**2));if(!D)return[a,b];const o=[];
 for(let i=0;i<=n;i++){const f=i/n,A=Math.sin((1-f)*D)/Math.sin(D),B=Math.sin(f*D)/Math.sin(D);const x=A*Math.cos(p1)*Math.cos(l1)+B*Math.cos(p2)*Math.cos(l2),y=A*Math.cos(p1)*Math.sin(l1)+B*Math.cos(p2)*Math.sin(l2),z=A*Math.sin(p1)+B*Math.sin(p2);
  let lon=d(Math.atan2(y,x));if(o.length){const pl=o[o.length-1][0];while(lon-pl>180)lon-=360;while(lon-pl<-180)lon+=360}o.push([lon,d(Math.atan2(z,Math.sqrt(x*x+y*y)))])}return o}
const ll=p=>[PLACES[p][1],PLACES[p][0]];
function style(){const L=!dark();return {version:8,projection:{type:'globe'},sky:{'atmosphere-blend':['interpolate',['linear'],['zoom'],0,1,5,.6,7,0]},
 sources:{relief:{type:'raster',tiles:[TILES],tileSize:512,maxzoom:TILES.indexOf('openfreemap')>0?6:3,attribution:'© Natural Earth · OpenFreeMap'},cc:{type:'geojson',data:CJ.c},bb:{type:'geojson',data:CJ.b},
  arcs:{type:'geojson',data:{type:'FeatureCollection',features:[]}},com:{type:'geojson',data:{type:'FeatureCollection',features:[]}}},
 layers:[{id:'bg',type:'background',paint:{'background-color':L?'#CFE9DE':'#0A1410'}},
  {id:'relief',type:'raster',source:'relief',paint:L?{'raster-saturation':.1,'raster-contrast':.08,'raster-hue-rotate':-22}:{'raster-saturation':-.3,'raster-brightness-max':.45,'raster-contrast':.15,'raster-hue-rotate':-18}},
  {id:'land',type:'fill',source:'cc',paint:{'fill-color':L?'#9FDCBE':'#3E6B55','fill-opacity':L?.32:.18}},
  {id:'bd',type:'line',source:'bb',paint:{'line-color':L?'rgba(255,255,255,.85)':'rgba(200,255,230,.16)','line-width':['interpolate',['linear'],['zoom'],0,.4,4,1]}},
  {id:'arcG',type:'line',source:'arcs',layout:{'line-cap':'round'},paint:{'line-color':['get','c'],'line-width':7,'line-blur':6,'line-opacity':.45}},
  {id:'arc',type:'line',source:'arcs',layout:{'line-cap':'round'},paint:{'line-color':['get','c'],'line-width':2,'line-opacity':.95}},
  {id:'comG',type:'circle',source:'com',paint:{'circle-radius':10,'circle-color':['get','c'],'circle-blur':1,'circle-opacity':.7}},
  {id:'com',type:'circle',source:'com',paint:{'circle-radius':3.5,'circle-color':'#FFFFFF','circle-stroke-color':['get','c'],'circle-stroke-width':2}}]}}
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function mount(el,o){const E={o,markers:[],touched:false};el.innerHTML='';el.classList.add('rl-g');
 const m=E.map=new maplibregl.Map({container:el,style:style(),center:o.center,zoom:o.zoom,attributionControl:{compact:true},dragRotate:false,pitchWithRotate:false,touchPitch:false,scrollZoom:false,cooperativeGestures:false,fadeDuration:0});
 if(o.padB)m.setPadding({top:0,bottom:o.padB,left:0,right:0});['mousedown','touchstart'].forEach(e=>m.on(e,()=>E.touched=true));const hide=()=>{const c=m.getCenter(),r=x=>x*Math.PI/180;E.markers.forEach(x=>{const l=x.getLngLat();const a=Math.acos(Math.min(1,Math.sin(r(c.lat))*Math.sin(r(l.lat))+Math.cos(r(c.lat))*Math.cos(r(l.lat))*Math.cos(r(c.lng-l.lng))))*180/Math.PI;x.getElement().style.visibility=a>62?'hidden':'visible'})};m.on('move',hide);E.hide=hide;
 E.set=(arcs)=>{E.arcs=arcs;if(!E.ready)return;const g=dark()?'#5FD3A2':'#0E9F6E',y=dark()?'#FFD95C':'#D9A800';
  const fs=arcs.map(([a,b],i)=>({type:'Feature',properties:{c:i%2?y:g},geometry:{type:'LineString',coordinates:gc(ll(a),ll(b))}}));E.fs=fs;m.getSource('arcs').setData({type:'FeatureCollection',features:fs});
  E.markers.forEach(x=>x.remove());const seen={};E.markers=[];arcs.forEach(([a,b],i)=>[a,b].forEach((p,j)=>{if(seen[p])return;seen[p]=1;const d=document.createElement('span');d.className='rl-mk'+(j?' to':'');d.innerHTML=`<i></i>${flagOf(p)} ${p}`;
   E.markers.push(new maplibregl.Marker({element:d,anchor:'bottom'}).setLngLat(ll(p)).addTo(m))}));hide()};
 m.on('load',()=>{E.ready=true;E.set(E.arcs||o.arcs||[]);if(reduce)return;let t0=performance.now(),fr=0;const step=now=>{if((fr=fr+1)%2||!E.fs){requestAnimationFrame(step);return}const f=((now-t0)/2600)%1;
  m.getSource('com').setData({type:'FeatureCollection',features:E.fs.map((F,i)=>{const cs=F.geometry.coordinates;return{type:'Feature',properties:{c:F.properties.c},geometry:{type:'Point',coordinates:cs[Math.floor(((f+i*.17)%1)*(cs.length-1))]}}})});
  if(o.spin&&!E.touched&&!m.isMoving()){const c=m.getCenter();m.setCenter([c.lng+o.spin,c.lat])}requestAnimationFrame(step)};requestAnimationFrame(step)});
 return E}
const $=id=>document.getElementById(id);const nar=innerWidth<700;
const G={};
function all(){if($('g-hero'))G.hero=mount($('g-hero'),{center:[10,22],zoom:nar?1.3:1.95,padB:nar?150:170,spin:.03,arcs:[['Beirut','Toronto'],['Jalisco','Toronto'],['Lagos','London'],['São Paulo','Toronto'],['Gujarat','Toronto'],['Busan','Vancouver'],['Manila','Dubai']]});
 if($('g-roots'))G.roots=mount($('g-roots'),{center:[-35,38],zoom:nar?.95:1.4,arcs:[['Beirut','Toronto'],['Jalisco','Toronto']]});
 if($('g-try')){let from='Lagos',to='Toronto';const T=G.tr=mount($('g-try'),{center:[-30,25],zoom:nar?1.1:1.5,arcs:[[from,to]]});
  const draw=()=>{G.tr.set([[from,to]]);const A=PLACES[from],B=PLACES[to];if(G.tr.map)G.tr.map.flyTo({center:[(A[1]+B[1])/2,(A[0]+B[0])/2],duration:1400});
   $('kmv').textContent=km(A,B).toLocaleString(FR?'fr-CA':'en')+' km';$('kmt').textContent=FR?`de ${flagOf(from)} ${from} à ${flagOf(to)} ${to}. Une ligne, deux chez-soi.`:`from ${flagOf(from)} ${from} to ${flagOf(to)} ${to}. One line, two homes.`};
  document.querySelectorAll('.chip.pk').forEach(b=>b.addEventListener('click',()=>{const k=b.dataset.k;document.querySelectorAll('.chip.pk[data-k="'+k+'"]').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});if(k==='from')from=b.dataset.v;else to=b.dataset.v;draw()}));draw()}}
function load(){const l=document.createElement('link');l.rel='stylesheet';l.href=ROOT+'js/rl/maplibre-gl.css';document.head.appendChild(l);
 const s=document.createElement('script');s.src=ROOT+'js/rl/maplibre-gl.js';s.onload=()=>fetch(ROOT+'js/rl/countries110.json').then(r=>r.json()).then(j=>{CJ=j;all();
   new MutationObserver(()=>{Object.keys(G).forEach(k=>{try{const E=G[k];const c=E.map.getCenter(),z=E.map.getZoom(),a=E.arcs;const el=E.map.getContainer();E.map.remove();G[k]=mount(el,Object.assign({},E.o,{center:[c.lng,c.lat],zoom:z,arcs:a}))}catch(e){}})}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']})});document.head.appendChild(s)}
load();
})();
