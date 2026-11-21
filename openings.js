/* ---------- openings ---------- */
const RAW=[
["Ruy Lopez (Spanish)","e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O|e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8"],
["Italian Game","e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O|e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6"],
["Evans Gambit","e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7 Ng5 O-O"],
["Scotch Game","e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7 Qe2 Nd5 c4 Ba6"],
["Four Knights Game","e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3 d6"],
["Vienna Game","e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d3 Nxc3 bxc3 O-O"],
["Bishop’s Opening","e4 e5 Bc4 Nf6 d3 c6 Nf3 d5 Bb3 Bd6 O-O O-O"],
["King’s Gambit","e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5 exd5 Bd6"],
["Danish Gambit","e4 e5 d4 exd4 c3 dxc3 Bc4 cxb2 Bxb2 d5 Bxd5 Nf6"],
["Petrov Defence","e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7"],
["Philidor Defence","e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 O-O O-O"],
["Sicilian Defence","e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O|e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Bd7|e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 Be7 O-O O-O f4 Nc6|e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Nd5 Be7|e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6 Bc4 Nb6 Bb5 dxe5 Nxe5 Bd7|e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 Be3 Nf6"],
["Sicilian: Smith-Morra Gambit","e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6 O-O Nf6"],
["French Defence","e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O|e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 Nh6|e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7"],
["Caro-Kann Defence","e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7|e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O Ne7"],
["Scandinavian Defence","e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6 Bc4 Bf5"],
["Pirc Defence","e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6"],
["Modern Defence","e4 g6 d4 Bg7 Nc3 d6 Be3 a6 Qd2 b5"],
["Alekhine Defence","e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7"],
["Queen’s Gambit Declined","d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6"],
["Queen’s Gambit Accepted","d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6"],
["Slav Defence","d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4"],
["Semi-Slav Defence","d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6"],
["King’s Indian Defence","d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7"],
["Nimzo-Indian Defence","d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 Nf3 c5 O-O Nc6"],
["Queen’s Indian Defence","d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Nc3 Ne4"],
["Grünfeld Defence","d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3 c5 Be3 Qa5"],
["Benoni Defence","d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O"],
["Benko Gambit","d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6 Nc3 d6 e4 Bxf1 Kxf1 g6"],
["Budapest Gambit","d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3 Ngxe5"],
["Old Indian Defence","d4 Nf6 c4 d6 Nc3 Nbd7 e4 e5 Nf3 Be7 Be2 O-O O-O c6"],
["Dutch Defence","d4 f5 g3 Nf6 Bg2 e6 Nf3 Be7 O-O O-O c4 d6|d4 f5 c4 Nf6 g3 e6 Bg2 d5 Nf3 c6 O-O Bd6"],
["Catalan Opening","d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O dxc4 Qc2 a6"],
["London System","d4 d5 Bf4 Nf6 e3 c5 c3 Nc6 Nd2 e6 Ngf3 Bd6 Bg3 O-O"],
["Colle System","d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 b3 Nc6 O-O Bd6"],
["Trompowsky Attack","d4 Nf6 Bg5 Ne4 Bf4 c5 f3 Qa5+ c3 Nf6 d5 Qb6"],
["English Opening","c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7|c4 c5 Nf3 Nf6 Nc3 e6 g3 b6 Bg2 Bb7 O-O Be7"],
["Réti Opening","Nf3 d5 g3 Nf6 Bg2 e6 O-O Be7 d3 O-O Nbd2 c5 e4 Nc6"],
["Bird’s Opening","f4 d5 Nf3 Nf6 e3 g6 Be2 Bg7 O-O O-O d3 c5"],
["Larsen’s Opening","b3 e5 Bb2 Nc6 e3 d5 Bb5 Bd6 Nf3 Qe7 O-O Nf6"],
["Ruy Lopez: Marshall Attack","e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 d4 Bd6 Re1 Qh4 g3 Qh3"],
["Fried Liver Attack","e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6 Nc3"],
["Max Lange Attack","e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 d4 exd4 e5 d5 exf6 dxc4 Re1+ Be6 Ng5 Qd5"],
["Hungarian Defence","e4 e5 Nf3 Nc6 Bc4 Be7 d4 exd4 Nxd4 Nf6 Nc3 O-O O-O d6"],
["Scotch Gambit","e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 O-O d6 c3 Nf6 cxd4 Bb6 Nc3 O-O"],
["Göring Gambit","e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3 Bc4 cxb2 Bxb2 Bb4+ Nc3 d6 O-O Nf6"],
["Ponziani Opening","e4 e5 Nf3 Nc6 c3 Nf6 d4 Nxe4 d5 Ne7 Nxe5 Ng6"],
["Center Game","e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4 Bd2 O-O O-O-O Re8"],
["Latvian Gambit","e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4 fxe4 Nc3 Qg6 Ne3 c6"],
["Sicilian: Taimanov","e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Be2 Nf6 O-O Be7"],
["Sicilian: Kan","e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5 Nb3 Ba7 Qe2 d6 Nc3 Nf6"],
["Sicilian: Accelerated Dragon","e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7 Be3 Nf6 Nc3 O-O Be2 d6"],
["Sicilian: Rossolimo","e4 c5 Nf3 Nc6 Bb5 g6 Bxc6 dxc6 d3 Bg7 h3 Nf6 Nc3 O-O"],
["Sicilian: Grand Prix Attack","e4 c5 Nc3 Nc6 f4 g6 Nf3 Bg7 Bc4 e6 f5 Nge7"],
["French: Tarrasch","e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4 f6"],
["French: Exchange","e4 e6 d4 d5 exd5 exd5 Nf3 Nf6 Bd3 Bd6 O-O O-O Bg5 Bg4"],
["Caro-Kann: Panov Attack","e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6"],
["Caro-Kann: Two Knights","e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 g3 Be7"],
["Scandinavian: Modern","e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6 Be2 Bg7 O-O O-O c4 Nb6"],
["Nimzowitsch Defence","e4 Nc6 Nf3 d6 d4 Nf6 Nc3 Bg4 Be3 e6 Be2 Be7"],
["Owen’s Defence","e4 b6 d4 Bb7 Bd3 Nf6 Qe2 e6 Nf3 c5 c3 Be7"],
["St. George Defence","e4 a6 d4 b5 Nf3 Bb7 Bd3 Nf6 Qe2 e6 a4 c5"],
["Pirc: Austrian Attack","e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Bd3 Na6 O-O c5"],
["Alekhine: Four Pawns Attack","e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Nc6 Be3 Bf5"],
["Queen’s Gambit: Exchange","d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 c6 Bd3 Nbd7 Qc2 O-O Nf3 Re8"],
["Tarrasch Defence","d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O"],
["Albin Countergambit","d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3 Be6 Nbd2 Qd7 Bg2"],
["Nimzo-Indian: Classical","d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b6 Bg5 Bb7 e3 d6"],
["Nimzo-Indian: Sämisch","d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 e3 Nc6 Bd3 O-O Ne2 b6"],
["Bogo-Indian Defence","d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Qe7 g3 Nc6 Nc3 Bxc3 Bxc3 Ne4 Rc1 O-O"],
["King’s Indian: Sämisch","d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 f5"],
["King’s Indian: Four Pawns Attack","d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 Be2 cxd4 Nxd4 Nc6"],
["Grünfeld: Russian System","d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Bg4 Be3 Nfd7"],
["Dutch: Leningrad","d4 f5 g3 Nf6 Bg2 g6 Nf3 Bg7 O-O O-O c4 d6 Nc3 Qe8"],
["Torre Attack","d4 Nf6 Nf3 e6 Bg5 c5 e3 Be7 Nbd2 b6 Bd3 Bb7 O-O d6"],
["Veresov Attack","d4 d5 Nc3 Nf6 Bg5 Nbd7 f3 c6 Qd2 e6 O-O-O Be7"],
["Jobava London","d4 d5 Nc3 Nf6 Bf4 c6 Nf3 Bf5 e3 e6 Nh4 Bg6 Nxg6 hxg6"],
["Stonewall Attack","d4 d5 e3 Nf6 Bd3 e6 f4 c5 c3 Nc6 Nf3 Bd6 O-O O-O"],
["Blackmar-Diemer Gambit","d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 Bg4 h3 Bxf3 Qxf3 e6 Bd3 Nbd7"],
["Grob Opening","g4 d5 Bg2 Bxg4 c4 c6 cxd5 cxd5 Qb3 Qd7"],
["Polish Opening (Sokolsky)","b4 e5 Bb2 Bxb4 Bxe5 Nf6 Nf3 O-O"],
["King’s Indian Attack","Nf3 d5 g3 Nf6 Bg2 c5 O-O Nc6 d3 e5 Nbd2 Be7 e4 O-O"],
["Zukertort Opening","Nf3 Nf6 c4 g6 Nc3 Bg7 e4 d6 d4 O-O Be2 e5"]
];
let OPS=[],opSel=-1,POS={};
function buildOps(){
 reset();POS={};
 OPS=RAW.map(([n,s])=>({n,L:s.split('|').map(l=>{const out=[];let k=0;
  for(const t of l.trim().split(/\s+/)){const m=legal().find(x=>san(x).replace(/[+#]/g,'')==t.replace(/[+#]/g,''));if(!m)break;const pk=key();(POS[pk]=POS[pk]||[]).push({u:uci(m),n});out.push(uci(m));make(m);k++}
  while(k--)unmake();return out})}));
 OPS.sort((x,y)=>x.n.localeCompare(y.n));reset();
 const WHITE_SYS=/Smith-Morra|Rossolimo|Grand Prix|Moscow|Wing Gambit|Delayed Alapin|English Attack|French: (Tarrasch|Exchange|King’s Indian Attack)|Caro-Kann: (Fantasy|Exchange|Panov|Two Knights)|Pirc: (Austrian|Classical|150)|Four Pawns|S\u00e4misch|Averbakh|Staunton|Slav: Exchange|Exchange Variation|Nimzo-Indian: Classical|^King’s Indian Attack/;
 const DEF=/Defence|^(Sicilian|French|Caro-Kann|Pirc|Alekhine|Scandinavian|Nimzo|King’s Indian|Queen’s Indian|Gr\u00fcnfeld|Dutch|Benoni|Benko|Budapest|Slav|Semi-Slav|QGD|Queen’s Gambit (Declined|Accepted)|Albin|Latvian|Englund|Blumenfeld|Falkbeer|Czech|Chigorin|Ragozin|Owen|St\.|Modern|Philidor|Petrov|Damiano|Old Indian|Ruy Lopez: (Schliemann|Marshall))/;
 const isDef=n=>DEF.test(n)&&!WHITE_SYS.test(n);
 const opt=(o,i)=>'<option value="'+i+'">'+o.n+' · '+(isDef(o.n)?'Defence':'Opening')+'</option>';
 document.getElementById('ops').innerHTML='<option value="-1">Auto (varied book)</option><optgroup label="Openings (White’s side)">'+OPS.map((o,i)=>isDef(o.n)?'':opt(o,i)).join('')+'</optgroup><optgroup label="Defences (Black’s side)">'+OPS.map((o,i)=>isDef(o.n)?opt(o,i):'').join('')+'</optgroup>'}
function opMove(){
 const ls=legal(),pre=gm.map(x=>x.u),c=[];
 if(opSel>=0)for(const ln of OPS[opSel].L)if(ln.length>pre.length&&pre.every((u,i)=>ln[i]==u)){const m=ls.find(x=>uci(x)==ln[pre.length]);if(m)c.push(m)}
 if(c.length)return c[Math.random()*c.length|0];
 /* position book: same position reached by a different move order, or by another opening's line */
 const cs=POS[key()]||[],mine=opSel>=0?cs.filter(x=>x.n===OPS[opSel].n):[],pool=mine.length?mine:cs;
 const ms=pool.map(x=>ls.find(m=>uci(m)==x.u)).filter(Boolean);
 return ms.length?ms[Math.random()*ms.length|0]:0}
function opName(){
 const pre=gm.map(x=>x.u);if(!pre.length)return '';
 for(let k=pre.length;k>=1;k--){const s=new Set();
  for(const o of OPS)for(const ln of o.L)if(ln.length>=k&&ln.slice(0,k).every((u,i)=>u==pre[i]))s.add(o.n);
  if(s.size>3)return '';
  if(s.size)return [...s].join(' / ')+(k<pre.length?' (out of book)':'')}
 return ''}
/* Setup plan: if the opponent leaves the line, keep playing this side's planned setup moves
   (any move of the selected opening that is still unplayed, legal and not a blunder).
   Book ends only when the whole setup is finished. */
function planMove(){
 if(opSel<0)return 0;
 const par=user==1?1:0,pre=gm.map(x=>x.u),mine=new Set(pre.filter((_,i)=>i%2==par));
 const ls=legal();if(ls.length<2)return 0;
 const lines=OPS[opSel].L.map(L=>{let k=0;while(k<L.length&&k<pre.length&&L[k]==pre[k])k++;
  return{L,k,ov:L.filter((u,i)=>i%2==par&&mine.has(u)).length,r:Math.random()}}).sort((x,y)=>y.k-x.k||y.ov-x.ov||y.r-x.r);
 let bs=null;
 for(const{L}of lines){
  const cand=L.filter((u,i)=>i%2==par&&!mine.has(u)).slice(0,4);
  for(const u of cand){
   const m=ls.find(x=>uci(x)==u);if(!m)continue;
   if(bs===null)bs=think({d:3,t:350,mg:0}).sc;
   tEnd=performance.now()+300;stop=false;
   make(m);const sc=-ab(2,-INF,INF,1);unmake();
   if(!stop&&sc>=bs-120)return m}}
 return 0}
