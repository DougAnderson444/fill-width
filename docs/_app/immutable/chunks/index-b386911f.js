function m(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function z(){return Object.create(null)}function y(t){t.forEach(O)}function C(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(K(e,n))}function dt(t,e,n,i){if(t){const r=T(t,e,n,i);return t[0](r)}}function T(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,u){if(r){const o=T(e,n,i,u);t.p(o,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){return t&&C(t.destroy)?t.destroy:m}let v=!1;function Q(){v=!0}function R(){v=!1}function U(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const s=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:U(1,r,b=>e[n[b]].claim_order,s))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<u.length&&o[c].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(o[c],f)}}function X(t,e){t.appendChild(e)}function Y(t,e){if(v){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function D(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function gt(){return S("")}function P(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return t===""?null:+t}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){tt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function $t(t,e,n){return et(t,e,n,D)}function nt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function vt(t){return nt(t," ")}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e){t.value=e==null?"":e}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let g;function it(){if(g===void 0){g=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{g=!0}}return g}function Ct(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=D("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=it();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=P(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{u=P(i.contentWindow,"resize",e)}),X(t,i),()=>{(r||u&&i.contentWindow)&&u(),W(i)}}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function St(t,e){return new t(e)}let p;function h(t){p=t}function j(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){j().$$.on_mount.push(t)}function kt(t){j().$$.after_update.push(t)}function Mt(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=rt(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,u)}),!u.defaultPrevented}return!0}}const _=[],B=[],w=[],L=[],q=Promise.resolve();let N=!1;function F(){N||(N=!0,q.then(H))}function zt(){return F(),q}function A(t){w.push(t)}const E=new Set;let x=0;function H(){const t=p;do{for(;x<_.length;){const e=_[x];x++,h(e),ot(e.$$)}for(h(null),_.length=0,x=0;B.length;)B.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];E.has(n)||(E.add(n),n())}w.length=0}while(_.length);for(;L.length;)L.pop()();N=!1,E.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let d;function Pt(){d={r:0,c:[],p:d}}function Bt(){d.r||y(d.c),d=d.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ot(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function st(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const o=t.$$.on_mount.map(O).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),u.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(_.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,u,o,l=[-1]){const c=p;h(t);const s=t.$$={fragment:null,ctx:[],props:u,update:m,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,b,...k)=>{const M=k.length?k[0]:b;return s.ctx&&r(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&lt(t,a)),b}):[],s.update(),f=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){Q();const a=Z(e.target);s.fragment&&s.fragment.l(a),a.forEach(W)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),R(),H()}h(c)}class Dt{$destroy(){ut(this,1),this.$destroy=m}$on(e,n){if(!C(n))return m;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as A,m as B,dt as C,ht as D,mt as E,_t as F,Y as G,ft as H,A as I,Ct as J,Mt as K,Nt as L,P as M,pt as N,C as O,y as P,wt as Q,Dt as S,bt as a,yt as b,vt as c,Bt as d,gt as e,ct as f,Pt as g,W as h,Wt as i,kt as j,D as k,$t as l,Z as m,xt as n,jt as o,At as p,S as q,nt as r,at as s,Lt as t,Et as u,St as v,Ot as w,Tt as x,st as y,ut as z};
