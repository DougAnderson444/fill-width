function m(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function k(){return Object.create(null)}function y(t){t.forEach(O)}function S(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(K(e,n))}function ft(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,u){if(r){const o=P(e,n,i,u);t.p(o,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){return t&&S(t.destroy)?t.destroy:m}let v=!1;function Q(){v=!0}function R(){v=!1}function U(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:U(1,r,g=>e[n[g]].claim_order,c))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<o.length;s++){for(;c<u.length&&o[s].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(o[s],f)}}function X(t,e){t.appendChild(e)}function Y(t,e){if(v){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){v&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function W(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function z(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return t===""?null:+t}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){tt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function wt(t,e,n){return et(t,e,n,W)}function nt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function $t(t){return nt(t," ")}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Et(t,e){t.value=e==null?"":e}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let b;function it(){if(b===void 0){b=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{b=!0}}return b}function At(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=W("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=it();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=z(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{u=z(i.contentWindow,"resize",e)}),X(t,i),()=>{(r||u&&i.contentWindow)&&u(),T(i)}}function St(t,e){return new t(e)}let p;function h(t){p=t}function q(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){q().$$.on_mount.push(t)}function Ct(t){q().$$.after_update.push(t)}const _=[],B=[],w=[],L=[],D=Promise.resolve();let N=!1;function F(){N||(N=!0,D.then(H))}function Mt(){return F(),D}function A(t){w.push(t)}const E=new Set;let x=0;function H(){const t=p;do{for(;x<_.length;){const e=_[x];x++,h(e),rt(e.$$)}for(h(null),_.length=0,x=0;B.length;)B.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];E.has(n)||(E.add(n),n())}w.length=0}while(_.length);for(;L.length;)L.pop()();N=!1,E.clear(),h(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let d;function kt(){d={r:0,c:[],p:d}}function zt(){d.r||y(d.c),d=d.p}function ot(t,e){t&&t.i&&($.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Lt(t){t&&t.c()}function Ot(t,e){t&&t.l(e)}function st(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const o=t.$$.on_mount.map(O).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),u.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(_.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(t,e,n,i,r,u,o,l=[-1]){const s=p;h(t);const c=t.$$={fragment:null,ctx:[],props:u,update:m,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:k(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,g,...C)=>{const M=C.length?C[0]:g;return c.ctx&&r(c.ctx[a],c.ctx[a]=M)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](M),f&&ut(t,a)),g}):[],c.update(),f=!0,y(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Q();const a=Z(e.target);c.fragment&&c.fragment.l(a),a.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&ot(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),R(),H()}h(s)}class Tt{$destroy(){ct(this,1),this.$destroy=m}$on(e,n){if(!S(n))return m;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Mt as A,m as B,ft as C,_t as D,ht as E,dt as F,Y as G,at as H,A as I,At as J,Et as K,z as L,mt as M,S as N,y as O,xt as P,Tt as S,yt as a,pt as b,$t as c,zt as d,gt as e,ot as f,kt as g,T as h,Pt as i,Ct as j,W as k,wt as l,Z as m,bt as n,jt as o,Nt as p,j as q,nt as r,lt as s,Bt as t,vt as u,St as v,Lt as w,Ot as x,st as y,ct as z};
