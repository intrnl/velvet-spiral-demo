function S(l){let e=document.createElement("template");return e.innerHTML=l,e}function $(l){return l.content.cloneNode(!0)}function v(l,e){let t=l,s=0,n=e.length,a,r;for(;s<n;s++)for(a=e[s],t=t.firstChild,r=0;r<a;r++)t=t.nextSibling;return t}function L(l,e,t){if(l.replaceWith(e),t){let s=l.childNodes,n=s.length;for(;n--;)e.appendChild(s[0])}}function N(l,e){l.append(e)}function I(l,e){l.after(e)}function te(l,e){let t=l;if(e.nextSibling!==l)for(;t;){let s=t;if(t=t.nextSibling,s.remove(),s===e)break}}function le(l,e,t){l.setAttribute(e,t)}function W(l,e,t){l.classList.toggle(e,t)}function Y(l,e,t){l.style.setProperty(e,t)}var z=Object,ye=Symbol,xe=/\B([A-Z])/g;function ce(l){return l.replace(xe,"-$1").toLowerCase()}var ue=z.is,we=z.assign,D=l=>typeof l=="function";var u,V=1<<0,J=1<<1,X=1<<2,Fe=1<<3,fe=1<<4,G=1<<5,b,d,M,P=0,ee=0,Se=0;function se(){P++}function ne(){if(P>1){P--;return}let l,e=!1;for(;M;){let t=M;for(M=u,ee++;t;){let s=t.o;t.o=u,t.c&=~X;try{t.s()}catch(n){e||(l=n,e=!0)}t=s}}if(ee=0,P--,e)throw l}function $e(l){let e;if(d)if(e=l.j,!e||e.p!==d)e={d:0,c:0,l:u,g:l,e:d.b,h:u,p:d,i:u,m:u},d.b=e,l.j=e,d.c&fe&&l.n(e);else if(e.c&J){e.c&=~J;let t=d.b,s=e.h,n=e.e;e!==t&&(s&&(s.e=n),n&&(n.h=s),t&&(t.h=e),e.h=u,e.e=t,d.b=e)}else e=u;try{return l.peek()}finally{e&&(e.d=l.d)}}function ke(l){for(let e=l.b;e;e=e.e){let t=e.g.j;t&&(e.l=t),e.g.j=e,e.c|=J}}function Ee(l){let e=l.b,t;for(;e;){let s=e.e;e.c&J?(e.g.k(e),e.e=u):(t&&(t.h=e),e.h=u,e.e=t,t=e),e.g.j=e.l,e.l&&(e.l=u),e=s}l.b=t}function Ce(l){let e=this;Ee(e),d=l,ne(),e.c&=~V}var O=class{constructor(e){let t=this;t.d=0,t.a=e,t.j=u,t.f=u}n(e){let t=this;e.c&G||(e.c|=G,e.i=t.f,t.f&&(t.f.m=e),t.f=e)}k(e){let t=this,s=e.m,n=e.i;e.c&G&&(e.c&=~G,s&&(s.i=n,e.m=u),n&&(n.m=s,e.i=u),e===t.f&&(t.f=n))}subscribe(e){return i(()=>e(this.value))}set(e){return this.value=e}peek(){return this.a}get value(){return $e(this)}set value(e){let t=this;if(e!==t.a){if(t.a=e,ee>100)return;t.d++,Se++,se();try{for(let s=t.f;s;s=s.i)s.p.q()}finally{ne()}}}};var K=class{constructor(e){this.r=e,this.b=u,this.o=u,this.c=fe}s(){let e=this;if(e.c&V)return;let t=e.u();try{e.r()}finally{t()}}u(){let e=this,t=d;return e.c|=V,se(),d=e,ke(e),Ce.bind(e,t)}q(){let e=this;e.c&(X|V)||(e.c|=X,e.o=M,M=e)}v(){let e=this;for(let t=e.b;t;t=t.e)t.g.k(t);e.b=u}},T=class{constructor(e){let t=this;t.scopes=[],t.cleanups=[],t.parent=b,!e&&b&&b.scopes.push(t)}run(e){let t=b;try{return b=this,e()}finally{b=t}}clear(){let e=this,t=e.scopes,s=e.cleanups;for(let n of t)n.clear(),n.parent=u;for(let n of s)n();t.length=0,s.length=0}};function A(l){return new T(l)}function R(l){D(l)&&b&&b.cleanups.push(l)}function q(l){if(P>0)return l();se();try{return l()}finally{ne()}}function h(l){return new O(l)}function i(l){let e=new K(l),t=e.v.bind(e);return e.s(),R(t),t}var Oe=!1,Le=1;var C=null,ae=ye(),Q=class extends HTMLElement{$m=!1;$c=A(!0);$p={};$h=[];constructor(){super();let e=this,t=e.$p,s=e.constructor.$d;for(let n in s){let a=s[n];t[a]=h(ae)}}connectedCallback(){let e=this;if(!e.$m){e.$m=!0;let t=e.constructor.$c,s=e.constructor.$s,n=e.$c,a=e.$h,r=e.shadowRoot,o=!1;r||(r=e.attachShadow({mode:"open"}),o=!0);let f=C;try{if(C=e,n.run(()=>t(r,e)),document.adoptedStyleSheets)o&&(r.adoptedStyleSheets=s);else for(let c of s)N(r,c.cloneNode(!0));for(let c of a){let p=c();D(p)&&n.cleanups.push(p)}a.length=0}finally{C=f}}}disconnectedCallback(){let e=this;e.$m&&(e.$c.clear(),e.shadowRoot.innerHTML="",e.$m=!1)}attributeChangedCallback(e,t,s){let n=this,a=n.constructor.$d;e in a&&(n.$p[a[e]].value=s===""?!0:s)}};function H(l,e,t,s){let n=[],a=z.create(null);class r extends Q{static observedAttributes=n;static $c=e;static $a=a;static $d=t;static $s=s}for(let o in t){let f=t[o],c=ce(o);a[c]=o,n.push(c),z.defineProperty(r.prototype,o,{get(){return this.$p[f].a},set(p){this.$p[f].value=p}})}return Oe&&(l="velvet-"+Le++),l&&customElements.define(l,r),r}function k(l,e){let t=C.$p[l];return t.value===ae&&(t.value=D(e)?e():e),t}function Z(l){D(l)&&C.$h.push(l)}function re(l,e){let t=document.createTextNode("");L(l,t),i(()=>t.data=e())}function pe(l,e){let t=A(),s,n;i(()=>{let a=e();a!==s&&(n&&(t.clear(),de(l,n),n=null),s=a,a&&(n=t.run(()=>a(l))))})}function he(l,e,t){let s=[];i(()=>{let n=t(),a=0,r=n.length,o=s.length;for(;a<r;a++)if(s[a]){let f=s[a][2];f.value=n[a]}else{let f=s[a-1],c=f?f[1]:l,p=h(n[a]),g=A(!0);s[a]=[g,g.run(()=>e(c,p,a)),p]}if(o>r){let f=s[a-1],c=f?f[1]:l,p=s[o-1][1];for(;a<o;a++)s[a][0].clear();de(c,p),s.length=r}}),R(()=>{for(let n of s)n[0].clear()})}function de(l,e){te(l.nextSibling,e)}var Te=S("<div> <!> </div>"),Ie=S("<span class=label> <!>, <!> </span>");function De(l,e){let t=k(0,!1),s=k(1,0),n=k(2,0),a=k(3,!1),r=k(4,()=>{}),o=$(Te),f=v(o,[0,1]),c=v(o,[0]),p=g=>{let y=$(Ie),U=v(y,[0,1]),j=v(y,[0,3]),x=v(y,[0]);return re(U,()=>s.value),re(j,()=>n.value),I(g,y),x};pe(f,()=>t.value?p:null),le(c,"class","cursor"),i(()=>W(c,"big",a.value)),i(()=>W(c,"label",t.value)),i(()=>Y(c,"border-color",r.value)),i(()=>Y(c,"transform",`translate(${s.value}px, ${n.value}px) scale(${a.value?2:1})`)),N(l,o)}var B=H("x-cursor",De,{label:0,x:1,y:2,big:3,color:4},[]);var qe=S("<div class=main> <x></x> <!> </div>"),He=S("<x></x>");function Be(l,e){let n=h(0),a=h(0),r=h(!1),o=h(0),f=h(!1),c=h([]);i(()=>{let _=500+Math.round(Math.sin(o.value/90*2*Math.PI)*500*.5),E=[];for(let w=_;w--;){let m=w/_*6,F=m*2*Math.PI,oe=20+w*2,ge=(m*255+o.value*10)%255;E[w]={color:`hsl(${ge}, 100%, 50%)`,x:n.value+Math.sin(F)*oe|0,y:a.value+Math.cos(F)*oe|0}}c.value=E});function p(_){q(()=>{n.value=_.x,a.value=_.y})}function g(){r.value=!0}function y(_){r.value=!1}function U(){f.value||(o.value++,requestAnimationFrame(U))}Z(()=>(window.addEventListener("pointermove",p),window.addEventListener("pointerdown",g),window.addEventListener("pointerup",y),requestAnimationFrame(U),()=>{window.removeEventListener("pointermove",p),window.removeEventListener("pointerdown",g),window.removeEventListener("pointerup",y),f.value=!0}));let j=$(qe),x=new B,me=v(j,[0,1]),_e=v(j,[0,3]),be=(_,E)=>{let w=$(He),m=new B,F=v(w,[0]);return i(()=>m.color=E.value.color),i(()=>m.x=E.value.x),i(()=>m.y=E.value.y),i(()=>m.big=r.value),L(F,m,!0),I(_,w),m};e:x.label=!0;i(()=>x.x=n.value),i(()=>x.y=a.value),i(()=>x.big=r.value),L(me,x,!0),he(_e,be,()=>c.value),N(l,j)}var ie=H("x-spiral",Be,{},[]);ve(ie);ve(B);var Ue=new ie;document.body.appendChild(Ue);function ve(l){l.prototype.attachShadow=function(){return this.shadowRoot||Object.defineProperty(this,"shadowRoot",{value:this}),this}}
//# sourceMappingURL=app.js.map
