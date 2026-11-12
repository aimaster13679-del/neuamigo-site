/* NeuAmigo globe (12 Nov 2026): HD canvas globe, our own drawing (d3-geo + Natural Earth 110m). Sapphire ocean,
   light land, live routes between many countries with a moving marker, slow spin. No tiles, works offline. */
function naGlobe(cv,world,opt){opt=opt||{};const ctx=cv.getContext('2d'),dpr=Math.min(3,window.devicePixelRatio||1);
  let W=0,R=0;function size(){const w=cv.clientWidth;W=w;cv.width=w*dpr;cv.height=w*dpr;R=w*0.41}size();
  const land=world.c||world;const proj=d3.geoOrthographic().clipAngle(90),path=d3.geoPath(proj,ctx),grat=d3.geoGraticule10();
  const C={lagos:[3.38,6.52],toronto:[-79.38,43.65],manila:[120.98,14.6],dubai:[55.27,25.2],mexico:[-99.13,19.43],madrid:[-3.7,40.42],seoul:[126.98,37.57],sydney:[151.2,-33.87],mumbai:[72.88,19.08],london:[-0.13,51.51],saopaulo:[-46.63,-23.55],lisbon:[-9.14,38.72],nairobi:[36.82,-1.29],berlin:[13.4,52.52],warsaw:[21.0,52.23],ny:[-74.0,40.71]};
  const RT=opt.routes||[['lagos','toronto'],['manila','dubai'],['mexico','madrid'],['seoul','sydney'],['mumbai','london'],['saopaulo','lisbon'],['nairobi','berlin'],['warsaw','ny']];
  const routes=RT.map(([a,b],i)=>({a:C[a],b:C[b],ip:d3.geoInterpolate(C[a],C[b]),off:i*0.9}));
  let rot=opt.start||[20,-18],t0=performance.now(),still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,raf=0;
  function rr(x,y,s,r){ctx.beginPath();ctx.moveTo(x-s+r,y-s);ctx.arcTo(x+s,y-s,x+s,y+s,r);ctx.arcTo(x+s,y+s,x-s,y+s,r);ctx.arcTo(x-s,y+s,x-s,y-s,r);ctx.arcTo(x-s,y-s,x+s,y-s,r);ctx.closePath()}
  function vis(p){const r=proj.rotate();return d3.geoDistance(p,[-r[0],-r[1]])<Math.PI/2-0.12}
  function draw(now){const t=(now-t0)/1000;if(!still)rot=[(opt.start?opt.start[0]:20)+t*6,-18];
    const s=W/2;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,W);proj.translate([s,s]).scale(R).rotate(rot);
    /* atmosphere */
    let g=ctx.createRadialGradient(s,s,R*0.96,s,s,R*1.22);g.addColorStop(0,'rgba(91,155,255,.55)');g.addColorStop(.35,'rgba(91,155,255,.18)');g.addColorStop(1,'rgba(91,155,255,0)');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(s,s,R*1.22,0,7);ctx.fill();
    /* ocean */
    g=ctx.createRadialGradient(s-R*.35,s-R*.4,R*.1,s,s,R*1.02);g.addColorStop(0,'#3B82F6');g.addColorStop(.45,'#1557C8');g.addColorStop(1,'#071E52');
    ctx.fillStyle=g;ctx.beginPath();path({type:'Sphere'});ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=.7;ctx.beginPath();path(grat);ctx.stroke();
    /* land */
    g=ctx.createLinearGradient(s-R,s-R,s+R,s+R);g.addColorStop(0,'#FFFFFF');g.addColorStop(1,'#C9D9F7');
    ctx.fillStyle=g;ctx.beginPath();path(land);ctx.fill();
    ctx.strokeStyle='rgba(21,87,200,.28)';ctx.lineWidth=.6;ctx.beginPath();path(land);ctx.stroke();
    /* routes */
    routes.forEach((r,i)=>{const cyc=((t*0.28+r.off*0.37)%1.6),p=Math.min(1,cyc),fade=cyc>1.25?Math.max(0,1-(cyc-1.25)/0.35):1;
      const d=d3.geoDistance(r.a,r.b),hh=Math.min(.32,.08+d*.12),lift=(c,f)=>{const[x,y]=proj(c),rv=proj.rotate(),cv=Math.max(0,Math.cos(d3.geoDistance(c,[-rv[0],-rv[1]])));const k=1+hh*Math.sin(Math.PI*f)*cv;return[s+(x-s)*k,s+(y-s)*k]};
      ctx.save();ctx.globalAlpha=fade;ctx.shadowColor='rgba(255,255,255,.95)';ctx.shadowBlur=10;ctx.strokeStyle=i%2?'#FFFFFF':'#A9C8FF';ctx.lineWidth=2.4;ctx.lineCap='round';ctx.beginPath();let on=false;
      for(let k=0;k<=60;k++){const f=k/60*p,c=r.ip(f);if(!vis(c)){on=false;continue}const[x,y]=lift(c,f);if(on)ctx.lineTo(x,y);else{ctx.moveTo(x,y);on=true}}ctx.stroke();ctx.restore();
      const head=r.ip(p);if(vis(head)&&p<1){const[x,y]=lift(head,p);ctx.save();ctx.globalAlpha=fade;ctx.shadowColor='#fff';ctx.shadowBlur=14;ctx.fillStyle='#fff';rr(x,y,4,1.8);ctx.fill();ctx.restore()}
      [r.a,r.b].forEach((c,j)=>{if(!vis(c))return;const[x,y]=proj(c);const pl=(t*1.2+i*.5+j*.7)%1;ctx.save();ctx.globalAlpha=(1-pl)*.7*fade;ctx.strokeStyle='#fff';ctx.lineWidth=1.4;rr(x,y,4+pl*9,3);ctx.stroke();ctx.restore();
        ctx.save();ctx.globalAlpha=fade;ctx.fillStyle=j?'#FFFFFF':'#A9C8FF';ctx.strokeStyle='#0F52BA';ctx.lineWidth=1.4;rr(x,y,4,1.8);ctx.fill();ctx.stroke();ctx.restore()})});
    /* light + depth */
    g=ctx.createRadialGradient(s-R*.42,s-R*.48,0,s-R*.2,s-R*.25,R*1.1);g.addColorStop(0,'rgba(255,255,255,.28)');g.addColorStop(.4,'rgba(255,255,255,.04)');g.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle=g;ctx.beginPath();path({type:'Sphere'});ctx.fill();
    g=ctx.createRadialGradient(s,s,R*.72,s,s,R);g.addColorStop(0,'rgba(3,12,40,0)');g.addColorStop(1,'rgba(3,12,40,.42)');
    ctx.fillStyle=g;ctx.beginPath();path({type:'Sphere'});ctx.fill();
    if(!still&&cv.isConnected!==false)raf=requestAnimationFrame(draw)}
  raf=requestAnimationFrame(draw);return{stop(){cancelAnimationFrame(raf)},size}}
