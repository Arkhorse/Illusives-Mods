!function(e){function t(t){for(var n,s,u=t[0],c=t[1],i=t[2],m=0,f=[];m<u.length;m++)s=u[m],a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={93:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;o.push(["./src/views/lobby/tanksetup/common/ExtraImage/ExtraImage.tsx",0]),r()}({"./src/views/lobby/tanksetup/common/ExtraImage/ExtraImage.css":function(e,t,r){e.exports={base:"ExtraImage_base_78",base__medium:"ExtraImage_base__medium_07",base__big:"ExtraImage_base__big_86"}},"./src/views/lobby/tanksetup/common/ExtraImage/ExtraImage.tsx":function(e,t,r){"use strict";r.r(t),r.d(t,"ExtraImageTypes",(function(){return i})),r.d(t,"ExtraImage",(function(){return l}));var n=r("./node_modules/@wotfe/react/index.js"),a=r.n(n),o=r("./node_modules/classnames/index.js"),s=r.n(o),u=r("./src/views/lobby/tanksetup/common/ExtraImage/ExtraImage.css"),c=r.n(u);let i;!function(e){e.SMALL="small",e.MEDIUM="medium",e.BIG="big"}(i||(i={}));const l=({type:e=i.SMALL,imageSource:t})=>{const r=s()(c.a.base,e!==i.SMALL&&c.a[`base__${e}`]),o=Object(n.useMemo)(()=>({backgroundImage:`url(${t})`}),[t]);return a.a.createElement("div",{className:r,style:o})}}});