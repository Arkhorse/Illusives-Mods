!function(e){function t(t){for(var r,n,g=t[0],h=t[1],s=t[2],m=0,u=[];m<g.length;m++)n=g[m],i[n]&&u.push(i[n][0]),i[n]=0;for(r in h)Object.prototype.hasOwnProperty.call(h,r)&&(e[r]=h[r]);for(d&&d(t);u.length;)u.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,g=1;g<a.length;g++){var h=a[g];0!==i[h]&&(r=!1)}r&&(l.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},i={17:0},l=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var g=window.webpackJsonp=window.webpackJsonp||[],h=g.push.bind(g);g.push=t,g=g.slice();for(var s=0;s<g.length;s++)t(g[s]);var d=h;l.push(["./src/views/lobby/battle_pass/sharedComponents/Header/Header.tsx",0]),a()}({"./src/components/MediaQuery/index.ts":function(e,t,a){"use strict";var r=a("./node_modules/@wotfe/react/index.js"),i=a.n(r);const l=(e,t,a)=>t.extraLargeHeight||t.largeHeight||t.mediumHeight||t.smallHeight||t.extraSmallHeight?t.extraLargeHeight&&a.extraLarge?e:t.largeHeight&&a.large?e:t.mediumHeight&&a.medium?e:t.smallHeight&&a.small?e:t.extraSmallHeight&&a.extraSmall?e:null:e,n={extraLarge:{weight:4,width:2200,height:1200},large:{weight:3,width:1920,height:1080},medium:{weight:2,width:1600,height:900},small:{weight:1,width:1366,height:768},extraSmall:{weight:0,width:1024,height:768}};var g;function h(e,t,a){const r=function(e,t){switch(!0){case e>=t.extraLarge.width:return t.extraLarge.weight;case e>=t.large.width&&e<t.extraLarge.width:return t.large.weight;case e>=t.medium.width&&e<t.large.width:return t.medium.weight;case e>=t.small.width&&e<t.medium.width:return t.small.weight;default:return t.extraSmall.weight}}(e,a),i=function(e,t){switch(!0){case e>=t.extraLarge.height:return t.extraLarge.weight;case e>=t.large.height&&e<t.extraLarge.height:return t.large.weight;case e>=t.medium.height&&e<t.large.height:return t.medium.weight;case e>=t.small.height&&e<t.medium.height:return t.small.weight;default:return t.extraSmall.weight}}(t,a),l=Math.min(r,i);return{extraLarge:l===a.extraLarge.weight,large:l===a.large.weight,medium:l===a.medium.weight,small:l===a.small.weight,extraSmall:l===a.extraSmall.weight,extraLargeWidth:r===a.extraLarge.weight,largeWidth:r===a.large.weight,mediumWidth:r===a.medium.weight,smallWidth:r===a.small.weight,extraSmallWidth:r===a.extraSmall.weight,extraLargeHeight:i===a.extraLarge.weight,largeHeight:i===a.large.weight,mediumHeight:i===a.medium.weight,smallHeight:i===a.small.weight,extraSmallHeight:i===a.extraSmall.weight}}!function(e){e.extraLarge="extraLarge",e.large="large",e.medium="medium",e.small="small",e.extraSmall="extraSmall",e.extraLargeWidth="extraLargeWidth",e.largeWidth="largeWidth",e.mediumWidth="mediumWidth",e.smallWidth="smallWidth",e.extraSmallWidth="extraSmallWidth",e.extraLargeHeight="extraLargeHeight",e.largeHeight="largeHeight",e.mediumHeight="mediumHeight",e.smallHeight="smallHeight",e.extraSmallHeight="extraSmallHeight"}(g||(g={}));const s=viewEnv.pxToRem(viewEnv.getClientWidth()),d=viewEnv.pxToRem(viewEnv.getClientHeight()),m=Object.assign({width:s,height:d},h(s,d,n)),u=Object(r.createContext)(m);const o=e=>{let t=e.children,a=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children"]);const i=Object(r.useContext)(u),n=i.extraLarge,g=i.large,h=i.medium,s=i.small,d=i.extraSmall,m=i.extraLargeWidth,o=i.largeWidth,c=i.mediumWidth,x=i.smallWidth,f=i.extraSmallWidth,w=i.extraLargeHeight,H=i.largeHeight,b=i.mediumHeight,p=i.smallHeight,v=i.extraSmallHeight,S={extraLarge:w,large:H,medium:b,small:p,extraSmall:v};if(a.extraLarge||a.large||a.medium||a.small||a.extraSmall){if(a.extraLarge&&n)return t;if(a.large&&g)return t;if(a.medium&&h)return t;if(a.small&&s)return t;if(a.extraSmall&&d)return t}else{if(a.extraLargeWidth&&m)return l(t,a,S);if(a.largeWidth&&o)return l(t,a,S);if(a.mediumWidth&&c)return l(t,a,S);if(a.smallWidth&&x)return l(t,a,S);if(a.extraSmallWidth&&f)return l(t,a,S);if(!(a.extraLargeWidth||a.largeWidth||a.mediumWidth||a.smallWidth||a.extraSmallWidth)){if(a.extraLargeHeight&&w)return t;if(a.largeHeight&&H)return t;if(a.mediumHeight&&b)return t;if(a.smallHeight&&p)return t;if(a.extraSmallHeight&&v)return t}}return null};o.defaultProps={extraLarge:!1,large:!1,medium:!1,small:!1,extraSmall:!1,extraLargeWidth:!1,largeWidth:!1,mediumWidth:!1,smallWidth:!1,extraSmallWidth:!1,extraLargeHeight:!1,largeHeight:!1,mediumHeight:!1,smallHeight:!1,extraSmallHeight:!1};const c=Object(r.memo)(o),x=Object(r.memo)(({children:e})=>{const t=Object(r.useContext)(u),a=Object(r.useState)(t),l=a[0],g=a[1],s=Object(r.useCallback)((e,t)=>{const a=viewEnv.pxToRem(e),r=viewEnv.pxToRem(t);g(Object.assign({width:a,height:r},h(a,r,n)))},[]);Object(r.useEffect)(()=>(engine.on("clientResized",s),()=>engine.off("clientResized",s)),[s]);const d=Object(r.useMemo)(()=>Object.assign({},l),[l]);return i.a.createElement(u.Provider,{value:d},e)});a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return x})),a.d(t,"a",(function(){return u}))},"./src/views/lobby/battle_pass/sharedComponents/Header/Header.css":function(e,t,a){e.exports={base:"Header_base_a0",title:"Header_title_09",slideUp:"Header_slideUp_83",base__big:"Header_base__big_4e",status:"Header_status_74",fadeOut:"Header_fadeOut_bf",fadeIn:"Header_fadeIn_cd",fadeInWithScale:"Header_fadeInWithScale_2b",scale:"Header_scale_a1"}},"./src/views/lobby/battle_pass/sharedComponents/Header/Header.tsx":function(e,t,a){"use strict";a.r(t),a.d(t,"Header",(function(){return d}));var r=a("./node_modules/@wotfe/react/index.js"),i=a.n(r),l=a("./node_modules/classnames/index.js"),n=a.n(l),g=a("./src/components/MediaQuery/index.ts"),h=a("./src/views/lobby/battle_pass/sharedComponents/Header/Header.css"),s=a.n(h);const d=({title:e,status:t})=>{const a=Object(r.useContext)(g.a),l=a.medium||a.large||a.extraLarge,h=n()(s.a.base,l&&s.a.base__big);return i.a.createElement("div",{className:h},i.a.createElement("div",{className:s.a.title},e),i.a.createElement("div",{className:s.a.status},t))}}});