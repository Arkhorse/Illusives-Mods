!function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],u=0,v=[];u<a.length;u++)s=a[u],r[s]&&v.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);v.length;)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={21:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;i.push(["./src/views/lobby/battle_pass/tooltips/BattlePassLockIconTooltipView/BattlePassLockIconTooltipView.tsx",0]),n()}({"./src/components/TooltipDecorator/TooltipDecorator.css":function(e,t,n){e.exports={base:"TooltipDecorator_base_c9",decorator:"TooltipDecorator_decorator_3d",decoratorContent:"TooltipDecorator_decoratorContent_de"}},"./src/components/TooltipDecorator/TooltipDecorator.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("./node_modules/@wotfe/react/index.js"),r=n.n(o),i=n("./src/lib/view-env-helper/index.ts"),s=n("./src/components/TooltipDecorator/TooltipDecorator.css"),a=n.n(s);class c extends r.a.Component{constructor(...e){super(...e),this.root=r.a.createRef()}updateSize(){i.i.onLayoutReady().then(()=>{if(!this.root.current)return;const e=this.root.current.scrollWidth,t=this.root.current.scrollHeight;if(viewEnv.setScreenInfo(e,t),this.root.current){const n=window.getComputedStyle(this.root.current),o=parseInt(n.getPropertyValue("padding-left")),r=parseInt(n.getPropertyValue("padding-top")),i=parseInt(n.getPropertyValue("padding-right")),s=parseInt(n.getPropertyValue("padding-bottom"));viewEnv.setInputAreaPosition(o,r),viewEnv.setInputAreaSize(e-o-i,t-r-s)}})}componentDidMount(){i.i.onWindowLoaded().then(()=>this.updateSize())}componentDidUpdate(){this.updateSize()}render(){return r.a.createElement("div",{className:a.a.base,ref:this.root},r.a.createElement("div",{className:a.a.decorator},r.a.createElement("div",{className:a.a.decoratorContent},this.props.children)))}}},"./src/lib/cohtml.js":function(e,t,n){(function(t){!function(n){e.exports?t.engine._WindowLoaded||(e.exports=n(t,t.engine,!1)):window.engine._WindowLoaded||(engine=n(this,window.engine,!0))}((function(e,t,n){"use strict";var o=[1,5,0,8];function r(){this.events={}}function i(e,t){this.code=e,this.context=t}r.prototype._createClear=function(e,n,o){return function(){var r=e.events[n];if(r){var i=-1;if(void 0===o){for(var s=0;s<r.length;++s)if(void 0!==r[s].wasInCPP){i=s;break}}else i=r.indexOf(o);-1!=i&&(r.splice(i,1),0===r.length&&delete e.events[n])}else void 0!==t.RemoveOnHandler&&t.RemoveOnHandler(n)}},r.prototype.on=function(e,t,n){var o=this.events[e];void 0===o&&(o=this.events[e]=[]);var r=new i(t,n||this);return o.push(r),{clear:this._createClear(this,e,r)}},r.prototype.off=function(e,n,o){var r=this.events[e];if(void 0!==r){var i;o=o||this;var s=r.length;for(i=0;i<s;++i){var a=r[i];if(a.code==n&&a.context==o)break}i<s&&(r.splice(i,1),0===r.length&&delete this.events[e])}else t.RemoveOnHandler(e)};var s=void 0!==t;(t=t||{}).isAttached=s,t.onEventsReplayed=null,r.prototype.trigger=function(e){var t=this.events[e];if(void 0!==t){var n=Array.prototype.slice.call(arguments,1);t.forEach((function(e){e.code.apply(e.context,n)}))}},r.prototype.merge=function(e){var t,n=this.events,o=e.events,r=Array.prototype.push;for(var i in o)t=n[i]=n[i]||[],r.apply(t,o[i])};for(var a in t.isAttached||(r.prototype.on=function(e,t,n){var o=this.events[e];this.browserCallbackOn&&this.browserCallbackOn(e,t,n),void 0===o&&(o=this.events[e]=[]);var r=new i(t,n||this);return o.push(r),{clear:this._createClear(this,e,r)}},r.prototype.off=function(e,t,n){var o=this.events[e];if(void 0!==o){var r;n=n||this;var i=o.length;for(r=0;r<i;++r){var s=o[r];if(s.code==t&&s.context==n)break}r<i&&(o.splice(r,1),0===o.length&&(delete this.events[e],this.browserCallbackOff&&this.browserCallbackOff(e,t,n)))}},t.SendMessage=function(e,n){var o=Array.prototype.slice.call(arguments,2),r=t._ActiveRequests[n];delete t._ActiveRequests[n];var i=function(){var n=t._mocks[e];void 0!==n&&r.resolve(n.apply(t,o))};window.setTimeout(i,16)},t.TriggerEvent=function(){var e=Array.prototype.slice.call(arguments),n=function(){var n=t._mocks[e[0]];void 0!==n&&n.apply(t,e.slice(1))};window.setTimeout(n,16)},t.BindingsReady=function(){t._OnReady()},t.__observeLifetime=function(){},t.beginEventRecording=t.endEventRecording=t.saveEventRecord=function(){console.warn("Event recording will not work in the browser!")},t._mocks={},t._mockImpl=function(e,t,n,o){t&&(this._mocks[e]=t);var r=t.toString().replace("function "+t.name+"(",""),i=r.indexOf(")"),s=r.substr(0,i);this.browserCallbackMock&&this.browserCallbackMock(e,s,n,Boolean(o))},t.mock=function(e,t,n){this._mockImpl(e,t,!0,n)}),t.events={},r.prototype)t[a]=r.prototype[a];t.isAttached&&(t.on=function(e,n,o){var r=this.events[e];if(void 0===r&&void 0!==t.AddOrRemoveOnHandler){var s=t.AddOrRemoveOnHandler(e,n,o||t);if(void 0===s)return{clear:this._createClear(this,e,void 0)};r=this.events[e]=[];var a=new i(s[0],s[1]||this);a.wasInCPP=!0,r.push(a)}else void 0===r&&(r=this.events[e]=[]);var c=new i(n,o||this);return r.push(c),{clear:this._createClear(this,e,c)}}),t.whenReady=new Promise(e=>{t.on("Ready",e)}),t._trigger=r.prototype.trigger;var c=Array.prototype.concat;return t.trigger=function(e){if(this._trigger.apply(this,arguments),this.TriggerEvent.apply(this,arguments),void 0!==this.events.all){var t=c.apply(["all"],arguments);this._trigger.apply(this,t)}},t.showOverlay=function(){},t.hideOverlay=function(){},t.isAttached&&(t.mock=function(e,t,n){}),t._BindingsReady=!1,t._WindowLoaded=!1,t._RequestId=0,t._ActiveRequests={},void 0!==e.engineCreateDeferred&&console.warn("engineCreateDeferred is depricated"),t.call=function(){t._RequestId++;var e=t._RequestId,n=Array.prototype.slice.call(arguments);n.splice(1,0,e);var o=new Promise((function(o,r){t._ActiveRequests[e]={resolve:o,reject:r},t.SendMessage.apply(t,n)}));return o},t._Result=function(e){var n=t._ActiveRequests[e];if(void 0!==n){delete t._ActiveRequests[e];var o=Array.prototype.slice.call(arguments);o.shift(),n.resolve.apply(n,o)}},t._Errors=["Success","ArgumentType","NoSuchMethod","NoResult"],t._ForEachError=function(e,t){for(var n=e.length,o=0;o<n;++o)t(e[o].first,e[o].second)},t._TriggerError=function(e){t.trigger("Error",e)},t._OnError=function(e,n){if(null===e||0===e)t._ForEachError(n,t._TriggerError);else{var o=t._ActiveRequests[e];delete t._ActiveRequests[e],o.reject(new Error(n[0].second))}if(n.length)throw new Error(n[0].second)},t._eventHandles={},t._Register=function(e){var n=function(e,t){return function(){var n=[e];n.push.apply(n,arguments),t.TriggerEvent.apply(this,n)}}(e,t);t._eventHandles[e]=t.on(e,n)},t._removeEventThunk=function(e){t._eventHandles[e].clear(),delete t._eventHandles[e]},t._Unregister=function(e){"string"==typeof e?t._removeEventThunk(e):e.forEach(t._removeEventThunk,t)},t._boundTypes={},t._createInstance=function(e){var n=e[0],o=e[1],r=e[2],i=t._boundTypes[n];void 0===i&&((i=function(e){this._id=e}).prototype.__Type=n,r.forEach((function(e){i.prototype[e]=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.splice(0,0,e,this._id),t.call.apply(t,n)}}(n+"_"+e)})),t._boundTypes[n]=i);var s=new i(o);return t.__observeLifetime(s),s},t._OnReady=function(){t._BindingsReady=!0,t._WindowLoaded&&t.trigger("Ready")},t._OnWindowLoaded=function(){t._WindowLoaded=!0,t._BindingsReady&&t.trigger("Ready")},t._ThrowError=function(e){var t=e.name+": "+e.message+"\n"+e.stack.split("\n").map((function(e){return"\t"+e})).join("\n");console.error(t)},n?e.addEventListener("load",(function(){t._OnWindowLoaded()})):t._WindowLoaded=!0,t.on("_Result",t._Result,t),t.on("_Register",t._Register,t),t.on("_Unregister",t._Unregister,t),t.on("_OnReady",t._OnReady,t),t.on("_OnError",t._OnError,t),t.on("__OnReplayRecordCompleted",(function(e){t.onEventsReplayed&&t.onEventsReplayed()})),t.BindingsReady(o[0],o[1],o[2],o[3]),t}))}).call(this,n("./node_modules/webpack/buildin/global.js"))},"./src/lib/view-env-helper/DataTracker.ts":function(e,t,n){"use strict";class o{constructor(){this._callbacks=void 0,this._updateHandler=void 0,this._views=void 0,this.clearViewCallbacks=e=>{this._views[e]&&(this._views[e].forEach(e=>{delete this._callbacks[e]}),delete this._views[e])},this._callbacks={},this._views={},this._updateHandler=void 0}static get instance(){return window.__dataTracker||(window.__dataTracker=new o),window.__dataTracker}clear(){void 0!==this._updateHandler&&(this._updateHandler.clear(),this._updateHandler=void 0),this._callbacks={}}addCallback(e,t,n=0){void 0===this._updateHandler&&(this._updateHandler=engine.on("viewEnv.onDataChanged",this._emmitDataChanged,this));const o=viewEnv.addDataChangedCallback(e,n);return o>0&&(this._callbacks[o]=t,n>0&&(this._views[n]?this._views[n].push(o):this._views[n]=[o])),o}removeCallback(e,t=0){let n=!1;return void 0!==e&&void 0!==this._callbacks[e]&&(n=viewEnv.removeDataChangedCallback(e,t),delete this._callbacks[e]),n}_emmitDataChanged(e,t,n){n.forEach(n=>{const o=this._callbacks[n];void 0!==o&&o(e,t)})}}o.__instance=void 0,t.a=o},"./src/lib/view-env-helper/ViewModel.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _DataTracker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/view-env-helper/DataTracker.ts"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/view-env-helper/index.ts");class ViewModel{constructor(path,watchingFields=[]){this.dataTracker=void 0,this.modelPath=void 0,this.callbacks=void 0,this.data=void 0,this._notifyObservers=()=>{this.data=eval(this.modelPath),this.callbacks.forEach(e=>{e(this.data)})},this.dataTracker=new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.a,this.modelPath=path,this.callbacks=new Set,Object(_index__WEBPACK_IMPORTED_MODULE_1__.m)().then(()=>{this._addCallback(path),watchingFields.forEach(e=>{this._addCallback(path+"."+e)}),this._notifyObservers()})}subscribe(e){this.callbacks.add(e),null!==this.data&&void 0!==this.data&&e(this.data)}unsubscribe(e){this.callbacks.delete(e)}destroy(){this.dataTracker.clear(),this.callbacks.clear()}_addCallback(e){this.dataTracker.addCallback(e,this._notifyObservers)}}__webpack_exports__.a=ViewModel},"./src/lib/view-env-helper/index.ts":function(e,t,n){"use strict";var o=n("./src/lib/view-env-helper/DataTracker.ts"),r=n("./src/lib/view-env-helper/ViewModel.ts");class i{constructor(){this.entries=[],this._listenMouse=!1,this.onMouseDown=e=>{this.entries.forEach(({container:t,callback:n})=>{let o=e.target;do{if(o===t)return;o=o.parentNode}while(o);n()})}}static get instance(){return i.__instance||(i.__instance=new i),i.__instance}register(e,t){this.addMouseListener(),this.entries.push({container:e,callback:t})}unregister(e,t){const n=e,o=t;this.entries=this.entries.filter(({container:e,callback:t})=>e!==n||t!==o),this.removeMouseListener()}addMouseListener(){this._listenMouse||(document.addEventListener("mousedown",this.onMouseDown),this._listenMouse=!0)}removeMouseListener(){this._listenMouse&&0===this.entries.length&&(document.removeEventListener("mousedown",this.onMouseDown),this._listenMouse=!1)}}i.__instance=void 0;var s=i,a=n("./src/lib/view-env-helper/types.ts"),c=n("./src/lib/view-env-helper/view-events.ts");const l={getNumberFormat:(e,t)=>systemLocale.getNumberFormat(e,t),getRealFormat:(e,t)=>systemLocale.getRealFormat(e,t),getTimeFormat:(e,t)=>systemLocale.getTimeFormat(e,t),getDateFormat:(e,t)=>systemLocale.getDateFormat(e,t)},d={getNumberFormat:e=>userLocale.getNumberFormat(e),getTimeFormat:(e,t,n)=>userLocale.getTimeFormat(e,t,void 0===n||n),getTimeString:(e,t,n)=>userLocale.getTimeString(e,t,void 0===n||n)};function u(e){const t={};if("object"!=typeof e)return e;for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const o=Object.prototype.toString.call(e[n]);if(o.startsWith("[object CoherentArrayProxy]")){const o=e[n];t[n]=[];for(let e=0;e<o.length;e++)t[n].push({value:u(o[e].value)})}else o.startsWith("[object class BW::WULF::ViewModel")?t[n]=u(e[n]):t[n]=e[n]}return t}n.d(t,"a",(function(){return o.a})),n.d(t,"g",(function(){return a.e})),n.d(t,"c",(function(){return a.b})),n.d(t,"d",(function(){return a.c})),n.d(t,"f",(function(){return a.d})),n.d(t,"b",(function(){return a.a})),n.d(t,"o",(function(){return c.j})),n.d(t,"p",(function(){return c.k})),n.d(t,"q",(function(){return c.n})),n.d(t,"h",(function(){return c.a})),n.d(t,"k",(function(){return c.b})),n.d(t,"m",(function(){return c.g})),n.d(t,"n",(function(){return c.h})),n.d(t,"l",(function(){return c.d})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return l}));const v=s.instance,p={DataTracker:o.a,ViewModel:r.a,ViewEventType:a.e,NumberFormatType:a.b,RealFormatType:a.c,TimeFormatType:a.d,DateFormatType:a.a,makeGlobalBoundingBox:c.f,sendMoveEvent:c.l,sendCloseEvent:c.j,sendClosePopOverEvent:c.k,sendShowContextMenuEvent:c.m,sendShowPopOverEvent:c.n,addEscapeListener:c.a,handleViewEvent:c.b,onBindingsReady:c.g,onLayoutReady:c.h,onWindowLoaded:c.i,isTooltipShown:c.e,isContextMenuShown:c.c,isPopOverShown:c.d,dumpViewModel:u,ClickOutsideManager:v,SystemLocale:l,UserLocale:d};window.ViewEnvHelper=p;t.i=p},"./src/lib/view-env-helper/types.ts":function(e,t,n){"use strict";let o;n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return a})),function(e){e[e.UNDEFINED=0]="UNDEFINED",e[e.TOOLTIP=1]="TOOLTIP",e[e.POP_OVER=2]="POP_OVER",e[e.CONTEXT_MENU=4]="CONTEXT_MENU",e[e.DROP_DOWN=8]="DROP_DOWN",e[e.MOVE=16]="MOVE",e[e.CLOSE=32]="CLOSE"}(o||(o={}));const r=Object.freeze({INTEGRAL:0,GOLD:1}),i=Object.freeze({FRACTIONAL:0,WO_ZERO_DIGITS:1}),s=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1}),a=Object.freeze({SHORT_FORMAT:0,LONG_FORMAT:1,YEAR_MONTH:2})},"./src/lib/view-env-helper/view-events.ts":function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return p})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return _})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return g}));var o=n("./src/lib/view-env-helper/types.ts");function r(e,t,n,o,r,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(o,r)}const i=e=>({__Type:"GFBoundingBox",x:e.x,y:e.y,width:e.width,height:e.height}),s=function(){var e,t=(e=function*(){return!(!engine._BindingsReady||!engine._WindowLoaded)||new Promise(e=>{engine.on("Ready",e)})},function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),a=()=>new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e()})})}),c=()=>new Promise(e=>{engine.on("windowLoaded",e)}),l=e=>Object.entries(e).map(([e,t])=>{const n={__Type:"GFValueProxy",name:e};switch(typeof t){case"number":n.number=t;break;case"boolean":n.bool=t;break;default:case"string":n.string=t.toString()}return n}),d=(e,t)=>{const n="GFViewEventProxy";if(void 0!==t){const o=t.args,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["args"]);void 0!==o?viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},r,{arguments:l(o)})):viewEnv.handleViewEvent(Object.assign({__Type:n,type:e},r))}else viewEnv.handleViewEvent({__Type:n,type:e})},u=e=>d(o.e.MOVE,{isMouseEvent:!0,on:e}),v=()=>d(o.e.CLOSE),p=()=>d(o.e.POP_OVER,{on:!1}),h=(e,t,n=0)=>{d(o.e.CONTEXT_MENU,{isMouseEvent:!0,contentID:e,on:!0,decoratorID:n,args:t})},_=(e,t,n,r,s)=>{const a=viewEnv.getViewGlobalPosition(),c=n.getBoundingClientRect(),l=c.x,u=c.y,v=c.width,p=c.height,h={x:viewEnv.pxToRem(l+a.x),y:viewEnv.pxToRem(u+a.y),width:viewEnv.pxToRem(v),height:viewEnv.pxToRem(p)};d(o.e.POP_OVER,{isMouseEvent:!0,contentID:e,decoratorID:r,direction:t,bbox:i(h),on:!0,args:s})},f=()=>viewEnv.isWindowShownByViewEvent(o.e.TOOLTIP),w=()=>viewEnv.isWindowShownByViewEvent(o.e.CONTEXT_MENU),b=()=>viewEnv.isWindowShownByViewEvent(o.e.POP_OVER),g=e=>window.addEventListener("keydown",(function(t){27===t.keyCode&&e()}))},"./src/views/lobby/battle_pass/tooltips/BattlePassLockIconTooltipView/BattlePassLockIconTooltipView.tsx":function(e,t,n){"use strict";n.r(t);n("./src/lib/cohtml.js");var o=n("./node_modules/@wotfe/react/index.js"),r=n.n(o),i=n("./node_modules/@wotfe/react-dom/index.js"),s=n.n(i),a=n("./node_modules/classnames/index.js"),c=n.n(a),l=n("./src/views/lobby/battle_pass/tooltips/BattlePassLockIconTooltipView/components/Content/Content.css"),d=n.n(l);const u=()=>r.a.createElement("div",{className:d.a.base},r.a.createElement("div",{className:d.a.title},R.strings.battle_pass_2020.tooltips.iconLock.title()),r.a.createElement("div",{className:d.a.description},R.strings.battle_pass_2020.tooltips.iconLock.descr1()),r.a.createElement("div",{className:c()(d.a.description,d.a.description__indent)},R.strings.battle_pass_2020.tooltips.iconLock.descr2()));var v=n("./src/components/TooltipDecorator/TooltipDecorator.tsx");const p=document.createElement("div");window.onload=()=>document.body.appendChild(p),s.a.render(r.a.createElement(()=>r.a.createElement(v.a,null,r.a.createElement(u,null)),null),p)},"./src/views/lobby/battle_pass/tooltips/BattlePassLockIconTooltipView/components/Content/Content.css":function(e,t,n){e.exports={base:"Content_base_3a",title:"Content_title_3c",description:"Content_description_eb",description__indent:"Content_description__indent_9a"}}});