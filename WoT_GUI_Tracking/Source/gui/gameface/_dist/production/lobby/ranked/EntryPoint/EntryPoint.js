!function(e){function t(t){for(var r,s,a=t[0],c=t[1],l=t[2],u=0,_=[];u<a.length;u++)s=a[u],i[s]&&_.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);_.length;)_.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={79:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;o.push(["./src/views/lobby/ranked/EntryPoint/EntryPoint.tsx",0]),n()}({"./src/lib/cohtml.js":function(e,t,n){(function(t){!function(n){e.exports?t.engine._WindowLoaded||(e.exports=n(t,t.engine,!1)):window.engine._WindowLoaded||(engine=n(this,window.engine,!0))}((function(e,t,n){"use strict";var r=[1,5,0,8];function i(){this.events={}}function o(e,t){this.code=e,this.context=t}i.prototype._createClear=function(e,n,r){return function(){var i=e.events[n];if(i){var o=-1;if(void 0===r){for(var s=0;s<i.length;++s)if(void 0!==i[s].wasInCPP){o=s;break}}else o=i.indexOf(r);-1!=o&&(i.splice(o,1),0===i.length&&delete e.events[n])}else void 0!==t.RemoveOnHandler&&t.RemoveOnHandler(n)}},i.prototype.on=function(e,t,n){var r=this.events[e];void 0===r&&(r=this.events[e]=[]);var i=new o(t,n||this);return r.push(i),{clear:this._createClear(this,e,i)}},i.prototype.off=function(e,n,r){var i=this.events[e];if(void 0!==i){var o;r=r||this;var s=i.length;for(o=0;o<s;++o){var a=i[o];if(a.code==n&&a.context==r)break}o<s&&(i.splice(o,1),0===i.length&&delete this.events[e])}else t.RemoveOnHandler(e)};var s=void 0!==t;(t=t||{}).isAttached=s,t.onEventsReplayed=null,i.prototype.trigger=function(e){var t=this.events[e];if(void 0!==t){var n=Array.prototype.slice.call(arguments,1);t.forEach((function(e){e.code.apply(e.context,n)}))}},i.prototype.merge=function(e){var t,n=this.events,r=e.events,i=Array.prototype.push;for(var o in r)t=n[o]=n[o]||[],i.apply(t,r[o])};for(var a in t.isAttached||(i.prototype.on=function(e,t,n){var r=this.events[e];this.browserCallbackOn&&this.browserCallbackOn(e,t,n),void 0===r&&(r=this.events[e]=[]);var i=new o(t,n||this);return r.push(i),{clear:this._createClear(this,e,i)}},i.prototype.off=function(e,t,n){var r=this.events[e];if(void 0!==r){var i;n=n||this;var o=r.length;for(i=0;i<o;++i){var s=r[i];if(s.code==t&&s.context==n)break}i<o&&(r.splice(i,1),0===r.length&&(delete this.events[e],this.browserCallbackOff&&this.browserCallbackOff(e,t,n)))}},t.SendMessage=function(e,n){var r=Array.prototype.slice.call(arguments,2),i=t._ActiveRequests[n];delete t._ActiveRequests[n];var o=function(){var n=t._mocks[e];void 0!==n&&i.resolve(n.apply(t,r))};window.setTimeout(o,16)},t.TriggerEvent=function(){var e=Array.prototype.slice.call(arguments),n=function(){var n=t._mocks[e[0]];void 0!==n&&n.apply(t,e.slice(1))};window.setTimeout(n,16)},t.BindingsReady=function(){t._OnReady()},t.__observeLifetime=function(){},t.beginEventRecording=t.endEventRecording=t.saveEventRecord=function(){console.warn("Event recording will not work in the browser!")},t._mocks={},t._mockImpl=function(e,t,n,r){t&&(this._mocks[e]=t);var i=t.toString().replace("function "+t.name+"(",""),o=i.indexOf(")"),s=i.substr(0,o);this.browserCallbackMock&&this.browserCallbackMock(e,s,n,Boolean(r))},t.mock=function(e,t,n){this._mockImpl(e,t,!0,n)}),t.events={},i.prototype)t[a]=i.prototype[a];t.isAttached&&(t.on=function(e,n,r){var i=this.events[e];if(void 0===i&&void 0!==t.AddOrRemoveOnHandler){var s=t.AddOrRemoveOnHandler(e,n,r||t);if(void 0===s)return{clear:this._createClear(this,e,void 0)};i=this.events[e]=[];var a=new o(s[0],s[1]||this);a.wasInCPP=!0,i.push(a)}else void 0===i&&(i=this.events[e]=[]);var c=new o(n,r||this);return i.push(c),{clear:this._createClear(this,e,c)}}),t.whenReady=new Promise(e=>{t.on("Ready",e)}),t._trigger=i.prototype.trigger;var c=Array.prototype.concat;return t.trigger=function(e){if(this._trigger.apply(this,arguments),this.TriggerEvent.apply(this,arguments),void 0!==this.events.all){var t=c.apply(["all"],arguments);this._trigger.apply(this,t)}},t.showOverlay=function(){},t.hideOverlay=function(){},t.isAttached&&(t.mock=function(e,t,n){}),t._BindingsReady=!1,t._WindowLoaded=!1,t._RequestId=0,t._ActiveRequests={},void 0!==e.engineCreateDeferred&&console.warn("engineCreateDeferred is depricated"),t.call=function(){t._RequestId++;var e=t._RequestId,n=Array.prototype.slice.call(arguments);n.splice(1,0,e);var r=new Promise((function(r,i){t._ActiveRequests[e]={resolve:r,reject:i},t.SendMessage.apply(t,n)}));return r},t._Result=function(e){var n=t._ActiveRequests[e];if(void 0!==n){delete t._ActiveRequests[e];var r=Array.prototype.slice.call(arguments);r.shift(),n.resolve.apply(n,r)}},t._Errors=["Success","ArgumentType","NoSuchMethod","NoResult"],t._ForEachError=function(e,t){for(var n=e.length,r=0;r<n;++r)t(e[r].first,e[r].second)},t._TriggerError=function(e){t.trigger("Error",e)},t._OnError=function(e,n){if(null===e||0===e)t._ForEachError(n,t._TriggerError);else{var r=t._ActiveRequests[e];delete t._ActiveRequests[e],r.reject(new Error(n[0].second))}if(n.length)throw new Error(n[0].second)},t._eventHandles={},t._Register=function(e){var n=function(e,t){return function(){var n=[e];n.push.apply(n,arguments),t.TriggerEvent.apply(this,n)}}(e,t);t._eventHandles[e]=t.on(e,n)},t._removeEventThunk=function(e){t._eventHandles[e].clear(),delete t._eventHandles[e]},t._Unregister=function(e){"string"==typeof e?t._removeEventThunk(e):e.forEach(t._removeEventThunk,t)},t._boundTypes={},t._createInstance=function(e){var n=e[0],r=e[1],i=e[2],o=t._boundTypes[n];void 0===o&&((o=function(e){this._id=e}).prototype.__Type=n,i.forEach((function(e){o.prototype[e]=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.splice(0,0,e,this._id),t.call.apply(t,n)}}(n+"_"+e)})),t._boundTypes[n]=o);var s=new o(r);return t.__observeLifetime(s),s},t._OnReady=function(){t._BindingsReady=!0,t._WindowLoaded&&t.trigger("Ready")},t._OnWindowLoaded=function(){t._WindowLoaded=!0,t._BindingsReady&&t.trigger("Ready")},t._ThrowError=function(e){var t=e.name+": "+e.message+"\n"+e.stack.split("\n").map((function(e){return"\t"+e})).join("\n");console.error(t)},n?e.addEventListener("load",(function(){t._OnWindowLoaded()})):t._WindowLoaded=!0,t.on("_Result",t._Result,t),t.on("_Register",t._Register,t),t.on("_Unregister",t._Unregister,t),t.on("_OnReady",t._OnReady,t),t.on("_OnError",t._OnError,t),t.on("__OnReplayRecordCompleted",(function(e){t.onEventsReplayed&&t.onEventsReplayed()})),t.BindingsReady(r[0],r[1],r[2],r[3]),t}))}).call(this,n("./node_modules/webpack/buildin/global.js"))},"./src/lib/get-from-callstack.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e=1)=>{const t=(new Error).stack;let n,r=R.invalid("resId");return t&&(n=t.split("\n")[e].split(".js")[0].split("/").pop()||"",window.__feature&&window.__feature!==n&&window.children[n]&&(r=window.children[n].id)),{caller:n,stack:t,resId:r}}},"./src/lib/getValueByPath.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>e.split(".").reduce((e,t)=>e&&e[t],t)},"./src/lib/hooks/useModel.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("./node_modules/@wotfe/react/index.js"),i=n("./src/lib/view-env-helper/index.ts"),o=n("./src/lib/get-from-callstack.ts"),s=n("./src/lib/getValueByPath.ts");const a=i.a.instance,c=(e="model",t=!0)=>{const n=Object(r.useState)(0),i=(n[0],n[1]),c=Object(r.useMemo)(()=>Object(o.a)(),[]),l=c.caller,d=c.resId,u=Object(r.useMemo)(()=>window.__feature&&window.__feature!==l?`children.${l}.${e}`:e,[l,e]),_=Object(r.useMemo)(()=>(e=>{const t=Object(s.a)(e,window);for(const e in t)"function"==typeof t[e]&&(t[e]=t[e].bind(t));return t})(u),[u]);return Object(r.useEffect)(()=>{if(t){const t=()=>{i(e=>e+1)},n=a.addCallback(e,t,d);return()=>a.removeCallback(n,d)}},[e,t,d]),_}},"./src/lib/sound.js":function(e,t,n){"use strict";function r(e){engine.call("PlaySound",e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const i={playHighlight(){r("highlight")},playClick(){r("play")},playYes(){r("yes1")}}},"./src/lib/string-utils.js":function(e,t,n){"use strict";function r(e,t){return e.replace(/\{\w+\}/g,e=>String(t[e.slice(1,-1)]))}function i(e,t){return e.replace(/(\{|%\()\w+(\}|\)s)/g,e=>{const n=0===e.indexOf("%")?2:1;return String(t[e.slice(n,-n)])})}function o(e){return e.replace(/-/g,"_")}n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s}));const s=e=>e.replace(/&nbsp;/g," ")},"./src/lib/view-env-helper/DataTracker.ts":function(e,t,n){"use strict";class r{constructor(){this._callbacks=void 0,this._updateHandler=void 0,this._views=void 0,this.clearViewCallbacks=e=>{this._views[e]&&(this._views[e].forEach(e=>{delete this._callbacks[e]}),delete this._views[e])},this._callbacks={},this._views={},this._updateHandler=void 0}static get instance(){return window.__dataTracker||(window.__dataTracker=new r),window.__dataTracker}clear(){void 0!==this._updateHandler&&(this._updateHandler.clear(),this._updateHandler=void 0),this._callbacks={}}addCallback(e,t,n=0){void 0===this._updateHandler&&(this._updateHandler=engine.on("viewEnv.onDataChanged",this._emmitDataChanged,this));const r=viewEnv.addDataChangedCallback(e,n);return r>0&&(this._callbacks[r]=t,n>0&&(this._views[n]?this._views[n].push(r):this._views[n]=[r])),r}removeCallback(e,t=0){let n=!1;return void 0!==e&&void 0!==this._callbacks[e]&&(n=viewEnv.removeDataChangedCallback(e,t),delete this._callbacks[e]),n}_emmitDataChanged(e,t,n){n.forEach(n=>{const r=this._callbacks[n];void 0!==r&&r(e,t)})}}r.__instance=void 0,t.a=r},"./src/lib/view-env-helper/ViewModel.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _DataTracker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/view-env-helper/DataTracker.ts"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/view-env-helper/index.ts");class ViewModel{constructor(path,watchingFields=[]){this.dataTracker=void 0,this.modelPath=void 0,this.callbacks=void 0,this.data=void 0,this._notifyObservers=()=>{this.data=eval(this.modelPath),this.callbacks.forEach(e=>{e(this.data)})},this.dataTracker=new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.a,this.modelPath=path,this.callbacks=new Set,Object(_index__WEBPACK_IMPORTED_MODULE_1__.m)().then(()=>{this._addCallback(path),watchingFields.forEach(e=>{this._addCallback(path+"."+e)}),this._notifyObservers()})}subscribe(e){this.callbacks.add(e),null!==this.data&&void 0!==this.data&&e(this.data)}unsubscribe(e){this.callbacks.delete(e)}destroy(){this.dataTracker.clear(),this.callbacks.clear()}_addCallback(e){this.dataTracker.addCallback(e,this._notifyObservers)}}__webpack_exports__.a=ViewModel},"./src/lib/view-env-helper/index.ts":function(e,t,n){"use strict";var r=n("./src/lib/view-env-helper/DataTracker.ts"),i=n("./src/lib/view-env-helper/ViewModel.ts");class o{constructor(){this.entries=[],this._listenMouse=!1,this.onMouseDown=e=>{this.entries.forEach(({container:t,callback:n})=>{let r=e.target;do{if(r===t)return;r=r.parentNode}while(r);n()})}}static get instance(){return o.__instance||(o.__instance=new o),o.__instance}register(e,t){this.addMouseListener(),this.entries.push({container:e,callback:t})}unregister(e,t){const n=e,r=t;this.entries=this.entries.filter(({container:e,callback:t})=>e!==n||t!==r),this.removeMouseListener()}addMouseListener(){this._listenMouse||(document.addEventListener("mousedown",this.onMouseDown),this._listenMouse=!0)}removeMouseListener(){this._listenMouse&&0===this.entries.length&&(document.removeEventListener("mousedown",this.onMouseDown),this._listenMouse=!1)}}o.__instance=void 0;var s=o,a=n("./src/lib/view-env-helper/types.ts"),c=n("./src/lib/view-env-helper/view-events.ts");const l={getNumberFormat:(e,t)=>systemLocale.getNumberFormat(e,t),getRealFormat:(e,t)=>systemLocale.getRealFormat(e,t),getTimeFormat:(e,t)=>systemLocale.getTimeFormat(e,t),getDateFormat:(e,t)=>systemLocale.getDateFormat(e,t)},d={getNumberFormat:e=>userLocale.getNumberFormat(e),getTimeFormat:(e,t,n)=>userLocale.getTimeFormat(e,t,void 0===n||n),getTimeString:(e,t,n)=>userLocale.getTimeString(e,t,void 0===n||n)};function u(e){const t={};if("object"!=typeof e)return e;for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const r=Object.prototype.toString.call(e[n]);if(r.startsWith("[object CoherentArrayProxy]")){const r=e[n];t[n]=[];for(let e=0;e<r.length;e++)t[n].push({value:u(r[e].value)})}else r.startsWith("[object class BW::WULF::ViewModel")?t[n]=u(e[n]):t[n]=e[n]}return t}n.d(t,"a",(function(){return r.a})),n.d(t,"g",(function(){return a.e})),n.d(t,"c",(function(){return a.b})),n.d(t,"d",(function(){return a.c})),n.d(t,"f",(function(){return a.d})),n.d(t,"b",(function(){return a.a})),n.d(t,"o",(function(){return c.j})),n.d(t,"p",(function(){return c.k})),n.d(t,"q",(function(){return c.n})),n.d(t,"h",(function(){return c.a})),n.d(t,"k",(function(){return c.b})),n.d(t,"m",(function(){return c.g})),n.d(t,"n",(function(){return c.h})),n.d(t,"l",(function(){return c.d})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return l}));const _=s.instance,v={DataTracker:r.a,ViewModel:i.a,ViewEventType:a.e,NumberFormatType:a.b,RealFormatType:a.c,TimeFormatType:a.d,DateFormatType:a.a,makeGlobalBoundingBox:c.f,sendMoveEvent:c.l,sendCloseEvent:c.j,sendClosePopOverEvent:c.k,sendShowContextMenuEvent:c.m,sendShowPopOverEvent:c.n,addEscapeListener:c.a,handleViewEvent:c.b,onBindingsReady:c.g,onLayoutReady:c.h,onWindowLoaded:c.i,isTooltipShown:c.e,isContextMenuShown:c.c,isPopOverShown:c.d,dumpViewModel:u,ClickOutsideManager:_,SystemLocale:l,UserLocale:d};window.ViewEnvHelper=v;t.i=v},"./src/lib/view-env-helper/types.ts":function(e,t,n){"use strict";let r;n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return a})),function(e){e[e.UNDEFINED=0]="UNDEFINED",e[e.TOOLTIP=1]="TOOLTIP",e[e.POP_OVER=2]="POP_OVER",e[e.CONTEXT_MENU=4]="CONTEXT_MENU",e[e.DROP_DOWN=8]="DROP_DOWN",e[e.MOVE=16]="MOVE",e[e.CLOSE=32]="CLOSE"}(r||(r={}));const i=Object.freeze({INTEGRAL:0,GOLD:1}),o=Object.freeze({FRACTIONAL:0,WO_ZERO_DIGITS:1}),s=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1}),a=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1,YEAR_MONTH:2})},"./src/lib/view-env-helper/view-events.ts":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return v})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return w})),n.d(t,"a",(function(){return y}));var r=n("./src/lib/view-env-helper/types.ts");function i(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}const o=e=>({__Type:"GFBoundingBox",x:e.x,y:e.y,width:e.width,height:e.height}),s=function(){var e,t=(e=function*(){return!(!engine._BindingsReady||!engine._WindowLoaded)||new Promise(e=>{engine.on("Ready",e)})},function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){i(s,r,o,a,c,"next",e)}function c(e){i(s,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),a=()=>new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e()})})}),c=()=>new Promise(e=>{engine.on("windowLoaded",e)}),l=e=>Object.entries(e).map(([e,t])=>{const n={__Type:"GFValueProxy",name:e};switch(typeof t){case"number":n.number=t;break;case"boolean":n.bool=t;break;default:case"string":n.string=t.toString()}return n}),d=(e,t)=>{const n="GFViewEventProxy";if(void 0!==t){const r=t.args,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,["args"]);void 0!==r?viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},i,{arguments:l(r)})):viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},i))}else viewEnv.handleViewEvent({__Type:n,type:e})},u=e=>d(r.e.MOVE,{isMouseEvent:!0,on:e}),_=()=>d(r.e.CLOSE),v=()=>d(r.e.POP_OVER,{on:!1}),h=(e,t,n=0)=>{d(r.e.CONTEXT_MENU,{isMouseEvent:!0,contentID:e,on:!0,decoratorID:n,args:t})},f=(e,t,n,i,s)=>{const a=viewEnv.getViewGlobalPosition(),c=n.getBoundingClientRect(),l=c.x,u=c.y,_=c.width,v=c.height,h={x:viewEnv.pxToRem(l+a.x),y:viewEnv.pxToRem(u+a.y),width:viewEnv.pxToRem(_),height:viewEnv.pxToRem(v)};d(r.e.POP_OVER,{isMouseEvent:!0,contentID:e,decoratorID:i,direction:t,bbox:o(h),on:!0,args:s})},p=()=>viewEnv.isWindowShownByViewEvent(r.e.TOOLTIP),b=()=>viewEnv.isWindowShownByViewEvent(r.e.CONTEXT_MENU),w=()=>viewEnv.isWindowShownByViewEvent(r.e.POP_OVER),y=e=>window.addEventListener("keydown",(function(t){27===t.keyCode&&e()}))},"./src/views/lobby/ranked/EntryPoint/EntryPoint.css":function(e,t,n){},"./src/views/lobby/ranked/EntryPoint/EntryPoint.tsx":function(e,t,n){"use strict";n.r(t);n("./src/lib/cohtml.js");var r=n("./node_modules/@wotfe/react/index.js"),i=n.n(r),o=n("./node_modules/@wotfe/react-dom/index.js"),s=n.n(o),a=n("./node_modules/classnames/index.js"),c=n.n(a),l=n("./src/lib/hooks/useModel.ts"),d=n("./src/lib/view-env-helper/index.ts"),u=n("./src/lib/string-utils.js"),_=n("./src/lib/sound.js");var v=n("./src/views/lobby/ranked/EntryPoint/components/EntryPointContent/EntryPointContent.css"),h=n.n(v);const f=e=>1===e||5===e,p=()=>{const e=Object(l.a)(),t=e.currentSeason,n=e.nextSeason,o=e.state,s=e.timeUntilNextSeason,a=e.onClick,v=Object(r.useCallback)(()=>{f(o)||(Object(_.b)(R.sounds.yes()),a())},[o,a]),p=Object(r.useState)({width:0,height:0}),b=p[0],w=p[1],y=b.height<=135,g=y&&b.width>=316||!y&&b.width>=416,m=Object(r.useState)(!1),E=m[0],O=m[1];Object(r.useEffect)(()=>{function e(e){w({width:e.width,height:e.height}),O(!0)}return engine.on("screenResized",e),()=>{engine.off("screenResized",e)}},[]);const k=2===o?h.a.particles:h.a.particles__hidden,P=5===o?h.a.frozen:h.a.frozen__hidden,C=((e,t,n,r,i)=>{switch(e){case 1:return Object(u.b)(R.strings.ranked_battles.entryPoint.beforeSeason(),{season:r.seasonNumber,date:d.e.getDateFormat(r.startDate,d.b.SHORT_FORMAT)});case 2:return Object(u.b)(R.strings.ranked_battles.entryPoint.activeSeason(),{season:n.seasonNumber,date:d.e.getDateFormat(n.endDate,d.b.SHORT_FORMAT)});case 3:return t?Object(u.b)(R.strings.ranked_battles.entryPoint.waitNextSeasonDate.wide(),{season:n.seasonNumber,nextSeason:r.seasonNumber,date:d.e.getDateFormat(r.startDate,d.b.SHORT_FORMAT)}):i<=604800?Object(u.b)(R.strings.ranked_battles.entryPoint.waitNextSeasonDate.thin.newSeasonSoon(),{nextSeason:r.seasonNumber,date:d.e.getDateFormat(r.startDate,d.b.SHORT_FORMAT)}):Object(u.b)(R.strings.ranked_battles.entryPoint.waitNextSeasonDate.thin.seasonEnd(),{season:n.seasonNumber});case 4:return Object(u.b)(R.strings.ranked_battles.entryPoint.waitNextSeasonWithoutDate(),{season:n.seasonNumber});case 5:return t?R.strings.ranked_battles.entryPoint.frozen.wide():R.strings.ranked_battles.entryPoint.frozen.thin()}return""})(o,g,t,n,s),T=c()(h.a.base,y&&h.a.base__small,!y&&h.a.base__big,f(o)&&h.a.base__locked,E&&h.a.base__visible),M=c()(h.a.contentWrapper,g&&h.a.contentWrapper__wide,!g&&h.a.contentWrapper__thin,f(o)&&h.a.contentWrapper__locked),j=c()(h.a.bg,g&&h.a.bg__wide,!g&&h.a.bg__thin),S=c()(h.a.shadow,!g&&h.a.shadow__thin,g&&h.a.shadow__wide),x=Object(r.useCallback)(()=>{window.swfPlayer.play("entryPointParticlesSwf")},[]);return i.a.createElement("div",{className:T},i.a.createElement("div",{className:M,onClick:v,onMouseOver:_.a.playHighlight},i.a.createElement("div",{className:j}),i.a.createElement("div",{className:h.a.content},i.a.createElement("div",{className:k},i.a.createElement("img",{id:"swfImg",className:h.a.particlesSwf,src:"swf://gui/flash/animations/rankedBattles/entryPointParticles.swf?name=entryPointParticlesSwf",alt:"entryPointParticlesSwf",onLoad:x})),i.a.createElement("div",{className:h.a.logo}),i.a.createElement("div",{className:P}),i.a.createElement("div",{className:h.a.title},R.strings.ranked_battles.entryPoint.title()),i.a.createElement("div",{className:h.a.descr},C))),i.a.createElement("div",{className:S}))};n("./src/views/lobby/ranked/EntryPoint/EntryPoint.css");const b=document.createElement("div");window.addEventListener("load",()=>document.body.appendChild(b)),s.a.render(i.a.createElement(()=>i.a.createElement(p,null),null),b)},"./src/views/lobby/ranked/EntryPoint/components/EntryPointContent/EntryPointContent.css":function(e,t,n){e.exports={base:"EntryPointContent_base_d2",base__locked:"EntryPointContent_base__locked_12",base__visible:"EntryPointContent_base__visible_e4",contentWrapper:"EntryPointContent_contentWrapper_15",base__small:"EntryPointContent_base__small_01",contentWrapper__thin:"EntryPointContent_contentWrapper__thin_81",base__big:"EntryPointContent_base__big_e3",contentWrapper__wide:"EntryPointContent_contentWrapper__wide_d2",contentWrapper__locked:"EntryPointContent_contentWrapper__locked_00",bg:"EntryPointContent_bg_47","zoom-out":"EntryPointContent_zoom-out_38","brightness-out":"EntryPointContent_brightness-out_1c",bg__thin:"EntryPointContent_bg__thin_34",bg__wide:"EntryPointContent_bg__wide_05","zoom-in":"EntryPointContent_zoom-in_2d","brightness-in":"EntryPointContent_brightness-in_2f",content:"EntryPointContent_content_7b",particles:"EntryPointContent_particles_ef",particles__hidden:"EntryPointContent_particles__hidden_42",particlesSwf:"EntryPointContent_particlesSwf_21",logo:"EntryPointContent_logo_17",frozen:"EntryPointContent_frozen_06",frozen__hidden:"EntryPointContent_frozen__hidden_13",title:"EntryPointContent_title_6c",descr:"EntryPointContent_descr_a8",shadow:"EntryPointContent_shadow_d8",shadow__thin:"EntryPointContent_shadow__thin_50",shadow__wide:"EntryPointContent_shadow__wide_e2"}}});