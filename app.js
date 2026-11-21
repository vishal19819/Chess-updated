/* ---------- game / UI ---------- */
let user=1,flip=false,sel=-1,hints=[],busy=false,over=false,res='',gm=[],keys=[],lastM=0,human=true,lvl=3,info='';
const key=()=>b.join(',')+side+castle+ep;
const G=['','♟','♞','♝','♜','♛','♚'];
function newGame(c){reset();user=c;flip=c==-1;sel=-1;hints=[];gm=[];keys=[key()];over=false;busy=false;lastM=0;info='';draw();if(side!=user)engineTurn()}
function insuf(){let n=0;for(let sq=0;sq<120;sq++){if(sq&0x88){sq+=7;continue}const t=Math.abs(b[sq]);if(t==1||t==4||t==5)return false;if(t==2||t==3)n++}return n<2}
function checkEnd(){
 if(!legal().length){over=true;res=inCheck(side)?(side==1?'Black':'White')+' wins by checkmate':'Draw by stalemate'}
 else if(half>=100){over=true;res='Draw by 50-move rule'}
 else if(keys.filter(k=>k==keys[keys.length-1]).length>=3){over=true;res='Draw by repetition'}
 else if(insuf()){over=true;res='Draw: insufficient material'}}
function play(m){const s=san(m),u=uci(m);make(m);gm.push({s,u});keys.push(key());lastM=m;sel=-1;hints=[];checkEnd();draw();if(!over&&side!=user)setTimeout(engineTurn,40)}
function bookMove(){
 if(gm.length>8)return 0;const o=BOOK[gm.map(x=>x.u).join(' ')];if(!o)return 0;
 const ls=legal(),ok=o.map(u=>ls.find(m=>uci(m)==u)).filter(Boolean);return ok.length?ok[Math.random()*ok.length|0]:0}
function engineTurn(){
 if(over)return;busy=true;draw();
 setTimeout(()=>{
  const L={...LV[lvl]};if(!human)L.mg=0;const t0=performance.now();
  let m=opMove()||planMove()||bookMove();info=m?'Opening book':'';
  if(!m){const r=think(L);m=r.m;info='Depth '+r.d+' · eval '+(r.sc>=0?'+':'')+(Math.abs(r.sc)>MATE-100?'mate':(r.sc/100).toFixed(2))+' (engine side) · '+nodes+' nodes'}
  const wait=human?Math.max(0,500+Math.random()*900-(performance.now()-t0)):0;
  setTimeout(()=>{busy=false;play(m)},wait)},30)}
function click(sq){
 if(busy||over||side!=user)return;
 if(sel>=0){const mv=legal().filter(m=>(m&255)==sel&&((m>>8)&255)==sq&&(((m>>16)&15)==0||((m>>16)&15)==5));if(mv.length){play(mv[0]);return}}
 if(b[sq]*user>0){sel=sq;hints=legal().filter(m=>(m&255)==sq).map(m=>(m>>8)&255)}else{sel=-1;hints=[]}
 draw()}
function undo(){
 if(busy||!gm.length)return;
 let n=(side==user)?2:1;while(n--&&gm.length){unmake();gm.pop();keys.pop()}
 over=false;lastM=0;sel=-1;hints=[];draw();if(side!=user)engineTurn()}
function draw(){
 let h='';const lf=lastM&255,lt=(lastM>>8)&255,ck=inCheck(side)?ks[side==1?0:1]:-1;
 for(let i=0;i<8;i++)for(let j=0;j<8;j++){
  const r=flip?7-i:i,f=flip?7-j:j,sq=r*16+f,p=b[sq];
  let c='c '+((r+f)%2?'d':'l');
  if(lastM&&(sq==lf||sq==lt))c+=' last';if(sq==sel)c+=' sel';if(sq==ck)c+=' chk';
  if(hints.includes(sq))c+=' hint'+(p?' cap':'');
  h+='<div class="'+c+'" data-s="'+sq+'">'+(p?'<span class="p '+(p>0?'w':'k')+'">'+G[Math.abs(p)]+'\uFE0E</span>':'')+'</div>'}
 document.getElementById('bd').innerHTML=h;
 document.getElementById('st').textContent=over?res:busy?'Engine is thinking…':side==user?(inCheck(side)?'Check — your move':'Your move'):'';
 document.getElementById('inf').textContent=info;document.getElementById('opn').textContent=opName();
 let t='';for(let i=0;i<gm.length;i+=2)t+=(i/2+1)+'. '+gm[i].s+' '+(gm[i+1]?gm[i+1].s:'')+'  ';
 document.getElementById('ml').textContent=t||'No moves yet.'}
document.getElementById('bd').addEventListener('click',e=>{const c=e.target.closest('[data-s]');if(c)click(+c.dataset.s)});
buildOps();newGame(1);
