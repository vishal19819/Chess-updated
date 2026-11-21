const INF=1e5,MATE=5e4,PV=[0,100,320,330,500,900,0];
const ND=[-33,-31,-18,-14,14,18,31,33],KD=[-17,-16,-15,-1,1,15,16,17],BD=[-17,-15,15,17],RD=[-16,-1,1,16];
const CM=new Array(128).fill(15);CM[116]=12;CM[119]=14;CM[112]=13;CM[4]=3;CM[7]=11;CM[0]=7;
let b=new Array(128).fill(0),side=1,castle=15,ep=-1,half=0,ks=[116,4],stack=[];
let nodes=0,tEnd=0,stop=false,killers=[];
function reset(){b.fill(0);const bk=[4,2,3,5,6,3,2,4];for(let f=0;f<8;f++){b[f]=-bk[f];b[16+f]=-1;b[96+f]=1;b[112+f]=bk[f]}b[3]=-5;b[4]=-6;b[115]=5;b[116]=6;side=1;castle=15;ep=-1;half=0;ks=[116,4];stack=[]}
function att(sq,by){
 for(const d of by==1?[15,17]:[-15,-17]){const s=sq+d;if(!(s&0x88)&&b[s]==by)return true}
 for(const d of ND){const s=sq+d;if(!(s&0x88)&&b[s]==by*2)return true}
 for(const d of KD){const s=sq+d;if(!(s&0x88)&&b[s]==by*6)return true}
 for(const d of BD){let s=sq+d;while(!(s&0x88)){const p=b[s];if(p){if(p==by*3||p==by*5)return true;break}s+=d}}
 for(const d of RD){let s=sq+d;while(!(s&0x88)){const p=b[s];if(p){if(p==by*4||p==by*5)return true;break}s+=d}}
 return false}
const inCheck=s=>att(ks[s==1?0:1],-s);
function gen(q){
 const o=[],s=side,add=(f,t,pr,fl)=>o.push(f|(t<<8)|(pr<<16)|(fl<<20));
 for(let sq=0;sq<120;sq++){
  if(sq&0x88){sq+=7;continue}
  const p=b[sq];if(!p||p*s<0)continue;const t=p*s;
  if(t==1){
   const fw=s==1?-16:16,r=sq>>4,p7=s==1?1:6,st=s==1?6:1,t1=sq+fw;
   const pm=to=>{add(sq,to,5,0);if(!q)for(const x of[4,3,2])add(sq,to,x,0)};
   if(!b[t1]){if(r==p7)pm(t1);else if(!q){add(sq,t1,0,0);if(r==st&&!b[t1+fw])add(sq,t1+fw,0,4)}}
   for(const d of[fw-1,fw+1]){const to=sq+d;if(to&0x88)continue;
    if(b[to]*s<0){if(r==p7)pm(to);else add(sq,to,0,0)}else if(to==ep&&!b[to])add(sq,to,0,1)}
  }else if(t==2||t==6){
   for(const d of t==2?ND:KD){const to=sq+d;if(to&0x88)continue;const c=b[to];if(!c){if(!q)add(sq,to,0,0)}else if(c*s<0)add(sq,to,0,0)}
   if(t==6&&!q){
    if(s==1&&sq==116){
     if((castle&1)&&!b[117]&&!b[118]&&b[119]==4&&!att(116,-1)&&!att(117,-1)&&!att(118,-1))add(116,118,0,2);
     if((castle&2)&&!b[115]&&!b[114]&&!b[113]&&b[112]==4&&!att(116,-1)&&!att(115,-1)&&!att(114,-1))add(116,114,0,2);
    }else if(s==-1&&sq==4){
     if((castle&4)&&!b[5]&&!b[6]&&b[7]==-4&&!att(4,1)&&!att(5,1)&&!att(6,1))add(4,6,0,2);
     if((castle&8)&&!b[3]&&!b[2]&&!b[1]&&b[0]==-4&&!att(4,1)&&!att(3,1)&&!att(2,1))add(4,2,0,2);
    }}
  }else{
   for(const d of t==3?BD:t==4?RD:KD){let to=sq+d;while(!(to&0x88)){const c=b[to];if(!c){if(!q)add(sq,to,0,0)}else{if(c*s<0)add(sq,to,0,0);break}to+=d}}
  }}
 return o}
function make(m){
 const f=m&255,t=(m>>8)&255,pr=(m>>16)&15,fl=m>>20,p=b[f],u={m,cap:b[t],castle,ep,half};stack.push(u);
 b[t]=pr?side*pr:p;b[f]=0;
 if(fl&1){const cs=t+(side==1?16:-16);u.cap=b[cs];b[cs]=0}
 if(fl&2){if(t>f){b[t-1]=b[t+1];b[t+1]=0}else{b[t+1]=b[t-2];b[t-2]=0}}
 if(Math.abs(p)==6)ks[side==1?0:1]=t;
 ep=(fl&4)?(f+t)>>1:-1;castle&=CM[f]&CM[t];
 half=(Math.abs(p)==1||u.cap)?0:half+1;side=-side}
function unmake(){
 const u=stack.pop(),m=u.m,f=m&255,t=(m>>8)&255,pr=(m>>16)&15,fl=m>>20;
 side=-side;castle=u.castle;ep=u.ep;half=u.half;
 const p=pr?side:b[t];b[f]=p;
 if(fl&1){b[t]=0;b[t+(side==1?16:-16)]=u.cap}else b[t]=u.cap;
 if(fl&2){if(t>f){b[t+1]=b[t-1];b[t-1]=0}else{b[t-2]=b[t+1];b[t+1]=0}}
 if(Math.abs(p)==6)ks[side==1?0:1]=f}
function legal(){const r=[];for(const m of gen(false)){make(m);if(!inCheck(-side))r.push(m);unmake()}return r}
function ev(){
 let sc=0,nm=0,bw=0,bb=0;
 for(let sq=0;sq<120;sq++){if(sq&0x88){sq+=7;continue}const t=Math.abs(b[sq]);if(t>1&&t<6)nm+=PV[t]}
 const eg=nm<2400;
 for(let sq=0;sq<120;sq++){
  if(sq&0x88){sq+=7;continue}
  const p=b[sq];if(!p)continue;
  const s=p>0?1:-1,t=p*s,r=sq>>4,f=sq&7,rr=s==1?7-r:r,cen=(14-Math.abs(2*f-7)-Math.abs(2*r-7))/2;
  let v=PV[t];
  if(t==1)v+=rr*7+(rr<5?cen*2:rr*8);
  else if(t==2)v+=cen*9-(rr==0?12:0);
  else if(t==3){v+=cen*5-(rr==0?10:0);s==1?bw++:bb++}
  else if(t==4)v+=rr==6?18:0;
  else if(t==5)v+=cen;
  else v+=eg?cen*10:(rr==0?((f<=2||f>=6)?35:0):-rr*20);
  sc+=s*v}
 if(bw>1)sc+=30;if(bb>1)sc-=30;
 return side==1?sc:-sc}
function sortM(ms,ply){
 const k=killers[ply],sc=ms.map(m=>{const f=m&255,t=(m>>8)&255,c=b[t];let s=0;
  if(c)s=10000+PV[Math.abs(c)]*10-PV[Math.abs(b[f])]/10;else if((m>>20)&1)s=10050;
  if(((m>>16)&15)==5)s+=9000;
  if(!c&&k){if(k[0]==m)s=5000;else if(k[1]==m)s=4900}return s});
 return ms.map((_,i)=>i).sort((x,y)=>sc[y]-sc[x]).map(i=>ms[i])}
function qs(a,bt,ply){
 if((++nodes&2047)===0&&performance.now()>tEnd)stop=true;
 if(stop)return 0;
 const st=ev();if(ply>40||st>=bt)return st;if(st>a)a=st;
 for(const m of sortM(gen(true),ply)){
  make(m);if(inCheck(-side)){unmake();continue}
  const sc=-qs(-bt,-a,ply+1);unmake();if(stop)return 0;
  if(sc>=bt)return sc;if(sc>a)a=sc}
 return a}
function ab(d,a,bt,ply){
 if((++nodes&2047)===0&&performance.now()>tEnd)stop=true;
 if(stop)return 0;
 const chk=inCheck(side);if(chk&&ply<30)d++;
 if(d<=0)return qs(a,bt,ply);
 if(half>=100)return 0;
 let best=-INF,n=0;
 for(const m of sortM(gen(false),ply)){
  make(m);if(inCheck(-side)){unmake();continue}
  n++;const sc=-ab(d-1,-bt,-a,ply+1);unmake();
  if(stop)return 0;
  if(sc>best){best=sc;if(sc>a){a=sc;if(a>=bt){
   if(!b[(m>>8)&255]){const k=killers[ply]||(killers[ply]=[0,0]);if(k[0]!=m){k[1]=k[0];k[0]=m}}
   break}}}}
 if(!n)return chk?-MATE+ply:0;
 return best}
function think(L){
 tEnd=performance.now()+L.t;stop=false;nodes=0;killers=[];
 let root=legal();if(root.length==1)return{m:root[0],sc:0,d:0};
 root=sortM(root,0);let best=root[0],bs=0,done=0,ord=root;
 for(let d=1;d<=L.d;d++){
  let a=-INF,cm=null,cs=-INF;ord=[best,...root.filter(x=>x!=best)];
  for(const m of ord){make(m);const sc=-ab(d-1,-INF,-a,1);unmake();if(stop)break;if(sc>cs){cs=sc;cm=m;if(sc>a)a=sc}}
  if(stop)break;best=cm;bs=cs;done=d;if(Math.abs(bs)>MATE-50)break}
 let mg=L.mg;if(bs>300)mg*=.5;if(Math.abs(bs)>1500||bs<-300)mg=0;
 const c=[{m:best,sc:bs}];
 if(mg>0&&done>0){
  tEnd=performance.now()+L.t*.6;stop=false;
  for(const m of ord){if(m==best)continue;make(m);const sc=-ab(done-1,-(bs+1),-(bs-mg-1),1);unmake();if(stop)break;if(sc>=bs-mg)c.push({m,sc})}
 }
 let pick=best;
 if(c.length>1){
  const w=c.map(x=>Math.exp(-(bs-x.sc)/(mg/2.5+1))*(b[(x.m>>8)&255]||(x.m>>20)&2?1.3:1));
  let r=Math.random()*w.reduce((x,y)=>x+y,0);for(let i=0;i<c.length;i++){r-=w[i];if(r<=0){pick=c[i].m;break}}}
 return{m:pick,sc:bs,d:done}}
const LV={1:{d:2,t:300,mg:160},2:{d:3,t:700,mg:80},3:{d:5,t:1600,mg:40},4:{d:7,t:2800,mg:20},5:{d:14,t:5000,mg:0}};
const BOOK={"":["e2e4","d2d4","g1f3","c2c4"],"e2e4":["e7e5","c7c5","e7e6","c7c6"],"d2d4":["d7d5","g8f6"],"c2c4":["e7e5","g8f6"],"g1f3":["d7d5","g8f6"],
"e2e4 e7e5":["g1f3"],"e2e4 e7e5 g1f3":["b8c6","g8f6"],"e2e4 e7e5 g1f3 b8c6":["f1b5","f1c4","d2d4"],"e2e4 c7c5":["g1f3","b1c3"],"e2e4 c7c5 g1f3":["d7d6","b8c6","e7e6"],
"e2e4 e7e6":["d2d4"],"e2e4 c7c6":["d2d4"],"d2d4 d7d5":["c2c4","g1f3"],"d2d4 g8f6":["c2c4","g1f3"],"d2d4 d7d5 c2c4":["e7e6","c7c6"],"d2d4 g8f6 c2c4":["e7e6","g7g6"]};
const sqn=s=>'abcdefgh'[s&7]+(8-(s>>4));
const uci=m=>sqn(m&255)+sqn((m>>8)&255)+(((m>>16)&15)?'xxnbrq'[(m>>16)&15]:'');
function san(m){
 const f=m&255,t=(m>>8)&255,pr=(m>>16)&15,fl=m>>20,p=Math.abs(b[f]);let s='';
 if(fl&2)s=t>f?'O-O':'O-O-O';
 else{const cap=b[t]||(fl&1);
  if(p==1){if(cap)s+='abcdefgh'[f&7]+'x'}
  else{s+='xxNBRQK'[p];
   const o=legal().filter(x=>x!=m&&((x>>8)&255)==t&&Math.abs(b[x&255])==p);
   if(o.length){if(o.every(x=>(x&7)!=(f&7)))s+='abcdefgh'[f&7];else if(o.every(x=>((x&255)>>4)!=(f>>4)))s+=8-(f>>4);else s+=sqn(f)}
   if(cap)s+='x'}
  s+=sqn(t);if(pr)s+='='+'xxNBRQ'[pr]}
 make(m);const c=inCheck(side),h=c?legal().length:1;unmake();
 if(c)s+=h?'+':'#';return s}
