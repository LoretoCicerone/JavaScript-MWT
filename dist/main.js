(()=>{"use strict";function e(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}const t=[{name:"Pirlo",img:"./src/assets/AndreaPirlo.png"},{name:"Pirlo",img:"./src/assets/AndreaPirlo.png"},{name:"Modric",img:"./src/assets/LukaModric.png"},{name:"Modric",img:"./src/assets/LukaModric.png"},{name:"Zidane",img:"./src/assets/ZinedineZidane.png"},{name:"Zidane",img:"./src/assets/ZinedineZidane.png"},{name:"Xavi",img:"./src/assets/Xavi.png"},{name:"Xavi",img:"./src/assets/Xavi.png"},{name:"Iniesta",img:"./src/assets/AndresIniesta.png"},{name:"Iniesta",img:"./src/assets/AndresIniesta.png"},{name:"DeRossi",img:"./src/assets/DeRossi.png"},{name:"DeRossi",img:"./src/assets/DeRossi.png"}],n=function(){const n=t;console.log(n);var r=document.getElementById("memory_game");for(let t=0;t<n.length;t++){const s=document.createElement("div");e(s,i.MWT_CARD),s.setAttribute("class","mwt-card"),s.setAttribute("id",t),s.setAttribute("data-framework",n[t].name);const o=document.createElement("img");e(o,i.FRONTE_CARTA),o.setAttribute("class","fronte-carta"),o.setAttribute("src",n[t].img),o.setAttribute("alt",n[t].name),s.appendChild(o);const a=document.createElement("img");e(a,i.RETRO_CARTA),a.setAttribute("class","retro-carta"),a.setAttribute("src","./src/assets/mwt.png"),a.setAttribute("alt","MWT Logo"),s.appendChild(a),r.appendChild(s)}this.discover=function(t){e(t,{transform:"rotateY(180deg)"})},this.cover=function(t){e(t,{transform:"rotateY(0)"})}},i={MWT_CARD:{width:"calc(25% - 10px)",height:"calc(33.333% - 10px)",margin:"5px",position:"relative",transform:"scale(1)",transformStyle:"preserve-3d",transition:"transform .5s",boxShadow:"1px 1px 1px rgba(0,0,0,.3)",padding:"0",boxSizing:"border-box"},FRONTE_CARTA:{width:"100%",height:"100%",padding:"20px",position:"absolute",borderRadius:"5px",background:"#1C7CCC",backfaceVisibility:"hidden",transform:"rotateY(180deg)",margin:"0",boxSizing:"border-box"},RETRO_CARTA:{width:"100%",height:"100%",padding:"20px",position:"absolute",borderRadius:"5px",background:"#1C7CCC",backfaceVisibility:"hidden",margin:"0",boxSizing:"border-box"}},r=function(){const t=document.createElement("div");e(t,s.POSIZIONE_ERRORE),document.body.appendChild(t);const n=document.createElement("h1");n.setAttribute("class","counter_errori"),e(n,s.COUNTER_ERRORI),t.appendChild(n),this.posizione_errore=t,this.counter_errori=n},s={POSIZIONE_ERRORE:{width:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},COUNTER_ERRORI:{padding:"15px",color:"red",fontSize:"25px",position:"relative"}};function o(){const t=document.createElement("section");e(t,a.MWT_SECTION_GAME),t.setAttribute("id","memory_game"),document.body.appendChild(t);const i=new r;let s,o,c=!1,d=!1,m=0;const l=new n,p=document.getElementsByClassName("mwt-card");function g(e){if(!d&&this!==s){var t=document.getElementById(e.currentTarget.myParam);if(l.discover(t),!c)return c=!0,void(s=this);o=this,s.dataset.framework===o.dataset.framework?(s.removeEventListener("click",g),o.removeEventListener("click",g),u()):(d=!0,setTimeout((()=>{l.cover(s),l.cover(o),u()}),800),m++,0==m?i.posizione_errore.setAttribute("hidden",!0):b.textContent="Errori: "+m,5==m&&(b.textContent="Game Over!",setTimeout((()=>{l.cover(s),l.cover(o),u()}),800),Object.entries(p).map((e=>{let t=Math.floor(12*Math.random());e[1].style.order=t})),m=0))}}function u(){[c,d]=[!1,!1],[s,o]=[null,null]}Object.entries(p).map((e=>{e[1].addEventListener("click",g,!1),e[1].myParam=e[1].id})),Object.entries(p).map((e=>{let t=Math.floor(12*Math.random());e[1].style.order=t}));let b=i.posizione_errore.querySelector(".counter_errori");this.memory_game=t}const a={MWT_SECTION_GAME:{width:"640px",height:"640px",margin:"auto",display:"flex",flexWrap:"wrap",perspective:"1000px"}},c=function(){e(document.body,{height:"100vh",display:"flex",background:"#060AB2"}),new o};window.addEventListener("load",(function(){new c}))})();