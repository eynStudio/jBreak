/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/**
 * Restful Resources service for AngularJS apps
 * @version v1.4.0 - 2015-04-03 * @link https://github.com/mgonto/restangular
 * @author Martin Gontovnikas <martin@gon.to>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */!function(){var a=angular.module("restangular",[]);a.provider("Restangular",function(){var a={};a.init=function(a,b){function c(a,b,c,d){var e={};return _.each(_.keys(d),function(f){var g=d[f];g.params=_.extend({},g.params,a.defaultRequestParams[g.method.toLowerCase()]),_.isEmpty(g.params)&&delete g.params,e[f]=a.isSafe(g.method)?function(){return b(_.extend(g,{url:c}))}:function(a){return b(_.extend(g,{url:c,data:a}))}}),e}a.configuration=b;var d=["get","head","options","trace","getlist"];b.isSafe=function(a){return _.contains(d,a.toLowerCase())};var e=/^https?:\/\//i;b.isAbsoluteUrl=function(a){return _.isUndefined(b.absoluteUrl)||_.isNull(b.absoluteUrl)?a&&e.test(a):b.absoluteUrl},b.absoluteUrl=_.isUndefined(b.absoluteUrl)?!0:b.absoluteUrl,a.setSelfLinkAbsoluteUrl=function(a){b.absoluteUrl=a},b.baseUrl=_.isUndefined(b.baseUrl)?"":b.baseUrl,a.setBaseUrl=function(a){return b.baseUrl=/\/$/.test(a)?a.substring(0,a.length-1):a,this},b.extraFields=b.extraFields||[],a.setExtraFields=function(a){return b.extraFields=a,this},b.defaultHttpFields=b.defaultHttpFields||{},a.setDefaultHttpFields=function(a){return b.defaultHttpFields=a,this},b.withHttpValues=function(a,c){return _.defaults(c,a,b.defaultHttpFields)},b.encodeIds=_.isUndefined(b.encodeIds)?!0:b.encodeIds,a.setEncodeIds=function(a){b.encodeIds=a},b.defaultRequestParams=b.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},a.setDefaultRequestParams=function(a,c){var d=[],e=c||a;return _.isUndefined(c)?d.push("common"):_.isArray(a)?d=a:d.push(a),_.each(d,function(a){b.defaultRequestParams[a]=e}),this},a.requestParams=b.defaultRequestParams,b.defaultHeaders=b.defaultHeaders||{},a.setDefaultHeaders=function(c){return b.defaultHeaders=c,a.defaultHeaders=b.defaultHeaders,this},a.defaultHeaders=b.defaultHeaders,b.methodOverriders=b.methodOverriders||[],a.setMethodOverriders=function(a){var c=_.extend([],a);return b.isOverridenMethod("delete",c)&&c.push("remove"),b.methodOverriders=c,this},b.jsonp=_.isUndefined(b.jsonp)?!1:b.jsonp,a.setJsonp=function(a){b.jsonp=a},b.isOverridenMethod=function(a,c){var d=c||b.methodOverriders;return!_.isUndefined(_.find(d,function(b){return b.toLowerCase()===a.toLowerCase()}))},b.urlCreator=b.urlCreator||"path",a.setUrlCreator=function(a){if(!_.has(b.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return b.urlCreator=a,this},b.restangularFields=b.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig",singleOne:"singleOne",plain:"plain",save:"save",restangularized:"restangularized"},a.setRestangularFields=function(a){return b.restangularFields=_.extend(b.restangularFields,a),this},b.isRestangularized=function(a){return!!a[b.restangularFields.restangularized]},b.setFieldToElem=function(a,b,c){var d=a.split("."),e=b;return _.each(_.initial(d),function(a){e[a]={},e=e[a]}),e[_.last(d)]=c,this},b.getFieldFromElem=function(a,b){var c=a.split("."),d=b;return _.each(c,function(a){d&&(d=d[a])}),angular.copy(d)},b.setIdToElem=function(a,c){return b.setFieldToElem(b.restangularFields.id,a,c),this},b.getIdFromElem=function(a){return b.getFieldFromElem(b.restangularFields.id,a)},b.isValidId=function(a){return""!==a&&!_.isUndefined(a)&&!_.isNull(a)},b.setUrlToElem=function(a,c){return b.setFieldToElem(b.restangularFields.selfLink,a,c),this},b.getUrlFromElem=function(a){return b.getFieldFromElem(b.restangularFields.selfLink,a)},b.useCannonicalId=_.isUndefined(b.useCannonicalId)?!1:b.useCannonicalId,a.setUseCannonicalId=function(a){return b.useCannonicalId=a,this},b.getCannonicalIdFromElem=function(a){var c=a[b.restangularFields.cannonicalId],d=b.isValidId(c)?c:b.getIdFromElem(a);return d},b.responseInterceptors=b.responseInterceptors||[],b.defaultResponseInterceptor=function(a){return a},b.responseExtractor=function(a,c,d,e,f,g){var h=angular.copy(b.responseInterceptors);h.push(b.defaultResponseInterceptor);var i=a;return _.each(h,function(a){i=a(i,c,d,e,f,g)}),i},a.addResponseInterceptor=function(a){return b.responseInterceptors.push(a),this},b.errorInterceptors=b.errorInterceptors||[],a.addErrorInterceptor=function(a){return b.errorInterceptors.push(a),this},a.setResponseInterceptor=a.addResponseInterceptor,a.setResponseExtractor=a.addResponseInterceptor,a.setErrorInterceptor=a.addErrorInterceptor,b.requestInterceptors=b.requestInterceptors||[],b.defaultInterceptor=function(a,b,c,d,e,f,g){return{element:a,headers:e,params:f,httpConfig:g}},b.fullRequestInterceptor=function(a,c,d,e,f,g,h){var i=angular.copy(b.requestInterceptors),j=b.defaultInterceptor(a,c,d,e,f,g,h);return _.reduce(i,function(a,b){return _.extend(a,b(a.element,c,d,e,a.headers,a.params,a.httpConfig))},j)},a.addRequestInterceptor=function(a){return b.requestInterceptors.push(function(b,c,d,e,f,g,h){return{headers:f,params:g,element:a(b,c,d,e),httpConfig:h}}),this},a.setRequestInterceptor=a.addRequestInterceptor,a.addFullRequestInterceptor=function(a){return b.requestInterceptors.push(a),this},a.setFullRequestInterceptor=a.addFullRequestInterceptor,b.onBeforeElemRestangularized=b.onBeforeElemRestangularized||function(a){return a},a.setOnBeforeElemRestangularized=function(a){return b.onBeforeElemRestangularized=a,this},a.setRestangularizePromiseInterceptor=function(a){return b.restangularizePromiseInterceptor=a,this},b.onElemRestangularized=b.onElemRestangularized||function(a){return a},a.setOnElemRestangularized=function(a){return b.onElemRestangularized=a,this},b.shouldSaveParent=b.shouldSaveParent||function(){return!0},a.setParentless=function(a){return _.isArray(a)?b.shouldSaveParent=function(b){return!_.contains(a,b)}:_.isBoolean(a)&&(b.shouldSaveParent=function(){return!a}),this},b.suffix=_.isUndefined(b.suffix)?null:b.suffix,a.setRequestSuffix=function(a){return b.suffix=a,this},b.transformers=b.transformers||{},a.addElementTransformer=function(c,d,e){var f=null,g=null;2===arguments.length?g=d:(g=e,f=d);var h=b.transformers[c];return h||(h=b.transformers[c]=[]),h.push(function(a,b){return _.isNull(f)||a===f?g(b):b}),a},a.extendCollection=function(b,c){return a.addElementTransformer(b,!0,c)},a.extendModel=function(b,c){return a.addElementTransformer(b,!1,c)},b.transformElem=function(a,c,d,e,f){if(!f&&!b.transformLocalElements&&!a[b.restangularFields.fromServer])return a;var g=b.transformers[d],h=a;return g&&_.each(g,function(a){h=a(c,h)}),b.onElemRestangularized(h,c,d,e)},b.transformLocalElements=_.isUndefined(b.transformLocalElements)?!1:b.transformLocalElements,a.setTransformOnlyServerElements=function(a){b.transformLocalElements=!a},b.fullResponse=_.isUndefined(b.fullResponse)?!1:b.fullResponse,a.setFullResponse=function(a){return b.fullResponse=a,this},b.urlCreatorFactory={};var f=function(){};f.prototype.setConfig=function(a){return this.config=a,this},f.prototype.parentsArray=function(a){for(var b=[];a;)b.push(a),a=a[this.config.restangularFields.parentResource];return b.reverse()},f.prototype.resource=function(a,d,e,f,g,h,i,j){var k=_.defaults(g||{},this.config.defaultRequestParams.common),l=_.defaults(f||{},this.config.defaultHeaders);i&&(b.isSafe(j)?l["If-None-Match"]=i:l["If-Match"]=i);var m=this.base(a);if(h){var n="";/\/$/.test(m)||(n+="/"),n+=h,m+=n}return this.config.suffix&&-1===m.indexOf(this.config.suffix,m.length-this.config.suffix.length)&&!this.config.getUrlFromElem(a)&&(m+=this.config.suffix),a[this.config.restangularFields.httpConfig]=void 0,c(this.config,d,m,{getList:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),get:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),jsonp:this.config.withHttpValues(e,{method:"jsonp",params:k,headers:l}),put:this.config.withHttpValues(e,{method:"PUT",params:k,headers:l}),post:this.config.withHttpValues(e,{method:"POST",params:k,headers:l}),remove:this.config.withHttpValues(e,{method:"DELETE",params:k,headers:l}),head:this.config.withHttpValues(e,{method:"HEAD",params:k,headers:l}),trace:this.config.withHttpValues(e,{method:"TRACE",params:k,headers:l}),options:this.config.withHttpValues(e,{method:"OPTIONS",params:k,headers:l}),patch:this.config.withHttpValues(e,{method:"PATCH",params:k,headers:l})})};var g=function(){};g.prototype=new f,g.prototype.normalizeUrl=function(a){var b=/(http[s]?:\/\/)?(.*)?/.exec(a);return b[2]=b[2].replace(/[\\\/]+/g,"/"),"undefined"!=typeof b[1]?b[1]+b[2]:b[2]},g.prototype.base=function(a){var c=this;return _.reduce(this.parentsArray(a),function(a,d){var e,f=c.config.getUrlFromElem(d);if(f){if(c.config.isAbsoluteUrl(f))return f;e=f}else if(e=d[c.config.restangularFields.route],d[c.config.restangularFields.restangularCollection]){var g=d[c.config.restangularFields.ids];g&&(e+="/"+g.join(","))}else{var h;h=c.config.useCannonicalId?c.config.getCannonicalIdFromElem(d):c.config.getIdFromElem(d),b.isValidId(h)&&!d.singleOne&&(e+="/"+(c.config.encodeIds?encodeURIComponent(h):h))}return a=a.replace(/\/$/,"")+"/"+e,c.normalizeUrl(a)},this.config.baseUrl)},g.prototype.fetchUrl=function(a,b){var c=this.base(a);return b&&(c+="/"+b),c},g.prototype.fetchRequestedUrl=function(a,c){function d(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function e(a,b,c){for(var e=d(a),f=0;f<e.length;f++)b.call(c,a[e[f]],e[f]);return e}function f(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}var g=this.fetchUrl(a,c),h=a[b.restangularFields.reqParams];if(!h)return g+(this.config.suffix||"");var i=[];return e(h,function(a,b){null!==a&&void 0!==a&&(angular.isArray(a)||(a=[a]),angular.forEach(a,function(a){angular.isObject(a)&&(a=angular.toJson(a)),i.push(f(b)+"="+f(a))}))}),g+(this.config.suffix||"")+(-1===g.indexOf("?")?"?":"&")+i.join("&")},b.urlCreatorFactory.path=g};var b={};a.init(this,b),this.$get=["$http","$q",function(c,d){function e(b){function f(a,c,d,e,f){if(c[b.restangularFields.route]=d,c[b.restangularFields.getRestangularUrl]=_.bind(P.fetchUrl,P,c),c[b.restangularFields.getRequestedUrl]=_.bind(P.fetchRequestedUrl,P,c),c[b.restangularFields.addRestangularMethod]=_.bind(L,c),c[b.restangularFields.clone]=_.bind(r,c,c),c[b.restangularFields.reqParams]=_.isEmpty(e)?null:e,c[b.restangularFields.withHttpConfig]=_.bind(z,c),c[b.restangularFields.plain]=_.bind(p,c,c),c[b.restangularFields.restangularized]=!0,c[b.restangularFields.one]=_.bind(g,c,c),c[b.restangularFields.all]=_.bind(h,c,c),c[b.restangularFields.several]=_.bind(i,c,c),c[b.restangularFields.oneUrl]=_.bind(j,c,c),c[b.restangularFields.allUrl]=_.bind(k,c,c),c[b.restangularFields.fromServer]=!!f,a&&b.shouldSaveParent(d)){var l=b.getIdFromElem(a),m=b.getUrlFromElem(a),n=_.union(_.values(_.pick(b.restangularFields,["route","singleOne","parentResource"])),b.extraFields),o=_.pick(a,n);b.isValidId(l)&&b.setIdToElem(o,l,d),b.isValidId(m)&&b.setUrlToElem(o,m,d),c[b.restangularFields.parentResource]=o}else c[b.restangularFields.parentResource]=null;return c}function g(a,c,d,e){var f;if(_.isNumber(c)||_.isNumber(a))throw f="You're creating a Restangular entity with the number ",f+="instead of the route or the parent. For example, you can't call .one(12).",new Error(f);if(_.isUndefined(c))throw f="You're creating a Restangular entity either without the path. ",f+="For example you can't call .one(). Please check if your arguments are valid.",new Error(f);var g={};return b.setIdToElem(g,d,c),b.setFieldToElem(b.restangularFields.singleOne,g,e),s(a,g,c,!1)}function h(a,b){return t(a,[],b,!1)}function i(a,c){var d=[];return d[b.restangularFields.ids]=Array.prototype.splice.call(arguments,2),t(a,d,c,!1)}function j(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),s(a,e,c,!1)}function k(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),t(a,e,c,!1)}function l(a,c,d){return a.call=_.bind(m,a),a.get=_.bind(n,a),a[b.restangularFields.restangularCollection]=c,c&&(a.push=_.bind(m,a,"push")),a.$object=d,b.restangularizePromiseInterceptor&&b.restangularizePromiseInterceptor(a),a}function m(a){var c=d.defer(),e=arguments,f={};return this.then(function(b){var d=Array.prototype.slice.call(e,1),g=b[a];g.apply(b,d),f=b,c.resolve(b)}),l(c.promise,this[b.restangularFields.restangularCollection],f)}function n(a){var c=d.defer(),e={};return this.then(function(b){e=b[a],c.resolve(e)}),l(c.promise,this[b.restangularFields.restangularCollection],e)}function o(a,c,d,e){return _.extend(e,d),b.fullResponse?a.resolve(_.extend(c,{data:d})):(a.resolve(d),void 0)}function p(a){if(_.isArray(a)){var c=[];return _.each(a,function(a){c.push(b.isRestangularized(a)?p(a):a)}),c}return _.omit(a,_.values(_.omit(b.restangularFields,"id")))}function q(a){a[b.restangularFields.customOperation]=_.bind(K,a),_.each(["put","post","get","delete"],function(b){_.each(["do","custom"],function(c){var d,e="delete"===b?"remove":b,f=c+b.toUpperCase();d="put"!==e&&"post"!==e?K:function(a,b,c,d,e){return _.bind(K,this)(a,c,d,e,b)},a[f]=_.bind(d,a,e)})}),a[b.restangularFields.customGETLIST]=_.bind(y,a),a[b.restangularFields.doGETLIST]=a[b.restangularFields.customGETLIST]}function r(a,c){var d=angular.copy(a,c);return s(d[b.restangularFields.parentResource],d,d[b.restangularFields.route],!0)}function s(a,c,d,e,g,h){var i=b.onBeforeElemRestangularized(c,!1,d),j=f(a,i,d,h,e);return b.useCannonicalId&&(j[b.restangularFields.cannonicalId]=b.getIdFromElem(j)),g&&(j[b.restangularFields.getParentList]=function(){return g}),j[b.restangularFields.restangularCollection]=!1,j[b.restangularFields.get]=_.bind(C,j),j[b.restangularFields.getList]=_.bind(y,j),j[b.restangularFields.put]=_.bind(E,j),j[b.restangularFields.post]=_.bind(F,j),j[b.restangularFields.remove]=_.bind(D,j),j[b.restangularFields.head]=_.bind(G,j),j[b.restangularFields.trace]=_.bind(H,j),j[b.restangularFields.options]=_.bind(I,j),j[b.restangularFields.patch]=_.bind(J,j),j[b.restangularFields.save]=_.bind(A,j),q(j),b.transformElem(j,!1,d,O,!0)}function t(a,c,d,e,g){var h=b.onBeforeElemRestangularized(c,!0,d),i=f(a,h,d,g,e);return i[b.restangularFields.restangularCollection]=!0,i[b.restangularFields.post]=_.bind(F,i,null),i[b.restangularFields.remove]=_.bind(D,i),i[b.restangularFields.head]=_.bind(G,i),i[b.restangularFields.trace]=_.bind(H,i),i[b.restangularFields.putElement]=_.bind(w,i),i[b.restangularFields.options]=_.bind(I,i),i[b.restangularFields.patch]=_.bind(J,i),i[b.restangularFields.get]=_.bind(v,i),i[b.restangularFields.getList]=_.bind(y,i,null),q(i),b.transformElem(i,!0,d,O,!0)}function u(a,b,c){var d=t(a,b,c,!1);return _.each(d,function(b){s(a,b,c,!1)}),d}function v(a,b,c){return this.customGET(a.toString(),b,c)}function w(a,c,e){var f=this,g=this[a],h=d.defer(),i=[];return i=b.transformElem(i,!0,g[b.restangularFields.route],O),g.put(c,e).then(function(b){var c=r(f);c[a]=b,i=c,h.resolve(c)},function(a){h.reject(a)}),l(h.promise,!0,i)}function x(a,c,d,e,f,g){var h=b.responseExtractor(a,c,d,e,f,g),i=f.headers("ETag");return h&&i&&(h[b.restangularFields.etag]=i),h}function y(a,e,f){var g=this,h=d.defer(),i="getList",j=P.fetchUrl(this,a),k=a||g[b.restangularFields.route],m=b.fullRequestInterceptor(null,i,k,j,f||{},e||{},this[b.restangularFields.httpConfig]||{}),n=[];n=b.transformElem(n,!0,k,O);var p="getList";b.jsonp&&(p="jsonp");var q=function(c){var d=c.data,e=c.config.params,f=x(d,i,k,j,c,h);if((_.isUndefined(f)||""===f)&&(f=[]),!_.isArray(f))throw new Error("Response for getList SHOULD be an array and not an object or something else");var l=_.map(f,function(c){return g[b.restangularFields.restangularCollection]?s(g[b.restangularFields.parentResource],c,g[b.restangularFields.route],!0,f):s(g,c,a,!0,f)});l=_.extend(f,l),g[b.restangularFields.restangularCollection]?o(h,c,t(g[b.restangularFields.parentResource],l,g[b.restangularFields.route],!0,e),n):o(h,c,t(g,l,a,!0,e),n)};return P.resource(this,c,m.httpConfig,m.headers,m.params,a,this[b.restangularFields.etag],i)[p]().then(q,function(a){304===a.status&&g[b.restangularFields.restangularCollection]?o(h,a,g,n):_.every(b.errorInterceptors,function(b){return b(a,h,q)!==!1})&&h.reject(a)}),l(h.promise,!0,n)}function z(a){return this[b.restangularFields.httpConfig]=a,this}function A(a,c){return this[b.restangularFields.fromServer]?this[b.restangularFields.put](a,c):_.bind(B,this)("post",void 0,a,void 0,c)}function B(a,e,f,g,h){var i=this,j=d.defer(),k=f||{},m=e||this[b.restangularFields.route],n=P.fetchUrl(this,e),q=g||this,r=q[b.restangularFields.etag]||("post"!==a?this[b.restangularFields.etag]:null);_.isObject(q)&&b.isRestangularized(q)&&(q=p(q));var t=b.fullRequestInterceptor(q,a,m,n,h||{},k||{},this[b.restangularFields.httpConfig]||{}),u={};u=b.transformElem(u,!1,m,O);var v=function(c){var d=c.data,e=c.config.params,f=x(d,a,m,n,c,j);if(f)if("post"!==a||i[b.restangularFields.restangularCollection]){var g=s(i[b.restangularFields.parentResource],f,i[b.restangularFields.route],!0,null,e);g[b.restangularFields.singleOne]=i[b.restangularFields.singleOne],o(j,c,g,u)}else{var g=s(i[b.restangularFields.parentResource],f,m,!0,null,e);o(j,c,g,u)}else o(j,c,void 0,u)},w=function(c){304===c.status&&b.isSafe(a)?o(j,c,i,u):_.every(b.errorInterceptors,function(a){return a(c,j,v)!==!1})&&j.reject(c)},y=a,z=_.extend({},t.headers),A=b.isOverridenMethod(a);return A?(y="post",z=_.extend(z,{"X-HTTP-Method-Override":"remove"===a?"DELETE":a.toUpperCase()})):b.jsonp&&"get"===y&&(y="jsonp"),b.isSafe(a)?A?P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]({}).then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]().then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y](t.element).then(v,w),l(j.promise,!1,u)}function C(a,b){return _.bind(B,this)("get",void 0,a,void 0,b)}function D(a,b){return _.bind(B,this)("remove",void 0,a,void 0,b)}function E(a,b){return _.bind(B,this)("put",void 0,a,void 0,b)}function F(a,b,c,d){return _.bind(B,this)("post",a,c,b,d)}function G(a,b){return _.bind(B,this)("head",void 0,a,void 0,b)}function H(a,b){return _.bind(B,this)("trace",void 0,a,void 0,b)}function I(a,b){return _.bind(B,this)("options",void 0,a,void 0,b)}function J(a,b,c){return _.bind(B,this)("patch",void 0,b,a,c)}function K(a,b,c,d,e){return _.bind(B,this)(a,b,c,e,d)}function L(a,c,d,e,f,g){var h;h="getList"===c?_.bind(y,this,d):_.bind(K,this,c,d);var i=function(a,b,c){var d=_.defaults({params:a,headers:b,elem:c},{params:e,headers:f,elem:g});return h(d.params,d.headers,d.elem)};this[a]=b.isSafe(c)?i:function(a,b,c){return i(b,c,a)}}function M(c){var d=angular.copy(_.omit(b,"configuration"));return a.init(d,d),c(d),e(d)}function N(a,c){var d=_.values(b.restangularFields),e={},f=(c||O).all(a);e.one=_.bind(g,c||O,c,a),e.post=_.bind(f.post,f),e.getList=_.bind(f.getList,f);for(var h in f)f.hasOwnProperty(h)&&_.isFunction(f[h])&&!_.contains(d,h)&&(e[h]=_.bind(f[h],f));return e}var O={},P=new b.urlCreatorFactory[b.urlCreator];return P.setConfig(b),a.init(O,b),O.copy=_.bind(r,O),O.service=_.bind(N,O),O.withConfig=_.bind(M,O),O.one=_.bind(g,O,null),O.all=_.bind(h,O,null),O.several=_.bind(i,O,null),O.oneUrl=_.bind(j,O,null),O.allUrl=_.bind(k,O,null),O.stripRestangular=_.bind(p,O),O.restangularizeElement=_.bind(s,O),O.restangularizeCollection=_.bind(u,O),O}return e(b)}]})}();
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u4e0a\u5348",
      "\u4e0b\u5348"
    ],
    "DAY": [
      "\u661f\u671f\u65e5",
      "\u661f\u671f\u4e00",
      "\u661f\u671f\u4e8c",
      "\u661f\u671f\u4e09",
      "\u661f\u671f\u56db",
      "\u661f\u671f\u4e94",
      "\u661f\u671f\u516d"
    ],
    "ERANAMES": [
      "\u516c\u5143\u524d",
      "\u516c\u5143"
    ],
    "ERAS": [
      "\u516c\u5143\u524d",
      "\u516c\u5143"
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "\u4e00\u6708",
      "\u4e8c\u6708",
      "\u4e09\u6708",
      "\u56db\u6708",
      "\u4e94\u6708",
      "\u516d\u6708",
      "\u4e03\u6708",
      "\u516b\u6708",
      "\u4e5d\u6708",
      "\u5341\u6708",
      "\u5341\u4e00\u6708",
      "\u5341\u4e8c\u6708"
    ],
    "SHORTDAY": [
      "\u5468\u65e5",
      "\u5468\u4e00",
      "\u5468\u4e8c",
      "\u5468\u4e09",
      "\u5468\u56db",
      "\u5468\u4e94",
      "\u5468\u516d"
    ],
    "SHORTMONTH": [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "y\u5e74M\u6708d\u65e5EEEE",
    "longDate": "y\u5e74M\u6708d\u65e5",
    "medium": "y\u5e74M\u6708d\u65e5 ah:mm:ss",
    "mediumDate": "y\u5e74M\u6708d\u65e5",
    "mediumTime": "ah:mm:ss",
    "short": "yy/M/d ah:mm",
    "shortDate": "yy/M/d",
    "shortTime": "ah:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u00a5",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "zh-cn",
  "pluralCat": function(n, opt_precision) {  return PLURAL_CATEGORY.OTHER;}
});
}]);

(function(ng) {

    var module = ng.module('jb',[]),
        uid = 0;

    module.factory('jb$', function () {
        return {
            nextUid:nextUid,
            fmt:fmt
        };
    });

    function fmt() {
        var theString = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }
        return theString;
    }

    function nextUid() {
        return '_' + (++uid);
    }

})(angular);
(function(ng) {
    var module = ng.module('jb.auth', ['ui.router', 'LocalStorageModule']);

    module.factory('jbAuthUser', ["localStorageService", function (localStorageService) {
        function Xm() {
            return localStorageService.get('user');
        }

        return {
            Xm: Xm,
            isAuth: function () {
                return !!Xm();
            }
        };
    }]);

    module.provider('jbAuth', function () {
        var buffer = [], nextPath;

        function pushToBuffer(config, deferred, curPath) {
            buffer.push({
                config: config,
                deferred: deferred
            });
            if (curPath && (curPath != "/login")) {
                nextPath = curPath;
            }
        }

        this.$get = ["$rootScope", "$injector", "$location", "$cookies", "jbAuthUser", "localStorageService", function ($rootScope, $injector, $location, $cookies, jbAuthUser, localStorageService) {
            var $http; //initialized later because of circular dependency problem
            function retry(config, deferred) {
                $http = $http || $injector.get('$http');
                $http(config).then(function (response) {
                    deferred.resolve(response);
                });
            }

            function retryAll() {
                for (var i = 0; i < buffer.length; ++i) {
                    retry(buffer[i].config, buffer[i].deferred);
                }
                buffer = [];
            }

            return {
                pushToBuffer: pushToBuffer,
                loginConfirmed: function (id, name) {
                    localStorageService.set('token', id);
                    localStorageService.set('user', name);
                    $rootScope.$broadcast('event:authConfirmed');
                    retryAll();
                    if (nextPath) {
                        $location.path(nextPath);
                    }
                },
                logoutSuccess: function () {
                    localStorageService.clearAll();
                    $rootScope.$broadcast('event:authLogout');
                }
            };
        }];
    });

    module.factory('jbAuthInterceptor', ["$rootScope", "$q", "$location", "jbAuth", "localStorageService", function ($rootScope, $q, $location, jbAuth, localStorageService) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                var token = localStorageService.get("token");
                if (token !== null) {
                    config.headers.Authorization = 'jBreak ' + token;
                }
                return config;
            },
            //'requestError': function(rejection) {
            //    if (canRecover(rejection)) {
            //        return responseOrNewPromise
            //    }
            //    return $q.reject(rejection);
            //},
            //'response': function(response) {
            //
            //    return response;
            //},
            'responseError': function (rejection) {
                if (rejection.status === 403) {//Forbidden  401: Unauthorized
                    var deferred = $q.defer();
                    jbAuth.pushToBuffer(rejection.config, deferred, $location.path());
                    $rootScope.$broadcast('event:authRequest');
                    return deferred.promise;
                }
                return $q.reject(rejection);
            }
        };
    }]);

    module.config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push('jbAuthInterceptor');
    }]);

})(angular);
(function (ng) {
    var module = ng.module('jb.ctx', ['restangular']);

    function updateParams(ctx,params,newParams) {
        ctx.params = newParams ? params || {} : ng.extend(ctx.params || {}, params || {});
    }

    module.provider('$jbCtx', function () {
        this.$get = ["$q", "Restangular", "$state", "$stateParams", function ($q,Restangular,$state,$stateParams) {
            return {
                lst:ctxLst,
                page:ctxPage,
                obj:ctxObj,
                lstObj:ctxLstObj,
                pageObj:ctxPageObj,
                objSub:ctxObjSub
            };

            function ctxLstObj(name,pCtx,id){
                var ctx=ctxLst(name,pCtx);
                ctx.eCtx=ctxObj(name,ctx,id||'id');
                return ctx;
            }

            function ctxPageObj(name,pCtx,id){
                var ctx=ctxPage(name,pCtx);
                ctx.eCtx=ctxObj(name,ctx,id||'id');
                return ctx;
            }

            function ctxLst(name,pCtx) {
                var ctx = {
                    name: name,
                    p: pCtx,
                    lst: [],
                    res: res,
                    one:one,
                    refresh: refresh,
                    updateData: updateData
                };
                return ctx;
                function res() {
                    return pCtx ? pCtx.res() : Restangular;
                }
                function one(id) {
                    return res().one(name,id||'');
                }
                function refresh() {
                    return res().all(name).getList().then(ctx.updateData);
                }

                function updateData(data) {
                    ctx.lst = data;
                    return ctx.lst;
                }
            }

            function ctxPage(name,pCtx){
                var ctx=ng.extend( ctxLst(name,pCtx),{
                    refresh: refresh,
                    updateData:updateData,
                    pager: pager,
                    total: 0,
                    params:{filter: ''},
                    filter: {page: 1, perPage: 20}
                });
                return ctx;

                function refresh(filter,params,newParams) {
                    if (filter) ctx.filter = filter;
                    updateParams(ctx,params,newParams);
                    return ctx.res().all(name).all('actpage').post(ctx.filter).then(ctx.updateData);
                }
                function pager(page) {
                    ctx.filter.page = page;
                    refresh();
                }
                function updateData(data) {
                    ctx.lst = data.Items;
                    ctx.total=data.Total;
                    return ctx.lst;
                }
            }

            function ctxObj(name,pCtx, paramId,refreshParent,useParentRes) {
                refreshParent=refreshParent!=false;
                useParentRes=useParentRes!=false;

                var pRefresh = pCtx ? pCtx.refresh || ng.noop : ng.noop;
                var curRes;
                var ctx = {
                    p: pCtx,
                    name: name,
                    res: function res() { return curRes; },
                    refresh: refresh,
                    editId: editId,
                    view: view,
                    save: save,
                    saveRefresh: saveRefresh,
                    del: del,
                    updateData: updateData,
                    curId: ''
                };
                updateRes();
                return ctx;

                function refresh() {
                    return ctx.res().get().then(ctx.updateData);
                }

                function updateData(data) {
                    ctx.obj = data;
                    return ctx.obj;
                }

                function view(id) {
                    ctx.curId = id;
                    updateRes();
                }

                function editId(id) {
                    view(id);
                    if (id) return refresh();
                    else return ctx.res().post().then(ctx.updateData);
                }

                function save() {
                    return ctx.obj.save().then(pRefresh);
                }

                function saveRefresh() {
                    return save().then(function () {
                        if ($stateParams[paramId] === '') {
                            ctx.curId = $stateParams[paramId] = ctx.obj.Id;
                            $state.go('.', $stateParams);
                        }
                    });
                }

                function del() {
                    return ctx.obj.remove().then(pRefresh);
                }

                function updateRes(){
                    curRes= (useParentRes ? pCtx.res() : Restangular).one(name, ctx.curId);
                }
            }

            function ctxObjSub(name,pCtx) {
                var ctx = {
                    p: pCtx,
                    name: name,
                    add: function () {
                        ctx._obj = ctx.obj = null;
                    },
                    edit: function (obj) {
                        ctx._obj = obj;
                        ctx.obj = ng.copy(obj);
                    },
                    save: save,
                    saveRefresh: save,
                    del: del
                };
                return ctx;

                function save() {
                    if (ctx._obj) {
                        ctx._obj = ng.extend(ctx._obj, ctx.obj);
                    } else {
                        ctx._obj = ng.extend({}, ctx.obj);
                        ctx.p.obj[name].push(ctx._obj);
                    }
                }

                function del() {
                    if (ctx._obj) {
                        ctx.p.obj[name] = _.without(ctx.p.obj[name], ctx._obj);
                    }
                }
            }
        }];
    });

})(angular);
(function (ng) {
    var module = ng.module('jb.filter', []);

    module.provider('$jbFilter', function () {

        this.$get = function () {

            return {
                rule: makeRule,
                group: makeGroup,
                group2: makeGroup2
            };
        };
    });

    function makeGroup(condition, rule1, rule2) {
        return {
            Condition: condition || 'NONE',
            Rules: [rule1, rule2]
        };
    }

    function makeGroup2(condition, field, opt) {
        return makeGroup(condition, makeRule(field, opt), makeRule(field, opt));
    }

    function makeRule(field,opt,val1,val2){
        var re = {
            Field: field,
            Opt: opt||'contains',
            Val1: val1||'',
            Val2: val2||''
        };
        re.hello = function () {
            console.log('hi');
        };
        return re;
    }
})(angular);
(function (ng) {
    var module = ng.module('jb.zd', ['restangular']);

    module.provider('$jbZd', function () {
        this.$get = ["$cacheFactory", "Restangular", "$q", function ($cacheFactory, Restangular, $q) {
            var zd = $cacheFactory('jbZd');
            return {
                get: get
            };

            function get(bq) {
                var lst = zd.get(bq);
                if (lst) return $q.when(lst);

                return Restangular.allUrl('jbzd', '/api/jbzd/bq/' + bq).getList().then(function (data) {
                    zd.put(bq, data.plain());
                    return data.plain();
                });
            }
        }];
    });

})(angular);
angular.module('jb.be', []);

angular.module('jb.ui', ['ngLocale', 'jb.ui.tpls', 'jb.util', 'jb', 'jb.ui.table', 'jb.zd', 'jb.ui.widget']);

angular.module('jb.util.dateParser', [])
    .provider('$jbDateParser', ["$localeProvider", function ($localeProvider) {

        // define a custom ParseDate object to use instead of native Date
        // to avoid date values wrapping when setting date component values
        function ParseDate() {
            this.year = 1970;
            this.month = 0;
            this.day = 1;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.milliseconds = 0;
        }

        ParseDate.prototype.setMilliseconds = function (value) {
            this.milliseconds = value;
        };
        ParseDate.prototype.setSeconds = function (value) {
            this.seconds = value;
        };
        ParseDate.prototype.setMinutes = function (value) {
            this.minutes = value;
        };
        ParseDate.prototype.setHours = function (value) {
            this.hours = value;
        };
        ParseDate.prototype.getHours = function () {
            return this.hours;
        };
        ParseDate.prototype.setDate = function (value) {
            this.day = value;
        };
        ParseDate.prototype.setMonth = function (value) {
            this.month = value;
        };
        ParseDate.prototype.setFullYear = function (value) {
            this.year = value;
        };
        ParseDate.prototype.fromDate = function (value) {
            this.year = value.getFullYear();
            this.month = value.getMonth();
            this.day = value.getDate();
            this.hours = value.getHours();
            this.minutes = value.getMinutes();
            this.seconds = value.getSeconds();
            this.milliseconds = value.getMilliseconds();
            return this;
        };

        ParseDate.prototype.toDate = function () {
            return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
        };

        var proto = ParseDate.prototype;

        function noop() {
        }

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        function indexOfCaseInsensitive(array, value) {
            var len = array.length, str = value.toString().toLowerCase();
            for (var i = 0; i < len; i++) {
                if (array[i].toLowerCase() === str) {
                    return i;
                }
            }
            return -1; // Return -1 per the "Array.indexOf()" method.
        }

        var defaults = this.defaults = {
            format: 'shortDate',
            strict: false
        };

        this.$get = ["$locale", "dateFilter", function ($locale, dateFilter) {

            var DateParserFactory = function (config) {

                var options = angular.extend({}, defaults, config);

                var $dateParser = {};

                var regExpMap = {
                    'sss': '[0-9]{3}',
                    'ss': '[0-5][0-9]',
                    's': options.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]',
                    'mm': '[0-5][0-9]',
                    'm': options.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]',
                    'HH': '[01][0-9]|2[0-3]',
                    'H': options.strict ? '1?[0-9]|2[0-3]' : '[01]?[0-9]|2[0-3]',
                    'hh': '[0][1-9]|[1][012]',
                    'h': options.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]',
                    'a': 'AM|PM',
                    'EEEE': $locale.DATETIME_FORMATS.DAY.join('|'),
                    'EEE': $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
                    'dd': '0[1-9]|[12][0-9]|3[01]',
                    'd': options.strict ? '[1-9]|[1-2][0-9]|3[01]' : '0?[1-9]|[1-2][0-9]|3[01]',
                    'MMMM': $locale.DATETIME_FORMATS.MONTH.join('|'),
                    'MMM': $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
                    'MM': '0[1-9]|1[012]',
                    'M': options.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]',
                    'yyyy': '[1]{1}[0-9]{3}|[2]{1}[0-9]{3}',
                    'yy': '[0-9]{2}',
                    'y': options.strict ? '-?(0|[1-9][0-9]{0,3})' : '-?0*[0-9]{1,4}',
                };

                var setFnMap = {
                    'sss': proto.setMilliseconds,
                    'ss': proto.setSeconds,
                    's': proto.setSeconds,
                    'mm': proto.setMinutes,
                    'm': proto.setMinutes,
                    'HH': proto.setHours,
                    'H': proto.setHours,
                    'hh': proto.setHours,
                    'h': proto.setHours,
                    'EEEE': noop,
                    'EEE': noop,
                    'dd': proto.setDate,
                    'd': proto.setDate,
                    'a': function (value) {
                        var hours = this.getHours() % 12;
                        return this.setHours(value.match(/pm/i) ? hours + 12 : hours);
                    },
                    'MMMM': function (value) {
                        return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.MONTH, value));
                    },
                    'MMM': function (value) {
                        return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.SHORTMONTH, value));
                    },
                    'MM': function (value) {
                        return this.setMonth(1 * value - 1);
                    },
                    'M': function (value) {
                        return this.setMonth(1 * value - 1);
                    },
                    'yyyy': proto.setFullYear,
                    'yy': function (value) {
                        return this.setFullYear(2000 + 1 * value);
                    },
                    'y': proto.setFullYear
                };

                var regex, setMap;

                $dateParser.init = function () {
                    $dateParser.$format = $locale.DATETIME_FORMATS[options.format] || options.format;
                    regex = regExpForFormat($dateParser.$format);
                    setMap = setMapForFormat($dateParser.$format);
                };

                $dateParser.isValid = function (date) {
                    if (angular.isDate(date)) return !isNaN(date.getTime());
                    return regex.test(date);
                };

                $dateParser.parse = function (value, baseDate, format) {
                    // check for date format special names
                    if (format) format = $locale.DATETIME_FORMATS[format] || format;
                    if (angular.isDate(value)) value = dateFilter(value, format || $dateParser.$format);
                    var formatRegex = format ? regExpForFormat(format) : regex;
                    var formatSetMap = format ? setMapForFormat(format) : setMap;
                    var matches = formatRegex.exec(value);
                    if (!matches) return false;
                    // use custom ParseDate object to set parsed values
                    var date = baseDate && !isNaN(baseDate.getTime()) ? new ParseDate().fromDate(baseDate) : new ParseDate().fromDate(new Date(1970, 0, 1, 0));
                    for (var i = 0; i < matches.length - 1; i++) {
                        if (formatSetMap[i]) formatSetMap[i].call(date, matches[i + 1]);
                    }
                    // convert back to native Date object
                    var newDate = date.toDate();

                    // check new native Date object for day values overflow
                    if (parseInt(date.day, 10) !== newDate.getDate()) {
                        return false;
                    }

                    return newDate;
                };

                $dateParser.getDateForAttribute = function (key, value) {
                    var date;

                    if (value === 'today') {
                        var today = new Date();
                        date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (key === 'maxDate' ? 1 : 0), 0, 0, 0, (key === 'minDate' ? 0 : -1));
                    } else if (angular.isString(value) && value.match(/^".+"$/)) { // Support {{ dateObj }}
                        date = new Date(value.substr(1, value.length - 2));
                    } else if (isNumeric(value)) {
                        date = new Date(parseInt(value, 10));
                    } else if (angular.isString(value) && 0 === value.length) { // Reset date
                        date = key === 'minDate' ? -Infinity : +Infinity;
                    } else {
                        date = new Date(value);
                    }

                    return date;
                };

                $dateParser.getTimeForAttribute = function (key, value) {
                    var time;

                    if (value === 'now') {
                        time = new Date().setFullYear(1970, 0, 1);
                    } else if (angular.isString(value) && value.match(/^".+"$/)) {
                        time = new Date(value.substr(1, value.length - 2)).setFullYear(1970, 0, 1);
                    } else if (isNumeric(value)) {
                        time = new Date(parseInt(value, 10)).setFullYear(1970, 0, 1);
                    } else if (angular.isString(value) && 0 === value.length) { // Reset time
                        time = key === 'minTime' ? -Infinity : +Infinity;
                    } else {
                        time = $dateParser.parse(value, new Date(1970, 0, 1, 0));
                    }

                    return time;
                };

                /* Handle switch to/from daylight saving.
                 * Hours may be non-zero on daylight saving cut-over:
                 * > 12 when midnight changeover, but then cannot generate
                 * midnight datetime, so jump to 1AM, otherwise reset.
                 * @param  date  (Date) the date to check
                 * @return  (Date) the corrected date
                 *
                 * __ copied from jquery ui datepicker __
                 */
                $dateParser.daylightSavingAdjust = function (date) {
                    if (!date) {
                        return null;
                    }
                    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
                    return date;
                };

                // Private functions

                function setMapForFormat(format) {
                    var keys = Object.keys(setFnMap), i;
                    var map = [], sortedMap = [];
                    // Map to setFn
                    var clonedFormat = format;
                    for (i = 0; i < keys.length; i++) {
                        if (format.split(keys[i]).length > 1) {
                            var index = clonedFormat.search(keys[i]);
                            format = format.split(keys[i]).join('');
                            if (setFnMap[keys[i]]) {
                                map[index] = setFnMap[keys[i]];
                            }
                        }
                    }
                    // Sort result map
                    angular.forEach(map, function (v) {
                        // conditional required since angular.forEach broke around v1.2.21
                        // related pr: https://github.com/angular/angular.js/pull/8525
                        if (v) sortedMap.push(v);
                    });
                    return sortedMap;
                }

                function escapeReservedSymbols(text) {
                    return text.replace(/\//g, '[\\/]').replace('/-/g', '[-]').replace(/\./g, '[.]').replace(/\\s/g, '[\\s]');
                }

                function regExpForFormat(format) {
                    var keys = Object.keys(regExpMap), i;

                    var re = format;
                    // Abstract replaces to avoid collisions
                    for (i = 0; i < keys.length; i++) {
                        re = re.split(keys[i]).join('${' + i + '}');
                    }
                    // Replace abstracted values
                    for (i = 0; i < keys.length; i++) {
                        re = re.split('${' + i + '}').join('(' + regExpMap[keys[i]] + ')');
                    }
                    format = escapeReservedSymbols(format);

                    return new RegExp('^' + re + '$', ['i']);
                }

                $dateParser.init();
                return $dateParser;

            };

            return DateParserFactory;

        }];

    }])
    .service('$jbDateFormatter', ["$locale", "dateFilter", function ($locale, dateFilter) {
        // The unused `lang` arguments are on purpose. The default implementation does not
        // use them and it always uses the locale loaded into the `$locale` service.
        // Custom implementations might use it, thus allowing different directives to
        // have different languages.

        this.getDefaultLocale = function () {
            return $locale.id;
        };

        // Format is either a data format name, e.g. "shortTime" or "fullDate", or a date format
        // Return either the corresponding date format or the given date format.
        this.getDatetimeFormat = function (format, lang) {
            return $locale.DATETIME_FORMATS[format] || format;
        };

        this.weekdaysShort = function (lang) {
            return $locale.DATETIME_FORMATS.SHORTDAY;
        };

        function splitTimeFormat(format) {
            return /(h+)([:\.])?(m+)[ ]?(a?)/i.exec(format).slice(1);
        }

        // h:mm a => h
        this.hoursFormat = function (timeFormat) {
            return splitTimeFormat(timeFormat)[0];
        };

        // h:mm a => mm
        this.minutesFormat = function (timeFormat) {
            return splitTimeFormat(timeFormat)[2];
        };

        // h:mm a => :
        this.timeSeparator = function (timeFormat) {
            return splitTimeFormat(timeFormat)[1];
        };

        // h:mm a => true, H.mm => false
        this.showAM = function (timeFormat) {
            return !!splitTimeFormat(timeFormat)[3];
        };

        this.formatDate = function (date, format, lang) {
            return dateFilter(date, format);
        };

    }]);
(function() {
    var module = angular.module('jb.util.parseOptions',[]);
    module.provider('$jbParseOptions', function() {

        var defaults = this.defaults = {
            regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/
        };

        this.$get = ["$parse", "$q", function ($parse, $q) {

            function ParseOptionsFactory(attr, config) {

                var $parseOptions = {};

                // Common vars
                var options = angular.extend({}, defaults, config);
                $parseOptions.$values = [];

                // Private vars
                var match, displayFn, valueName, keyName, groupByFn, valueFn, valuesFn;

                $parseOptions.init = function () {
                    $parseOptions.$match = match = attr.match(options.regexp);
                    displayFn = $parse(match[2] || match[1]);
                    valueName = match[4] || match[6];
                    keyName = match[5];
                    groupByFn = $parse(match[3] || '');
                    valueFn = $parse(match[2] ? match[1] : valueName);
                        valuesFn = $parse(match[7]);
                };

                $parseOptions.valuesFn = function (scope, controller) {
                    return $q.when(valuesFn(scope, controller))
                        .then(function (values) {
                            $parseOptions.$values = values ? parseValues(values, scope) : {};
                            return $parseOptions.$values;
                        });
                };

                $parseOptions.displayValue = function (modelValue) {
                    var scope = {};
                    scope[valueName] = modelValue;
                    return displayFn(scope);
                };

                // Private functions

                function parseValues(values, scope) {
                    return values.map(function (match, index) {
                        var locals = {}, label, value;
                        locals[valueName] = match;
                        label = displayFn(scope, locals);
                        value = valueFn(scope, locals);
                        return {label: label, value: value, index: index};
                    });
                }

                $parseOptions.init();
                return $parseOptions;

            }

            return ParseOptionsFactory;

        }];
    });
})();
angular.module('jb.util.position', [])
    .factory('$jbPosition', ['$document', '$window', function ($document, $window) {

        function getStyle(el, cssprop) {
            if (el.currentStyle) { //IE
                return el.currentStyle[cssprop];
            } else if ($window.getComputedStyle) {
                return $window.getComputedStyle(el)[cssprop];
            }
            // finally try and get inline style
            return el.style[cssprop];
        }

        /**
         * Checks if a given element is statically positioned
         * @param element - raw DOM element
         */
        function isStaticPositioned(element) {
            return (getStyle(element, 'position') || 'static' ) === 'static';
        }

        /**
         * returns the closest, non-statically positioned parentOffset of a given element
         * @param element
         */
        var parentOffsetEl = function (element) {
            var docDomEl = $document[0];
            var offsetParent = element.offsetParent || docDomEl;
            while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
                offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || docDomEl;
        };

        return {
            /**
             * Provides read-only equivalent of jQuery's position function:
             * http://api.jquery.com/position/
             */
            position: function (element) {
                var elBCR = this.offset(element);
                var offsetParentBCR = {top: 0, left: 0};
                var offsetParentEl = parentOffsetEl(element[0]);
                if (offsetParentEl != $document[0]) {
                    offsetParentBCR = this.offset(angular.element(offsetParentEl));
                    offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
                    offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
                }

                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop('offsetWidth'),
                    height: boundingClientRect.height || element.prop('offsetHeight'),
                    top: elBCR.top - offsetParentBCR.top,
                    left: elBCR.left - offsetParentBCR.left
                };
            },

            /**
             * Provides read-only equivalent of jQuery's offset function:
             * http://api.jquery.com/offset/
             */
            offset: function (element) {
                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop('offsetWidth'),
                    height: boundingClientRect.height || element.prop('offsetHeight'),
                    top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
                    left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
                };
            },

            /**
             * Provides coordinates for the targetEl in relation to hostEl
             */
            positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

                var positionStrParts = positionStr.split('-');
                var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

                var hostElPos,
                    targetElWidth,
                    targetElHeight,
                    targetElPos;

                hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

                targetElWidth = targetEl.prop('offsetWidth');
                targetElHeight = targetEl.prop('offsetHeight');

                var shiftWidth = {
                    center: function () {
                        return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
                    },
                    left: function () {
                        return hostElPos.left;
                    },
                    right: function () {
                        return hostElPos.left + hostElPos.width;
                    }
                };

                var shiftHeight = {
                    center: function () {
                        return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
                    },
                    top: function () {
                        return hostElPos.top;
                    },
                    bottom: function () {
                        return hostElPos.top + hostElPos.height;
                    }
                };

                switch (pos0) {
                    case 'right':
                        targetElPos = {
                            top: shiftHeight[pos1](),
                            left: shiftWidth[pos0]()
                        };
                        break;
                    case 'left':
                        targetElPos = {
                            top: shiftHeight[pos1](),
                            left: hostElPos.left - targetElWidth
                        };
                        break;
                    case 'bottom':
                        targetElPos = {
                            top: shiftHeight[pos0](),
                            left: shiftWidth[pos1]()
                        };
                        break;
                    default:
                        targetElPos = {
                            top: hostElPos.top - targetElHeight,
                            left: shiftWidth[pos1]()
                        };
                        break;
                }

                return targetElPos;
            }
        };
    }]);
angular.module('jb.util', ['jb.util.dateParser', 'jb.util.position','jb.util.parseOptions']);

angular.module('jb.ui')
    .provider('$jbAlert', function () {
        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'alert',
            prefixEvent: 'alert',
            placement: null,
            template: 'jb/ui/alert/alert.tpl.html',
            container: false,
            element: null,
            backdrop: false,
            keyboard: true,
            show: true,
            // Specific options
            duration: false,
            type: false,
            dismissable: true
        };

        this.$get = ["$timeout", "$jbModal", function ($timeout, $jbModal) {
            function AlertFactory(config) {
                var $alert = {};
                var options = angular.extend({}, defaults, config);
                $alert = $jbModal(options);

                // Support scope as string options [/*title, content, */ type, dismissable]
                $alert.$scope.dismissable = !!options.dismissable;
                if (options.type) {
                    $alert.$scope.type = options.type;
                }

                // Support auto-close duration
                var show = $alert.show;
                if (options.duration) {
                    $alert.show = function () {
                        show();
                        $timeout(function () {
                            $alert.hide();
                        }, options.duration * 1000);
                    };
                }
                return $alert;
            }

            return AlertFactory;
        }];
    })

    .directive('jbAlert', ["$window", "$sce", "$jbAlert", function ($window, $sce, $jbAlert) {
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                angular.forEach(['title', 'content', 'type'], function (key) {
                    if (attr[key]) attr.$observe(key, function (newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue);
                    });
                });
                if (attr.jbAlert)
                    scope.$watch(attr.jbAlert, function (newValue, oldValue) {
                        if (angular.isObject(newValue)) {
                            angular.extend(scope, newValue);
                        } else {
                            scope.content = newValue;
                        }
                    }, true);

                var alert = $jbAlert(options);

                element.on(attr.trigger || 'click', alert.toggle);
                scope.$on('$destroy', function () {
                    if (alert) alert.destroy();
                    options = null;
                    alert = null;
                });
            }
        };

    }]);
angular.module('jb.ui')
    .provider('$jbAside', function () {

        var defaults = this.defaults = {
            animation: 'am-fade-and-slide-right',
            type: 'aside',
            placement: null,
            template: 'jb/ui/aside/aside.tpl.html',
            contentTemplate: false,
            container: false,
            element: null,
            backdrop: true,
            keyboard: true,
            html: true,
            show: true
        };

        this.$get = ["$jbModal", function ($jbModal) {
            function AsideFactory(config) {
                var $aside = {};
                var options = angular.extend({}, defaults, config);
                $aside = $jbModal(options);
                return $aside;
            }

            return AsideFactory;
        }];
    })

    .directive('jbAside', ["$window", "$sce", "$jbAside", function ($window, $sce, $jbAside) {

        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) {
                        attr.$observe(key, function (newValue, oldValue) {
                            scope[key] = $sce.trustAsHtml(newValue);
                        });
                    }
                });

                // Support scope as an object
              if(  attr.jbAside ) {
                  scope.$watch(attr.jbAside, function (newValue, oldValue) {
                      if (angular.isObject(newValue)) {
                          angular.extend(scope, newValue);
                      } else {
                          scope.content = newValue;
                      }
                  }, true);
              }
                // Initialize aside
                var aside = $jbAside(options);

                // Trigger
                element.on(attr.trigger || 'click', aside.toggle);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (aside) aside.destroy();
                    options = null;
                    aside = null;
                });

            }
        };

    }]);
(function() {
    var module = angular.module('jb.ui');

    var btnDefaults = {
        activeClass: 'active',
        toggleEvent: 'click'
    };

    module.directive('jbCheckboxGroup', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            compile: function postLink(element, attr) {
                element.attr('data-toggle', 'buttons');
                element.removeAttr('ng-model');
                var children = element[0].querySelectorAll('input[type="checkbox"]');
                angular.forEach(children, function (child) {
                    var childEl = angular.element(child);
                    childEl.attr('jb-checkbox', '');
                    childEl.attr('ng-model', attr.ngModel + '.' + childEl.attr('value'));
                });
            }

        };

    });

    module.directive('jbCheckbox', ["$$rAF", function ( $$rAF) {

        var constantValueRegExp = /^(true|false|\d+)$/;

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                var options = btnDefaults;

                // Support label > input[type="checkbox"]
                var isInput = element[0].nodeName === 'INPUT';
                var activeElement = isInput ? element.parent() : element;

                var trueValue = angular.isDefined(attr.trueValue) ? attr.trueValue : true;
                if (constantValueRegExp.test(attr.trueValue)) {
                    trueValue = scope.$eval(attr.trueValue);
                }
                var falseValue = angular.isDefined(attr.falseValue) ? attr.falseValue : false;
                if (constantValueRegExp.test(attr.falseValue)) {
                    falseValue = scope.$eval(attr.falseValue);
                }

                // Parse exotic values
                var hasExoticValues = typeof trueValue !== 'boolean' || typeof falseValue !== 'boolean';
                if (hasExoticValues) {
                    controller.$parsers.push(function (viewValue) {
                        // console.warn('$parser', element.attr('ng-model'), 'viewValue', viewValue);
                        return viewValue ? trueValue : falseValue;
                    });
                    // modelValue -> $formatters -> viewValue
                    controller.$formatters.push(function (modelValue) {
                        // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                        return angular.equals(modelValue, trueValue);
                    });
                    // Fix rendering for exotic values
                    scope.$watch(attr.ngModel, function (newValue, oldValue) {
                        controller.$render();
                    });
                }

                // model -> view
                controller.$render = function () {
                    // console.warn('$render', element.attr('ng-model'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var isActive = angular.equals(controller.$modelValue, trueValue);
                    $$rAF(function () {
                        if (isInput) element[0].checked = isActive;
                        activeElement.toggleClass(options.activeClass, isActive);
                    });
                };

                // view -> model
                element.bind(options.toggleEvent, function () {
                    scope.$apply(function () {
                        // console.warn('!click', element.attr('ng-model'), 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue, 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue);
                        if (!isInput) {
                            controller.$setViewValue(!activeElement.hasClass('active'));
                        }
                        if (!hasExoticValues) {
                            controller.$render();
                        }
                    });
                });

            }

        };

    }]);

    module.directive('jbRadioGroup', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            compile: function postLink(element, attr) {
                element.attr('data-toggle', 'buttons');
                element.removeAttr('ng-model');
                var children = element[0].querySelectorAll('input[type="radio"]');
                angular.forEach(children, function (child) {
                    angular.element(child).attr('jb-radio', '');
                    angular.element(child).attr('ng-model', attr.ngModel);
                });
            }

        };

    });

    module.directive('jbRadio', ["$$rAF", function ( $$rAF) {

        var constantValueRegExp = /^(true|false|\d+)$/;

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                var options = btnDefaults;

                // Support `label > input[type="radio"]` markup
                var isInput = element[0].nodeName === 'INPUT';
                var activeElement = isInput ? element.parent() : element;

                var value;
                attr.$observe('value', function (v) {
                    value = constantValueRegExp.test(v) ? scope.$eval(v) : v;
                    controller.$render();
                });

                // model -> view
                controller.$render = function () {
                    // console.warn('$render', element.attr('value'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var isActive = angular.equals(controller.$modelValue, value);
                    $$rAF(function () {
                        if (isInput) element[0].checked = isActive;
                        activeElement.toggleClass(options.activeClass, isActive);
                    });
                };

                // view -> model
                element.bind(options.toggleEvent, function () {
                    scope.$apply(function () {
                        // console.warn('!click', element.attr('value'), 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue, 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue);
                        controller.$setViewValue(value);
                        controller.$render();
                    });
                });

            }

        };


    }]);

})();
angular.module('jb.ui')
    .directive('jbCheckList', function () {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '=', jbOther: '='},
            templateUrl: "jb/ui/checkList/checkList.tpl.html",
            link: function (scope, element, attrs) {

                if (!angular.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }

                setup(scope.jbVal);

                function setup(val) {
                    var other = [];
                    scope.selection = [];
                    val.split(';').forEach(function (item) {
                        if (scope.jbSrc.indexOf(item) > -1) {
                            scope.selection.push(item);
                        } else if (scope.jbOther && item) {
                            other.push(item);
                        }
                    });
                    scope.otherCk = (other.length>0);
                    scope.otherVal =other.join(';');
                }

                function updateJbVal() {
                    var val = scope.selection;
                    if (scope.jbOther && scope.otherVal) {
                        val.push(scope.otherVal);
                    }
                    scope.jbVal = val.join(';');
                }

                scope.toggleOther = function toggleOther() {
                    scope.otherCk = !scope.otherCk;
                    if (!scope.otherCk) {
                        scope.otherVal = '';
                    }
                    updateJbVal();
                };
                scope.toggleSelection = function toggleSelection(item) {
                    var idx = scope.selection.indexOf(item);
                    if (idx > -1) {
                        scope.selection.splice(idx, 1);
                    }
                    else {
                        scope.selection.push(item);
                    }
                    updateJbVal();
                };
                scope.$watch('otherVal', function (newval) {
                    scope.otherCk = !!newval;
                    updateJbVal();
                });
                scope.$watch('jbVal', setup);
            }
        };
    });

angular.module('jb.ui')

    .provider('$jbDate', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'datepicker',
            placement: 'bottom-left',
            template: 'jb/ui/datetime/datepicker.tpl.html',
            trigger: 'focus',
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            // lang: $locale.id,
            useNative: false,
            dateType: 'date',
            dateFormat: 'yyyy-MM-dd',
            modelDateFormat: null,
            dayFormat: 'dd',
            monthFormat: 'MMM',
            yearFormat: 'yyyy',
            monthTitleFormat: 'MMMM yyyy',
            yearTitleFormat: 'yyyy',
            strictFormat: false,
            autoclose: false,
            minDate: -Infinity,
            maxDate: +Infinity,
            startView: 0,
            minView: 0,
            startWeek: 0,
            daysOfWeekDisabled: '',
            iconLeft: 'glyphicon glyphicon-chevron-left',
            iconRight: 'glyphicon glyphicon-chevron-right'
        };

        this.$get = ["$window", "$document", "$rootScope", "$sce", "$jbDateFormatter", "datepickerViews", "$jbTip", "$timeout", function ($window, $document, $rootScope, $sce, $jbDateFormatter, datepickerViews, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
            var isTouch = ('createTouch' in $window.document) && isNative;
            if (!defaults.lang) defaults.lang = $jbDateFormatter.getDefaultLocale();

            function DatepickerFactory(element, controller, config) {

                var $datepicker = $jbTip(element, angular.extend({}, defaults, config));
                var parentScope = config.scope;
                var options = $datepicker.$options;
                var scope = $datepicker.$scope;
                if (options.startView) options.startView -= options.minView;

                // View vars

                var pickerViews = datepickerViews($datepicker);
                $datepicker.$views = pickerViews.views;
                var viewDate = pickerViews.viewDate;
                scope.$mode = options.startView;
                scope.$iconLeft = options.iconLeft;
                scope.$iconRight = options.iconRight;
                var $picker = $datepicker.$views[scope.$mode];

                // Scope methods

                scope.$select = function (date) {
                    $datepicker.select(date);
                };
                scope.$selectPane = function (value) {
                    $datepicker.$selectPane(value);
                };
                scope.$toggleMode = function () {
                    $datepicker.setMode((scope.$mode + 1) % $datepicker.$views.length);
                };

                // Public methods

                $datepicker.update = function (date) {
                    // console.warn('$datepicker.update() newValue=%o', date);
                    if (angular.isDate(date) && !isNaN(date.getTime())) {
                        $datepicker.$date = date;
                        $picker.update.call($picker, date);
                    }
                    // Build only if pristine
                    $datepicker.$build(true);
                };

                $datepicker.updateDisabledDates = function (dateRanges) {
                    options.disabledDateRanges = dateRanges;
                    for (var i = 0, l = scope.rows.length; i < l; i++) {
                        angular.forEach(scope.rows[i], $datepicker.$setDisabledEl);
                    }
                };

                $datepicker.select = function (date, keep) {
                    // console.warn('$datepicker.select', date, scope.$mode);
                    if (!angular.isDate(controller.$dateValue)) controller.$dateValue = new Date(date);

                    if (!scope.$mode || keep) {
                        controller.$setViewValue(angular.copy(date));
                        controller.$render();
                        if (options.autoclose && !keep) {
                            $timeout(function () {
                                $datepicker.hide(true);
                            });
                        }
                    } else {
                        angular.extend(viewDate, {
                            year: date.getFullYear(),
                            month: date.getMonth(),
                            date: date.getDate()
                        });
                        $datepicker.setMode(scope.$mode - 1);
                        $datepicker.$build();
                    }
                };

                $datepicker.setMode = function (mode) {
                    // console.warn('$datepicker.setMode', mode);
                    scope.$mode = mode;
                    $picker = $datepicker.$views[scope.$mode];
                    $datepicker.$build();
                };

                // Protected methods

                $datepicker.$build = function (pristine) {
                    // console.warn('$datepicker.$build() viewDate=%o', viewDate);
                    if (pristine === true && $picker.built) return;
                    if (pristine === false && !$picker.built) return;
                    $picker.build.call($picker);
                };

                $datepicker.$updateSelected = function () {
                    for (var i = 0, l = scope.rows.length; i < l; i++) {
                        angular.forEach(scope.rows[i], updateSelected);
                    }
                };

                $datepicker.$isSelected = function (date) {
                    return $picker.isSelected(date);
                };

                $datepicker.$setDisabledEl = function (el) {
                    el.disabled = $picker.isDisabled(el.date);
                };

                $datepicker.$selectPane = function (value) {
                    var steps = $picker.steps;
                    // set targetDate to first day of month to avoid problems with
                    // date values rollover. This assumes the viewDate does not
                    // depend on the day of the month
                    var targetDate = new Date(Date.UTC(viewDate.year + ((steps.year || 0) * value), viewDate.month + ((steps.month || 0) * value), 1));
                    angular.extend(viewDate, {
                        year: targetDate.getUTCFullYear(),
                        month: targetDate.getUTCMonth(),
                        date: targetDate.getUTCDate()
                    });
                    $datepicker.$build();
                };

                $datepicker.$onMouseDown = function (evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        if (targetEl[0].nodeName.toLowerCase() !== 'button') {
                            targetEl = targetEl.parent();
                        }
                        targetEl.triggerHandler('click');
                    }
                };

                $datepicker.$onKeyDown = function (evt) {
                    if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    if (evt.keyCode === 13) {
                        if (!scope.$mode) {
                            return $datepicker.hide(true);
                        } else {
                            return scope.$apply(function () {
                                $datepicker.setMode(scope.$mode - 1);
                            });
                        }
                    }

                    // Navigate with keyboard
                    $picker.onKeyDown(evt);
                    parentScope.$digest();
                };

                // Private

                function updateSelected(el) {
                    el.selected = $datepicker.$isSelected(el.date);
                }

                function focusElement() {
                    element[0].focus();
                }

                // Overrides

                var _init = $datepicker.init;
                $datepicker.init = function () {
                    if (isNative && options.useNative) {
                        element.prop('type', 'date');
                        element.css('-webkit-appearance', 'textfield');
                        return;
                    } else if (isTouch) {
                        element.prop('type', 'text');
                        element.attr('readonly', 'true');
                        element.on('click', focusElement);
                    }
                    _init();
                };

                var _destroy = $datepicker.destroy;
                $datepicker.destroy = function () {
                    if (isNative && options.useNative) {
                        element.off('click', focusElement);
                    }
                    _destroy();
                };

                var _show = $datepicker.show;
                $datepicker.show = function () {
                    _show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        // if $datepicker is no longer showing, don't setup events
                        if (!$datepicker.$isShown) return;
                        $datepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
                        if (options.keyboard) {
                            element.on('keydown', $datepicker.$onKeyDown);
                        }
                    }, 0, false);
                };

                var _hide = $datepicker.hide;
                $datepicker.hide = function (blur) {
                    if (!$datepicker.$isShown) return;
                    $datepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
                    if (options.keyboard) {
                        element.off('keydown', $datepicker.$onKeyDown);
                    }
                    _hide(blur);
                };

                return $datepicker;

            }

            DatepickerFactory.defaults = defaults;
            return DatepickerFactory;

        }];

    })

    .directive('jbDate', ["$window", "$parse", "$q", "$jbDateFormatter", "$jbDateParser", "$jbDate", function ($window, $parse, $q, $jbDateFormatter, $jbDateParser, $jbDate) {

        var defaults = $jbDate.defaults;
        var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);

        return {
            restrict: 'EAC',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                // Directive options
                var options = {scope: scope, controller: controller};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'dateType', 'dateFormat', 'modelDateFormat', 'dayFormat', 'strictFormat', 'startWeek', 'startDate', 'useNative', 'lang', 'startView', 'minView', 'iconLeft', 'iconRight', 'daysOfWeekDisabled', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Visibility binding support
                if (attr.bsShow) scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!datepicker || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(datepicker),?/i);
                    if (newValue === true) datepicker.show(); else datepicker.hide();
                });

                // Initialize datepicker
                var datepicker = $jbDate(element, controller, options);
                options = datepicker.$options;
                // Set expected iOS format
                if (isNative && options.useNative) options.dateFormat = 'yyyy-MM-dd';

                var lang = options.lang;

                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };

                var dateParser = $jbDateParser({format: options.dateFormat, lang: lang, strict: options.strictFormat});

                // Observe attributes for changes
                angular.forEach(['minDate', 'maxDate'], function (key) {
                    // console.warn('attr.$observe(%s)', key, attr[key]);
                    if (angular.isDefined(attr[key])) attr.$observe(key, function (newValue) {
                        // console.warn('attr.$observe(%s)=%o', key, newValue);
                        datepicker.$options[key] = dateParser.getDateForAttribute(key, newValue);
                        // Build only if dirty
                        if (!isNaN(datepicker.$options[key])) datepicker.$build(false);
                        validateAgainstMinMaxDate(controller.$dateValue);
                    });
                });

                // Watch model for changes
                scope.$watch(attr.ngModel, function (newValue, oldValue) {
                    datepicker.update(controller.$dateValue);
                }, true);

                // Normalize undefined/null/empty array,
                // so that we don't treat changing from undefined->null as a change.
                function normalizeDateRanges(ranges) {
                    if (!ranges || !ranges.length) return null;
                    return ranges;
                }

                if (angular.isDefined(attr.disabledDates)) {
                    scope.$watch(attr.disabledDates, function (disabledRanges, previousValue) {
                        disabledRanges = normalizeDateRanges(disabledRanges);
                        previousValue = normalizeDateRanges(previousValue);

                        if (disabledRanges) {
                            datepicker.updateDisabledDates(disabledRanges);
                        }
                    });
                }

                function validateAgainstMinMaxDate(parsedDate) {
                    if (!angular.isDate(parsedDate)) return;
                    var isMinValid = isNaN(datepicker.$options.minDate) || parsedDate.getTime() >= datepicker.$options.minDate;
                    var isMaxValid = isNaN(datepicker.$options.maxDate) || parsedDate.getTime() <= datepicker.$options.maxDate;
                    var isValid = isMinValid && isMaxValid;
                    controller.$setValidity('date', isValid);
                    controller.$setValidity('min', isMinValid);
                    controller.$setValidity('max', isMaxValid);
                    // Only update the model when we have a valid date
                    if (isValid) controller.$dateValue = parsedDate;
                }

                // viewValue -> $parsers -> modelValue
                controller.$parsers.unshift(function (viewValue) {
                    // console.warn('$parser("%s"): viewValue=%o', element.attr('ng-model'), viewValue);
                    // Null values should correctly reset the model value & validity
                    if (!viewValue) {
                        controller.$setValidity('date', true);
                        // BREAKING CHANGE:
                        // return null (not undefined) when input value is empty, so angularjs 1.3
                        // ngModelController can go ahead and run validators, like ngRequired
                        return null;
                    }
                    var parsedDate = dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedDate || isNaN(parsedDate.getTime())) {
                        controller.$setValidity('date', false);
                        // return undefined, causes ngModelController to
                        // invalidate model value
                        return;
                    } else {
                        validateAgainstMinMaxDate(parsedDate);
                    }
                    if (options.dateType === 'string') {
                        return formatDate(parsedDate, options.modelDateFormat || options.dateFormat);
                    } else if (options.dateType === 'number') {
                        return controller.$dateValue.getTime();
                    } else if (options.dateType === 'unix') {
                        return controller.$dateValue.getTime() / 1000;
                    } else if (options.dateType === 'iso') {
                        return controller.$dateValue.toISOString();
                    } else {
                        return new Date(controller.$dateValue);
                    }
                });

                // modelValue -> $formatters -> viewValue
                controller.$formatters.push(function (modelValue) {
                    // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                    var date;
                    if (angular.isUndefined(modelValue) || modelValue === null) {
                        date = NaN;
                    } else if (angular.isDate(modelValue)) {
                        date = modelValue;
                    } else if (options.dateType === 'string') {
                        date = dateParser.parse(modelValue, null, options.modelDateFormat);
                    } else if (options.dateType === 'unix') {
                        date = new Date(modelValue * 1000);
                    } else {
                        date = new Date(modelValue);
                    }
                    // Setup default value?
                    // if(isNaN(date.getTime())) {
                    //   var today = new Date();
                    //   date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
                    // }
                    controller.$dateValue = date;
                    return getDateFormattedString();
                });

                // viewValue -> element
                controller.$render = function () {
                    // console.warn('$render("%s"): viewValue=%o', element.attr('ng-model'), controller.$viewValue);
                    element.val(getDateFormattedString());
                };

                function getDateFormattedString() {
                    return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? '' : formatDate(controller.$dateValue, options.dateFormat);
                }

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (datepicker) datepicker.destroy();
                    options = null;
                    datepicker = null;
                });

            }
        };

    }])

    .provider('datepickerViews', function () {

        var defaults = this.defaults = {
            dayFormat: 'dd',
            daySplit: 7
        };

        // Split array into smaller arrays
        function split(arr, size) {
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        }

        // Modulus operator
        function mod(n, m) {
            return ((n % m) + m) % m;
        }

        this.$get = ["$jbDateFormatter", "$jbDateParser", "$sce", function ($jbDateFormatter, $jbDateParser, $sce) {

            return function (picker) {

                var scope = picker.$scope;
                var options = picker.$options;

                var lang = options.lang;
                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };
                var dateParser = $jbDateParser({format: options.dateFormat, lang: lang, strict: options.strictFormat});

                var weekDaysMin = $jbDateFormatter.weekdaysShort(lang);
                var weekDaysLabels = weekDaysMin.slice(options.startWeek).concat(weekDaysMin.slice(0, options.startWeek));
                var weekDaysLabelsHtml = $sce.trustAsHtml('<th class="dow text-center">' + weekDaysLabels.join('</th><th class="dow text-center">') + '</th>');

                var startDate = picker.$date || (options.startDate ? dateParser.getDateForAttribute('startDate', options.startDate) : new Date());
                var viewDate = {year: startDate.getFullYear(), month: startDate.getMonth(), date: startDate.getDate()};
                var timezoneOffset = startDate.getTimezoneOffset() * 6e4;

                var views = [{
                    format: options.dayFormat,
                    split: 7,
                    steps: {month: 1},
                    update: function (date, force) {
                        if (!this.built || force || date.getFullYear() !== viewDate.year || date.getMonth() !== viewDate.month) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getDate() !== viewDate.date) {
                            viewDate.date = picker.$date.getDate();
                            picker.$updateSelected();
                        }
                    },
                    build: function () {
                        var firstDayOfMonth = new Date(viewDate.year, viewDate.month, 1), firstDayOfMonthOffset = firstDayOfMonth.getTimezoneOffset();
                        var firstDate = new Date(+firstDayOfMonth - mod(firstDayOfMonth.getDay() - options.startWeek, 7) * 864e5), firstDateOffset = firstDate.getTimezoneOffset();
                        var today = new Date().toDateString();
                        // Handle daylight time switch
                        if (firstDateOffset !== firstDayOfMonthOffset) firstDate = new Date(+firstDate + (firstDateOffset - firstDayOfMonthOffset) * 60e3);
                        var days = [], day;
                        for (var i = 0; i < 42; i++) { // < 7 * 6
                            day = dateParser.daylightSavingAdjust(new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i));
                            days.push({
                                date: day,
                                isToday: day.toDateString() === today,
                                label: formatDate(day, this.format),
                                selected: picker.$date && this.isSelected(day),
                                muted: day.getMonth() !== viewDate.month,
                                disabled: this.isDisabled(day)
                            });
                        }
                        scope.title = formatDate(firstDayOfMonth, options.monthTitleFormat);
                        scope.showLabels = true;
                        scope.labels = weekDaysLabelsHtml;
                        scope.rows = split(days, this.split);
                        this.built = true;
                    },
                    isSelected: function (date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth() && date.getDate() === picker.$date.getDate();
                    },
                    isDisabled: function (date) {
                        var time = date.getTime();

                        // Disabled because of min/max date.
                        if (time < options.minDate || time > options.maxDate) return true;

                        // Disabled due to being a disabled day of the week
                        if (options.daysOfWeekDisabled.indexOf(date.getDay()) !== -1) return true;

                        // Disabled because of disabled date range.
                        if (options.disabledDateRanges) {
                            for (var i = 0; i < options.disabledDateRanges.length; i++) {
                                if (time >= options.disabledDateRanges[i].start && time <= options.disabledDateRanges[i].end) {
                                    return true;
                                }
                            }
                        }

                        return false;
                    },
                    onKeyDown: function (evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualTime = picker.$date.getTime();
                        var newDate;

                        if (evt.keyCode === 37) newDate = new Date(actualTime - 1 * 864e5);
                        else if (evt.keyCode === 38) newDate = new Date(actualTime - 7 * 864e5);
                        else if (evt.keyCode === 39) newDate = new Date(actualTime + 1 * 864e5);
                        else if (evt.keyCode === 40) newDate = new Date(actualTime + 7 * 864e5);

                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }, {
                    name: 'month',
                    format: options.monthFormat,
                    split: 4,
                    steps: {year: 1},
                    update: function (date, force) {
                        if (!this.built || date.getFullYear() !== viewDate.year) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getMonth() !== viewDate.month) {
                            angular.extend(viewDate, {month: picker.$date.getMonth(), date: picker.$date.getDate()});
                            picker.$updateSelected();
                        }
                    },
                    build: function () {
                        var firstMonth = new Date(viewDate.year, 0, 1);
                        var months = [], month;
                        for (var i = 0; i < 12; i++) {
                            month = new Date(viewDate.year, i, 1);
                            months.push({
                                date: month,
                                label: formatDate(month, this.format),
                                selected: picker.$isSelected(month),
                                disabled: this.isDisabled(month)
                            });
                        }
                        scope.title = formatDate(month, options.yearTitleFormat);
                        scope.showLabels = false;
                        scope.rows = split(months, this.split);
                        this.built = true;
                    },
                    isSelected: function (date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth();
                    },
                    isDisabled: function (date) {
                        var lastDate = +new Date(date.getFullYear(), date.getMonth() + 1, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function (evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualMonth = picker.$date.getMonth();
                        var newDate = new Date(picker.$date);

                        if (evt.keyCode === 37) newDate.setMonth(actualMonth - 1);
                        else if (evt.keyCode === 38) newDate.setMonth(actualMonth - 4);
                        else if (evt.keyCode === 39) newDate.setMonth(actualMonth + 1);
                        else if (evt.keyCode === 40) newDate.setMonth(actualMonth + 4);

                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }, {
                    name: 'year',
                    format: options.yearFormat,
                    split: 4,
                    steps: {year: 12},
                    update: function (date, force) {
                        if (!this.built || force || parseInt(date.getFullYear() / 20, 10) !== parseInt(viewDate.year / 20, 10)) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getFullYear() !== viewDate.year) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$updateSelected();
                        }
                    },
                    build: function () {
                        var firstYear = viewDate.year - viewDate.year % (this.split * 3);
                        var years = [], year;
                        for (var i = 0; i < 12; i++) {
                            year = new Date(firstYear + i, 0, 1);
                            years.push({
                                date: year,
                                label: formatDate(year, this.format),
                                selected: picker.$isSelected(year),
                                disabled: this.isDisabled(year)
                            });
                        }
                        scope.title = years[0].label + '-' + years[years.length - 1].label;
                        scope.showLabels = false;
                        scope.rows = split(years, this.split);
                        this.built = true;
                    },
                    isSelected: function (date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear();
                    },
                    isDisabled: function (date) {
                        var lastDate = +new Date(date.getFullYear() + 1, 0, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function (evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualYear = picker.$date.getFullYear(),
                            newDate = new Date(picker.$date);

                        if (evt.keyCode === 37) newDate.setYear(actualYear - 1);
                        else if (evt.keyCode === 38) newDate.setYear(actualYear - 4);
                        else if (evt.keyCode === 39) newDate.setYear(actualYear + 1);
                        else if (evt.keyCode === 40) newDate.setYear(actualYear + 4);

                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }];

                return {
                    views: options.minView ? Array.prototype.slice.call(views, options.minView) : views,
                    viewDate: viewDate
                };

            };

        }];

    });
angular.module('jb.ui')

    .provider('$jbTime', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'timepicker',
            placement: 'bottom-left',
            template: 'jb/ui/datetime/timepicker.tpl.html',
            trigger: 'focus',
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            // lang: $locale.id,
            useNative: true,
            timeType: 'date',
            timeFormat: 'shortTime',
            modelTimeFormat: null,
            autoclose: false,
            minTime: -Infinity,
            maxTime: +Infinity,
            length: 5,
            hourStep: 1,
            minuteStep: 5,
            iconUp: 'glyphicon glyphicon-chevron-up',
            iconDown: 'glyphicon glyphicon-chevron-down',
            arrowBehavior: 'pager'
        };

        this.$get = ["$window", "$document", "$rootScope", "$sce", "$jbDateFormatter", "$jbTip", "$timeout", function ($window, $document, $rootScope, $sce, $jbDateFormatter, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
            var isTouch = ('createTouch' in $window.document) && isNative;
            if (!defaults.lang) defaults.lang = $jbDateFormatter.getDefaultLocale();

            function timepickerFactory(element, controller, config) {

                var $timepicker = $jbTip(element, angular.extend({}, defaults, config));
                var parentScope = config.scope;
                var options = $timepicker.$options;
                var scope = $timepicker.$scope;

                var lang = options.lang;
                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };

                // View vars

                var selectedIndex = 0;
                var startDate = controller.$dateValue || new Date();
                var viewDate = {
                    hour: startDate.getHours(),
                    meridian: startDate.getHours() < 12,
                    minute: startDate.getMinutes(),
                    second: startDate.getSeconds(),
                    millisecond: startDate.getMilliseconds()
                };

                var format = $jbDateFormatter.getDatetimeFormat(options.timeFormat, lang);

                var hoursFormat = $jbDateFormatter.hoursFormat(format),
                    timeSeparator = $jbDateFormatter.timeSeparator(format),
                    minutesFormat = $jbDateFormatter.minutesFormat(format),
                    showAM = $jbDateFormatter.showAM(format);

                scope.$iconUp = options.iconUp;
                scope.$iconDown = options.iconDown;

                // Scope methods

                scope.$select = function (date, index) {
                    $timepicker.select(date, index);
                };
                scope.$moveIndex = function (value, index) {
                    $timepicker.$moveIndex(value, index);
                };
                scope.$switchMeridian = function (date) {
                    $timepicker.switchMeridian(date);
                };

                // Public methods

                $timepicker.update = function (date) {
                    // console.warn('$timepicker.update() newValue=%o', date);
                    if (angular.isDate(date) && !isNaN(date.getTime())) {
                        $timepicker.$date = date;
                        angular.extend(viewDate, {
                            hour: date.getHours(),
                            minute: date.getMinutes(),
                            second: date.getSeconds(),
                            millisecond: date.getMilliseconds()
                        });
                        $timepicker.$build();
                    } else if (!$timepicker.$isBuilt) {
                        $timepicker.$build();
                    }
                };

                $timepicker.select = function (date, index, keep) {
                    // console.warn('$timepicker.select', date, scope.$mode);
                    if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) controller.$dateValue = new Date(1970, 0, 1);
                    if (!angular.isDate(date)) date = new Date(date);
                    if (index === 0) controller.$dateValue.setHours(date.getHours());
                    else if (index === 1) controller.$dateValue.setMinutes(date.getMinutes());
                    controller.$setViewValue(angular.copy(controller.$dateValue));
                    controller.$render();
                    if (options.autoclose && !keep) {
                        $timeout(function () {
                            $timepicker.hide(true);
                        });
                    }
                };

                $timepicker.switchMeridian = function (date) {
                    if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) {
                        return;
                    }
                    var hours = (date || controller.$dateValue).getHours();
                    controller.$dateValue.setHours(hours < 12 ? hours + 12 : hours - 12);
                    controller.$setViewValue(angular.copy(controller.$dateValue));
                    controller.$render();
                };

                // Protected methods

                $timepicker.$build = function () {
                    // console.warn('$timepicker.$build() viewDate=%o', viewDate);
                    var i, midIndex = scope.midIndex = parseInt(options.length / 2, 10);
                    var hours = [], hour;
                    for (i = 0; i < options.length; i++) {
                        hour = new Date(1970, 0, 1, viewDate.hour - (midIndex - i) * options.hourStep);
                        hours.push({
                            date: hour,
                            label: formatDate(hour, hoursFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(hour, 0),
                            disabled: $timepicker.$isDisabled(hour, 0)
                        });
                    }
                    var minutes = [], minute;
                    for (i = 0; i < options.length; i++) {
                        minute = new Date(1970, 0, 1, 0, viewDate.minute - (midIndex - i) * options.minuteStep);
                        minutes.push({
                            date: minute,
                            label: formatDate(minute, minutesFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(minute, 1),
                            disabled: $timepicker.$isDisabled(minute, 1)
                        });
                    }

                    var rows = [];
                    for (i = 0; i < options.length; i++) {
                        rows.push([hours[i], minutes[i]]);
                    }
                    scope.rows = rows;
                    scope.showAM = showAM;
                    scope.isAM = ($timepicker.$date || hours[midIndex].date).getHours() < 12;
                    scope.timeSeparator = timeSeparator;
                    $timepicker.$isBuilt = true;
                };

                $timepicker.$isSelected = function (date, index) {
                    if (!$timepicker.$date) return false;
                    else if (index === 0) {
                        return date.getHours() === $timepicker.$date.getHours();
                    } else if (index === 1) {
                        return date.getMinutes() === $timepicker.$date.getMinutes();
                    }
                };

                $timepicker.$isDisabled = function (date, index) {
                    var selectedTime;
                    if (index === 0) {
                        selectedTime = date.getTime() + viewDate.minute * 6e4;
                    } else if (index === 1) {
                        selectedTime = date.getTime() + viewDate.hour * 36e5;
                    }
                    return selectedTime < options.minTime * 1 || selectedTime > options.maxTime * 1;
                };

                scope.$arrowAction = function (value, index) {
                    if (options.arrowBehavior === 'picker') {
                        $timepicker.$setTimeByStep(value, index);
                    } else {
                        $timepicker.$moveIndex(value, index);
                    }
                };

                $timepicker.$setTimeByStep = function (value, index) {
                    var newDate = new Date($timepicker.$date);
                    var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
                    var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
                    if (index === 0) {
                        newDate.setHours(hours - (parseInt(options.hourStep, 10) * value));
                    }
                    else {
                        newDate.setMinutes(minutes - (parseInt(options.minuteStep, 10) * value));
                    }
                    $timepicker.select(newDate, index, true);
                };

                $timepicker.$moveIndex = function (value, index) {
                    var targetDate;
                    if (index === 0) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour + (value * options.length), viewDate.minute);
                        angular.extend(viewDate, {hour: targetDate.getHours()});
                    } else if (index === 1) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute + (value * options.length * options.minuteStep));
                        angular.extend(viewDate, {minute: targetDate.getMinutes()});
                    }
                    $timepicker.$build();
                };

                $timepicker.$onMouseDown = function (evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    if (evt.target.nodeName.toLowerCase() !== 'input') evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        if (targetEl[0].nodeName.toLowerCase() !== 'button') {
                            targetEl = targetEl.parent();
                        }
                        targetEl.triggerHandler('click');
                    }
                };

                $timepicker.$onKeyDown = function (evt) {
                    if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    // Close on enter
                    if (evt.keyCode === 13) return $timepicker.hide(true);

                    // Navigate with keyboard
                    var newDate = new Date($timepicker.$date);
                    var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
                    var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
                    var lateralMove = /(37|39)/.test(evt.keyCode);
                    var count = 2 + showAM * 1;

                    // Navigate indexes (left, right)
                    if (lateralMove) {
                        if (evt.keyCode === 37) selectedIndex = selectedIndex < 1 ? count - 1 : selectedIndex - 1;
                        else if (evt.keyCode === 39) selectedIndex = selectedIndex < count - 1 ? selectedIndex + 1 : 0;
                    }

                    // Update values (up, down)
                    var selectRange = [0, hoursLength];
                    if (selectedIndex === 0) {
                        if (evt.keyCode === 38) newDate.setHours(hours - parseInt(options.hourStep, 10));
                        else if (evt.keyCode === 40) newDate.setHours(hours + parseInt(options.hourStep, 10));
                        // re-calculate hours length because we have changed hours value
                        hoursLength = formatDate(newDate, hoursFormat).length;
                        selectRange = [0, hoursLength];
                    } else if (selectedIndex === 1) {
                        if (evt.keyCode === 38) newDate.setMinutes(minutes - parseInt(options.minuteStep, 10));
                        else if (evt.keyCode === 40) newDate.setMinutes(minutes + parseInt(options.minuteStep, 10));
                        // re-calculate minutes length because we have changes minutes value
                        minutesLength = formatDate(newDate, minutesFormat).length;
                        selectRange = [hoursLength + 1, hoursLength + 1 + minutesLength];
                    } else if (selectedIndex === 2) {
                        if (!lateralMove) $timepicker.switchMeridian();
                        selectRange = [hoursLength + 1 + minutesLength + 1, hoursLength + 1 + minutesLength + 3];
                    }
                    $timepicker.select(newDate, selectedIndex, true);
                    createSelection(selectRange[0], selectRange[1]);
                    parentScope.$digest();
                };

                // Private

                function createSelection(start, end) {
                    if (element[0].createTextRange) {
                        var selRange = element[0].createTextRange();
                        selRange.collapse(true);
                        selRange.moveStart('character', start);
                        selRange.moveEnd('character', end);
                        selRange.select();
                    } else if (element[0].setSelectionRange) {
                        element[0].setSelectionRange(start, end);
                    } else if (angular.isUndefined(element[0].selectionStart)) {
                        element[0].selectionStart = start;
                        element[0].selectionEnd = end;
                    }
                }

                function focusElement() {
                    element[0].focus();
                }

                // Overrides

                var _init = $timepicker.init;
                $timepicker.init = function () {
                    if (isNative && options.useNative) {
                        element.prop('type', 'time');
                        element.css('-webkit-appearance', 'textfield');
                        return;
                    } else if (isTouch) {
                        element.prop('type', 'text');
                        element.attr('readonly', 'true');
                        element.on('click', focusElement);
                    }
                    _init();
                };

                var _destroy = $timepicker.destroy;
                $timepicker.destroy = function () {
                    if (isNative && options.useNative) {
                        element.off('click', focusElement);
                    }
                    _destroy();
                };

                var _show = $timepicker.show;
                $timepicker.show = function () {
                    _show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        $timepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $timepicker.$onMouseDown);
                        if (options.keyboard) {
                            element.on('keydown', $timepicker.$onKeyDown);
                        }
                    }, 0, false);
                };

                var _hide = $timepicker.hide;
                $timepicker.hide = function (blur) {
                    if (!$timepicker.$isShown) return;
                    $timepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $timepicker.$onMouseDown);
                    if (options.keyboard) {
                        element.off('keydown', $timepicker.$onKeyDown);
                    }
                    _hide(blur);
                };

                return $timepicker;

            }

            timepickerFactory.defaults = defaults;
            return timepickerFactory;

        }];

    })


    .directive('jbTime', ["$window", "$parse", "$q", "$jbDateFormatter", "$jbDateParser", "$jbTime", function ($window, $parse, $q, $jbDateFormatter, $jbDateParser, $jbTime) {

        var defaults = $jbTime.defaults;
        var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                // Directive options
                var options = {scope: scope, controller: controller};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'timeType', 'timeFormat', 'modelTimeFormat', 'useNative', 'hourStep', 'minuteStep', 'length', 'arrowBehavior', 'iconUp', 'iconDown', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Visibility binding support
                if (attr.bsShow) scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!timepicker || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(timepicker),?/i);
                    if (newValue === true) timepicker.show(); else timepicker.hide();
                });

                // Initialize timepicker
                if (isNative && (options.useNative || defaults.useNative)) options.timeFormat = 'HH:mm';
                var timepicker = $jbTime(element, controller, options);
                options = timepicker.$options;

                var lang = options.lang;
                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };

                // Initialize parser
                var dateParser = $jbDateParser({format: options.timeFormat, lang: lang});

                // Observe attributes for changes
                angular.forEach(['minTime', 'maxTime'], function (key) {
                    // console.warn('attr.$observe(%s)', key, attr[key]);
                    if (angular.isDefined(attr[key])) attr.$observe(key, function (newValue) {
                        timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
                        if (!isNaN(timepicker.$options[key])) timepicker.$build();
                        validateAgainstMinMaxTime(controller.$dateValue);
                    });
                });

                // Watch model for changes
                scope.$watch(attr.ngModel, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.ngModel, newValue, oldValue, controller.$dateValue);
                    timepicker.update(controller.$dateValue);
                }, true);

                function validateAgainstMinMaxTime(parsedTime) {
                    if (!angular.isDate(parsedTime)) return;
                    var isMinValid = isNaN(options.minTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) >= options.minTime;
                    var isMaxValid = isNaN(options.maxTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) <= options.maxTime;
                    var isValid = isMinValid && isMaxValid;
                    controller.$setValidity('date', isValid);
                    controller.$setValidity('min', isMinValid);
                    controller.$setValidity('max', isMaxValid);
                    // Only update the model when we have a valid date
                    if (!isValid) {
                        return;
                    }
                    controller.$dateValue = parsedTime;
                }

                // viewValue -> $parsers -> modelValue
                controller.$parsers.unshift(function (viewValue) {
                    // console.warn('$parser("%s"): viewValue=%o', element.attr('ng-model'), viewValue);
                    // Null values should correctly reset the model value & validity
                    if (!viewValue) {
                        // BREAKING CHANGE:
                        // return null (not undefined) when input value is empty, so angularjs 1.3
                        // ngModelController can go ahead and run validators, like ngRequired
                        controller.$setValidity('date', true);
                        return null;
                    }
                    var parsedTime = angular.isDate(viewValue) ? viewValue : dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedTime || isNaN(parsedTime.getTime())) {
                        controller.$setValidity('date', false);
                        // return undefined, causes ngModelController to
                        // invalidate model value
                        return;
                    } else {
                        validateAgainstMinMaxTime(parsedTime);
                    }
                    if (options.timeType === 'string') {
                        return formatDate(parsedTime, options.modelTimeFormat || options.timeFormat);
                    } else if (options.timeType === 'number') {
                        return controller.$dateValue.getTime();
                    } else if (options.timeType === 'unix') {
                        return controller.$dateValue.getTime() / 1000;
                    } else if (options.timeType === 'iso') {
                        return controller.$dateValue.toISOString();
                    } else {
                        return new Date(controller.$dateValue);
                    }
                });

                // modelValue -> $formatters -> viewValue
                controller.$formatters.push(function (modelValue) {
                    // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                    var date;
                    if (angular.isUndefined(modelValue) || modelValue === null) {
                        date = NaN;
                    } else if (angular.isDate(modelValue)) {
                        date = modelValue;
                    } else if (options.timeType === 'string') {
                        date = dateParser.parse(modelValue, null, options.modelTimeFormat);
                    } else if (options.timeType === 'unix') {
                        date = new Date(modelValue * 1000);
                    } else {
                        date = new Date(modelValue);
                    }
                    // Setup default value?
                    // if(isNaN(date.getTime())) date = new Date(new Date().setMinutes(0) + 36e5);
                    controller.$dateValue = date;
                    return getTimeFormattedString();
                });

                // viewValue -> element
                controller.$render = function () {
                    // console.warn('$render("%s"): viewValue=%o', element.attr('ng-model'), controller.$viewValue);
                    element.val(getTimeFormattedString());
                };

                function getTimeFormattedString() {
                    return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? '' : formatDate(controller.$dateValue, options.timeFormat);
                }

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (timepicker) timepicker.destroy();
                    options = null;
                    timepicker = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .directive('draggable', function () {
        return {
            scope: {
                dragType: '=',
                dragVal: '='
            },
            link: function (scope, element) {
                // this gives us the native JS object
                var el = element[0];
                el.draggable = true;
                el.addEventListener(
                    'dragstart',
                    function (e) {
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('Type', scope.dragType);
                        e.dataTransfer.setData('Val', scope.dragVal);
                        this.classList.add('drag');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragend',
                    function (e) {
                        this.classList.remove('drag');
                        return false;
                    },
                    false
                );
            }
        };
    })
    .directive('droppable', function () {
        return {
            scope: {
                drop: '&',
                dropVal: '='
            },
            link: function (scope, element) {
                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function (e) {
                        e.dataTransfer.dropEffect = 'move';
                        // allows us to drop
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragenter',
                    function (e) {
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragleave',
                    function (e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'drop',
                    function (e) {
                        // Stops some browsers from redirecting.
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        this.classList.remove('over');
                        var dragVal = e.dataTransfer.getData('Val');
                        // this.appendChild(item);
                        // call the passed drop function
                        scope.$apply(function (scope) {
                            var fn = scope.drop();
                            if ('undefined' !== typeof fn) {
                                fn(dragVal, scope.dropVal);
                            }
                        });
                        return false;
                    },
                    false
                );
            }
        };
    });
angular.module('jb.ui')
    .provider('$jbDropdown', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'dropdown',
            placement: 'bottom-left',
            template: 'jb/ui/dropdown/dropdown.tpl.html',
            trigger: 'click',
            container: false,
            keyboard: true,
            html: true,
            delay: 0
        };

        this.$get = ["$window", "$rootScope", "$jbTip", "$timeout", function ($window, $rootScope, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var matchesSelector = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;

            function DropdownFactory(element, config) {

                var $dropdown = {};

                // Common vars
                var options = angular.extend({}, defaults, config);
                var scope = $dropdown.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                $dropdown = $jbTip(element, options);
                var parentEl = element.parent();

                // Protected methods

                $dropdown.$onKeyDown = function (evt) {
                    if (!/(38|40)/.test(evt.keyCode)) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    // Retrieve focused index
                    var items = angular.element($dropdown.$element[0].querySelectorAll('li:not(.divider) a'));
                    if (!items.length) return;
                    var index;
                    angular.forEach(items, function (el, i) {
                        if (matchesSelector && matchesSelector.call(el, ':focus')) index = i;
                    });

                    // Navigate with keyboard
                    if (evt.keyCode === 38 && index > 0) index--;
                    else if (evt.keyCode === 40 && index < items.length - 1) index++;
                    else if (angular.isUndefined(index)) index = 0;
                    items.eq(index)[0].focus();

                };

                // Overrides

                var show = $dropdown.show;
                $dropdown.show = function () {
                    show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        if (options.keyboard) $dropdown.$element.on('keydown', $dropdown.$onKeyDown);
                        bodyEl.on('click', onBodyClick);
                    }, 0, false);
                    if (parentEl.hasClass('dropdown')) parentEl.addClass('open');
                };

                var hide = $dropdown.hide;
                $dropdown.hide = function () {
                    if (!$dropdown.$isShown) return;
                    if (options.keyboard) $dropdown.$element.off('keydown', $dropdown.$onKeyDown);
                    bodyEl.off('click', onBodyClick);
                    if (parentEl.hasClass('dropdown')) parentEl.removeClass('open');
                    hide();
                };

                var destroy = $dropdown.destroy;
                $dropdown.destroy = function () {
                    bodyEl.off('click', onBodyClick);
                    destroy();
                };

                // Private functions

                function onBodyClick(evt) {
                    if (evt.target === element[0]) return;
                    return evt.target !== element[0] && $dropdown.hide();
                }

                return $dropdown;

            }

            return DropdownFactory;

        }];

    })

    .directive('jbDropdown', ["$window", "$sce", "$jbDropdown", function ($window, $sce, $jbDropdown) {

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as an object
                if (attr.jbDropdown) scope.$watch(attr.jbDropdown, function (newValue, oldValue) {
                    scope.content = newValue;
                }, true);

                // Visibility binding support
                if (attr.bsShow) scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!dropdown || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(dropdown),?/i);
                    if (newValue === true) dropdown.show(); else dropdown.hide();
                });

                // Initialize dropdown
                var dropdown = $jbDropdown(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (dropdown) dropdown.destroy();
                    options = null;
                    dropdown = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .directive('jbDropdownToggle', ['$document', '$location', function ($document, $location) {
        var openElement = null,
            closeMenu = angular.noop;
        return {
            restrict: 'CA',
            link: function (scope, element, attrs) {
                scope.$watch('$location.path', function () {
                    closeMenu();
                });
                element.parent().bind('click', function () {
                    closeMenu();
                });
                element.bind('click', function (event) {

                    var elementWasOpen = (element === openElement);

                    event.preventDefault();
                    event.stopPropagation();

                    if (!!openElement) {
                        closeMenu();
                    }

                    if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
                        element.parent().addClass('open');
                        openElement = element;
                        closeMenu = function (event) {
                            if (event) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            $document.unbind('click', closeMenu);
                            element.parent().removeClass('open');
                            closeMenu = angular.noop;
                            openElement = null;
                        };
                        $document.bind('click', closeMenu);
                    }
                });
            }
        };
    }]);

(function() {
    var module = angular.module('jb.ui');

    module.directive('jbFormGroup', function(){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'jb/ui/form/fg.tpl.html',
            scope: {
                lb: '@jbLb',
                ip: '=jbIp'
            }
        };
    });

    module.directive('jbFormGroupH', function(){
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            templateUrl: function(element, attrs){
                return attrs.jbCount?  'jb/ui/form/fgh2.tpl.html':  'jb/ui/form/fgh.tpl.html';
            },
            scope: {
                lb: '=jbLb',
                w:'=jbWidth',
                count:'=?jbCount'
            },
            link: function (scope, element, attrs) {
                scope.w0='col-sm-'+scope.w[0];
                scope.w1='col-sm-'+scope.w[1];
                if(scope.count){
                    scope.w2='col-sm-'+scope.w[2];
                    scope.w3='col-sm-'+scope.w[3];
                }
            }
        };
    });

})();
angular.module('jb.ui')
    .directive('jbInputGroupDropdownBtn', function () {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '='},
            replace: true,
            templateUrl: "jb/ui/inputGroupDropdownBtn/inputGroupDropdownBtn.tpl.html",
            link: function (scope, element, attrs) {
                if (!Array.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }
                scope.update = function updateJbVal(val) {
                    scope.jbVal = val;
                };
            }
        };
    });

angular.module('jb.ui')
    .provider('$jbModal', function () {
        var defaults = this.defaults = {
            //animation: 'am-fade',
            //backdropAnimation: 'am-fade',
            type: 'modal',
            size: null,
            placement: 'center',
            template: 'jb/ui/modal/modal.tpl.html',
            contentTemplate: false,
            element: null,
            backdrop: true,
            keyboard: true,
            html: true,
            show: true
        };
        this.$get = ["$window", "$rootScope", "$sce", "$compile", "$templateCache", "$animate", function ($window, $rootScope, $sce, $compile, $templateCache, $animate) {
            var trim = String.prototype.trim;
            var bodyElement = angular.element($window.document.body);
            var htmlReplaceRegExp = /ng-bind="/ig;

            function ModalFactory(config) {
                var $modal = {};
                var modalElement, backdropElement;
                var options = $modal.$options = angular.extend({}, defaults, config);
                var scope = $modal.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                angular.forEach(['title', 'content'], function (key) {
                    if (options[key]) scope[key] = $sce.trustAsHtml(options[key]);
                });

                // Provide scope helpers
                scope.$hide = function () {
                    scope.$$postDigest(function () {
                        $modal.hide();
                    });
                };
                scope.$show = function () {
                    scope.$$postDigest(function () {
                        $modal.show();
                    });
                };
                scope.$toggle = function () {
                    scope.$$postDigest(function () {
                        $modal.toggle();
                    });
                };
                // Publish isShown as a protected var on scope
                $modal.$isShown = scope.$isShown = false;
                $modal.$size = scope.$size=options.size;
                $modal.$placement = scope.$placement = options.placement;


                $modal.init = function () {
                    if (options.show) {
                        scope.$$postDigest(function () {
                            $modal.show();
                        });
                    }
                };
                $modal.destroy = function () {
                    if (modalElement) {
                        modalElement.remove();
                        modalElement = null;
                    }
                    scope.$destroy();
                };
                $modal.show = function () {
                    if ($modal.$isShown) return;

                    var parent, after;
                    parent = bodyElement;
                    after = parent[0].lastChild ? angular.element(parent[0].lastChild) : null;

                    modalElement = $modal.$element = modalLinker(scope, function (clonedElement, scope) {
                    });
                    modalElement.css({display: 'block'});
                    $animate.enter(modalElement, parent, after);

                    $modal.$isShown = scope.$isShown = true;
                    safeDigest(scope);
                    bodyElement.addClass('modal-open');

                    var el = modalElement[0];
                    el.focus();

                    if (options.backdrop) {
                        backdropElement = angular.element(modalElement.children()[0]);
                        modalElement.on('click', hideOnBackdropClick);
                        backdropElement.on('click', hideOnBackdropClick);
                        backdropElement.on('wheel', preventEventDefault);
                    }
                    if (options.keyboard) {
                        modalElement.on('keyup', $modal.$onKeyUp);
                    }
                };
                $modal.hide = function () {
                    if (!$modal.$isShown) return;

                    var promise = $animate.leave(modalElement, leaveAnimateCallback);
                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    if (promise && promise.then) promise.then(leaveAnimateCallback);

                    $modal.$isShown = scope.$isShown = false;
                    safeDigest(scope);

                    // Unbind events
                    if (options.backdrop) {
                        modalElement.off('click', hideOnBackdropClick);
                        backdropElement.off('click', hideOnBackdropClick);
                        backdropElement.off('wheel', preventEventDefault);
                    }
                    if (options.keyboard) {
                        modalElement.off('keyup', $modal.$onKeyUp);
                    }
                };
                $modal.toggle = function () {
                    if ($modal.$isShown) {
                        $modal.hide();
                    } else {
                        $modal.show();
                    }
                };

                $modal.focus = function () {
                    modalElement[0].focus();
                };

                $modal.$onKeyUp = function (evt) {
                    if (evt.which === 27 && $modal.$isShown) {
                        $modal.hide();
                        evt.stopPropagation();
                    }
                };


                var template = $templateCache.get(options.template);
                if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
                template = trim.apply(template);


                var modalLinker = $compile(template);
                $modal.init();

                function hideOnBackdropClick(evt) {
                    if (evt.target !== evt.currentTarget) return;
                   if(  options.backdrop === 'static' ) $modal.focus() ;
                    else $modal.hide();
                }

                function leaveAnimateCallback() {
                    scope.$emit(options.type + '.hide', $modal);
                    bodyElement.removeClass('modal-open');
                    if (options.animation) {
                        bodyElement.removeClass(options.type + '-with-' + options.animation);
                    }
                }

                return $modal;
            }

            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }

            function safeDigest(scope) {
               var tmp= scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
            }

            function preventEventDefault(evt) {
                evt.preventDefault();
            }

            return ModalFactory;
        }];

    })
    .directive('jbModal', ["$window", "$sce", "$jbModal", function ($window, $sce, $jbModal) {
        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'contentTemplate', 'placement', 'size', 'backdrop', 'keyboard', 'html', 'container', 'animation', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) attr.$observe(key, function (newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue);
                    });
                });

                // Support scope as an object
                if (attr.jbModal) scope.$watch(attr.jbModal, function (newValue, oldValue) {
                    if (angular.isObject(newValue)) {
                        angular.extend(scope, newValue);
                    } else {
                        scope.content = newValue;
                    }
                }, true);

                var modal = $jbModal(options);

                element.on(attr.trigger || 'click', modal.toggle);

                scope.$on('$destroy', function () {
                    if (modal) modal.destroy();
                    options = null;
                    modal = null;
                });
            }
        };
    }]);


angular.module('jb.ui')
    .controller('PaginationController', ['$scope', '$attrs', '$parse', '$interpolate', function ($scope, $attrs, $parse, $interpolate) {
        var self = this,
            setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

        this.init = function (defaultItemsPerPage) {
            if ($attrs.itemsPerPage) {
                $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
                    self.itemsPerPage = parseInt(value, 10);
                    $scope.totalPages = self.calculateTotalPages();
                });
            } else {
                this.itemsPerPage = defaultItemsPerPage;
            }
        };

        this.noPrevious = function () {
            return this.page === 1;
        };
        this.noNext = function () {
            return this.page === $scope.totalPages;
        };

        this.isActive = function (page) {
            return this.page === page;
        };

        this.calculateTotalPages = function () {
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
        };

        this.getAttributeValue = function (attribute, defaultValue, interpolate) {
            return angular.isDefined(attribute) ? (interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute)) : defaultValue;
        };

        this.render = function () {
            this.page = parseInt($scope.page, 10) || 1;
            if (this.page > 0 && this.page <= $scope.totalPages) {
                $scope.pages = this.getPages(this.page, $scope.totalPages);
            }
        };

        $scope.selectPage = function (page) {
            if (!self.isActive(page) && page > 0 && page <= $scope.totalPages) {
                $scope.page = page;
                $scope.onSelectPage({ page: page });
            }
        };

        $scope.$watch('page', function () {
            self.render();
        });

        $scope.$watch('totalItems', function () {
            $scope.totalPages = self.calculateTotalPages();
        });

        $scope.$watch('totalPages', function (value) {
            setNumPages($scope.$parent, value); // Readonly variable

            if (self.page > value) {
                $scope.selectPage(value);
            } else {
                self.render();
            }
        });
    }])

    .constant('paginationConfig', {
        itemsPerPage: 10,
        boundaryLinks: false,
        directionLinks: true,
        firstText: 'First',
        previousText: 'Previous',
        nextText: 'Next',
        lastText: 'Last',
        rotate: true
    })

    .directive('jbPagination', ['$parse', 'paginationConfig', function ($parse, config) {
        return {
            restrict: 'EA',
            scope: {
                page: '=',
                totalItems: '=',
                onSelectPage: ' &'
            },
            controller: 'PaginationController',
            templateUrl: 'jb/ui/pager/pagination.tpl.html',
            replace: true,
            link: function (scope, element, attrs, paginationCtrl) {

                // Setup configuration parameters
                var maxSize,
                    boundaryLinks = paginationCtrl.getAttributeValue(attrs.boundaryLinks, config.boundaryLinks),
                    directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks),
                    firstText = paginationCtrl.getAttributeValue(attrs.firstText, config.firstText, true),
                    previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
                    nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true),
                    lastText = paginationCtrl.getAttributeValue(attrs.lastText, config.lastText, true),
                    rotate = paginationCtrl.getAttributeValue(attrs.rotate, config.rotate);

                paginationCtrl.init(config.itemsPerPage);

                if (attrs.maxSize) {
                    scope.$parent.$watch($parse(attrs.maxSize), function (value) {
                        maxSize = parseInt(value, 10);
                        paginationCtrl.render();
                    });
                }

                // Create page object used in template
                function makePage(number, text, isActive, isDisabled) {
                    return {
                        number: number,
                        text: text,
                        active: isActive,
                        disabled: isDisabled
                    };
                }

                paginationCtrl.getPages = function (currentPage, totalPages) {
                    var pages = [];

                    // Default page limits
                    var startPage = 1, endPage = totalPages;
                    var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

                    // recompute if maxSize
                    if (isMaxSized) {
                        if (rotate) {
                            // Current page is displayed in the middle of the visible ones
                            startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
                            endPage = startPage + maxSize - 1;

                            // Adjust if limit is exceeded
                            if (endPage > totalPages) {
                                endPage = totalPages;
                                startPage = endPage - maxSize + 1;
                            }
                        } else {
                            // Visible pages are paginated with maxSize
                            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

                            // Adjust last page if limit is exceeded
                            endPage = Math.min(startPage + maxSize - 1, totalPages);
                        }
                    }

                    // Add page number links
                    for (var number = startPage; number <= endPage; number++) {
                        var page = makePage(number, number, paginationCtrl.isActive(number), false);
                        pages.push(page);
                    }

                    // Add links to move between page sets
                    if (isMaxSized && !rotate) {
                        if (startPage > 1) {
                            var previousPageSet = makePage(startPage - 1, '...', false, false);
                            pages.unshift(previousPageSet);
                        }

                        if (endPage < totalPages) {
                            var nextPageSet = makePage(endPage + 1, '...', false, false);
                            pages.push(nextPageSet);
                        }
                    }

                    // Add previous & next links
                    if (directionLinks) {
                        var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
                        pages.unshift(previousPage);

                        var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
                        pages.push(nextPage);
                    }

                    // Add first & last links
                    if (boundaryLinks) {
                        var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
                        pages.unshift(firstPage);

                        var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
                        pages.push(lastPage);
                    }

                    return pages;
                };
            }
        };
    }])

    .constant('pagerConfig', {
        itemsPerPage: 10,
        previousText: '« Previous',
        nextText: 'Next »',
        align: true
    })

    .directive('jbPager', ['pagerConfig', function (config) {
        return {
            restrict: 'EA',
            scope: {
                page: '=',
                totalItems: '=',
                onSelectPage: ' &'
            },
            controller: 'PaginationController',
            templateUrl: 'jb/ui/pager/pager.tpl.html',
            replace: true,
            link: function (scope, element, attrs, paginationCtrl) {

                // Setup configuration parameters
                var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
                    nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true),
                    align = paginationCtrl.getAttributeValue(attrs.align, config.align);

                paginationCtrl.init(config.itemsPerPage);

                // Create page object used in template
                function makePage(number, text, isDisabled, isPrevious, isNext) {
                    return {
                        number: number,
                        text: text,
                        disabled: isDisabled,
                        previous: ( align && isPrevious ),
                        next: ( align && isNext )
                    };
                }

                paginationCtrl.getPages = function (currentPage) {
                    return [
                        makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
                        makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
                    ];
                };
            }
        };
    }]);

angular.module('jb.ui')
    .provider('$jbPop', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            customClass: '',
            container: false,
            target: false,
            placement: 'right',
            template: 'jb/ui/popover/popover.tpl.html',
            contentTemplate: false,
            trigger: 'click',
            keyboard: true,
            html: true,
            title: '',
            content: '',
            delay: 0,
            autoClose: false
        };

        this.$get = ["$jbTip", function ($jbTip) {

            function PopoverFactory(element, config) {

                // Common vars
                var options = angular.extend({}, defaults, config);

                var $popover = $jbTip(element, options);

                // Support scope as string options [/*title, */content]
                if (options.content) {
                    $popover.$scope.content = options.content;
                }

                return $popover;

            }

            return PopoverFactory;

        }];

    })

    .directive('jbPop', ["$window", "$sce", "$jbPop", function ($window, $sce, $jbPop) {

        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) {
                        attr.$observe(key, function (newValue, oldValue) {
                            scope[key] = $sce.trustAsHtml(newValue);
                            if (angular.isDefined(oldValue)) {
                                requestAnimationFrame(function () {
                                    if (popover) popover.$applyPlacement();
                                });
                            }
                        });
                    }
                });

                // Support scope as an object
               if( attr.jbPop ) {
                   scope.$watch(attr.jbPop, function (newValue, oldValue) {

                       if (angular.isObject(newValue)) {
                           angular.extend(scope, newValue);
                       } else {
                           scope.content = newValue;
                       }
                       if (angular.isDefined(oldValue)) {
                           requestAnimationFrame(function () {
                               if (popover) popover.$applyPlacement();
                           });
                       }
                   }, true);
               }
                // Visibility binding support
               if( attr.bsShow) {
                   scope.$watch(attr.bsShow, function (newValue, oldValue) {
                       if (!popover || !angular.isDefined(newValue)) return;
                       if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
                       if( newValue === true ) popover.show() ;
                       else popover.hide();
                   });
               }
                // Initialize popover
                var popover = $jbPop(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (popover) popover.destroy();
                    options = null;
                    popover = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .directive('jbRadioList', ["$parse", function ($parse) {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '=', jbOther: '='},
            templateUrl: "jb/ui/radioList/radioList.tpl.html",
            link: function (scope, element, attrs) {
                if (!angular.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }
                scope.selection = '';
                scope.otherVal = '';
                setup(scope.jbVal);
                function setup(val) {
                    if (val) {
                        if (scope.jbSrc.indexOf(val) > -1) {
                            scope.selection = val;
                        } else if (scope.jbOther) {
                            scope.selection = 'other';
                            scope.otherVal = val;
                        } else {
                            scope.selection = '';
                            scope.otherVal = '';
                        }
                    }
                }

                function updateJbVal() {
                    scope.jbVal = scope.selection === 'other'? scope.otherVal: scope.selection;
                }

                scope.select = function select(val) {
                    scope.selection = val;
                    if (val !== 'other') {
                        scope.otherVal = '';
                    }
                    updateJbVal();
                };

                scope.$watch('otherVal', function (newval) {
                    if (newval) {
                        scope.selection = 'other';
                    }
                    updateJbVal();
                });

                scope.$watch('jbVal', setup);
            }
        };
    }]);

(function() {
    var module = angular.module('jb.ui');

    module.provider('$jbSelect', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'select',
            prefixEvent: '$select',
            placement: 'bottom-left',
            template: 'jb/ui/select/select.tpl.html',
            trigger: 'focus',
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            multiple: false,
            allNoneButtons: false,
            sort: true,
            caretHtml: '&nbsp;<span class="caret"></span>',
            placeholder: '下拉选择',
            allText: 'All',
            noneText: 'None',
            maxLength: 3,
            maxLengthHtml: 'selected',
            iconCheckmark: 'glyphicon glyphicon-ok'
        };

        this.$get = ["$window", "$document", "$rootScope", "$jbTip", "$timeout", function ($window, $document, $rootScope, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
            var isTouch = ('createTouch' in $window.document) && isNative;

            function SelectFactory(element, controller, config) {

                var $select = {};

                // Common vars
                var options = angular.extend({}, defaults, config);

                // parse sort option value to support attribute as string
                // when binded to interpolated value
                options.sort = options.sort.toString().match(/true|1/i);

                $select = $jbTip(element, options);
                var scope = $select.$scope;

                scope.$matches = [];
                scope.$activeIndex = -1;
                scope.$isMultiple = options.multiple;
                scope.$showAllNoneButtons = options.allNoneButtons && options.multiple;
                scope.$iconCheckmark = options.iconCheckmark;
                scope.$allText = options.allText;
                scope.$noneText = options.noneText;

                scope.$activate = function (index) {
                    scope.$$postDigest(function () {
                        $select.activate(index);
                    });
                };

                scope.$select = function (index, evt) {
                    scope.$$postDigest(function () {
                        $select.select(index);
                    });
                };

                scope.$isVisible = function () {
                    return $select.$isVisible();
                };

                scope.$isActive = function (index) {
                    return $select.$isActive(index);
                };

                scope.$selectAll = function () {
                    for (var i = 0; i < scope.$matches.length; i++) {
                        if (!scope.$isActive(i)) {
                            scope.$select(i);
                        }
                    }
                };

                scope.$selectNone = function () {
                    for (var i = 0; i < scope.$matches.length; i++) {
                        if (scope.$isActive(i)) {
                            scope.$select(i);
                        }
                    }
                };

                // Public methods

                $select.update = function (matches) {
                    scope.$matches = matches;
                    $select.$updateActiveIndex();
                };

                $select.activate = function (index) {
                    if (options.multiple) {
                        if ($select.$isActive(index)) scope.$activeIndex.splice(scope.$activeIndex.indexOf(index), 1); else scope.$activeIndex.push(index);
                        if (options.sort) scope.$activeIndex.sort();
                    } else {
                        scope.$activeIndex = index;
                    }
                    return scope.$activeIndex;
                };

                $select.select = function (index) {
                    var value = scope.$matches[index].value;
                    scope.$apply(function () {
                        $select.activate(index);
                        if (options.multiple) {
                            controller.$setViewValue(scope.$activeIndex.map(function (index) {
                                return scope.$matches[index].value;
                            }));
                        } else {
                            controller.$setViewValue(value);
                            // Hide if single select
                            $select.hide();
                        }
                    });
                    // Emit event
                    scope.$emit(options.prefixEvent + '.select', value, index, $select);
                };

                // Protected methods

                $select.$updateActiveIndex = function () {
                    if (controller.$modelValue && scope.$matches.length) {
                        if (options.multiple && angular.isArray(controller.$modelValue)) {
                            scope.$activeIndex = controller.$modelValue.map(function (value) {
                                return $select.$getIndex(value);
                            });
                        } else {
                            scope.$activeIndex = $select.$getIndex(controller.$modelValue);
                        }
                    } else if (scope.$activeIndex >= scope.$matches.length) {
                        scope.$activeIndex = options.multiple ? [] : 0;
                    }
                };

                $select.$isVisible = function () {
                    if (!options.minLength || !controller) {
                        return scope.$matches.length;
                    }
                    // minLength support
                    return scope.$matches.length && controller.$viewValue.length >= options.minLength;
                };

                $select.$isActive = function (index) {
                    if (options.multiple) {
                        return scope.$activeIndex.indexOf(index) !== -1;
                    } else {
                        return scope.$activeIndex === index;
                    }
                };

                $select.$getIndex = function (value) {
                    var l = scope.$matches.length, i = l;
                    if (!l) return;
                    for (i = l; i--;) {
                        if (scope.$matches[i].value === value) break;
                    }
                    if (i < 0) return;
                    return i;
                };

                $select.$onMouseDown = function (evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        targetEl.triggerHandler('click');
                    }
                };

                $select.$onKeyDown = function (evt) {
                    if (!/(9|13|38|40)/.test(evt.keyCode)) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    // release focus on tab
                    if (options.multiple && evt.keyCode === 9) {
                        return $select.hide();
                    }

                    // Select with enter
                    if (!options.multiple && (evt.keyCode === 13 || evt.keyCode === 9)) {
                        return $select.select(scope.$activeIndex);
                    }

                    if (!options.multiple) {
                        // Navigate with keyboard
                        if (evt.keyCode === 38 && scope.$activeIndex > 0) scope.$activeIndex--;
                        else if (evt.keyCode === 38 && scope.$activeIndex < 0) scope.$activeIndex = scope.$matches.length - 1;
                        else if (evt.keyCode === 40 && scope.$activeIndex < scope.$matches.length - 1) scope.$activeIndex++;
                        else if (angular.isUndefined(scope.$activeIndex)) scope.$activeIndex = 0;
                        scope.$digest();
                    }
                };

                // Overrides

                var _show = $select.show;
                $select.show = function () {
                    _show();
                    if (options.multiple) {
                        $select.$element.addClass('select-multiple');
                    }
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        $select.$element.on(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
                        if (options.keyboard) {
                            element.on('keydown', $select.$onKeyDown);
                        }
                    }, 0, false);
                };

                var _hide = $select.hide;
                $select.hide = function () {
                    if (!options.multiple && !controller.$modelValue) {
                        scope.$activeIndex = -1;
                    }
                    $select.$element.off(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
                    if (options.keyboard) {
                        element.off('keydown', $select.$onKeyDown);
                    }
                    _hide(true);
                };

                return $select;

            }

            SelectFactory.defaults = defaults;
            return SelectFactory;

        }];

    });

    module.directive('jbSelect', ["$window", "$parse", "$q", "$jbSelect", "$jbParseOptions", function ($window, $parse, $q, $jbSelect, $jbParseOptions) {

        var defaults = $jbSelect.defaults;

        return {
            restrict: 'EAC',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                // Directive options
                var options = {scope: scope, placeholder: defaults.placeholder};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'placeholder', 'multiple', 'allNoneButtons', 'maxLength', 'maxLengthHtml', 'allText', 'noneText', 'iconCheckmark', 'autoClose', 'id', 'sort', 'caretHtml'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Add support for select markup
                if (element[0].nodeName.toLowerCase() === 'select') {
                    var inputEl = element;
                    inputEl.css('display', 'none');
                    element = angular.element('<button type="button" class="btn btn-default"></button>');
                    inputEl.after(element);
                }

                // Build proper bsOptions
                var parsedOptions = $jbParseOptions(attr.jbOptions);

                // Initialize select
                var select = $jbSelect(element, controller, options);

                // Watch bsOptions values before filtering for changes
                var watchedOptions = parsedOptions.$match[7].replace(/\|.+/, '').trim();
                scope.$watch(watchedOptions, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', watchedOptions, newValue, oldValue);
                    parsedOptions.valuesFn(scope, controller)
                        .then(function (values) {
                            select.update(values);
                            controller.$render();
                        });
                }, true);

                // Watch model for changes
                scope.$watch(attr.ngModel, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.ngModel, newValue, oldValue);
                    select.$updateActiveIndex();
                    controller.$render();
                }, true);

                // Model rendering in view
                controller.$render = function () {
                    // console.warn('$render', element.attr('ng-model'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var selected, index;
                    if (options.multiple && angular.isArray(controller.$modelValue)) {
                        selected = controller.$modelValue.map(function (value) {
                            index = select.$getIndex(value);
                            return angular.isDefined(index) ? select.$scope.$matches[index].label : false;
                        }).filter(angular.isDefined);
                        if (selected.length > (options.maxLength || defaults.maxLength)) {
                            selected = selected.length + ' ' + (options.maxLengthHtml || defaults.maxLengthHtml);
                        } else {
                            selected = selected.join(', ');
                        }
                    } else {
                        index = select.$getIndex(controller.$modelValue);
                        selected = angular.isDefined(index) ? select.$scope.$matches[index].label : false;
                    }
                    element.html((selected ? selected : options.placeholder) + (options.caretHtml ? options.caretHtml : defaults.caretHtml));
                };

                if (options.multiple) {
                    controller.$isEmpty = function (value) {
                        return !value || value.length === 0;
                    };
                }

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (select) select.destroy();
                    options = null;
                    select = null;
                });

            }
        };

    }]);
})();
(function (ng) {
    "use strict";
    ng.module('jb.ui.table', ['jb.filter']);
})(angular);
//ref https://github.com/angular-ui/bootstrap/blob/bootstrap3/src/tabs/tabs.js

angular.module('jb.ui')

    .controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
        var ctrl = this,
            tabs = ctrl.tabs = $scope.tabs = [];

        ctrl.select = function (tab) {
            angular.forEach(tabs, function (tab) {
                tab.active = false;
            });
            tab.active = true;
        };

        ctrl.addTab = function addTab(tab) {
            tabs.push(tab);
            if (tabs.length === 1 || tab.active) {
                ctrl.select(tab);
            }
        };

        ctrl.removeTab = function removeTab(tab) {
            var index = tabs.indexOf(tab);
            //Select a new tab if the tab to be removed is selected
            if (tab.active && tabs.length > 1) {
                //If this is the last tab, select the previous tab. else, the next tab.
                var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
                ctrl.select(tabs[newActiveIndex]);
            }
            tabs.splice(index, 1);
        };
    }])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
 * @param {string=} direction  What direction the tabs should be rendered. Available:
 * 'right', 'left', 'below'.
 *
 * @example
 <example module="ui.bootstrap">
 <file name="index.html">
 <tabset>
 <tab heading="Tab 1"><b>First</b> Content!</tab>
 <tab heading="Tab 2"><i>Second</i> Content!</tab>
 </tabset>
 <hr />
 <tabset vertical="true">
 <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
 <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
 </tabset>
 <tabset justified="true">
 <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
 <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
 </tabset>
 </file>
 </example>
 */
    .directive('tabset', function () {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            require: '^tabset',
            scope: {},
            controller: 'TabsetController',
            templateUrl: 'jb/ui/tabs/tabset.tpl.html',
            compile: function (elm, attrs, transclude) {
                return function (scope, element, attrs, tabsetCtrl) {
                    scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
                    scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
                    scope.type = angular.isDefined(attrs.type) ? scope.$parent.$eval(attrs.type) : 'tabs';
                    scope.direction = angular.isDefined(attrs.direction) ? scope.$parent.$eval(attrs.direction) : 'top';
                    scope.tabsAbove = (scope.direction != 'below');
                    tabsetCtrl.$scope = scope;
                    tabsetCtrl.$transcludeFn = transclude;
                };
            }
        };
    })

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
 <example module="ui.bootstrap">
 <file name="index.html">
 <div ng-controller="TabsDemoCtrl">
 <button class="btn btn-small" ng-click="items[0].active = true">
 Select item 1, using active binding
 </button>
 <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
 Enable/disable item 2, using disabled binding
 </button>
 <br />
 <tabset>
 <tab heading="Tab 1">First Tab</tab>
 <tab select="alertMe()">
 <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
 Second Tab, with alert callback and html heading!
 </tab>
 <tab ng-repeat="item in items"
 heading="{{item.title}}"
 disabled="item.disabled"
 active="item.active">
 {{item.content}}
 </tab>
 </tabset>
 </div>
 </file>
 <file name="script.js">
 function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
 </file>
 </example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
 <example module="ui.bootstrap">
 <file name="index.html">
 <tabset>
 <tab>
 <tab-heading><b>HTML</b> in my titles?!</tab-heading>
 And some content, too!
 </tab>
 <tab>
 <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
 That's right.
 </tab>
 </tabset>
 </file>
 </example>
 */
    .directive('tab', ['$parse', function ($parse) {
        return {
            require: '^tabset',
            restrict: 'EA',
            replace: true,
            templateUrl: 'jb/ui/tabs/tab.tpl.html',
            transclude: true,
            scope: {
                heading: '@',
                onSelect: '&select', //This callback is called in contentHeadingTransclude
                //once it inserts the tab's content into the dom
                onDeselect: '&deselect'
            },
            controller: function () {
                //Empty controller so other directives can require being 'under' a tab
            },
            compile: function (elm, attrs, transclude) {
                return function postLink(scope, elm, attrs, tabsetCtrl) {
                    var getActive, setActive;
                    if (attrs.active) {
                        getActive = $parse(attrs.active);
                        setActive = getActive.assign;
                        scope.$parent.$watch(getActive, function updateActive(value, oldVal) {
                            // Avoid re-initializing scope.active as it is already initialized
                            // below. (watcher is called async during init with value ===
                            // oldVal)
                            if (value !== oldVal) {
                                scope.active = !!value;
                            }
                        });
                        scope.active = getActive(scope.$parent);
                    } else {
                        setActive = getActive = angular.noop;
                    }

                    scope.$watch('active', function (active) {
                        // Note this watcher also initializes and assigns scope.active to the
                        // attrs.active expression.
                        setActive(scope.$parent, active);
                        if (active) {
                            tabsetCtrl.select(scope);
                            scope.onSelect();
                        } else {
                            scope.onDeselect();
                        }
                    });

                    scope.disabled = false;
                    if (attrs.disabled) {
                        scope.$parent.$watch($parse(attrs.disabled), function (value) {
                            scope.disabled = !!value;
                        });
                    }

                    scope.select = function () {
                        if (!scope.disabled) {
                            scope.active = true;
                        }
                    };

                    tabsetCtrl.addTab(scope);
                    scope.$on('$destroy', function () {
                        tabsetCtrl.removeTab(scope);
                    });


                    //We need to transclude later, once the content container is ready.
                    //when this link happens, we're inside a tab heading.
                    scope.$transcludeFn = transclude;
                };
            }
        };
    }])

    .directive('tabHeadingTransclude', [function () {
        return {
            restrict: 'A',
            require: '^tab',
            link: function (scope, elm, attrs, tabCtrl) {
                scope.$watch('headingElement', function updateHeadingElement(heading) {
                    if (heading) {
                        elm.html('');
                        elm.append(heading);
                    }
                });
            }
        };
    }])

    .directive('tabContentTransclude', function () {
        return {
            restrict: 'A',
            require: '^tabset',
            link: function (scope, elm, attrs) {
                var tab = scope.$eval(attrs.tabContentTransclude);

                //Now our tab is ready to be transcluded: both the tab heading area
                //and the tab content area are loaded.  Transclude 'em both.
                tab.$transcludeFn(tab.$parent, function (contents) {
                    angular.forEach(contents, function (node) {
                        if (isTabHeading(node)) {
                            //Let tabHeadingTransclude know.
                            tab.headingElement = node;
                        } else {
                            elm.append(node);
                        }
                    });
                });
            }
        };
        function isTabHeading(node) {
            return node.tagName && (
                node.hasAttribute('tab-heading') ||
                    node.hasAttribute('data-tab-heading') ||
                    node.tagName.toLowerCase() === 'tab-heading' ||
                    node.tagName.toLowerCase() === 'data-tab-heading'
                );
        }
    })

    .directive('tabsetTitles', function () {
        return {
            restrict: 'A',
            require: '^tabset',
            templateUrl: 'jb/ui/tabs/tabset-titles.tpl.html',
            replace: true,
            link: function (scope, elm, attrs, tabsetCtrl) {
                if (!scope.$eval(attrs.tabsetTitles)) {
                    elm.remove();
                } else {
                    //now that tabs location has been decided, transclude the tab titles in
                    tabsetCtrl.$transcludeFn(tabsetCtrl.$scope.$parent, function (node) {
                        elm.append(node);
                    });
                }
            }
        };
    });

angular.module('jb.ui')
    .provider('$jbTip', function () {
        var defaults = this.defaults = {
            animation: 'am-fade',
            customClass: '',
            prefixClass: 'tooltip',
            prefixEvent: 'tooltip',
            container: false,
            target: false,
            placement: 'top',
            template: 'jb/ui/tooltip/tooltip.tpl.html',
            contentTemplate: false,
            trigger: 'hover focus',
            keyboard: false,
            html: true,
            show: false,
            title: '',
            type: '',
            delay: 0,
            autoClose: false,
            bsEnabled: true
        };
        this.$get = ["$window", "$rootScope", "$compile", "$q", "$templateCache", "$http", "$animate", "$sce", "$$rAF", "$timeout", "$jbPosition", function ($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $sce, $$rAF, $timeout, $jbPosition) {//dimensions,

            var trim = String.prototype.trim;
            var isTouch = 'createTouch' in $window.document;
            var htmlReplaceRegExp = /ng-bind="/ig;
            var $body = angular.element($window.document);

            function TooltipFactory(element, config) {

                var $tooltip = {};

                // Common vars
                var nodeName = element[0].nodeName.toLowerCase();
                var options = $tooltip.$options = angular.extend({}, defaults, config);
                $tooltip.$promise = fetchTemplate(options.template);
                var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                if (options.delay && angular.isString(options.delay)) {
                    var split = options.delay.split(',').map(parseFloat);
                    options.delay = split.length > 1 ? {show: split[0], hide: split[1]} : split[0];
                }

                // store $id to identify the triggering element in events
                // give priority to options.id, otherwise, try to use
                // element id if defined
                $tooltip.$id = options.id || element.attr('id') || '';

                // Support scope as string options
                if (options.title) {
                    scope.title = $sce.trustAsHtml(options.title);
                }

                // Provide scope helpers
                scope.$setEnabled = function (isEnabled) {
                    scope.$$postDigest(function () {
                        $tooltip.setEnabled(isEnabled);
                    });
                };
                scope.$hide = function () {
                    scope.$$postDigest(function () {
                        $tooltip.hide();
                    });
                };
                scope.$show = function () {
                    scope.$$postDigest(function () {
                        $tooltip.show();
                    });
                };
                scope.$toggle = function () {
                    scope.$$postDigest(function () {
                        $tooltip.toggle();
                    });
                };
                // Publish isShown as a protected var on scope
                $tooltip.$isShown = scope.$isShown = false;

                // Private vars
                var timeout, hoverState;

                // Support contentTemplate option
                if (options.contentTemplate) {
                    $tooltip.$promise = $tooltip.$promise.then(function (template) {
                        var templateEl = angular.element(template);
                        return fetchTemplate(options.contentTemplate)
                            .then(function (contentTemplate) {
                                var contentEl = findElement('[ng-bind="content"]', templateEl[0]);
                                if (!contentEl.length) contentEl = findElement('[ng-bind="title"]', templateEl[0]);
                                contentEl.removeAttr('ng-bind').html(contentTemplate);
                                return templateEl[0].outerHTML;
                            });
                    });
                }

                // Fetch, compile then initialize tooltip
                var tipLinker, tipElement, tipTemplate, tipContainer, tipScope;
                $tooltip.$promise.then(function (template) {
                    if (angular.isObject(template)) template = template.data;
                    if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
                    template = trim.apply(template);
                    tipTemplate = template;
                    tipLinker = $compile(template);
                    $tooltip.init();
                });

                $tooltip.init = function () {

                    // Options: delay
                    if (options.delay && angular.isNumber(options.delay)) {
                        options.delay = {
                            show: options.delay,
                            hide: options.delay
                        };
                    }

                    // Replace trigger on touch devices ?
                    // if(isTouch && options.trigger === defaults.trigger) {
                    //   options.trigger.replace(/hover/g, 'click');
                    // }

                    // Options : container
                    if (options.container === 'self') {
                        tipContainer = element;
                    } else if (angular.isElement(options.container)) {
                        tipContainer = options.container;
                    } else if (options.container) {
                        tipContainer = findElement(options.container);
                    }

                    // Options: trigger
                    bindTriggerEvents();

                    // Options: target
                    if (options.target) {
                        options.target = angular.isElement(options.target) ? options.target : findElement(options.target);
                    }

                    // Options: show
                    if (options.show) {
                        scope.$$postDigest(function () {
                            if (options.trigger === 'focus') element[0].focus();
                            else $tooltip.show();
                        });
                    }

                };

                $tooltip.destroy = function () {

                    // Unbind events
                    unbindTriggerEvents();

                    // Remove element
                    destroyTipElement();

                    // Destroy scope
                    scope.$destroy();

                };

                $tooltip.enter = function () {

                    clearTimeout(timeout);
                    hoverState = 'in';
                    if (!options.delay || !options.delay.show) {
                        return $tooltip.show();
                    }

                    timeout = setTimeout(function () {
                        if (hoverState === 'in') $tooltip.show();
                    }, options.delay.show);

                };

                $tooltip.show = function () {
                    if (!options.bsEnabled || $tooltip.$isShown) return;

                    scope.$emit(options.prefixEvent + '.show.before', $tooltip);
                    var parent, after;
                    if (options.container) {
                        parent = tipContainer;
                        if (tipContainer[0].lastChild) {
                            after = angular.element(tipContainer[0].lastChild);
                        } else {
                            after = null;
                        }
                    } else {
                        parent = null;
                        after = element;
                    }


                    // Hide any existing tipElement
                    if (tipElement) destroyTipElement();
                    // Fetch a cloned element linked from template
                    tipScope = $tooltip.$scope.$new();
                    tipElement = $tooltip.$element = tipLinker(tipScope, function (clonedElement, scope) {
                    });

                    // Set the initial positioning.  Make the tooltip invisible
                    // so IE doesn't try to focus on it off screen.
                    tipElement.css({top: '-9999px', left: '-9999px', display: 'block', visibility: 'hidden'});

                    // Options: animation
                    if (options.animation) tipElement.addClass(options.animation);
                    // Options: type
                    if (options.type) tipElement.addClass(options.prefixClass + '-' + options.type);
                    // Options: custom classes
                    if (options.customClass) tipElement.addClass(options.customClass);

                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    var promise = $animate.enter(tipElement, parent, after, enterAnimateCallback);
                    if (promise && promise.then) promise.then(enterAnimateCallback);

                    $tooltip.$isShown = scope.$isShown = true;
                    safeDigest(scope);
                    $$rAF(function () {
                        $tooltip.$applyPlacement();

                        // Once placed, make the tooltip visible
                        if (tipElement) tipElement.css({visibility: 'visible'});
                    }); // var a = bodyEl.offsetWidth + 1; ?

                    // Bind events
                    if (options.keyboard) {
                        if (options.trigger !== 'focus') {
                            $tooltip.focus();
                        }
                        bindKeyboardEvents();
                    }

                    if (options.autoClose) {
                        bindAutoCloseEvents();
                    }

                };

                function enterAnimateCallback() {
                    scope.$emit(options.prefixEvent + '.show', $tooltip);
                }

                $tooltip.leave = function () {

                    clearTimeout(timeout);
                    hoverState = 'out';
                    if (!options.delay || !options.delay.hide) {
                        return $tooltip.hide();
                    }
                    timeout = setTimeout(function () {
                        if (hoverState === 'out') {
                            $tooltip.hide();
                        }
                    }, options.delay.hide);

                };

                var _blur;
                var _tipToHide;
                $tooltip.hide = function (blur) {

                    if (!$tooltip.$isShown) return;
                    scope.$emit(options.prefixEvent + '.hide.before', $tooltip);

                    // store blur value for leaveAnimateCallback to use
                    _blur = blur;

                    // store current tipElement reference to use
                    // in leaveAnimateCallback
                    _tipToHide = tipElement;

                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    var promise = $animate.leave(tipElement, leaveAnimateCallback);
                    if (promise && promise.then) promise.then(leaveAnimateCallback);

                    $tooltip.$isShown = scope.$isShown = false;
                    safeDigest(scope);

                    // Unbind events
                    if (options.keyboard && tipElement !== null) {
                        unbindKeyboardEvents();
                    }

                    if (options.autoClose && tipElement !== null) {
                        unbindAutoCloseEvents();
                    }
                };

                function leaveAnimateCallback() {
                    scope.$emit(options.prefixEvent + '.hide', $tooltip);

                    // check if current tipElement still references
                    // the same element when hide was called
                    if (tipElement === _tipToHide) {
                        // Allow to blur the input when hidden, like when pressing enter key
                        if (_blur && options.trigger === 'focus') {
                            return element[0].blur();
                        }

                        // clean up child scopes
                        destroyTipElement();
                    }
                }

                $tooltip.toggle = function () {
                    if( $tooltip.$isShown) $tooltip.leave() ;
                    else $tooltip.enter();
                };

                $tooltip.focus = function () {
                    tipElement[0].focus();
                };

                $tooltip.setEnabled = function (isEnabled) {
                    options.bsEnabled = isEnabled;
                };

                // Protected methods

                $tooltip.$applyPlacement = function () {
                    if (!tipElement) return;

                    // Determine if we're doing an auto or normal placement
                    var placement = options.placement,
                        autoToken = /\s?auto?\s?/i,
                        autoPlace = autoToken.test(placement);

                    if (autoPlace) {
                        placement = placement.replace(autoToken, '') || defaults.placement;
                    }

                    // Need to add the position class before we get
                    // the offsets
                    tipElement.addClass(options.placement);

                    // Get the position of the target element
                    // and the height and width of the tooltip so we can center it.
                    var elementPosition = getPosition(),
                        tipWidth = tipElement.prop('offsetWidth'),
                        tipHeight = tipElement.prop('offsetHeight');

                    // If we're auto placing, we need to check the positioning
                    if (autoPlace) {
                        var originalPlacement = placement;
                        var container = options.container ? angular.element(document.querySelector(options.container)) : element.parent();
                        var containerPosition = getPosition(container);

                        // Determine if the vertical placement
                        if (originalPlacement.indexOf('bottom') >= 0 && elementPosition.bottom + tipHeight > containerPosition.bottom) {
                            placement = originalPlacement.replace('bottom', 'top');
                        } else if (originalPlacement.indexOf('top') >= 0 && elementPosition.top - tipHeight < containerPosition.top) {
                            placement = originalPlacement.replace('top', 'bottom');
                        }

                        // Determine the horizontal placement
                        // The exotic placements of left and right are opposite of the standard placements.  Their arrows are put on the left/right
                        // and flow in the opposite direction of their placement.
                        if ((originalPlacement === 'right' || originalPlacement === 'bottom-left' || originalPlacement === 'top-left') &&
                            elementPosition.right + tipWidth > containerPosition.width) {

                            placement = originalPlacement === 'right' ? 'left' : placement.replace('left', 'right');
                        } else if ((originalPlacement === 'left' || originalPlacement === 'bottom-right' || originalPlacement === 'top-right') &&
                            elementPosition.left - tipWidth < containerPosition.left) {

                            placement = originalPlacement === 'left' ? 'right' : placement.replace('right', 'left');
                        }

                        tipElement.removeClass(originalPlacement).addClass(placement);
                    }

                    // Get the tooltip's top and left coordinates to center it with this directive.
                    var tipPosition = getCalculatedOffset(placement, elementPosition, tipWidth, tipHeight);
                    applyPlacementCss(tipPosition.top, tipPosition.left);
                };

                $tooltip.$onKeyUp = function (evt) {
                    if (evt.which === 27 && $tooltip.$isShown) {
                        $tooltip.hide();
                        evt.stopPropagation();
                    }
                };

                $tooltip.$onFocusKeyUp = function (evt) {
                    if (evt.which === 27) {
                        element[0].blur();
                        evt.stopPropagation();
                    }
                };

                $tooltip.$onFocusElementMouseDown = function (evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Some browsers do not auto-focus buttons (eg. Safari)
                  if(  $tooltip.$isShown ) element[0].blur() ;
                    else element[0].focus();
                };

                // bind/unbind events
                function bindTriggerEvents() {
                    var triggers = options.trigger.split(' ');
                    angular.forEach(triggers, function (trigger) {
                        if (trigger === 'click') {
                            element.on('click', $tooltip.toggle);
                        } else if (trigger !== 'manual') {
                            element.on(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
                            element.on(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
                            nodeName === 'button' && trigger !== 'hover' && element.on(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
                        }
                    });
                }

                function unbindTriggerEvents() {
                    var triggers = options.trigger.split(' ');
                    for (var i = triggers.length; i--;) {
                        var trigger = triggers[i];
                        if (trigger === 'click') {
                            element.off('click', $tooltip.toggle);
                        } else if (trigger !== 'manual') {
                            element.off(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
                            element.off(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
                            nodeName === 'button' && trigger !== 'hover' && element.off(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
                        }
                    }
                }

                function bindKeyboardEvents() {
                    if (options.trigger !== 'focus') {
                        tipElement.on('keyup', $tooltip.$onKeyUp);
                    } else {
                        element.on('keyup', $tooltip.$onFocusKeyUp);
                    }
                }

                function unbindKeyboardEvents() {
                    if (options.trigger !== 'focus') {
                        tipElement.off('keyup', $tooltip.$onKeyUp);
                    } else {
                        element.off('keyup', $tooltip.$onFocusKeyUp);
                    }
                }

                var _autoCloseEventsBinded = false;

                function bindAutoCloseEvents() {
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        // Stop propagation when clicking inside tooltip
                        tipElement.on('click', stopEventPropagation);

                        // Hide when clicking outside tooltip
                        $body.on('click', $tooltip.hide);

                        _autoCloseEventsBinded = true;
                    }, 0, false);
                }

                function unbindAutoCloseEvents() {
                    if (_autoCloseEventsBinded) {
                        tipElement.off('click', stopEventPropagation);
                        $body.off('click', $tooltip.hide);
                        _autoCloseEventsBinded = false;
                    }
                }

                function stopEventPropagation(event) {
                    event.stopPropagation();
                }

                // Private methods

                function getPosition($element) {
                    $element = $element || (options.target || element);

                    var el = $element[0];

                    var elRect = el.getBoundingClientRect();
                    var rect = {};

                    // IE8 has issues with angular.extend and using elRect directly.
                    // By coping the values of elRect into a new object, we can continue to use extend
                    for (var p in elRect) {
                        if (elRect.hasOwnProperty(p)) {
                            rect[p] = elRect[p];
                        }
                    }

                    if (elRect.width === null) {
                        // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
                        rect = angular.extend({}, rect, {
                            width: elRect.right - elRect.left,
                            height: elRect.bottom - elRect.top
                        });
                    }

                    var elPos = {};
                    if (options.container === 'body') {
                        elPos = $jbPosition.offset($element);
                    } else {
                        elPos = $jbPosition.position($element);
                    }
                    return angular.extend({}, rect, elPos);
                }

                function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
                    var offset;
                    var split = placement.split('-');

                    switch (split[0]) {
                        case 'right':
                            offset = {
                                top: position.top + position.height / 2 - actualHeight / 2,
                                left: position.left + position.width
                            };
                            break;
                        case 'bottom':
                            offset = {
                                top: position.top + position.height,
                                left: position.left + position.width / 2 - actualWidth / 2
                            };
                            break;
                        case 'left':
                            offset = {
                                top: position.top + position.height / 2 - actualHeight / 2,
                                left: position.left - actualWidth
                            };
                            break;
                        default:
                            offset = {
                                top: position.top - actualHeight,
                                left: position.left + position.width / 2 - actualWidth / 2
                            };
                            break;
                    }

                    if (!split[1]) {
                        return offset;
                    }

                    // Add support for corners @todo css
                    if (split[0] === 'top' || split[0] === 'bottom') {
                        switch (split[1]) {
                            case 'left':
                                offset.left = position.left;
                                break;
                            case 'right':
                                offset.left = position.left + position.width - actualWidth;
                        }
                    } else if (split[0] === 'left' || split[0] === 'right') {
                        switch (split[1]) {
                            case 'top':
                                offset.top = position.top - actualHeight;
                                break;
                            case 'bottom':
                                offset.top = position.top + position.height;
                        }
                    }

                    return offset;
                }

                function applyPlacementCss(top, left) {
                    tipElement.css({top: top + 'px', left: left + 'px'});
                }

                function destroyTipElement() {
                    // Cancel pending callbacks
                    clearTimeout(timeout);

                    if ($tooltip.$isShown && tipElement !== null) {
                        if (options.autoClose) {
                            unbindAutoCloseEvents();
                        }

                        if (options.keyboard) {
                            unbindKeyboardEvents();
                        }
                    }

                    if (tipScope) {
                        tipScope.$destroy();
                        tipScope = null;
                    }

                    if (tipElement) {
                        tipElement.remove();
                        tipElement = $tooltip.$element = null;
                    }
                }

                return $tooltip;

            }

            // Helper functions

            function safeDigest(scope) {
                scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
            }

            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }

            var fetchPromises = {};

            function fetchTemplate(template) {
                if (fetchPromises[template]) return fetchPromises[template];
                return (fetchPromises[template] = $q.when($templateCache.get(template) || $http.get(template))
                    .then(function (res) {
                        if (angular.isObject(res)) {
                            $templateCache.put(template, res.data);
                            return res.data;
                        }
                        return res;
                    }));
            }

            return TooltipFactory;

        }];
    })

    .directive('jbTip', ["$window", "$location", "$sce", "$jbTip", "$$rAF", function ($window, $location, $sce, $jbTip, $$rAF) {

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'backdropAnimation', 'type', 'customClass', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // should not parse target attribute, only data-target
                if (element.attr('data-target')) {
                    options.target = element.attr('data-target');
                }

                // overwrite inherited title value when no value specified
                // fix for angular 1.3.1 531a8de72c439d8ddd064874bf364c00cedabb11
                if (!scope.hasOwnProperty('title')) {
                    scope.title = '';
                }

                // Observe scope attributes for change
                attr.$observe('title', function (newValue) {
                    if (angular.isDefined(newValue) || !scope.hasOwnProperty('title')) {
                        var oldValue = scope.title;
                        scope.title = $sce.trustAsHtml(newValue);
                        angular.isDefined(oldValue) && $$rAF(function () {
                            tooltip && tooltip.$applyPlacement();
                        });
                    }
                });

                // Support scope as an object
                attr.jbTip && scope.$watch(attr.jbTip, function (newValue, oldValue) {
                    if (angular.isObject(newValue)) {
                        angular.extend(scope, newValue);
                    } else {
                        scope.title = newValue;
                    }
                    angular.isDefined(oldValue) && $$rAF(function () {
                        tooltip && tooltip.$applyPlacement();
                    });
                }, true);

                // Visibility binding support
                attr.bsShow && scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(tooltip),?/i);
                    newValue === true ? tooltip.show() : tooltip.hide();
                });

                // Enabled binding support
                attr.bsEnabled && scope.$watch(attr.bsEnabled, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.bsEnabled, newValue, oldValue);
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|1|,?(tooltip),?/i);
                    newValue === false ? tooltip.setEnabled(false) : tooltip.setEnabled(true);
                });

                // Initialize popover
                var tooltip = $jbTip(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (tooltip) tooltip.destroy();
                    options = null;
                    tooltip = null;
                });

            }
        };

    }]);


(function() {
    var module = angular.module('jb.ui');

    var Ctrl = ['$scope', '$element', '$transclude', function($scope, $element, $transclude){

        var toTransclude;

        $scope.$on('$destroy', function(){
            if(toTransclude){
                toTransclude.remove();
                toTransclude = null;
            }
        });

        this.transclude = function(name, element){
            for(var i = 0; i < toTransclude.length; ++i){
                var el = angular.element(toTransclude[i]);
                if(el.attr('name') === name){
                    element.empty();
                    if(el.attr('jb-transclude-self'))
                        element.append(el);
                    else
                        element.append(el.children());
                    return;
                }
            }
        };

        $transclude(function(clone){
            toTransclude = clone;
        });
    }];
    module.directive('jbTransclude', function(){
        return {
            controller: Ctrl
        };
    });

    module.directive('jbPartial', function(){
        return {
            require: ['^jbTransclude'],
            link: function(scope, element, attrs, ctrls){
                var ctrl = ctrls[0];
                ctrl.transclude(attrs.jbPartial, element);
            }
        };
    });

})();
angular.module('jb.ui')
    .directive('jbTriStateCheckboxTreeview', function () {
        return {
            restrict: 'ECA',
            link: function (scope, element, attrs) {
                element.on('change', function (e) {
                    var checked = $(e.target).prop("checked"),
                        container = $(e.target).parent(),
                        siblings = container.siblings();

                    container.find('input[type="checkbox"]').prop({
                        indeterminate: false,
                        checked: checked
                    });

                    function checkSiblings(el) {
                        var parent = el.parent().parent(),
                            all = true;

                        el.siblings().each(function () {
                             all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
                            return all;
                        });

                        if (all && checked) {
                            parent.children('input[type="checkbox"]').prop({
                                indeterminate: false,
                                checked: checked
                            });
                            checkSiblings(parent);
                        } else if (all && !checked) {
                            parent.children('input[type="checkbox"]').prop("checked", checked);
                            parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
                            checkSiblings(parent);
                        } else {
                            el.parents("li").children('input[type="checkbox"]').prop({
                                indeterminate: true,
                                checked: false
                            });
                        }
                    }

                    checkSiblings(container);
                });
            }
        };
    });

(function() {
    var module = angular.module('jb.ui.widget', []);

    var ctrl = ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
        var self = this;
        var lst=[];
        $element.addClass('panel-group');
        this.add=function(wg){
            lst.push(wg);
            wg.$on('$destroy', function (event) {
                self.del(wg);
            });
        };
        this.del = function (wg) {
            var index = lst.indexOf(wg);
            if (index !== -1) {
                lst.splice(index, 1);
            }
        };

        this.closeOthers = function (openWg) {
            var multiple = $scope.$eval($attrs.jbWidgets);
            if (!multiple) {
                angular.forEach(lst, function (wg) {
                    if (wg !== openWg) {
                        wg.isHide=true;
                    }
                });
            }
        };
    }];
    module.directive('jbWidgets', function(){
        return {
            controller: ctrl
        };
    });

    module.directive('jbWidget', function(){
        return {
            restrict: 'EA',
            require: '^?jbWidgets',
            transclude: true,
            replace: true,
            templateUrl: 'jb/ui/widget/widget.tpl.html',
            scope: {
                title: '@',
                isHide: '=?',
                showFoot:'=',
                ctx: '=?jbCtx'
            },
            link: function (scope, element, attrs, ctrls) {
                var ctrl=ctrls;
                if(ctrl) {
                    ctrl.add(scope);
                    scope.$watch('isHide', function (value) {
                        if (!value) {
                            ctrl.closeOthers(scope);
                        }
                    });
                }
                scope.$toggle = function () {
                    scope.isHide = !scope.isHide;
                };
            }
        };
    });

})();
(function () {
    var module = angular.module('jb.ui');

    module.directive('jbSeleZd', ["$jbZd", function ($jbZd) {
        return {
            replace: true,
            scope: {
                jbSeleZd: '@'
            },
            templateUrl: 'jb/ui/zd/zd.tpl.html',
            link: function (scope, element, attrs) {
                $jbZd.get(scope.jbSeleZd).then(function (data) {
                    scope.$src = data;
                });
            }
        };
    }]);

    module.directive('jbZd', ["$jbZd", function ($jbZd) {
        return {
            scope: {
                jbZd: '@',
                jbZdDm: '='
            },
            template: function (elem, attrs) {
                return attrs.jbZdJc ? '{{zd.Jc}}' : '{{zd.Mc}}';
            },
            link: function (scope, element, attrs) {
                scope.$watch('jbZdDm', updateZd);

                function updateZd() {
                    if (scope.jbZdDm)
                        $jbZd.get(scope.jbZd).then(function (data) {
                            scope.zd = _.find(data, {'Dm': scope.jbZdDm});
                        });
                }
            }
        };
    }]);

})();
(function (ng) {
    "use strict";

    var module = ng.module('jb.ui.table');

    function tableCtr($scope) {

    }
    tableCtr.$inject = ["$scope"];

    module.directive('jbTable', ['$compile', '$q', '$parse',
        function($compile,$q,$parse) {
            return {
                scope:{},
                restrict: "A",
                controller: tableCtr,
                compile: function (tElement, tAttrs, transclude) {
                    var columns = [], i = 0, row = null;
                    angular.forEach(angular.element(tElement.find('tr')), function (tr) {
                        tr = angular.element(tr);
                        if (!tr.hasClass('jb-table-add') && !row) {
                            row = tr;
                        }
                    });
                    if (!row) {
                        return;
                    }
                    angular.forEach(row.find('td'), function (item) {
                        var el = angular.element(item);

                        var parsedAttribute = function (attr, defaultValue) {
                            return function (scope) {
                                return $parse(el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr))(scope, {
                                        $columns: columns
                                    }) || defaultValue;
                            };
                        };

                        var parsedTitle = parsedAttribute('title', ' ');

                        columns.push({
                            id: i++,
                            title: parsedTitle()
                        });
                    });

                    return function (scope, iElement, iAttrs) {
                        scope.$columns = columns;
                        scope.headerTpl = 'jb/ui/table/tableHeader.tpl.html';
                        var headerTemplate = angular.element(document.createElement('thead')).attr('ng-include', 'headerTpl');
                        iElement.addClass('jb-table')
                            .prepend(headerTemplate);

                        $compile(headerTemplate)(scope);
                    };
                }
            };
        }
    ]);


})(angular);

(function (ng) {
    var module = ng.module('jb.ui.table');
    var strFilterOpt={
        empty:'空',
        not_empty:'非空',
        contains: '包含',
        start:'开始为',
        end:'结束为',
        equal:'等于'
    };
    var strFilterCondition = {
        NONE: '无',
        AND: '与',
        OR: '或'
    };

    function tableCtr($scope, $element, $attrs, $filter, $parse, $timeout, $window,jb$) {
        var win = angular.element($window);
        var ctrl = this;
        var orderBy = $filter('orderBy');
        var filter = $filter('filter');
        var fmt=jb$.fmt;
        var $src = $scope.$src = copyRefs($scope.src);
        var cols = [];
        var filtered;
        var tableState = {
            sort: {},
            search: {},
            pagination: {
                start: 0
            }
        };

        function update$src() {
            $scope.$src = copyRefs($scope.meta.ctx.lst);
            ctrl.pipe();
            resize();
        }
        function copyRefs(src) {
            return src ? [].concat(src) : [];
        }

        function resize() {
            function _resize() {
                ng.forEach(cols, function (c) {
                    c.onResize();
                });
            }

            $timeout(_resize, 10, true);
        }

        $scope.$watchCollection("meta.ctx.lst", update$src);
        win.on('resize', resize);

        this.addCol = function (col) {
            cols.push(col);
            col.$on('$destroy', function (event) {
                ctrl.del(col);
            });
        };
        this.del = function (col) {
            var index = cols.indexOf(col);
            if (index !== -1) {
                cols.splice(index, 1);
            }
        };

        this.sortBy = function sortBy(predicate, reverse) {
            tableState.sort.predicate = predicate;
            tableState.sort.reverse = reverse === true;
            return this.pipe();
        };

        $scope.pager = function (p) {
            $scope.meta.filter.page = p;
            $scope.meta.ctx.refresh($scope.meta.filter);
        };
        this.filter = function () {
            var groups = [];
            ng.forEach($scope.meta.cols, function (c) {
                if (c.filter !== undefined) {
                    groups.push(c.filter);
                }
            });
            $scope.meta.filter.groups = groups;
            console.log($scope.meta.filter);
            $scope.meta.ctx.refresh($scope.meta.filter);
        };

        this.pipe = function pipe() {
            filtered = copyRefs($scope.meta.ctx.lst);
            if (tableState.sort.predicate) {
                filtered = orderBy(filtered, tableState.sort.predicate, tableState.sort.reverse);
            }
            $scope.$src = filtered;
        };

        this.bodyTr = function () {
            var tr = '<tr ng-repeat="$row in $src">';
            ng.forEach($scope.meta.cols, function (c) {
                tr+=buildTd(c);
            });
            tr += '</tr>';
            return tr;
        };


        $scope.$on('$destroy', function (event) {
            win.off('resize', resize);
        });

        function buildTd(c) {
            var td, tdAttr,
                tdBody = fmt('{{$row.{0}}}', c.field),
                td_fmt = '<td>{0}</td>',
                td_fmt_attr = '<td {0}>{1}</td>';

            if (c.celltpl) {
                tdBody = c.celltpl;
            }
            else if (c.field) {
                if (c.type === 'int') {
                    tdAttr = 'class="text-right text-middle"';
                }
                else if (c.type === 'date') {
                    tdBody = fmt('{{$row.{0}|date}}', c.field);
                }
                else if (c.type === 'jbzd') {
                    tdAttr = fmt('jb-zd="{0}" jb-zd-dm="$row.{1}"', c.jbzd, c.field);
                }
            }

            if (tdAttr) td = fmt(td_fmt_attr, tdAttr, tdBody);
            else td = fmt(td_fmt, tdBody);

            return td;
        }
    }
    tableCtr.$inject = ["$scope", "$element", "$attrs", "$filter", "$parse", "$timeout", "$window", "jb$"];

    module.directive('jbTable2',["$compile", "$q", "$parse", function($compile,$q,$parse) {
            return {
                replace: true,

                templateUrl: 'jb/ui/table/table.tpl.html',
                scope:{
                    meta:'=jbMeta'
                },
                controller: tableCtr,
                link: function (scope, element, attrs, ctrl) {

                }
            };
        }]
    );
    module.directive('jbTableTh', function () {
            return {
                require: '^jbTable2',
                link: function (scope, element, attrs, ctrl) {
                    ctrl.addCol(scope);
                    scope.onResize = function () {
                        scope.col.width = element[0].clientWidth;
                    };
                }
            };
        }
    );
    module.directive('jbTableCol', ["$compile", "$q", "$parse", "$jbFilter", function ($compile, $q, $parse, $jbFilter) {
            return {
                require: '^jbTable2',
                restrict: "C",
                replace: true,
                templateUrl: 'jb/ui/table/th.tpl.html',
                link: function (scope, element, attrs, ctrl) {
                    scope.$index = 0;
                    scope.pop = {
                        filterOpt: strFilterOpt,
                        filterCondition: strFilterCondition
                    };
                    scope.onTitle = function () {
                        if (scope.col.sort !== undefined) sort();
                    };
                    scope.onFilter = function () {
                        ctrl.filter();
                    };

                    if (scope.col.filter === true) {
                        scope.col.filter = $jbFilter.group2(null, scope.col.field);
                    }
                    function sort() {
                        scope.$index++;
                        ctrl.sortBy(scope.col.field, scope.$index % 2 === 0);
                    }
                }
            };
        }]
    );

    module.directive('jbTableBody', ["$compile", "$q", "$parse", function ($compile, $q, $parse) {
            return {
                require: '^jbTable2',
                link: function (scope, element, attrs, ctrl) {
                    var content = $compile(ctrl.bodyTr())(scope);
                    element.append(content);
                }
            };
        }]
    );
})(angular);

angular.module('jBreak', ['LocalStorageModule', 'ngLocale', 'jb',  'jb.auth', 'jb.ctx','jb.filter', 'jb.ui', 'jb.zd'])
    .config(["localStorageServiceProvider", function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('jBreak')
            .setNotify(true, true);
    }]);

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/alert/alert.tpl.html',
    '<div class="alert" ng-class="[type ? \'alert-\' + type : null,$placement]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/aside/aside.tpl.html',
    '<div class="modal" tabindex="-1" role="dialog"><div class="modal-backdrop"></div><div class="aside-dialog" ng-class="{\'modal-sm\': $size == \'sm\', \'modal-lg\': $size == \'lg\',\'left\':$placement==\'left\'}"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/checkList/checkList.tpl.html',
    '<label class="checkbox-inline" ng-repeat="s in jbSrc"><input type="checkbox" value="{{s}}" ng-checked="selection.indexOf(s) > -1" ng-click="toggleSelection(s)"> {{s}}</label> <label class="checkbox-inline" ng-show="jbOther"><input type="checkbox" ng-model="otherCk" ng-click="toggleOther()"> 其他</label> <label class="checkbox-inline" ng-show="jbOther"><input type="text" ng-model="otherVal" class="form-control input-sm"></label>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/datetime/datepicker.tpl.html',
    '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px;"><table style="table-layout: fixed; height: 100%; width: 100%;"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize;" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/datetime/timepicker.tpl.html',
    '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto;"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/dropdown/dropdown.tpl.html',
    '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/form/fg.tpl.html',
    '<div class="form-group form-group-sm"><label>{{lb}}</label> <input type="text" class="form-control" ng-model="ip"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/form/fgh.tpl.html',
    '<div class="form-group form-group-sm"><label class="control-label {{w0}}">{{lb}}</label><div class="{{w1}}" ng-transclude=""></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/form/fgh2.tpl.html',
    '<div class="form-group form-group-sm" jb-transclude=""><label class="control-label {{w0}}">{{lb[0]}}</label><div class="{{w1}}" jb-partial="input1"></div><label class="control-label {{w2}}">{{lb[1]}}</label><div class="{{w3}}" jb-partial="input2"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/inputGroupDropdownBtn/inputGroupDropdownBtn.tpl.html',
    '<div class="input-group-btn"><button class="btn btn-default" jb-dropdown-toggle=""><span class="caret"></span></button><ul class="dropdown-menu pull-right"><li ng-repeat="it in jbSrc"><a ng-click="update(it)">{{it}}</a></li></ul></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/modal/modal.tpl.html',
    '<div class="modal fade in" tabindex="-1" role="dialog"><div class="modal-backdrop"></div><div class="modal-dialog" ng-class="{\'modal-sm\': $size == \'sm\', \'modal-lg\': $size == \'lg\',\'center\':$placement==\'center\'}"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$ok()">确定</button> <button type="button" class="btn btn-default" ng-click="$hide()">取消</button></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/popover/popover.tpl.html',
    '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/radioList/radioList.tpl.html',
    '<label class="radio-inline" ng-repeat="s in jbSrc"><input type="radio" value="{{s}}" ng-checked="selection==s" ng-click="select(s)"> {{s}}</label> <label class="radio-inline" ng-show="jbOther"><input type="radio" ng-checked="selection==\'other\'" value="other" ng-click="select(\'other\')"> 其他</label> <label class="checkbox-inline" ng-show="jbOther"><input type="text" ng-model="otherVal" class="form-control input-sm"></label>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/select/select.tpl.html',
    '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default;" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/table.tpl.html',
    '<div class="panel panel-default jb-table"><div class="panel-heading"><div ng-repeat="col in meta.cols" class="jb-table-col"></div></div><div class="panel-collapse"><table class="table table-bordered table-hover table-condensed"><thead><tr><th ng-repeat="col in meta.cols" jb-table-th="" class="th">{{col.title}}</th></tr></thead><tbody jb-table-body=""></tbody><tfoot></tfoot></table></div><div class="panel-footer"><jb-pagination ng-if="meta.page" boundary-links="true" total-items="meta.ctx.total" page="meta.ctx.page" max-size="10" items-per-page="meta.filter.perPage" on-select-page="pager(page)" class="pagination-sm pull-right" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></jb-pagination></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/tableHeader.tpl.html',
    '<tr><th ng-repeat="c in $columns">{{c.title}}</th></tr>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/th-opt.tpl.html',
    '<ul tabindex="-1" class="dropdown-menu jb-th-opt" role="menu"><li role="presentation"><a role="menuitem" href="#"><span class="glyphicon glyphicon-sort-by-alphabet"></span> 升序(最低到最高)</a></li><li role="presentation"><a role="menuitem" href="#"><span class="glyphicon glyphicon-sort-by-alphabet-alt"></span> 降序(最高到最低)</a></li><li role="presentation"><a role="menuitem" href="#"><span class="glyphicon glyphicon-sort"></span> 不排序</a></li><li class="divider"></li><li ng-if="col.filter!==undefined"><div class="jb-th-opt-filter"><select class="form-control input-sm" ng-model="col.filter.Rules[0].Opt" ng-options="k as v for (k,v) in filterOpt"></select><input type="text" class="form-control input-sm" ng-model="col.filter.Rules[0].Val1"><div class="form-group-sm"><label class="radio-inline" ng-repeat="(k,v) in filterCondition"><input type="radio" value="{{k}}" ng-model="col.filter.Condition"> {{v}}</label></div><select class="form-control input-sm" ng-model="col.filter.Rules[1].Opt" ng-disabled="col.filter.Condition==\'NONE\'" ng-options="k as v for (k,v) in filterOpt"></select><input type="text" class="form-control input-sm" ng-model="col.filter.Rules[1].Val1" ng-disabled="col.filter.Condition==\'NONE\'"><div class="btn-group btn-group-sm pull-right"><button class="btn btn-primary" ng-click="onFilter()">过滤</button> <button class="btn btn-default">清除</button></div></div></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/th.tpl.html',
    '<div ng-style="{\'width\':col.width+\'px\'}"><span ng-click="onTitle()">{{col.title}}</span> <span class="jb-th-right"><span ng-if="col.sort!==undefined" class="glyphicon" ng-class="{\'glyphicon-triangle-bottom\':$index%2==1,\'glyphicon-triangle-top\':$index%2==0}"></span> <span ng-if="col.filter!==undefined" class="glyphicon glyphicon-filter"></span> <span class="glyphicon glyphicon-menu-down" jb-pop="pop" data-auto-close="false" data-placement="right-bottom" data-template="jb/ui/table/th-opt.tpl.html"></span></span></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tabs/tab.tpl.html',
    '<li ng-class="{active: active, disabled: disabled}"><a ng-click="select()" tab-heading-transclude="">{{heading}}</a></li>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tabs/tabset-titles.tpl.html',
    '<ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}"></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tabs/tabset.tpl.html',
    '<div class="tabbable" ng-class="{\'tabs-right\': direction == \'right\', \'tabs-left\': direction == \'left\', \'tabs-below\': direction == \'below\'}"><div tabset-titles="tabsAbove"></div><div class="tab-content"><div class="tab-pane" ng-repeat="tab in tabs" ng-class="{active: tab.active}" tab-content-transclude="tab"></div></div><div tabset-titles="!tabsAbove"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tooltip/tooltip.tpl.html',
    '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/widget/widget.tpl.html',
    '<div class="panel panel-default" jb-transclude=""><div class="panel-heading" jb-partial="heading"><div jb-partial="actions" class="btn-group btn-group-xs pull-right"><button class="btn btn-default" ng-click="$toggle()">X</button></div><div jb-partial="tools" class="pull-right" style="margin-right: 10px"></div><h4 class="panel-title" jb-partial="title">{{title}}</h4></div><div class="panel-collapse collapse" ng-class="{\'in\':!isHide}" jb-partial="body"><div class="panel-body" jb-partial="content"></div></div><div class="panel-footer" ng-if="showFoot"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/pager/pager.tpl.html',
    '<ul class="pager"><li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/pager/pagination.tpl.html',
    '<ul class="pagination"><li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul>');
}]);
})();

/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.2.2 - 2015-05-29
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function ( window, angular, undefined ) {
/*jshint globalstrict:true*/
'use strict';

var isDefined = angular.isDefined,
  isUndefined = angular.isUndefined,
  isNumber = angular.isNumber,
  isObject = angular.isObject,
  isArray = angular.isArray,
  extend = angular.extend,
  toJson = angular.toJson;
var angularLocalStorage = angular.module('LocalStorageModule', []);

angularLocalStorage.provider('localStorageService', function() {

  // You should set a prefix to avoid overwriting any local storage variables from the rest of your app
  // e.g. localStorageServiceProvider.setPrefix('yourAppName');
  // With provider you can use config as this:
  // myApp.config(function (localStorageServiceProvider) {
  //    localStorageServiceProvider.prefix = 'yourAppName';
  // });
  this.prefix = 'ls';

  // You could change web storage type localstorage or sessionStorage
  this.storageType = 'localStorage';

  // Cookie options (usually in case of fallback)
  // expiry = Number of days before cookies expire // 0 = Does not expire
  // path = The web path the cookie represents
  this.cookie = {
    expiry: 30,
    path: '/'
  };

  // Send signals for each of the following actions?
  this.notify = {
    setItem: true,
    removeItem: false
  };

  // Setter for the prefix
  this.setPrefix = function(prefix) {
    this.prefix = prefix;
    return this;
  };

   // Setter for the storageType
   this.setStorageType = function(storageType) {
     this.storageType = storageType;
     return this;
   };

  // Setter for cookie config
  this.setStorageCookie = function(exp, path) {
    this.cookie.expiry = exp;
    this.cookie.path = path;
    return this;
  };

  // Setter for cookie domain
  this.setStorageCookieDomain = function(domain) {
    this.cookie.domain = domain;
    return this;
  };

  // Setter for notification config
  // itemSet & itemRemove should be booleans
  this.setNotify = function(itemSet, itemRemove) {
    this.notify = {
      setItem: itemSet,
      removeItem: itemRemove
    };
    return this;
  };

  this.$get = ['$rootScope', '$window', '$document', '$parse', function($rootScope, $window, $document, $parse) {
    var self = this;
    var prefix = self.prefix;
    var cookie = self.cookie;
    var notify = self.notify;
    var storageType = self.storageType;
    var webStorage;

    // When Angular's $document is not available
    if (!$document) {
      $document = document;
    } else if ($document[0]) {
      $document = $document[0];
    }

    // If there is a prefix set in the config lets use that with an appended period for readability
    if (prefix.substr(-1) !== '.') {
      prefix = !!prefix ? prefix + '.' : '';
    }
    var deriveQualifiedKey = function(key) {
      return prefix + key;
    };
    // Checks the browser to see if local storage is supported
    var browserSupportsLocalStorage = (function () {
      try {
        var supported = (storageType in $window && $window[storageType] !== null);

        // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
        // is available, but trying to call .setItem throws an exception.
        //
        // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage
        // that exceeded the quota."
        var key = deriveQualifiedKey('__' + Math.round(Math.random() * 1e7));
        if (supported) {
          webStorage = $window[storageType];
          webStorage.setItem(key, '');
          webStorage.removeItem(key);
        }

        return supported;
      } catch (e) {
        storageType = 'cookie';
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
    }());

    // Directly adds a value to local storage
    // If local storage is not available in the browser use cookies
    // Example use: localStorageService.add('library','angular');
    var addToLocalStorage = function (key, value) {
      // Let's convert undefined values to null to get the value consistent
      if (isUndefined(value)) {
        value = null;
      } else {
        value = toJson(value);
      }

      // If this browser does not support local storage use cookies
      if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
        if (!browserSupportsLocalStorage) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        }

        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: 'cookie'});
        }
        return addToCookies(key, value);
      }

      try {
        if (webStorage) {webStorage.setItem(deriveQualifiedKey(key), value)};
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: self.storageType});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return addToCookies(key, value);
      }
      return true;
    };

    // Directly get a value from local storage
    // Example use: localStorageService.get('library'); // returns 'angular'
    var getFromLocalStorage = function (key) {

      if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
        if (!browserSupportsLocalStorage) {
          $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
        }

        return getFromCookies(key);
      }

      var item = webStorage ? webStorage.getItem(deriveQualifiedKey(key)) : null;
      // angular.toJson will convert null to 'null', so a proper conversion is needed
      // FIXME not a perfect solution, since a valid 'null' string can't be stored
      if (!item || item === 'null') {
        return null;
      }

      try {
        return JSON.parse(item);
      } catch (e) {
        return item;
      }
    };

    // Remove an item from local storage
    // Example use: localStorageService.remove('library'); // removes the key/value pair of library='angular'
    var removeFromLocalStorage = function () {
      var i, key;
      for (i=0; i<arguments.length; i++) {
        key = arguments[i];
        if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
          if (!browserSupportsLocalStorage) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
          }

          if (notify.removeItem) {
            $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key, storageType: 'cookie'});
          }
          removeFromCookies(key);
        }
        else {
          try {
            webStorage.removeItem(deriveQualifiedKey(key));
            if (notify.removeItem) {
              $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {
                key: key,
                storageType: self.storageType
              });
            }
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
            removeFromCookies(key);
          }
        }
      }
    };

    // Return array of keys for local storage
    // Example use: var keys = localStorageService.keys()
    var getKeysForLocalStorage = function () {

      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        return false;
      }

      var prefixLength = prefix.length;
      var keys = [];
      for (var key in webStorage) {
        // Only return keys that are for this app
        if (key.substr(0,prefixLength) === prefix) {
          try {
            keys.push(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
            return [];
          }
        }
      }
      return keys;
    };

    // Remove all data for this app from local storage
    // Also optionally takes a regular expression string and removes the matching key-value pairs
    // Example use: localStorageService.clearAll();
    // Should be used mostly for development purposes
    var clearAllFromLocalStorage = function (regularExpression) {

      // Setting both regular expressions independently
      // Empty strings result in catchall RegExp
      var prefixRegex = !!prefix ? new RegExp('^' + prefix) : new RegExp();
      var testRegex = !!regularExpression ? new RegExp(regularExpression) : new RegExp();

      if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
        if (!browserSupportsLocalStorage) {
          $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        }
        return clearAllFromCookies();
      }

      var prefixLength = prefix.length;

      for (var key in webStorage) {
        // Only remove items that are for this app and match the regular expression
        if (prefixRegex.test(key) && testRegex.test(key.substr(prefixLength))) {
          try {
            removeFromLocalStorage(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
            return clearAllFromCookies();
          }
        }
      }
      return true;
    };

    // Checks the browser to see if cookies are supported
    var browserSupportsCookies = (function() {
      try {
        return $window.navigator.cookieEnabled ||
          ("cookie" in $document && ($document.cookie.length > 0 ||
          ($document.cookie = "test").indexOf.call($document.cookie, "test") > -1));
      } catch (e) {
          $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
          return false;
      }
    }());

    // Directly adds a value to cookies
    // Typically used as a fallback is local storage is not available in the browser
    // Example use: localStorageService.cookie.add('library','angular');
    var addToCookies = function (key, value, daysToExpiry) {

      if (isUndefined(value)) {
        return false;
      } else if(isArray(value) || isObject(value)) {
        value = toJson(value);
      }

      if (!browserSupportsCookies) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      try {
        var expiry = '',
            expiryDate = new Date(),
            cookieDomain = '';

        if (value === null) {
          // Mark that the cookie has expired one day ago
          expiryDate.setTime(expiryDate.getTime() + (-1 * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
          value = '';
        } else if (isNumber(daysToExpiry) && daysToExpiry !== 0) {
          expiryDate.setTime(expiryDate.getTime() + (daysToExpiry * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
        } else if (cookie.expiry !== 0) {
          expiryDate.setTime(expiryDate.getTime() + (cookie.expiry * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
        }
        if (!!key) {
          var cookiePath = "; path=" + cookie.path;
          if(cookie.domain){
            cookieDomain = "; domain=" + cookie.domain;
          }
          $document.cookie = deriveQualifiedKey(key) + "=" + encodeURIComponent(value) + expiry + cookiePath + cookieDomain;
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
        return false;
      }
      return true;
    };

    // Directly get a value from a cookie
    // Example use: localStorageService.cookie.get('library'); // returns 'angular'
    var getFromCookies = function (key) {
      if (!browserSupportsCookies) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      var cookies = $document.cookie && $document.cookie.split(';') || [];
      for(var i=0; i < cookies.length; i++) {
        var thisCookie = cookies[i];
        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1,thisCookie.length);
        }
        if (thisCookie.indexOf(deriveQualifiedKey(key) + '=') === 0) {
          var storedValues = decodeURIComponent(thisCookie.substring(prefix.length + key.length + 1, thisCookie.length))
          try {
            return JSON.parse(storedValues);
          } catch(e) {
            return storedValues
          }
        }
      }
      return null;
    };

    var removeFromCookies = function (key) {
      addToCookies(key,null);
    };

    var clearAllFromCookies = function () {
      var thisCookie = null, thisKey = null;
      var prefixLength = prefix.length;
      var cookies = $document.cookie.split(';');
      for(var i = 0; i < cookies.length; i++) {
        thisCookie = cookies[i];

        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1, thisCookie.length);
        }

        var key = thisCookie.substring(prefixLength, thisCookie.indexOf('='));
        removeFromCookies(key);
      }
    };

    var getStorageType = function() {
      return storageType;
    };

    // Add a listener on scope variable to save its changes to local storage
    // Return a function which when called cancels binding
    var bindToScope = function(scope, key, def, lsKey) {
      lsKey = lsKey || key;
      var value = getFromLocalStorage(lsKey);

      if (value === null && isDefined(def)) {
        value = def;
      } else if (isObject(value) && isObject(def)) {
        value = extend(def, value);
      }

      $parse(key).assign(scope, value);

      return scope.$watch(key, function(newVal) {
        addToLocalStorage(lsKey, newVal);
      }, isObject(scope[key]));
    };

    // Return localStorageService.length
    // ignore keys that not owned
    var lengthOfLocalStorage = function() {
      var count = 0;
      var storage = $window[storageType];
      for(var i = 0; i < storage.length; i++) {
        if(storage.key(i).indexOf(prefix) === 0 ) {
          count++;
        }
      }
      return count;
    };

    return {
      isSupported: browserSupportsLocalStorage,
      getStorageType: getStorageType,
      set: addToLocalStorage,
      add: addToLocalStorage, //DEPRECATED
      get: getFromLocalStorage,
      keys: getKeysForLocalStorage,
      remove: removeFromLocalStorage,
      clearAll: clearAllFromLocalStorage,
      bind: bindToScope,
      deriveKey: deriveQualifiedKey,
      length: lengthOfLocalStorage,
      cookie: {
        isSupported: browserSupportsCookies,
        set: addToCookies,
        add: addToCookies, //DEPRECATED
        get: getFromCookies,
        remove: removeFromCookies,
        clearAll: clearAllFromCookies
      }
    };
  }];
});
})( window, window.angular );