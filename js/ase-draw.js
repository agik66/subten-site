/* ============================================================
   SUBTEN — App Store screenshot editor (live canvas)
   Draws each frame at 1290×2796, identical to the export set.
   ============================================================ */
const ASE = (function () {
  const W = 1290, H = 2796;
  const STRONG_LIGHT = { '#4FD389':'#1F9E59', '#9B87E5':'#6A4FC6', '#ED9A57':'#D9772A', '#5FD0E8':'#2298C6' };

  function hexToRgb(h){ const n=parseInt(h.slice(1),16); return [(n>>16)&255,(n>>8)&255,n&255]; }
  function rgba(h,a){ const [r,g,b]=hexToRgb(h); return `rgba(${r},${g},${b},${a})`; }
  function rr(ctx,x,y,w,h,r){ if(ctx.roundRect){ctx.beginPath();ctx.roundRect(x,y,w,h,r);return;} ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath(); }

  const DISPLAY = '"Schibsted Grotesk", Arial, sans-serif';

  function headline(ctx,text,x,y,maxW,size,lh,accent,baseCol){
    ctx.font=`800 ${size}px ${DISPLAY}`; ctx.textBaseline='top';
    const sp=ctx.measureText(' ').width;
    const words=text.split(/\s+/).filter(Boolean).map(w=>({t:w.replace(/^\*|\*$/g,''),acc:/^\*.*\*?$/.test(w)&&w.startsWith('*')}));
    const lines=[]; let line=[],lw=0;
    for(const wd of words){ const ww=ctx.measureText(wd.t).width; if(lw>0&&lw+sp+ww>maxW){lines.push(line);line=[];lw=0;} line.push({...wd,w:ww}); lw+=(lw>0?sp:0)+ww; }
    if(line.length)lines.push(line);
    lines.forEach((ln,i)=>{ let cx=x; const cy=y+i*lh; ln.forEach(wd=>{ ctx.fillStyle=wd.acc?accent:baseCol; ctx.fillText(wd.t,cx,cy); cx+=wd.w+sp; }); });
    return y+lines.length*lh;
  }

  // draw onto a provided canvas (sized W×H)
  function draw(canvas, opts){
    const { img, accent, head, theme } = opts;
    const light = theme==='light';
    const ctx = canvas.getContext('2d');
    const base = light?'#F1F0EC':'#070908';
    const headCol = light?'#16160F':'#F4F7F4';
    const accHi = light?(STRONG_LIGHT[accent]||accent):accent;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle=base; ctx.fillRect(0,0,W,H);
    let lg=ctx.createLinearGradient(0,0,0,H*0.5); lg.addColorStop(0,rgba(accent,light?0.14:0.16)); lg.addColorStop(1,light?'rgba(241,240,236,0)':'rgba(7,9,8,0)');
    ctx.fillStyle=lg; ctx.fillRect(0,0,W,H*0.5);
    let vg=ctx.createLinearGradient(0,H*0.6,0,H); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,light?'rgba(40,50,45,0.06)':'rgba(0,0,0,0.45)');
    ctx.fillStyle=vg; ctx.fillRect(0,H*0.6,W,H*0.4);
    headline(ctx, head||'', 110, 176, 1070, 94, 102, accHi, headCol);
    const phoneW=858, phoneH=Math.round(phoneW*2868/1320), phoneX=(W-phoneW)/2, phoneY=792;
    let rg=ctx.createRadialGradient(W/2,phoneY+760,60,W/2,phoneY+760,760); rg.addColorStop(0,rgba(accent,light?0.16:0.22)); rg.addColorStop(1,rgba(accent,0));
    ctx.fillStyle=rg; ctx.fillRect(0,phoneY-120,W,phoneH+300);
    ctx.save(); ctx.shadowColor=light?'rgba(45,55,50,0.28)':'rgba(0,0,0,0.55)'; ctx.shadowBlur=light?100:120; ctx.shadowOffsetY=light?45:60;
    const bodyR=Math.round(phoneW*0.135);
    const bg=ctx.createLinearGradient(phoneX,phoneY,phoneX+phoneW,phoneY+phoneH);
    if(light){bg.addColorStop(0,'#fdfdfe');bg.addColorStop(0.6,'#cfd3d5');}else{bg.addColorStop(0,'#2a2e2c');bg.addColorStop(0.6,'#0c0d0c');}
    ctx.fillStyle=bg; rr(ctx,phoneX,phoneY,phoneW,phoneH,bodyR); ctx.fill(); ctx.restore();
    ctx.lineWidth=2; ctx.strokeStyle=light?'rgba(0,0,0,0.10)':'rgba(255,255,255,0.10)'; rr(ctx,phoneX+1,phoneY+1,phoneW-2,phoneH-2,bodyR-1); ctx.stroke();
    const bz=Math.round(phoneW*0.028), sx=phoneX+bz, sy=phoneY+bz, sw=phoneW-2*bz, sh=phoneH-2*bz, scR=Math.round(phoneW*0.105);
    ctx.save(); rr(ctx,sx,sy,sw,sh,scR); ctx.clip();
    if(img && img.width){
      const ir=img.width/img.height, sr=sw/sh; let dw,dh,dx,dy;
      if(ir>sr){dh=sh;dw=sh*ir;dx=sx-(dw-sw)/2;dy=sy;}else{dw=sw;dh=sw/ir;dx=sx;dy=sy-(dh-sh)/2;}
      ctx.drawImage(img,dx,dy,dw,dh);
    } else {
      ctx.fillStyle = light?'#e9e8e3':'#15191600'; ctx.fillRect(sx,sy,sw,sh);
      ctx.fillStyle = light?'#8E928A':'#6E776F'; ctx.font=`600 34px ${DISPLAY}`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('Pretiahni screenshot sem', sx+sw/2, sy+sh/2); ctx.textAlign='left';
    }
    ctx.restore();
  }

  return { W, H, draw };
})();
