import{S as ce,i as ve,s as we,k as _,q as T,l as c,m as v,r as C,h as d,I as me,p as o,b as E,G as u,J as Se,u as se,B as Q,a as M,c as F,n as p,K,L as D,M as ee,N as te,O as ye,P as _e,Q as ze}from"../../chunks/index-3312188f.js";function be(e){let s,i,n,f;return{c(){s=_("p"),i=_("span"),n=T(e[1]),this.h()},l(l){s=c(l,"P",{style:!0});var r=v(s);i=c(r,"SPAN",{});var h=v(i);n=C(h,e[1]),h.forEach(d),r.forEach(d),this.h()},h(){me(()=>e[4].call(i)),o(i,"opacity",.4),o(s,"font-size",e[2]+"px"),o(s,"opacity","0"),o(s,"position","absolute"),o(s,"display","hidden")},m(l,r){E(l,s,r),u(s,i),u(i,n),f=Se(i,e[4].bind(i))},p(l,[r]){r&2&&se(n,l[1]),r&4&&o(s,"font-size",l[2]+"px")},i:Q,o:Q,d(l){l&&d(s),f()}}}function Ee(e,s,i){let{text:n}=s,{width:f}=s,{fontSize:l=10}=s;const r=()=>f;function h(){f=this.offsetWidth,i(0,f)}return e.$$set=w=>{"text"in w&&i(1,n=w.text),"width"in w&&i(0,f=w.width),"fontSize"in w&&i(2,l=w.fontSize)},[f,n,l,r,h]}class We extends ce{constructor(s){super(),ve(this,s,Ee,be,we,{text:1,width:0,fontSize:2,getWidth:3})}get getWidth(){return this.$$.ctx[3]}}function ie(e,{width:s=227}={}){if(!e.innerHTML)return;let i,n=10;e.style.whiteSpace="nowrap";const f=document.createElement(e.nodeName.toLowerCase());return f.style.fontFamily=window.getComputedStyle(e).fontFamily,f.style.fontSize=n,f.style.opacity=0,f.style.position="absolute",f.style.display="hidden",f.style.whiteSpace="nowrap",document.body.appendChild(f),i=new We({target:f,props:{text:e.innerHTML,fontSize:n}}),e.style.fontSize=s/i.getWidth()*n+"px",{update(l){s=(l==null?void 0:l.width)||s,n=(l==null?void 0:l.fontSize)||n,i.$set({text:e.innerHTML,fontSize:n}),e.style.fontSize=s/i.getWidth()*n+"px"},destroy(){}}}function Pe(e){let s,i,n,f,l,r,h,w,W,z,b,V,k,A,y,B,S,m,R,H,le,O,P,I,L,X,q,U,N,g,Y,j,Z,ne;return{c(){s=_("section"),i=_("label"),n=_("span"),f=T("Width = "),l=T(e[0]),r=M(),h=_("input"),w=M(),W=_("section"),z=_("label"),b=_("span"),V=T("Max Font Size = "),k=T(e[1]),A=M(),y=_("input"),B=M(),S=_("div"),m=_("p"),R=T("Contenteditable para in a div goes here"),O=M(),P=_("div"),I=_("p"),L=_("span"),X=T("Span in Para"),U=M(),N=_("div"),g=_("div"),Y=T("Even works with different fonts"),this.h()},l(t){s=c(t,"SECTION",{style:!0});var a=v(s);i=c(a,"LABEL",{style:!0});var G=v(i);n=c(G,"SPAN",{style:!0,class:!0});var x=v(n);f=C(x,"Width = "),l=C(x,e[0]),x.forEach(d),r=F(G),h=c(G,"INPUT",{type:!0,min:!0,max:!0,style:!0}),G.forEach(d),a.forEach(d),w=F(t),W=c(t,"SECTION",{style:!0});var ae=v(W);z=c(ae,"LABEL",{style:!0});var J=v(z);b=c(J,"SPAN",{style:!0,class:!0});var $=v(b);V=C($,"Max Font Size = "),k=C($,e[1]),$.forEach(d),A=F(J),y=c(J,"INPUT",{type:!0,min:!0,max:!0,style:!0}),J.forEach(d),ae.forEach(d),B=F(t),S=c(t,"DIV",{class:!0});var oe=v(S);m=c(oe,"P",{contenteditable:!0,class:!0});var fe=v(m);R=C(fe,"Contenteditable para in a div goes here"),fe.forEach(d),oe.forEach(d),O=F(t),P=c(t,"DIV",{class:!0});var de=v(P);I=c(de,"P",{class:!0});var he=v(I);L=c(he,"SPAN",{contenteditable:!0,class:!0});var re=v(L);X=C(re,"Span in Para"),re.forEach(d),he.forEach(d),de.forEach(d),U=F(t),N=c(t,"DIV",{class:!0});var ue=v(N);g=c(ue,"DIV",{class:!0});var pe=v(g);Y=C(pe,"Even works with different fonts"),pe.forEach(d),ue.forEach(d),this.h()},h(){o(n,"width","100%"),p(n,"class","svelte-ph4tdm"),p(h,"type","range"),p(h,"min","100"),p(h,"max","800"),o(h,"width","100%"),o(i,"width","100%"),o(s,"width","100%"),o(b,"width","100%"),p(b,"class","svelte-ph4tdm"),p(y,"type","range"),p(y,"min","1"),p(y,"max","100"),o(y,"width","100%"),o(z,"width","100%"),o(W,"width","100%"),p(m,"contenteditable",""),p(m,"class","svelte-ph4tdm"),o(m,"fontSize",e[1]+"px"),p(S,"class","svelte-ph4tdm"),me(()=>e[10].call(S)),o(S,"width",e[4]),p(L,"contenteditable",""),p(L,"class","svelte-ph4tdm"),p(I,"class","svelte-ph4tdm"),o(I,"fontSize",e[1]+"px"),p(P,"class","svelte-ph4tdm"),o(P,"width",e[4]),p(g,"class","svelte-ph4tdm"),o(g,"fontSize",e[1]+"px"),p(N,"class","svelte-ph4tdm"),o(N,"width",e[4])},m(t,a){E(t,s,a),u(s,i),u(i,n),u(n,f),u(n,l),u(i,r),u(i,h),K(h,e[0]),E(t,w,a),E(t,W,a),u(W,z),u(z,b),u(b,V),u(b,k),u(z,A),u(z,y),K(y,e[1]),E(t,B,a),E(t,S,a),u(S,m),u(m,R),e[7](m),le=Se(S,e[10].bind(S)),E(t,O,a),E(t,P,a),u(P,I),u(I,L),u(L,X),E(t,U,a),E(t,N,a),u(N,g),u(g,Y),Z||(ne=[D(h,"change",e[5]),D(h,"input",e[5]),D(y,"change",e[6]),D(y,"input",e[6]),ee(H=ie.call(null,m,{width:e[0]})),D(m,"change",e[8]),D(m,"keypress",e[9]),ee(q=ie.call(null,L,{width:e[0]})),ee(j=ie.call(null,g,{width:e[0]}))],Z=!0)},p(t,[a]){a&1&&se(l,t[0]),a&1&&K(h,t[0]),a&2&&se(k,t[1]),a&2&&K(y,t[1]),H&&te(H.update)&&a&1&&H.update.call(null,{width:t[0]}),a&2&&o(m,"fontSize",t[1]+"px"),a&16&&o(S,"width",t[4]),q&&te(q.update)&&a&1&&q.update.call(null,{width:t[0]}),a&2&&o(I,"fontSize",t[1]+"px"),a&16&&o(P,"width",t[4]),j&&te(j.update)&&a&1&&j.update.call(null,{width:t[0]}),a&2&&o(g,"fontSize",t[1]+"px"),a&16&&o(N,"width",t[4])},i:Q,o:Q,d(t){t&&d(s),t&&d(w),t&&d(W),t&&d(B),t&&d(S),e[7](null),le(),t&&d(O),t&&d(P),t&&d(U),t&&d(N),Z=!1,ye(ne)}}}function Ne(e,s,i){let n,f,l,r=400,h=10;function w(){r=_e(this.value),i(0,r),i(1,h)}function W(){h=_e(this.value),i(1,h)}function z(A){ze[A?"unshift":"push"](()=>{f=A,i(2,f)})}const b=()=>{i(0,r=l)},V=()=>{i(0,r=l)};function k(){l=this.offsetWidth,i(3,l)}return e.$$.update=()=>{e.$$.dirty&3&&h&&(i(0,r),i(1,h)),e.$$.dirty&1&&i(4,n=r+"px")},[r,h,f,l,n,w,W,z,b,V,k]}class Ie extends ce{constructor(s){super(),ve(this,s,Ne,Pe,we,{})}}export{Ie as default};