!function(e){function a(a){for(var n,c,s=a[0],o=a[1],i=a[2],m=0,f=[];m<s.length;m++)c=s[m],r[c]&&f.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(a);f.length;)f.shift()();return l.push.apply(l,i||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],n=!0,s=1;s<t.length;s++){var o=t[s];0!==r[o]&&(n=!1)}n&&(l.splice(a--,1),e=c(c.s=t[0]))}return e}var n={},r={5:0},l=[];function c(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(t,n,function(a){return e[a]}.bind(null,n));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=a,s=s.slice();for(var i=0;i<s.length;i++)a(s[i]);var u=o;l.push(["./src/views/common/battle_royale/PlayerVehicleStatus/PlayerVehicleStatus.tsx",0]),t()}({"./src/views/common/battle_royale/PlayerVehicleStatus/PlayerVehicleStatus.css":function(e,a,t){e.exports={base:"PlayerVehicleStatus_base_ec",reason:"PlayerVehicleStatus_reason_08",reasonText:"PlayerVehicleStatus_reasonText_20",nickname:"PlayerVehicleStatus_nickname_02",nickname__clanTag:"PlayerVehicleStatus_nickname__clanTag_e9",killerNickname:"PlayerVehicleStatus_killerNickname_ca",killerClanTag:"PlayerVehicleStatus_killerClanTag_64"}},"./src/views/common/battle_royale/PlayerVehicleStatus/PlayerVehicleStatus.tsx":function(e,a,t){"use strict";t.r(a),t.d(a,"PlayerVehicleStatus",(function(){return s}));var n=t("./node_modules/@wotfe/react/index.js"),r=t.n(n),l=t("./src/views/common/battle_royale/PlayerVehicleStatus/PlayerVehicleStatus.css"),c=t.n(l);const s=r.a.memo(({user:e,reason:a,killer:t})=>{const n=e.clanAbbrev?`[${e.clanAbbrev}]`:null,l=t.userName?t.userName:null,s=t.clanAbbrev?`[${t.clanAbbrev}]`:null;return r.a.createElement("div",{className:c.a.base},r.a.createElement("div",{className:c.a.nickname},r.a.createElement("span",null,e.userName),n&&r.a.createElement("span",{className:c.a.nickname__clanTag},n)),r.a.createElement("div",{className:c.a.reason},r.a.createElement("span",{className:c.a.reasonText},a),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:c.a.killerNickname},l),s&&r.a.createElement("span",{className:c.a.killerClanTag},s))))})}});