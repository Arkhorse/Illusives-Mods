!function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],d=0,_=[];d<o.length;d++)s=o[d],r[s]&&_.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);_.length;)_.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={62:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push(["./src/views/lobby/new_year/ExtraSlotLevelUpView/ExtraSlotLevelUpView.tsx",0]),n()}({"./src/components/Button/CButton.css":function(e,t,n){e.exports={base:"CButton_base_40",base__main:"CButton_base__main_42",base__primary:"CButton_base__primary_7f",base__primaryGreen:"CButton_base__primaryGreen_6f",base__primaryRed:"CButton_base__primaryRed_ec",base__secondary:"CButton_base__secondary_50",base__ghost:"CButton_base__ghost_ed",base__extraSmall:"CButton_base__extraSmall_27",base__small:"CButton_base__small_df",base__medium:"CButton_base__medium_74",base__disabled:"CButton_base__disabled_d9",back:"CButton_back_e5",texture:"CButton_texture_fe",state:"CButton_state_11",base__focus:"CButton_base__focus_83",stateHighlightHover:"CButton_stateHighlightHover_ff",stateHighlightActive:"CButton_stateHighlightActive_35",stateDisabled:"CButton_stateDisabled_54",content:"CButton_content_cc"}},"./src/components/Button/CButton.tsx":function(e,t,n){"use strict";n.d(t,"c",(function(){return _}));var a=n("./node_modules/@wotfe/react/index.js"),r=n.n(a),i=n("./node_modules/classnames/index.js"),s=n.n(i),o=n("./src/lib/sound.js"),l=n("./src/components/Button/types.ts");n.d(t,"b",(function(){return l.b})),n.d(t,"a",(function(){return l.a}));var c=n("./src/components/Button/CButton.css"),u=n.n(c);const d=({children:e,size:t,isFocused:n,type:i,disabled:c,mixClass:d,soundHover:_,soundClick:h,lang:m,onMouseEnter:v,onMouseDown:g,onMouseUp:p,onMouseLeave:b,onClick:f})=>{const w=Object(a.useRef)(null),y=Object(a.useState)(n),x=y[0],E=y[1],O=Object(a.useCallback)(()=>{c||w.current&&(w.current.focus(),E(!0))},[c]),L=Object(a.useCallback)(e=>{x&&null!==w.current&&!w.current.contains(e.target)&&E(!1)},[x]),k=Object(a.useCallback)(e=>{c||f&&f(e)},[c,f]),T=Object(a.useCallback)(e=>{c||(null!==_&&Object(o.b)(_),v&&v(e))},[c,_,v]),C=Object(a.useCallback)(e=>{c||p&&p(e)},[c,p]),j=Object(a.useCallback)(e=>{c||(null!==h&&Object(o.b)(h),g&&g(e),n&&O())},[c,h,g,O,n]),M=Object(a.useCallback)(e=>{c||b&&b(e)},[c,b]),R=s()(u.a.base,u.a[`base__${i}`],{[u.a.base__disabled]:c,[u.a[`base__${t}`]]:t,[u.a.base__focus]:x},d),S=s()(u.a.state,u.a.state__default);return Object(a.useEffect)(()=>(document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}),[L]),Object(a.useEffect)(()=>{E(n)},[n]),r.a.createElement("div",{ref:w,className:R,onMouseEnter:T,onMouseUp:C,onMouseDown:j,onMouseLeave:M,onClick:k},i!==l.b.ghost&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.back}),r.a.createElement("span",{className:u.a.texture})),r.a.createElement("span",{className:S},r.a.createElement("span",{className:u.a.stateHighlightHover}),r.a.createElement("span",{className:u.a.stateHighlightActive}),r.a.createElement("span",{className:u.a.stateDisabled})),r.a.createElement("span",{className:u.a.content,lang:m},e))};d.defaultProps={type:l.b.primary,isFocused:!1,soundHover:"highlight",soundClick:"play"};const _=Object(a.memo)(d)},"./src/components/Button/types.ts":function(e,t,n){"use strict";let a,r;n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),function(e){e.main="main",e.primary="primary",e.primaryGreen="primaryGreen",e.primaryRed="primaryRed",e.secondary="secondary",e.ghost="ghost"}(a||(a={})),function(e){e.extraSmall="extraSmall",e.small="small",e.medium="medium"}(r||(r={}))},"./src/components/FormatText/FormatText.css":function(e,t,n){e.exports={base:"FormatText_base_d0"}},"./src/components/FormatText/FormatText.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("./node_modules/@wotfe/react/index.js"),r=n.n(a),i=n("./node_modules/classnames/index.js"),s=n.n(i),o=n("./src/components/FormatText/FormatText.css"),l=n.n(o);const c=({binding:e,text:t,classMix:n})=>{const a=t.split(/%\((.*?)\)/g).map(t=>t in e?e[t]:t.split(" ").map((e,t,n)=>n.length-1===t?e:e+" ")),i=s()(l.a.base,n);return r.a.createElement("div",{className:i},a.map((e,t)=>r.a.createElement(r.a.Fragment,{key:`${t}-${e}`},e)))};c.defaultProps={binding:{},text:""}},"./src/components/MediaQuery/index.ts":function(e,t,n){"use strict";var a=n("./node_modules/@wotfe/react/index.js"),r=n.n(a);const i=(e,t,n)=>t.extraLargeHeight||t.largeHeight||t.mediumHeight||t.smallHeight||t.extraSmallHeight?t.extraLargeHeight&&n.extraLarge?e:t.largeHeight&&n.large?e:t.mediumHeight&&n.medium?e:t.smallHeight&&n.small?e:t.extraSmallHeight&&n.extraSmall?e:null:e,s={extraLarge:{weight:4,width:2200,height:1200},large:{weight:3,width:1920,height:1080},medium:{weight:2,width:1600,height:900},small:{weight:1,width:1366,height:768},extraSmall:{weight:0,width:1024,height:768}};var o;function l(e,t,n){const a=function(e,t){switch(!0){case e>=t.extraLarge.width:return t.extraLarge.weight;case e>=t.large.width&&e<t.extraLarge.width:return t.large.weight;case e>=t.medium.width&&e<t.large.width:return t.medium.weight;case e>=t.small.width&&e<t.medium.width:return t.small.weight;default:return t.extraSmall.weight}}(e,n),r=function(e,t){switch(!0){case e>=t.extraLarge.height:return t.extraLarge.weight;case e>=t.large.height&&e<t.extraLarge.height:return t.large.weight;case e>=t.medium.height&&e<t.large.height:return t.medium.weight;case e>=t.small.height&&e<t.medium.height:return t.small.weight;default:return t.extraSmall.weight}}(t,n),i=Math.min(a,r);return{extraLarge:i===n.extraLarge.weight,large:i===n.large.weight,medium:i===n.medium.weight,small:i===n.small.weight,extraSmall:i===n.extraSmall.weight,extraLargeWidth:a===n.extraLarge.weight,largeWidth:a===n.large.weight,mediumWidth:a===n.medium.weight,smallWidth:a===n.small.weight,extraSmallWidth:a===n.extraSmall.weight,extraLargeHeight:r===n.extraLarge.weight,largeHeight:r===n.large.weight,mediumHeight:r===n.medium.weight,smallHeight:r===n.small.weight,extraSmallHeight:r===n.extraSmall.weight}}!function(e){e.extraLarge="extraLarge",e.large="large",e.medium="medium",e.small="small",e.extraSmall="extraSmall",e.extraLargeWidth="extraLargeWidth",e.largeWidth="largeWidth",e.mediumWidth="mediumWidth",e.smallWidth="smallWidth",e.extraSmallWidth="extraSmallWidth",e.extraLargeHeight="extraLargeHeight",e.largeHeight="largeHeight",e.mediumHeight="mediumHeight",e.smallHeight="smallHeight",e.extraSmallHeight="extraSmallHeight"}(o||(o={}));const c=viewEnv.pxToRem(viewEnv.getClientWidth()),u=viewEnv.pxToRem(viewEnv.getClientHeight()),d=Object.assign({width:c,height:u},l(c,u,s)),_=Object(a.createContext)(d);const h=e=>{let t=e.children,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children"]);const r=Object(a.useContext)(_),s=r.extraLarge,o=r.large,l=r.medium,c=r.small,u=r.extraSmall,d=r.extraLargeWidth,h=r.largeWidth,m=r.mediumWidth,v=r.smallWidth,g=r.extraSmallWidth,p=r.extraLargeHeight,b=r.largeHeight,f=r.mediumHeight,w=r.smallHeight,y=r.extraSmallHeight,x={extraLarge:p,large:b,medium:f,small:w,extraSmall:y};if(n.extraLarge||n.large||n.medium||n.small||n.extraSmall){if(n.extraLarge&&s)return t;if(n.large&&o)return t;if(n.medium&&l)return t;if(n.small&&c)return t;if(n.extraSmall&&u)return t}else{if(n.extraLargeWidth&&d)return i(t,n,x);if(n.largeWidth&&h)return i(t,n,x);if(n.mediumWidth&&m)return i(t,n,x);if(n.smallWidth&&v)return i(t,n,x);if(n.extraSmallWidth&&g)return i(t,n,x);if(!(n.extraLargeWidth||n.largeWidth||n.mediumWidth||n.smallWidth||n.extraSmallWidth)){if(n.extraLargeHeight&&p)return t;if(n.largeHeight&&b)return t;if(n.mediumHeight&&f)return t;if(n.smallHeight&&w)return t;if(n.extraSmallHeight&&y)return t}}return null};h.defaultProps={extraLarge:!1,large:!1,medium:!1,small:!1,extraSmall:!1,extraLargeWidth:!1,largeWidth:!1,mediumWidth:!1,smallWidth:!1,extraSmallWidth:!1,extraLargeHeight:!1,largeHeight:!1,mediumHeight:!1,smallHeight:!1,extraSmallHeight:!1};const m=Object(a.memo)(h),v=Object(a.memo)(({children:e})=>{const t=Object(a.useContext)(_),n=Object(a.useState)(t),i=n[0],o=n[1],c=Object(a.useCallback)((e,t)=>{const n=viewEnv.pxToRem(e),a=viewEnv.pxToRem(t);o(Object.assign({width:n,height:a},l(n,a,s)))},[]);Object(a.useEffect)(()=>(engine.on("clientResized",c),()=>engine.off("clientResized",c)),[c]);const u=Object(a.useMemo)(()=>Object.assign({},i),[i]);return r.a.createElement(_.Provider,{value:u},e)});n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return _}))},"./src/components/TextButton/TextButton.css":function(e,t,n){e.exports={base:"TextButton_base_b6",base__right:"TextButton_base__right_39",icon:"TextButton_icon_17",icon__back:"TextButton_icon__back_43",icon__forward:"TextButton_icon__forward_59",icon__close:"TextButton_icon__close_53",icon__info:"TextButton_icon__info_33",glow:"TextButton_glow_a4",caption:"TextButton_caption_82",caption__back:"TextButton_caption__back_b9",caption__forward:"TextButton_caption__forward_4e",caption__close:"TextButton_caption__close_36",caption__info:"TextButton_caption__info_23",goto:"TextButton_goto_e7",base__left:"TextButton_base__left_ff",shine:"TextButton_shine_e2"}},"./src/components/TextButton/TextButton.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("./node_modules/@wotfe/react/index.js"),r=n.n(a),i=n("./node_modules/classnames/index.js"),s=n.n(i),o=n("./src/lib/sound.js"),l=n("./src/components/TextButton/TextButton.css"),c=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class d extends r.a.PureComponent{constructor(...e){super(...e),this.state={hover:!1,click:!1},this._onMouseEnter=e=>t=>{e&&e(t),this.setState({hover:!0}),this.props.soundHover&&Object(o.b)(this.props.soundHover)},this._onMouseLeave=e=>t=>{e&&e(t),this.setState({hover:!1,click:!1})},this._onMouseDown=e=>t=>{e&&e(t),this.setState({click:!0}),this.props.soundClick&&Object(o.b)(this.props.soundClick)},this._onMouseUp=e=>t=>{e&&e(t),this.setState({click:!1})},this.handleFocus=()=>this.setState({focus:!0}),this.handleBlur=()=>this.setState({focus:!1})}render(){const e=this.props,t=e.caption,n=e.onClick,a=e.goto,i=e.side,o=e.type,l=e.onMouseEnter,d=e.onMouseLeave,_=e.onMouseDown,h=e.onMouseUp,m=(e.soundClick,e.soundHover,function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["caption","onClick","goto","side","type","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","soundClick","soundHover"])),v=s()(c.a.base,c.a[`base__${o}`],c.a[`base__${i}`]),g=s()(c.a.icon,c.a[`icon__${o}`],c.a[`icon__${i}`]),p=s()(c.a.caption,c.a[`caption__${o}`]);return r.a.createElement("div",u({className:v,onMouseEnter:this._onMouseEnter(l),onMouseLeave:this._onMouseLeave(d),onMouseDown:this._onMouseDown(_),onMouseUp:this._onMouseUp(h),onFocus:this.handleFocus,onBlur:this.handleBlur,onClick:n},m),"info"!==o&&r.a.createElement("div",{className:c.a.shine}),r.a.createElement("div",{className:g},r.a.createElement("div",{className:c.a.glow})),r.a.createElement("div",{className:p},t),a&&r.a.createElement("div",{className:c.a.goto},a))}}d.defaultProps={side:"left",type:"back",soundHover:"highlight",soundClick:"play"}},"./src/lib/cohtml.js":function(e,t,n){(function(t){!function(n){e.exports?t.engine._WindowLoaded||(e.exports=n(t,t.engine,!1)):window.engine._WindowLoaded||(engine=n(this,window.engine,!0))}((function(e,t,n){"use strict";var a=[1,5,0,8];function r(){this.events={}}function i(e,t){this.code=e,this.context=t}r.prototype._createClear=function(e,n,a){return function(){var r=e.events[n];if(r){var i=-1;if(void 0===a){for(var s=0;s<r.length;++s)if(void 0!==r[s].wasInCPP){i=s;break}}else i=r.indexOf(a);-1!=i&&(r.splice(i,1),0===r.length&&delete e.events[n])}else void 0!==t.RemoveOnHandler&&t.RemoveOnHandler(n)}},r.prototype.on=function(e,t,n){var a=this.events[e];void 0===a&&(a=this.events[e]=[]);var r=new i(t,n||this);return a.push(r),{clear:this._createClear(this,e,r)}},r.prototype.off=function(e,n,a){var r=this.events[e];if(void 0!==r){var i;a=a||this;var s=r.length;for(i=0;i<s;++i){var o=r[i];if(o.code==n&&o.context==a)break}i<s&&(r.splice(i,1),0===r.length&&delete this.events[e])}else t.RemoveOnHandler(e)};var s=void 0!==t;(t=t||{}).isAttached=s,t.onEventsReplayed=null,r.prototype.trigger=function(e){var t=this.events[e];if(void 0!==t){var n=Array.prototype.slice.call(arguments,1);t.forEach((function(e){e.code.apply(e.context,n)}))}},r.prototype.merge=function(e){var t,n=this.events,a=e.events,r=Array.prototype.push;for(var i in a)t=n[i]=n[i]||[],r.apply(t,a[i])};for(var o in t.isAttached||(r.prototype.on=function(e,t,n){var a=this.events[e];this.browserCallbackOn&&this.browserCallbackOn(e,t,n),void 0===a&&(a=this.events[e]=[]);var r=new i(t,n||this);return a.push(r),{clear:this._createClear(this,e,r)}},r.prototype.off=function(e,t,n){var a=this.events[e];if(void 0!==a){var r;n=n||this;var i=a.length;for(r=0;r<i;++r){var s=a[r];if(s.code==t&&s.context==n)break}r<i&&(a.splice(r,1),0===a.length&&(delete this.events[e],this.browserCallbackOff&&this.browserCallbackOff(e,t,n)))}},t.SendMessage=function(e,n){var a=Array.prototype.slice.call(arguments,2),r=t._ActiveRequests[n];delete t._ActiveRequests[n];var i=function(){var n=t._mocks[e];void 0!==n&&r.resolve(n.apply(t,a))};window.setTimeout(i,16)},t.TriggerEvent=function(){var e=Array.prototype.slice.call(arguments),n=function(){var n=t._mocks[e[0]];void 0!==n&&n.apply(t,e.slice(1))};window.setTimeout(n,16)},t.BindingsReady=function(){t._OnReady()},t.__observeLifetime=function(){},t.beginEventRecording=t.endEventRecording=t.saveEventRecord=function(){console.warn("Event recording will not work in the browser!")},t._mocks={},t._mockImpl=function(e,t,n,a){t&&(this._mocks[e]=t);var r=t.toString().replace("function "+t.name+"(",""),i=r.indexOf(")"),s=r.substr(0,i);this.browserCallbackMock&&this.browserCallbackMock(e,s,n,Boolean(a))},t.mock=function(e,t,n){this._mockImpl(e,t,!0,n)}),t.events={},r.prototype)t[o]=r.prototype[o];t.isAttached&&(t.on=function(e,n,a){var r=this.events[e];if(void 0===r&&void 0!==t.AddOrRemoveOnHandler){var s=t.AddOrRemoveOnHandler(e,n,a||t);if(void 0===s)return{clear:this._createClear(this,e,void 0)};r=this.events[e]=[];var o=new i(s[0],s[1]||this);o.wasInCPP=!0,r.push(o)}else void 0===r&&(r=this.events[e]=[]);var l=new i(n,a||this);return r.push(l),{clear:this._createClear(this,e,l)}}),t.whenReady=new Promise(e=>{t.on("Ready",e)}),t._trigger=r.prototype.trigger;var l=Array.prototype.concat;return t.trigger=function(e){if(this._trigger.apply(this,arguments),this.TriggerEvent.apply(this,arguments),void 0!==this.events.all){var t=l.apply(["all"],arguments);this._trigger.apply(this,t)}},t.showOverlay=function(){},t.hideOverlay=function(){},t.isAttached&&(t.mock=function(e,t,n){}),t._BindingsReady=!1,t._WindowLoaded=!1,t._RequestId=0,t._ActiveRequests={},void 0!==e.engineCreateDeferred&&console.warn("engineCreateDeferred is depricated"),t.call=function(){t._RequestId++;var e=t._RequestId,n=Array.prototype.slice.call(arguments);n.splice(1,0,e);var a=new Promise((function(a,r){t._ActiveRequests[e]={resolve:a,reject:r},t.SendMessage.apply(t,n)}));return a},t._Result=function(e){var n=t._ActiveRequests[e];if(void 0!==n){delete t._ActiveRequests[e];var a=Array.prototype.slice.call(arguments);a.shift(),n.resolve.apply(n,a)}},t._Errors=["Success","ArgumentType","NoSuchMethod","NoResult"],t._ForEachError=function(e,t){for(var n=e.length,a=0;a<n;++a)t(e[a].first,e[a].second)},t._TriggerError=function(e){t.trigger("Error",e)},t._OnError=function(e,n){if(null===e||0===e)t._ForEachError(n,t._TriggerError);else{var a=t._ActiveRequests[e];delete t._ActiveRequests[e],a.reject(new Error(n[0].second))}if(n.length)throw new Error(n[0].second)},t._eventHandles={},t._Register=function(e){var n=function(e,t){return function(){var n=[e];n.push.apply(n,arguments),t.TriggerEvent.apply(this,n)}}(e,t);t._eventHandles[e]=t.on(e,n)},t._removeEventThunk=function(e){t._eventHandles[e].clear(),delete t._eventHandles[e]},t._Unregister=function(e){"string"==typeof e?t._removeEventThunk(e):e.forEach(t._removeEventThunk,t)},t._boundTypes={},t._createInstance=function(e){var n=e[0],a=e[1],r=e[2],i=t._boundTypes[n];void 0===i&&((i=function(e){this._id=e}).prototype.__Type=n,r.forEach((function(e){i.prototype[e]=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.splice(0,0,e,this._id),t.call.apply(t,n)}}(n+"_"+e)})),t._boundTypes[n]=i);var s=new i(a);return t.__observeLifetime(s),s},t._OnReady=function(){t._BindingsReady=!0,t._WindowLoaded&&t.trigger("Ready")},t._OnWindowLoaded=function(){t._WindowLoaded=!0,t._BindingsReady&&t.trigger("Ready")},t._ThrowError=function(e){var t=e.name+": "+e.message+"\n"+e.stack.split("\n").map((function(e){return"\t"+e})).join("\n");console.error(t)},n?e.addEventListener("load",(function(){t._OnWindowLoaded()})):t._WindowLoaded=!0,t.on("_Result",t._Result,t),t.on("_Register",t._Register,t),t.on("_Unregister",t._Unregister,t),t.on("_OnReady",t._OnReady,t),t.on("_OnError",t._OnError,t),t.on("__OnReplayRecordCompleted",(function(e){t.onEventsReplayed&&t.onEventsReplayed()})),t.BindingsReady(a[0],a[1],a[2],a[3]),t}))}).call(this,n("./node_modules/webpack/buildin/global.js"))},"./src/lib/createLayoutReadyInEffect.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>{let t,n=null;return n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{n=null,t=e()})}),()=>{"function"==typeof t&&t(),null!==n&&cancelAnimationFrame(n)}}},"./src/lib/get-from-callstack.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=(e=1)=>{const t=(new Error).stack;let n,a=R.invalid("resId");return t&&(n=t.split("\n")[e].split(".js")[0].split("/").pop()||"",window.__feature&&window.__feature!==n&&window.children[n]&&(a=window.children[n].id)),{caller:n,stack:t,resId:a}}},"./src/lib/getValueByPath.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=(e,t)=>e.split(".").reduce((e,t)=>e&&e[t],t)},"./src/lib/hooks/useKeydownListener.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("./node_modules/@wotfe/react/index.js"),r=n("./src/lib/keycodes.ts");const i=e=>{console.error(e+": useKeydownListener hook :: Callback is not defined")},s=(e=r.a.ESCAPE,t=i,n=!1)=>{const s=Object(a.useCallback)(a=>{a.keyCode===e&&(t(a),n&&a.stopPropagation())},[t,e,n]);Object(a.useEffect)(()=>(window.addEventListener("keydown",s,n),()=>{window.removeEventListener("keydown",s,n)}),[s,n])}},"./src/lib/hooks/useModel.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("./node_modules/@wotfe/react/index.js"),r=n("./src/lib/view-env-helper/index.ts"),i=n("./src/lib/get-from-callstack.ts"),s=n("./src/lib/getValueByPath.ts");const o=r.a.instance,l=(e="model",t=!0)=>{const n=Object(a.useState)(0),r=(n[0],n[1]),l=Object(a.useMemo)(()=>Object(i.a)(),[]),c=l.caller,u=l.resId,d=Object(a.useMemo)(()=>window.__feature&&window.__feature!==c?`children.${c}.${e}`:e,[c,e]),_=Object(a.useMemo)(()=>(e=>{const t=Object(s.a)(e,window);for(const e in t)"function"==typeof t[e]&&(t[e]=t[e].bind(t));return t})(d),[d]);return Object(a.useEffect)(()=>{if(t){const t=()=>{r(e=>e+1)},n=o.addCallback(e,t,u);return()=>o.removeCallback(n,u)}},[e,t,u]),_}},"./src/lib/keycodes.ts":function(e,t,n){"use strict";let a;n.d(t,"a",(function(){return a})),function(e){e[e.ALT=164]="ALT",e[e.ENTER=13]="ENTER",e[e.ESCAPE=27]="ESCAPE",e[e.SPACE=32]="SPACE",e[e.END=35]="END",e[e.HOME=36]="HOME",e[e.ARROW_LEFT=37]="ARROW_LEFT",e[e.ARROW_UP=38]="ARROW_UP",e[e.ARROW_RIGHT=39]="ARROW_RIGHT",e[e.ARROW_DOWN=40]="ARROW_DOWN",e[e.NUM_PLUS=107]="NUM_PLUS",e[e.NUM_MINUS=109]="NUM_MINUS",e[e.PAGE_UP=33]="PAGE_UP",e[e.PAGE_DOWN=34]="PAGE_DOWN",e[e.BACKSPACE=8]="BACKSPACE",e[e.DELETE=46]="DELETE",e[e.TAB=9]="TAB"}(a||(a={}))},"./src/lib/sound.js":function(e,t,n){"use strict";function a(e){engine.call("PlaySound",e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));const r={playHighlight(){a("highlight")},playClick(){a("play")},playYes(){a("yes1")}}},"./src/lib/view-env-helper/DataTracker.ts":function(e,t,n){"use strict";class a{constructor(){this._callbacks=void 0,this._updateHandler=void 0,this._views=void 0,this.clearViewCallbacks=e=>{this._views[e]&&(this._views[e].forEach(e=>{delete this._callbacks[e]}),delete this._views[e])},this._callbacks={},this._views={},this._updateHandler=void 0}static get instance(){return window.__dataTracker||(window.__dataTracker=new a),window.__dataTracker}clear(){void 0!==this._updateHandler&&(this._updateHandler.clear(),this._updateHandler=void 0),this._callbacks={}}addCallback(e,t,n=0){void 0===this._updateHandler&&(this._updateHandler=engine.on("viewEnv.onDataChanged",this._emmitDataChanged,this));const a=viewEnv.addDataChangedCallback(e,n);return a>0&&(this._callbacks[a]=t,n>0&&(this._views[n]?this._views[n].push(a):this._views[n]=[a])),a}removeCallback(e,t=0){let n=!1;return void 0!==e&&void 0!==this._callbacks[e]&&(n=viewEnv.removeDataChangedCallback(e,t),delete this._callbacks[e]),n}_emmitDataChanged(e,t,n){n.forEach(n=>{const a=this._callbacks[n];void 0!==a&&a(e,t)})}}a.__instance=void 0,t.a=a},"./src/lib/view-env-helper/ViewModel.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _DataTracker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/view-env-helper/DataTracker.ts"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/view-env-helper/index.ts");class ViewModel{constructor(path,watchingFields=[]){this.dataTracker=void 0,this.modelPath=void 0,this.callbacks=void 0,this.data=void 0,this._notifyObservers=()=>{this.data=eval(this.modelPath),this.callbacks.forEach(e=>{e(this.data)})},this.dataTracker=new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.a,this.modelPath=path,this.callbacks=new Set,Object(_index__WEBPACK_IMPORTED_MODULE_1__.m)().then(()=>{this._addCallback(path),watchingFields.forEach(e=>{this._addCallback(path+"."+e)}),this._notifyObservers()})}subscribe(e){this.callbacks.add(e),null!==this.data&&void 0!==this.data&&e(this.data)}unsubscribe(e){this.callbacks.delete(e)}destroy(){this.dataTracker.clear(),this.callbacks.clear()}_addCallback(e){this.dataTracker.addCallback(e,this._notifyObservers)}}__webpack_exports__.a=ViewModel},"./src/lib/view-env-helper/index.ts":function(e,t,n){"use strict";var a=n("./src/lib/view-env-helper/DataTracker.ts"),r=n("./src/lib/view-env-helper/ViewModel.ts");class i{constructor(){this.entries=[],this._listenMouse=!1,this.onMouseDown=e=>{this.entries.forEach(({container:t,callback:n})=>{let a=e.target;do{if(a===t)return;a=a.parentNode}while(a);n()})}}static get instance(){return i.__instance||(i.__instance=new i),i.__instance}register(e,t){this.addMouseListener(),this.entries.push({container:e,callback:t})}unregister(e,t){const n=e,a=t;this.entries=this.entries.filter(({container:e,callback:t})=>e!==n||t!==a),this.removeMouseListener()}addMouseListener(){this._listenMouse||(document.addEventListener("mousedown",this.onMouseDown),this._listenMouse=!0)}removeMouseListener(){this._listenMouse&&0===this.entries.length&&(document.removeEventListener("mousedown",this.onMouseDown),this._listenMouse=!1)}}i.__instance=void 0;var s=i,o=n("./src/lib/view-env-helper/types.ts"),l=n("./src/lib/view-env-helper/view-events.ts");const c={getNumberFormat:(e,t)=>systemLocale.getNumberFormat(e,t),getRealFormat:(e,t)=>systemLocale.getRealFormat(e,t),getTimeFormat:(e,t)=>systemLocale.getTimeFormat(e,t),getDateFormat:(e,t)=>systemLocale.getDateFormat(e,t)},u={getNumberFormat:e=>userLocale.getNumberFormat(e),getTimeFormat:(e,t,n)=>userLocale.getTimeFormat(e,t,void 0===n||n),getTimeString:(e,t,n)=>userLocale.getTimeString(e,t,void 0===n||n)};function d(e){const t={};if("object"!=typeof e)return e;for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const a=Object.prototype.toString.call(e[n]);if(a.startsWith("[object CoherentArrayProxy]")){const a=e[n];t[n]=[];for(let e=0;e<a.length;e++)t[n].push({value:d(a[e].value)})}else a.startsWith("[object class BW::WULF::ViewModel")?t[n]=d(e[n]):t[n]=e[n]}return t}n.d(t,"a",(function(){return a.a})),n.d(t,"g",(function(){return o.e})),n.d(t,"c",(function(){return o.b})),n.d(t,"d",(function(){return o.c})),n.d(t,"f",(function(){return o.d})),n.d(t,"b",(function(){return o.a})),n.d(t,"o",(function(){return l.j})),n.d(t,"p",(function(){return l.k})),n.d(t,"q",(function(){return l.n})),n.d(t,"h",(function(){return l.a})),n.d(t,"k",(function(){return l.b})),n.d(t,"m",(function(){return l.g})),n.d(t,"n",(function(){return l.h})),n.d(t,"l",(function(){return l.d})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return c}));const _=s.instance,h={DataTracker:a.a,ViewModel:r.a,ViewEventType:o.e,NumberFormatType:o.b,RealFormatType:o.c,TimeFormatType:o.d,DateFormatType:o.a,makeGlobalBoundingBox:l.f,sendMoveEvent:l.l,sendCloseEvent:l.j,sendClosePopOverEvent:l.k,sendShowContextMenuEvent:l.m,sendShowPopOverEvent:l.n,addEscapeListener:l.a,handleViewEvent:l.b,onBindingsReady:l.g,onLayoutReady:l.h,onWindowLoaded:l.i,isTooltipShown:l.e,isContextMenuShown:l.c,isPopOverShown:l.d,dumpViewModel:d,ClickOutsideManager:_,SystemLocale:c,UserLocale:u};window.ViewEnvHelper=h;t.i=h},"./src/lib/view-env-helper/types.ts":function(e,t,n){"use strict";let a;n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),function(e){e[e.UNDEFINED=0]="UNDEFINED",e[e.TOOLTIP=1]="TOOLTIP",e[e.POP_OVER=2]="POP_OVER",e[e.CONTEXT_MENU=4]="CONTEXT_MENU",e[e.DROP_DOWN=8]="DROP_DOWN",e[e.MOVE=16]="MOVE",e[e.CLOSE=32]="CLOSE"}(a||(a={}));const r=Object.freeze({INTEGRAL:0,GOLD:1}),i=Object.freeze({FRACTIONAL:0,WO_ZERO_DIGITS:1}),s=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1}),o=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1,YEAR_MONTH:2})},"./src/lib/view-env-helper/view-events.ts":function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return h})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return f}));var a=n("./src/lib/view-env-helper/types.ts");function r(e,t,n,a,r,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}const i=e=>({__Type:"GFBoundingBox",x:e.x,y:e.y,width:e.width,height:e.height}),s=function(){var e,t=(e=function*(){return!(!engine._BindingsReady||!engine._WindowLoaded)||new Promise(e=>{engine.on("Ready",e)})},function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function o(e){r(s,a,i,o,l,"next",e)}function l(e){r(s,a,i,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),o=()=>new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e()})})}),l=()=>new Promise(e=>{engine.on("windowLoaded",e)}),c=e=>Object.entries(e).map(([e,t])=>{const n={__Type:"GFValueProxy",name:e};switch(typeof t){case"number":n.number=t;break;case"boolean":n.bool=t;break;default:case"string":n.string=t.toString()}return n}),u=(e,t)=>{const n="GFViewEventProxy";if(void 0!==t){const a=t.args,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["args"]);void 0!==a?viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},r,{arguments:c(a)})):viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},r))}else viewEnv.handleViewEvent({__Type:n,type:e})},d=e=>u(a.e.MOVE,{isMouseEvent:!0,on:e}),_=()=>u(a.e.CLOSE),h=()=>u(a.e.POP_OVER,{on:!1}),m=(e,t,n=0)=>{u(a.e.CONTEXT_MENU,{isMouseEvent:!0,contentID:e,on:!0,decoratorID:n,args:t})},v=(e,t,n,r,s)=>{const o=viewEnv.getViewGlobalPosition(),l=n.getBoundingClientRect(),c=l.x,d=l.y,_=l.width,h=l.height,m={x:viewEnv.pxToRem(c+o.x),y:viewEnv.pxToRem(d+o.y),width:viewEnv.pxToRem(_),height:viewEnv.pxToRem(h)};u(a.e.POP_OVER,{isMouseEvent:!0,contentID:e,decoratorID:r,direction:t,bbox:i(m),on:!0,args:s})},g=()=>viewEnv.isWindowShownByViewEvent(a.e.TOOLTIP),p=()=>viewEnv.isWindowShownByViewEvent(a.e.CONTEXT_MENU),b=()=>viewEnv.isWindowShownByViewEvent(a.e.POP_OVER),f=e=>window.addEventListener("keydown",(function(t){27===t.keyCode&&e()}))},"./src/views/lobby/new_year/ExtraSlotLevelUpView/ExtraSlotLevelUpView.tsx":function(e,t,n){"use strict";n.r(t);n("./src/lib/cohtml.js");var a=n("./node_modules/@wotfe/react/index.js"),r=n.n(a),i=n("./node_modules/@wotfe/react-dom/index.js"),s=n.n(i),o=n("./src/components/MediaQuery/index.ts"),l=n("./node_modules/classnames/index.js"),c=n.n(l),u=n("./src/lib/view-env-helper/index.ts"),d=n("./src/lib/hooks/useModel.ts"),_=n("./src/lib/hooks/useKeydownListener.ts"),h=n("./src/lib/keycodes.ts"),m=n("./src/components/TextButton/TextButton.tsx"),v=n("./src/views/lobby/new_year/helpers.ts"),g=n("./src/components/FormatText/FormatText.tsx"),p=n("./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Heading/Heading.css"),b=n.n(p);const f=Object(a.memo)(({minLevel:e,maxLevel:t})=>{const n=Object(v.c)(),i=Object(a.useMemo)(()=>({from:r.a.createElement("span",null,Object(v.a)()?e:Object(v.b)(e)),to:r.a.createElement("span",null,Object(v.a)()?t:Object(v.b)(t))}),[t,e]),s=c()(b.a.base,b.a[`base__${n}`]);return r.a.createElement("div",{className:s},r.a.createElement(g.a,{text:R.strings.ny.extraSlot.upgrade.title(),binding:i,classMix:b.a.heading}))});var w=n("./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Illustration/Illustration.css"),y=n.n(w);const x=Object(a.memo)(({maxLevel:e})=>{const t=Object(v.c)(),n=c()(y.a.base,y.a[`base__${t}`],Object(v.a)()&&y.a.base__arabicImg),a=c()(y.a.level,y.a[`level__${e}`]);return r.a.createElement("div",{className:n},r.a.createElement("div",{className:a}),r.a.createElement("div",{className:y.a.arrow}),r.a.createElement("div",{className:y.a.slot}))});var E=n("./src/components/Button/CButton.tsx"),O=n("./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Footer/Footer.css"),L=n.n(O);const k=Object(a.memo)(({minLevel:e})=>{const t=Object(v.c)(),n=Object(a.useMemo)(()=>({from:r.a.createElement("span",null,Object(v.a)()?e:Object(v.b)(e))}),[e]),i=Object(a.useCallback)(()=>Object(u.o)(),[]),s=c()(L.a.base,L.a[`base__${t}`]);return r.a.createElement("div",{className:s},r.a.createElement(g.a,{text:R.strings.ny.extraSlot.upgrade.description(),binding:n,classMix:L.a.description}),r.a.createElement("div",{className:L.a.separator}),r.a.createElement("div",{className:L.a.submit},r.a.createElement(E.c,{type:"primary",size:"medium",onClick:i},R.strings.ny.extraSlot.upgrade.submit())))});var T=n("./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Main/Main.css"),C=n.n(T);const j=Object(a.memo)(({minLevel:e,maxLevel:t})=>{const n=Object(v.c)(),a=c()(C.a.base,C.a[`base__${n}`]);return r.a.createElement("div",{className:a},r.a.createElement("div",{className:C.a.heading},r.a.createElement(f,{minLevel:e,maxLevel:t})),r.a.createElement("div",{className:C.a.illustration},r.a.createElement(x,{maxLevel:t})),r.a.createElement("div",{className:C.a.footer},r.a.createElement(k,{minLevel:e})))});var M=n("./src/views/lobby/new_year/ExtraSlotLevelUpView/components/App/App.css"),S=n.n(M);const A=()=>{const e=Object(d.a)("model"),t=e.minLevel,n=e.maxLevel,i=Object(a.useCallback)(()=>Object(u.o)(),[]),s=Object(v.c)(),o=c()(S.a.base,S.a[`base__${s}`]);return Object(_.a)(h.a.ESCAPE,i),r.a.createElement("div",{className:o},r.a.createElement("div",{className:S.a.close},r.a.createElement(m.a,{side:"right",type:"close",onClick:i,caption:R.strings.ny.newYear.lootBoxAutoOpen.closeBtnLabel()})),r.a.createElement(j,{minLevel:t,maxLevel:n}))};engine.whenReady.then(()=>{s.a.render(r.a.createElement(o.b,null,r.a.createElement(A,null)),document.getElementById("root"))})},"./src/views/lobby/new_year/ExtraSlotLevelUpView/components/App/App.css":function(e,t,n){e.exports={base:"App_base_1a",close:"App_close_5d",close__large:"App_close__large_aa",close__extraLarge:"App_close__extraLarge_1e",levelList:"App_levelList_e3",level:"App_level_e1"}},"./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Footer/Footer.css":function(e,t,n){e.exports={base:"Footer_base_85",description:"Footer_description_f8",description__large:"Footer_description__large_71",description__extraLarge:"Footer_description__extraLarge_c0",separator:"Footer_separator_1a",submit:"Footer_submit_2e"}},"./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Heading/Heading.css":function(e,t,n){e.exports={base:"Heading_base_98",base__large:"Heading_base__large_7f",base__extraLarge:"Heading_base__extraLarge_18"}},"./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Illustration/Illustration.css":function(e,t,n){e.exports={base:"Illustration_base_86",level:"Illustration_level_db",level__1:"Illustration_level__1_55",level__2:"Illustration_level__2_6d",level__3:"Illustration_level__3_8c",level__4:"Illustration_level__4_99",level__5:"Illustration_level__5_b3",level__6:"Illustration_level__6_3a",level__7:"Illustration_level__7_63",level__8:"Illustration_level__8_a3",level__9:"Illustration_level__9_ab",level__10:"Illustration_level__10_7d",base__arabicImg:"Illustration_base__arabicImg_08",arrow:"Illustration_arrow_bf",slot:"Illustration_slot_73"}},"./src/views/lobby/new_year/ExtraSlotLevelUpView/components/Main/Main.css":function(e,t,n){e.exports={base:"Main_base_b6",slideInFadeIn:"Main_slideInFadeIn_67",heading:"Main_heading_cd",base__large:"Main_base__large_b3",base__extraLarge:"Main_base__extraLarge_0c",illustration:"Main_illustration_62",illustration__large:"Main_illustration__large_e3",illustration__extraLarge:"Main_illustration__extraLarge_bc"}},"./src/views/lobby/new_year/helpers.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return _})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return g}));var a=n("./node_modules/@wotfe/react/index.js"),r=n("./src/lib/createLayoutReadyInEffect.ts"),i=n("./src/lib/hooks/useModel.ts"),s=n("./src/lib/view-env-helper/index.ts"),o=n("./src/components/MediaQuery/index.ts"),l=n("./src/views/lobby/new_year/types.ts");const c=["ko","no"],u=R.strings.settings.LANGUAGE_CODE(),d=()=>{return(e=>e.extraLarge?l.a.ExtraLarge:e.large?l.a.Large:e.medium?l.a.Medium:e.small?l.a.Small:l.a.ExtraSmall)(Object(a.useContext)(o.a))},_=e=>{const t=Object(a.useState)(!1),n=t[0],i=t[1];return Object(a.useEffect)(()=>(i(!1),Object(r.a)(()=>{i(!0)})),[e]),n},h=(e,t)=>{const n=t.split("."),a=n[0];if(!e||"object"!=typeof e)return console.warn(`Reference "${JSON.stringify(e,null,2)}" is not a valid object.`),!1;if(!a)return console.warn(`Invalid key "${a}" in path ${t}.`),!1;if(!(a in e))return console.warn(`Key "${a}" was not found in reference "${JSON.stringify(e,null,2)}".`),!1;const r=n.slice(1);return 0===r.length||h(e[a],r.join("."))},m=(e,t=!0)=>{if(!h(window,e))throw Error(`Path "${e}" does not exist.`);const n=Object(i.a)(e,t);return"object"==typeof n&&null!==n?Object(s.j)(n):(t&&console.warn(`Tracking of primitive value ${String(n)} in ${e} is not supported.`),n)},v=e=>{return["","I","II","III","IV","V","VI","VII","VIII","IX","X"][e]||""},g=()=>c.includes(u)},"./src/views/lobby/new_year/types.ts":function(e,t,n){"use strict";let a,r;n.d(t,"a",(function(){return a})),function(e){e.ExtraSmall="extraSmall",e.Small="small",e.Medium="medium",e.Large="large",e.ExtraLarge="extraLarge"}(a||(a={})),function(e){e.Ru="RU",e.Eu="EU",e.Na="NA",e.Asia="ASIA",e.Cn="CN",e.Kr="KR",e.Ct="CT",e.St="ST",e.QA="QA",e.Dev="DEV",e.Sb="SB"}(r||(r={}))}});