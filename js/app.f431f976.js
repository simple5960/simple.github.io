(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"45a4":function(e,t,n){},c8c5:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(n)}n("da96");var c=n("6b0d"),a=n.n(c);const u={},i=a()(u,[["render",o]]);var l=i,s=n("6c02"),p={class:"home"},f={class:"grid"},d=["data-id","onMousedown","onMouseup"];function v(e,t,n,o,c,a){return Object(r["p"])(),Object(r["e"])("div",p,[Object(r["f"])("section",f,[(Object(r["p"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(e.divNum,(function(t,n){return Object(r["p"])(),Object(r["e"])("div",{key:n,"data-id":t,class:Object(r["l"])("box".concat(n)),onMousedown:function(t){return e.placeChild(n,"s")},onMouseup:function(t){return e.placeChild(n,"e")}},Object(r["y"])(t),43,d)})),128))])])}n("a434");for(var b=30,O=[],j=0;j<b;j++)O.push("App".concat(j+1));var h=5,m=6,y=Object(r["g"])({name:"Home",components:{},setup:function(){var e=Object(r["u"])(O),t=5,n={},o=0,c=30,a=function(r,a){if(n["".concat(a,"row")]=Math.ceil(r/t),n["".concat(a,"col")]=r-(n["".concat(a,"row")]-1)*t,"s"===a)o=r;else if(c=r,c<o){var u=e.value[o];e.value.splice(o,1),e.value.splice(c,1,u,e.value[c])}else if(c>o){if(c-o===1){var i=[e.value[c],e.value[o]];e.value[o]=i[0],e.value[c]=i[1]}var l=e.value[c];e.value.splice(c,1,e.value[o],l),e.value.splice(o,1)}};return{divNum:e,templateRow:m,templateColumn:h,startIdx:o,endIdx:c,placeChild:a}}});n("d9aa");const w=a()(y,[["render",v],["__scopeId","data-v-24197d57"]]);var g=w,x=[{path:"/",name:"Home",component:g}],M=Object(s["a"])({history:Object(s["b"])("/"),routes:x}),_=M,P=n("5502"),S=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(l).use(S).use(_).mount("#app")},d9aa:function(e,t,n){"use strict";n("c8c5")},da96:function(e,t,n){"use strict";n("45a4")}});
//# sourceMappingURL=app.f431f976.js.map