(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-863a1ee8"],{"06cf":function(t,n,r){var e=r("83ab"),o=r("d1e7"),i=r("5c6c"),c=r("fc6a"),a=r("c04e"),u=r("5135"),f=r("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(r){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},"0cfb":function(t,n,r){var e=r("83ab"),o=r("d039"),i=r("cc12");t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"13aa":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo",style:{"background-image":`url(${t.globalData.fondoBannerPrincipal})`}}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?n("div",{staticClass:"banner-interno__titulo__icono me-3"},[n("i",{class:t.icono})]):t._e(),n("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},o=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},c=i,a=(r("4cfe"),r("2877")),u=Object(a["a"])(c,e,o,!1,null,null,null);n["default"]=u.exports},"13d5":function(t,n,r){"use strict";var e=r("23e7"),o=r("d58f").left,i=r("a640"),c=r("2d00"),a=r("605d"),u=i("reduce"),f=!a&&c>79&&c<83;e({target:"Array",proto:!0,forced:!u||f},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1c0b":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,n,r){var e=r("a691"),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},"23e7":function(t,n,r){var e=r("da84"),o=r("06cf").f,i=r("9112"),c=r("6eeb"),a=r("ce4e"),u=r("e893"),f=r("94ca");t.exports=function(t,n){var r,s,l,p,d,v,b=t.target,h=t.global,g=t.stat;if(s=h?e:g?e[b]||a(b,{}):(e[b]||{}).prototype,s)for(l in n){if(d=n[l],t.noTargetGet?(v=o(s,l),p=v&&v.value):p=s[l],r=f(h?l:b+(g?".":"#")+l,t.forced),!r&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),c(s,l,d,t)}}},"241c":function(t,n,r){var e=r("ca84"),o=r("7839"),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},"2d00":function(t,n,r){var e,o,i=r("da84"),c=r("342f"),a=i.process,u=a&&a.versions,f=u&&u.v8;f?(e=f.split("."),o=e[0]+e[1]):c&&(e=c.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/),e&&(o=e[1]))),t.exports=o&&+o},"342f":function(t,n,r){var e=r("d066");t.exports=e("navigator","userAgent")||""},"428f":function(t,n,r){var e=r("da84");t.exports=e},"44ad":function(t,n,r){var e=r("d039"),o=r("c6b6"),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"4c48":function(t,n,r){},"4cfe":function(t,n,r){"use strict";r("4c48")},"4d64":function(t,n,r){var e=r("fc6a"),o=r("50c4"),i=r("23cb"),c=function(t){return function(n,r,c){var a,u=e(n),f=o(u.length),s=i(c,f);if(t&&r!=r){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,n,r){var e=r("a691"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},5135:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},5692:function(t,n,r){var e=r("c430"),o=r("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,r){var e=r("d066"),o=r("241c"),i=r("7418"),c=r("825a");t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"605d":function(t,n,r){var e=r("c6b6"),o=r("da84");t.exports="process"==e(o.process)},"69a7":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"curso-main-container glosario"},[n("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(r){return n("div",{key:"letra-"+r.letra,staticClass:"glosario__letra-item mb-2"},[n("div",{staticClass:"glosario__letra-item__letra me-4"},[n("div",{staticClass:"glosario__letra-item__letra__icono"},[n("span",[t._v(t._s(r.letra))])])]),n("div",{staticClass:"glosario__letra-item__texto"},t._l(r.terminos,(function(r){return n("p",{staticClass:"mb-3"},[t._m(0,!0),n("strong",{domProps:{innerHTML:t._s(r.terminoHtml||r.termino)}}),n("strong",[t._v(": ")]),n("span",{domProps:{innerHTML:t._s(r.significado)}})])})),0)])})),0)],1)},o=[function(){var t=this,n=t._self._c;return n("strong",[n("i",{staticClass:"lista-ul__vineta"})])}],i=(r("13d5"),r("13aa")),c=r("ecc5"),a={name:"Glosario",components:{BannerInterno:i["default"]},mixins:[c["a"]],computed:{glosarioData(){return this.$config.glosario},orderedData(){const t=[...this.glosarioData];t.forEach(t=>{t.significado=t.significado.charAt(0).toLowerCase()+t.significado.slice(1)});const n=[...t].reduce((t,n)=>{const r=this.quitarAcentos(n.termino.toLowerCase())[0];return t[r]?t[r].terminos.push(n):t[r]={letra:r,terminos:[n]},t},{}),r=Object.keys(n).sort(),e=[];return r.forEach(t=>{const r=n[t];let o=r.terminos;if(o.length>1){const t=[],n=r.terminos.map(t=>t.termino).sort((t,n)=>{const r=this.quitarAcentos(t).toLowerCase(),e=this.quitarAcentos(n).toLowerCase();return r<e?-1:e<r?1:0});n.forEach(n=>{t.push(o.find(t=>t.termino===n))}),o=t}e.push({letra:r.letra.toUpperCase(),terminos:o})}),e}}},u=a,f=(r("b390"),r("2877")),s=Object(f["a"])(u,e,o,!1,null,null,null);n["default"]=s.exports},"69f3":function(t,n,r){var e,o,i,c=r("7f9a"),a=r("da84"),u=r("861d"),f=r("9112"),s=r("5135"),l=r("c6cd"),p=r("f772"),d=r("d012"),v=a.WeakMap,b=function(t){return i(t)?o(t):e(t,{})},h=function(t){return function(n){var r;if(!u(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}};if(c){var g=l.state||(l.state=new v),m=g.get,y=g.has,x=g.set;e=function(t,n){return n.facade=t,x.call(g,t,n),n},o=function(t){return m.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var _=p("state");d[_]=!0,e=function(t,n){return n.facade=t,f(t,_,n),n},o=function(t){return s(t,_)?t[_]:{}},i=function(t){return s(t,_)}}t.exports={set:e,get:o,has:i,enforce:b,getterFor:h}},"6eeb":function(t,n,r){var e=r("da84"),o=r("9112"),i=r("5135"),c=r("ce4e"),a=r("8925"),u=r("69f3"),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,n,r,a){var u,f=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),u=s(r),u.source||(u.source=l.join("string"==typeof n?n:""))),t!==e?(f?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,r){var e=r("1d80");t.exports=function(t){return Object(e(t))}},"7f9a":function(t,n,r){var e=r("da84"),o=r("8925"),i=e.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,n,r){var e=r("861d");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,r){var e=r("d039");t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,n,r){var e=r("c6cd"),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},"90e3":function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},9112:function(t,n,r){var e=r("83ab"),o=r("9bf2"),i=r("5c6c");t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},"94ca":function(t,n,r){var e=r("d039"),o=/#|\.prototype\./,i=function(t,n){var r=a[c(t)];return r==f||r!=u&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"9bf2":function(t,n,r){var e=r("83ab"),o=r("0cfb"),i=r("825a"),c=r("c04e"),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return a(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},a640:function(t,n,r){"use strict";var e=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},a691:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},b390:function(t,n,r){"use strict";r("cb80")},c04e:function(t,n,r){var e=r("861d");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},c6cd:function(t,n,r){var e=r("da84"),o=r("ce4e"),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},ca84:function(t,n,r){var e=r("5135"),o=r("fc6a"),i=r("4d64").indexOf,c=r("d012");t.exports=function(t,n){var r,a=o(t),u=0,f=[];for(r in a)!e(c,r)&&e(a,r)&&f.push(r);while(n.length>u)e(a,r=n[u++])&&(~i(f,r)||f.push(r));return f}},cb80:function(t,n,r){},cc12:function(t,n,r){var e=r("da84"),o=r("861d"),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ce4e:function(t,n,r){var e=r("da84"),o=r("9112");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,r){var e=r("428f"),o=r("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},d58f:function(t,n,r){var e=r("1c0b"),o=r("7b0b"),i=r("44ad"),c=r("50c4"),a=function(t){return function(n,r,a,u){e(r);var f=o(n),s=i(f),l=c(f.length),p=t?l-1:0,d=t?-1:1;if(a<2)while(1){if(p in s){u=s[p],p+=d;break}if(p+=d,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=d)p in s&&(u=r(u,s[p],p,f));return u}};t.exports={left:a(!1),right:a(!0)}},da84:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r("c8ba"))},e893:function(t,n,r){var e=r("5135"),o=r("56ef"),i=r("06cf"),c=r("9bf2");t.exports=function(t,n){for(var r=o(n),a=c.f,u=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||a(t,s,u(n,s))}}},f772:function(t,n,r){var e=r("5692"),o=r("90e3"),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fc6a:function(t,n,r){var e=r("44ad"),o=r("1d80");t.exports=function(t){return e(o(t))}}}]);
//# sourceMappingURL=glosario.a03dfe97.js.map