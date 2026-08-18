var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,a,s,c)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var l=r(a),u=0,d=l.length,f;u<d;u++)f=l[u],!o.call(e,f)&&f!==s&&t(e,f,{get:(e=>a[e]).bind(null,f),enumerable:!(c=n(a,f))||c.enumerable});return e},l=(n,r,s)=>(s=n==null?{}:e(a(n)),c(r||!n||!n.__esModule||!o.call(n,`default`)?t(s,`default`,{value:n,enumerable:!0}):s,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),a=Symbol.for(`react.strict_mode`),o=Symbol.for(`react.profiler`),s=Symbol.for(`react.consumer`),c=Symbol.for(`react.context`),l=Symbol.for(`react.forward_ref`),u=Symbol.for(`react.suspense`),d=Symbol.for(`react.memo`),f=Symbol.for(`react.lazy`),m=Symbol.for(`react.activity`),h=Symbol.iterator;function g(e){return typeof e!=`object`||!e?null:(e=h&&e[h]||e[`@@iterator`],typeof e==`function`?e:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||_}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function x(){}x.prototype=b.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||_}var C=S.prototype=new x;C.constructor=S,v(C,b.prototype),C.isPureReactComponent=!0;var w=Array.isArray;function T(){}var E={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function O(e,n,r){var a=r.ref;return{$$typeof:t,type:e,key:n,ref:a===void 0?null:a,props:r}}function k(e,t){return O(e.type,t,e.props)}function A(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function j(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var M=/\/+/g;function N(e,t){return typeof e==`object`&&e&&e.key!=null?j(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(T,T):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,a,o,s){var c=typeof e;(c===`undefined`||c===`boolean`)&&(e=null);var l=!1;if(e===null)l=!0;else switch(c){case`bigint`:case`string`:case`number`:l=!0;break;case`object`:switch(e.$$typeof){case t:case n:l=!0;break;case f:return l=e._init,te(l(e._payload),r,a,o,s)}}if(l)return s=s(e),l=o===``?`.`+N(e,0):o,w(s)?(a=``,l!=null&&(a=l.replace(M,`$&/`)+`/`),te(s,r,a,``,function(e){return e})):s!=null&&(A(s)&&(s=k(s,a+(s.key==null||e&&e.key===s.key?``:(``+s.key).replace(M,`$&/`)+`/`)+l)),r.push(s)),1;l=0;var u=o===``?`.`:o+`:`;if(w(e))for(var d=0;d<e.length;d++)o=e[d],c=u+N(o,d),l+=te(o,r,a,c,s);else if(d=g(e),typeof d==`function`)for(e=d.call(e),d=0;!(o=e.next()).done;)o=o.value,c=u+N(o,d++),l+=te(o,r,a,c,s);else if(c===`object`){if(typeof e.then==`function`)return te(ee(e),r,a,o,s);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return l}function ne(e,t,n){if(e==null)return e;var r=[],a=0;return te(e,r,``,``,function(e){return t.call(n,e,a++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:ne,forEach:function(e,t,n){ne(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ne(e,function(){t++}),t},toArray:function(e){return ne(e,function(e){return e})||[]},only:function(e){if(!A(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=m,e.Children=F,e.Component=b,e.Fragment=r,e.Profiler=o,e.PureComponent=S,e.StrictMode=a,e.Suspense=u,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return E.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=v({},e.props),a=e.key;if(t!=null)for(o in t.key!==void 0&&(a=``+t.key),t)!D.call(t,o)||o===`key`||o===`__self`||o===`__source`||o===`ref`&&t.ref===void 0||(r[o]=t[o]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];r.children=s}return O(e.type,a,r)},e.createContext=function(e){return e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:s,_context:e},e},e.createElement=function(e,t,n){var r,a={},o=null;if(t!=null)for(r in t.key!==void 0&&(o=``+t.key),t)D.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return O(e,o,a)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:l,render:e}},e.isValidElement=A,e.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:d,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=E.T,n={};E.T=n;try{var r=e(),a=E.S;a!==null&&a(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(T,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),E.T=t}},e.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},e.use=function(e){return E.H.use(e)},e.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},e.useCallback=function(e,t){return E.H.useCallback(e,t)},e.useContext=function(e){return E.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return E.H.useEffect(e,t)},e.useEffectEvent=function(e){return E.H.useEffectEvent(e)},e.useId=function(){return E.H.useId()},e.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return E.H.useMemo(e,t)},e.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},e.useRef=function(e){return E.H.useRef(e)},e.useState=function(e){return E.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return E.H.useTransition()},e.version=`19.2.8`})),d=s(((e,t)=>{t.exports=u()})),f=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,o=e.length,s=o>>>1;r<s;){var c=2*(r+1)-1,l=e[c],u=c+1,d=e[u];if(0>a(l,n))u<o&&0>a(d,l)?(e[r]=d,e[u]=n,r=u):(e[r]=l,e[c]=n,r=c);else if(u<o&&0>a(d,n))e[r]=d,e[u]=n,r=u;else break a}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],u=[],d=1,f=null,m=3,h=!1,g=!1,_=!1,v=!1,y=typeof setTimeout==`function`?setTimeout:null,b=typeof clearTimeout==`function`?clearTimeout:null,x=typeof setImmediate<`u`?setImmediate:null;function S(e){for(var a=n(u);a!==null;){if(a.callback===null)r(u);else if(a.startTime<=e)r(u),a.sortIndex=a.expirationTime,t(l,a);else break;a=n(u)}}function C(e){if(_=!1,S(e),!g){if(n(l)!==null)g=!0,w||(w=!0,A());else{var t=n(u);t!==null&&N(C,t.startTime-e)}}}var w=!1,T=-1,E=5,D=-1;function O(){return v?!0:!(e.unstable_now()-D<E)}function k(){if(v=!1,w){var t=e.unstable_now();D=t;var a=!0;try{a:{g=!1,_&&(_=!1,b(T),T=-1),h=!0;var o=m;try{b:{for(S(t),f=n(l);f!==null&&!(f.expirationTime>t&&O());){var s=f.callback;if(typeof s==`function`){f.callback=null,m=f.priorityLevel;var c=s(f.expirationTime<=t);if(t=e.unstable_now(),typeof c==`function`){f.callback=c,S(t),a=!0;break b}f===n(l)&&r(l),S(t)}else r(l);f=n(l)}if(f!==null)a=!0;else{var d=n(u);d!==null&&N(C,d.startTime-t),a=!1}}break a}finally{f=null,m=o,h=!1}}}finally{a?A():w=!1}}}var A;if(typeof x==`function`)A=function(){x(k)};else if(typeof MessageChannel<`u`){var j=new MessageChannel,M=j.port2;j.port1.onmessage=k,A=function(){M.postMessage(null)}}else A=function(){y(k,0)};function N(t,n){T=y(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):E=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},e.unstable_requestPaint=function(){v=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},e.unstable_scheduleCallback=function(r,a,o){var s=e.unstable_now();switch(typeof o==`object`&&o?(o=o.delay,o=typeof o==`number`&&0<o?s+o:s):o=s,r){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=o+c,r={id:d++,callback:a,priorityLevel:r,startTime:o,expirationTime:c,sortIndex:-1},o>s?(r.sortIndex=o,t(u,r),n(l)===null&&r===n(u)&&(_?(b(T),T=-1):_=!0,N(C,o-s))):(r.sortIndex=c,t(l,r),g||h||(g=!0,w||(w=!0,A()))),r},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}})),m=s(((e,t)=>{t.exports=f()})),h=s((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),o=typeof t.integrity==`string`?t.integrity:void 0,s=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:s}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:s,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),g=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=s((e=>{var t=m(),n=d(),r=g();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function f(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return u(o),e;if(c===r)return u(o),t;c=c.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=c;else{for(var l=!1,d=o.child;d;){if(d===n){l=!0,n=o,r=c;break}if(d===r){l=!0,r=o,n=c;break}d=d.sibling}if(!l){for(d=c.child;d;){if(d===n){l=!0,n=c,r=o;break}if(d===r){l=!0,r=c,n=o;break}d=d.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,v=Symbol.for(`react.element`),y=Symbol.for(`react.transitional.element`),b=Symbol.for(`react.portal`),x=Symbol.for(`react.fragment`),S=Symbol.for(`react.strict_mode`),C=Symbol.for(`react.profiler`),w=Symbol.for(`react.consumer`),T=Symbol.for(`react.context`),E=Symbol.for(`react.forward_ref`),D=Symbol.for(`react.suspense`),O=Symbol.for(`react.suspense_list`),k=Symbol.for(`react.memo`),A=Symbol.for(`react.lazy`),j=Symbol.for(`react.activity`),M=Symbol.for(`react.memo_cache_sentinel`),N=Symbol.iterator;function ee(e){return typeof e!=`object`||!e?null:(e=N&&e[N]||e[`@@iterator`],typeof e==`function`?e:null)}var te=Symbol.for(`react.client.reference`);function ne(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case x:return`Fragment`;case C:return`Profiler`;case S:return`StrictMode`;case D:return`Suspense`;case O:return`SuspenseList`;case j:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case b:return`Portal`;case T:return e.displayName||`Context`;case w:return(e._context.displayName||`Context`)+`.Consumer`;case E:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case k:return t=e.displayName||null,t===null?ne(e.type)||`Memo`:t;case A:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var re=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],oe=-1;function I(e){return{current:e}}function se(e){0>oe||(e.current=ae[oe],ae[oe]=null,oe--)}function L(e,t){oe++,ae[oe]=e.current,e.current=t}var ce=I(null),le=I(null),ue=I(null),de=I(null);function fe(e,t){switch(L(ue,t),L(le,e),L(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Wd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}se(ce),L(ce,e)}function pe(){se(ce),se(le),se(ue)}function me(e){e.memoizedState!==null&&L(de,e);var t=ce.current,n=Wd(t,e.type);t!==n&&(L(le,e),L(ce,n))}function he(e){le.current===e&&(se(ce),se(le)),de.current===e&&(se(de),ep._currentValue=ie)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var o=r.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var l=s.split(`
`),u=c.split(`
`);for(a=r=0;r<l.length&&!l[r].includes(`DetermineComponentFrameRoot`);)r++;for(;a<u.length&&!u[a].includes(`DetermineComponentFrameRoot`);)a++;if(r===l.length||a===u.length)for(r=l.length-1,a=u.length-1;1<=r&&0<=a&&l[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(l[r]!==u[a]){if(r!==1||a!==1)do if(r--,a--,0>a||l[r]!==u[a]){var d=`
`+l[r].replace(` at new `,` at `);return e.displayName&&d.includes(`<anonymous>`)&&(d=d.replace(`<anonymous>`,e.displayName)),d}while(1<=r&&0<=a);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ve(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,R=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,z=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,B=null,Fe=null;function V(e){if(typeof Ne==`function`&&Pe(e),Fe&&typeof Fe.setStrictMode==`function`)try{Fe.setStrictMode(B,e)}catch{}}var H=Math.clz32?Math.clz32:Re,Ie=Math.log,Le=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(Ie(e)/Le|0)|0}var ze=256,Be=262144,Ve=4194304;function He(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ue(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=r&134217727;return c===0?(c=r&~o,c===0?s===0?n||(n=r&~e,n!==0&&(a=He(n))):a=He(s):a=He(c)):(r=c&~o,r===0?(s&=c,s===0?n||(n=c&~e,n!==0&&(a=He(n))):a=He(s)):a=He(r)),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,n=t&-t,o>=n||o===32&&n&4194048)?t:a}function We(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ge(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ke(){var e=Ve;return Ve<<=1,!(Ve&62914560)&&(Ve=4194304),e}function qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Je(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n,r,a,o){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=s&~n;0<n;){var d=31-H(n),f=1<<d;c[d]=0,l[d]=-1;var m=u[d];if(m!==null)for(u[d]=null,d=0;d<m.length;d++){var h=m[d];h!==null&&(h.lane&=-536870913)}n&=~f}r!==0&&Xe(e,r,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function Xe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-H(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-H(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Qe(e,t){var n=t&-t;return n=n&42?1:$e(n),(n&(e.suspendedLanes|t))===0?n:0}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function nt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var rt=Math.random().toString(36).slice(2),it=`__reactFiber$`+rt,at=`__reactProps$`+rt,ot=`__reactContainer$`+rt,st=`__reactEvents$`+rt,ct=`__reactListeners$`+rt,lt=`__reactHandles$`+rt,ut=`__reactResources$`+rt,dt=`__reactMarker$`+rt;function ft(e){delete e[it],delete e[at],delete e[st],delete e[ct],delete e[lt]}function pt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pf(e);e!==null;){if(n=e[it])return n;e=pf(e)}return t}e=n,n=e.parentNode}return null}function mt(e){if(e=e[it]||e[ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function U(e){var t=e[ut];return t||=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map},t}function W(e){e[dt]=!0}var gt=new Set,_t={};function vt(e,t){yt(e,t),yt(e+`Capture`,t)}function yt(e,t){for(_t[e]=t,e=0;e<t.length;e++)gt.add(t[e])}var bt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),xt={},St={};function Ct(e){return Ce.call(St,e)?!0:Ce.call(xt,e)?!1:bt.test(e)?St[e]=!0:(xt[e]=!0,!1)}function wt(e,t,n){if(Ct(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function G(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Tt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Et(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Dt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ot(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=``+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kt(e){if(!e._valueTracker){var t=Dt(e)?`checked`:`value`;e._valueTracker=Ot(e,t,``+e[t])}}function At(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Dt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function jt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Mt=/[\n"\\]/g;function Nt(e){return e.replace(Mt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Pt(e,t,n,r,a,o,s,c){e.name=``,s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.type=s:e.removeAttribute(`type`),t==null?s!==`submit`&&s!==`reset`||e.removeAttribute(`value`):s===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Et(t)):e.value!==``+Et(t)&&(e.value=``+Et(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):It(e,s,Et(n)):It(e,s,Et(t)),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!=`function`&&typeof a!=`symbol`),c!=null&&typeof c!=`function`&&typeof c!=`symbol`&&typeof c!=`boolean`?e.name=``+Et(c):e.removeAttribute(`name`)}function Ft(e,t,n,r,a,o,s,c){if(o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.type=o),t!=null||n!=null){if(!(o!==`submit`&&o!==`reset`||t!=null)){kt(e);return}n=n==null?``:``+Et(n),t=t==null?n:``+Et(t),c||t===e.value||(e.value=t),e.defaultValue=t}r??=a,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=c?e.checked:!!r,e.defaultChecked=!!r,s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`&&(e.name=s),kt(e)}function It(e,t,n){t===`number`&&jt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Lt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t[`$`+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Et(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Rt(e,t,n){if(t!=null&&(t=``+Et(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Et(n)}function zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(re(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=Et(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),kt(e)}function Bt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Ht(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Vt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ut(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&Ht(e,o,r)}else for(var s in t)t.hasOwnProperty(s)&&Ht(e,s,t[s])}function Wt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Gt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),K=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kt(e){return K.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function q(){}var qt=null;function Jt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var J=null,Yt=null;function Xt(e){var t=mt(e);if(t&&(e=t.stateNode)){var n=e[at]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Pt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Nt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[at]||null;if(!o)throw Error(a(90));Pt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&At(r)}break a;case`textarea`:Rt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Lt(e,!!n.multiple,t,!1)}}}var Zt=!1;function Qt(e,t,n){if(Zt)return e(t,n);Zt=!0;try{return e(t)}finally{if(Zt=!1,(J!==null||Yt!==null)&&(yu(),J&&(t=J,e=Yt,Yt=J=null,Xt(t),e)))for(t=0;t<e.length;t++)Xt(e[t])}}function $t(e,t){var n=e.stateNode;if(n===null)return null;var r=n[at]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var en=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),tn=!1;if(en)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){tn=!0}}),window.addEventListener(`test`,nn,nn),window.removeEventListener(`test`,nn,nn)}catch{tn=!1}var rn=null,an=null,on=null;function sn(){if(on)return on;var e,t=an,n=t.length,r,a=`value`in rn?rn.value:rn.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[o-r];r++);return on=a.slice(e,1<r?1-r:void 0)}function cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ln(){return!0}function un(){return!1}function dn(e){function t(t,n,r,a,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented==null?!1===a.returnValue:a.defaultPrevented)?ln:un,this.isPropagationStopped=un,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=ln)},persist:function(){},isPersistent:ln}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pn=dn(fn),mn=_({},fn,{view:0,detail:0}),hn=dn(mn),gn,_n,vn,yn=_({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:An,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==vn&&(vn&&e.type===`mousemove`?(gn=e.screenX-vn.screenX,_n=e.screenY-vn.screenY):_n=gn=0,vn=e),gn)},movementY:function(e){return`movementY`in e?e.movementY:_n}}),bn=dn(yn),xn=dn(_({},yn,{dataTransfer:0})),Sn=dn(_({},mn,{relatedTarget:0})),Cn=dn(_({},fn,{animationName:0,elapsedTime:0,pseudoElement:0})),wn=dn(_({},fn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Tn=dn(_({},fn,{data:0})),En={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Dn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},On={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=On[e])?!!t[e]:!1}function An(){return kn}var jn=dn(_({},mn,{key:function(e){if(e.key){var t=En[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Dn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:An,charCode:function(e){return e.type===`keypress`?cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Mn=dn(_({},yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=dn(_({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:An})),Pn=dn(_({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=dn(_({},yn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),In=dn(_({},fn,{newState:0,oldState:0})),Ln=[9,13,27,32],Rn=en&&`CompositionEvent`in window,zn=null;en&&`documentMode`in document&&(zn=document.documentMode);var Bn=en&&`TextEvent`in window&&!zn,Vn=en&&(!Rn||zn&&8<zn&&11>=zn),Hn=` `,Un=!1;function Wn(e,t){switch(e){case`keyup`:return Ln.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Gn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Kn=!1;function qn(e,t){switch(e){case`compositionend`:return Gn(t);case`keypress`:return t.which===32?(Un=!0,Hn):null;case`textInput`:return e=t.data,e===Hn&&Un?null:e;default:return null}}function Jn(e,t){if(Kn)return e===`compositionend`||!Rn&&Wn(e,t)?(e=sn(),on=an=rn=null,Kn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Vn&&t.locale!==`ko`?null:t.data;default:return null}}var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Yn[e.type]:t===`textarea`}function Zn(e,t,n,r){J?Yt?Yt.push(r):Yt=[r]:J=r,t=Dd(t,`onChange`),0<t.length&&(n=new pn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Qn=null,$n=null;function er(e){yd(e,0)}function tr(e){if(At(ht(e)))return e}function nr(e,t){if(e===`change`)return t}var rr=!1;if(en){var ir;if(en){var ar=`oninput`in document;if(!ar){var or=document.createElement(`div`);or.setAttribute(`oninput`,`return;`),ar=typeof or.oninput==`function`}ir=ar}else ir=!1;rr=ir&&(!document.documentMode||9<document.documentMode)}function sr(){Qn&&(Qn.detachEvent(`onpropertychange`,cr),$n=Qn=null)}function cr(e){if(e.propertyName===`value`&&tr($n)){var t=[];Zn(t,$n,e,Jt(e)),Qt(er,t)}}function lr(e,t,n){e===`focusin`?(sr(),Qn=t,$n=n,Qn.attachEvent(`onpropertychange`,cr)):e===`focusout`&&sr()}function ur(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return tr($n)}function dr(e,t){if(e===`click`)return tr(t)}function fr(e,t){if(e===`input`||e===`change`)return tr(t)}function pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var mr=typeof Object.is==`function`?Object.is:pr;function hr(e,t){if(mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ce.call(t,a)||!mr(e[a],t[a]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n=gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=gr(n)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=jt(e.document)}return t}function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var xr=en&&`documentMode`in document&&11>=document.documentMode,Sr=null,Cr=null,wr=null,Tr=!1;function Er(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tr||Sr==null||Sr!==jt(r)||(r=Sr,`selectionStart`in r&&br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&hr(wr,r)||(wr=r,r=Dd(Cr,`onSelect`),0<r.length&&(t=new pn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Or={animationend:Dr(`Animation`,`AnimationEnd`),animationiteration:Dr(`Animation`,`AnimationIteration`),animationstart:Dr(`Animation`,`AnimationStart`),transitionrun:Dr(`Transition`,`TransitionRun`),transitionstart:Dr(`Transition`,`TransitionStart`),transitioncancel:Dr(`Transition`,`TransitionCancel`),transitionend:Dr(`Transition`,`TransitionEnd`)},kr={},Ar={};en&&(Ar=document.createElement(`div`).style,`AnimationEvent`in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),`TransitionEvent`in window||delete Or.transitionend.transition);function jr(e){if(kr[e])return kr[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ar)return kr[e]=t[n];return e}var Mr=jr(`animationend`),Nr=jr(`animationiteration`),Pr=jr(`animationstart`),Fr=jr(`transitionrun`),Ir=jr(`transitionstart`),Lr=jr(`transitioncancel`),Rr=jr(`transitionend`),zr=new Map,Br=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Br.push(`scrollEnd`);function Vr(e,t){zr.set(e,t),vt(t,[e])}var Hr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ur=[],Wr=0,Gr=0;function Kr(){for(var e=Wr,t=Gr=Wr=0;t<e;){var n=Ur[t];Ur[t++]=null;var r=Ur[t];Ur[t++]=null;var a=Ur[t];Ur[t++]=null;var o=Ur[t];if(Ur[t++]=null,r!==null&&a!==null){var s=r.pending;s===null?a.next=a:(a.next=s.next,s.next=a),r.pending=a}o!==0&&Xr(n,a,o)}}function qr(e,t,n,r){Ur[Wr++]=e,Ur[Wr++]=t,Ur[Wr++]=n,Ur[Wr++]=r,Gr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var a=!1,o=e.return;o!==null;)o.childLanes|=n,r=o.alternate,r!==null&&(r.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&t!==null&&(a=31-H(n),e=o.hiddenUpdates,r=e[a],r===null?e[a]=[t]:r.push(t),t.lane=n|536870912),o):null}function Zr(e){if(50<uu)throw uu=0,du=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,o,s){var c=0;if(r=e,typeof e==`function`)ti(e)&&(c=1);else if(typeof e==`string`)c=Gf(e,n,ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case j:return e=ei(31,n,t,o),e.elementType=j,e.lanes=s,e;case x:return ai(n.children,o,s,t);case S:c=8,o|=24;break;case C:return e=ei(12,n,t,o|2),e.elementType=C,e.lanes=s,e;case D:return e=ei(13,n,t,o),e.elementType=D,e.lanes=s,e;case O:return e=ei(19,n,t,o),e.elementType=O,e.lanes=s,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case T:c=10;break a;case w:c=9;break a;case E:c=11;break a;case k:c=14;break a;case A:c=16,r=null;break a}c=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=ei(c,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function ai(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function oi(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function si(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ci(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=new WeakMap;function ui(e,t){if(typeof e==`object`&&e){var n=li.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},li.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var di=[],fi=0,pi=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){di[fi++]=mi,di[fi++]=pi,pi=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var a=32-H(r)-1;r&=~(1<<a),n+=1;var o=32-H(t)+a;if(30<o){var s=a-a%5;o=(r&(1<<s)-1).toString(32),r>>=s,a-=s,vi=1<<32-H(t)+a|n<<a|r,yi=o+e}else vi=1<<o|n<<a|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===pi;)pi=di[--fi],di[fi]=null,mi=di[--fi],di[fi]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,Ei=null,Di=!1,Oi=null,ki=!1,Ai=Error(a(519));function ji(e){throw Li(ui(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ai}function Mi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[it]=e,t[at]=r,n){case`dialog`:bd(`cancel`,t),bd(`close`,t);break;case`iframe`:case`object`:case`embed`:bd(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)bd(_d[n],t);break;case`source`:bd(`error`,t);break;case`img`:case`image`:case`link`:bd(`error`,t),bd(`load`,t);break;case`details`:bd(`toggle`,t);break;case`input`:bd(`invalid`,t),Ft(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:bd(`invalid`,t);break;case`textarea`:bd(`invalid`,t),zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(bd(`beforetoggle`,t),bd(`toggle`,t)),r.onScroll!=null&&bd(`scroll`,t),r.onScrollEnd!=null&&bd(`scrollend`,t),r.onClick!=null&&(t.onclick=q),t=!0):t=!1,t||ji(e,!0)}function Ni(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Ti=Ti.return}}function Pi(e){if(e!==Ti)return!1;if(!Di)return Ni(e),Di=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Gd(e.type,e.memoizedProps)),n=!n),n&&Ei&&ji(e),Ni(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));Ei=ff(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));Ei=ff(e)}else t===27?(t=Ei,$d(e.type)?(e=df,df=null,Ei=e):Ei=t):Ei=Ti?uf(e.stateNode.nextSibling):null;return!0}function Fi(){Ei=Ti=null,Di=!1}function Ii(){var e=Oi;return e!==null&&(Xl===null?Xl=e:Xl.push.apply(Xl,e),Oi=null),e}function Li(e){Oi===null?Oi=[e]:Oi.push(e)}var Ri=I(null),zi=null,Bi=null;function Vi(e,t,n){L(Ri,t._currentValue),t._currentValue=n}function Hi(e){e._currentValue=Ri.current,se(Ri)}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Wi(e,t,n,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var c=o.child;s=s.firstContext;a:for(;s!==null;){var l=s;s=o;for(var u=0;u<t.length;u++)if(l.context===t[u]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ui(s.return,n,e),r||(c=null);break a}s=l.next}}else if(o.tag===18){if(c=o.return,c===null)throw Error(a(341));c.lanes|=n,s=c.alternate,s!==null&&(s.lanes|=n),Ui(c,n,e),c=null}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===e){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}}function Gi(e,t,n,r){e=null;for(var o=t,s=!1;o!==null;){if(!s){if(o.flags&524288)s=!0;else if(o.flags&262144)break}if(o.tag===10){var c=o.alternate;if(c===null)throw Error(a(387));if(c=c.memoizedProps,c!==null){var l=o.type;mr(o.pendingProps.value,c.value)||(e===null?e=[l]:e.push(l))}}else if(o===de.current){if(c=o.alternate,c===null)throw Error(a(387));c.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}o=o.return}e!==null&&Wi(t,e,n,r),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qi(e){zi=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ji(e){return Xi(zi,e)}function Yi(e,t){return zi===null&&qi(e),Xi(e,t)}function Xi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bi===null){if(e===null)throw Error(a(308));Bi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bi=Bi.next=t;return n}var Zi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Qi=t.unstable_scheduleCallback,$i=t.unstable_NormalPriority,ea={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ta(){return{controller:new Zi,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&Qi($i,function(){e.controller.abort()})}var ra=null,ia=0,aa=0,oa=null;function sa(e,t){if(ra===null){var n=ra=[];ia=0,aa=dd(),oa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ia++,t.then(ca,ca),t}function ca(){if(--ia===0&&ra!==null){oa!==null&&(oa.status=`fulfilled`);var e=ra;ra=null,aa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function la(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ua=P.S;P.S=function(e,t){$l=De(),typeof t==`object`&&t&&typeof t.then==`function`&&sa(e,t),ua!==null&&ua(e,t)};var da=I(null);function fa(){var e=da.current;return e===null?Fl.pooledCache:e}function pa(e,t){t===null?L(da,da.current):L(da,t.pool)}function ma(){var e=fa();return e===null?null:{parent:ea._currentValue,pool:e}}var ha=Error(a(460)),ga=Error(a(474)),_a=Error(a(542)),va={then:function(){}};function ya(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ba(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(q,q),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e;default:if(typeof t.status==`string`)t.then(q,q);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e}throw Sa=t,ha}}function xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Sa=e,ha):e}}var Sa=null;function Ca(){if(Sa===null)throw Error(a(459));var e=Sa;return Sa=null,e}function wa(e){if(e===ha||e===_a)throw Error(a(483))}var Ta=null,Ea=0;function Da(e){var t=Ea;return Ea+=1,Ta===null&&(Ta=[]),ba(Ta,e,t)}function Oa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ka(e,t){throw t.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Aa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function o(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function c(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function l(e,t,n,r){return t===null||t.tag!==6?(t=oi(n,e.mode,r),t.return=e,t):(t=o(t,n),t.return=e,t)}function u(e,t,n,r){var a=n.type;return a===x?f(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===A&&xa(a)===t.type)?(t=o(t,n.props),Oa(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Oa(t,n),t.return=e,t)}function d(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ci(n,e.mode,r),t.return=e,t):(t=o(t,n.children||[]),t.return=e,t)}function f(e,t,n,r,a){return t===null||t.tag!==7?(t=ai(n,e.mode,r,a),t.return=e,t):(t=o(t,n),t.return=e,t)}function m(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case y:return n=ii(t.type,t.key,t.props,null,e.mode,n),Oa(n,t),n.return=e,n;case b:return t=ci(t,e.mode,n),t.return=e,t;case A:return t=xa(t),m(e,t,n)}if(re(t)||ee(t))return t=ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return m(e,Da(t),n);if(t.$$typeof===T)return m(e,Yi(e,t),n);ka(e,t)}return null}function h(e,t,n,r){var a=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return a===null?l(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case y:return n.key===a?u(e,t,n,r):null;case b:return n.key===a?d(e,t,n,r):null;case A:return n=xa(n),h(e,t,n,r)}if(re(n)||ee(n))return a===null?f(e,t,n,r,null):null;if(typeof n.then==`function`)return h(e,t,Da(n),r);if(n.$$typeof===T)return h(e,t,Yi(e,n),r);ka(e,n)}return null}function g(e,t,n,r,a){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,l(t,e,``+r,a);if(typeof r==`object`&&r){switch(r.$$typeof){case y:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,a);case b:return e=e.get(r.key===null?n:r.key)||null,d(t,e,r,a);case A:return r=xa(r),g(e,t,n,r,a)}if(re(r)||ee(r))return e=e.get(n)||null,f(t,e,r,a,null);if(typeof r.then==`function`)return g(e,t,n,Da(r),a);if(r.$$typeof===T)return g(e,t,n,Yi(t,r),a);ka(t,r)}return null}function _(a,o,c,l){for(var u=null,d=null,f=o,_=o=0,v=null;f!==null&&_<c.length;_++){f.index>_?(v=f,f=null):v=f.sibling;var y=h(a,f,c[_],l);if(y===null){f===null&&(f=v);break}e&&f&&y.alternate===null&&t(a,f),o=s(y,o,_),d===null?u=y:d.sibling=y,d=y,f=v}if(_===c.length)return n(a,f),Di&&bi(a,_),u;if(f===null){for(;_<c.length;_++)f=m(a,c[_],l),f!==null&&(o=s(f,o,_),d===null?u=f:d.sibling=f,d=f);return Di&&bi(a,_),u}for(f=r(f);_<c.length;_++)v=g(f,a,_,c[_],l),v!==null&&(e&&v.alternate!==null&&f.delete(v.key===null?_:v.key),o=s(v,o,_),d===null?u=v:d.sibling=v,d=v);return e&&f.forEach(function(e){return t(a,e)}),Di&&bi(a,_),u}function v(o,c,l,u){if(l==null)throw Error(a(151));for(var d=null,f=null,_=c,v=c=0,y=null,b=l.next();_!==null&&!b.done;v++,b=l.next()){_.index>v?(y=_,_=null):y=_.sibling;var x=h(o,_,b.value,u);if(x===null){_===null&&(_=y);break}e&&_&&x.alternate===null&&t(o,_),c=s(x,c,v),f===null?d=x:f.sibling=x,f=x,_=y}if(b.done)return n(o,_),Di&&bi(o,v),d;if(_===null){for(;!b.done;v++,b=l.next())b=m(o,b.value,u),b!==null&&(c=s(b,c,v),f===null?d=b:f.sibling=b,f=b);return Di&&bi(o,v),d}for(_=r(_);!b.done;v++,b=l.next())b=g(_,o,v,b.value,u),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?v:b.key),c=s(b,c,v),f===null?d=b:f.sibling=b,f=b);return e&&_.forEach(function(e){return t(o,e)}),Di&&bi(o,v),d}function S(e,r,s,l){if(typeof s==`object`&&s&&s.type===x&&s.key===null&&(s=s.props.children),typeof s==`object`&&s){switch(s.$$typeof){case y:a:{for(var u=s.key;r!==null;){if(r.key===u){if(u=s.type,u===x){if(r.tag===7){n(e,r.sibling),l=o(r,s.props.children),l.return=e,e=l;break a}}else if(r.elementType===u||typeof u==`object`&&u&&u.$$typeof===A&&xa(u)===r.type){n(e,r.sibling),l=o(r,s.props),Oa(l,s),l.return=e,e=l;break a}n(e,r);break}t(e,r),r=r.sibling}s.type===x?(l=ai(s.props.children,e.mode,l,s.key),l.return=e,e=l):(l=ii(s.type,s.key,s.props,null,e.mode,l),Oa(l,s),l.return=e,e=l)}return c(e);case b:a:{for(u=s.key;r!==null;){if(r.key===u){if(r.tag===4&&r.stateNode.containerInfo===s.containerInfo&&r.stateNode.implementation===s.implementation){n(e,r.sibling),l=o(r,s.children||[]),l.return=e,e=l;break a}n(e,r);break}t(e,r),r=r.sibling}l=ci(s,e.mode,l),l.return=e,e=l}return c(e);case A:return s=xa(s),S(e,r,s,l)}if(re(s))return _(e,r,s,l);if(ee(s)){if(u=ee(s),typeof u!=`function`)throw Error(a(150));return s=u.call(s),v(e,r,s,l)}if(typeof s.then==`function`)return S(e,r,Da(s),l);if(s.$$typeof===T)return S(e,r,Yi(e,s),l);ka(e,s)}return typeof s==`string`&&s!==``||typeof s==`number`||typeof s==`bigint`?(s=``+s,r!==null&&r.tag===6?(n(e,r.sibling),l=o(r,s),l.return=e,e=l):(n(e,r),l=oi(s,e.mode,l),l.return=e,e=l),c(e)):n(e,r)}return function(e,t,n,r){try{Ea=0;var a=S(e,t,n,r);return Ta=null,a}catch(t){if(t===ha||t===_a)throw t;var o=ei(29,t,null,e.mode);return o.lanes=r,o.return=e,o}}}var ja=Aa(!0),Ma=Aa(!1),Na=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?a=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ba=!1;function Va(){if(Ba){var e=oa;if(e!==null)throw e}}function Ha(e,t,n,r){Ba=!1;var a=e.updateQueue;Na=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==s&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=a.baseState;s=0,d=u=l=null,c=o;do{var m=c.lane&-536870913,h=m!==c.lane;if(h?(Ll&m)===m:(r&m)===m){m!==0&&m===aa&&(Ba=!0),d!==null&&(d=d.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});a:{var g=e,v=c;m=t;var y=n;switch(v.tag){case 1:if(g=v.payload,typeof g==`function`){f=g.call(y,f,m);break a}f=g;break a;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g==`function`?g.call(y,f,m):g,m==null)break a;f=_({},f,m);break a;case 2:Na=!0}}m=c.callback,m!==null&&(e.flags|=64,h&&(e.flags|=8192),h=a.callbacks,h===null?a.callbacks=[m]:h.push(m))}else h={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,s|=m;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;h=c,c=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,o===null&&(a.shared.lanes=0),Gl|=s,e.lanes=s,e.memoizedState=f}}function Ua(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function Wa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ua(n[e],t)}var Ga=I(null),Ka=I(0);function qa(e,t){e=Ul,L(Ka,e),L(Ga,t),Ul=e|t.baseLanes}function Ja(){L(Ka,Ul),L(Ga,Ga.current)}function Ya(){Ul=Ka.current,se(Ga),se(Ka)}var Xa=I(null),Za=null;function Qa(e){var t=e.alternate;L(ro,ro.current&1),L(Xa,e),Za===null&&(t===null||Ga.current!==null||t.memoizedState!==null)&&(Za=e)}function $a(e){L(ro,ro.current),L(Xa,e),Za===null&&(Za=e)}function eo(e){e.tag===22?(L(ro,ro.current),L(Xa,e),Za===null&&(Za=e)):to(e)}function to(){L(ro,ro.current),L(Xa,Xa.current)}function no(e){se(Xa),Za===e&&(Za=null),se(ro)}var ro=I(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=0,Y=null,oo=null,so=null,co=!1,lo=!1,uo=!1,fo=0,X=0,Z=null,po=0;function mo(){throw Error(a(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){return ao=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Ns:Ps,uo=!1,o=n(r,a),uo=!1,lo&&(o=vo(t,n,r,a)),_o(e),o}function _o(e){P.H=Ms;var t=oo!==null&&oo.next!==null;if(ao=0,so=oo=Y=null,co=!1,X=0,Z=null,t)throw Error(a(300));e===null||Zs||(e=e.dependencies,e!==null&&Ki(e)&&(Zs=!0))}function vo(e,t,n,r){Y=e;var o=0;do{if(lo&&(Z=null),X=0,lo=!1,25<=o)throw Error(a(301));if(o+=1,so=oo=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}P.H=Fs,s=t(n,r)}while(lo);return s}function yo(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(oo===null?null:oo.memoizedState)!==e&&(Y.flags|=1024),t}function bo(){var e=fo!==0;return fo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(co){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}co=!1}ao=0,so=oo=Y=null,lo=!1,X=fo=0,Z=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return so===null?Y.memoizedState=so=e:so=so.next=e,so}function wo(){if(oo===null){var e=Y.alternate;e=e===null?null:e.memoizedState}else e=oo.next;var t=so===null?Y.memoizedState:so.next;if(t!==null)so=t,oo=e;else{if(e===null)throw Y.alternate===null?Error(a(467)):Error(a(310));oo=e,e={memoizedState:oo.memoizedState,baseState:oo.baseState,baseQueue:oo.baseQueue,queue:oo.queue,next:null},so===null?Y.memoizedState=so=e:so=so.next=e}return so}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=X;return X+=1,Z===null&&(Z=[]),e=ba(Z,e,t),t=Y,(so===null?t.memoizedState:so.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===T)return Ji(e)}throw Error(a(438,String(e)))}function Oo(e){var t=null,n=Y.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Y.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),Y.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=M;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),oo,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,s=r.pending;if(s!==null){if(o!==null){var c=o.next;o.next=s.next,s.next=c}t.baseQueue=o=s,r.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var l=c=null,u=null,d=t,f=!1;do{var m=d.lane&-536870913;if(m===d.lane?(ao&m)===m:(Ll&m)===m){var h=d.revertLane;if(h===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),m===aa&&(f=!0);else if((ao&h)===h){d=d.next,h===aa&&(f=!0);continue}else m={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(l=u=m,c=s):u=u.next=m,Y.lanes|=h,Gl|=h;m=d.action,uo&&n(s,m),s=d.hasEagerState?d.eagerState:n(s,m)}else h={lane:m,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(l=u=h,c=s):u=u.next=h,Y.lanes|=m,Gl|=m;d=d.next}while(d!==null&&d!==t);if(u===null?c=s:u.next=l,!mr(s,e.memoizedState)&&(Zs=!0,f&&(n=oa,n!==null)))throw n;e.memoizedState=s,e.baseState=c,e.baseQueue=u,r.lastRenderedState=s}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var c=o=o.next;do s=e(s,c.action),c=c.next;while(c!==o);mr(s,t.memoizedState)||(Zs=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function No(e,t,n){var r=Y,o=wo(),s=Di;if(s){if(n===void 0)throw Error(a(407));n=n()}else n=t();var c=!mr((oo||o).memoizedState,n);if(c&&(o.memoizedState=n,Zs=!0),o=o.queue,is(Io.bind(null,r,o,e),[e]),o.getSnapshot!==t||c||so!==null&&so.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,o,n,t),null),Fl===null)throw Error(a(349));s||ao&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=To(),Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mr(e,n)}catch{return!0}}function Ro(e){var t=Yr(e,2);t!==null&&mu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),uo){V(!0);try{n()}finally{V(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,oo,typeof r==`function`?r:ko)}function Vo(e,t,n,r,o){if(ks(e))throw Error(a(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){s.listeners.push(e)}};P.T===null?s.isTransition=!1:n(!0),r(s),n=t.pending,n===null?(s.next=t.pending=s,Ho(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Ho(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=P.T,s={};P.T=s;try{var c=n(a,r),l=P.S;l!==null&&l(s,c),Uo(e,t,c)}catch(n){Go(e,t,n)}finally{o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}else try{o=n(a,r),Uo(e,t,o)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(Di){var n=Fl.formState;if(n!==null){a:{var r=Y;if(Di){if(Ei){b:{for(var a=Ei,o=ki;a.nodeType!==8;){if(!o){a=null;break b}if(a=uf(a.nextSibling),a===null){a=null;break b}}o=a.data,a=o===`F!`||o===`F`?a:null}if(a){Ei=uf(a.nextSibling),r=a.data===`F!`;break a}}ji(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,Y,r),r.dispatch=n,r=zo(!1),o=Os.bind(null,Y,!1,r.queue),r=Co(),a={state:t,dispatch:null,action:e,pending:null},r.queue=a,n=Vo.bind(null,Y,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),oo,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===ha?_a:e}else r=t;t=wo();var a=t.queue,o=a.dispatch;return n!==t.memoizedState&&(Y.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,a,n),null)),[r,o,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=oo;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Y.updateQueue,t===null&&(t=To(),Y.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var a=Co();Y.flags|=e,a.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var a=wo();r=r===void 0?null:r;var o=a.memoizedState.inst;oo!==null&&r!==null&&ho(r,oo.memoizedState.deps)?a.memoizedState=$o(t,o,n,r):(Y.flags|=e,a.memoizedState=$o(1|t,o,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=To(),Y.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(Q&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),uo){V(!0);try{e()}finally{V(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||ao&1073741824&&!(Ll&261930)?e.memoizedState=t:(e.memoizedState=n,e=pu(),Y.lanes|=e,Gl|=e,n)}function hs(e,t,n,r){return mr(n,t)?n:Ga.current===null?!(ao&42)||ao&1073741824&&!(Ll&261930)?(Zs=!0,e.memoizedState=n):(e=pu(),Y.lanes|=e,Gl|=e,t):(e=ms(e,n,r),mr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,a){var o=F.p;F.p=o!==0&&8>o?o:8;var s=P.T,c={};P.T=c,Os(e,!1,t,n);try{var l=a(),u=P.S;u!==null&&u(c,l),typeof l==`object`&&l&&typeof l.then==`function`?Ds(e,t,la(l,r),fu(e)):Ds(e,t,r,fu(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},fu())}finally{F.p=o,s!==null&&c.types!==null&&(s.types=c.types),P.T=s}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(a(476));var o=ys(e).queue;gs(e,o,t,ie,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},fu())}function xs(){return Ji(ep)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fu();e=Ia(n);var r=La(t,e,n);r!==null&&(mu(r,t,n),Ra(r,t,n)),t={cache:ta()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=fu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=Jr(e,t,n,r),n!==null&&(mu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,fu())}function Ds(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(a.hasEagerState=!0,a.eagerState=c,mr(c,s))return qr(e,t,a,0),Fl===null&&Kr(),!1}catch{}if(n=Jr(e,t,a,r),n!==null)return mu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(a(479))}else t=Jr(e,n,r,2),t!==null&&mu(t,e,2)}function ks(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function As(e,t){lo=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}var Ms={readContext:Ji,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:Ji,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:Ji,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(uo){V(!0);try{e()}finally{V(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var a=n(t);if(uo){V(!0);try{n(t)}finally{V(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Ts.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,Y,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,Y,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Y,o=Co();if(Di){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Fl===null)throw Error(a(349));Ll&127||Po(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,rs(Io.bind(null,r,s,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,s,n,t),null),n},useId:function(){var e=Co(),t=Fl.identifierPrefix;if(Di){var n=yi,r=vi;n=(r&~(1<<32-H(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=fo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,Y,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,Y)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(Q&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:Ji,use:Do,useCallback:fs,useContext:Ji,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),oo.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),oo,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:Ji,use:Do,useCallback:fs,useContext:Ji,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return oo===null?ms(n,e,t):hs(n,oo.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return oo===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,oo,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),a=Ia(r);a.payload=t,n!=null&&(a.callback=n),t=La(e,a,r),t!==null&&(mu(t,e,r),Ra(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),a=Ia(r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=La(e,a,r),t!==null&&(mu(t,e,r),Ra(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=Ia(n);r.tag=2,t!=null&&(r.callback=t),t=La(e,r,n),t!==null&&(mu(t,e,n),Ra(t,e,n))}};function Rs(e,t,n,r,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(a,o):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=_({},n)),e)n[a]===void 0&&(n[a]=e[a]);return n}function Vs(e){Hr(e)}function Hs(e){console.error(e)}function Us(e){Hr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Ia(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Ia(e),e.tag=3,e}function Js(e,t,n,r){var a=n.type.getDerivedStateFromError;if(typeof a==`function`){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Gs(t,n,r)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof a!=`function`&&(nu===null?nu=new Set([this]):nu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,o){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Gi(t,n,o,!0),n=Xa.current,n!==null){switch(n.tag){case 31:case 13:return Za===null?Eu():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===va?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,o)),!1;case 22:return n.flags|=65536,r===va?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,o)),!1}throw Error(a(435,n.tag))}return Gu(e,r,o),Eu(),!1}if(Di)return t=Xa.current,t===null?(r!==Ai&&(t=Error(a(423),{cause:r}),Li(ui(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=ui(r,n),o=Ks(e.stateNode,r,o),za(e,o),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==Ai&&(e=Error(a(422),{cause:r}),Li(ui(e,n)))),!1;var s=Error(a(520),{cause:r});if(s=ui(s,n),$===null?$=[s]:$.push(s),Wl!==4&&(Wl=2),t===null)return!0;r=ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Ks(n.stateNode,r,e),za(n,e),!1;case 1:if(t=n.type,s=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||s!==null&&typeof s.componentDidCatch==`function`&&(nu===null||!nu.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=qs(o),Js(o,e,n,r),za(n,o),!1}n=n.return}while(n!==null);return!1}var Xs=Error(a(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Ma(t,null,n,r):ja(t,e.child,n,r)}function $s(e,t,n,r,a){n=n.render;var o=t.ref;if(`ref`in r){var s={};for(var c in r)c!==`ref`&&(s[c]=r[c])}else s=r;return qi(t),r=go(e,t,n,s,o,a),c=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(Di&&c&&Si(t),t.flags|=1,Qs(e,t,r,a),t.child)}function ec(e,t,n,r,a){if(e===null){var o=n.type;return typeof o==`function`&&!ti(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,tc(e,t,o,r,a)):(e=ii(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!wc(e,a)){var s=o.memoizedProps;if(n=n.compare,n=n===null?hr:n,n(s,r)&&e.ref===t.ref)return Cc(e,t,a)}return t.flags|=1,e=ni(o,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(hr(o,r)&&e.ref===t.ref){if(Zs=!1,t.pendingProps=r=o,wc(e,a))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,a)}}return lc(e,t,n,r,a)}function nc(e,t,n,r){var a=r.children,o=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(o=o===null?n:o.baseLanes|n,e!==null){for(r=t.child=e.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return ic(e,t,o,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pa(t,o===null?null:o.cachePool),o===null?Ja():qa(t,o),eo(t);else return r=t.lanes=536870912,ic(e,t,o===null?n:o.baseLanes|n,n,r)}else o===null?(e!==null&&pa(t,null),Ja(),to(t)):(pa(t,o.cachePool),qa(t,o),to(t),t.memoizedState=null);return Qs(e,t,a,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,a){var o=fa();return o=o===null?null:{parent:ea._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&pa(t,null),Ja(),eo(t),e!==null&&Gi(e,t,r,!0),t.childLanes=a,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return ja(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,no(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,o=!!(t.flags&128);if(t.flags&=-129,e===null){if(Di){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if($a(t),(e=Ei)?(e=of(e,ki),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw ji(t);return t.lanes=536870912,null}return ac(t,r)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if($a(t),o){if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558))}else if(Zs||Gi(e,t,n,!1),o=(n&e.childLanes)!==0,Zs||o){if(r=Fl,r!==null&&(c=Qe(r,n),c!==0&&c!==s.retryLane))throw s.retryLane=c,Yr(e,c),mu(r,e,c),Xs;Eu(),t=oc(e,t,n)}else e=s.treeContext,Ei=uf(c.nextSibling),Ti=t,Di=!0,Oi=null,ki=!1,e!==null&&wi(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,a){return qi(t),n=go(e,t,n,r,void 0,a),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(Di&&r&&Si(t),t.flags|=1,Qs(e,t,n,a),t.child)}function uc(e,t,n,r,a,o){return qi(t),t.updateQueue=null,n=vo(t,r,n,a),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,o),Cc(e,t,o)):(Di&&r&&Si(t),t.flags|=1,Qs(e,t,n,o),t.child)}function dc(e,t,n,r,a){if(qi(t),t.stateNode===null){var o=Qr,s=n.contextType;typeof s==`object`&&s&&(o=Ji(s)),o=new n(r,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ls,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=r,o.state=t.memoizedState,o.refs={},Pa(t),s=n.contextType,o.context=typeof s==`object`&&s?Ji(s):Qr,o.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s==`function`&&(Is(t,n,s,r),o.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof o.getSnapshotBeforeUpdate==`function`||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(s=o.state,typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount(),s!==o.state&&Ls.enqueueReplaceState(o,o.state,null),Ha(t,r,o,a),Va(),o.state=t.memoizedState),typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){o=t.stateNode;var c=t.memoizedProps,l=Bs(n,c);o.props=l;var u=o.context,d=n.contextType;s=Qr,typeof d==`object`&&d&&(s=Ji(d));var f=n.getDerivedStateFromProps;d=typeof f==`function`||typeof o.getSnapshotBeforeUpdate==`function`,c=t.pendingProps!==c,d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(c||u!==s)&&zs(t,o,r,s),Na=!1;var m=t.memoizedState;o.state=m,Ha(t,r,o,a),Va(),u=t.memoizedState,c||m!==u||Na?(typeof f==`function`&&(Is(t,n,f,r),u=t.memoizedState),(l=Na||Rs(t,n,l,r,m,u,s))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=s,r=l):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fa(e,t),s=t.memoizedProps,d=Bs(n,s),o.props=d,f=t.pendingProps,m=o.context,u=n.contextType,l=Qr,typeof u==`object`&&u&&(l=Ji(u)),c=n.getDerivedStateFromProps,(u=typeof c==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==f||m!==l)&&zs(t,o,r,l),Na=!1,m=t.memoizedState,o.state=m,Ha(t,r,o,a),Va();var h=t.memoizedState;s!==f||m!==h||Na||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof c==`function`&&(Is(t,n,c,r),h=t.memoizedState),(d=Na||Rs(t,n,d,r,m,h,l)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,h,l),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,h,l)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=d):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,cc(e,t),r=!!(t.flags&128),o||r?(o=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:o.render(),t.flags|=1,e!==null&&r?(t.child=ja(t,e.child,null,a),t.child=ja(t,null,n,a)):Qs(e,t,n,a),t.memoizedState=o.state,e=t.child):e=Cc(e,t,a),e}function fc(e,t,n,r){return Fi(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:ma()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function gc(e,t,n){var r=t.pendingProps,o=!1,s=!!(t.flags&128),c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:!!(ro.current&2)),c&&(o=!0,t.flags&=-129),c=!!(t.flags&32),t.flags&=-33,e===null){if(Di){if(o?Qa(t):to(t),(e=Ei)?(e=of(e,ki),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw ji(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var l=r.children;return r=r.fallback,o?(to(t),o=t.mode,l=vc({mode:`hidden`,children:l},o),r=ai(r,o,n,null),l.return=t,r.return=t,l.sibling=r,t.child=l,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,c,n),t.memoizedState=pc,rc(null,r)):(Qa(t),_c(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(s)t.flags&256?(Qa(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?(to(t),l=r.fallback,o=t.mode,r=vc({mode:`visible`,children:r.children},o),l=ai(l,o,n,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,ja(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,c,n),t.memoizedState=pc,t=rc(null,r)):(to(t),t.child=e.child,t.flags|=128,t=null);else if(Qa(t),cf(l)){if(c=l.nextSibling&&l.nextSibling.dataset,c)var d=c.dgst;c=d,r=Error(a(419)),r.stack=``,r.digest=c,Li({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Gi(e,t,n,!1),c=(n&e.childLanes)!==0,Zs||c){if(c=Fl,c!==null&&(r=Qe(c,n),r!==0&&r!==u.retryLane))throw u.retryLane=r,Yr(e,r),mu(c,e,r),Xs;sf(l)||Eu(),t=yc(e,t,n)}else sf(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,Ei=uf(l.nextSibling),Ti=t,Di=!0,Oi=null,ki=!1,e!==null&&wi(t,e),t=_c(t,r.children),t.flags|=4096);return t}return o?(to(t),l=r.fallback,o=t.mode,u=e.child,d=u.sibling,r=ni(u,{mode:`hidden`,children:r.children}),r.subtreeFlags=u.subtreeFlags&65011712,d===null?(l=ai(l,o,n,null),l.flags|=2):l=ni(d,l),l.return=t,r.return=t,r.sibling=l,t.child=r,rc(null,r),r=t.child,l=e.child.memoizedState,l===null?l=mc(n):(o=l.cachePool,o===null?o=ma():(u=ea._currentValue,o=o.parent===u?o:{parent:u,pool:u}),l={baseLanes:l.baseLanes|n,cachePool:o}),r.memoizedState=l,r.childLanes=hc(e,c,n),t.memoizedState=pc,rc(e.child,r)):(Qa(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return ja(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function xc(e,t,n,r,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a,s.treeForkCount=o)}function Sc(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var s=ro.current,c=!!(s&2);if(c?(s=s&1|2,t.flags|=128):s&=1,L(ro,s),Qs(e,t,r,n),r=Di?mi:0,!c&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case`forwards`:for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xc(t,!1,a,n,o,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&io(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xc(t,!0,n,null,o,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Gi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ki(e)))}function Tc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Vi(t,ea,e.memoizedState.cache),Fi();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Vi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$a(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Qa(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Qa(t),t.flags|=128,null);Qa(t);break;case 19:var a=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Gi(e,t,n,!1),(n&t.childLanes)!==0),a){if(r)return Sc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(ro,ro.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:Vi(t,ea,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}}else Zs=!1,Di&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=xa(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var o=e.$$typeof;if(o===E){t.tag=11,t=$s(null,t,e,r,n);break a}if(o===k){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=ne(e)||e,Error(a(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,o=Bs(r,t.pendingProps),dc(e,t,r,o,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var s=t.memoizedState;o=s.element,Fa(e,t),Ha(t,r,null,n);var c=t.memoizedState;if(r=c.cache,Vi(t,ea,r),r!==s.cache&&Wi(t,[ea],n,!0),Va(),r=c.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=fc(e,t,r,n);break a}if(r!==o){o=ui(Error(a(424)),t),Li(o),t=fc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ei=uf(e.firstChild),Ti=t,Di=!0,Oi=null,ki=!0,n=Ma(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fi(),r===o){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Di||(n=t.type,e=t.pendingProps,r=Hd(ue.current).createElement(n),r[it]=t,r[at]=e,Id(r,n,e),W(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&Di&&(r=t.stateNode=mf(t.type,t.pendingProps,ue.current),Ti=t,ki=!0,o=Ei,$d(t.type)?(df=o,Ei=uf(r.firstChild)):Ei=o),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Di&&((o=r=Ei)&&(r=rf(r,t.type,t.pendingProps,ki),r===null?o=!1:(t.stateNode=r,Ti=t,Ei=uf(r.firstChild),ki=!1,o=!0)),o||ji(t)),me(t),o=t.type,s=t.pendingProps,c=e===null?null:e.memoizedProps,r=s.children,Gd(o,s)?r=null:c!==null&&Gd(o,c)&&(t.flags|=32),t.memoizedState!==null&&(o=go(e,t,yo,null,null,n),ep._currentValue=o),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&Di&&((e=n=Ei)&&(n=af(n,t.pendingProps,ki),n===null?e=!1:(t.stateNode=n,Ti=t,Ei=null,e=!0)),e||ji(t)),null;case 13:return gc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ja(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Vi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,qi(t),o=Ji(o),r=r(o),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return qi(t),r=Ji(ea),e===null?(o=fa(),o===null&&(o=Fl,s=ta(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:r,cache:o},Pa(t),Vi(t,ea,o)):((e.lanes&n)!==0&&(Fa(e,t),Ha(t,null,null,n),Va()),o=e.memoizedState,s=t.memoizedState,o.parent===r?(r=s.cache,Vi(t,ea,r),r!==o.cache&&Wi(t,[ea],n,!0)):(o={parent:r,cache:r},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Vi(t,ea,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,a){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a){if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw Sa=va,ga}}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t)){if(Cu())e.flags|=8192;else throw Sa=va,ga}}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ke(),e.lanes|=t,Yl|=t)}function jc(e,t){if(!Di)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Hi(ea),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ii())),Mc(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(Dc(t),s===null?(Mc(t),Oc(t,o,null,r,n)):(Mc(t),kc(t,s))):s?s===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,s)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,o,e,r,n)),null;case 27:if(he(t),n=ue.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Mc(t),null}e=ce.current,Pi(t)?Mi(t,e):(e=mf(o,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(he(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Mc(t),null}if(s=ce.current,Pi(t))Mi(t,s);else{var c=Hd(ue.current);switch(s){case 1:s=c.createElementNS(`http://www.w3.org/2000/svg`,o);break;case 2:s=c.createElementNS(`http://www.w3.org/1998/Math/MathML`,o);break;default:switch(o){case`svg`:s=c.createElementNS(`http://www.w3.org/2000/svg`,o);break;case`math`:s=c.createElementNS(`http://www.w3.org/1998/Math/MathML`,o);break;case`script`:s=c.createElement(`div`),s.innerHTML=`<script><\/script>`,s=s.removeChild(s.firstChild);break;case`select`:s=typeof r.is==`string`?c.createElement(`select`,{is:r.is}):c.createElement(`select`),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is==`string`?c.createElement(o,{is:r.is}):c.createElement(o)}}s[it]=t,s[at]=r;a:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break a;for(;c.sibling===null;){if(c.return===null||c.return===t)break a;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;a:switch(Id(s,o,r),o){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=ue.current,Pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,o=Ti,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||ji(t,!0)}else e=Hd(e).createTextNode(r),e[it]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Pi(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[it]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(no(t),t):(no(t),null);if(t.flags&128)throw Error(a(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=t.memoizedState,o=o===null?null:o.dehydrated,!o)throw Error(a(317));o[it]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),o=!1}else o=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(no(t),t):(no(t),null)}return no(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==o&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return pe(),e===null&&Cd(t.stateNode.containerInfo),Mc(t),null;case 10:return Hi(t.type),Mc(t),null;case 19:if(se(ro),r=t.memoizedState,r===null)return Mc(t),null;if(o=!!(t.flags&128),s=r.rendering,s===null){if(o)jc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=io(e),s!==null){for(t.flags|=128,jc(r,!1),e=s.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return L(ro,ro.current&1|2),Di&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>eu&&(t.flags|=128,o=!0,jc(r,!1),t.lanes=4194304)}}else{if(!o){if(e=io(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!s.alternate&&!Di)return Mc(t),null}else 2*De()-r.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,o=!0,jc(r,!1),t.lanes=4194304)}r.isBackwards?(s.sibling=t.child,t.child=s):(e=r.last,e===null?t.child=s:e.sibling=s,r.last=s)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=ro.current,L(ro,o?n&1|2:n&1),Di&&bi(t,r.treeForkCount),e);case 22:case 23:return no(t),Ya(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(da),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Hi(ea),Mc(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function Pc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hi(ea),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if(no(t),t.alternate===null)throw Error(a(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(no(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ro),null;case 4:return pe(),null;case 10:return Hi(t.type),null;case 22:case 23:return no(t),Ya(),e!==null&&se(da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Hi(ea),null;case 25:return null;default:return null}}function Fc(e,t){switch(Ci(t),t.tag){case 3:Hi(ea),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&no(t);break;case 13:no(t);break;case 19:se(ro);break;case 10:Hi(t.type);break;case 22:case 23:no(t),Ya(),e!==null&&se(da);break;case 24:Hi(ea)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,s=n.inst;r=o(),s.destroy=r}n=n.next}while(n!==a)}}catch(e){Wu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,a=r===null?null:r.lastEffect;if(a!==null){var o=a.next;r=o;do{if((r.tag&e)===e){var s=r.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,a=t;var l=n,u=c;try{u()}catch(e){Wu(a,l,e)}}}r=r.next}while(r!==o)}}catch(e){Wu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wa(t,n)}catch(t){Wu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Wu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Wu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Wu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Wu(e,t,n)}else n.current=null}}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Wu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Ld(r,e.type,n,t),r[at]=t}catch(t){Wu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$d(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$d(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=q));else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Id(t,r,n),t[it]=e,t[at]=n}catch(t){Wu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,Bd=lp,e=yr(e),br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break a}var c=0,l=-1,u=-1,d=0,f=0,m=e,h=null;b:for(;;){for(var g;m!==n||o!==0&&m.nodeType!==3||(l=c+o),m!==s||r!==0&&m.nodeType!==3||(u=c+r),m.nodeType===3&&(c+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break b;if(h===n&&++d===o&&(l=c),h===s&&++f===r&&(u=c),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},lp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var _=Bs(n.type,o);e=r.getSnapshotBeforeUpdate(_,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Wu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:nf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Wu(n,n.return,e)}else{var a=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Wu(n,n.return,e)}}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wa(e,t)}catch(e){Wu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),lf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,a=Yc;var o=Xc;Yc=r,(Xc=t)&&!o?vl(e,n,!!(n.subtreeFlags&8772)):gl(e,n),Yc=a,Xc=o}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount==`function`)try{Fe.onCommitFiberUnmount(B,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,a=il;$d(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),hf(n.stateNode),rl=r,il=a;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,a=il,rl=null,al(e,t,n),rl=r,il=a,rl!==null){if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Wu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Wu(n,t,e)}}break;case 18:rl!==null&&(il?(e=rl,ef(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):ef(rl,n.stateNode));break;case 4:r=rl,a=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=a;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){Wu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){Wu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(a(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if($d(l.type)){rl=l.stateNode,il=!1;break a}break;case 5:rl=l.stateNode,il=!1;break a;case 3:case 4:rl=l.stateNode.containerInfo,il=!0;break a}l=l.return}if(rl===null)throw Error(a(160));ol(s,c,o),rl=null,il=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var o=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var s=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;b:switch(r){case`title`:s=o.getElementsByTagName(`title`)[0],(!s||s[dt]||s[it]||s.namespaceURI===`http://www.w3.org/2000/svg`||s.hasAttribute(`itemprop`))&&(s=o.createElement(r),o.head.insertBefore(s,o.querySelector(`head > title`))),Id(s,r,n),s[it]=e,W(s),r=s;break a;case`link`:var c=Uf(`link`,`href`,o).get(r+(n.href||``));if(c){for(var l=0;l<c.length;l++)if(s=c[l],s.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&s.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&s.getAttribute(`title`)===(n.title==null?null:n.title)&&s.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(l,1);break b}}s=o.createElement(r),Id(s,r,n),o.head.appendChild(s);break;case`meta`:if(c=Uf(`meta`,`content`,o).get(r+(n.content||``))){for(l=0;l<c.length;l++)if(s=c[l],s.getAttribute(`content`)===(n.content==null?null:``+n.content)&&s.getAttribute(`name`)===(n.name==null?null:n.name)&&s.getAttribute(`property`)===(n.property==null?null:n.property)&&s.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){c.splice(l,1);break b}}s=o.createElement(r),Id(s,r,n),o.head.appendChild(s);break;default:throw Error(a(468,r))}s[it]=e,W(s),r=s}e.stateNode=r}else Wf(o,e.type,e.stateNode)}else e.stateNode=Rf(o,r,e.memoizedProps)}else s===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?Wf(o,e.type,e.stateNode):Rf(o,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){o=e.stateNode;try{Bt(o,``)}catch(t){Wu(e,e.return,t)}}r&4&&e.stateNode!=null&&(o=e.memoizedProps,Uc(e,o,n===null?o:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Wu(e,e.return,t)}}break;case 3:if(Hf=null,o=fl,fl=vf(t.containerInfo),dl(t,e),fl=o,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){Wu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=vf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ql=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:o=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,d=Yc,f=Xc;if(Yc=d||o,Xc=f||u,dl(t,e),Xc=f,Yc=d,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||u||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(s=u.stateNode,o)c=s.style,typeof c.setProperty==`function`?c.setProperty(`display`,`none`,`important`):c.display=`none`;else{l=u.stateNode;var m=u.memoizedProps.style,h=m!=null&&m.hasOwnProperty(`display`)?m.display:null;l.style.display=h==null||typeof h==`boolean`?``:(``+h).trim()}}catch(e){Wu(u,u.return,e)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=o?``:u.memoizedProps}catch(e){Wu(u,u.return,e)}}}else if(t.tag===18){if(n===null){u=t;try{var g=u.stateNode;o?tf(g,!0):tf(u.stateNode,!1)}catch(e){Wu(u,u.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var o=n.stateNode;qc(e,Gc(e),o);break;case 5:var s=n.stateNode;n.flags&32&&(Bt(s,``),n.flags&=-33),qc(e,Gc(e),s);break;case 3:case 4:var c=n.stateNode.containerInfo;Kc(e,Gc(e),c);break;default:throw Error(a(161))}}catch(t){Wu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:hf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,a=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:vl(a,o,n),Ic(4,o);break;case 1:if(vl(a,o,n),r=o,a=r.stateNode,typeof a.componentDidMount==`function`)try{a.componentDidMount()}catch(e){Wu(r,r.return,e)}if(r=o,a=r.updateQueue,a!==null){var c=r.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Ua(l[a],c)}catch(e){Wu(r,r.return,e)}}n&&s&64&&Rc(o),Bc(o,o.return);break;case 27:Jc(o);case 26:case 5:vl(a,o,n),n&&r===null&&s&4&&Hc(o),Bc(o,o.return);break;case 12:vl(a,o,n);break;case 31:vl(a,o,n),n&&s&4&&sl(a,o);break;case 13:vl(a,o,n),n&&s&4&&cl(a,o);break;case 22:o.memoizedState===null&&vl(a,o,n),Bc(o,o.return);break;case 30:break;default:vl(a,o,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&na(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),a&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(a&2048){xl(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Wu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?o._visibility&2?xl(e,t,n,r):(o._visibility|=2,Cl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):o._visibility&2?xl(e,t,n,r):wl(e,t),a&2048&&yl(s,t);break;case 24:xl(e,t,n,r),a&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,a){for(a&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var o=e,s=t,c=n,l=r,u=s.flags;switch(s.tag){case 0:case 11:case 15:Cl(o,s,c,l,a),Ic(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState===null?(d._visibility|=2,Cl(o,s,c,l,a)):d._visibility&2?Cl(o,s,c,l,a):wl(o,s),a&&u&2048&&yl(s.alternate,s);break;case 24:Cl(o,s,c,l,a),a&&u&2048&&bl(s.alternate,s);break;default:Cl(o,s,c,l,a)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:wl(n,r),a&2048&&yl(r.alternate,r);break;case 24:wl(n,r),a&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&qf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=vf(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var a=r.sibling,o=r.return;if(nl(r),r===n){$c=null;break a}if(a!==null){a.return=o,$c=a;break a}$c=o}}}var Nl={getCacheForType:function(e){var t=Ji(ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ji(ea).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,Q=0,Fl=null,Il=null,Ll=0,Rl=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,$=null,Xl=null,Zl=!1,Ql=0,$l=0,eu=1/0,tu=null,nu=null,ru=0,iu=null,au=null,ou=0,su=0,cu=null,lu=null,uu=0,du=null;function fu(){return Q&2&&Ll!==0?Ll&-Ll:P.T===null?tt():dd()}function pu(){if(Jl===0){if(!(Ll&536870912)||Di){var e=Be;Be<<=1,!(Be&3932160)&&(Be=262144),Jl=e}else Jl=536870912}return e=Xa.current,e!==null&&(e.flags|=32),Jl}function mu(e,t,n){(e===Fl&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)&&(xu(e,0),vu(e,Ll,Jl,!1)),Je(e,n),(!(Q&2)||e!==Fl)&&(e===Fl&&(!(Q&2)&&(Kl|=n),Wl===4&&vu(e,Ll,Jl,!1)),rd(e))}function hu(e,t,n){if(Q&6)throw Error(a(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||We(e,t),o=r?ku(e,t):Du(e,t,!0),s=r;do{if(o===0){Vl&&!r&&vu(e,t,0,!1);break}if(n=e.current.alternate,s&&!_u(n)){o=Du(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c===0?c&536870912?536870912:0:c;if(c!==0){t=c;a:{var l=e;o=$;var u=l.current.memoizedState.isDehydrated;if(u&&(xu(l,c).flags|=256),c=Du(l,c,!1),c!==2){if(Hl&&!u){l.errorRecoveryDisabledLanes|=s,Kl|=s,o=4;break a}s=Xl,Xl=o,s!==null&&(Xl===null?Xl=s:Xl.push.apply(Xl,s))}o=c}if(s=!1,o!==2)continue}}if(o===1){xu(e,0),vu(e,t,0,!0);break}a:{switch(r=e,s=o,s){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:vu(r,t,Jl,!Bl);break a;case 2:Xl=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(o=Ql+300-De(),10<o)){if(vu(r,t,Jl,!Bl),Ue(r,0,!0)!==0)break a;ou=t,r.timeoutHandle=Jd(gu.bind(null,r,n,Xl,tu,Zl,t,Jl,Kl,Yl,Bl,s,`Throttled`,-0,0),o);break a}gu(r,n,Xl,tu,Zl,t,Jl,Kl,Yl,Bl,s,null,-0,0)}break}while(1);rd(e)}function gu(e,t,n,r,a,o,s,c,l,u,d,f,m,h){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)==16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:q},Dl(t,o,f);var g=(o&62914560)===o?Ql-De():(o&4194048)===o?$l-De():0;if(g=Yf(f,g),g!==null){ou=o,e.cancelPendingCommit=g(Iu.bind(null,e,t,o,n,r,a,s,c,l,d,f,null,m,h)),vu(e,o,s,!u);return}}Iu(e,t,o,n,r,a,s,c,l)}function _u(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!mr(o(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-H(a),s=1<<o;r[o]=-1,a&=~s}n!==0&&Xe(e,n,t)}function yu(){return Q&6?!0:(id(0,!1),!1)}function bu(){if(Il!==null){if(Rl===0)var e=Il.return;else e=Il,Bi=zi=null,So(e),Ta=null,Ea=0,e=Il;for(;e!==null;)Fc(e.alternate,e),e=e.return;Il=null}}function xu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou=0,bu(),Fl=e,Il=n=ni(e.current,null),Ll=t,Rl=0,zl=null,Bl=!1,Vl=We(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Xl=$=null,Zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var a=31-H(r),o=1<<a;t|=e[a],r&=~o}return Ul=t,Kr(),n}function Su(e,t){Y=null,P.H=Ms,t===ha||t===_a?(t=Ca(),Rl=3):t===ga?(t=Ca(),Rl=4):Rl=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,Il===null&&(Wl=1,Ws(e,ui(t,e.current)))}function Cu(){var e=Xa.current;return e===null?!0:(Ll&4194048)===Ll?Za===null:(Ll&62914560)===Ll||Ll&536870912?e===Za:!1}function wu(){var e=P.H;return P.H=Ms,e===null?Ms:e}function Tu(){var e=P.A;return P.A=Nl,e}function Eu(){Wl=4,Bl||(Ll&4194048)!==Ll&&Xa.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Fl===null||vu(Fl,Ll,Jl,!1)}function Du(e,t,n){var r=Q;Q|=2;var a=wu(),o=Tu();(Fl!==e||Ll!==t)&&(tu=null,xu(e,t)),t=!1;var s=Wl;a:do try{if(Rl!==0&&Il!==null){var c=Il,l=zl;switch(Rl){case 8:bu(),s=6;break a;case 3:case 2:case 9:case 6:Xa.current===null&&(t=!0);var u=Rl;if(Rl=0,zl=null,Nu(e,c,l,u),n&&Vl){s=0;break a}break;default:u=Rl,Rl=0,zl=null,Nu(e,c,l,u)}}Ou(),s=Wl;break}catch(t){Su(e,t)}while(1);return t&&e.shellSuspendCounter++,Bi=zi=null,Q=r,P.H=a,P.A=o,Il===null&&(Fl=null,Ll=0,Kr()),s}function Ou(){for(;Il!==null;)ju(Il)}function ku(e,t){var n=Q;Q|=2;var r=wu(),o=Tu();Fl!==e||Ll!==t?(tu=null,eu=De()+500,xu(e,t)):Vl=We(e,t);a:do try{if(Rl!==0&&Il!==null){t=Il;var s=zl;b:switch(Rl){case 1:Rl=0,zl=null,Nu(e,t,s,1);break;case 2:case 9:if(ya(s)){Rl=0,zl=null,Mu(t);break}t=function(){Rl!==2&&Rl!==9||Fl!==e||(Rl=7),rd(e)},s.then(t,t);break a;case 3:Rl=7;break a;case 4:Rl=5;break a;case 7:ya(s)?(Rl=0,zl=null,Mu(t)):(Rl=0,zl=null,Nu(e,t,s,7));break;case 5:var c=null;switch(Il.tag){case 26:c=Il.memoizedState;case 5:case 27:var l=Il;if(c?Kf(c):l.stateNode.complete){Rl=0,zl=null;var u=l.sibling;if(u!==null)Il=u;else{var d=l.return;d===null?Il=null:(Il=d,Pu(d))}break b}}Rl=0,zl=null,Nu(e,t,s,5);break;case 6:Rl=0,zl=null,Nu(e,t,s,6);break;case 8:bu(),Wl=6;break a;default:throw Error(a(462))}}Au();break}catch(t){Su(e,t)}while(1);return Bi=zi=null,P.H=r,P.A=o,Q=n,Il===null?(Fl=null,Ll=0,Kr(),Wl):0}function Au(){for(;Il!==null&&!Ee();)ju(Il)}function ju(e){var t=Ec(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Pu(e):Il=t}function Mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Ll);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Ll);break;case 5:So(t);default:Fc(n,t),t=Il=ri(t,Ul),t=Ec(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Pu(e):Il=t}function Nu(e,t,n,r){Bi=zi=null,So(t),Ta=null,Ea=0;var a=t.return;try{if(Ys(e,a,t,n,Ll)){Wl=1,Ws(e,ui(n,e.current)),Il=null;return}}catch(t){if(a!==null)throw Il=a,t;Wl=1,Ws(e,ui(n,e.current)),Il=null;return}t.flags&32768?(Di||r===1?e=!0:Vl||Ll&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Xa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fu(t,e)):Pu(t)}function Pu(e){var t=e;do{if(t.flags&32768){Fu(t,Bl);return}e=t.return;var n=Nc(t.alternate,t,Ul);if(n!==null){Il=n;return}if(t=t.sibling,t!==null){Il=t;return}Il=t=e}while(t!==null);Wl===0&&(Wl=5)}function Fu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Il=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Il=e;return}Il=e=n}while(e!==null);Wl=6,Il=null}function Iu(e,t,n,r,o,s,c,l,u){e.cancelPendingCommit=null;do Vu();while(ru!==0);if(Q&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(s=t.lanes|t.childLanes,s|=Gr,Ye(e,n,s,c,l,u),e===Fl&&(Il=Fl=null,Ll=0),au=t,iu=e,ou=n,su=s,cu=o,lu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Hu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,o=F.p,F.p=2,c=Q,Q|=4;try{el(e,t,n)}finally{Q=c,F.p=o,P.T=r}}ru=1,Lu(),Ru(),zu()}}function Lu(){if(ru===1){ru=0;var e=iu,t=au,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var a=Q;Q|=4;try{pl(t,e);var o=Vd,s=yr(e.containerInfo),c=o.focusedElem,l=o.selectionRange;if(s!==c&&c&&c.ownerDocument&&vr(c.ownerDocument.documentElement,c)){if(l!==null&&br(c)){var u=l.start,d=l.end;if(d===void 0&&(d=u),`selectionStart`in c)c.selectionStart=u,c.selectionEnd=Math.min(d,c.value.length);else{var f=c.ownerDocument||document,m=f&&f.defaultView||window;if(m.getSelection){var h=m.getSelection(),g=c.textContent.length,_=Math.min(l.start,g),v=l.end===void 0?_:Math.min(l.end,g);!h.extend&&_>v&&(s=v,v=_,_=s);var y=_r(c,_),b=_r(c,v);if(y&&b&&(h.rangeCount!==1||h.anchorNode!==y.node||h.anchorOffset!==y.offset||h.focusNode!==b.node||h.focusOffset!==b.offset)){var x=f.createRange();x.setStart(y.node,y.offset),h.removeAllRanges(),_>v?(h.addRange(x),h.extend(b.node,b.offset)):(x.setEnd(b.node,b.offset),h.addRange(x))}}}}for(f=[],h=c;h=h.parentNode;)h.nodeType===1&&f.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus==`function`&&c.focus(),c=0;c<f.length;c++){var S=f[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}lp=!!Bd,Vd=Bd=null}finally{Q=a,F.p=r,P.T=n}}e.current=t,ru=2}}function Ru(){if(ru===2){ru=0;var e=iu,t=au,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var a=Q;Q|=4;try{tl(e,t.alternate,t)}finally{Q=a,F.p=r,P.T=n}}ru=3}}function zu(){if(ru===4||ru===3){ru=0,R();var e=iu,t=au,n=ou,r=lu;t.subtreeFlags&10256||t.flags&10256?ru=5:(ru=0,au=iu=null,Bu(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(nu=null),et(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot==`function`)try{Fe.onCommitFiberRoot(B,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,a=F.p,F.p=2,P.T=null;try{for(var o=e.onRecoverableError,s=0;s<r.length;s++){var c=r[s];o(c.value,{componentStack:c.stack})}}finally{P.T=t,F.p=a}}ou&3&&Vu(),rd(e),a=e.pendingLanes,n&261930&&a&42?e===du?uu++:(uu=0,du=e):uu=0,id(0,!1)}}function Bu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function Vu(){return Lu(),Ru(),zu(),Hu()}function Hu(){if(ru!==5)return!1;var e=iu,t=su;su=0;var n=et(ou),r=P.T,o=F.p;try{F.p=32>n?32:n,P.T=null,n=cu,cu=null;var s=iu,c=ou;if(ru=0,au=iu=null,ou=0,Q&6)throw Error(a(331));var l=Q;if(Q|=4,Al(s.current),Sl(s,s.current,c,n),Q=l,id(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot==`function`)try{Fe.onPostCommitFiberRoot(B,s)}catch{}return!0}finally{F.p=o,P.T=r,Bu(e,t)}}function Uu(e,t,n){t=ui(n,t),t=Ks(e.stateNode,t,2),e=La(e,t,2),e!==null&&(Je(e,2),rd(e))}function Wu(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(nu===null||!nu.has(r))){e=ui(n,e),n=qs(2),r=La(t,n,2),r!==null&&(Js(n,r,t,e),Je(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(Hl=!0,a.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Ll&n)===n&&(Wl===4||Wl===3&&(Ll&62914560)===Ll&&300>De()-Ql?!(Q&2)&&xu(e,0):ql|=n,Yl===Ll&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ke()),e=Yr(e,t),e!==null&&(Je(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return we(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var a=r.pendingLanes;if(a===0)var o=0;else{var s=r.suspendedLanes,c=r.pingedLanes;o=(1<<31-H(42|e)+1)-1,o&=a&~(s&~c),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,ld(r,o))}else o=Ll,o=Ue(r,r===Fl?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(o&3)||We(r,o)||(n=!0,ld(r,o))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&qd()&&(e=nd);for(var t=De(),n=null,r=Zu;r!==null;){var a=r.next,o=sd(r,t);o===0?(r.next=null,n===null?Zu=a:n.next=a,a===null&&(Qu=n)):(n=r,(e!==0||o&3)&&(ed=!0)),r=a}ru!==0&&ru!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-H(o),c=1<<s,l=a[s];l===-1?((c&n)===0||(c&r)!==0)&&(a[s]=Ge(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}if(t=Fl,n=Ll,n=Ue(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||We(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),et(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Me;break;default:n=je}return r=cd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(ru!==0&&ru!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var r=Ll;return r=Ue(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(hu(e,r,t),sd(e,De()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Vu())return null;hu(e,t,!0)}function ud(){Zd(function(){Q&6?we(ke,ad):od()})}function dd(){if(nd===0){var e=aa;e===0&&(e=ze,ze<<=1,!(ze&261888)&&(ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Kt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,a){if(t===`submit`&&n&&n.stateNode===a){var o=fd((a[at]||null).action),s=r.submitter;s&&(t=(t=s[at]||null)?fd(t.formAction):s.getAttribute(`formAction`),t!==null&&(o=t,s=null));var c=new pn(`action`,`action`,null,r,a);e.push({event:c,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=s?pd(a,s):new FormData(a);vs(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else typeof o==`function`&&(c.preventDefault(),e=s?pd(a,s):new FormData(a),vs(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}for(var hd=0;hd<Br.length;hd++){var gd=Br[hd];Vr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Vr(Mr,`onAnimationEnd`),Vr(Nr,`onAnimationIteration`),Vr(Pr,`onAnimationStart`),Vr(`dblclick`,`onDoubleClick`),Vr(`focusin`,`onFocus`),Vr(`focusout`,`onBlur`),Vr(Fr,`onTransitionRun`),Vr(Ir,`onTransitionStart`),Vr(Lr,`onTransitionCancel`),Vr(Rr,`onTransitionEnd`),yt(`onMouseEnter`,[`mouseout`,`mouseover`]),yt(`onMouseLeave`,[`mouseout`,`mouseover`]),yt(`onPointerEnter`,[`pointerout`,`pointerover`]),yt(`onPointerLeave`,[`pointerout`,`pointerover`]),vt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),vt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),vt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),vt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),vt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),vt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;a:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],l=c.instance,u=c.currentTarget;if(c=c.listener,l!==o&&a.isPropagationStopped())break a;o=c,a.currentTarget=u;try{o(a)}catch(e){Hr(e)}a.currentTarget=null,o=l}else for(s=0;s<r.length;s++){if(c=r[s],l=c.instance,u=c.currentTarget,c=c.listener,l!==o&&a.isPropagationStopped())break a;o=c,a.currentTarget=u;try{o(a)}catch(e){Hr(e)}a.currentTarget=null,o=l}}}}function bd(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,gt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(gp(t)){case 2:var a=up;break;case 8:a=dp;break;default:a=fp}n=a.bind(null,t,n,e),a=void 0,!tn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(a=!0),r?a===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:a}):a===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:a})}function Td(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var l=r.stateNode.containerInfo;if(l===a)break;if(c===4)for(c=r.return;c!==null;){var u=c.tag;if((u===3||u===4)&&c.stateNode.containerInfo===a)return;c=c.return}for(;l!==null;){if(c=pt(l),c===null)return;if(u=c.tag,u===5||u===6||u===26||u===27){r=o=c;continue a}l=l.parentNode}}r=r.return}Qt(function(){var r=o,a=Jt(n),c=[];a:{var l=zr.get(e);if(l!==void 0){var u=pn,d=e;switch(e){case`keypress`:if(cn(n)===0)break a;case`keydown`:case`keyup`:u=jn;break;case`focusin`:d=`focus`,u=Sn;break;case`focusout`:d=`blur`,u=Sn;break;case`beforeblur`:case`afterblur`:u=Sn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:u=bn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:u=xn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:u=Nn;break;case Mr:case Nr:case Pr:u=Cn;break;case Rr:u=Pn;break;case`scroll`:case`scrollend`:u=hn;break;case`wheel`:u=Fn;break;case`copy`:case`cut`:case`paste`:u=wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:u=Mn;break;case`toggle`:case`beforetoggle`:u=In}var f=!!(t&4),m=!f&&(e===`scroll`||e===`scrollend`),h=f?l===null?null:l+`Capture`:l;f=[];for(var g=r,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||h===null||(v=$t(g,h),v!=null&&f.push(Ed(g,v,_))),m)break;g=g.return}0<f.length&&(l=new u(l,d,null,n,a),c.push({event:l,listeners:f}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,u=e===`mouseout`||e===`pointerout`,l&&n!==qt&&(d=n.relatedTarget||n.fromElement)&&(pt(d)||d[ot]))break a;if((u||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=r,d=d?pt(d):null,d!==null&&(m=s(d),f=d.tag,d!==m||f!==5&&f!==27&&f!==6)&&(d=null)):(u=null,d=r),u!==d)){if(f=bn,v=`onMouseLeave`,h=`onMouseEnter`,g=`mouse`,(e===`pointerout`||e===`pointerover`)&&(f=Mn,v=`onPointerLeave`,h=`onPointerEnter`,g=`pointer`),m=u==null?l:ht(u),_=d==null?l:ht(d),l=new f(v,g+`leave`,u,n,a),l.target=m,l.relatedTarget=_,v=null,pt(a)===r&&(f=new f(h,g+`enter`,d,n,a),f.target=_,f.relatedTarget=m,v=f),m=v,u&&d)b:{for(f=Od,h=u,g=d,_=0,v=h;v;v=f(v))_++;v=0;for(var y=g;y;y=f(y))v++;for(;0<_-v;)h=f(h),_--;for(;0<v-_;)g=f(g),v--;for(;_--;){if(h===g||g!==null&&h===g.alternate){f=h;break b}h=f(h),g=f(g)}f=null}else f=null;u!==null&&kd(c,l,u,f,!1),d!==null&&m!==null&&kd(c,m,d,f,!0)}}a:{if(l=r?ht(r):window,u=l.nodeName&&l.nodeName.toLowerCase(),u===`select`||u===`input`&&l.type===`file`)var b=nr;else if(Xn(l)){if(rr)b=fr;else{b=ur;var x=lr}}else u=l.nodeName,!u||u.toLowerCase()!==`input`||l.type!==`checkbox`&&l.type!==`radio`?r&&Wt(r.elementType)&&(b=nr):b=dr;if(b&&=b(e,r)){Zn(c,b,n,a);break a}x&&x(e,l,r),e===`focusout`&&r&&l.type===`number`&&r.memoizedProps.value!=null&&It(l,`number`,l.value)}switch(x=r?ht(r):window,e){case`focusin`:(Xn(x)||x.contentEditable===`true`)&&(Sr=x,Cr=r,wr=null);break;case`focusout`:wr=Cr=Sr=null;break;case`mousedown`:Tr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Tr=!1,Er(c,n,a);break;case`selectionchange`:if(xr)break;case`keydown`:case`keyup`:Er(c,n,a)}var S;if(Rn)b:{switch(e){case`compositionstart`:var C=`onCompositionStart`;break b;case`compositionend`:C=`onCompositionEnd`;break b;case`compositionupdate`:C=`onCompositionUpdate`;break b}C=void 0}else Kn?Wn(e,n)&&(C=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(C=`onCompositionStart`);C&&(Vn&&n.locale!==`ko`&&(Kn||C!==`onCompositionStart`?C===`onCompositionEnd`&&Kn&&(S=sn()):(rn=a,an=`value`in rn?rn.value:rn.textContent,Kn=!0)),x=Dd(r,C),0<x.length&&(C=new Tn(C,e,null,n,a),c.push({event:C,listeners:x}),S?C.data=S:(S=Gn(n),S!==null&&(C.data=S)))),(S=Bn?qn(e,n):Jn(e,n))&&(C=Dd(r,`onBeforeInput`),0<C.length&&(x=new Tn(`onBeforeInput`,`beforeinput`,null,n,a),c.push({event:x,listeners:C}),x.data=S)),md(c,e,r,n,a)}yd(c,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=$t(e,n),a!=null&&r.unshift(Ed(e,a,o)),a=$t(e,t),a!=null&&r.push(Ed(e,a,o))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,a){for(var o=t._reactName,s=[];n!==null&&n!==r;){var c=n,l=c.alternate,u=c.stateNode;if(c=c.tag,l!==null&&l===r)break;c!==5&&c!==26&&c!==27||u===null||(l=u,a?(u=$t(n,o),u!=null&&s.unshift(Ed(n,u,l))):a||(u=$t(n,o),u!=null&&s.push(Ed(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Pd(e,t,n,r,o,s){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Bt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Bt(e,``+r);break;case`className`:G(e,`class`,r);break;case`tabIndex`:G(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:G(e,n,r);break;case`style`:Ut(e,r,s);break;case`data`:if(t!==`object`){G(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof s==`function`&&(n===`formAction`?(t!==`input`&&Pd(e,t,`name`,o.name,o,null),Pd(e,t,`formEncType`,o.formEncType,o,null),Pd(e,t,`formMethod`,o.formMethod,o,null),Pd(e,t,`formTarget`,o.formTarget,o,null)):(Pd(e,t,`encType`,o.encType,o,null),Pd(e,t,`method`,o.method,o,null),Pd(e,t,`target`,o.target,o,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=q);break;case`onScroll`:r!=null&&bd(`scroll`,e);break;case`onScrollEnd`:r!=null&&bd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Kt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:bd(`beforetoggle`,e),bd(`toggle`,e),wt(e,`popover`,r);break;case`xlinkActuate`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Tt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Tt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Tt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:wt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Gt.get(n)||n,wt(e,n,r))}}function Fd(e,t,n,r,o,s){switch(n){case`style`:Ut(e,r,s);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Bt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Bt(e,``+r);break;case`onScroll`:r!=null&&bd(`scroll`,e);break;case`onScrollEnd`:r!=null&&bd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=q);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!_t.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(o=n.endsWith(`Capture`),t=n.slice(2,o?n.length-7:void 0),s=e[at]||null,s=s==null?null:s[n],typeof s==`function`&&e.removeEventListener(t,s,o),typeof r==`function`)){typeof s!=`function`&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):wt(e,n,r)}}}function Id(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:bd(`error`,e),bd(`load`,e);var r=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var c=n[s];if(c!=null)switch(s){case`src`:r=!0;break;case`srcSet`:o=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:Pd(e,t,s,c,n,null)}}o&&Pd(e,t,`srcSet`,n.srcSet,n,null),r&&Pd(e,t,`src`,n.src,n,null);return;case`input`:bd(`invalid`,e);var l=s=c=o=null,u=null,d=null;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case`name`:o=f;break;case`type`:c=f;break;case`checked`:u=f;break;case`defaultChecked`:d=f;break;case`value`:s=f;break;case`defaultValue`:l=f;break;case`children`:case`dangerouslySetInnerHTML`:if(f!=null)throw Error(a(137,t));break;default:Pd(e,t,r,f,n,null)}}Ft(e,s,l,u,d,c,o,!1);return;case`select`:for(o in bd(`invalid`,e),r=c=s=null,n)if(n.hasOwnProperty(o)&&(l=n[o],l!=null))switch(o){case`value`:s=l;break;case`defaultValue`:c=l;break;case`multiple`:r=l;default:Pd(e,t,o,l,n,null)}t=s,n=c,e.multiple=!!r,t==null?n!=null&&Lt(e,!!r,n,!0):Lt(e,!!r,t,!1);return;case`textarea`:for(c in bd(`invalid`,e),s=o=r=null,n)if(n.hasOwnProperty(c)&&(l=n[c],l!=null))switch(c){case`value`:r=l;break;case`defaultValue`:o=l;break;case`children`:s=l;break;case`dangerouslySetInnerHTML`:if(l!=null)throw Error(a(91));break;default:Pd(e,t,c,l,n,null)}zt(e,r,o,s);return;case`option`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Pd(e,t,u,r,n,null)}return;case`dialog`:bd(`beforetoggle`,e),bd(`toggle`,e),bd(`cancel`,e),bd(`close`,e);break;case`iframe`:case`object`:bd(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)bd(_d[r],e);break;case`image`:bd(`error`,e),bd(`load`,e);break;case`details`:bd(`toggle`,e);break;case`embed`:case`source`:case`link`:bd(`error`,e),bd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(d in n)if(n.hasOwnProperty(d)&&(r=n[d],r!=null))switch(d){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:Pd(e,t,d,r,n,null)}return;default:if(Wt(t)){for(f in n)n.hasOwnProperty(f)&&(r=n[f],r!==void 0&&Fd(e,t,f,r,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(r=n[l],r!=null&&Pd(e,t,l,r,n,null))}function Ld(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var o=null,s=null,c=null,l=null,u=null,d=null,f=null;for(g in n){var m=n[g];if(n.hasOwnProperty(g)&&m!=null)switch(g){case`checked`:break;case`value`:break;case`defaultValue`:u=m;default:r.hasOwnProperty(g)||Pd(e,t,g,null,r,m)}}for(var h in r){var g=r[h];if(m=n[h],r.hasOwnProperty(h)&&(g!=null||m!=null))switch(h){case`type`:s=g;break;case`name`:o=g;break;case`checked`:d=g;break;case`defaultChecked`:f=g;break;case`value`:c=g;break;case`defaultValue`:l=g;break;case`children`:case`dangerouslySetInnerHTML`:if(g!=null)throw Error(a(137,t));break;default:g!==m&&Pd(e,t,h,g,r,m)}}Pt(e,c,l,u,d,f,s,o);return;case`select`:for(s in g=c=l=h=null,n)if(u=n[s],n.hasOwnProperty(s)&&u!=null)switch(s){case`value`:break;case`multiple`:g=u;default:r.hasOwnProperty(s)||Pd(e,t,s,null,r,u)}for(o in r)if(s=r[o],u=n[o],r.hasOwnProperty(o)&&(s!=null||u!=null))switch(o){case`value`:h=s;break;case`defaultValue`:l=s;break;case`multiple`:c=s;default:s!==u&&Pd(e,t,o,s,r,u)}t=l,n=c,r=g,h==null?!!r!=!!n&&(t==null?Lt(e,!!n,n?[]:``,!1):Lt(e,!!n,t,!0)):Lt(e,!!n,h,!1);return;case`textarea`:for(l in g=h=null,n)if(o=n[l],n.hasOwnProperty(l)&&o!=null&&!r.hasOwnProperty(l))switch(l){case`value`:break;case`children`:break;default:Pd(e,t,l,null,r,o)}for(c in r)if(o=r[c],s=n[c],r.hasOwnProperty(c)&&(o!=null||s!=null))switch(c){case`value`:h=o;break;case`defaultValue`:g=o;break;case`children`:break;case`dangerouslySetInnerHTML`:if(o!=null)throw Error(a(91));break;default:o!==s&&Pd(e,t,c,o,r,s)}Rt(e,h,g);return;case`option`:for(var _ in n)if(h=n[_],n.hasOwnProperty(_)&&h!=null&&!r.hasOwnProperty(_))switch(_){case`selected`:e.selected=!1;break;default:Pd(e,t,_,null,r,h)}for(u in r)if(h=r[u],g=n[u],r.hasOwnProperty(u)&&h!==g&&(h!=null||g!=null))switch(u){case`selected`:e.selected=h&&typeof h!=`function`&&typeof h!=`symbol`;break;default:Pd(e,t,u,h,r,g)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var v in n)h=n[v],n.hasOwnProperty(v)&&h!=null&&!r.hasOwnProperty(v)&&Pd(e,t,v,null,r,h);for(d in r)if(h=r[d],g=n[d],r.hasOwnProperty(d)&&h!==g&&(h!=null||g!=null))switch(d){case`children`:case`dangerouslySetInnerHTML`:if(h!=null)throw Error(a(137,t));break;default:Pd(e,t,d,h,r,g)}return;default:if(Wt(t)){for(var y in n)h=n[y],n.hasOwnProperty(y)&&h!==void 0&&!r.hasOwnProperty(y)&&Fd(e,t,y,void 0,r,h);for(f in r)h=r[f],g=n[f],!r.hasOwnProperty(f)||h===g||h===void 0&&g===void 0||Fd(e,t,f,h,r,g);return}}for(var b in n)h=n[b],n.hasOwnProperty(b)&&h!=null&&!r.hasOwnProperty(b)&&Pd(e,t,b,null,r,h);for(m in r)h=r[m],g=n[m],!r.hasOwnProperty(m)||h===g||h==null&&g==null||Pd(e,t,m,h,r,g)}function Rd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,s=a.initiatorType,c=a.duration;if(o&&c&&Rd(s)){for(s=0,c=a.responseEnd,r+=1;r<n.length;r++){var l=n[r],u=l.startTime;if(u>c)break;var d=l.transferSize,f=l.initiatorType;d&&Rd(f)&&(l=l.responseEnd,s+=d*(l<c?1:(c-u)/(l-u)))}if(--r,t+=8*(o+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Bd=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Gd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function qd(){var e=window.event;return e&&e.type===`popstate`?e!==Kd&&(Kd=e,!0):(Kd=null,!1)}var Jd=typeof setTimeout==`function`?setTimeout:void 0,Yd=typeof clearTimeout==`function`?clearTimeout:void 0,Xd=typeof Promise==`function`?Promise:void 0,Zd=typeof queueMicrotask==`function`?queueMicrotask:Xd===void 0?Jd:function(e){return Xd.resolve(null).then(e).catch(Qd)};function Qd(e){setTimeout(function(){throw e})}function $d(e){return e===`head`}function ef(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8){if(n=a.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(a),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)hf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,hf(n);for(var o=n.firstChild;o;){var s=o.nextSibling,c=o.nodeName;o[dt]||c===`SCRIPT`||c===`STYLE`||c===`LINK`&&o.rel.toLowerCase()===`stylesheet`||n.removeChild(o),o=s}}else n===`body`&&hf(e.ownerDocument.body)}n=a}while(n);Fp(t)}function tf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nf(n),ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rf(e,t,n,r){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var o=a.name==null?null:``+a.name;if(a.type===`hidden`&&e.getAttribute(`name`)===o)return e}else return e}else if(!e[dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(o=e.getAttribute(`rel`),o===`stylesheet`&&e.hasAttribute(`data-precedence`)||o!==a.rel||e.getAttribute(`href`)!==(a.href==null||a.href===``?null:a.href)||e.getAttribute(`crossorigin`)!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute(`title`)!==(a.title==null?null:a.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(o=e.getAttribute(`src`),(o!==(a.src==null?null:a.src)||e.getAttribute(`type`)!==(a.type==null?null:a.type)||e.getAttribute(`crossorigin`)!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=uf(e.nextSibling),e===null)break}return null}function af(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=uf(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=uf(e.nextSibling),e===null))return null;return e}function sf(e){return e.data===`$?`||e.data===`$~`}function cf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function uf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var df=null;function ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return uf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mf(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var gf=new Map,_f=new Set;function vf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yf=F.d;F.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=yf.f(),t=yu();return e||t}function xf(e){var t=mt(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):yf.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var a=Nt(t);a=`link[rel="`+e+`"][href="`+a+`"]`,typeof n==`string`&&(a+=`[crossorigin="`+n+`"]`),_f.has(a)||(_f.add(a),e={rel:e,crossOrigin:n,href:t},r.querySelector(a)===null&&(t=r.createElement(`link`),Id(t,`link`,e),W(t),r.head.appendChild(t)))}}function wf(e){yf.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){yf.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){yf.L(e,t,n);var r=Sf;if(r&&e&&t){var a=`link[rel="preload"][as="`+Nt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(a+=`[imagesrcset="`+Nt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(a+=`[imagesizes="`+Nt(n.imageSizes)+`"]`)):a+=`[href="`+Nt(e)+`"]`;var o=a;switch(t){case`style`:o=Mf(e);break;case`script`:o=If(e)}gf.has(o)||(e=_({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),gf.set(o,e),r.querySelector(a)!==null||t===`style`&&r.querySelector(Nf(o))||t===`script`&&r.querySelector(Lf(o))||(t=r.createElement(`link`),Id(t,`link`,e),W(t),r.head.appendChild(t)))}}function Df(e,t){yf.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,a=`link[rel="modulepreload"][as="`+Nt(r)+`"][href="`+Nt(e)+`"]`,o=a;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:o=If(e)}if(!gf.has(o)&&(e=_({rel:`modulepreload`,href:e},t),gf.set(o,e),n.querySelector(a)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Lf(o)))return}r=n.createElement(`link`),Id(r,`link`,e),W(r),n.head.appendChild(r)}}}function Of(e,t,n){yf.S(e,t,n);var r=Sf;if(r&&e){var a=U(r).hoistableStyles,o=Mf(e);t||=`default`;var s=a.get(o);if(!s){var c={loading:0,preload:null};if(s=r.querySelector(Nf(o)))c.loading=5;else{e=_({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=gf.get(o))&&Bf(e,n);var l=s=r.createElement(`link`);W(l),Id(l,`link`,e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener(`load`,function(){c.loading|=1}),l.addEventListener(`error`,function(){c.loading|=2}),c.loading|=4,zf(s,t,r)}s={type:`stylesheet`,instance:s,count:1,state:c},a.set(o,s)}}}function kf(e,t){yf.X(e,t);var n=Sf;if(n&&e){var r=U(n).hoistableScripts,a=If(e),o=r.get(a);o||(o=n.querySelector(Lf(a)),o||(e=_({src:e,async:!0},t),(t=gf.get(a))&&Vf(e,t),o=n.createElement(`script`),W(o),Id(o,`link`,e),n.head.appendChild(o)),o={type:`script`,instance:o,count:1,state:null},r.set(a,o))}}function Af(e,t){yf.M(e,t);var n=Sf;if(n&&e){var r=U(n).hoistableScripts,a=If(e),o=r.get(a);o||(o=n.querySelector(Lf(a)),o||(e=_({src:e,async:!0,type:`module`},t),(t=gf.get(a))&&Vf(e,t),o=n.createElement(`script`),W(o),Id(o,`link`,e),n.head.appendChild(o)),o={type:`script`,instance:o,count:1,state:null},r.set(a,o))}}function jf(e,t,n,r){var o=(o=ue.current)?vf(o):null;if(!o)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=U(o).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var s=U(o).hoistableStyles,c=s.get(e);if(c||(o=o.ownerDocument||o,c={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=o.querySelector(Nf(e)))&&!s._p&&(c.instance=s,c.state.loading=5),gf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gf.set(e,n),s||Ff(o,e,n,c.state))),t&&r===null)throw Error(a(528,``));return c}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=If(n),n=U(o).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Mf(e){return`href="`+Nt(e)+`"`}function Nf(e){return`link[rel="stylesheet"][`+e+`]`}function Pf(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ff(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Id(t,`link`,n),W(t),e.head.appendChild(t))}function If(e){return`[src="`+Nt(e)+`"]`}function Lf(e){return`script[async]`+e}function Rf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Nt(n.href)+`"]`);if(r)return t.instance=r,W(r),r;var o=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),W(r),Id(r,`style`,o),zf(r,n.precedence,e),t.instance=r;case`stylesheet`:o=Mf(n.href);var s=e.querySelector(Nf(o));if(s)return t.state.loading|=4,t.instance=s,W(s),s;r=Pf(n),(o=gf.get(o))&&Bf(r,o),s=(e.ownerDocument||e).createElement(`link`),W(s);var c=s;return c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),Id(s,`link`,r),t.state.loading|=4,zf(s,n.precedence,e),t.instance=s;case`script`:return s=If(n.src),(o=e.querySelector(Lf(s)))?(t.instance=o,W(o),o):(r=n,(o=gf.get(s))&&(r=_({},n),Vf(r,o)),e=e.ownerDocument||e,o=e.createElement(`script`),W(o),Id(o,`link`,r),e.head.appendChild(o),t.instance=o);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,zf(r,n.precedence,e));return t.instance}function zf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),a=r.length?r[r.length-1]:null,o=a,s=0;s<r.length;s++){var c=r[s];if(c.dataset.precedence===t)o=c;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Hf=null;function Uf(e,t,n){if(Hf===null){var r=new Map,a=Hf=new Map;a.set(n,r)}else a=Hf,r=a.get(n),r||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[dt]||o[it]||e===`link`&&o.getAttribute(`rel`)===`stylesheet`)&&o.namespaceURI!==`http://www.w3.org/2000/svg`){var s=o.getAttribute(t)||``;s=e+s;var c=r.get(s);c?c.push(o):r.set(s,[o])}}return r}function Wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Gf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Kf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function qf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var a=Mf(r.href),o=t.querySelector(Nf(a));if(o){t=o._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Xf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,W(o);return}o=t.ownerDocument||t,r=Pf(r),(a=gf.get(a))&&Bf(r,a),o=o.createElement(`link`),W(o);var s=o;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Id(o,`link`,r),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Jf=0;function Yf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Jf===0&&(Jf=62500*zd());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Jf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}function Xf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach($f,e),Zf=null,Xf.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var r=n.get(null);else{n=new Map,Zf.set(e,n);for(var a=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),o=0;o<a.length;o++){var s=a[o];(s.nodeName===`LINK`||s.getAttribute(`media`)!==`not all`)&&(n.set(s.dataset.precedence,s),r=s)}r&&n.set(null,r)}a=t.instance,s=a.getAttribute(`data-precedence`),o=n.get(s)||r,o===r&&n.set(null,a),n.set(s,a),this.count++,r=Xf.bind(this),a.addEventListener(`load`,r),a.addEventListener(`error`,r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:T,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function tp(e,t,n,r,a,o,s,c,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function np(e,t,n,r,a,o,s,c,l,u,d,f){return e=new tp(e,t,n,s,l,u,d,f,c),t=1,!0===o&&(t|=24),o=ei(3,null,null,t),e.current=o,o.stateNode=e,t=ta(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},Pa(o),e}function rp(e){return e?(e=Qr,e):Qr}function ip(e,t,n,r,a,o){a=rp(a),r.context===null?r.context=a:r.pendingContext=a,r=Ia(t),r.payload={element:n},o=o===void 0?null:o,o!==null&&(r.callback=o),n=La(e,r,t),n!==null&&(mu(n,e,t),Ra(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&mu(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=fu();t=$e(t);var n=Yr(e,t);n!==null&&mu(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var a=P.T;P.T=null;var o=F.p;try{F.p=2,fp(e,t,n,r)}finally{F.p=o,P.T=a}}function dp(e,t,n,r){var a=P.T;P.T=null;var o=F.p;try{F.p=8,fp(e,t,n,r)}finally{F.p=o,P.T=a}}function fp(e,t,n,r){if(lp){var a=pp(r);if(a===null)Td(e,t,r,mp,n),Tp(e,r);else if(Dp(a,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;a!==null;){var o=mt(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=He(o.pendingLanes);if(s!==0){var c=o;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var l=1<<31-H(s);c.entanglements[1]|=l,s&=~l}rd(o),!(Q&6)&&(eu=De()+500,id(0,!1))}}break;case 31:case 13:c=Yr(o,2),c!==null&&mu(c,o,2),yu(),op(o,2)}if(o=pp(r),o===null&&Td(e,t,r,mp,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function pp(e){return e=Jt(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=pt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case z:return 32;case Me:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=mt(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Dp(e,t,n,r,a){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,a),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,a),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,a),!0;case`pointerover`:var o=a.pointerId;return xp.set(o,Ep(xp.get(o)||null,e,t,n,r,a)),!0;case`gotpointercapture`:return o=a.pointerId,Sp.set(o,Ep(Sp.get(o)||null,e,t,n,r,a)),!0}return!1}function Op(e){var t=pt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,nt(e.priority,function(){cp(n)});return}}else if(t===31){if(t=l(n),t!==null){e.blockedOn=t,nt(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qt=r,n.target.dispatchEvent(r),qt=null}else return t=mt(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function jp(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var o=mt(n);o!==null&&(e.splice(t,3),t-=3,vs(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Fp(e){function t(t){return Mp(t,e)}vp!==null&&Mp(vp,e),yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],s=a[at]||null;if(typeof o==`function`)s||Pp(n);else if(s){var c=null;if(o&&o.hasAttribute(`formAction`)){if(a=o,s=o[at]||null)c=s.formAction;else if(hp(a)!==null)continue}else c=s.action;typeof c==`function`?n[r+1]=c:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:`manual`,scroll:`manual`})}function t(){a!==null&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,a=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),a!==null&&(a(),a=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;ip(n,fu(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),yu(),t[ot]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var zp=n.version;if(zp!==`19.2.8`)throw Error(a(527,zp,`19.2.8`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=f(t),e=e===null?null:h(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{B=Vp.inject(Bp),Fe=Vp}catch{}}e.createRoot=function(e,t){if(!o(e))throw Error(a(299));var n=!1,r=``,s=Vs,c=Hs,l=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,s,c,l,Ip),e[ot]=t.current,Cd(e),new Lp(t)}})),v=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=_()})),y=l(d(),1),b=v(),x={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},S={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C=1e3,w=1001,T=1002,E=1003,D=1004,O=1005,k=1006,A=1007,j=1008,M=1009,N=1010,ee=1011,te=1012,ne=1013,re=1014,P=1015,F=1016,ie=1017,ae=1018,oe=1020,I=35902,se=35899,L=1021,ce=1022,le=1023,ue=1026,de=1027,fe=1028,pe=1029,me=1030,he=1031,ge=1033,_e=33776,ve=33777,ye=33778,be=33779,xe=35840,Se=35841,Ce=35842,we=35843,Te=36196,Ee=37492,R=37496,De=37488,Oe=37489,ke=37490,Ae=37491,je=37808,z=37809,Me=37810,Ne=37811,Pe=37812,B=37813,Fe=37814,V=37815,H=37816,Ie=37817,Le=37818,Re=37819,ze=37820,Be=37821,Ve=36492,He=36494,Ue=36495,We=36283,Ge=36284,Ke=36285,qe=36286,Je=2300,Ye=2301,Xe=2302,Ze=2303,Qe=2400,$e=2401,et=2402,tt=3200,nt=`srgb`,rt=`srgb-linear`,it=`linear`,at=`srgb`,ot=7680,st=35044,ct=2e3;function lt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ut(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function dt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ft(){let e=dt(`canvas`);return e.style.display=`block`,e}var pt={};function mt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ht(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=ht(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=ht(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function gt(...e){let t=e.join(` `);t in pt||(pt[t]=!0,U(...e))}function _t(e,t,n){return new Promise(function(r,a){function o(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:r()}}setTimeout(o,n)})}var vt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},yt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},bt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),xt=1234567,St=Math.PI/180,Ct=180/Math.PI;function wt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[e&255]+bt[e>>8&255]+bt[e>>16&255]+bt[e>>24&255]+`-`+bt[t&255]+bt[t>>8&255]+`-`+bt[t>>16&15|64]+bt[t>>24&255]+`-`+bt[n&63|128]+bt[n>>8&255]+`-`+bt[n>>16&255]+bt[n>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function Tt(e,t){return(e%t+t)%t}function Et(e,t,n,r,a){return r+(e-t)*(a-r)/(n-t)}function Dt(e,t,n){return e===t?0:(n-e)/(t-e)}function Ot(e,t,n){return(1-n)*e+n*t}function kt(e,t,n,r){return Ot(e,t,1-Math.exp(-n*r))}function At(e,t=1){return t-Math.abs(Tt(e,t*2)-t)}function jt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Nt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Pt(e,t){return e+Math.random()*(t-e)}function Ft(e){return e*(.5-Math.random())}function It(e){e!==void 0&&(xt=e);let t=xt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lt(e){return e*St}function Rt(e){return e*Ct}function zt(e){return!(e&e-1)&&e!==0}function Bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Vt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ht(e,t,n,r,a){let o=Math.cos,s=Math.sin,c=o(n/2),l=s(n/2),u=o((t+r)/2),d=s((t+r)/2),f=o((t-r)/2),m=s((t-r)/2),h=o((r-t)/2),g=s((r-t)/2);switch(a){case`XYX`:e.set(c*d,l*f,l*m,c*u);break;case`YZY`:e.set(l*m,c*d,l*f,c*u);break;case`ZXZ`:e.set(l*f,l*m,c*d,c*u);break;case`XZX`:e.set(c*d,l*g,l*h,c*u);break;case`YXY`:e.set(l*h,c*d,l*g,c*u);break;case`ZYZ`:e.set(l*g,l*h,c*d,c*u);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+a)}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Gt={DEG2RAD:St,RAD2DEG:Ct,generateUUID:wt,clamp:G,euclideanModulo:Tt,mapLinear:Et,inverseLerp:Dt,lerp:Ot,damp:kt,pingpong:At,smoothstep:jt,smootherstep:Mt,randInt:Nt,randFloat:Pt,randFloatSpread:Ft,seededRandom:It,degToRad:Lt,radToDeg:Rt,isPowerOfTwo:zt,ceilPowerOfTwo:Bt,floorPowerOfTwo:Vt,setQuaternionFromProperEuler:Ht,normalize:Wt,denormalize:Ut},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],f=a[o+0],m=a[o+1],h=a[o+2],g=a[o+3];if(d!==g||c!==f||l!==m||u!==h){let e=c*f+l*m+u*h+d*g;e<0&&(f=-f,m=-m,h=-h,g=-g,e=-e);let t=1-s;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,s=Math.sin(s*n)/r,c=c*t+f*s,l=l*t+m*s,u=u*t+h*s,d=d*t+g*s}else{c=c*t+f*s,l=l*t+m*s,u=u*t+h*s,d=d*t+g*s;let e=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=e,l*=e,u*=e,d*=e}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,o){let s=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=a[o],f=a[o+1],m=a[o+2],h=a[o+3];return e[t]=s*h+u*d+c*m-l*f,e[t+1]=c*h+u*f+l*d-s*m,e[t+2]=l*h+u*m+s*f-c*d,e[t+3]=u*h-s*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(r/2),d=s(a/2),f=c(n/2),m=c(r/2),h=c(a/2);switch(o){case`XYZ`:this._x=f*u*d+l*m*h,this._y=l*m*d-f*u*h,this._z=l*u*h+f*m*d,this._w=l*u*d-f*m*h;break;case`YXZ`:this._x=f*u*d+l*m*h,this._y=l*m*d-f*u*h,this._z=l*u*h-f*m*d,this._w=l*u*d+f*m*h;break;case`ZXY`:this._x=f*u*d-l*m*h,this._y=l*m*d+f*u*h,this._z=l*u*h+f*m*d,this._w=l*u*d-f*m*h;break;case`ZYX`:this._x=f*u*d-l*m*h,this._y=l*m*d+f*u*h,this._z=l*u*h-f*m*d,this._w=l*u*d+f*m*h;break;case`YZX`:this._x=f*u*d+l*m*h,this._y=l*m*d+f*u*h,this._z=l*u*h-f*m*d,this._w=l*u*d-f*m*h;break;case`XZY`:this._x=f*u*d-l*m*h,this._y=l*m*d-f*u*h,this._z=l*u*h+f*m*d,this._w=l*u*d+f*m*h;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+s+d;if(f>0){let e=.5/Math.sqrt(f+1);this._w=.25/e,this._x=(u-c)*e,this._y=(a-l)*e,this._z=(o-r)*e}else if(n>s&&n>d){let e=2*Math.sqrt(1+n-s-d);this._w=(u-c)/e,this._x=.25*e,this._y=(r+o)/e,this._z=(a+l)/e}else if(s>d){let e=2*Math.sqrt(1+s-n-d);this._w=(a-l)/e,this._x=(r+o)/e,this._y=.25*e,this._z=(c+u)/e}else{let e=2*Math.sqrt(1+d-n-s);this._w=(o-r)/e,this._x=(a+l)/e,this._y=(c+u)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*s+r*l-a*c,this._y=r*u+o*c+a*s-n*l,this._z=a*u+o*l+n*c-r*s,this._w=o*u-n*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,o=e._w,s=this.dot(e);s<0&&(n=-n,r=-r,a=-a,o=-o,s=-s);let c=1-t;if(s<.9995){let e=Math.acos(s),l=Math.sin(e);c=Math.sin(c*e)/l,t=Math.sin(t*e)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*n),u=2*(s*t-a*r),d=2*(a*n-o*t);return this.x=t+c*l+o*d-s*u,this.y=n+c*u+s*l-a*d,this.z=r+c*d+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qt.copy(this).projectOnVector(e),this.sub(qt)}reflect(e){return this.sub(qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qt=new q,Jt=new Kt,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,a,o,s,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l)}set(e,t,n,r,a,o,s,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],h=n[8],g=r[0],_=r[3],v=r[6],y=r[1],b=r[4],x=r[7],S=r[2],C=r[5],w=r[8];return a[0]=o*g+s*y+c*S,a[3]=o*_+s*b+c*C,a[6]=o*v+s*x+c*w,a[1]=l*g+u*y+d*S,a[4]=l*_+u*b+d*C,a[7]=l*v+u*x+d*w,a[2]=f*g+m*y+h*S,a[5]=f*_+m*b+h*C,a[8]=f*v+m*x+h*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-n*a*u+n*s*c+r*a*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=u*o-s*l,f=s*c-u*a,m=l*a-o*c,h=t*d+n*f+r*m;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/h;return e[0]=d*g,e[1]=(r*l-u*n)*g,e[2]=(s*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*c)*g,e[5]=(r*a-s*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*a)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return gt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Yt.makeScale(e,t)),this}rotate(e){return gt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Yt.makeRotation(-e)),this}translate(e,t){return gt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yt=new J,Xt=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qt(){let e={enabled:!0,workingColorSpace:rt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=en(e.r),e.g=en(e.g),e.b=en(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=tn(e.r),e.g=tn(e.g),e.b=tn(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?it:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return gt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return gt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[rt]:{primaries:t,whitePoint:r,transfer:it,toXYZ:Xt,fromXYZ:Zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:t,whitePoint:r,transfer:at,toXYZ:Xt,fromXYZ:Zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),e}var $t=Qt();function en(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function tn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var nn,rn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nn===void 0&&(nn=dt(`canvas`)),nn.width=e.width,nn.height=e.height;let t=nn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=nn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=dt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let e=0;e<a.length;e++)a[e]=en(a[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(en(t[e]/255)*255):t[e]=en(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},an=0,on=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:an++}),this.uuid=wt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(sn(r[t].image)):e.push(sn(r[t]))}else e=sn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function sn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?rn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var cn=0,ln=new q,un=class e extends yt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=w,a=w,o=k,s=j,c=le,l=M,u=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=wt(),this.name=``,this.source=new on(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ln).x}get height(){return this.source.getSize(ln).y}get depth(){return this.source.getSize(ln).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case C:e.x-=Math.floor(e.x);break;case w:e.x=e.x<0?0:1;break;case T:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case C:e.y-=Math.floor(e.y);break;case w:e.y=e.y<0?0:1;break;case T:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null,un.DEFAULT_MAPPING=300,un.DEFAULT_ANISOTROPY=1;var dn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,o=.01,s=.1,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],h=c[9],g=c[2],_=c[6],v=c[10];if(Math.abs(u-f)<o&&Math.abs(d-g)<o&&Math.abs(h-_)<o){if(Math.abs(u+f)<s&&Math.abs(d+g)<s&&Math.abs(h+_)<s&&Math.abs(l+m+v-3)<s)return this.set(1,0,0,0),this;t=Math.PI;let e=(l+1)/2,c=(m+1)/2,y=(v+1)/2,b=(u+f)/4,x=(d+g)/4,S=(h+_)/4;return e>c&&e>y?e<o?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(e),r=b/n,a=x/n):c>y?c<o?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(c),n=b/r,a=S/r):y<o?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(y),n=x/a,r=S/a),this.set(n,r,a,t),this}let y=Math.sqrt((_-h)*(_-h)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(_-h)/y,this.y=(d-g)/y,this.z=(f-u)/y,this.w=Math.acos((l+m+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fn=class extends yt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:k,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];let r=new un({width:e,height:t,depth:n.depth}),a=n.count;for(let e=0;e<a;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:k,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new on(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},pn=class extends fn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},mn=class extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hn=class extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,a,o,s,c,l,u,d,f,m,h,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l,u,d,f,m,h,g,_)}set(e,t,n,r,a,o,s,c,l,u,d,f,m,h,g,_){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=a,v[5]=o,v[9]=s,v[13]=c,v[2]=l,v[6]=u,v[10]=d,v[14]=f,v[3]=m,v[7]=h,v[11]=g,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/_n.setFromMatrixColumn(e,0).length(),a=1/_n.setFromMatrixColumn(e,1).length(),o=1/_n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order===`XYZ`){let e=o*u,n=o*d,r=s*u,a=s*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=n+r*l,t[5]=e-a*l,t[9]=-s*c,t[2]=a-e*l,t[6]=r+n*l,t[10]=o*c}else if(e.order===`YXZ`){let e=c*u,n=c*d,r=l*u,a=l*d;t[0]=e+a*s,t[4]=r*s-n,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=n*s-r,t[6]=a+e*s,t[10]=o*c}else if(e.order===`ZXY`){let e=c*u,n=c*d,r=l*u,a=l*d;t[0]=e-a*s,t[4]=-o*d,t[8]=r+n*s,t[1]=n+r*s,t[5]=o*u,t[9]=a-e*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order===`ZYX`){let e=o*u,n=o*d,r=s*u,a=s*d;t[0]=c*u,t[4]=r*l-n,t[8]=e*l+a,t[1]=c*d,t[5]=a*l+e,t[9]=n*l-r,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order===`YZX`){let e=o*c,n=o*l,r=s*c,a=s*l;t[0]=c*u,t[4]=a-e*d,t[8]=r*d+n,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=n*d+r,t[10]=e-a*d}else if(e.order===`XZY`){let e=o*c,n=o*l,r=s*c,a=s*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=e*d+a,t[5]=o*u,t[9]=n*d-r,t[2]=r*d-n,t[6]=s*u,t[10]=a*d+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yn,e,bn)}lookAt(e,t,n){let r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),xn.crossVectors(n,Cn),xn.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),xn.crossVectors(n,Cn)),xn.normalize(),Sn.crossVectors(Cn,xn),r[0]=xn.x,r[4]=Sn.x,r[8]=Cn.x,r[1]=xn.y,r[5]=Sn.y,r[9]=Cn.y,r[2]=xn.z,r[6]=Sn.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],h=n[2],g=n[6],_=n[10],v=n[14],y=n[3],b=n[7],x=n[11],S=n[15],C=r[0],w=r[4],T=r[8],E=r[12],D=r[1],O=r[5],k=r[9],A=r[13],j=r[2],M=r[6],N=r[10],ee=r[14],te=r[3],ne=r[7],re=r[11],P=r[15];return a[0]=o*C+s*D+c*j+l*te,a[4]=o*w+s*O+c*M+l*ne,a[8]=o*T+s*k+c*N+l*re,a[12]=o*E+s*A+c*ee+l*P,a[1]=u*C+d*D+f*j+m*te,a[5]=u*w+d*O+f*M+m*ne,a[9]=u*T+d*k+f*N+m*re,a[13]=u*E+d*A+f*ee+m*P,a[2]=h*C+g*D+_*j+v*te,a[6]=h*w+g*O+_*M+v*ne,a[10]=h*T+g*k+_*N+v*re,a[14]=h*E+g*A+_*ee+v*P,a[3]=y*C+b*D+x*j+S*te,a[7]=y*w+b*O+x*M+S*ne,a[11]=y*T+b*k+x*N+S*re,a[15]=y*E+b*A+x*ee+S*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],h=e[3],g=e[7],_=e[11],v=e[15],y=c*m-l*f,b=s*m-l*d,x=s*f-c*d,S=o*m-l*u,C=o*f-c*u,w=o*d-s*u;return t*(g*y-_*b+v*x)-n*(h*y-_*S+v*C)+r*(h*b-g*S+v*w)-a*(h*x-g*C+_*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],o=e[5],s=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-s*l)-n*(a*u-s*c)+r*(a*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],h=e[12],g=e[13],_=e[14],v=e[15],y=t*s-n*o,b=t*c-r*o,x=t*l-a*o,S=n*c-r*s,C=n*l-a*s,w=r*l-a*c,T=u*g-d*h,E=u*_-f*h,D=u*v-m*h,O=d*_-f*g,k=d*v-m*g,A=f*v-m*_,j=y*A-b*k+x*O+S*D-C*E+w*T;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/j;return e[0]=(s*A-c*k+l*O)*M,e[1]=(r*k-n*A-a*O)*M,e[2]=(g*w-_*C+v*S)*M,e[3]=(f*C-d*w-m*S)*M,e[4]=(c*D-o*A-l*E)*M,e[5]=(t*A-r*D+a*E)*M,e[6]=(_*x-h*w-v*b)*M,e[7]=(u*w-f*x+m*b)*M,e[8]=(o*k-s*D+l*T)*M,e[9]=(n*D-t*k-a*T)*M,e[10]=(h*C-g*x+v*y)*M,e[11]=(d*x-u*C-m*y)*M,e[12]=(s*E-o*O-c*T)*M,e[13]=(t*O-n*E+r*T)*M,e[14]=(g*b-h*S-_*y)*M,e[15]=(u*S-d*b+f*y)*M,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+n,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+n,u*c-r*o,0,l*c-r*s,u*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,d=s+s,f=a*l,m=a*u,h=a*d,g=o*u,_=o*d,v=s*d,y=c*l,b=c*u,x=c*d,S=n.x,C=n.y,w=n.z;return r[0]=(1-(g+v))*S,r[1]=(m+x)*S,r[2]=(h-b)*S,r[3]=0,r[4]=(m-x)*C,r[5]=(1-(f+v))*C,r[6]=(_+y)*C,r[7]=0,r[8]=(h+b)*w,r[9]=(_-y)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let o=_n.set(r[0],r[1],r[2]).length(),s=_n.set(r[4],r[5],r[6]).length(),c=_n.set(r[8],r[9],r[10]).length();a<0&&(o=-o),vn.copy(this);let l=1/o,u=1/s,d=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=o,n.y=s,n.z=c,this}makePerspective(e,t,n,r,a,o,s=ct,c=!1){let l=this.elements,u=2*a/(t-e),d=2*a/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),h,g;if(c)h=a/(o-a),g=o*a/(o-a);else if(s===2e3)h=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===2001)h=-o/(o-a),g=-o*a/(o-a);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=ct,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),h,g;if(c)h=1/(o-a),g=o/(o-a);else if(s===2e3)h=-2/(o-a),g=-(o+a)/(o-a);else if(s===2001)h=-1/(o-a),g=-a/(o-a);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_n=new q,vn=new gn,yn=new q(0,0,0),bn=new q(1,1,1),xn=new q,Sn=new q,Cn=new q,wn=new gn,Tn=new Kt,En=class e{constructor(t=0,n=0,r=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case`ZXY`:this._x=Math.asin(G(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case`ZYX`:this._y=Math.asin(-G(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case`YZX`:this._z=Math.asin(G(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case`XZY`:this._z=Math.asin(-G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tn.setFromEuler(this),this.setFromQuaternion(Tn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER=`XYZ`;var Dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},On=0,kn=new q,An=new Kt,jn=new gn,Mn=new q,Nn=new q,Pn=new q,Fn=new Kt,In=new q(1,0,0),Ln=new q(0,1,0),Rn=new q(0,0,1),zn={type:`added`},Bn={type:`removed`},Vn={type:`childadded`,child:null},Hn={type:`childremoved`,child:null},Un=class e extends yt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:On++}),this.uuid=wt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new En,r=new Kt,a=new q(1,1,1);function o(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new gn},normalMatrix:{value:new J}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(In,e)}rotateY(e){return this.rotateOnAxis(Ln,e)}rotateZ(e){return this.rotateOnAxis(Rn,e)}translateOnAxis(e,t){return kn.copy(e).applyQuaternion(this.quaternion),this.position.add(kn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(In,e)}translateY(e){return this.translateOnAxis(Ln,e)}translateZ(e){return this.translateOnAxis(Rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mn.copy(e):Mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Nn,Mn,this.up):jn.lookAt(Mn,Nn,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),An.setFromRotationMatrix(jn),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,e,Pn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,Fn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];a(e.shapes,r)}else a(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(a(e.materials,this.material[n]));r.material=t}else r.material=a(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(a(e.animations,n))}}if(t){let t=o(e.geometries),r=o(e.materials),a=o(e.textures),s=o(e.images),c=o(e.shapes),l=o(e.skeletons),u=o(e.animations),d=o(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),a.length>0&&(n.textures=a),s.length>0&&(n.images=s),c.length>0&&(n.shapes=c),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),d.length>0&&(n.nodes=d)}return n.object=r,n;function o(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Un.DEFAULT_UP=new q(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends Un{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Gn={type:`move`},Kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null,s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(l&&e.hand){o=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),a=this._getHandJoint(l,r);e!==null&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=e.radius),a.visible=e!==null}let r=l.joints[`index-finger-tip`],a=l.joints[`thumb-tip`],s=r.position.distanceTo(a.position);l.inputState.pinching&&s>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!l.inputState.pinching&&s<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Gn)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Xn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$t.workingColorSpace){if(e=Tt(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xn(a,r,e+1/3),this.g=Xn(a,r,e),this.b=Xn(a,r,e-1/3)}return $t.colorSpaceToWorking(this,r),this}setStyle(e,t=nt){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,o=r[1],s=r[2];switch(o){case`rgb`:case`rgba`:if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case`hsl`:case`hsla`:if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=qn[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return $t.workingToColorSpace(Qn.copy(this),e),Math.round(G(Qn.r*255,0,255))*65536+Math.round(G(Qn.g*255,0,255))*256+Math.round(G(Qn.b*255,0,255))}getHexString(e=nt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.workingToColorSpace(Qn.copy(this),t);let n=Qn.r,r=Qn.g,a=Qn.b,o=Math.max(n,r,a),s=Math.min(n,r,a),c,l,u=(s+o)/2;if(s===o)c=0,l=0;else{let e=o-s;switch(l=u<=.5?e/(o+s):e/(2-o-s),o){case n:c=(r-a)/e+(r<a?6:0);break;case r:c=(a-n)/e+2;break;case a:c=(n-r)/e+4}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$t.workingColorSpace){return $t.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=nt){$t.workingToColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,r=Qn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Yn);let n=Ot(Jn.h,Yn.h,t),r=Ot(Jn.s,Yn.s,t),a=Ot(Jn.l,Yn.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new Zn;Zn.NAMES=qn;var $n=class extends Un{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},er=new q,tr=new q,nr=new q,rr=new q,ir=new q,ar=new q,or=new q,sr=new q,cr=new q,lr=new q,ur=new dn,dr=new dn,fr=new dn,pr=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),er.subVectors(e,t),r.cross(er);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){er.subVectors(r,t),tr.subVectors(n,t),nr.subVectors(e,t);let o=er.dot(er),s=er.dot(tr),c=er.dot(nr),l=tr.dot(tr),u=tr.dot(nr),d=o*l-s*s;if(d===0)return a.set(0,0,0),null;let f=1/d,m=(l*c-s*u)*f,h=(o*u-s*c)*f;return a.set(1-m-h,h,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rr)!==null&&rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,rr)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,rr.x),c.addScaledVector(o,rr.y),c.addScaledVector(s,rr.z),c)}static getInterpolatedAttribute(e,t,n,r,a,o){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(e,t),dr.fromBufferAttribute(e,n),fr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ur,a.x),o.addScaledVector(dr,a.y),o.addScaledVector(fr,a.z),o}static isFrontFacing(e,t,n,r){return er.subVectors(n,t),tr.subVectors(e,t),er.cross(tr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),er.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,a,o){return e.getInterpolation(t,this.a,this.b,this.c,n,r,a,o)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,o,s;ir.subVectors(r,n),ar.subVectors(a,n),sr.subVectors(e,n);let c=ir.dot(sr),l=ar.dot(sr);if(c<=0&&l<=0)return t.copy(n);cr.subVectors(e,r);let u=ir.dot(cr),d=ar.dot(cr);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ir,o);lr.subVectors(e,a);let m=ir.dot(lr),h=ar.dot(lr);if(h>=0&&m<=h)return t.copy(a);let g=m*l-c*h;if(g<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(ar,s);let _=u*h-m*d;if(_<=0&&d-u>=0&&m-h>=0)return or.subVectors(a,r),s=(d-u)/(d-u+(m-h)),t.copy(r).addScaledVector(or,s);let v=1/(_+g+f);return o=g*v,s=f*v,t.copy(n).addScaledVector(ir,o).addScaledVector(ar,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mr=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,gr):gr.fromBufferAttribute(r,t),gr.applyMatrix4(e.matrixWorld),this.expandByPoint(gr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Tr.subVectors(this.max,wr),vr.subVectors(e.a,wr),yr.subVectors(e.b,wr),br.subVectors(e.c,wr),xr.subVectors(yr,vr),Sr.subVectors(br,yr),Cr.subVectors(vr,br);let t=[0,-xr.z,xr.y,0,-Sr.z,Sr.y,0,-Cr.z,Cr.y,xr.z,0,-xr.x,Sr.z,0,-Sr.x,Cr.z,0,-Cr.x,-xr.y,xr.x,0,-Sr.y,Sr.x,0,-Cr.y,Cr.x,0];return!Or(t,vr,yr,br,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,vr,yr,br,Tr))?!1:(Er.crossVectors(xr,Sr),t=[Er.x,Er.y,Er.z],Or(t,vr,yr,br,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hr=[new q,new q,new q,new q,new q,new q,new q,new q],gr=new q,_r=new mr,vr=new q,yr=new q,br=new q,xr=new q,Sr=new q,Cr=new q,wr=new q,Tr=new q,Er=new q,Dr=new q;function Or(e,t,n,r,a){for(let o=0,s=e.length-3;o<=s;o+=3){Dr.fromArray(e,o);let s=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),c=t.dot(Dr),l=n.dot(Dr),u=r.dot(Dr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}var kr=new q,Ar=new K,jr=0,Mr=class extends yt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=st,this.updateRanges=[],this.gpuType=P,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix4(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyNormalMatrix(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.transformDirection(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ut(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ut(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ut(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ut(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ut(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array),a=Wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Nr=class extends Mr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Pr=class extends Mr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Fr=class extends Mr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ir=new mr,Lr=new q,Rr=new q,zr=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ir.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,a=e.length;t<a;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Lr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Rr)),this.expandByPoint(Lr.copy(e.center).sub(Rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Br=0,Vr=new gn,Hr=new Un,Ur=new q,Wr=new mr,Gr=new mr,Kr=new q,qr=class e extends yt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Br++}),this.uuid=wt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(lt(e)?Pr:Nr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vr.makeRotationFromQuaternion(e),this.applyMatrix4(Vr),this}rotateX(e){return Vr.makeRotationX(e),this.applyMatrix4(Vr),this}rotateY(e){return Vr.makeRotationY(e),this.applyMatrix4(Vr),this}rotateZ(e){return Vr.makeRotationZ(e),this.applyMatrix4(Vr),this}translate(e,t,n){return Vr.makeTranslation(e,t,n),this.applyMatrix4(Vr),this}scale(e,t,n){return Vr.makeScale(e,t,n),this.applyMatrix4(Vr),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Fr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Kr.addVectors(this.boundingBox.min,Wr.min),this.boundingBox.expandByPoint(Kr),Kr.addVectors(this.boundingBox.max,Wr.max),this.boundingBox.expandByPoint(Kr)):(this.boundingBox.expandByPoint(Wr.min),this.boundingBox.expandByPoint(Wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(Wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Gr.setFromBufferAttribute(n),this.morphTargetsRelative?(Kr.addVectors(Wr.min,Gr.min),Wr.expandByPoint(Kr),Kr.addVectors(Wr.max,Gr.max),Wr.expandByPoint(Kr)):(Wr.expandByPoint(Gr.min),Wr.expandByPoint(Gr.max))}Wr.getCenter(n);let r=0;for(let t=0,a=e.count;t<a;t++)Kr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Kr));if(t)for(let a=0,o=t.length;a<o;a++){let o=t[a],s=this.morphTargetsRelative;for(let t=0,a=o.count;t<a;t++)Kr.fromBufferAttribute(o,t),s&&(Ur.fromBufferAttribute(e,t),Kr.add(Ur)),r=Math.max(r,n.distanceToSquared(Kr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,a=t.uv,o=this.getAttribute(`tangent`);(o===void 0||o.count!==n.count)&&(o=new Mr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,o));let s=[],c=[];for(let e=0;e<n.count;e++)s[e]=new q,c[e]=new q;let l=new q,u=new q,d=new q,f=new K,m=new K,h=new K,g=new q,_=new q;function v(e,t,r){l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(a,e),m.fromBufferAttribute(a,t),h.fromBufferAttribute(a,r),u.sub(l),d.sub(l),m.sub(f),h.sub(f);let o=1/(m.x*h.y-h.x*m.y);isFinite(o)&&(g.copy(u).multiplyScalar(h.y).addScaledVector(d,-m.y).multiplyScalar(o),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-h.x).multiplyScalar(o),s[e].add(g),s[t].add(g),s[r].add(g),c[e].add(_),c[t].add(_),c[r].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let t=0,n=y.length;t<n;++t){let n=y[t],r=n.start,a=n.count;for(let t=r,n=r+a;t<n;t+=3)v(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let b=new q,x=new q,S=new q,C=new q;function w(e){S.fromBufferAttribute(r,e),C.copy(S);let t=s[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(c[e])<0?-1:1;o.setXYZW(e,b.x,b.y,b.z,n)}for(let t=0,n=y.length;t<n;++t){let n=y[t],r=n.start,a=n.count;for(let t=r,n=r+a;t<n;t+=3)w(e.getX(t+0)),w(e.getX(t+1)),w(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Mr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q,d=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){let m=e.getX(f+0),h=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,h),o.fromBufferAttribute(t,g),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),s.fromBufferAttribute(n,m),c.fromBufferAttribute(n,h),l.fromBufferAttribute(n,g),s.add(u),c.add(u),l.add(u),n.setXYZ(m,s.x,s.y,s.z),n.setXYZ(h,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let e=0,s=t.count;e<s;e+=3)r.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),o.fromBufferAttribute(t,e+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),n.setXYZ(e+0,u.x,u.y,u.z),n.setXYZ(e+1,u.x,u.y,u.z),n.setXYZ(e+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kr.fromBufferAttribute(e,t),Kr.normalize(),e.setXYZ(t,Kr.x,Kr.y,Kr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,a=e.normalized,o=new n.constructor(t.length*r),s=0,c=0;for(let a=0,l=t.length;a<l;a++){s=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*r;for(let e=0;e<r;e++)o[c++]=n[s++]}return new Mr(o,r,a)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,a=this.attributes;for(let e in a){let o=a[e],s=t(o,r);n.setAttribute(e,s)}let o=this.morphAttributes;for(let e in o){let a=[],s=o[e];for(let e=0,n=s.length;e<n;e++){let n=s[e],o=t(n,r);a.push(o)}n.morphAttributes[e]=a}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let e=0,t=s.length;e<t;e++){let t=s[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},a=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],o=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];o.push(r.toJSON(e.data))}o.length>0&&(r[t]=o,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let a=e.morphAttributes;for(let e in a){let n=[],r=a[e];for(let e=0,a=r.length;e<a;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];this.addGroup(t.start,t.count,t.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jr=0,Yr=class extends yt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jr++}),this.uuid=wt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ot,this.stencilZFail=ot,this.stencilZPass=ot,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),a=r(e.images);t.length>0&&(n.textures=t),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Zn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Xr=new q,Zr=new q,Qr=new q,$r=new q,ei=new q,ti=new q,ni=new q,ri=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xr.copy(this.origin).addScaledVector(this.direction,t),Xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zr.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Zr);let a=e.distanceTo(t)*.5,o=-this.direction.dot(Qr),s=$r.dot(this.direction),c=-$r.dot(Qr),l=$r.lengthSq(),u=Math.abs(1-o*o),d,f,m,h;if(u>0){if(d=o*c-s,f=o*s-c,h=a*u,d>=0){if(f>=-h){if(f<=h){let e=1/u;d*=e,f*=e,m=d*(d+o*f+2*s)+f*(o*d+f+2*c)+l}else f=a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*c)+l}else f=-a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*c)+l}else f<=-h?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+l):f<=h?(d=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+l)}else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zr).addScaledVector(Qr,f),m}intersectSphere(e,t){Xr.subVectors(e.center,this.origin);let n=Xr.dot(this.direction),r=Xr.dot(Xr)-n*n,a=e.radius*e.radius;if(r>a)return null;let o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xr)!==null}intersectTriangle(e,t,n,r,a){ei.subVectors(t,e),ti.subVectors(n,e),ni.crossVectors(ei,ti);let o=this.direction.dot(ni),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;$r.subVectors(this.origin,e);let c=s*this.direction.dot(ti.crossVectors($r,ti));if(c<0)return null;let l=s*this.direction.dot(ei.cross($r));if(l<0||c+l>o)return null;let u=-s*$r.dot(ni);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Zn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ai=new gn,oi=new ri,si=new zr,ci=new q,li=new q,ui=new q,di=new q,fi=new q,pi=new q,mi=new q,hi=new q,gi=class extends Un{constructor(e=new qr,t=new ii){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){pi.set(0,0,0);for(let n=0,r=a.length;n<r;n++){let r=s[n],c=a[n];r!==0&&(fi.fromBufferAttribute(c,e),o?pi.addScaledVector(fi,r):pi.addScaledVector(fi.sub(t),r))}t.add(pi)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),si.copy(n.boundingSphere),si.applyMatrix4(a),oi.copy(e.ray).recast(e.near),!(si.containsPoint(oi.origin)===!1&&(oi.intersectSphere(si,ci)===null||oi.origin.distanceToSquared(ci)>(e.far-e.near)**2))&&(ai.copy(a).invert(),oi.copy(e.ray).applyMatrix4(ai),(n.boundingBox===null||oi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let r,a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null){if(Array.isArray(o))for(let a=0,c=f.length;a<c;a++){let c=f[a],h=o[c.materialIndex],g=Math.max(c.start,m.start),_=Math.min(s.count,Math.min(c.start+c.count,m.start+m.count));for(let a=g,o=_;a<o;a+=3){let o=s.getX(a),f=s.getX(a+1),m=s.getX(a+2);r=vi(this,h,e,n,l,u,d,o,f,m),r&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{let a=Math.max(0,m.start),c=Math.min(s.count,m.start+m.count);for(let f=a,m=c;f<m;f+=3){let a=s.getX(f),c=s.getX(f+1),m=s.getX(f+2);r=vi(this,o,e,n,l,u,d,a,c,m),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}else if(c!==void 0){if(Array.isArray(o))for(let a=0,s=f.length;a<s;a++){let s=f[a],h=o[s.materialIndex],g=Math.max(s.start,m.start),_=Math.min(c.count,Math.min(s.start+s.count,m.start+m.count));for(let a=g,o=_;a<o;a+=3){let o=a,c=a+1,f=a+2;r=vi(this,h,e,n,l,u,d,o,c,f),r&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let a=Math.max(0,m.start),s=Math.min(c.count,m.start+m.count);for(let c=a,f=s;c<f;c+=3){let a=c,s=c+1,f=c+2;r=vi(this,o,e,n,l,u,d,a,s,f),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}}}};function _i(e,t,n,r,a,o,s,c){let l;if(l=t.side===1?r.intersectTriangle(s,o,a,!0,c):r.intersectTriangle(a,o,s,t.side===0,c),l===null)return null;hi.copy(c),hi.applyMatrix4(e.matrixWorld);let u=n.ray.origin.distanceTo(hi);return u<n.near||u>n.far?null:{distance:u,point:hi.clone(),object:e}}function vi(e,t,n,r,a,o,s,c,l,u){e.getVertexPosition(c,li),e.getVertexPosition(l,ui),e.getVertexPosition(u,di);let d=_i(e,t,n,r,li,ui,di,mi);if(d){let e=new q;pr.getBarycoord(mi,li,ui,di,e),a&&(d.uv=pr.getInterpolatedAttribute(a,c,l,u,e,new K)),o&&(d.uv1=pr.getInterpolatedAttribute(o,c,l,u,e,new K)),s&&(d.normal=pr.getInterpolatedAttribute(s,c,l,u,e,new q),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));let t={a:c,b:l,c:u,normal:new q,materialIndex:0};pr.getNormal(li,ui,di,t.normal),d.face=t,d.barycoord=e}return d}var yi=class extends un{constructor(e=null,t=1,n=1,r,a,o,s,c,l=E,u=E,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bi=new q,xi=new q,Si=new J,Ci=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bi.subVectors(n,t).cross(xi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(bi),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Si.getNormalMatrix(e),r=this.coplanarPoint(bi).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new zr,Ti=new K(.5,.5),Ei=new q,Di=class{constructor(e=new Ci,t=new Ci,n=new Ci,r=new Ci,a=new Ci,o=new Ci){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ct,n=!1){let r=this.planes,a=e.elements,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6],m=a[7],h=a[8],g=a[9],_=a[10],v=a[11],y=a[12],b=a[13],x=a[14],S=a[15];if(r[0].setComponents(l-o,m-u,v-h,S-y).normalize(),r[1].setComponents(l+o,m+u,v+h,S+y).normalize(),r[2].setComponents(l+s,m+d,v+g,S+b).normalize(),r[3].setComponents(l-s,m-d,v-g,S-b).normalize(),n)r[4].setComponents(c,f,_,x).normalize(),r[5].setComponents(l-c,m-f,v-_,S-x).normalize();else if(r[4].setComponents(l-c,m-f,v-_,S-x).normalize(),t===2e3)r[5].setComponents(l+c,m+f,v+_,S+x).normalize();else if(t===2001)r[5].setComponents(c,f,_,x).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476+Ti.distanceTo(e.center),wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ei.x=r.normal.x>0?e.max.x:e.min.x,Ei.y=r.normal.y>0?e.max.y:e.min.y,Ei.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ei)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Oi=class extends Yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Zn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ki=new q,Ai=new q,ji=new gn,Mi=new ri,Ni=new zr,Pi=new q,Fi=new q,Ii=class extends Un{constructor(e=new qr,t=new Oi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ki.fromBufferAttribute(t,e-1),Ai.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ki.distanceTo(Ai);e.setAttribute(`lineDistance`,new Fr(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Ni.radius+=a,e.ray.intersectsSphere(Ni)===!1)return;ji.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ji);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let n=Math.max(0,o.start),r=Math.min(u.count,o.start+o.count);for(let a=n,o=r-1;a<o;a+=l){let n=u.getX(a),r=u.getX(a+1),o=Li(this,e,Mi,c,n,r,a);o&&t.push(o)}if(this.isLineLoop){let a=u.getX(r-1),o=u.getX(n),s=Li(this,e,Mi,c,a,o,r-1);s&&t.push(s)}}else{let n=Math.max(0,o.start),r=Math.min(d.count,o.start+o.count);for(let a=n,o=r-1;a<o;a+=l){let n=Li(this,e,Mi,c,a,a+1,a);n&&t.push(n)}if(this.isLineLoop){let a=Li(this,e,Mi,c,r-1,n,r-1);a&&t.push(a)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Li(e,t,n,r,a,o,s){let c=e.geometry.attributes.position;if(ki.fromBufferAttribute(c,a),Ai.fromBufferAttribute(c,o),n.distanceSqToSegment(ki,Ai,Pi,Fi)>r)return;Pi.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Pi);if(!(l<t.near||l>t.far))return{distance:l,point:Fi.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Ri=new q,zi=new q,Bi=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ri.fromBufferAttribute(t,e),zi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new Fr(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Vi=class extends un{constructor(e=[],t=301,n,r,a,o,s,c,l,u){super(e,t,n,r,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends un{constructor(e,t,n=re,r,a,o,s=E,c=E,l,u=ue,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new on(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ui=class extends Hi{constructor(e,t=re,n=301,r,a,o=E,s=E,c,l=ue){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wi=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gi=class e extends qr{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};let s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,m=0;h(`z`,`y`,`x`,-1,-1,n,t,e,o,a,0),h(`z`,`y`,`x`,1,-1,n,t,-e,o,a,1),h(`x`,`z`,`y`,1,1,e,n,t,r,o,2),h(`x`,`z`,`y`,1,-1,e,n,-t,r,o,3),h(`x`,`y`,`z`,1,-1,e,t,n,r,a,4),h(`x`,`y`,`z`,-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute(`position`,new Fr(l,3)),this.setAttribute(`normal`,new Fr(u,3)),this.setAttribute(`uv`,new Fr(d,2));function h(e,t,n,r,a,o,h,g,_,v,y){let b=o/_,x=h/v,S=o/2,C=h/2,w=g/2,T=_+1,E=v+1,D=0,O=0,k=new q;for(let o=0;o<E;o++){let s=o*x-C;for(let c=0;c<T;c++)k[e]=(c*b-S)*r,k[t]=s*a,k[n]=w,l.push(k.x,k.y,k.z),k[e]=0,k[t]=0,k[n]=g>0?1:-1,u.push(k.x,k.y,k.z),d.push(c/_),d.push(1-o/v),D+=1}for(let e=0;e<v;e++)for(let t=0;t<_;t++){let n=f+t+T*e,r=f+t+T*(e+1),a=f+(t+1)+T*(e+1),o=f+(t+1)+T*e;c.push(n,r,o),c.push(r,a,o),O+=6}s.addGroup(m,O,y),m+=O,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ki=class e extends qr{constructor(e=1,t=1,n=1,r=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};let l=this;r=Math.floor(r),a=Math.floor(a);let u=[],d=[],f=[],m=[],h=0,g=[],_=n/2,v=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute(`position`,new Fr(d,3)),this.setAttribute(`normal`,new Fr(f,3)),this.setAttribute(`uv`,new Fr(m,2));function y(){let o=new q,y=new q,b=0,x=(t-e)/n;for(let l=0;l<=a;l++){let u=[],v=l/a,b=v*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,a=t*c+s,l=Math.sin(a),g=Math.cos(a);y.x=b*l,y.y=-v*n+_,y.z=b*g,d.push(y.x,y.y,y.z),o.set(l,x,g).normalize(),f.push(o.x,o.y,o.z),m.push(t,1-v),u.push(h++)}g.push(u)}for(let n=0;n<r;n++)for(let r=0;r<a;r++){let o=g[r][n],s=g[r+1][n],c=g[r+1][n+1],l=g[r][n+1];(e>0||r!==0)&&(u.push(o,s,l),b+=3),(t>0||r!==a-1)&&(u.push(s,c,l),b+=3)}l.addGroup(v,b,0),v+=b}function b(n){let a=h,o=new K,g=new q,y=0,b=n===!0?e:t,x=n===!0?1:-1;for(let e=1;e<=r;e++)d.push(0,_*x,0),f.push(0,x,0),m.push(.5,.5),h++;let S=h;for(let e=0;e<=r;e++){let t=e/r*c+s,n=Math.cos(t),a=Math.sin(t);g.x=b*a,g.y=_*x,g.z=b*n,d.push(g.x,g.y,g.z),f.push(0,x,0),o.x=n*.5+.5,o.y=a*.5*x+.5,m.push(o.x,o.y),h++}for(let e=0;e<r;e++){let t=a+e,r=S+e;n===!0?u.push(r,r+1,t):u.push(r+1,r,t),y+=3}l.addGroup(v,y,n===!0?1:2),v+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class e extends qr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,u=c+1,d=e/s,f=t/c,m=[],h=[],g=[],_=[];for(let e=0;e<u;e++){let t=e*f-o;for(let n=0;n<l;n++){let r=n*d-a;h.push(r,-t,0),g.push(0,0,1),_.push(n/s),_.push(1-e/c)}}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=t+l*e,r=t+l*(e+1),a=t+1+l*(e+1),o=t+1+l*e;m.push(n,r,o),m.push(r,a,o)}this.setIndex(m),this.setAttribute(`position`,new Fr(h,3)),this.setAttribute(`normal`,new Fr(g,3)),this.setAttribute(`uv`,new Fr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ji=class e extends qr{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+s,Math.PI),l=0,u=[],d=new q,f=new q,m=[],h=[],g=[],_=[];for(let m=0;m<=n;m++){let v=[],y=m/n,b=o+y*s,x=e*Math.cos(b),S=Math.sqrt(e*e-x*x),C=0;m===0&&o===0?C=.5/t:m===n&&c===Math.PI&&(C=-.5/t);for(let e=0;e<=t;e++){let n=e/t,o=r+n*a;d.x=-S*Math.cos(o),d.y=x,d.z=S*Math.sin(o),h.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),_.push(n+C,1-y),v.push(l++)}u.push(v)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=u[e][r+1],a=u[e][r],s=u[e+1][r],l=u[e+1][r+1];(e!==0||o>0)&&m.push(t,a,l),(e!==n-1||c<Math.PI)&&m.push(a,s,l)}this.setIndex(m),this.setAttribute(`position`,new Fr(h,3)),this.setAttribute(`normal`,new Fr(g,3)),this.setAttribute(`uv`,new Fr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Yi=class e extends qr{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2,o=0,s=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a,thetaStart:o,thetaLength:s},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],u=[],d=[],f=new q,m=new q,h=new q;for(let c=0;c<=n;c++){let g=o+c/n*s;for(let o=0;o<=r;o++){let s=o/r*a;m.x=(e+t*Math.cos(g))*Math.cos(s),m.y=(e+t*Math.cos(g))*Math.sin(s),m.z=t*Math.sin(g),l.push(m.x,m.y,m.z),f.x=e*Math.cos(s),f.y=e*Math.sin(s),h.subVectors(m,f).normalize(),u.push(h.x,h.y,h.z),d.push(o/r),d.push(c/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,a=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;c.push(n,a,s),c.push(a,o,s)}this.setIndex(c),this.setAttribute(`position`,new Fr(l,3)),this.setAttribute(`normal`,new Fr(u,3)),this.setAttribute(`uv`,new Fr(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Xi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let a=e[n][r];if(Qi(a))a.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=a.clone();else if(Array.isArray(a)){if(Qi(a[0])){let e=[];for(let t=0,n=a.length;t<n;t++)e[t]=a[t].clone();t[n][r]=e}else t[n][r]=a.slice()}else t[n][r]=a}}return t}function Zi(e){let t={};for(let n=0;n<e.length;n++){let r=Xi(e[n]);for(let e in r)t[e]=r[e]}return t}function Qi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function $i(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ea(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var ta={clone:Xi,merge:Zi},na=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ra=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ia=class extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=na,this.fragmentShader=ra,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=$i(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Zn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new dn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new gn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},aa=class extends ia{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},oa=class extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Zn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sa=class extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=tt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ca=class extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function la(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var ua=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];validate_interval:{seek:{let o;linear_scan:{forward_scan:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<a)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=r,r=t[++n],e<r)break seek}o=t.length;break linear_scan}if(!(e>=a)){let s=t[1];e<s&&(n=2,a=s);for(let o=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(r=a,a=t[--n-1],e>=a)break seek}o=n,n=0;break linear_scan}break validate_interval}for(;n<o;){let r=n+o>>>1;e<t[r]?o=r:n=r+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let e=0;e!==r;++e)t[e]=n[a+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},da=class extends ua{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qe,endingEnd:Qe}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,o=e+1,s=r[a],c=r[o];if(s===void 0)switch(this.getSettings_().endingStart){case $e:a=e,s=2*t-n;break;case et:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $e:o=e,c=2*n-t;break;case et:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(c-n),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,h=(n-t)/(r-t),g=h*h,_=g*h,v=-f*_+2*f*g-f*h,y=(1+f)*_+(-1.5-2*f)*g+(-.5+f)*h+1,b=(-1-m)*_+(1.5+m)*g+.5*h,x=m*_-m*g;for(let e=0;e!==s;++e)a[e]=v*o[u+e]+y*o[l+e]+b*o[c+e]+x*o[d+e];return a}},fa=class extends ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=(n-t)/(r-t),d=1-u;for(let e=0;e!==s;++e)a[e]=o[l+e]*d+o[c+e]*u;return a}},pa=class extends ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ma=class extends ua{interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=this.inTangents,d=this.outTangents;if(!u||!d){let e=(n-t)/(r-t),u=1-e;for(let t=0;t!==s;++t)a[t]=o[l+t]*u+o[c+t]*e;return a}let f=s*2,m=e-1;for(let h=0;h!==s;++h){let s=o[l+h],g=o[c+h],_=m*f+h*2,v=d[_],y=d[_+1],b=e*f+h*2,x=u[b],S=u[b+1],C=(n-t)/(r-t),w,T,E,D,O;for(let e=0;e<8;e++){w=C*C,T=w*C,E=1-C,D=E*E,O=D*E;let e=O*t+3*D*C*v+3*E*w*x+T*r-n;if(Math.abs(e)<1e-10)break;let a=3*D*(v-t)+6*E*C*(x-v)+3*w*(r-x);if(Math.abs(a)<1e-10)break;C-=e/a,C=Math.max(0,Math.min(1,C))}a[h]=O*s+3*D*C*y+3*E*w*S+T*g}return a}},ha=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Je:t=this.InterpolantFactoryMethodDiscrete;break;case Ye:t=this.InterpolantFactoryMethodLinear;break;case Xe:t=this.InterpolantFactoryMethodSmooth;break;case Ze:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Je;case this.InterpolantFactoryMethodLinear:return Ye;case this.InterpolantFactoryMethodSmooth:return Xe;case this.InterpolantFactoryMethodBezier:return Ze}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,o=r-1;for(;a!==r&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==r){a>=o&&(o=Math.max(o,1),a=o-1);let e=this.getValueSize();this.times=n.slice(a,o),this.values=this.values.slice(a*e,o*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let o=null;for(let t=0;t!==a;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(o!==null&&o>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,o),e=!1;break}o=r}if(r!==void 0&&ut(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Xe,a=e.length-1,o=1;for(let s=1;s<a;++s){let a=!1,c=e[s];if(c!==e[s+1]&&(s!==1||c!==e[0])){if(r)a=!0;else{let e=s*n,r=e-n,o=e+n;for(let s=0;s!==n;++s){let n=t[e+s];if(n!==t[r+s]||n!==t[o+s]){a=!0;break}}}}if(a){if(s!==o){e[o]=e[s];let r=s*n,a=o*n;for(let e=0;e!==n;++e)t[a+e]=t[r+e]}++o}}if(a>0){e[o]=e[a];for(let e=a*n,r=o*n,s=0;s!==n;++s)t[r+s]=t[e+s];++o}return o===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,o),this.values=t.slice(0,o*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ha.prototype.ValueTypeName=``,ha.prototype.TimeBufferType=Float32Array,ha.prototype.ValueBufferType=Float32Array,ha.prototype.DefaultInterpolation=Ye;var ga=class extends ha{constructor(e,t,n){super(e,t,n)}};ga.prototype.ValueTypeName=`bool`,ga.prototype.ValueBufferType=Array,ga.prototype.DefaultInterpolation=Je,ga.prototype.InterpolantFactoryMethodLinear=void 0,ga.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};_a.prototype.ValueTypeName=`color`;var va=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};va.prototype.ValueTypeName=`number`;var ya=class extends ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=(n-t)/(r-t),l=e*s;for(let e=l+s;l!==e;l+=4)Kt.slerpFlat(a,0,o,l-s,o,l,c);return a}},ba=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName=`quaternion`,ba.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends ha{constructor(e,t,n){super(e,t,n)}};xa.prototype.ValueTypeName=`string`,xa.prototype.ValueBufferType=Array,xa.prototype.DefaultInterpolation=Je,xa.prototype.InterpolantFactoryMethodLinear=void 0,xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};Sa.prototype.ValueTypeName=`vector`;var Ca=class extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Zn(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wa=new gn,Ta=new q,Ea=new q,Da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=M,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ta.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ta),Ea.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ea),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oa=new q,ka=new Kt,Aa=new q,ja=class extends Un{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=ct,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oa,ka,Aa),Aa.x===1&&Aa.y===1&&Aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,ka,Aa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Oa,ka,Aa),Aa.x===1&&Aa.y===1&&Aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,ka,Aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ma=new q,Na=new K,Pa=new K,Fa=class extends ja{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(St*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ct*2*Math.atan(Math.tan(St*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z)}getViewSize(e,t){return this.getViewBounds(e,Na,Pa),t.subVectors(Pa,Na)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(St*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let e=o.fullWidth,s=o.fullHeight;a+=o.offsetX*r/e,t-=o.offsetY*n/s,r*=o.width/e,n*=o.height/s}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ia=class extends ja{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,o=a+e*this.view.width,s-=t*this.view.offsetY,c=s-t*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},La=class extends Da{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new La}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},za=class extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Ba=-90,Va=1,Ha=class extends Un{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Fa(Ba,Va,e,t);r.layers=this.layers,this.add(r);let a=new Fa(Ba,Va,e,t);a.layers=this.layers,this.add(a);let o=new Fa(Ba,Va,e,t);o.layers=this.layers,this.add(o);let s=new Fa(Ba,Va,e,t);s.layers=this.layers,this.add(s);let c=new Fa(Ba,Va,e,t);c.layers=this.layers,this.add(c);let l=new Fa(Ba,Va,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,o,s,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},Ua=class extends Fa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Wa=`\\[\\]\\.:\\/`,Ga=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ka=`[^\\[\\]\\.:\\/]`,qa=`[^`+Wa.replace(`\\.`,``)+`]`,Ja=`((?:WC+[\\/:])*)`.replace(`WC`,Ka),Ya=`(WCOD+)?`.replace(`WCOD`,qa),Xa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ka),Za=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ka),Qa=RegExp(`^`+Ja+Ya+Xa+Za+`$`),$a=[`material`,`materials`,`bones`,`map`],eo=class{constructor(e,t,n){let r=n||to.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},to=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ga,``)}static parseTrackName(e){let t=Qa.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);$a.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let a=e[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,a=n.propertyName,o=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let s=t[a];if(s===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+a+` but it wasn't found.`,t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(a===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};to.Composite=eo,to.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},to.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},to.prototype.GetterByBindingType=[to.prototype._getValue_direct,to.prototype._getValue_array,to.prototype._getValue_arrayElement,to.prototype._getValue_toArray],to.prototype.SetterByBindingTypeAndVersioning=[[to.prototype._setValue_direct,to.prototype._setValue_direct_setNeedsUpdate,to.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[to.prototype._setValue_array,to.prototype._setValue_array_setNeedsUpdate,to.prototype._setValue_array_setMatrixWorldNeedsUpdate],[to.prototype._setValue_arrayElement,to.prototype._setValue_arrayElement_setNeedsUpdate,to.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[to.prototype._setValue_fromArray,to.prototype._setValue_fromArray_setNeedsUpdate,to.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var no=new gn,ro=class{constructor(e,t,n=0,r=1/0){this.ray=new ri(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Dn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return no.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(no),this}intersectObject(e,t=!0,n=[]){return ao(e,this,n,t),n.sort(io),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)ao(e[r],this,n,t);return n.sort(io),n}};function io(e,t){return e.distance-t.distance}function ao(e,t,n,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&r===!0){let r=e.children;for(let e=0,a=r.length;e<a;e++)ao(r[e],t,n,!0)}}var Y=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=G(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(G(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}});var oo=class extends Bi{constructor(e=10,t=10,n=4473924,r=8947848){n=new Zn(n),r=new Zn(r);let a=t/2,o=e/t,s=e/2,c=[],l=[];for(let e=0,u=0,d=-s;e<=t;e++,d+=o){c.push(-s,0,d,s,0,d),c.push(d,0,-s,d,0,s);let t=e===a?n:r;t.toArray(l,u),u+=3,t.toArray(l,u),u+=3,t.toArray(l,u),u+=3,t.toArray(l,u),u+=3}let u=new qr;u.setAttribute(`position`,new Fr(c,3)),u.setAttribute(`color`,new Fr(l,3));let d=new Oi({vertexColors:!0,toneMapped:!1});super(u,d),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},so=class extends yt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){U(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function co(e,t,n,r){let a=lo(r);switch(n){case L:return e*t;case fe:return e*t/a.components*a.byteLength;case pe:return e*t/a.components*a.byteLength;case me:return e*t*2/a.components*a.byteLength;case he:return e*t*2/a.components*a.byteLength;case ce:return e*t*3/a.components*a.byteLength;case le:return e*t*4/a.components*a.byteLength;case ge:return e*t*4/a.components*a.byteLength;case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:case we:return Math.max(e,16)*Math.max(t,8)/4;case xe:case Ce:return Math.max(e,8)*Math.max(t,8)/2;case Te:case Ee:case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case R:case ke:case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case z:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case B:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case V:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case H:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ie:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Re:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ze:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ve:case He:case Ue:return Math.ceil(e/4)*Math.ceil(t/4)*16;case We:case Ge:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ke:case qe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function lo(e){switch(e){case M:case N:return{byteLength:1,components:1};case te:case ee:case F:return{byteLength:2,components:1};case ie:case ae:return{byteLength:2,components:4};case re:case ne:case P:return{byteLength:4,components:1};case I:case se:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function uo(){let e=null,t=!1,n=null,r=null;function a(t,o){n(t,o),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function fo(e){let t=new WeakMap;function n(t,n){let r=t.array,a=t.usage,o=r.byteLength,s=e.createBuffer();e.bindBuffer(n,s),e.bufferData(n,r,a),t.onUploadCallback();let c;if(r instanceof Float32Array)c=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)c=e.HALF_FLOAT;else if(r instanceof Uint16Array)c=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)c=e.SHORT;else if(r instanceof Uint32Array)c=e.UNSIGNED_INT;else if(r instanceof Int32Array)c=e.INT;else if(r instanceof Int8Array)c=e.BYTE;else if(r instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:s,type:c,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:o}}function r(t,n,r){let a=n.array,o=n.updateRanges;if(e.bindBuffer(r,t),o.length===0)e.bufferSubData(r,0,a);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<o.length;e++){let n=o[t],r=o[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,o[t]=r)}o.length=t+1;for(let t=0,n=o.length;t<n;t++){let n=o[t];e.bufferSubData(r,n.start*a.BYTES_PER_ELEMENT,a,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function a(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function o(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function s(e,a){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let o=t.get(e);if(o===void 0)t.set(e,n(e,a));else if(o.version<e.version){if(o.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(o.buffer,e,a),o.version=e.version}}return{get:a,remove:o,update:s}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new Zn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Zn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new Zn(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},po={basic:{uniforms:Zi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:Zi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Zn(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:Zi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Zn(0)},specular:{value:new Zn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:Zi([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Zn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:Zi([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Zn(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:Zi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:Zi([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:Zi([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:Zi([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:Zi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:Zi([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:Zi([Z.common,Z.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:Zi([Z.lights,Z.fog,{color:{value:new Zn(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};po.physical={uniforms:Zi([po.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new Zn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new Zn(0)},specularColor:{value:new Zn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var mo={r:0,b:0,g:0},ho=new gn,go=new J;go.set(-1,0,0,0,1,0,0,0,1);function _o(e,t,n,r,a,o){let s=new Zn(0),c=a===!0?0:1,l,u,d=null,f=0,m=null;function h(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function g(t){let r=!1,a=h(t);a===null?v(s,c):a&&a.isColor&&(v(a,1),r=!0);let l=e.xr.getEnvironmentBlendMode();l===`additive`?n.buffers.color.setClear(0,0,0,1,o):l===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(t,n){let a=h(n);a&&(a.isCubeTexture||a.mapping===306)?(u===void 0&&(u=new gi(new Gi(1,1,1),new ia({name:`BackgroundCubeMaterial`,uniforms:Xi(po.backgroundCube.uniforms),vertexShader:po.backgroundCube.vertexShader,fragmentShader:po.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=a,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ho.makeRotationFromEuler(n.backgroundRotation)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(go),u.material.toneMapped=$t.getTransfer(a.colorSpace)!==at,(d!==a||f!==a.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,d=a,f=a.version,m=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):a&&a.isTexture&&(l===void 0&&(l=new gi(new qi(2,2),new ia({name:`BackgroundMaterial`,uniforms:Xi(po.background.uniforms),vertexShader:po.background.vertexShader,fragmentShader:po.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=a,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=$t.getTransfer(a.colorSpace)!==at,a.matrixAutoUpdate===!0&&a.updateMatrix(),l.material.uniforms.uvTransform.value.copy(a.matrix),(d!==a||f!==a.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,d=a,f=a.version,m=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function v(t,r){t.getRGB(mo,ea(e)),n.buffers.color.setClear(mo.r,mo.g,mo.b,r,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,v(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,v(s,c)},render:g,addToRenderList:_,dispose:y}}function vo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=m(null),o=a,s=!1;function c(n,r,a,c,l){let d=!1,m=f(n,c,a,r);o!==m&&(o=m,u(o.object)),d=h(n,c,a,l),d&&g(n,c,a,l),l!==null&&t.update(l,e.ELEMENT_ARRAY_BUFFER),(d||s)&&(s=!1,S(n,r,a,c),l!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(l).buffer))}function l(){return e.createVertexArray()}function u(t){return e.bindVertexArray(t)}function d(t){return e.deleteVertexArray(t)}function f(e,t,n,a){let o=a.wireframe===!0,s=r[t.id];s===void 0&&(s={},r[t.id]=s);let c=e.isInstancedMesh===!0?e.id:0,u=s[c];u===void 0&&(u={},s[c]=u);let d=u[n.id];d===void 0&&(d={},u[n.id]=d);let f=d[o];return f===void 0&&(f=m(l()),d[o]=f),f}function m(e){let t=[],r=[],a=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,a[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:a,object:e,attributes:{},index:null}}function h(e,t,n,r){let a=o.attributes,s=t.attributes,c=0,l=n.getAttributes();for(let t in l)if(l[t].location>=0){let n=a[t],r=s[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;c++}return o.attributesNum!==c||o.index!==r}function g(e,t,n,r){let a={},s=t.attributes,c=0,l=n.getAttributes();for(let t in l)if(l[t].location>=0){let n=s[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),a[t]=r,c++}o.attributes=a,o.attributesNum=c,o.index=r}function _(){let e=o.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function v(e){y(e,0)}function y(t,n){let r=o.newAttributes,a=o.enabledAttributes,s=o.attributeDivisors;r[t]=1,a[t]===0&&(e.enableVertexAttribArray(t),a[t]=1),s[t]!==n&&(e.vertexAttribDivisor(t,n),s[t]=n)}function b(){let t=o.newAttributes,n=o.enabledAttributes;for(let r=0,a=n.length;r<a;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function x(t,n,r,a,o,s,c){c===!0?e.vertexAttribIPointer(t,n,r,o,s):e.vertexAttribPointer(t,n,r,a,o,s)}function S(n,r,a,o){_();let s=o.attributes,c=a.getAttributes(),l=r.defaultAttributeValues;for(let r in c){let a=c[r];if(a.location>=0){let c=s[r];if(c===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(c=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(c=n.instanceColor)),c!==void 0){let r=c.normalized,s=c.itemSize,l=t.get(c);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,m=d===e.INT||d===e.UNSIGNED_INT||c.gpuType===1013;if(c.isInterleavedBufferAttribute){let t=c.data,l=t.stride,h=c.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)y(a.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<a.locationSize;e++)v(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)x(a.location+e,s/a.locationSize,d,r,l*f,(h+s/a.locationSize*e)*f,m)}else{if(c.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)y(a.location+e,c.meshPerAttribute);n.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=c.meshPerAttribute*c.count)}else for(let e=0;e<a.locationSize;e++)v(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)x(a.location+e,s/a.locationSize,d,r,s*f,s/a.locationSize*e*f,m)}}else if(l!==void 0){let t=l[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(a.location,t);break;case 3:e.vertexAttrib3fv(a.location,t);break;case 4:e.vertexAttrib4fv(a.location,t);break;default:e.vertexAttrib1fv(a.location,t)}}}}b()}function C(){D();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)d(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function w(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)d(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function T(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let a=r[e.id];for(let e in a)d(a[e].object),delete a[e];delete r[e.id]}}}function E(e){for(let t in r){let n=r[t],a=e.isInstancedMesh===!0?e.id:0,o=n[a];if(o!==void 0){for(let e in o){let t=o[e];for(let e in t)d(t[e].object),delete t[e];delete o[e]}delete n[a],Object.keys(n).length===0&&delete r[t]}}}function D(){O(),s=!0,o!==a&&(o=a,u(o.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:D,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:v,disableUnusedAttributes:b}}function yo(e,t,n){let r;function a(e){r=e}function o(t,a){e.drawArrays(r,t,a),n.update(a,r,1)}function s(t,a,o){o!==0&&(e.drawArraysInstanced(r,t,a,o),n.update(a,r,o))}function c(e,a,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,a,0,o);let s=0;for(let e=0;e<o;e++)s+=a[e];n.update(s,r,1)}this.setMode=a,this.render=o,this.renderInstances=s,this.renderMultiDraw=c}function bo(e,t,n,r){let a;function o(){if(a!==void 0)return a;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);a=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(n){let a=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!a)}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(U(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,m=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&m===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),y=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:S,maxSamples:C,samples:w}}function xo(e){let t=this,n=null,r=0,a=!1,o=!1,s=new Ci,c=new J,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||a;return a=t,r=e.length,n},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){n=d(e,t,0)},this.setState=function(t,s,c){let f=t.clippingPlanes,m=t.clipIntersection,h=t.clipShadows,g=e.get(t);if(!a||f===null||f.length===0||o&&!h)o?d(null):u();else{let e=o?0:r,t=e*4,a=g.clippingState||null;l.value=a,a=d(f,s,t,c);for(let e=0;e!==t;++e)a[e]=n[e];g.clippingState=a,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=e}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(e,n,r,a){let o=e===null?0:e.length,u=null;if(o!==0){if(u=l.value,a!==!0||u===null){let t=r+o*4,a=n.matrixWorldInverse;c.getNormalMatrix(a),(u===null||u.length<t)&&(u=new Float32Array(t));for(let t=0,n=r;t!==o;++t,n+=4)s.copy(e[t]).applyMatrix4(a,c),s.normal.toArray(u,n),u[n+3]=s.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=o,t.numIntersection=0,u}}var So=4,Co=[.125,.215,.35,.446,.526,.582],wo=20,To=256,Eo=new Ia,Do=new Zn,Oo=null,ko=0,Ao=0,jo=!1,Mo=new q,No=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){let{size:o=256,position:s=Mo}=a;Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,ko,Ao),this._renderer.xr.enabled=jo,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:k,minFilter:k,generateMipmaps:!1,type:F,format:le,colorSpace:rt,depthBuffer:!1},r=Fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Po(r)),this._blurMaterial=Ro(r,e,t),this._ggxMaterial=Lo(r,e,t)}return r}_compileMaterial(e){let t=new gi(new qr,e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,n,r,a){let o=new Fa(90,1,t,n),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Do),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gi(new Gi,new ii({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,m=f.material,h=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(Do),h=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[t],a.y,a.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[t],a.z)):(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[t]));let u=this._cubeSize;Io(r,n*u,t>2?u:0,u,u),l.setRenderTarget(r),h&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());let a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;let s=a.uniforms;s.envMap.value=e;let c=this._cubeSize;Io(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[n];s.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u)*(0+l*1.25),{_lodMax:f}=this,m=this._sizeLods[n],h=3*m*(n>f-So?n-f+So:0),g=4*(this._cubeSize-m);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=f-t,Io(a,h,g,3*m,2*m),r.setRenderTarget(a),r.render(s,Eo),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=f-n,Io(e,h,g,3*m,2*m),r.setRenderTarget(e),r.render(s,Eo)}_blur(e,t,n,r,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,`latitudinal`,a),this._halfBlur(o,e,n,n,r,`longitudinal`,a)}_halfBlur(e,t,n,r,a,o,s){let c=this._renderer,l=this._blurMaterial;o!==`latitudinal`&&o!==`longitudinal`&&W(`blur direction must be either latitudinal or longitudinal!`);let u=this._lodMeshes[r];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*f):2*Math.PI/39,h=a/m,g=isFinite(a)?1+Math.floor(3*h):wo;g>wo&&U(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wo}`);let _=[],v=0;for(let e=0;e<wo;++e){let t=e/h,n=Math.exp(-t*t/2);_.push(n),e===0?v+=n:e<g&&(v+=2*n)}for(let e=0;e<_.length;e++)_[e]=_[e]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=o===`latitudinal`,s&&(d.poleAxis.value=s);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let b=this._sizeLods[r];Io(t,3*b*(r>y-So?r-y+So:0),4*(this._cubeSize-b),3*b,2*b),c.setRenderTarget(t),c.render(u,Eo)}};function Po(e){let t=[],n=[],r=[],a=e,o=e-So+1+Co.length;for(let s=0;s<o;s++){let o=2**a;t.push(o);let c=1/o;s>e-So?c=Co[s-e+So-1]:s===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=new Float32Array(108),h=new Float32Array(72),g=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];m.set(r,18*e),h.set(f,12*e);let a=[e,e,e,e,e,e];g.set(a,6*e)}let _=new qr;_.setAttribute(`position`,new Mr(m,3)),_.setAttribute(`uv`,new Mr(h,2)),_.setAttribute(`faceIndex`,new Mr(g,1)),r.push(new gi(_,null)),a>So&&a--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Fo(e,t,n){let r=new pn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Io(e,t,n,r,a){e.viewport.set(t,n,r,a),e.scissor.set(t,n,r,a)}function Lo(e,t,n){return new ia({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:To,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ro(e,t,n){let r=new Float32Array(wo),a=new q(0,1,0);return new ia({name:`SphericalGaussianBlur`,defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zo(){return new ia({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bo(){return new ia({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ho=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gi(5,5,5),a=new ia({name:`CubemapFromEquirect`,uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new gi(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=k),new Ha(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(a)}};function Uo(e){let t=new WeakMap,n=new WeakMap,r=null;function a(e,t=!1){return e==null?null:t?s(e):o(e)}function o(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return c(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let a=new Ho(r.height);return a.fromEquirectangularTexture(e,n),t.set(n,a),n.addEventListener(`dispose`,u),c(a.texture,n.mapping)}return null}}}return n}function s(t){if(t&&t.isTexture){let a=t.mapping,o=a===303||a===304,s=a===301||a===302;if(o||s){let a=n.get(t),c=a===void 0?0:a.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==c)return r===null&&(r=new No(e)),a=o?r.fromEquirectangular(t,a):r.fromCubemap(t,a),a.texture.pmremVersion=t.pmremVersion,n.set(t,a),a.texture;if(a!==void 0)return a.texture;{let c=t.image;return o&&c&&c.height>0||s&&c&&l(c)?(r===null&&(r=new No(e)),a=o?r.fromEquirectangular(t):r.fromCubemap(t),a.texture.pmremVersion=t.pmremVersion,n.set(t,a),t.addEventListener(`dispose`,d),a.texture):null}}}return t}function c(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function l(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function u(e){let n=e.target;n.removeEventListener(`dispose`,u);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function d(e){let t=e.target;t.removeEventListener(`dispose`,d);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function f(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:f}}function Wo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&gt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Go(e,t,n,r){let a={},o=new WeakMap;function s(e){let c=e.target;c.index!==null&&t.remove(c.index);for(let e in c.attributes)t.remove(c.attributes[e]);c.removeEventListener(`dispose`,s),delete a[c.id];let l=o.get(c);l&&(t.remove(l),o.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function c(e,t){return a[t.id]===!0?t:(t.addEventListener(`dispose`,s),a[t.id]=!0,n.memory.geometries++,t)}function l(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function u(e){let n=[],r=e.index,a=e.attributes.position,s=0;if(a===void 0)return;if(r!==null){let e=r.array;s=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],a=e[t+1],o=e[t+2];n.push(r,a,a,o,o,r)}}else{let e=a.array;s=a.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,a=t+2;n.push(e,r,r,a,a,e)}}let c=new(a.count>=65535?Pr:Nr)(n,1);c.version=s;let l=o.get(e);l&&t.remove(l),o.set(e,c)}function d(e){let t=o.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&u(e)}else u(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function Ko(e,t,n){let r;function a(e){r=e}let o,s;function c(e){o=e.type,s=e.bytesPerElement}function l(t,a){e.drawElements(r,a,o,t*s),n.update(a,r,1)}function u(t,a,c){c!==0&&(e.drawElementsInstanced(r,a,o,t*s,c),n.update(a,r,c))}function d(e,a,s){if(s===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,a,0,o,e,0,s);let c=0;for(let e=0;e<s;e++)c+=a[e];n.update(c,r,1)}this.setMode=a,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function qo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,a){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*a;break;case e.LINES:n.lines+=t/2*a;break;case e.LINE_STRIP:n.lines+=a*(t-1);break;case e.LINE_LOOP:n.lines+=a*t;break;case e.POINTS:n.points+=a*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Jo(e,t,n){let r=new WeakMap,a=new dn;function o(o,s,c){let l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=s.morphAttributes.position!==void 0,n=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],m=0;e===!0&&(m=1),n===!0&&(m=2),o===!0&&(m=3);let h=s.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*d),v=new mn(_,h,g,d);v.type=P,v.needsUpdate=!0;let y=m*4;for(let t=0;t<d;t++){let r=c[t],s=l[t],d=u[t],f=h*g*4*t;for(let t=0;t<r.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(r,t),_[f+c+0]=a.x,_[f+c+1]=a.y,_[f+c+2]=a.z,_[f+c+3]=0),n===!0&&(a.fromBufferAttribute(s,t),_[f+c+4]=a.x,_[f+c+5]=a.y,_[f+c+6]=a.z,_[f+c+7]=0),o===!0&&(a.fromBufferAttribute(d,t),_[f+c+8]=a.x,_[f+c+9]=a.y,_[f+c+10]=a.z,_[f+c+11]=d.itemSize===4?a.w:1)}}f={count:d,texture:v,size:new K(h,g)},r.set(s,f);function b(){v.dispose(),r.delete(s),s.removeEventListener(`dispose`,b)}s.addEventListener(`dispose`,b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,n);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,l)}c.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),c.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:o}}function Yo(e,t,n,r,a){let o=new WeakMap;function s(r){let s=a.render.frame,c=r.geometry,u=t.get(r,c);if(o.get(u)!==s&&(t.update(u),o.set(u,s)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,l)===!1&&r.addEventListener(`dispose`,l),o.get(r)!==s&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),o.set(r,s))),r.isSkinnedMesh){let e=r.skeleton;o.get(e)!==s&&(e.update(),o.set(e,s))}return u}function c(){o=new WeakMap}function l(e){let t=e.target;t.removeEventListener(`dispose`,l),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:s,dispose:c}}var Xo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Zo(e,t,n,r,a,o){let s=new pn(t,n,{type:e,depthBuffer:a,stencilBuffer:o,samples:r?4:0,depthTexture:a?new Hi(t,n):void 0}),c=new pn(t,n,{type:F,depthBuffer:!1,stencilBuffer:!1}),l=new qr;l.setAttribute(`position`,new Fr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Fr([0,2,0,0,2,0],2));let u=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new gi(l,u),f=new Ia(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){s.setSize(e,t),c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=s.width,n=s.height;for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(s),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=s,r=c;for(let a=0;a<y.length;a++){let o=y[a];if(o.enabled!==!1&&(o.render(e,r,n,t),o.needsSwap!==!1)){let e=n;n=r,r=e}}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,u.defines={},$t.getTransfer(m)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Xo[h];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),c.dispose(),l.dispose(),u.dispose()}}var Qo=new un,$o=new Hi(1,1),es=new mn,ts=new hn,ns=new Vi,rs=[],is=[],as=new Float32Array(16),os=new Float32Array(9),ss=new Float32Array(4);function cs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let a=t*n,o=rs[a];if(o===void 0&&(o=new Float32Array(a),rs[a]=o),t!==0){r.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=n,e[r].toArray(o,a)}return o}function ls(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function us(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ds(e,t){let n=is[t];n===void 0&&(n=new Int32Array(t),is[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function fs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ls(n,t))return;e.uniform2fv(this.addr,t),us(n,t)}}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ls(n,t))return;e.uniform3fv(this.addr,t),us(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ls(n,t))return;e.uniform4fv(this.addr,t),us(n,t)}}function gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ls(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),us(n,t)}else{if(ls(n,r))return;ss.set(r),e.uniformMatrix2fv(this.addr,!1,ss),us(n,r)}}function _s(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ls(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),us(n,t)}else{if(ls(n,r))return;os.set(r),e.uniformMatrix3fv(this.addr,!1,os),us(n,r)}}function vs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ls(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),us(n,t)}else{if(ls(n,r))return;as.set(r),e.uniformMatrix4fv(this.addr,!1,as),us(n,r)}}function ys(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ls(n,t))return;e.uniform2iv(this.addr,t),us(n,t)}}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ls(n,t))return;e.uniform3iv(this.addr,t),us(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ls(n,t))return;e.uniform4iv(this.addr,t),us(n,t)}}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ls(n,t))return;e.uniform2uiv(this.addr,t),us(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ls(n,t))return;e.uniform3uiv(this.addr,t),us(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ls(n,t))return;e.uniform4uiv(this.addr,t),us(n,t)}}function Ds(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let o;this.type===e.SAMPLER_2D_SHADOW?($o.compareFunction=n.isReversedDepthBuffer()?518:515,o=$o):o=Qo,n.setTexture2D(t||o,a)}function Os(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(t||ts,a)}function ks(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(t||ns,a)}function As(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(t||es,a)}function js(e){switch(e){case 5126:return fs;case 35664:return ps;case 35665:return ms;case 35666:return hs;case 35674:return gs;case 35675:return _s;case 35676:return vs;case 5124:case 35670:return ys;case 35667:case 35671:return bs;case 35668:case 35672:return xs;case 35669:case 35673:return Ss;case 5125:return Cs;case 36294:return ws;case 36295:return Ts;case 36296:return Es;case 35678:case 36198:case 36298:case 36306:case 35682:return Ds;case 35679:case 36299:case 36307:return Os;case 35680:case 36300:case 36308:case 36293:return ks;case 36289:case 36303:case 36311:case 36292:return As}}function Ms(e,t){e.uniform1fv(this.addr,t)}function Ns(e,t){let n=cs(t,this.size,2);e.uniform2fv(this.addr,n)}function Ps(e,t){let n=cs(t,this.size,3);e.uniform3fv(this.addr,n)}function Fs(e,t){let n=cs(t,this.size,4);e.uniform4fv(this.addr,n)}function Is(e,t){let n=cs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ls(e,t){let n=cs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Rs(e,t){let n=cs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function zs(e,t){e.uniform1iv(this.addr,t)}function Bs(e,t){e.uniform2iv(this.addr,t)}function Vs(e,t){e.uniform3iv(this.addr,t)}function Hs(e,t){e.uniform4iv(this.addr,t)}function Us(e,t){e.uniform1uiv(this.addr,t)}function Ws(e,t){e.uniform2uiv(this.addr,t)}function Gs(e,t){e.uniform3uiv(this.addr,t)}function Ks(e,t){e.uniform4uiv(this.addr,t)}function qs(e,t,n){let r=this.cache,a=t.length,o=ds(n,a);ls(r,o)||(e.uniform1iv(this.addr,o),us(r,o));let s;s=this.type===e.SAMPLER_2D_SHADOW?$o:Qo;for(let e=0;e!==a;++e)n.setTexture2D(t[e]||s,o[e])}function Js(e,t,n){let r=this.cache,a=t.length,o=ds(n,a);ls(r,o)||(e.uniform1iv(this.addr,o),us(r,o));for(let e=0;e!==a;++e)n.setTexture3D(t[e]||ts,o[e])}function Ys(e,t,n){let r=this.cache,a=t.length,o=ds(n,a);ls(r,o)||(e.uniform1iv(this.addr,o),us(r,o));for(let e=0;e!==a;++e)n.setTextureCube(t[e]||ns,o[e])}function Xs(e,t,n){let r=this.cache,a=t.length,o=ds(n,a);ls(r,o)||(e.uniform1iv(this.addr,o),us(r,o));for(let e=0;e!==a;++e)n.setTexture2DArray(t[e]||es,o[e])}function Zs(e){switch(e){case 5126:return Ms;case 35664:return Ns;case 35665:return Ps;case 35666:return Fs;case 35674:return Is;case 35675:return Ls;case 35676:return Rs;case 5124:case 35670:return zs;case 35667:case 35671:return Bs;case 35668:case 35672:return Vs;case 35669:case 35673:return Hs;case 5125:return Us;case 36294:return Ws;case 36295:return Gs;case 36296:return Ks;case 35678:case 36198:case 36298:case 36306:case 35682:return qs;case 35679:case 36299:case 36307:return Js;case 35680:case 36300:case 36308:case 36293:return Ys;case 36289:case 36303:case 36311:case 36292:return Xs}}var Qs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=js(t.type)}},$s=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zs(t.type)}},ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,o=r.length;a!==o;++a){let o=r[a];o.setValue(e,t[o.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function nc(e,t){e.seq.push(t),e.map[t.id]=t}function rc(e,t,n){let r=e.name,a=r.length;for(tc.lastIndex=0;;){let o=tc.exec(r),s=tc.lastIndex,c=o[1],l=o[2]===`]`,u=o[3];if(l&&(c|=0),u===void 0||u===`[`&&s+2===a){nc(n,u===void 0?new Qs(c,e,t):new $s(c,e,t));break}{let e=n.map[c];e===void 0&&(e=new ec(c),nc(n,e)),n=e}}}var ic=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);rc(n,e.getUniformLocation(t,n.name),this)}let r=[],a=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):a.push(t);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){let o=t[a],s=n[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function ac(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var oc=37297,sc=0;function cc(e,t){let n=e.split(`
`),r=[],a=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let e=a;e<o;e++){let a=e+1;r.push(`${a===t?`>`:` `} ${a}: ${n[e]}`)}return r.join(`
`)}var lc=new J;function uc(e){$t._getMatrix(lc,$t.workingColorSpace,e);let t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(e)){case it:return[t,`LinearTransferOETF`];case at:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function dc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||``).trim();if(r&&a===``)return``;let o=/ERROR: 0:(\d+)/.exec(a);if(o){let r=parseInt(o[1]);return n.toUpperCase()+`

`+a+`

`+cc(e.getShaderSource(t),r)}return a}function fc(e,t){let n=uc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var pc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function mc(e,t){let n=pc[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var hc=new q;function gc(){return $t.getLuminanceCoefficients(hc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${hc.x.toFixed(4)}, ${hc.y.toFixed(4)}, ${hc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function _c(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(bc).join(`
`)}function vc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function yc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let r=e.getActiveAttrib(t,a),o=r.name,s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function bc(e){return e!==``}function xc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cc=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(e){return e.replace(Cc,Ec)}var Tc=new Map;function Ec(e,t){let n=X[t];if(n===void 0){let e=Tc.get(t);if(e!==void 0)n=X[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return wc(n)}var Dc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(e){return e.replace(Dc,kc)}function kc(e,t,n,r){let a=``;for(let e=parseInt(t);e<parseInt(n);e++)a+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return a}function Ac(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var jc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Mc(e){return jc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Nc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Pc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Nc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Fc={302:`ENVMAP_MODE_REFRACTION`};function Ic(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Fc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Lc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Rc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Lc[e.combine]||`ENVMAP_BLENDING_NONE`}function zc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Bc(e,t,n,r){let a=e.getContext(),o=n.defines,s=n.vertexShader,c=n.fragmentShader,l=Mc(n),u=Pc(n),d=Ic(n),f=Rc(n),m=zc(n),h=_c(n),g=vc(o),_=a.createProgram(),v,y,b=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g].filter(bc).join(`
`),v.length>0&&(v+=`
`),y=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g].filter(bc).join(`
`),y.length>0&&(y+=`
`)):(v=[Ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(bc).join(`
`),y=[Ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,g,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,m?`#define CUBEUV_TEXEL_WIDTH `+m.texelWidth:``,m?`#define CUBEUV_TEXEL_HEIGHT `+m.texelHeight:``,m?`#define CUBEUV_MAX_MIP `+m.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:mc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,fc(`linearToOutputTexel`,n.outputColorSpace),gc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(bc).join(`
`)),s=wc(s),s=xc(s,n),s=Sc(s,n),c=wc(c),c=xc(c,n),c=Sc(c,n),s=Oc(s),c=Oc(c),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[h,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+v,y=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+y);let x=b+v+s,S=b+y+c,C=ac(a,a.VERTEX_SHADER,x),w=ac(a,a.FRAGMENT_SHADER,S);a.attachShader(_,C),a.attachShader(_,w),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,`position`):a.bindAttribLocation(_,0,n.index0AttributeName),a.linkProgram(_);function T(t){if(e.debug.checkShaderErrors){let n=a.getProgramInfoLog(_)||``,r=a.getShaderInfoLog(C)||``,o=a.getShaderInfoLog(w)||``,s=n.trim(),c=r.trim(),l=o.trim(),u=!0,d=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1){if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(a,_,C,w);else{let e=dc(a,C,`vertex`),n=dc(a,w,`fragment`);W(`WebGLProgram: Shader Error `+a.getError()+` - VALIDATE_STATUS `+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+s+`
`+e+`
`+n)}}else s===``?(c===``||l===``)&&(d=!1):U(`WebGLProgram: Program Info Log:`,s);d&&(t.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:v},fragmentShader:{log:l,prefix:y}})}a.deleteShader(C),a.deleteShader(w),E=new ic(a,_),D=yc(a,_)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(_,oc)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sc++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}var Vc=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=Vc++,this.code=e,this.usedTimes=0}};function Wc(e){return e===1030||e===37490||e===36285}function Gc(e,t,n,r,a,o){let s=new Dn,c=new Hc,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,m=r.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,d,_,v){let y=d.fog,b=_.geometry,x=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,S=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,C=t.get(a.envMap||x,S),w=C&&C.mapping===306?C.image.height:null,T=h[a.type];a.precision!==null&&(m=r.getMaxPrecision(a.precision),m!==a.precision&&U(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let E=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,D=E===void 0?0:E.length,O=0;b.morphAttributes.position!==void 0&&(O=1),b.morphAttributes.normal!==void 0&&(O=2),b.morphAttributes.color!==void 0&&(O=3);let k,A,j,M;if(T){let e=po[T];k=e.vertexShader,A=e.fragmentShader}else{k=a.vertexShader,A=a.fragmentShader;let e=c.getVertexShaderStage(a),t=c.getFragmentShaderStage(a);c.update(a,e,t),j=e.id,M=t.id}let N=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=_.isInstancedMesh===!0,ne=_.isBatchedMesh===!0,re=!!a.map,P=!!a.matcap,F=!!C,ie=!!a.aoMap,ae=!!a.lightMap,oe=!!a.bumpMap&&a.wireframe===!1,I=!!a.normalMap,se=!!a.displacementMap,L=!!a.emissiveMap,ce=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,he=a.transmission>0,ge=ue&&!!a.anisotropyMap,_e=de&&!!a.clearcoatMap,ve=de&&!!a.clearcoatNormalMap,ye=de&&!!a.clearcoatRoughnessMap,be=pe&&!!a.iridescenceMap,xe=pe&&!!a.iridescenceThicknessMap,Se=me&&!!a.sheenColorMap,Ce=me&&!!a.sheenRoughnessMap,we=!!a.specularMap,Te=!!a.specularColorMap,Ee=!!a.specularIntensityMap,R=he&&!!a.transmissionMap,De=he&&!!a.thicknessMap,Oe=!!a.gradientMap,ke=!!a.alphaMap,Ae=a.alphaTest>0,je=!!a.alphaHash,z=!!a.extensions,Me=0;a.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:T,shaderType:a.type,shaderName:a.name,vertexShader:k,fragmentShader:A,defines:a.defines,customVertexShaderID:j,customFragmentShaderID:M,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:ne,batchingColor:ne&&_._colorsTexture!==null,instancing:te,instancingColor:te&&_.instanceColor!==null,instancingMorph:te&&_.morphTexture!==null,outputColorSpace:N===null?e.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!a.alphaToCoverage,map:re,matcap:P,envMap:F,envMapMode:F&&C.mapping,envMapCubeUVHeight:w,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:I,displacementMap:se,emissiveMap:L,normalMapObjectSpace:I&&a.normalMapType===1,normalMapTangentSpace:I&&a.normalMapType===0,packedNormalMap:I&&a.normalMapType===0&&Wc(a.normalMap.format),metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:ge,clearcoat:de,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:R,thicknessMap:De,gradientMap:Oe,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:a.combine,mapUv:re&&g(a.map.channel),aoMapUv:ie&&g(a.aoMap.channel),lightMapUv:ae&&g(a.lightMap.channel),bumpMapUv:oe&&g(a.bumpMap.channel),normalMapUv:I&&g(a.normalMap.channel),displacementMapUv:se&&g(a.displacementMap.channel),emissiveMapUv:L&&g(a.emissiveMap.channel),metalnessMapUv:ce&&g(a.metalnessMap.channel),roughnessMapUv:le&&g(a.roughnessMap.channel),anisotropyMapUv:ge&&g(a.anisotropyMap.channel),clearcoatMapUv:_e&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(a.sheenRoughnessMap.channel),specularMapUv:we&&g(a.specularMap.channel),specularColorMapUv:Te&&g(a.specularColorMap.channel),specularIntensityMapUv:Ee&&g(a.specularIntensityMap.channel),transmissionMapUv:R&&g(a.transmissionMap.channel),thicknessMapUv:De&&g(a.thicknessMap.channel),alphaMapUv:ke&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(I||ue),vertexNormals:!!b.attributes.normal,vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!b.attributes.uv&&(re||ke),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.wireframe===!1&&(a.flatShading===!0||b.attributes.normal===void 0&&I===!1&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:O,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:v.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:re&&a.map.isVideoTexture===!0&&$t.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&a.emissiveMap.isVideoTexture===!0&&$t.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:z&&a.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(z&&a.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=po[t];n=ta.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r=d.get(n);return r===void 0?(r=new Bc(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function Kc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function a(t,n,r){e.get(t)[n]=r}function o(){e=new WeakMap}return{has:t,get:n,remove:r,update:a,dispose:o}}function qc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yc(){let e=[],t=0,n=[],r=[],a=[];function o(){t=0,n.length=0,r.length=0,a.length=0}function s(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function c(n,r,a,o,c,l){let u=e[t];return u===void 0?(u={id:n.id,object:n,geometry:r,material:a,materialVariant:s(n),groupOrder:o,renderOrder:n.renderOrder,z:c,group:l},e[t]=u):(u.id=n.id,u.object=n,u.geometry=r,u.material=a,u.materialVariant=s(n),u.groupOrder=o,u.renderOrder=n.renderOrder,u.z=c,u.group=l),t++,u}function l(e,t,o,s,l,u){let d=c(e,t,o,s,l,u);o.transmission>0?r.push(d):o.transparent===!0?a.push(d):n.push(d)}function u(e,t,o,s,l,u){let d=c(e,t,o,s,l,u);o.transmission>0?r.unshift(d):o.transparent===!0?a.unshift(d):n.unshift(d)}function d(e,t,o){n.length>1&&n.sort(e||qc),r.length>1&&r.sort(t||Jc),a.length>1&&a.sort(t||Jc),o&&(n.reverse(),r.reverse(),a.reverse())}function f(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:a,init:o,push:l,unshift:u,finish:f,sort:d}}function Xc(){let e=new WeakMap;function t(t,n){let r=e.get(t),a;return r===void 0?(a=new Yc,e.set(t,[a])):n>=r.length?(a=new Yc,r.push(a)):a=r[n],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new q,color:new Zn};break;case`SpotLight`:n={position:new q,direction:new q,color:new Zn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Zn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Zn,groundColor:new Zn};break;case`RectAreaLight`:n={color:new Zn,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $c=0;function el(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function tl(e){let t=new Zc,n=Qc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let a=new q,o=new gn,s=new gn;function c(a){let o=0,s=0,c=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let l=0,u=0,d=0,f=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(el);for(let e=0,x=a.length;e<x;e++){let x=a[e],S=x.color,C=x.intensity,w=x.distance,T=null;if(x.shadow&&x.shadow.map&&(T=x.shadow.map.texture.format===1030?x.shadow.map.texture:x.shadow.map.depthTexture||x.shadow.map.texture),x.isAmbientLight)o+=S.r*C,s+=S.g*C,c+=S.b*C;else if(x.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(x.sh.coefficients[e],C);b++}else if(x.isDirectionalLight){let e=t.get(x);if(e.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){let e=x.shadow,t=n.get(x);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[l]=t,r.directionalShadowMap[l]=T,r.directionalShadowMatrix[l]=x.shadow.matrix,h++}r.directional[l]=e,l++}else if(x.isSpotLight){let e=t.get(x);e.position.setFromMatrixPosition(x.matrixWorld),e.color.copy(S).multiplyScalar(C),e.distance=w,e.coneCos=Math.cos(x.angle),e.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),e.decay=x.decay,r.spot[d]=e;let a=x.shadow;if(x.map&&(r.spotLightMap[v]=x.map,v++,a.updateMatrices(x),x.castShadow&&y++),r.spotLightMatrix[d]=a.matrix,x.castShadow){let e=n.get(x);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,r.spotShadow[d]=e,r.spotShadowMap[d]=T,_++}d++}else if(x.isRectAreaLight){let e=t.get(x);e.color.copy(S).multiplyScalar(C),e.halfWidth.set(x.width*.5,0,0),e.halfHeight.set(0,x.height*.5,0),r.rectArea[f]=e,f++}else if(x.isPointLight){let e=t.get(x);if(e.color.copy(x.color).multiplyScalar(x.intensity),e.distance=x.distance,e.decay=x.decay,x.castShadow){let e=x.shadow,t=n.get(x);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[u]=t,r.pointShadowMap[u]=T,r.pointShadowMatrix[u]=x.shadow.matrix,g++}r.point[u]=e,u++}else if(x.isHemisphereLight){let e=t.get(x);e.skyColor.copy(x.color).multiplyScalar(C),e.groundColor.copy(x.groundColor).multiplyScalar(C),r.hemi[m]=e,m++}}f>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=o,r.ambient[1]=s,r.ambient[2]=c;let x=r.hash;(x.directionalLength!==l||x.pointLength!==u||x.spotLength!==d||x.rectAreaLength!==f||x.hemiLength!==m||x.numDirectionalShadows!==h||x.numPointShadows!==g||x.numSpotShadows!==_||x.numSpotMaps!==v||x.numLightProbes!==b)&&(r.directional.length=l,r.spot.length=d,r.rectArea.length=f,r.point.length=u,r.hemi.length=m,r.directionalShadow.length=h,r.directionalShadowMap.length=h,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=h,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=_+v-y,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=b,x.directionalLength=l,x.pointLength=u,x.spotLength=d,x.rectAreaLength=f,x.hemiLength=m,x.numDirectionalShadows=h,x.numPointShadows=g,x.numSpotShadows=_,x.numSpotMaps=v,x.numLightProbes=b,r.version=$c++)}function l(e,t){let n=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,m=e.length;t<m;t++){let m=e[t];if(m.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),n++}else if(m.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(m.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),l++}else if(m.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(m.matrixWorld),e.position.applyMatrix4(f),s.identity(),o.copy(m.matrixWorld),o.premultiply(f),s.extractRotation(o),e.halfWidth.set(m.width*.5,0,0),e.halfHeight.set(0,m.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),u++}else if(m.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(m.matrixWorld),e.position.applyMatrix4(f),c++}else if(m.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(m.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:r}}function nl(e){let t=new tl(e),n=[],r=[],a=[];function o(e){f.camera=e,n.length=0,r.length=0,a.length=0}function s(e){n.push(e)}function c(e){r.push(e)}function l(e){a.push(e)}function u(){t.setup(n)}function d(e){t.setupView(n,e)}let f={lightsArray:n,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:u,setupLightsView:d,pushLight:s,pushShadow:c,pushLightProbeGrid:l}}function rl(e){let t=new WeakMap;function n(n,r=0){let a=t.get(n),o;return a===void 0?(o=new nl(e),t.set(n,[o])):r>=a.length?(o=new nl(e),a.push(o)):o=a[r],o}function r(){t=new WeakMap}return{get:n,dispose:r}}var il=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,al=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ol=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],sl=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],cl=new gn,ll=new q,ul=new q;function dl(e,t,n){let r=new Di,a=new K,o=new K,s=new dn,c=new sa,l=new ca,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},m=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:il,fragmentShader:al}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new qr;g.setAttribute(`position`,new Mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gi(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,c){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){U(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new pn(a.x,a.y,{format:me,type:F,minFilter:k,magFilter:k,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new Hi(a.x,a.y,P),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=ue,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=E,f.map.depthTexture.magFilter=E}else u.isPointLight?(f.map=new Ho(a.x),f.map.depthTexture=new Ui(a.x,re)):(f.map=new pn(a.x,a.y),f.map.depthTexture=new Hi(a.x,a.y,re)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=ue,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=k,f.map.depthTexture.magFilter=k):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=E,f.map.depthTexture.magFilter=E);f.camera.updateProjectionMatrix()}let v=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ll.setFromMatrixPosition(u.matrixWorld),e.position.copy(ll),ul.copy(e.position),ul.add(ol[t]),e.up.copy(sl[t]),e.lookAt(ul),e.updateMatrixWorld(),n.makeTranslation(-ll.x,-ll.y,-ll.z),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);r=f.getFrustum(),S(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&b(f,c),f.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,f)};function b(n,r){let o=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new pn(a.x,a.y,{format:me,type:F})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,o,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,o,h,_,null)}function x(t,n,r,a){let o=null,s=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(s!==void 0)o=s;else if(o=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=o.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let a=r[t];a===void 0&&(a=o.clone(),r[t]=a,n.addEventListener(`dispose`,C)),o=a}if(o.visible=n.visible,o.wireframe=n.wireframe,a===3?o.side=n.shadowSide===null?n.side:n.shadowSide:o.side=n.shadowSide===null?f[n.side]:n.shadowSide,o.alphaMap=n.alphaMap,o.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,o.map=n.map,o.clipShadows=n.clipShadows,o.clippingPlanes=n.clippingPlanes,o.clipIntersection=n.clipIntersection,o.displacementMap=n.displacementMap,o.displacementScale=n.displacementScale,o.displacementBias=n.displacementBias,o.wireframeLinewidth=n.wireframeLinewidth,o.linewidth=n.linewidth,r.isPointLight===!0&&o.isMeshDistanceMaterial===!0){let t=e.properties.get(o);t.light=r}return o}function S(n,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(a.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);let r=t.update(n),l=n.material;if(Array.isArray(l)){let t=r.groups;for(let u=0,d=t.length;u<d;u++){let d=t[u],f=l[d.materialIndex];if(f&&f.visible){let t=x(n,f,s,c);n.onBeforeShadow(e,n,a,o,r,t,d),e.renderBufferDirect(o,null,r,t,n,d),n.onAfterShadow(e,n,a,o,r,t,d)}}}else if(l.visible){let t=x(n,l,s,c);n.onBeforeShadow(e,n,a,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,a,o,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fl(e,t){function n(){let t=!1,n=new dn,r=null,a=new dn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,o,s,c){c===!0&&(t*=s,r*=s,o*=s),n.set(t,r,o,s),a.equals(n)===!1&&(e.clearColor(t,r,o,s),a.copy(n))},reset:function(){t=!1,r=null,a.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,a=null,o=null,s=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let a=s;s=null,this.setClear(a)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){a!==t&&!n&&(e.depthMask(t),a=t)},setFunc:function(t){if(r&&(t=vt[t]),o!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}o=t}},setLocked:function(e){n=e},setClear:function(t){s!==t&&(s=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,a=null,o=null,s=null,r=!1}}}function a(){let t=!1,n=null,r=null,a=null,o=null,s=null,c=null,l=null,u=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,s){(r!==t||a!==n||o!==s)&&(e.stencilFunc(t,n,s),r=t,a=n,o=s)},setOp:function(t,n,r){(s!==t||c!==n||l!==r)&&(e.stencilOp(t,n,r),s=t,c=n,l=r)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,n=null,r=null,a=null,o=null,s=null,c=null,l=null,u=null}}}let o=new n,s=new r,c=new a,l=new WeakMap,u=new WeakMap,d={},f={},m={},h=new WeakMap,g=[],_=null,v=!1,y=null,b=null,x=null,S=null,C=null,w=null,T=null,E=new Zn(0,0,0),D=0,O=!1,k=null,A=null,j=null,M=null,N=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=ne>=1);let P=null,F={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new dn().fromArray(ie),I=new dn().fromArray(ae);function se(t,n,r,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<r;s++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let L={};L[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),ce(e.DEPTH_TEST),s.setFunc(3),_e(!1),ve(1),ce(e.CULL_FACE),he(0);function ce(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function le(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ue(t,n){return m[t]!==n&&(e.bindFramebuffer(t,n),m[t]=n,t===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=g,a=!1;if(t){r=h.get(n),r===void 0&&(r=[],h.set(n,r));let o=t.textures;if(r.length!==o.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=o.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=o.length,a=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,a=!0);a&&e.drawBuffers(r)}function fe(t){return _!==t&&(e.useProgram(t),_=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,a,o,s,c,l,u,d){if(t===0){v===!0&&(le(e.BLEND),v=!1);return}if(v===!1&&(ce(e.BLEND),v=!0),t!==5){if(t!==y||d!==O){if((b!==100||C!==100)&&(e.blendEquation(e.FUNC_ADD),b=100,C=100),d)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}x=null,S=null,w=null,T=null,E.set(0,0,0),D=0,y=t,O=d}return}o||=n,s||=r,c||=a,(n!==b||o!==C)&&(e.blendEquationSeparate(pe[n],pe[o]),b=n,C=o),(r!==x||a!==S||s!==w||c!==T)&&(e.blendFuncSeparate(me[r],me[a],me[s],me[c]),x=r,S=a,w=s,T=c),(l.equals(E)===!1||u!==D)&&(e.blendColor(l.r,l.g,l.b,u),E.copy(l),D=u),y=t,O=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),o.setMask(t.colorWrite);let a=t.stencilWrite;c.setTest(a),a&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){k!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),k=t)}function ve(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==A&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),A=t}function ye(t){t!==j&&(te&&e.lineWidth(t),j=t)}function be(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(M!==n||N!==r)&&(M=n,N=r,s.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function Ce(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let a=F[r];a===void 0&&(a={type:void 0,texture:void 0},F[r]=a),(a.type!==t||a.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||L[t]),a.type=t,a.texture=n)}function we(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function R(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ne(t){return f[t]===void 0?e.getParameter(t):f[t]}function Pe(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function B(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function V(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let a=r.get(t);a===void 0&&(a=e.getUniformBlockIndex(n,t.name),r.set(t,a))}function H(t,n){let r=u.get(n).get(t);l.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),l.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},P=null,F={},m={},h=new WeakMap,g=[],_=null,v=!1,y=null,b=null,x=null,S=null,C=null,w=null,T=null,E=new Zn(0,0,0),D=0,O=!1,k=null,A=null,j=null,M=null,N=null,oe.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:z,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:V,uniformBlockBinding:H,texStorage2D:Ae,texStorage3D:je,texSubImage2D:R,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:B,viewport:Fe,reset:Ie}}function pl(e,t,n,r,a,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new K,d=new WeakMap,f=new Set,m,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):dt(`canvas`)}function v(e,t,n){let r=1,a=Ne(e);if((a.width>n||a.height>n)&&(r=n/Math.max(a.width,a.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*a.width),o=Math.floor(r*a.height);m===void 0&&(m=_(n,o));let s=t?_(n,o):m;return s.width=n,s.height=o,s.getContext(`2d`).drawImage(e,0,0,n,o),U(`WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+n+`x`+o+`).`),s}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,a,o,s,c=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;o&&(l=t.get(`EXT_texture_norm16`),l||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=r;if(r===e.RED&&(a===e.FLOAT&&(u=e.R32F),a===e.HALF_FLOAT&&(u=e.R16F),a===e.UNSIGNED_BYTE&&(u=e.R8),a===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),a===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),r===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.R8UI),a===e.UNSIGNED_SHORT&&(u=e.R16UI),a===e.UNSIGNED_INT&&(u=e.R32UI),a===e.BYTE&&(u=e.R8I),a===e.SHORT&&(u=e.R16I),a===e.INT&&(u=e.R32I)),r===e.RG&&(a===e.FLOAT&&(u=e.RG32F),a===e.HALF_FLOAT&&(u=e.RG16F),a===e.UNSIGNED_BYTE&&(u=e.RG8),a===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),a===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RG8UI),a===e.UNSIGNED_SHORT&&(u=e.RG16UI),a===e.UNSIGNED_INT&&(u=e.RG32UI),a===e.BYTE&&(u=e.RG8I),a===e.SHORT&&(u=e.RG16I),a===e.INT&&(u=e.RG32I)),r===e.RGB_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGB8UI),a===e.UNSIGNED_SHORT&&(u=e.RGB16UI),a===e.UNSIGNED_INT&&(u=e.RGB32UI),a===e.BYTE&&(u=e.RGB8I),a===e.SHORT&&(u=e.RGB16I),a===e.INT&&(u=e.RGB32I)),r===e.RGBA_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),a===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),a===e.UNSIGNED_INT&&(u=e.RGBA32UI),a===e.BYTE&&(u=e.RGBA8I),a===e.SHORT&&(u=e.RGBA16I),a===e.INT&&(u=e.RGBA32I)),r===e.RGB&&(a===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),a===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),a===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),a===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),r===e.RGBA){let t=c?it:$t.getTransfer(s);a===e.FLOAT&&(u=e.RGBA32F),a===e.HALF_FLOAT&&(u=e.RGBA16F),a===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),a===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),a===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function N(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),ne(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),P(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,a=h.get(n);if(a){let r=a[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(a).length===0&&h.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let a=t.source,o=h.get(a);delete o[n.__cacheKey],s.memory.textures--}function P(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(a[t])}r.remove(t)}let F=0;function ie(){F=0}function ae(){return F}function oe(e){F=e}function I(){let e=F;return e>=a.maxTextures&&U(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+a.maxTextures),F+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function L(t,a){let o=r.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&o.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(o,t,a);return}}else t.isExternalTexture&&(o.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,o.__webglTexture,e.TEXTURE0+a)}function ce(t,a){let o=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&o.__version!==t.version){ye(o,t,a);return}t.isExternalTexture&&(o.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,o.__webglTexture,e.TEXTURE0+a)}function le(t,a){let o=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&o.__version!==t.version){ye(o,t,a);return}n.bindTexture(e.TEXTURE_3D,o.__webglTexture,e.TEXTURE0+a)}function ue(t,a){let o=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&o.__version!==t.version){be(o,t,a);return}n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture,e.TEXTURE0+a)}let fe={[C]:e.REPEAT,[w]:e.CLAMP_TO_EDGE,[T]:e.MIRRORED_REPEAT},pe={[E]:e.NEAREST,[D]:e.NEAREST_MIPMAP_NEAREST,[O]:e.NEAREST_MIPMAP_LINEAR,[k]:e.LINEAR,[A]:e.LINEAR_MIPMAP_NEAREST,[j]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,o){if(o.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(o.magFilter===1006||o.magFilter===1007||o.magFilter===1005||o.magFilter===1008||o.minFilter===1006||o.minFilter===1007||o.minFilter===1005||o.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[o.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[o.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[o.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[o.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[o.minFilter]),o.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[o.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(o.magFilter===1003||o.minFilter!==1005&&o.minFilter!==1008||o.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(o.anisotropy>1||r.get(o).__currentAnisotropy){let s=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,a.getMaxAnisotropy())),r.get(o).__currentAnisotropy=o.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let a=n.source,o=h.get(a);o===void 0&&(o={},h.set(a,o));let c=se(n);if(c!==t.__cacheKey){o[c]===void 0&&(o[c]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),o[c].usedTimes++;let a=o[t.__cacheKey];a!==void 0&&(o[t.__cacheKey].usedTimes--,a.usedTimes===0&&re(n)),t.__cacheKey=c,t.__webglTexture=o[c].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,a,o){let s=t.updateRanges;if(s.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,a,o,r.data);else{s.sort((e,t)=>e.start-t.start);let c=0;for(let e=1;e<s.length;e++){let t=s[c],n=s[e],a=t.start+t.count,o=_e(n.start,r.width,4),l=_e(t.start,r.width,4);n.start<=a+1&&o===l&&_e(n.start+n.count-1,r.width,4)===o?t.count=Math.max(t.count,n.start+n.count-t.start):(++c,s[c]=n)}s.length=c+1;let l=n.getParameter(e.UNPACK_ROW_LENGTH),u=n.getParameter(e.UNPACK_SKIP_PIXELS),d=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,c=s.length;t<c;t++){let c=s[t],l=Math.floor(c.start/4),u=Math.ceil(c.count/4),d=l%r.width,f=Math.floor(l/r.width),m=u;n.pixelStorei(e.UNPACK_SKIP_PIXELS,d),n.pixelStorei(e.UNPACK_SKIP_ROWS,f),n.texSubImage2D(e.TEXTURE_2D,0,d,f,m,1,a,o,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,l),n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d)}}function ye(t,s,c){let l=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(l=e.TEXTURE_3D);let u=ge(t,s),d=s.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let m=r.get(d);if(d.version!==m.__version||u===!0){if(n.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&s.image instanceof ImageBitmap)){let t=$t.getPrimaries($t.workingColorSpace),r=s.colorSpace===``?null:$t.getPrimaries(s.colorSpace),a=s.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let t=v(s.image,!1,a.maxTextureSize);t=Me(s,t);let r=o.convert(s.format,s.colorSpace),h=o.convert(s.type),g=S(s.internalFormat,r,h,s.normalized,s.colorSpace,s.isVideoTexture);he(l,s);let _,x=s.mipmaps,C=s.isVideoTexture!==!0,w=m.__version===void 0||u===!0,T=d.dataReady,E=N(s,t);if(s.isDepthTexture)g=M(s.format===de,s.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,g,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,g,t.width,t.height,0,r,h,null));else if(s.isDataTexture){if(x.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,g,x[0].width,x[0].height);for(let t=0,a=x.length;t<a;t++)_=x[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,r,h,_.data);s.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,g,t.width,t.height),T&&ve(s,t,r,h)):n.texImage2D(e.TEXTURE_2D,0,g,t.width,t.height,0,r,h,t.data)}else if(s.isCompressedTexture){if(s.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,g,x[0].width,x[0].height,t.depth);for(let a=0,o=x.length;a<o;a++)if(_=x[a],s.format!==1023){if(r!==null){if(C){if(T){if(s.layerUpdates.size>0){let t=co(_.width,_.height,s.format,s.type);for(let o of s.layerUpdates){let s=_.data.subarray(o*t/_.data.BYTES_PER_ELEMENT,(o+1)*t/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,_.width,_.height,1,r,s)}s.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,_.width,_.height,t.depth,r,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,g,_.width,_.height,t.depth,0,_.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,_.width,_.height,t.depth,r,h,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,g,_.width,_.height,t.depth,0,r,h,_.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,g,x[0].width,x[0].height);for(let t=0,a=x.length;t<a;t++)_=x[t],s.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,r,h,_.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(s.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,g,t.width,t.height,t.depth),T){if(s.layerUpdates.size>0){let a=co(t.width,t.height,s.format,s.type);for(let o of s.layerUpdates){let s=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,h,s)}s.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,h,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,t.width,t.height,t.depth,0,r,h,t.data)}else if(s.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,g,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,h,t.data)):n.texImage3D(e.TEXTURE_3D,0,g,t.width,t.height,t.depth,0,r,h,t.data);else if(s.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,g,t.width,t.height);else{let a=t.width,o=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,g,a,o,0,r,h,null),a>>=1,o>>=1}}}else if(s.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(s),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,a=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,a,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(x.length>0){if(C&&w){let t=Ne(x[0]);n.texStorage2D(e.TEXTURE_2D,E,g,t.width,t.height)}for(let t=0,a=x.length;t<a;t++)_=x[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,h,_):n.texImage2D(e.TEXTURE_2D,t,g,r,h,_);s.generateMipmaps=!1}else if(C){if(w){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,E,g,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,h,t)}else n.texImage2D(e.TEXTURE_2D,0,g,r,h,t);y(s)&&b(l),m.__version=d.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function be(t,s,c){if(s.image.length!==6)return;let l=ge(t,s),u=s.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=$t.getPrimaries($t.workingColorSpace),r=s.colorSpace===``?null:$t.getPrimaries(s.colorSpace),f=s.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let m=s.isCompressedTexture||s.image[0].isCompressedTexture,h=s.image[0]&&s.image[0].isDataTexture,g=[];for(let e=0;e<6;e++)!m&&!h?g[e]=v(s.image[e],!0,a.maxCubemapSize):g[e]=h?s.image[e].image:s.image[e],g[e]=Me(s,g[e]);let _=g[0],x=o.convert(s.format,s.colorSpace),C=o.convert(s.type),w=S(s.internalFormat,x,C,s.normalized,s.colorSpace),T=s.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=N(s,_);he(e.TEXTURE_CUBE_MAP,s);let k;if(m){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,w,_.width,_.height);for(let t=0;t<6;t++){k=g[t].mipmaps;for(let r=0;r<k.length;r++){let a=k[r];s.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,x,C,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,w,a.width,a.height,0,x,C,a.data):x===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,x,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,w,a.width,a.height,0,a.data)}}}else{if(k=s.mipmaps,T&&E){k.length>0&&O++;let t=Ne(g[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,w,t.width,t.height)}for(let t=0;t<6;t++)if(h){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g[t].width,g[t].height,x,C,g[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,w,g[t].width,g[t].height,0,x,C,g[t].data);for(let r=0;r<k.length;r++){let a=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,a.width,a.height,x,C,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,w,a.width,a.height,0,x,C,a.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,x,C,g[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,w,x,C,g[t]);for(let r=0;r<k.length;r++){let a=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,x,C,a.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,w,x,C,a.image[t])}}}y(s)&&b(e.TEXTURE_CUBE_MAP),d.__version=u.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function xe(t,a,s,l,u,d){let f=o.convert(s.format,s.colorSpace),m=o.convert(s.type),h=S(s.internalFormat,f,m,s.normalized,s.colorSpace),g=r.get(a),_=r.get(s);if(_.__renderTarget=a,!g.__hasExternalTextures){let t=Math.max(1,a.width>>d),r=Math.max(1,a.height>>d);u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY?n.texImage3D(u,d,h,t,r,a.depth,0,f,m,null):n.texImage2D(u,d,h,t,r,0,f,m,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),je(a)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,u,_.__webglTexture,0,Ae(a)):(u===e.TEXTURE_2D||u>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&u<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,l,u,_.__webglTexture,d),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let a=n.depthTexture,o=a&&a.isDepthTexture?a.type:null,s=M(n.stencilBuffer,o),l=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),s,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),s,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,s,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,l,e.RENDERBUFFER,t)}else{let t=n.textures;for(let a=0;a<t.length;a++){let s=t[a],l=o.convert(s.format,s.colorSpace),u=o.convert(s.type),d=S(s.internalFormat,l,u,s.normalized,s.colorSpace);je(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),d,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),d,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,d,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,a,s){let l=a.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let u=r.get(a.depthTexture);if(u.__renderTarget=a,(!u.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),l){if(u.__webglInit===void 0&&(u.__webglInit=!0,a.depthTexture.addEventListener(`dispose`,ee)),u.__webglTexture===void 0){u.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),he(e.TEXTURE_CUBE_MAP,a.depthTexture);let t=o.convert(a.depthTexture.format),r=o.convert(a.depthTexture.type),s;a.depthTexture.format===1026?s=e.DEPTH_COMPONENT24:a.depthTexture.format===1027&&(s=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,s,a.width,a.height,0,t,r,null)}}else L(a.depthTexture,0);let d=u.__webglTexture,f=Ae(a),m=l?e.TEXTURE_CUBE_MAP_POSITIVE_X+s:e.TEXTURE_2D,h=a.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===1026)je(a)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,h,m,d,0,f):e.framebufferTexture2D(e.FRAMEBUFFER,h,m,d,0);else if(a.depthTexture.format===1027)je(a)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,h,m,d,0,f):e.framebufferTexture2D(e.FRAMEBUFFER,h,m,d,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let a=r.get(t),o=t.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),e){let t=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),a.__depthDisposeCallback=t}a.__boundDepthTexture=e}if(t.depthTexture&&!a.__autoAllocateDepthBuffer){if(o)for(let e=0;e<6;e++)Ce(a.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(a.__webglFramebuffer[0],t,0):Ce(a.__webglFramebuffer,t,0)}}else if(o){a.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[r]),a.__webglDepthbuffer[r]===void 0)a.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(a.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=a.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,o),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,o)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),Se(a.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,a){let o=r.get(t);n!==void 0&&xe(o.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),a!==void 0&&we(t)}function Ee(t){let a=t.texture,c=r.get(t),l=r.get(a);t.addEventListener(`dispose`,te);let u=t.textures,d=t.isWebGLCubeRenderTarget===!0,f=u.length>1;if(f||(l.__webglTexture===void 0&&(l.__webglTexture=e.createTexture()),l.__version=a.version,s.memory.textures++),d){c.__webglFramebuffer=[];for(let t=0;t<6;t++)if(a.mipmaps&&a.mipmaps.length>0){c.__webglFramebuffer[t]=[];for(let n=0;n<a.mipmaps.length;n++)c.__webglFramebuffer[t][n]=e.createFramebuffer()}else c.__webglFramebuffer[t]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){c.__webglFramebuffer=[];for(let t=0;t<a.mipmaps.length;t++)c.__webglFramebuffer[t]=e.createFramebuffer()}else c.__webglFramebuffer=e.createFramebuffer();if(f)for(let t=0,n=u.length;t<n;t++){let n=r.get(u[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&je(t)===!1){c.__webglMultisampledFramebuffer=e.createFramebuffer(),c.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let n=0;n<u.length;n++){let r=u[n];c.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let a=o.convert(r.format,r.colorSpace),s=o.convert(r.type),l=S(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),d=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,d,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,c.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(c.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(c.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(d){n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),he(e.TEXTURE_CUBE_MAP,a);for(let n=0;n<6;n++)if(a.mipmaps&&a.mipmaps.length>0)for(let r=0;r<a.mipmaps.length;r++)xe(c.__webglFramebuffer[n][r],t,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else xe(c.__webglFramebuffer[n],t,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(a)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){for(let a=0,o=u.length;a<o;a++){let o=u[a],s=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,s.__webglTexture),he(l,o),xe(c.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+a,l,0),y(o)&&b(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,l.__webglTexture),he(r,a),a.mipmaps&&a.mipmaps.length>0)for(let n=0;n<a.mipmaps.length;n++)xe(c.__webglFramebuffer[n],t,a,e.COLOR_ATTACHMENT0,r,n);else xe(c.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0,r,0);y(a)&&b(r),n.unbindTexture()}t.depthBuffer&&we(t)}function R(e){let t=e.textures;for(let a=0,o=t.length;a<o;a++){let o=t[a];if(y(o)){let t=x(e),a=r.get(o).__webglTexture;n.bindTexture(t,a),b(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(je(t)===!1){let a=t.textures,o=t.width,s=t.height,c=e.COLOR_BUFFER_BIT,u=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,d=r.get(t),f=a.length>1;if(f)for(let t=0;t<a.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer);let m=t.texture.mipmaps;m&&m.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let n=0;n<a.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(c|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(c|=e.STENCIL_BUFFER_BIT)),f){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,d.__webglColorRenderbuffer[n]);let t=r.get(a[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,o,s,0,0,o,s,c,e.NEAREST),l===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(De.push(u),Oe.push(u),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),f)for(let t=0;t<a.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,d.__webglColorRenderbuffer[t]);let o=r.get(a[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,o,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(a.maxSamples,e.samples)}function je(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&($t.getTransfer(n)===`srgb`?(r!==1023||a!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=L,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ml(e,t){function n(n,r=``){let a,o=$t.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===36196||n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return a.COMPRESSED_R11_EAC;if(n===37489)return a.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return a.COMPRESSED_RG11_EAC;if(n===37491)return a.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ia({vertexShader:hl,fragmentShader:gl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gi(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vl=class extends yt{constructor(e,t){super();let n=this,r=null,a=1,o=null,s=`local-floor`,c=1,l=null,u=null,d=null,f=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new _l,v={},y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new K,T=null,E=new Fa;E.viewport=new dn;let D=new Fa;D.viewport=new dn;let O=[E,D],k=new Ua,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Kn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Kn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Kn,S[e]=t),t.getHandSpace()};function N(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}A=null,j=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),m=null,f=null,d=null,r=null,x=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?m:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,o=null,s=null;y.depth&&(s=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?de:ue,o=y.stencil?oe:re);let c={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(c),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new pn(f.textureWidth,f.textureHeight,{format:le,type:M,depthTexture:new Hi(f.textureWidth,f.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new pn(m.framebufferWidth,m.framebufferHeight,{format:le,type:M,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let a=S[r];a&&a.connect(n)}}let ne=new q,P=new q;function F(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(P),a=t.projectionMatrix.elements,o=n.projectionMatrix.elements,s=a[14]/(a[10]-1),c=a[14]/(a[10]+1),l=(a[9]+1)/a[5],u=(a[9]-1)/a[5],d=(a[8]-1)/a[0],f=(o[8]+1)/o[0],m=s*d,h=s*f,g=r/(-d+f),_=g*-d;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(_),e.translateZ(g),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),a[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=s+g,n=c+g,a=m-_,o=h+(r-_),d=l*c/n*t,f=u*c/n*t;e.projectionMatrix.makePerspective(a,o,d,f,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let a=e.parent,o=k.cameras;ie(k,a);for(let e=0;e<o.length;e++)ie(o[e],a);o.length===2?F(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),ae(e,k,a)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(f!==null||m!==null)return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return v[e]};let I=null;function se(t,a){if(u=a.getViewerPose(l||o),h=a,u!==null){let t=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let a=!1;t.length!==k.cameras.length&&(k.cameras.length=0,a=!0);for(let n=0;n<t.length;n++){let r=t[n],o=null;if(m!==null)o=m.getViewport(r);else{let t=d.getViewSubImage(f,r);o=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let s=O[n];s===void 0&&(s=new Fa,s.layers.enable(n),s.viewport=new dn,O[n]=s),s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(r.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),n===0&&(k.matrix.copy(s.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),a===!0&&k.cameras.push(s)}let o=r.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(o&&o.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Wi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,a,l||o)}I&&I(t,a),a.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:a}),h=null}let L=new uo;L.setAnimationLoop(se),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},yl=new gn,bl=new J;bl.set(-1,0,0,0,1,0,0,0,1);function xl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ea(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function a(e,t,n,r,a){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?o(e,t):t.isMeshLambertMaterial?(o(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(o(e,t),f(e,t)):t.isMeshPhongMaterial?(o(e,t),d(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(o(e,t),m(e,t),t.isMeshPhysicalMaterial&&h(e,t,a)):t.isMeshMatcapMaterial?(o(e,t),g(e,t)):t.isMeshDepthMaterial?o(e,t):t.isMeshDistanceMaterial?(o(e,t),_(e,t)):t.isMeshNormalMaterial?o(e,t):t.isLineBasicMaterial?(s(e,t),t.isLineDashedMaterial&&c(e,t)):t.isPointsMaterial?l(e,t,n,r):t.isSpriteMaterial?u(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function o(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let a=t.get(r),o=a.envMap,s=a.envMapRotation;o&&(e.envMap.value=o,e.envMapRotation.value.setFromMatrix4(yl.makeRotationFromEuler(s)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(bl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function s(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function c(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function l(e,t,r,a){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=a*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function f(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function m(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function h(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function g(e,t){t.matcap&&(e.matcap.value=t.matcap)}function _(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Sl(e,t,n,r){let a={},o={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function u(e,n){let s=a[e.id];s===void 0&&(v(e),s=d(e),a[e.id]=s,e.addEventListener(`dispose`,b));let c=n.program;r.updateUBOMapping(e,c);let l=t.render.frame;o[e.id]!==l&&(m(e),o[e.id]=l)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),a=t.__size,o=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,a,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function m(t){let n=a[t.id],r=t.uniforms,o=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)h(t[n],e,n,o);else h(t,e,0,o)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(t,n,r,a){if(_(t,n,r,a)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let a=r[n],o=y(a);g(a,t.__data,e),typeof a!=`number`&&typeof a!=`boolean`&&!a.isMatrix3&&!ArrayBuffer.isView(a)&&(e+=o.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function g(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function _(e,t,n,r){let a=e.value,o=t+`_`+n;if(r[o]===void 0)return r[o]=typeof a==`number`||typeof a==`boolean`?a:ArrayBuffer.isView(a)?a.slice():a.clone(),!0;{let e=r[o];if(typeof a==`number`||typeof a==`boolean`){if(e!==a)return r[o]=a,!0}else if(ArrayBuffer.isView(a))return!0;else if(e.equals(a)===!1)return e.copy(a),!0}return!1}function v(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],a=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=a.length;e<r;e++){let r=a[e],o=y(r),s=n%16,c=s%o.boundary,l=s+c;n+=c,l!==0&&16-l<o.storage&&(n+=16-l),t.__data=new Float32Array(o.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=o.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function y(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function b(t){let n=t.target;n.removeEventListener(`dispose`,b);let r=s.indexOf(n.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(a[n.id]),delete a[n.id],delete o[n.id]}function x(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},o={}}return{bind:l,update:u,dispose:x}}var Cl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wl=null;function Tl(){return wl===null&&(wl=new yi(Cl,16,16,me,F),wl.name=`DFG_LUT`,wl.minFilter=k,wl.magFilter=k,wl.wrapS=w,wl.wrapT=w,wl.generateMipmaps=!1,wl.needsUpdate=!0),wl}var El=class{constructor(e={}){let{canvas:t=ft(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=M}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=o;let g=m,_=new Set([ge,he,pe]),v=new Set([M,re,te,oe,ie,ae]),y=new Uint32Array(4),b=new Int32Array(4),x=new q,S=null,C=null,w=[],T=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,k=null,A=null,N=null,ee=null;this._outputColorSpace=nt;let ne=0,P=0,I=null,se=-1,L=null,ce=new dn,le=new dn,ue=null,de=new Zn(0),fe=0,me=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new dn(0,0,me,_e),Se=new dn(0,0,me,_e),Ce=!1,we=new Di,Te=!1,Ee=!1,R=new gn,De=new q,Oe=new dn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?ve:1}let z=n;function Me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,tt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),z===null){let t=`webgl2`;if(z=Me(t,e),z===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw W(`WebGLRenderer: `+e.message),e}let Ne,Pe,B,Fe,V,H,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe;function $e(){Ne=new Wo(z),Ne.init(),Xe=new ml(z,Ne),Pe=new bo(z,Ne,e,Xe),B=new fl(z,Ne),Pe.reversedDepthBuffer&&f&&B.buffers.depth.setReversed(!0),A=z.createFramebuffer(),N=z.createFramebuffer(),ee=z.createFramebuffer(),Fe=new qo(z),V=new Kc,H=new pl(z,Ne,B,V,Pe,Xe,Fe),Ie=new Uo(D),Le=new fo(z),Ze=new vo(z,Le),Re=new Go(z,Le,Fe,Ze),ze=new Yo(z,Re,Le,Ze,Fe),qe=new Jo(z,Pe,H),We=new xo(V),Be=new Gc(D,Ie,Ne,Pe,Ze,We),Ve=new xl(D,V),He=new Xc,Ue=new rl(Ne),Ke=new _o(D,Ie,B,ze,h,c),Ge=new dl(D,ze,Pe),Qe=new Sl(z,Fe,Pe,B),Je=new yo(z,Ne,Fe),Ye=new Ko(z,Ne,Fe),Fe.programs=Be.programs,D.capabilities=Pe,D.extensions=Ne,D.properties=V,D.renderLists=He,D.shadowMap=Ge,D.state=B,D.info=Fe}$e(),g!==1009&&(E=new Zo(g,t.width,t.height,s,r,a));let et=new vl(D,z);this.xr=et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(me,_e,!1))},this.getSize=function(e){return e.set(me,_e)},this.setSize=function(e,n,r=!0){if(et.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),B.viewport(ce.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),B.scissor(le.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){B.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=_.has(t)}if(e){let e=I.texture.type,t=v.has(e),n=Ke.getClearColor(),r=Ke.getClearAlpha(),a=n.r,o=n.g,s=n.b;t?(y[0]=a,y[1]=o,y[2]=s,y[3]=r,z.clearBufferuiv(z.COLOR,0,y)):(b[0]=a,b[1]=o,b[2]=s,b[3]=r,z.clearBufferiv(z.COLOR,0,b))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),Ke.dispose(),He.dispose(),Ue.dispose(),V.dispose(),Ie.dispose(),ze.dispose(),Ze.dispose(),Qe.dispose(),Be.dispose(),et.dispose(),et.removeEventListener(`sessionstart`,pt),et.removeEventListener(`sessionend`,ht),gt.stop()};function tt(e){e.preventDefault(),mt(`WebGLRenderer: Context Lost.`),O=!0}function rt(){mt(`WebGLRenderer: Context Restored.`),O=!1;let e=Fe.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,a=Ge.type;$e(),Fe.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=a}function it(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){st(e),V.remove(e)}function st(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,a,o){t===null&&(t=ke);let s=a.isMesh&&a.matrixWorld.determinantAffine()<0,c=Et(e,t,n,r,a);B.setMaterial(r,s);let l=n.index,u=1;if(r.wireframe===!0){if(l=Re.getWireframeAttribute(n),l===void 0)return;u=2}let d=n.drawRange,f=n.attributes.position,m=d.start*u,h=(d.start+d.count)*u;o!==null&&(m=Math.max(m,o.start*u),h=Math.min(h,(o.start+o.count)*u)),l===null?f!=null&&(m=Math.max(m,0),h=Math.min(h,f.count)):(m=Math.max(m,0),h=Math.min(h,l.count));let g=h-m;if(g<0||g===1/0)return;Ze.setup(a,r,c,n,l);let _,v=Je;if(l!==null&&(_=Le.get(l),v=Ye,v.setIndex(_)),a.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*je()),v.setMode(z.LINES)):v.setMode(z.TRIANGLES);else if(a.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*je()),a.isLineSegments?v.setMode(z.LINES):a.isLineLoop?v.setMode(z.LINE_LOOP):v.setMode(z.LINE_STRIP)}else a.isPoints?v.setMode(z.POINTS):a.isSprite&&v.setMode(z.TRIANGLES);if(a.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))v.renderMultiDraw(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount);else{let e=a._multiDrawStarts,t=a._multiDrawCounts,n=a._multiDrawCount,o=l?Le.get(l).bytesPerElement:1,s=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)s.setValue(z,`_gl_DrawID`,r),v.render(e[r]/o,t[r])}}else if(a.isInstancedMesh)v.renderInstances(m,g,a.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);v.renderInstances(m,g,t)}else v.render(m,g)};function lt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,n),e.side=0,e.needsUpdate=!0,Ct(e,t,n),e.side=2):Ct(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),C=Ue.get(n),C.init(t),T.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let a=0;a<t.length;a++){let o=t[a];lt(o,n,e),r.add(o)}else lt(t,n,e),r.add(t)}}),C=T.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function pt(){gt.stop()}function ht(){gt.start()}let gt=new uo;gt.setAnimationLoop(dt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ut=e,et.setAnimationLoop(e),e===null?gt.stop():gt.start()},et.addEventListener(`sessionstart`,pt),et.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;k!==null&&k.renderStart(e,t);let n=et.enabled===!0&&et.isPresenting===!0,r=E!==null&&(I===null||n)&&E.begin(D,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(t),t=et.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,I),C=Ue.get(e,T.length),C.init(t),C.state.textureUnits=H.getTextureUnits(),T.push(C),R.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(R,ct,t.reversedDepth),Ee=this.localClippingEnabled,Te=We.init(this.clippingPlanes,Ee),S=He.get(e,w.length),S.init(),w.push(S),et.enabled===!0&&et.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,D.sortObjects)}vt(e,t,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(ye,be,t.reversedDepth),Ae=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ae&&Ke.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&We.beginShadows();let a=C.state.shadowsArray;if(Ge.render(a,e,t),Te===!0&&We.endShadows(),(r&&E.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(C.setupLights(),t.isArrayCamera){let a=t.cameras;if(r.length>0)for(let t=0,o=a.length;t<o;t++){let o=a[t];bt(n,r,e,o)}Ae&&Ke.render(e);for(let t=0,n=a.length;t<n;t++){let n=a[t];yt(S,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Ae&&Ke.render(e),yt(S,e,t)}I!==null&&P===0&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),Ze.resetDefaultState(),se=-1,L=null,T.pop(),T.length>0?(C=T[T.length-1],H.setTextureUnits(C.state.textureUnits),Te===!0&&We.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,w.pop(),S=w.length>0?w[w.length-1]:null,k!==null&&k.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||we.intersectsSprite(e)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(R);let t=ze.update(e),a=e.material;a.visible&&S.push(e,t,a,n,Oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||we.intersectsObject(e))){let t=ze.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(R)),Array.isArray(a)){let r=t.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,t,c,n,Oe.z,s)}}else a.visible&&S.push(e,t,a,n,Oe.z,null)}}let a=e.children;for(let e=0,o=a.length;e<o;e++)vt(a[e],t,n,r)}function yt(e,t,n,r){let{opaque:a,transmissive:o,transparent:s}=e;C.setupLightsView(n),Te===!0&&We.setGlobalState(D.clippingPlanes,n),r&&B.viewport(ce.copy(r)),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),s.length>0&&xt(s,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new pn(1,1,{generateMipmaps:!0,type:e?F:M,minFilter:j,samples:Math.max(4,Pe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let o=C.state.transmissionRenderTarget[r.id],s=r.viewport||ce;o.setSize(s.z*D.transmissionResolutionScale,s.w*D.transmissionResolutionScale);let c=D.getRenderTarget(),l=D.getActiveCubeFace(),u=D.getActiveMipmapLevel();D.setRenderTarget(o),D.getClearColor(de),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),Ae&&Ke.render(n);let d=D.toneMapping;D.toneMapping=0;let f=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),Te===!0&&We.setGlobalState(D.clippingPlanes,r),xt(e,n,r),H.updateMultisampleRenderTarget(o),H.updateRenderTargetMipmap(o),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let a=0,o=t.length;a<o;a++){let{object:o,geometry:s,material:c,group:l}=t[a];if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,St(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(o),H.updateRenderTargetMipmap(o))}D.setRenderTarget(c,l,u),D.setClearColor(de,fe),f!==void 0&&(r.viewport=f),D.toneMapping=d}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let a=0,o=e.length;a<o;a++){let o=e[a],{object:s,geometry:c,group:l}=o,u=o.material;u.allowOverride===!0&&r!==null&&(u=r),s.layers.test(n.layers)&&St(s,t,n,c,u,l)}}function St(e,t,n,r,a,o){e.onBeforeRender(D,t,n,r,a,o),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),a.onBeforeRender(D,t,n,r,e,o),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,D.renderBufferDirect(n,t,r,a,e,o),a.side=0,a.needsUpdate=!0,D.renderBufferDirect(n,t,r,a,e,o),a.side=2):D.renderBufferDirect(n,t,r,a,e,o),e.onAfterRender(D,t,n,r,a,o)}function Ct(e,t,n){t.isScene!==!0&&(t=ke);let r=V.get(e),a=C.state.lights,o=C.state.shadowsArray,s=a.state.version,c=Be.getParameters(e,a.state,o,t,n,C.state.lightProbeGridArray),l=Be.getProgramCacheKey(c),u=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let d=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,d),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,u===void 0&&(e.addEventListener(`dispose`,at),u=new Map,r.programs=u);let f=u.get(l);if(f!==void 0){if(r.currentProgram===f&&r.lightsStateVersion===s)return G(e,c),f}else c.uniforms=Be.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,c),e.onBeforeCompile(c,D),f=Be.acquireProgram(c,l),u.set(l,f),r.uniforms=c.uniforms;let m=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(m.clippingPlanes=We.uniform),G(e,c),r.needsLights=Ot(e),r.lightsStateVersion=s,r.needsLights&&(m.ambientLightColor.value=a.state.ambient,m.lightProbe.value=a.state.probe,m.directionalLights.value=a.state.directional,m.directionalLightShadows.value=a.state.directionalShadow,m.spotLights.value=a.state.spot,m.spotLightShadows.value=a.state.spotShadow,m.rectAreaLights.value=a.state.rectArea,m.ltc_1.value=a.state.rectAreaLTC1,m.ltc_2.value=a.state.rectAreaLTC2,m.pointLights.value=a.state.point,m.pointLightShadows.value=a.state.pointShadow,m.hemisphereLights.value=a.state.hemi,m.directionalShadowMatrix.value=a.state.directionalShadowMatrix,m.spotLightMatrix.value=a.state.spotLightMatrix,m.spotLightMap.value=a.state.spotLightMap,m.pointShadowMatrix.value=a.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=f,r.uniformsList=null,f}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ic.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function G(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Et(e,t,n,r,a){t.isScene!==!0&&(t=ke),H.resetTextureUnits();let o=t.fog,s=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,c=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$t.workingColorSpace,l=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,u=Ie.get(r.envMap||s,l),d=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,f=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),m=!!n.morphAttributes.position,h=!!n.morphAttributes.normal,g=!!n.morphAttributes.color,_=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_=D.toneMapping);let v=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,y=v===void 0?0:v.length,b=V.get(r),x=C.state.lights;if(Te===!0&&(Ee===!0||e!==L)){let t=e===L&&r.id===se;We.setState(r,e,t)}let S=!1;r.version===b.__version?b.needsLights&&b.lightsStateVersion!==x.state.version?S=!0:b.outputColorSpace===c?a.isBatchedMesh&&b.batching===!1||!a.isBatchedMesh&&b.batching===!0||a.isBatchedMesh&&b.batchingColor===!0&&a.colorTexture===null||a.isBatchedMesh&&b.batchingColor===!1&&a.colorTexture!==null||a.isInstancedMesh&&b.instancing===!1||!a.isInstancedMesh&&b.instancing===!0||a.isSkinnedMesh&&b.skinning===!1||!a.isSkinnedMesh&&b.skinning===!0||a.isInstancedMesh&&b.instancingColor===!0&&a.instanceColor===null||a.isInstancedMesh&&b.instancingColor===!1&&a.instanceColor!==null||a.isInstancedMesh&&b.instancingMorph===!0&&a.morphTexture===null||a.isInstancedMesh&&b.instancingMorph===!1&&a.morphTexture!==null?S=!0:b.envMap===u?r.fog===!0&&b.fog!==o||b.numClippingPlanes!==void 0&&(b.numClippingPlanes!==We.numPlanes||b.numIntersection!==We.numIntersection)?S=!0:b.vertexAlphas===d&&b.vertexTangents===f&&b.morphTargets===m&&b.morphNormals===h&&b.morphColors===g&&b.toneMapping===_&&b.morphTargetsCount===y?!!b.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(S=!0):S=!0:S=!0:S=!0:(S=!0,b.__version=r.version);let w=b.currentProgram;S===!0&&(w=Ct(r,t,a),k&&r.isNodeMaterial&&k.onUpdateProgram(r,w,b));let T=!1,E=!1,O=!1,A=w.getUniforms(),j=b.uniforms;if(B.useProgram(w.program)&&(T=!0,E=!0,O=!0),r.id!==se&&(se=r.id,E=!0),b.needsLights){let e=Tt(C.state.lightProbeGridArray,a);b.lightProbeGrid!==e&&(b.lightProbeGrid=e,E=!0)}if(T||L!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(z,`projectionMatrix`,e.projectionMatrix),A.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(z,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&A.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),L!==e&&(L=e,E=!0,O=!0)}if(b.needsLights&&(x.state.directionalShadowMap.length>0&&A.setValue(z,`directionalShadowMap`,x.state.directionalShadowMap,H),x.state.spotShadowMap.length>0&&A.setValue(z,`spotShadowMap`,x.state.spotShadowMap,H),x.state.pointShadowMap.length>0&&A.setValue(z,`pointShadowMap`,x.state.pointShadowMap,H)),a.isSkinnedMesh){A.setOptional(z,a,`bindMatrix`),A.setOptional(z,a,`bindMatrixInverse`);let e=a.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(z,`boneTexture`,e.boneTexture,H))}a.isBatchedMesh&&(A.setOptional(z,a,`batchingTexture`),A.setValue(z,`batchingTexture`,a._matricesTexture,H),A.setOptional(z,a,`batchingIdTexture`),A.setValue(z,`batchingIdTexture`,a._indirectTexture,H),A.setOptional(z,a,`batchingColorTexture`),a._colorsTexture!==null&&A.setValue(z,`batchingColorTexture`,a._colorsTexture,H));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&qe.update(a,n,w),(E||b.receiveShadow!==a.receiveShadow)&&(b.receiveShadow=a.receiveShadow,A.setValue(z,`receiveShadow`,a.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=Tl()),E){if(A.setValue(z,`toneMappingExposure`,D.toneMappingExposure),b.needsLights&&Dt(j,O),o&&r.fog===!0&&Ve.refreshFogUniforms(j,o),Ve.refreshMaterialUniforms(j,r,ve,_e,C.state.transmissionRenderTarget[e.id]),b.needsLights&&b.lightProbeGrid){let e=b.lightProbeGrid;j.probesSH.value=e.texture,j.probesMin.value.copy(e.boundingBox.min),j.probesMax.value.copy(e.boundingBox.max),j.probesResolution.value.copy(e.resolution)}ic.upload(z,wt(b),j,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ic.upload(z,wt(b),j,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(z,`center`,a.center),A.setValue(z,`modelViewMatrix`,a.modelViewMatrix),A.setValue(z,`normalMatrix`,a.normalMatrix),A.setValue(z,`modelMatrix`,a.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,w),Qe.bind(n,w)}}return w}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,ne=t,P=n;let r=null,a=!1,o=!1;if(e){let s=V.get(e);if(s.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,s.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),se=-1;return}if(s.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(s.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(l[t])?l[t][n]:l[t],a=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(xe).multiplyScalar(ve).floor(),le.copy(Se).multiplyScalar(ve).floor(),ue=Ce;if(n!==0&&(r=A),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),a){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let a=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,a.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}se=-1},this.readRenderTargetPixels=function(e,t,n,r,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let l=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){B.bindFramebuffer(z.FRAMEBUFFER,l);try{let s=e.textures[c],l=s.format,u=s.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+c),!Pe.textureFormatReadable(l)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Pe.textureTypeReadable(u)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-a&&z.readPixels(t,n,r,a,Xe.convert(l),Xe.convert(u),o)}finally{let e=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let l=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-a){B.bindFramebuffer(z.FRAMEBUFFER,l);let s=e.textures[c],u=s.format,d=s.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+c),!Pe.textureFormatReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Pe.textureTypeReadable(d))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,o.byteLength,z.STREAM_READ),z.readPixels(t,n,r,a,Xe.convert(u),Xe.convert(d),0);let m=I===null?null:V.get(I).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,m);let h=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await _t(z,h,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,o),z.deleteBuffer(f),z.deleteSync(h),o}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,a=Math.floor(e.image.width*r),o=Math.floor(e.image.height*r),s=t===null?0:t.x,c=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,s,c,a,o),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,a=0,o=0){let s,c,l,u,d,f,m,h,g,_=e.isCompressedTexture?e.mipmaps[o]:e.image;if(n!==null)s=n.max.x-n.min.x,c=n.max.y-n.min.y,l=n.isBox3?n.max.z-n.min.z:1,u=n.min.x,d=n.min.y,f=n.isBox3?n.min.z:0;else{let t=2**-a;s=Math.floor(_.width*t),c=Math.floor(_.height*t),l=e.isDataArrayTexture?_.depth:e.isData3DTexture?Math.floor(_.depth*t):1,u=0,d=0,f=0}r===null?(m=0,h=0,g=0):(m=r.x,h=r.y,g=r.z);let v=Xe.convert(t.format),y=Xe.convert(t.type),b;t.isData3DTexture?(H.setTexture3D(t,0),b=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),b=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),b=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let x=B.getParameter(z.UNPACK_ROW_LENGTH),S=B.getParameter(z.UNPACK_IMAGE_HEIGHT),C=B.getParameter(z.UNPACK_SKIP_PIXELS),w=B.getParameter(z.UNPACK_SKIP_ROWS),T=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,_.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,u),B.pixelStorei(z.UNPACK_SKIP_ROWS,d),B.pixelStorei(z.UNPACK_SKIP_IMAGES,f);let E=e.isDataArrayTexture||e.isData3DTexture,D=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),_=V.get(n.__renderTarget),v=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,_.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,v.__webglFramebuffer);for(let n=0;n<l;n++)E&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,a,f+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,o,g+n)),z.blitFramebuffer(u,d,s,c,m,h,s,c,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(a!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,N),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ee);for(let e=0;e<l;e++)E?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,a,f+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,a),D?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,o,g+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,o),a===0?D?z.copyTexSubImage3D(b,o,m,h,g+e,u,d,s,c):z.copyTexSubImage2D(b,o,m,h,u,d,s,c):z.blitFramebuffer(u,d,s,c,m,h,s,c,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else D?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(b,o,m,h,g,s,c,l,v,y,_.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(b,o,m,h,g,s,c,l,v,_.data):z.texSubImage3D(b,o,m,h,g,s,c,l,v,y,_):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,o,m,h,s,c,v,y,_.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,o,m,h,_.width,_.height,v,_.data):z.texSubImage2D(z.TEXTURE_2D,o,m,h,s,c,v,y,_);B.pixelStorei(z.UNPACK_ROW_LENGTH,x),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,S),B.pixelStorei(z.UNPACK_SKIP_PIXELS,C),B.pixelStorei(z.UNPACK_SKIP_ROWS,w),B.pixelStorei(z.UNPACK_SKIP_IMAGES,T),o===0&&t.generateMipmaps&&z.generateMipmap(b),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ne=0,P=0,I=null,B.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ct}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(e),t.unpackColorSpace=$t._getUnpackColorSpace()}},Dl={type:`change`},Ol={type:`start`},kl={type:`end`},Al=new ri,jl=new Ci,Ml=Math.cos(70*Gt.DEG2RAD),Nl=new q,Pl=2*Math.PI,Q={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6,Il=class extends so{constructor(e,t=null){super(e,t),this.state=Q.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:x.ROTATE,MIDDLE:x.DOLLY,RIGHT:x.PAN},this.touches={ONE:S.ROTATE,TWO:S.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Kt,this._lastTargetPosition=new q,this._quat=new Kt().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y,this._sphericalDelta=new Y,this._scale=1,this._panOffset=new q,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new q,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rl.bind(this),this._onPointerDown=Ll.bind(this),this._onPointerUp=zl.bind(this),this._onContextMenu=Kl.bind(this),this._onMouseWheel=Hl.bind(this),this._onKeyDown=Ul.bind(this),this._onTouchStart=Wl.bind(this),this._onTouchMove=Gl.bind(this),this._onMouseDown=Bl.bind(this),this._onMouseMove=Vl.bind(this),this._interceptControlDown=ql.bind(this),this._interceptControlUp=Jl.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dl),this.update(),this.state=Q.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Nl.copy(t).sub(this.target),Nl.applyQuaternion(this._quat),this._spherical.setFromVector3(Nl),this.autoRotate&&this.state===Q.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Pl:n>Math.PI&&(n-=Pl),r<-Math.PI?r+=Pl:r>Math.PI&&(r-=Pl),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=e!=this._spherical.radius}if(Nl.setFromSpherical(this._spherical),Nl.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nl),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Nl.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),a=!!n}else if(this.object.isOrthographicCamera){let t=new q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=n!==this.object.zoom;let r=new q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Nl.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Al.origin.copy(this.object.position),Al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Al.direction))<Ml?this.object.lookAt(this.target):(jl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Al.intersectPlane(jl,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(Dl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Pl/60/60*this.autoRotateSpeed:Pl/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nl.setFromMatrixColumn(t,0),Nl.multiplyScalar(-e),this._panOffset.add(Nl)}_panUp(e,t){this.screenSpacePanning===!0?Nl.setFromMatrixColumn(t,1):(Nl.setFromMatrixColumn(t,0),Nl.crossVectors(this.object.up,Nl)),Nl.multiplyScalar(e),this._panOffset.add(Nl)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Nl.copy(r).sub(this.target);let a=Nl.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,o=n.width,s=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pl*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pl*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ll(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Rl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function zl(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(kl),this.state=Q.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Bl(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case x.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Q.DOLLY;break;case x.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Q.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Q.ROTATE}break;case x.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Q.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Q.PAN}break;default:this.state=Q.NONE}this.state!==Q.NONE&&this.dispatchEvent(Ol)}function Vl(e){switch(this.state){case Q.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Q.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Q.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Hl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Q.NONE&&(e.preventDefault(),this.dispatchEvent(Ol),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(kl))}function Ul(e){this.enabled!==!1&&this._handleKeyDown(e)}function Wl(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case S.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Q.TOUCH_ROTATE;break;case S.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Q.TOUCH_PAN;break;default:this.state=Q.NONE}break;case 2:switch(this.touches.TWO){case S.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Q.TOUCH_DOLLY_PAN;break;case S.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Q.TOUCH_DOLLY_ROTATE;break;default:this.state=Q.NONE}break;default:this.state=Q.NONE}this.state!==Q.NONE&&this.dispatchEvent(Ol)}function Gl(e){switch(this._trackPointer(e),this.state){case Q.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Q.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Q.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Q.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Q.NONE}}function Kl(e){this.enabled!==!1&&e.preventDefault()}function ql(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Jl(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Yl=s((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var a=null;if(r!==void 0&&(a=``+r),n.key!==void 0&&(a=``+n.key),`key`in n)for(var o in r={},n)o!==`key`&&(r[o]=n[o]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:a,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),$=s(((e,t)=>{t.exports=Yl()}))();function Xl({nState:e,ensembleStates:t=[],params:n,trailHistory:r=[],ensembleTrails:a=[],trailLength:o=500,trailFade:s=!0,showGrid:c=!0,isEnsemble:l=!1,selectedNodeIndex:u=null,onSelectNodeIndex:d,onJointDrag:f,isPaused:m=!1,onResetCameraRef:h}){let g=(0,y.useRef)(null),_=(0,y.useRef)(null),v=(0,y.useRef)(null),b=(0,y.useRef)(null),x=(0,y.useRef)(null),S=(0,y.useRef)(new Wn),C=(0,y.useRef)(new Wn),w=(0,y.useRef)(null),T=(0,y.useRef)(null),E=(0,y.useRef)(null),D=(0,y.useRef)(new ro),O=(0,y.useRef)(new K),k=(0,y.useRef)(new Ci),A=(0,y.useRef)(new q),j=(0,y.useRef)(!1),M=(0,y.useRef)(null),N=(0,y.useRef)({x:0,y:0}),ee=(0,y.useRef)(0),te=(0,y.useRef)(null),ne=(0,y.useRef)(new q),re=(0,y.useRef)(0),P=(0,y.useRef)(new q),F=(0,y.useRef)(e),ie=(0,y.useRef)(u),ae=(0,y.useRef)(d),oe=(0,y.useRef)(f);(0,y.useEffect)(()=>{F.current=e},[e]),(0,y.useEffect)(()=>{ie.current=u},[u]),(0,y.useEffect)(()=>{ae.current=d},[d]),(0,y.useEffect)(()=>{oe.current=f},[f]),(0,y.useEffect)(()=>{let e=g.current;if(!e)return;let t=e.clientWidth||window.innerWidth||800,n=e.clientHeight||window.innerHeight||600,r=t/Math.max(n,1),a=new $n;a.background=new Zn(0),_.current=a;let o=new Fa(45,r,.1,100);o.position.set(0,.8,5.2),b.current=o;let s=new El({antialias:!0,alpha:!1,powerPreference:`high-performance`});for(s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setSize(t,n),s.toneMapping=4,s.toneMappingExposure=1.15;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(s.domElement),v.current=s;let c=new Il(o,s.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.rotateSpeed=.8,c.zoomSpeed=1,c.panSpeed=.8,c.minDistance=.8,c.maxDistance=25,c.target.set(0,-.6,0),x.current=c;let l=new za(16777215,.8);a.add(l);let u=new Ra(16777215,2.2);u.position.set(6,10,6),a.add(u);let d=new Ra(16777215,.9);d.position.set(-6,-3,-5),a.add(d);let f=new oo(8,32,5395035,1579035);f.position.y=-3.2,a.add(f),E.current=f;let m=new gi(new Ji(.06,32,32),new oa({color:16777215,roughness:.15,metalness:.9}));m.position.set(0,0,0),a.add(m),a.add(S.current),a.add(C.current);let y=new gi(new Yi(.12,.012,16,32),new ii({color:62975,transparent:!0,opacity:.9}));y.rotation.x=Math.PI/2,y.visible=!1,a.add(y),w.current=y;let F=1500,ie=new Float32Array(F*3),I=new Float32Array(F*3),se=new qr;se.setAttribute(`position`,new Mr(ie,3)),se.setAttribute(`color`,new Mr(I,3));let L=new Ii(se,new Oi({vertexColors:!0,transparent:!0,opacity:.95,blending:2,linewidth:1.5}));a.add(L),T.current=L,h&&(h.current=()=>{o.position.set(0,.8,5.2),c.target.set(0,-.6,0),c.update()});let ce=e=>{let t=s.domElement.getBoundingClientRect(),n=e.clientX===void 0?e.touches&&e.touches[0]?e.touches[0].clientX:0:e.clientX,r=e.clientY===void 0?e.touches&&e.touches[0]?e.touches[0].clientY:0:e.clientY;return{normX:t.width>0?(n-t.left)/t.width*2-1:0,normY:t.height>0?-((r-t.top)/t.height)*2+1:0,screenX:n,screenY:r}},le=e=>{let t=ce(e);O.current.set(t.normX,t.normY),N.current={x:t.screenX,y:t.screenY},ee.current=performance.now(),D.current.setFromCamera(O.current,o);let n=S.current,r=[];n.children.forEach(e=>{e.userData&&e.userData.nodeIndex!==void 0&&r.push(e)});let a=D.current.intersectObjects(r,!1);if(a.length>0){let e=a[0],t=e.object.userData.nodeIndex;M.current=t;let n=new q;o.getWorldDirection(n).negate(),k.current.setFromNormalAndCoplanarPoint(n,e.point),ne.current.copy(e.point),re.current=performance.now(),P.current.set(0,0,0),c.enabled=!1}},ue=e=>{let t=ce(e);if(O.current.set(t.normX,t.normY),M.current!==null){if(Math.hypot(t.screenX-N.current.x,t.screenY-N.current.y)>3&&(j.current=!0),j.current&&(D.current.setFromCamera(O.current,o),D.current.ray.intersectPlane(k.current,A.current))){let e=performance.now(),t=Math.max(.001,(e-re.current)/1e3),n=A.current;P.current.subVectors(n,ne.current).divideScalar(t),ne.current.copy(n),re.current=e,oe.current&&oe.current(M.current,{x:n.x,y:n.y,z:n.z},!1)}}else{D.current.setFromCamera(O.current,o);let e=S.current.children.filter(e=>e.userData&&e.userData.nodeIndex!==void 0),t=D.current.intersectObjects(e,!1);if(t.length>0){let e=t[0].object.userData.nodeIndex;te.current=e,s.domElement.style.cursor=`grab`}else te.current=null,s.domElement.style.cursor=`default`}},de=e=>{ce(e);let t=j.current,n=M.current;c.enabled=!0,j.current=!1,M.current=null,n!==null&&(t?oe.current&&oe.current(n,{x:ne.current.x,y:ne.current.y,z:ne.current.z},!0,{x:P.current.x*.5,y:P.current.y*.5,z:P.current.z*.5}):ae.current&&ae.current(n))},fe=s.domElement;fe.addEventListener(`pointerdown`,le),window.addEventListener(`pointermove`,ue),window.addEventListener(`pointerup`,de);let pe=()=>{if(!e||!s||!o)return;let t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;t>0&&n>0&&(s.domElement.width!==t||s.domElement.height!==n||Number.isNaN(o.aspect))&&(o.aspect=t/n,o.updateProjectionMatrix(),s.setSize(t,n))},me,he=()=>{if(me=requestAnimationFrame(he),pe(),c.update(),w.current&&w.current.visible){let e=performance.now()*.003,t=1+.08*Math.sin(e);w.current.scale.set(t,t,t)}s.render(a,o)};he();let ge=new ResizeObserver(()=>pe());return ge.observe(e),window.addEventListener(`resize`,pe),()=>{cancelAnimationFrame(me),ge.disconnect(),window.removeEventListener(`resize`,pe),fe.removeEventListener(`pointerdown`,le),window.removeEventListener(`pointermove`,ue),window.removeEventListener(`pointerup`,de),c.dispose(),s.dispose(),e.contains(s.domElement)&&e.removeChild(s.domElement)}},[]),(0,y.useEffect)(()=>{E.current&&(E.current.visible=c)},[c]);let I=(e,t,n,r=.014)=>{let a=new q().subVectors(n,t),o=a.length();if(o<1e-4)return;e.scale.set(r/.014,o,r/.014),e.position.copy(t).addScaledVector(a,.5);let s=a.clone().normalize(),c=new q(0,1,0);s.dot(c)<-.9999?e.quaternion.setFromAxisAngle(new q(1,0,0),Math.PI):e.quaternion.setFromUnitVectors(c,s)};return(0,y.useEffect)(()=>{if(!_.current||!e||!e.positions)return;let{numLinks:n=2,masses:o=[],lengths:c=[],colors:d=[],pinned:f=[],positions:m=[]}=e,h=S.current,g=n*2;for(;h.children.length<g;){let e=Math.floor(h.children.length/2)+1,t=new gi(new Ki(.014,.014,1,16),new oa({color:15000807,roughness:.25,metalness:.75}));h.add(t);let n=new gi(new Ji(.07,32,32),new oa({color:16777215,roughness:.1,metalness:.9}));n.userData={nodeIndex:e},h.add(n)}for(;h.children.length>g;){let e=h.children.pop();e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}for(let e=1;e<=n;e++){if(!m[e-1]||!m[e])continue;let t=new q(m[e-1].x,m[e-1].y,m[e-1].z),n=new q(m[e].x,m[e].y,m[e].z),r=h.children[(e-1)*2],a=h.children[(e-1)*2+1];if(r&&I(r,t,n,.013),a){a.userData={nodeIndex:e};let t=o[e-1]||1,r=Math.max(.04,Math.min(.14,.04+Math.sqrt(t)*.035));a.scale.setScalar(r/.07),a.position.copy(n);let s=d&&d[e-1]||`#ffffff`;a.material&&(a.material.color.set(s),f&&f[e]?(a.material.emissive.set(16755200),a.material.emissiveIntensity=.4):(a.material.emissive.set(0),a.material.emissiveIntensity=0))}}if(w.current){if(u!==null&&u>=1&&u<=n&&m[u]){let e=m[u];w.current.position.set(e.x,e.y,e.z);let t=o[u-1]||1,n=Math.max(.04,Math.min(.14,.04+Math.sqrt(t)*.035));w.current.scale.setScalar((n+.05)/.12),w.current.visible=!0}else w.current.visible=!1}if(T.current&&r.length>0){let e=T.current.geometry,t=e.attributes.position,a=e.attributes.color,o=Math.min(r.length,1500),c=new Zn(d&&d[n-1]||`#ffffff`);for(let e=0;e<o;e++){let n=r[e];t.setXYZ(e,n.x,n.y,n.z);let l=e/o,u=s?l**2:.85;a.setXYZ(e,c.r*u,c.g*u,c.b*u)}e.setDrawRange(0,o),t.needsUpdate=!0,a.needsUpdate=!0}let v=C.current;if(v){if(!l||t.length===0)for(;v.children.length>0;){let e=v.children.pop();e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}else{let e=t.length;for(;v.children.length>e*2;){let e=v.children.pop();e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}t.forEach((e,t)=>{if(!e.positions)return;let n=e.positions.map(e=>new q(e.x,e.y,e.z)),r=v.children[t*2];r?(r.geometry.setFromPoints(n),r.geometry.attributes.position.needsUpdate=!0):(r=new Ii(new qr().setFromPoints(n),new Oi({color:16777215,transparent:!0,opacity:.16})),v.add(r));let o=a[t]||[],s=v.children[t*2+1];if(s||(s=new Ii(new qr,new Oi({color:13948120,transparent:!0,opacity:.22})),v.add(s)),o.length>1){let e=o.map(e=>new q(e.x,e.y,e.z));s.geometry.setFromPoints(e),s.geometry.attributes.position.needsUpdate=!0}})}}},[e,t,r,a,l,s,u]),(0,$.jsxs)(`div`,{className:`w-full h-full overflow-hidden bg-black select-none`,style:{position:`absolute`,inset:0,width:`100vw`,height:`100vh`},children:[(0,$.jsx)(`div`,{ref:g,className:`w-full h-full touch-none`,style:{width:`100%`,height:`100%`,position:`absolute`,inset:0}}),(0,$.jsxs)(`div`,{className:`absolute bottom-4 left-4 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono mono-glass px-3 py-1.5 rounded-full text-zinc-400 border border-zinc-800 z-30`,children:[(0,$.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full ${m?`bg-amber-400`:`bg-cyan-400 animate-ping`}`}),(0,$.jsx)(`span`,{children:m?`PAUSED • Click any joint to inspect & edit • Drag in 3D to pose`:`Click any joint to edit • Drag to grab & throw • Orbit 3D`})]})]})}var Zl=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ql=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),$l=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),eu=e=>{let t=$l(e);return t.charAt(0).toUpperCase()+t.slice(1)},tu={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},nu=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ru=(0,y.createContext)({}),iu=()=>(0,y.useContext)(ru),au=(0,y.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:a=``,children:o,iconNode:s,...c},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:m=`currentColor`,className:h=``}=iu()??{},g=r??f?Number(n??d)*24/Number(t??u):n??d;return(0,y.createElement)(`svg`,{ref:l,...tu,width:t??u??tu.width,height:t??u??tu.height,stroke:e??m,strokeWidth:g,className:Zl(`lucide`,h,a),...!o&&!nu(c)&&{"aria-hidden":`true`},...c},[...s.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(o)?o:[o]])}),ou=(e,t)=>{let n=(0,y.forwardRef)(({className:n,...r},a)=>(0,y.createElement)(au,{ref:a,iconNode:t,className:Zl(`lucide-${Ql(eu(e))}`,`lucide-${e}`,n),...r}));return n.displayName=eu(e),n},su=ou(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),cu=ou(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),lu=ou(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),uu=ou(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),du=ou(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),fu=ou(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),pu=ou(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),mu=ou(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),hu=ou(`circle-dot`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}]]),gu=ou(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),_u=ou(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),vu=ou(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),yu=ou(`file-code`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}]]),bu=ou(`grid-3x3`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]),xu=ou(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Su=ou(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Cu=ou(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),wu=ou(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),Tu=ou(`move-3d`,[[`path`,{d:`M5 3v16h16`,key:`1mqmf9`}],[`path`,{d:`m5 19 6-6`,key:`jh6hbb`}],[`path`,{d:`m2 6 3-3 3 3`,key:`tkyvxa`}],[`path`,{d:`m18 16 3 3-3 3`,key:`1d4glt`}]]),Eu=ou(`palette`,[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]),Du=ou(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),Ou=ou(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),ku=ou(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Au=ou(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),ju=ou(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),Mu=ou(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Nu=ou(`sliders-vertical`,[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]]),Pu=ou(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Fu=ou(`step-forward`,[[`path`,{d:`M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`,key:`1ystz2`}],[`path`,{d:`M3 4v16`,key:`1ph11n`}]]),Iu=ou(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Lu=ou(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Ru=ou(`volume-x`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`line`,{x1:`22`,x2:`16`,y1:`9`,y2:`15`,key:`1ewh16`}],[`line`,{x1:`16`,x2:`22`,y1:`9`,y2:`15`,key:`5ykzw1`}]]),zu=ou(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Bu=ou(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]);function Vu({isPaused:e,onTogglePlay:t,onStepForward:n,onReset:r,onClearTrail:a,onApply3DKick:o,isFullscreen:s,onToggleFullscreen:c,drawerOpen:l,onToggleDrawer:u,nodeMenuOpen:d,onToggleNodeMenu:f,selectedNodeIndex:m,scriptEditorOpen:h,onToggleScriptEditor:g,diagnosticsOpen:_,onToggleDiagnostics:v,presetsOpen:y,onTogglePresets:b,isEnsemble:x,onToggleEnsemble:S,soundEnabled:C,onToggleSound:w,showGrid:T,onToggleGrid:E,onResetCamera:D,onOpenTheory:O}){return(0,$.jsxs)(`div`,{className:`absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-2xl mono-glass border border-zinc-800 shadow-2xl max-w-[96vw] overflow-x-auto no-scrollbar select-none`,children:[(0,$.jsxs)(`div`,{className:`hidden lg:flex items-center gap-2 pl-2 pr-3 border-r border-zinc-800 text-left font-mono`,children:[(0,$.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-white animate-pulse`}),(0,$.jsxs)(`div`,{className:`flex flex-col`,children:[(0,$.jsx)(`span`,{className:`text-[11px] font-bold text-white uppercase tracking-wider whitespace-nowrap`,children:`Three.js N-Pendulum Experiment`}),(0,$.jsx)(`span`,{className:`text-[9px] text-zinc-400`,children:e?`⏸ Paused (Pose Mode)`:`▶ Running Spatial Chaos`})]})]}),(0,$.jsx)(`button`,{onClick:t,title:e?`Resume Simulation (Space)`:`Pause Simulation (Space)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${e?`bg-amber-400 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.6)]`:`bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800`}`,children:e?(0,$.jsx)(ku,{size:16,fill:`currentColor`}):(0,$.jsx)(Du,{size:16,fill:`currentColor`})}),(0,$.jsx)(`button`,{onClick:n,disabled:!e,title:`Step 1 Frame (when paused)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 disabled:opacity-25 disabled:cursor-not-allowed transition`,children:(0,$.jsx)(Fu,{size:15})}),(0,$.jsxs)(`button`,{onClick:f,title:`Edit Selected Joint / Node Menu (E)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition relative ${d?`bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]`:`bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:bg-zinc-800 hover:text-white`}`,children:[(0,$.jsx)(hu,{size:15}),m&&(0,$.jsx)(`span`,{className:`absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 text-black text-[8px] font-mono font-bold rounded-full flex items-center justify-center`,children:m})]}),(0,$.jsx)(`button`,{onClick:g,title:`Programmable Pythonic Script Editor`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${h?`bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]`:`bg-zinc-900/90 text-cyan-300 border-zinc-800 hover:bg-zinc-800 hover:text-white`}`,children:(0,$.jsx)(gu,{size:15})}),(0,$.jsx)(`button`,{onClick:o,title:`Apply 3D Transverse Impulse Kick (K)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-amber-300 border border-zinc-800 hover:bg-zinc-800 hover:text-amber-200 transition`,children:(0,$.jsx)(Bu,{size:15})}),(0,$.jsx)(`button`,{onClick:r,title:`Reset Conditions (R)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition`,children:(0,$.jsx)(Mu,{size:15})}),(0,$.jsx)(`button`,{onClick:a,title:`Clear Trail (C)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition`,children:(0,$.jsx)(Iu,{size:15})}),(0,$.jsx)(`div`,{className:`w-[1px] h-6 bg-zinc-800 mx-0.5`}),(0,$.jsx)(`button`,{onClick:S,title:`Toggle Chaos Butterfly Ensemble`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${x?`bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]`:`bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200`}`,children:(0,$.jsx)(Su,{size:15})}),(0,$.jsx)(`button`,{onClick:b,title:`Physics Presets`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${y?`bg-white text-black border-white`:`bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200`}`,children:(0,$.jsx)(Pu,{size:15})}),(0,$.jsx)(`button`,{onClick:v,title:`Phase Space & Energy HUD`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${_?`bg-white text-black border-white`:`bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200`}`,children:(0,$.jsx)(su,{size:15})}),(0,$.jsx)(`button`,{onClick:u,title:`N-Links & Simulation Settings`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${l?`bg-white text-black border-white`:`bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200`}`,children:(0,$.jsx)(Nu,{size:15})}),(0,$.jsx)(`div`,{className:`w-[1px] h-6 bg-zinc-800 mx-0.5`}),(0,$.jsx)(`button`,{onClick:w,title:C?`Disable Kinetic Audio`:`Enable Kinetic Audio`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${C?`bg-white text-black border-white`:`bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200`}`,children:C?(0,$.jsx)(Lu,{size:15}):(0,$.jsx)(Ru,{size:15})}),(0,$.jsx)(`button`,{onClick:E,title:T?`Hide 3D Grid`:`Show 3D Grid`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${T?`bg-zinc-800 text-white border-zinc-700`:`bg-zinc-900/90 text-zinc-500 border-zinc-800 hover:text-zinc-300`}`,children:(0,$.jsx)(bu,{size:15})}),(0,$.jsx)(`button`,{onClick:D,title:`Reset 3D Camera View`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition`,children:(0,$.jsx)(_u,{size:15})}),(0,$.jsx)(`button`,{onClick:c,title:s?`Exit Fullscreen`:`Enter Fullscreen (F)`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${s?`bg-white text-black border-white`:`bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200`}`,children:s?(0,$.jsx)(wu,{size:15}):(0,$.jsx)(Cu,{size:15})}),(0,$.jsx)(`button`,{onClick:O,title:`Theory & Dynamical Systems Docs`,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition`,children:(0,$.jsx)(xu,{size:15})})]})}function Hu({isOpen:e,onClose:t,numLinks:n,setNumLinks:r,nState:a,selectedNodeIndex:o,onSelectNodeIndex:s,onAddLink:c,params:l,setParams:u,simSpeed:d,setSimSpeed:f,trailLength:m,setTrailLength:h,trailFade:g,setTrailFade:_,isEnsemble:v,setIsEnsemble:y,ensembleCount:b,setEnsembleCount:x,ensembleDelta:S,setEnsembleDelta:C,onReset:w,onApply3DKick:T}){if(!e)return null;let E=[{label:`Zero-G`,val:0},{label:`Moon`,val:1.62},{label:`Mars`,val:3.72},{label:`Earth`,val:9.81},{label:`Jupiter`,val:24.79}],{lengths:D=[],masses:O=[],colors:k=[],pinned:A=[]}=a||{};return(0,$.jsxs)(`div`,{className:`absolute right-4 top-20 bottom-4 z-40 w-[350px] max-w-[calc(100vw-2rem)] mono-glass rounded-2xl p-4 flex flex-col justify-between border border-zinc-800 shadow-2xl text-xs overflow-hidden animate-fade-in select-none`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-2.5`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2 font-mono uppercase tracking-widest text-[11px] text-zinc-300 font-semibold`,children:[(0,$.jsx)(Nu,{size:14,className:`text-white`}),(0,$.jsx)(`span`,{children:`N-Pendulum Controls`})]}),(0,$.jsx)(`button`,{onClick:t,className:`w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition`,children:(0,$.jsx)(zu,{size:14})})]}),(0,$.jsxs)(`div`,{className:`flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar`,children:[(0,$.jsxs)(`div`,{className:`space-y-2`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between items-center text-zinc-300`,children:[(0,$.jsx)(`span`,{className:`font-mono uppercase text-[10px] text-zinc-400`,children:`Number of Links (N):`}),(0,$.jsx)(`span`,{className:`font-mono text-white font-bold text-sm`,children:n})]}),(0,$.jsx)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:[1,2,3,4,5,7,10].map(e=>(0,$.jsxs)(`button`,{onClick:()=>r(e),className:`flex-1 py-1 rounded-lg border text-xs font-mono transition ${n===e?`bg-white text-black font-bold border-white shadow-[0_0_10px_rgba(255,255,255,0.4)]`:`bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white`}`,children:[`N=`,e]},e))}),(0,$.jsx)(`input`,{type:`range`,min:`1`,max:`12`,step:`1`,value:n,onChange:e=>r(parseInt(e.target.value)),className:`w-full mt-1`})]}),(0,$.jsxs)(`div`,{className:`space-y-1.5 border-t border-zinc-800/60 pt-3`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,$.jsxs)(`span`,{className:`font-mono uppercase text-[10px] text-zinc-400 flex items-center gap-1`,children:[(0,$.jsx)(hu,{size:12,className:`text-cyan-400`}),(0,$.jsxs)(`span`,{children:[`Articulated Joints (`,n,`)`]})]}),(0,$.jsxs)(`button`,{onClick:()=>c(n),className:`text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-cyan-300 flex items-center gap-1 transition`,children:[(0,$.jsx)(Au,{size:10}),` + Add Link`]})]}),(0,$.jsx)(`div`,{className:`max-h-36 overflow-y-auto space-y-1 pr-1 bg-zinc-950/60 p-1.5 rounded-xl border border-zinc-800/80`,children:Array.from({length:n}).map((e,t)=>{let r=t+1,a=o===r,c=k[t]||`#ffffff`,l=A[r],u=D[t]||1,d=O[t]||1;return(0,$.jsxs)(`button`,{onClick:()=>s(r),className:`w-full p-1.5 rounded-lg border text-left flex items-center justify-between transition ${a?`bg-cyan-950/40 border-cyan-500/60 text-white`:`bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200`}`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full border border-white/40 shadow-sm`,style:{backgroundColor:c}}),(0,$.jsxs)(`span`,{className:`font-mono text-[11px] font-semibold text-zinc-200`,children:[`Joint #`,r,` `,r===n?`(Tip)`:``]}),l&&(0,$.jsxs)(`span`,{className:`text-[9px] text-amber-400 flex items-center gap-0.5`,children:[(0,$.jsx)(Ou,{size:8}),` Pinned`]})]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-2 font-mono text-[10px] text-zinc-400`,children:[(0,$.jsxs)(`span`,{children:[u.toFixed(1),`m`]}),(0,$.jsxs)(`span`,{children:[d.toFixed(1),`kg`]}),(0,$.jsx)(fu,{size:12,className:a?`text-cyan-400`:`text-zinc-600`})]})]},r)})}),(0,$.jsx)(`p`,{className:`text-[9px] text-zinc-500 text-center font-mono`,children:`Click any joint above or directly in 3D to edit properties.`})]}),(0,$.jsx)(`div`,{className:`border-t border-zinc-800/60 pt-3`,children:(0,$.jsxs)(`button`,{onClick:T,className:`w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-300 font-semibold flex items-center justify-center gap-2 transition active:scale-[0.98]`,children:[(0,$.jsx)(Bu,{size:14,className:`text-amber-400 animate-pulse`}),(0,$.jsx)(`span`,{children:`Apply 3D Transverse Kick`})]})}),(0,$.jsxs)(`div`,{className:`space-y-2 border-t border-zinc-800/60 pt-3`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between text-zinc-300`,children:[(0,$.jsx)(`span`,{className:`font-mono text-[10px] text-zinc-400 uppercase`,children:`Gravity (g):`}),(0,$.jsxs)(`span`,{className:`font-mono text-white`,children:[l.g.toFixed(2),` m/s²`]})]}),(0,$.jsx)(`div`,{className:`flex flex-wrap gap-1 mb-2`,children:E.map(e=>(0,$.jsx)(`button`,{onClick:()=>u({...l,g:e.val}),className:`text-[10px] px-2 py-0.5 rounded border transition ${Math.abs(l.g-e.val)<.05?`bg-white text-black font-semibold border-white`:`bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white`}`,children:e.label},e.label))}),(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[11px]`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`Joint Air Damping:`}),(0,$.jsx)(`span`,{className:`text-white font-bold`,children:l.damping.toFixed(4)})]}),(0,$.jsx)(`input`,{type:`range`,min:`0`,max:`0.01`,step:`0.0001`,value:l.damping,onChange:e=>u({...l,damping:parseFloat(e.target.value)}),className:`w-full`})]})]}),(0,$.jsxs)(`div`,{className:`space-y-2.5 border-t border-zinc-800/60 pt-3`,children:[(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[11px]`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`Simulation Speed:`}),(0,$.jsxs)(`span`,{className:`text-white font-bold`,children:[d.toFixed(1),`x`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`0.1`,max:`3.0`,step:`0.1`,value:d,onChange:e=>f(parseFloat(e.target.value)),className:`w-full`})]}),(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[11px]`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`3D Trail Length:`}),(0,$.jsxs)(`span`,{className:`text-white font-bold`,children:[m,` pts`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`50`,max:`1500`,step:`50`,value:m,onChange:e=>h(parseInt(e.target.value)),className:`w-full`})]}),(0,$.jsxs)(`div`,{className:`flex items-center justify-between text-zinc-300 pt-1`,children:[(0,$.jsx)(`span`,{className:`font-mono text-[10px] text-zinc-400 uppercase`,children:`3D Trail Shaded Fade:`}),(0,$.jsx)(`input`,{type:`checkbox`,checked:g,onChange:e=>_(e.target.checked),className:`w-4 h-4 rounded bg-zinc-900 border-zinc-700 accent-white`})]})]}),(0,$.jsxs)(`div`,{className:`space-y-2.5 border-t border-zinc-800/60 pt-3`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between text-zinc-300`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold`,children:[(0,$.jsx)(Su,{size:13,className:`text-white`}),(0,$.jsx)(`span`,{children:`Butterfly Ensemble`})]}),(0,$.jsx)(`input`,{type:`checkbox`,checked:v,onChange:e=>y(e.target.checked),className:`w-4 h-4 rounded bg-zinc-900 border-zinc-700 accent-white`})]}),v&&(0,$.jsxs)(`div`,{className:`space-y-2 bg-zinc-950/70 p-2.5 rounded-xl border border-zinc-800`,children:[(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[10px]`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`Perturbed Chains:`}),(0,$.jsx)(`span`,{className:`text-white font-bold`,children:b})]}),(0,$.jsx)(`input`,{type:`range`,min:`4`,max:`32`,step:`2`,value:b,onChange:e=>x(parseInt(e.target.value)),className:`w-full`})]}),(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[10px]`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`Spatial Delta (Δ):`}),(0,$.jsx)(`span`,{className:`text-white font-bold`,children:S.toExponential(2)})]}),(0,$.jsx)(`input`,{type:`range`,min:`-6`,max:`-2`,step:`0.5`,value:Math.log10(S),onChange:e=>C(10**parseFloat(e.target.value)),className:`w-full`})]})]})]})]}),(0,$.jsx)(`div`,{className:`pt-3 border-t border-zinc-800/80 mt-2`,children:(0,$.jsxs)(`button`,{onClick:w,className:`w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition font-semibold`,children:[(0,$.jsx)(ju,{size:13}),(0,$.jsx)(`span`,{children:`Reset All Parameters`})]})})]})}function Uu({isOpen:e,onClose:t,energyHistory:n=[],currentEnergy:r,phaseHistory:a=[]}){let o=(0,y.useRef)(null),s=(0,y.useRef)(null);return(0,y.useEffect)(()=>{if(!e)return;let t=o.current;if(!t||n.length<2)return;let r=t.getContext(`2d`),a=t.width,s=t.height;r.fillStyle=`#000000`,r.fillRect(0,0,a,s),r.strokeStyle=`#18181b`,r.lineWidth=1;for(let e=20;e<s;e+=30)r.beginPath(),r.moveTo(0,e),r.lineTo(a,e),r.stroke();let c=1/0,l=-1/0;n.forEach(e=>{c=Math.min(c,e.kinetic,e.potential,e.total),l=Math.max(l,e.kinetic,e.potential,e.total)});let u=Math.max(Math.abs(l-c)*.15,2),d=c-u,f=l+u,m=e=>s-8-(e-d)/(f-d)*(s-16),h=a/Math.max(n.length-1,1);r.strokeStyle=`#a1a1aa`,r.lineWidth=1.2,r.beginPath(),n.forEach((e,t)=>{let n=t*h,a=m(e.kinetic);t===0?r.moveTo(n,a):r.lineTo(n,a)}),r.stroke(),r.strokeStyle=`#52525b`,r.lineWidth=1.2,r.beginPath(),n.forEach((e,t)=>{let n=t*h,a=m(e.potential);t===0?r.moveTo(n,a):r.lineTo(n,a)}),r.stroke(),r.strokeStyle=`#ffffff`,r.lineWidth=1.8,r.beginPath(),n.forEach((e,t)=>{let n=t*h,a=m(e.total);t===0?r.moveTo(n,a):r.lineTo(n,a)}),r.stroke()},[e,n]),(0,y.useEffect)(()=>{if(!e)return;let t=s.current;if(!t)return;let n=t.getContext(`2d`),r=t.width,o=t.height;if(n.fillStyle=`#000000`,n.fillRect(0,0,r,o),n.strokeStyle=`#27272a`,n.lineWidth=1,n.beginPath(),n.moveTo(0,o/2),n.lineTo(r,o/2),n.moveTo(r/2,0),n.lineTo(r/2,o),n.stroke(),a.length<2)return;let c=Math.PI*2,l=e=>{let t=((e+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return r/2+t/c*(r*.9)},u=e=>o/2-e/12*(o*.42),d=a.length;for(let e=1;e<d;e++){let t=a[e-1],s=a[e],c=l(t.theta1),f=u(t.omega1),m=l(s.theta1),h=u(s.omega1);Math.abs(m-c)>r*.4||Math.abs(h-f)>o*.4||(n.strokeStyle=`rgba(255, 255, 255, ${e/d*.85+.15})`,n.lineWidth=1,n.beginPath(),n.moveTo(c,f),n.lineTo(m,h),n.stroke())}},[e,a]),e?(0,$.jsxs)(`div`,{className:`absolute left-4 top-20 bottom-4 z-40 w-[320px] max-w-[calc(100vw-2rem)] mono-glass rounded-2xl p-4 flex flex-col justify-between border border-zinc-800 shadow-2xl text-xs overflow-hidden animate-fade-in`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-2`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2 font-mono uppercase tracking-widest text-[11px] text-zinc-300 font-semibold`,children:[(0,$.jsx)(su,{size:14,className:`text-white`}),(0,$.jsx)(`span`,{children:`System Diagnostics`})]}),(0,$.jsx)(`button`,{onClick:t,className:`w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition`,children:(0,$.jsx)(zu,{size:14})})]}),(0,$.jsxs)(`div`,{className:`flex-1 overflow-y-auto space-y-4 pr-1`,children:[(0,$.jsxs)(`div`,{className:`space-y-2`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase`,children:[(0,$.jsx)(`span`,{children:`Mechanical Energy`}),(0,$.jsxs)(`span`,{className:`text-white font-semibold`,children:[r?.total?.toFixed(2)??`0.00`,` J`]})]}),(0,$.jsx)(`canvas`,{ref:o,width:280,height:90,className:`w-full h-[85px] rounded-lg border border-zinc-800 bg-black`}),(0,$.jsxs)(`div`,{className:`flex justify-between text-[10px] font-mono text-zinc-400`,children:[(0,$.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,$.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-zinc-400`}),`T: `,r?.kinetic?.toFixed(1)??`0.0`,` J`]}),(0,$.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,$.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-zinc-600`}),`V: `,r?.potential?.toFixed(1)??`0.0`,` J`]}),(0,$.jsxs)(`span`,{className:`flex items-center gap-1 text-white font-semibold`,children:[(0,$.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-white`}),`E: `,r?.total?.toFixed(1)??`0.0`,` J`]})]})]}),(0,$.jsxs)(`div`,{className:`space-y-2 border-t border-zinc-800/60 pt-3`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase`,children:[(0,$.jsx)(`span`,{children:`Phase Space (θ₁ vs ω₁)`}),(0,$.jsx)(`span`,{className:`text-zinc-500`,children:`Poincaré`})]}),(0,$.jsx)(`canvas`,{ref:s,width:280,height:130,className:`w-full h-[120px] rounded-lg border border-zinc-800 bg-black`})]})]})]}):null}function Wu(e=2,t=null,n=null,r=null){let a=t?[...t]:Array(e).fill(1),o=n?[...n]:Array(e).fill(1),s=r?[...r]:Array(e).fill(`#ffffff`),c=Array(e+1).fill(!1);c[0]=!0;let l=[{x:0,y:0,z:0}],u=[];for(let t=0;t<e;t++){let e=a[t]||1;l.push({x:(t+1)*e*.707,y:-(t+1)*e*.707,z:(t+1)*.15}),u.push({x:0,y:0,z:.1*(t+1)})}return{numLinks:e,lengths:a,masses:o,colors:s,pinned:c,positions:l,velocities:u}}function Gu(e,t,n,r=null,a=null){let{numLinks:o,lengths:s,masses:c,positions:l,velocities:u,pinned:d=[]}=e,{g:f=9.81,damping:m=0}=t,h=n/16,g=Math.max(0,1-m*h),_=l.map(e=>({...e})),v=u.map(e=>({...e}));for(let e=0;e<16;e++){let e=_.map(e=>({...e}));for(let e=1;e<=o;e++){let t=e-1,n=d[e]||!1;if(r===e&&a){_[e].x=a.x,_[e].y=a.y,_[e].z=a.z;continue}if(n){v[t].x=0,v[t].y=0,v[t].z=0;continue}v[t].x*=g,v[t].y*=g,v[t].z*=g,v[t].y-=f*h,_[e].x+=v[t].x*h,_[e].y+=v[t].y*h,_[e].z+=v[t].z*h}_[0].x=0,_[0].y=0,_[0].z=0;for(let e=0;e<20;e++)for(let e=1;e<=o;e++){let t=_[e-1],n=_[e],a=s[e-1]||1,o=n.x-t.x,l=n.y-t.y,u=n.z-t.z,f=Math.sqrt(o*o+l*l+u*u)||1e-5,m=(f-a)/f,h=e===1||d[e-1]||r===e-1,g=d[e]||r===e,v=h?0:1/(c[e-2]||1),y=g?0:1/(c[e-1]||1),b=v+y;if(b>0){let r=v/b,a=y/b;!h&&e>1&&(t.x+=o*m*r,t.y+=l*m*r,t.z+=u*m*r),g||(n.x-=o*m*a,n.y-=l*m*a,n.z-=u*m*a)}}for(let t=1;t<=o;t++){let n=t-1;d[t]?(v[n].x=0,v[n].y=0,v[n].z=0):(v[n].x=(_[t].x-e[t].x)/h,v[n].y=(_[t].y-e[t].y)/h,v[n].z=(_[t].z-e[t].z)/h)}}return{...e,numLinks:o,lengths:s,masses:c,colors:e.colors||Array(o).fill(`#ffffff`),pinned:e.pinned||Array(o+1).fill(!1),positions:_,velocities:v}}function Ku(e,t){let{numLinks:n,masses:r,positions:a,velocities:o}=e,{g:s=9.81}=t,c=0,l=0;for(let e=0;e<n;e++){let t=r[e]||1,n=o[e]||{x:0,y:0,z:0},u=a[e+1]||{x:0,y:0,z:0},d=n.x*n.x+n.y*n.y+n.z*n.z;c+=.5*t*d,l+=t*s*u.y}return{kinetic:c,potential:l,total:c+l}}function qu(e,t){let n=t.x-e.x,r=t.y-e.y,a=t.z-e.z,o=Math.sqrt(n*n+r*r+a*a)||1e-4,s=Math.atan2(a,n)*180/Math.PI,c=Math.asin(Math.max(-1,Math.min(1,r/o)))*180/Math.PI;return{azimuthDeg:Math.round(s*10)/10,elevationDeg:Math.round(c*10)/10,length:Math.round(o*100)/100}}function Ju(e,t,n,r){let{numLinks:a,lengths:o,positions:s,velocities:c}=e;if(t<1||t>a)return e;let l=s.map(e=>({...e})),u=l[t-1],d=o[t-1]||1,f=n*Math.PI/180,m=r*Math.PI/180,h=Math.cos(m),g=Math.sin(m),_=Math.cos(f),v=Math.sin(f),y={...l[t]},b=u.x+d*h*_,x=u.y+d*g,S=u.z+d*h*v,C=b-y.x,w=x-y.y,T=S-y.z;l[t]={x:b,y:x,z:S};for(let e=t+1;e<=a;e++)l[e].x+=C,l[e].y+=w,l[e].z+=T;let E=c.map((e,n)=>n>=t-1?{x:0,y:0,z:0}:{...e});return{...e,positions:l,velocities:E}}function Yu(e,t,n){let{numLinks:r,lengths:a,masses:o,positions:s,velocities:c,pinned:l=[]}=e;if(t<1||t>r)return e;let u=s.map(e=>({...e}));u[t]={...n};for(let e=0;e<15;e++)for(let e=1;e<=r;e++){let n=u[e-1],r=u[e],s=a[e-1]||1,c=r.x-n.x,d=r.y-n.y,f=r.z-n.z,m=Math.sqrt(c*c+d*d+f*f)||1e-5,h=(m-s)/m,g=e===1||l[e-1]||e-1===t,_=l[e]||e===t,v=g?0:1/(o[e-2]||1),y=_?0:1/(o[e-1]||1),b=v+y;if(b>0){let t=v/b,a=y/b;!g&&e>1&&(n.x+=c*h*t,n.y+=d*h*t,n.z+=f*h*t),_||(r.x-=c*h*a,r.y-=d*h*a,r.z-=f*h*a)}}let d=c.map((e,n)=>n===t-1?{x:0,y:0,z:0}:{...e});return{...e,positions:u,velocities:d}}function Xu(e,t=null){let{numLinks:n,lengths:r,masses:a,colors:o,pinned:s,positions:c,velocities:l}=e,u=n+1,d=t===null?n:t,f=[...r],m=[...a],h=[...o||Array(n).fill(`#ffffff`)],g=[...s||Array(n+1).fill(!1)],_=c.map(e=>({...e})),v=l.map(e=>({...e})),y=.8,b=_[d],x={x:b.x+.5*y,y:b.y-.7*y,z:b.z+.2*y};return f.splice(d,0,y),m.splice(d,0,1),h.splice(d,0,`#ffffff`),g.splice(d+1,0,!1),_.splice(d+1,0,x),v.splice(d,0,{x:0,y:0,z:0}),{numLinks:u,lengths:f,masses:m,colors:h,pinned:g,positions:_,velocities:v}}function Zu(e,t){let{numLinks:n,lengths:r,masses:a,colors:o,pinned:s,positions:c,velocities:l}=e;return n<=1||t<1||t>n?e:{numLinks:n-1,lengths:r.filter((e,n)=>n!==t-1),masses:a.filter((e,n)=>n!==t-1),colors:(o||Array(n).fill(`#ffffff`)).filter((e,n)=>n!==t-1),pinned:(s||Array(n+1).fill(!1)).filter((e,n)=>n!==t),positions:c.filter((e,n)=>n!==t),velocities:l.filter((e,n)=>n!==t-1)}}var Qu=[{id:`double_3d_swirl`,name:`Double 3D Swirl`,numLinks:2,category:`Spatial 3D`,description:`Double pendulum with out-of-plane transverse impulse creating 3D chaotic loops.`,params:{g:9.81,damping:0},initialConfig:()=>({numLinks:2,lengths:[1,1],masses:[1,1],colors:[`#ffffff`,`#00f5ff`],pinned:[!0,!1,!1],positions:[{x:0,y:0,z:0},{x:.9,y:.2,z:.4},{x:1.5,y:-.4,z:-.5}],velocities:[{x:0,y:0,z:.8},{x:.4,y:0,z:-1.2}]})},{id:`triple_helix`,name:`Triple 3D Helix`,numLinks:3,category:`N = 3 Spatial`,description:`3-link spatial pendulum tumbling across all 3 Cartesian dimensions.`,params:{g:9.81,damping:2e-4},initialConfig:()=>({numLinks:3,lengths:[.85,.85,.85],masses:[1,1,.8],colors:[`#ffffff`,`#00f5ff`,`#ff0077`],pinned:[!0,!1,!1,!1],positions:[{x:0,y:0,z:0},{x:.8,y:.1,z:.3},{x:1.4,y:.3,z:.8},{x:1.8,y:-.4,z:.1}],velocities:[{x:0,y:0,z:.5},{x:0,y:0,z:-.7},{x:.6,y:0,z:1}]})},{id:`quad_snake`,name:`Quad 3D Vortex`,numLinks:4,category:`N = 4 Spatial`,description:`4-link spatial snake chain folding and twisting into 3D vortex knots.`,params:{g:9.81,damping:3e-4},initialConfig:()=>({numLinks:4,lengths:[.65,.65,.65,.65],masses:[1.2,1,.8,.6],colors:[`#ffffff`,`#00f5ff`,`#ff0077`,`#ffd000`],pinned:[!0,!1,!1,!1,!1],positions:[{x:0,y:0,z:0},{x:.6,y:.2,z:.2},{x:1.1,y:.5,z:.5},{x:1.5,y:.3,z:.8},{x:1.9,y:-.2,z:.4}],velocities:[{x:0,y:0,z:.4},{x:.2,y:0,z:-.6},{x:-.3,y:0,z:.8},{x:.5,y:0,z:-1}]})},{id:`penta_whip`,name:`5-Link Spatial Whip`,numLinks:5,category:`N = 5 Spatial`,description:`5-link articulated chain demonstrating high-order nonlinear chaos.`,params:{g:9.81,damping:4e-4},initialConfig:()=>({numLinks:5,lengths:[.55,.55,.55,.55,.55],masses:[1.5,1.2,1,.8,.5],colors:[`#ffffff`,`#a855f7`,`#00f5ff`,`#ff0077`,`#ffd000`],pinned:[!0,!1,!1,!1,!1,!1],positions:[{x:0,y:0,z:0},{x:.5,y:.1,z:.1},{x:1,y:.2,z:.3},{x:1.4,y:.1,z:.6},{x:1.8,y:-.2,z:.4},{x:2.2,y:-.5,z:.1}],velocities:[{x:0,y:0,z:.3},{x:0,y:0,z:-.5},{x:.2,y:0,z:.7},{x:-.4,y:0,z:.9},{x:.6,y:0,z:-1.1}]})},{id:`heavy_tip`,name:`Heavy Tip Inverted`,numLinks:3,category:`Extreme Dynamics`,description:`Massive tip bob creating intense centrifugal reaction forces.`,params:{g:9.81,damping:1e-4},initialConfig:()=>({numLinks:3,lengths:[.9,.9,.7],masses:[.5,.5,5],colors:[`#ffffff`,`#ffffff`,`#ff0077`],pinned:[!0,!1,!1,!1],positions:[{x:0,y:0,z:0},{x:.8,y:.4,z:.2},{x:1.6,y:.7,z:.5},{x:2.2,y:.3,z:.8}],velocities:[{x:0,y:0,z:.2},{x:0,y:0,z:.4},{x:0,y:0,z:-.8}]})},{id:`deca_whip`,name:`10-Link Spatial Ribbon`,numLinks:10,category:`N = 10 Chain`,description:`10-link flexible chain demonstrating wave propagation and 3D chaotic ribboning.`,params:{g:9.81,damping:5e-4},initialConfig:()=>{let e=.26,t=[{x:0,y:0,z:0}],n=[],r=[`#ffffff`,`#e4e4e7`,`#00f5ff`,`#38bdf8`,`#818cf8`,`#a855f7`,`#ec4899`,`#f43f5e`,`#fb923c`,`#ffd000`];for(let r=1;r<=10;r++)t.push({x:r*e*.9,y:.1*Math.sin(r*.6),z:r*e*.4}),n.push({x:0,y:0,z:.2*(r%2==0?1:-1)});return{numLinks:10,lengths:Array(10).fill(e),masses:Array.from({length:10},(e,t)=>Math.max(.2,1.5-t*.12)),colors:r,pinned:Array(11).fill(!1),positions:t,velocities:n}}}];function $u({isOpen:e,onClose:t,activePresetId:n,onSelectPreset:r}){return e?(0,$.jsxs)(`div`,{className:`absolute top-20 left-1/2 -translate-x-1/2 z-40 w-[440px] max-w-[calc(100vw-2rem)] mono-glass rounded-2xl p-4 border border-zinc-800 shadow-2xl text-xs overflow-hidden animate-fade-in`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2 font-mono uppercase tracking-widest text-[11px] text-zinc-300 font-semibold`,children:[(0,$.jsx)(Pu,{size:14,className:`text-white`}),(0,$.jsx)(`span`,{children:`Spatial 3D & N-Pendulum Presets`})]}),(0,$.jsx)(`button`,{onClick:t,className:`w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition`,children:(0,$.jsx)(zu,{size:14})})]}),(0,$.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto pr-1`,children:Qu.map(e=>{let a=n===e.id;return(0,$.jsxs)(`button`,{onClick:()=>{r(e),t()},className:`text-left p-3 rounded-xl border transition flex flex-col justify-between ${a?`bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]`:`bg-zinc-950/80 hover:bg-zinc-900 border-zinc-800 text-zinc-300`}`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{className:`flex justify-between items-center mb-0.5`,children:[(0,$.jsx)(`span`,{className:`text-[9px] font-mono uppercase tracking-wider ${a?`text-zinc-700 font-semibold`:`text-zinc-500`}`,children:e.category}),(0,$.jsxs)(`span`,{className:`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${a?`bg-black text-white`:`bg-zinc-800 text-zinc-300`}`,children:[`N=`,e.numLinks]})]}),(0,$.jsx)(`span`,{className:`text-xs font-semibold block leading-tight`,children:e.name})]}),(0,$.jsx)(`span`,{className:`text-[10px] mt-1.5 line-clamp-2 ${a?`text-zinc-800`:`text-zinc-400`}`,children:e.description})]},e.id)})})]}):null}function ed({isOpen:e,onClose:t}){return e?(0,$.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none`,children:(0,$.jsxs)(`div`,{className:`mono-glass w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 border border-zinc-700 shadow-2xl relative text-zinc-300 text-xs sm:text-sm no-scrollbar`,children:[(0,$.jsx)(`button`,{onClick:t,className:`absolute top-4 right-4 w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition`,children:(0,$.jsx)(zu,{size:16})}),(0,$.jsxs)(`div`,{className:`flex items-center gap-2.5 mb-5 border-b border-zinc-800 pb-3`,children:[(0,$.jsx)(cu,{size:20,className:`text-white`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`text-base sm:text-lg font-bold text-white font-mono uppercase tracking-wide`,children:`Three.js N-Pendulum Experiment`}),(0,$.jsx)(`span`,{className:`text-[10px] text-zinc-400 font-mono`,children:`Spatial Chaos, Position-Based Dynamics & Joint Kinematics`})]})]}),(0,$.jsxs)(`div`,{className:`space-y-4 leading-relaxed`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`h3`,{className:`text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5`,children:[(0,$.jsx)(Tu,{size:14,className:`text-cyan-400`}),`1. Arbitrary $N$-Link Spatial Degrees of Freedom`]}),(0,$.jsx)(`p`,{className:`text-zinc-400`,children:`Unlike classical planar pendulums constrained to a 2D sheet, this system models fully articulated 3D kinematic chains swinging, tumbling, and twisting across all 3 spatial Cartesian dimensions ($X, Y, Z$).`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`h3`,{className:`text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5`,children:[(0,$.jsx)(_u,{size:14,className:`text-white`}),`2. Position-Based Dynamics (PBD) & Constraint Relaxation`]}),(0,$.jsxs)(`p`,{className:`text-zinc-400`,children:[`Rigid distance constraints $|\\mathbf`,p,`_i - \\mathbf`,p,`_`,i-1,`| = l_i$ are solved using iterative projection relaxation (PBD/Verlet), guaranteeing unconditional numerical stability, zero gimbal lock, and realistic multi-body mass distribution even under high-energy chaotic motion.`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`h3`,{className:`text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5`,children:[(0,$.jsx)(Bu,{size:14,className:`text-amber-400`}),`3. Interactive Joint Kinematics & Manual Posing`]}),(0,$.jsx)(`p`,{className:`text-zinc-400`,children:`Pause the simulation at any time to freely grab and position individual joints in 3D space, adjust spherical azimuth and elevation angles, modify masses and rod lengths, or pin intermediate joints to create complex multi-anchor kinetic structures.`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`h3`,{className:`text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5`,children:[(0,$.jsx)(Su,{size:14,className:`text-purple-400`}),`4. Lyapunov Butterfly Ensemble`]}),(0,$.jsxs)(`p`,{className:`text-zinc-400`,children:[`Enable the Butterfly Ensemble mode to simulate a cluster of parallel shadow chains initialized with micro-spatial perturbations ($\\Delta \\approx 10^`,-4,`$ m), visually rendering the exponential divergence of phase trajectories in real time.`]})]})]}),(0,$.jsx)(`div`,{className:`mt-6 flex justify-end`,children:(0,$.jsx)(`button`,{onClick:t,className:`px-5 py-2 rounded-xl bg-white text-black font-semibold text-xs transition hover:bg-zinc-200`,children:`Dismiss`})})]})}):null}var td=[{name:`Studio White`,color:`#ffffff`},{name:`Electric Cyan`,color:`#00f5ff`},{name:`Neon Pink`,color:`#ff0077`},{name:`Amber Gold`,color:`#ffd000`},{name:`Emerald`,color:`#10b981`},{name:`Violet Pulse`,color:`#a855f7`},{name:`Flame Orange`,color:`#fb923c`},{name:`Crimson`,color:`#ef4444`}];function nd({isOpen:e,onClose:t,selectedNodeIndex:n,onSelectNodeIndex:r,nState:a,onUpdateProperty:o,onSetJointAngles:s,onSetJointPosition:c,onKickJoint:l,onFreezeJoint:u,onTogglePinJoint:d,onAddLink:f,onRemoveLink:m,isPaused:h,onTogglePlay:g}){if(!e||n===null||!a)return null;let{numLinks:_,lengths:v=[],masses:b=[],colors:x=[],pinned:S=[],positions:C=[],velocities:w=[]}=a,T=Math.max(1,Math.min(_,n)),E=T===_,D=S[T]||!1,O=b[T-1]||1,k=v[T-1]||1,A=x[T-1]||`#ffffff`,j=C[T]||{x:0,y:0,z:0},M=C[T-1]||{x:0,y:0,z:0},N=w[T-1]||{x:0,y:0,z:0},ee=Math.sqrt(N.x*N.x+N.y*N.y+N.z*N.z),te=qu(M,j),[ne,re]=(0,y.useState)(te.azimuthDeg),[P,F]=(0,y.useState)(te.elevationDeg);(0,y.useEffect)(()=>{re(te.azimuthDeg),F(te.elevationDeg)},[j.x,j.y,j.z,M.x,M.y,M.z]);let ie=(e,t)=>{re(e),F(t),s(T,e,t)},ae=(e,t)=>{let n={...j,[e]:parseFloat(t)||0};c(T,n)};return(0,$.jsxs)(`div`,{className:`absolute top-20 right-4 z-40 w-[340px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] mono-glass rounded-2xl p-4 flex flex-col border border-zinc-700 shadow-2xl text-xs overflow-hidden animate-fade-in`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(`span`,{className:`w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm`,style:{backgroundColor:A}}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,$.jsxs)(`span`,{className:`font-mono font-bold text-white text-sm`,children:[`Joint #`,T]}),E&&(0,$.jsx)(`span`,{className:`bg-white/10 text-zinc-300 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider`,children:`Tip`}),D&&(0,$.jsxs)(`span`,{className:`bg-amber-500/20 text-amber-300 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider flex items-center gap-0.5`,children:[(0,$.jsx)(Ou,{size:8}),` Pinned`]})]}),(0,$.jsxs)(`span`,{className:`text-[10px] font-mono text-zinc-400`,children:[`Speed: `,ee.toFixed(2),` m/s`]})]})]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,$.jsx)(`button`,{onClick:()=>r(Math.max(1,T-1)),disabled:T<=1,title:`Previous Joint`,className:`w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition`,children:(0,$.jsx)(du,{size:13})}),(0,$.jsxs)(`span`,{className:`text-[10px] font-mono text-zinc-400 px-1`,children:[T,`/`,_]}),(0,$.jsx)(`button`,{onClick:()=>r(Math.min(_,T+1)),disabled:T>=_,title:`Next Joint`,className:`w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition`,children:(0,$.jsx)(fu,{size:13})}),(0,$.jsx)(`button`,{onClick:t,title:`Close Inspector`,className:`w-6 h-6 ml-1.5 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition`,children:(0,$.jsx)(zu,{size:13})})]})]}),(0,$.jsxs)(`div`,{className:`flex-1 overflow-y-auto space-y-3.5 pr-1 no-scrollbar`,children:[(0,$.jsxs)(`div`,{className:`grid grid-cols-4 gap-1.5`,children:[(0,$.jsxs)(`button`,{onClick:()=>l(T),title:`Give 3D Impulse Kick`,className:`p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white flex flex-col items-center gap-1 text-[10px] text-zinc-300 transition`,children:[(0,$.jsx)(Bu,{size:13,className:`text-amber-400`}),(0,$.jsx)(`span`,{children:`Kick`})]}),(0,$.jsxs)(`button`,{onClick:()=>u(T),title:`Freeze Joint Momentum`,className:`p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white flex flex-col items-center gap-1 text-[10px] text-zinc-300 transition`,children:[(0,$.jsx)(Du,{size:13,className:`text-cyan-400`}),(0,$.jsx)(`span`,{children:`Freeze`})]}),(0,$.jsxs)(`button`,{onClick:()=>d(T),title:D?`Unpin Joint`:`Pin Joint in Space`,className:`p-1.5 rounded-lg border flex flex-col items-center gap-1 text-[10px] transition ${D?`bg-amber-500/20 text-amber-300 border-amber-500/50`:`bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:bg-zinc-800`}`,children:[(0,$.jsx)(Ou,{size:13,className:D?`text-amber-400`:`text-zinc-400`}),(0,$.jsx)(`span`,{children:D?`Pinned`:`Pin`})]}),(0,$.jsxs)(`button`,{onClick:()=>f(T),title:`Insert Link After This Joint`,className:`p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white flex flex-col items-center gap-1 text-[10px] text-zinc-300 transition`,children:[(0,$.jsx)(Au,{size:13,className:`text-emerald-400`}),(0,$.jsx)(`span`,{children:`+ Link`})]})]}),(0,$.jsxs)(`div`,{className:`bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-2.5 space-y-2.5`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase font-semibold`,children:[(0,$.jsx)(_u,{size:12,className:`text-white`}),(0,$.jsx)(`span`,{children:`3D Joint Angle Pose`})]}),!h&&(0,$.jsx)(`button`,{onClick:g,className:`text-[9px] font-mono text-zinc-400 hover:text-white underline`,children:`(Pause to Pose)`})]}),(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between text-[11px] font-mono`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`Azimuth (Yaw φ):`}),(0,$.jsxs)(`span`,{className:`text-white font-bold`,children:[ne,`°`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`-180`,max:`180`,step:`1`,value:ne,onChange:e=>ie(parseFloat(e.target.value),P),className:`w-full`})]}),(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between text-[11px] font-mono`,children:[(0,$.jsx)(`span`,{className:`text-zinc-400`,children:`Elevation (Pitch θ):`}),(0,$.jsxs)(`span`,{className:`text-white font-bold`,children:[P,`°`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`-90`,max:`90`,step:`1`,value:P,onChange:e=>ie(ne,parseFloat(e.target.value)),className:`w-full`})]})]}),(0,$.jsxs)(`div`,{className:`bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-2.5 space-y-2`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase font-semibold`,children:[(0,$.jsx)(Tu,{size:12,className:`text-white`}),(0,$.jsx)(`span`,{children:`Cartesian Position (m)`})]}),(0,$.jsx)(`div`,{className:`grid grid-cols-3 gap-1.5 font-mono`,children:[`x`,`y`,`z`].map(e=>(0,$.jsxs)(`div`,{className:`bg-zinc-900 border border-zinc-800 rounded p-1 flex flex-col items-center`,children:[(0,$.jsx)(`span`,{className:`text-[9px] uppercase text-zinc-500 font-bold`,children:e}),(0,$.jsx)(`input`,{type:`number`,step:`0.05`,value:j[e]===void 0?0:Math.round(j[e]*100)/100,onChange:t=>ae(e,t.target.value),className:`w-full bg-transparent text-center text-xs text-white focus:outline-none`})]},e))})]}),(0,$.jsxs)(`div`,{className:`space-y-2.5 border-t border-zinc-800/80 pt-2.5`,children:[(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[11px]`,children:[(0,$.jsxs)(`span`,{className:`text-zinc-400`,children:[`Bob Mass ($m_`,T,`$):`]}),(0,$.jsxs)(`span`,{className:`text-white font-bold`,children:[O.toFixed(2),` kg`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`0.1`,max:`8.0`,step:`0.1`,value:O,onChange:e=>o(T-1,`mass`,parseFloat(e.target.value)),className:`w-full`})]}),(0,$.jsxs)(`div`,{className:`space-y-1`,children:[(0,$.jsxs)(`div`,{className:`flex justify-between font-mono text-[11px]`,children:[(0,$.jsxs)(`span`,{className:`text-zinc-400`,children:[`Rod Length ($l_`,T,`$):`]}),(0,$.jsxs)(`span`,{className:`text-white font-bold`,children:[k.toFixed(2),` m`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`0.2`,max:`3.0`,step:`0.05`,value:k,onChange:e=>o(T-1,`length`,parseFloat(e.target.value)),className:`w-full`})]})]}),(0,$.jsxs)(`div`,{className:`space-y-1.5 border-t border-zinc-800/80 pt-2.5`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase font-semibold`,children:[(0,$.jsx)(Eu,{size:12,className:`text-white`}),(0,$.jsx)(`span`,{children:`Node Color Theme`})]}),(0,$.jsx)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:td.map(e=>(0,$.jsx)(`button`,{onClick:()=>o(T-1,`color`,e.color),title:e.name,className:`w-6 h-6 rounded-full border transition flex items-center justify-center ${A.toLowerCase()===e.color.toLowerCase()?`border-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.6)]`:`border-zinc-700 hover:scale-105 opacity-70 hover:opacity-100`}`,style:{backgroundColor:e.color},children:A.toLowerCase()===e.color.toLowerCase()&&(0,$.jsx)(hu,{size:10,className:`text-black`})},e.color))})]}),_>1&&(0,$.jsx)(`div`,{className:`pt-2 border-t border-zinc-800/80`,children:(0,$.jsxs)(`button`,{onClick:()=>m(T),className:`w-full py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-900/60 text-red-300 font-semibold flex items-center justify-center gap-1.5 text-[11px] transition`,children:[(0,$.jsx)(Iu,{size:12}),(0,$.jsxs)(`span`,{children:[`Delete Joint #`,T]})]})})]})]})}var rd=new Set([`gravity`,`damping`,`sim_speed`,`trail_length`,`trail_fade`,`show_grid`,`ensemble`,`ensemble_count`,`ensemble_delta`]);function id({nState:e,params:t,simSpeed:n=1,trailLength:r=500,trailFade:a=!0,showGrid:o=!0,isEnsemble:s=!1,ensembleCount:c=12,ensembleDelta:l=1e-4}){let{numLinks:u=2,lengths:d=[],masses:f=[],colors:m=[],pinned:h=[],positions:g=[],velocities:_=[]}=e||{},v=`# ========================================================
`;v+=`# Three.js N-Pendulum Experiment Script
`,v+=`# Define environment physics & articulated joint network
`,v+=`# ========================================================

`,v+=`# --- Global Environment Parameters ---
`,v+=`gravity = ${t.g.toFixed(2)}\n`,v+=`damping = ${t.damping.toFixed(4)}\n`,v+=`sim_speed = ${n.toFixed(1)}\n`,v+=`trail_length = ${r}\n`,v+=`trail_fade = ${a?`True`:`False`}\n`,v+=`show_grid = ${o?`True`:`False`}\n`,v+=`ensemble = ${s?`True`:`False`}\n`,s&&(v+=`ensemble_count = ${c}\n`,v+=`ensemble_delta = ${l.toExponential(2)}\n`),v+=`\n# --- Articulated Joint Network (N = ${u}) ---\n`,v+=`# node(id, length, mass, color, azimuth, elevation, [pos], [vel], pinned)
`,v+=`clear_nodes()

`;for(let e=1;e<=u;e++){let t=d[e-1]===void 0?1:d[e-1],n=f[e-1]===void 0?1:f[e-1],r=m&&m[e-1]||`#ffffff`,a=h&&h[e]||!1,o=g[e]||{x:0,y:0,z:0},s=g[e-1]||{x:0,y:0,z:0},c=_[e-1]||{x:0,y:0,z:0},l=qu(s,o);v+=`node(
`,v+=`    id=${e},\n`,v+=`    length=${t.toFixed(2)},\n`,v+=`    mass=${n.toFixed(2)},\n`,v+=`    color="${r}",\n`,v+=`    azimuth=${l.azimuthDeg.toFixed(1)},\n`,v+=`    elevation=${l.elevationDeg.toFixed(1)},\n`,v+=`    pos=[${o.x.toFixed(3)}, ${o.y.toFixed(3)}, ${o.z.toFixed(3)}],\n`,v+=`    vel=[${c.x.toFixed(3)}, ${c.y.toFixed(3)}, ${c.z.toFixed(3)}],\n`,v+=`    pinned=${a?`True`:`False`}\n`,v+=`)
`}return v}function ad(e){let t=e.split(`
`),n=[],r=[0];for(let e=0;e<t.length;e++){let a=t[e],o=!1,s=``,c=-1;for(let e=0;e<a.length;e++){let t=a[e];if((t===`"`||t===`'`)&&(e===0||a[e-1]!==`\\`))o?s===t&&(o=!1):(o=!0,s=t);else if(t===`#`&&!o){c=e;break}}let l=``;c!==-1&&(l=`//`+a.slice(c+1),a=a.slice(0,c));let u=a.trim();if(!u){n.push(l);continue}let d=a.search(/\S/);for(;r.length>1&&d<r[r.length-1];)r.pop(),n.push(` `.repeat(r[r.length-1])+`}`);let f=u;f=f.replace(/\bTrue\b/g,`true`).replace(/\bFalse\b/g,`false`).replace(/\bNone\b/g,`null`).replace(/\band\b/g,`&&`).replace(/\bor\b/g,`||`).replace(/\bnot\b/g,`!`),f=f.replace(/\(([^()]+?)\s+if\s+([^()]+?)\s+else\s+([^()]+?)\)/g,`(( $2 ) ? ( $1 ) : ( $3 ))`),f=f.replace(/([a-zA-Z0-9_\.\'\"]+?)\s+if\s+([a-zA-Z0-9_\.\=\!\<\>\%\+\-\*\/\s]+?)\s+else\s+([a-zA-Z0-9_\.\'\"]+)/g,`(( $2 ) ? ( $1 ) : ( $3 ))`);let m=f.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\(([^)]+)\)\s*:?$/);if(m){let e=m[1],t=m[2].split(`,`).map(e=>e.trim()),n=`0`,a=t[0],o=`1`;t.length===2?(n=t[0],a=t[1]):t.length>=3&&(n=t[0],a=t[1],o=t[2]),f=`for (let ${e} = ${n}; ${e} < ${a}; ${e} += ${o}) {`,r.push(d+4)}else f.endsWith(`:`)&&(f=f.slice(0,-1)+` {`,r.push(d+4));f=od(f);let h=f.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);if(h){let e=h[1],t=h[2];f=rd.has(e)?`env.${e} = ${t}`:`var ${e} = ${t}`}let g=` `.repeat(Math.max(0,d))+f+(l?` `+l:``);n.push(g)}for(;r.length>1;)r.pop(),n.push(` `.repeat(r[r.length-1])+`}`);return n.join(`
`)}function od(e){return e.replace(/\b(node|link|joint|add_node)\s*\(([\s\S]*?)\)/g,(e,t,n)=>{let r=n.trim();if(!r)return`${t}()`;if(r.includes(`=`)){let e=sd(r),n=[];return e.forEach(e=>{let t=e.indexOf(`=`);if(t!==-1){let r=e.slice(0,t).trim(),a=e.slice(t+1).trim();n.push(`${r}: ${a}`)}else n.push(`_pos_${n.length}: ${e.trim()}`)}),`${t}({ ${n.join(`, `)} })`}return e})}function sd(e){let t=[],n=``,r=0,a=!1,o=``;for(let s=0;s<e.length;s++){let c=e[s];if((c===`"`||c===`'`)&&(s===0||e[s-1]!==`\\`)&&(a?o===c&&(a=!1):(a=!0,o=c)),!a){if(c===`[`||c===`(`||c===`{`)r++;else if(c===`]`||c===`)`||c===`}`)r--;else if(c===`,`&&r===0){t.push(n.trim()),n=``;continue}}n+=c}return n.trim()&&t.push(n.trim()),t}function cd(e,t,n){let r={success:!0,error:null,params:{...n},simSpeed:1,trailLength:500,trailFade:!0,showGrid:!0,isEnsemble:!1,ensembleCount:12,ensembleDelta:1e-4,nState:null};try{let a=[],o={gravity:n.g===void 0?9.81:n.g,damping:n.damping===void 0?0:n.damping,sim_speed:1,trail_length:500,trail_fade:!0,show_grid:!0,ensemble:!1,ensemble_count:12,ensemble_delta:1e-4},s=()=>{a.length=0},c=(e={})=>{let t={};typeof e==`object`&&e&&(t={...e},t._pos_0!==void 0&&t.id===void 0&&(t.id=t._pos_0),t._pos_1!==void 0&&t.length===void 0&&(t.length=t._pos_1),t._pos_2!==void 0&&t.mass===void 0&&(t.mass=t._pos_2),t._pos_3!==void 0&&t.color===void 0&&(t.color=t._pos_3));let n=t.id||a.length+1,r=parseFloat(t.length)||1,o=parseFloat(t.mass)||1,s=t.color||`#ffffff`,c=!!t.pinned,l=t.azimuth===void 0?45:parseFloat(t.azimuth),u=t.elevation===void 0?-45:parseFloat(t.elevation),d=Array.isArray(t.pos)?{x:t.pos[0]||0,y:t.pos[1]||0,z:t.pos[2]||0}:null,f=Array.isArray(t.vel)?{x:t.vel[0]||0,y:t.vel[1]||0,z:t.vel[2]||0}:{x:0,y:0,z:0};a.push({id:n,length:r,mass:o,color:s,pinned:c,azimuth:l,elevation:u,pos:d,vel:f})},l=(e=1,t=1,n=`#ffffff`)=>{c({length:e,mass:t,color:n})},u=Math.sin,d=Math.cos,f=Math.tan,m=Math.sqrt,h=Math.abs,g=Math.pow,_=Math.PI,v=Math.PI,y=e=>e&&e.length!==void 0?e.length:0,b=e=>e*Math.PI/180,x=e=>e*180/Math.PI,S=(e=0,t=1)=>e+Math.random()*(t-e),C=ad(e);Function(`env`,`node`,`link`,`joint`,`add_node`,`clear_nodes`,`sin`,`cos`,`tan`,`sqrt`,`abs`,`pow`,`PI`,`pi`,`len`,`rad`,`deg`,`random`,`"use strict";
      ${C}
      `)(o,c,c,c,l,s,u,d,f,m,h,g,_,v,y,b,x,S),r.params={g:parseFloat(o.gravity)||9.81,damping:parseFloat(o.damping)||0},r.simSpeed=Math.max(.1,Math.min(5,parseFloat(o.sim_speed)||1)),r.trailLength=Math.max(10,Math.min(2e3,parseInt(o.trail_length)||500)),r.trailFade=!!o.trail_fade,r.showGrid=!!o.show_grid,r.isEnsemble=!!o.ensemble,r.ensembleCount=Math.max(2,Math.min(64,parseInt(o.ensemble_count)||12)),r.ensembleDelta=parseFloat(o.ensemble_delta)||1e-4;let w=Math.max(1,a.length),T=[],E=[],D=[],O=[!0],k=[{x:0,y:0,z:0}],A=[];a.length===0?r.nState=t:(a.forEach((e,t)=>{if(T.push(e.length),E.push(e.mass),D.push(e.color),O.push(e.pinned),e.pos)k.push({...e.pos});else{let n=k[t],r=e.azimuth*Math.PI/180,a=e.elevation*Math.PI/180;k.push({x:n.x+e.length*Math.cos(a)*Math.cos(r),y:n.y+e.length*Math.sin(a),z:n.z+e.length*Math.cos(a)*Math.sin(r)})}A.push({...e.vel})}),r.nState={numLinks:w,lengths:T,masses:E,colors:D,pinned:O,positions:k,velocities:A})}catch(e){r.success=!1,r.error=e.message}return r}var ld=[{id:`double_chaos`,name:`Double 3D Swirl`,code:`# Three.js N-Pendulum Experiment
# Double Pendulum with 3D Out-of-Plane Swirl
gravity = 9.81
damping = 0.0000
sim_speed = 1.0
trail_length = 600
trail_fade = True
show_grid = True
ensemble = False

clear_nodes()
node(id=1, length=1.00, mass=1.00, color="#ffffff", pos=[0.90, 0.20, 0.40], vel=[0.00, 0.00, 0.80])
node(id=2, length=1.00, mass=1.00, color="#00f5ff", pos=[1.50, -0.40, -0.50], vel=[0.40, 0.00, -1.20])
`},{id:`triple_helix`,name:`Triple 3D Helix`,code:`# Three.js N-Pendulum Experiment
# 3-Link Spatial Helix Vortex
gravity = 9.81
damping = 0.0002
sim_speed = 1.0
trail_length = 800
trail_fade = True
show_grid = True
ensemble = False

clear_nodes()
node(id=1, length=0.85, mass=1.00, color="#ffffff", azimuth=45, elevation=15, vel=[0.0, 0.0, 0.5])
node(id=2, length=0.85, mass=1.00, color="#00f5ff", azimuth=90, elevation=25, vel=[0.0, 0.0, -0.7])
node(id=3, length=0.85, mass=0.80, color="#ff0077", azimuth=135, elevation=-30, vel=[0.6, 0.0, 1.0])
`},{id:`quad_snake`,name:`Quad 3D Vortex`,code:`# Three.js N-Pendulum Experiment
# 4-Link Articulated Spatial Snake
gravity = 9.81
damping = 0.0003
sim_speed = 1.0
trail_length = 1000
trail_fade = True
show_grid = True

clear_nodes()
node(id=1, length=0.65, mass=1.20, color="#ffffff", azimuth=30, elevation=20, vel=[0.0, 0.0, 0.4])
node(id=2, length=0.65, mass=1.00, color="#00f5ff", azimuth=60, elevation=45, vel=[0.2, 0.0, -0.6])
node(id=3, length=0.65, mass=0.80, color="#ff0077", azimuth=120, elevation=20, vel=[-0.3, 0.0, 0.8])
node(id=4, length=0.65, mass=0.60, color="#ffd000", azimuth=180, elevation=-20, vel=[0.5, 0.0, -1.0])
`},{id:`procedural_whip`,name:`Procedural 8-Link Wave (Loop)`,code:`# Three.js N-Pendulum Experiment
# Procedurally generated 8-link whip using Pythonic for-loop
gravity = 9.81
damping = 0.0004
sim_speed = 1.0
trail_length = 1200
trail_fade = True

clear_nodes()
colors = ["#ffffff", "#00f5ff", "#38bdf8", "#818cf8", "#a855f7", "#ec4899", "#f43f5e", "#ffd000"]

for i in range(1, 9):
    l = 0.35
    m = 1.5 - (i * 0.12)
    c = colors[(i - 1) % len(colors)]
    az = 30 * i
    el = 15 * sin(i * 0.8)
    v_z = 0.15 * (1 if i % 2 == 0 else -1)
    node(id=i, length=l, mass=m, color=c, azimuth=az, elevation=el, vel=[0.0, 0.0, v_z])
`},{id:`pinned_bridge`,name:`Coupled Multi-Pivot Anchor`,code:`# Three.js N-Pendulum Experiment
# 5-Link Chain with an Intermediate Pinned Anchor at Joint #3
gravity = 9.81
damping = 0.0002
sim_speed = 1.0
trail_length = 600

clear_nodes()
node(id=1, length=0.8, mass=1.0, color="#ffffff", pos=[0.7, -0.3, 0.2], vel=[0.0, 0.0, 0.5])
node(id=2, length=0.8, mass=1.0, color="#00f5ff", pos=[1.4, -0.6, 0.4], vel=[0.2, 0.0, -0.4])
# Intermediate Anchor (Fixed in 3D Space)
node(id=3, length=0.7, mass=2.0, color="#ffd000", pos=[1.8, -0.4, 0.8], pinned=True)
node(id=4, length=0.7, mass=0.8, color="#a855f7", pos=[2.3, -0.8, 0.5], vel=[0.0, 0.0, 0.8])
node(id=5, length=0.6, mass=0.5, color="#ff0077", pos=[2.8, -1.2, 0.2], vel=[0.4, 0.0, -1.0])
`},{id:`butterfly_ensemble`,name:`Lyapunov Butterfly Ensemble`,code:`# Three.js N-Pendulum Experiment
# 3D Double Pendulum with 16 Parallel Perturbed Shadow Chains
gravity = 9.81
damping = 0.0000
sim_speed = 1.0
trail_length = 500
trail_fade = True
show_grid = True

ensemble = True
ensemble_count = 16
ensemble_delta = 0.0001

clear_nodes()
node(id=1, length=1.00, mass=1.00, color="#ffffff", pos=[0.90, 0.20, 0.40], vel=[0.00, 0.00, 0.80])
node(id=2, length=1.00, mass=1.00, color="#00f5ff", pos=[1.50, -0.40, -0.50], vel=[0.40, 0.00, -1.20])
`}];function ud({isOpen:e,onClose:t,scriptCode:n,onChangeCode:r,onApplyScript:a,onRegenerateFromState:o,isExecuting:s,executionError:c,autoApply:l,setAutoApply:u,isPaused:d,onTogglePlay:f}){let[m,h]=(0,y.useState)(420),[g,_]=(0,y.useState)(!1),[v,b]=(0,y.useState)(!1),[x,S]=(0,y.useState)(!1),C=(0,y.useRef)(null),w=(0,y.useRef)(null),T=()=>{C.current&&w.current&&(w.current.scrollTop=C.current.scrollTop)};(0,y.useEffect)(()=>{let e=e=>{if(!v)return;let t=window.innerWidth-e.clientX;h(Math.max(320,Math.min(window.innerWidth*.85,t)))},t=()=>{v&&b(!1)};return v&&(window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t)),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t)}},[v]);let E=()=>{navigator.clipboard.writeText(n),_(!0),setTimeout(()=>_(!1),2e3)},D=e=>{if((e.metaKey||e.ctrlKey)&&e.key===`Enter`)e.preventDefault(),a(n);else if(e.key===`Tab`){e.preventDefault();let t=e.target.selectionStart,a=e.target.selectionEnd;r(n.substring(0,t)+`    `+n.substring(a)),setTimeout(()=>{C.current&&(C.current.selectionStart=C.current.selectionEnd=t+4)},0)}},O=(n||``).split(`
`).length,k=Array.from({length:Math.max(O,1)},(e,t)=>t+1);return e?(0,$.jsxs)(`div`,{style:{width:`${m}px`},className:`absolute right-0 top-0 bottom-0 z-40 mono-glass flex flex-col border-l border-zinc-800 shadow-2xl animate-fade-in text-xs select-none backdrop-blur-xl bg-black/90`,children:[(0,$.jsx)(`div`,{onPointerDown:e=>{e.preventDefault(),b(!0)},title:`Drag to resize script editor`,className:`absolute left-0 top-0 bottom-0 w-2 -ml-1 cursor-ew-resize flex items-center justify-center group hover:bg-cyan-500/30 transition z-50`,children:(0,$.jsx)(`div`,{className:`w-0.5 h-8 bg-zinc-600 group-hover:bg-cyan-400 rounded-full transition`})}),(0,$.jsxs)(`div`,{className:`p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(`div`,{className:`w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400`,children:(0,$.jsx)(yu,{size:15})}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 font-mono font-bold text-white text-xs`,children:[(0,$.jsx)(`span`,{children:`Pythonic Pendulum Script`}),(0,$.jsx)(`span`,{className:`text-[9px] px-1.5 py-0.2 bg-cyan-500/20 text-cyan-300 rounded font-mono uppercase`,children:`DSL`})]}),(0,$.jsx)(`span`,{className:`text-[10px] text-zinc-400 font-mono`,children:`Bidirectional Live 2-Way Sync`})]})]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,$.jsxs)(`div`,{className:`relative`,children:[(0,$.jsxs)(`button`,{onClick:()=>S(e=>!e),className:`px-2 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 flex items-center gap-1 font-mono text-[10px] transition`,children:[(0,$.jsx)(Pu,{size:11,className:`text-amber-400`}),(0,$.jsx)(`span`,{children:`Templates`}),(0,$.jsx)(uu,{size:11})]}),x&&(0,$.jsxs)(`div`,{className:`absolute right-0 top-8 w-56 bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl p-1 z-50 animate-fade-in font-mono text-[11px] space-y-0.5`,children:[(0,$.jsx)(`div`,{className:`px-2 py-1 text-[9px] uppercase tracking-wider text-zinc-500 font-bold`,children:`Preset Script Examples`}),ld.map(e=>(0,$.jsxs)(`button`,{onClick:()=>{r(e.code),a(e.code),S(!1)},className:`w-full text-left px-2 py-1.5 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-between`,children:[(0,$.jsx)(`span`,{children:e.name}),(0,$.jsx)(fu,{size:11,className:`text-zinc-500`})]},e.id))]})]}),(0,$.jsx)(`button`,{onClick:t,title:`Collapse Editor`,className:`w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition ml-1`,children:(0,$.jsx)(zu,{size:14})})]})]}),(0,$.jsxs)(`div`,{className:`px-3 py-2 border-b border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between gap-2`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,$.jsxs)(`button`,{onClick:()=>a(n),className:`px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-[11px] flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.4)] transition active:scale-95`,children:[(0,$.jsx)(ku,{size:12,fill:`currentColor`}),(0,$.jsx)(`span`,{children:`Run Script`})]}),(0,$.jsx)(`button`,{onClick:o,title:`Regenerate Script from Current 3D Canvas State`,className:`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition`,children:(0,$.jsx)(Mu,{size:13})}),(0,$.jsx)(`button`,{onClick:E,title:`Copy Script`,className:`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition`,children:g?(0,$.jsx)(lu,{size:13,className:`text-emerald-400`}):(0,$.jsx)(vu,{size:13})})]}),(0,$.jsxs)(`label`,{className:`flex items-center gap-1.5 cursor-pointer text-[10px] font-mono text-zinc-400 hover:text-zinc-200`,children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:l,onChange:e=>u(e.target.checked),className:`w-3.5 h-3.5 rounded bg-zinc-900 border-zinc-700 accent-cyan-500`}),(0,$.jsx)(`span`,{children:`Auto-run`})]})]}),(0,$.jsxs)(`div`,{className:`flex-1 flex overflow-hidden font-mono text-xs bg-zinc-950/90 relative`,children:[(0,$.jsx)(`div`,{ref:w,className:`w-10 bg-zinc-950 border-r border-zinc-800/80 py-3 text-right pr-2 text-zinc-600 select-none overflow-hidden font-mono text-[11px] leading-5`,children:k.map(e=>(0,$.jsx)(`div`,{children:e},e))}),(0,$.jsx)(`textarea`,{ref:C,value:n,onChange:e=>r(e.target.value),onKeyDown:D,onScroll:T,spellCheck:!1,autoCapitalize:`off`,autoComplete:`off`,className:`flex-1 bg-transparent text-zinc-100 p-3 outline-none resize-none overflow-auto font-mono text-[11px] leading-5 text-left whitespace-pre tab-4 selection:bg-cyan-500/30 no-scrollbar`,placeholder:`# Write Pythonic script to configure pendulum network...`})]}),(0,$.jsx)(`div`,{className:`p-2.5 border-t border-zinc-800 bg-zinc-950 text-[10px] font-mono`,children:c?(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 text-red-400 truncate`,children:[(0,$.jsx)(pu,{size:13,className:`flex-shrink-0`}),(0,$.jsxs)(`span`,{className:`truncate`,children:[`Syntax/Runtime Error: `,c]})]}):(0,$.jsxs)(`div`,{className:`flex items-center justify-between text-zinc-400`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 text-emerald-400`,children:[(0,$.jsx)(mu,{size:13,className:`flex-shrink-0`}),(0,$.jsx)(`span`,{children:`Script Active & Synced (Cmd+Enter to Run)`})]}),(0,$.jsxs)(`span`,{className:`text-zinc-500`,children:[O,` lines`]})]})})]}):null}var dd=new class{constructor(){this.ctx=null,this.osc1=null,this.osc2=null,this.gain1=null,this.gain2=null,this.masterGain=null,this.filter=null,this.isEnabled=!1}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.12,this.ctx.currentTime),this.filter=this.ctx.createBiquadFilter(),this.filter.type=`lowpass`,this.filter.frequency.setValueAtTime(800,this.ctx.currentTime),this.filter.Q.setValueAtTime(4,this.ctx.currentTime),this.osc1=this.ctx.createOscillator(),this.osc1.type=`sine`,this.gain1=this.ctx.createGain(),this.gain1.gain.setValueAtTime(0,this.ctx.currentTime),this.osc1.connect(this.gain1),this.gain1.connect(this.filter),this.osc2=this.ctx.createOscillator(),this.osc2.type=`triangle`,this.gain2=this.ctx.createGain(),this.gain2.gain.setValueAtTime(0,this.ctx.currentTime),this.osc2.connect(this.gain2),this.gain2.connect(this.filter),this.filter.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.osc1.start(),this.osc2.start())}toggle(e){e?(this.init(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume(),this.isEnabled=!0):(this.isEnabled=!1,this.gain1&&this.gain2&&this.ctx&&(this.gain1.gain.setTargetAtTime(0,this.ctx.currentTime,.05),this.gain2.gain.setTargetAtTime(0,this.ctx.currentTime,.05)))}update(e,t){if(!this.isEnabled||!this.ctx)return;let n=Math.abs(e),r=Math.abs(t),a=120+Math.min(n*40,600),o=180+Math.min(r*55,900),s=this.ctx.currentTime;this.osc1.frequency.setTargetAtTime(a,s,.03),this.osc2.frequency.setTargetAtTime(o,s,.03);let c=Math.min(n*.03,.15),l=Math.min(r*.03,.15);this.gain1.gain.setTargetAtTime(c,s,.03),this.gain2.gain.setTargetAtTime(l,s,.03),this.filter.frequency.setTargetAtTime(300+(n+r)*80,s,.03)}};function fd(){let[e,t]=(0,y.useState)(2),[n,r]=(0,y.useState)({g:9.81,damping:0}),[a,o]=(0,y.useState)(()=>Wu(2)),[s,c]=(0,y.useState)(!1),[l,u]=(0,y.useState)(1),[d,f]=(0,y.useState)(500),[m,h]=(0,y.useState)(!0),[g,_]=(0,y.useState)(!0),[v,b]=(0,y.useState)(!1),[x,S]=(0,y.useState)(12),[C,w]=(0,y.useState)(1e-4),[T,E]=(0,y.useState)(!1),[D,O]=(0,y.useState)(`double_3d_swirl`),[k,A]=(0,y.useState)(!1),[j,M]=(0,y.useState)(``),[N,ee]=(0,y.useState)(null),[te,ne]=(0,y.useState)(!0),re=(0,y.useRef)(!1),P=(0,y.useRef)(null),[F,ie]=(0,y.useState)(null),[ae,oe]=(0,y.useState)(!1),[I,se]=(0,y.useState)(!1),[L,ce]=(0,y.useState)(!1),[le,ue]=(0,y.useState)(!1),[de,fe]=(0,y.useState)(!1),[pe,me]=(0,y.useState)(!1),[he,ge]=(0,y.useState)(null),[_e,ve]=(0,y.useState)([]),[ye,be]=(0,y.useState)([]),[xe,Se]=(0,y.useState)([]),[Ce,we]=(0,y.useState)([]),[Te,Ee]=(0,y.useState)({kinetic:0,potential:0,total:0}),R=(0,y.useRef)(a),De=(0,y.useRef)(n),Oe=(0,y.useRef)(!1),ke=(0,y.useRef)(!1),Ae=(0,y.useRef)(12),je=(0,y.useRef)(1e-4),z=(0,y.useRef)([]),Me=(0,y.useRef)(null),Ne=(0,y.useRef)({nodeIndex:null,targetPos:null});(0,y.useEffect)(()=>{R.current=a},[a]),(0,y.useEffect)(()=>{De.current=n},[n]),(0,y.useEffect)(()=>{Oe.current=s},[s]),(0,y.useEffect)(()=>{Ae.current=x},[x]),(0,y.useEffect)(()=>{je.current=C},[C]);let Pe=e=>{ge(e),setTimeout(()=>ge(null),2200)},B=(0,y.useCallback)(()=>{if(re.current)return;let e=id({nState:R.current,params:De.current,simSpeed:l,trailLength:d,trailFade:m,showGrid:g,isEnsemble:v,ensembleCount:x,ensembleDelta:C});M(e)},[l,d,m,g,v,x,C]);(0,y.useEffect)(()=>{B()},[]),(0,y.useEffect)(()=>{B()},[e,n,l,d,m,g,v,x,C,B]);let Fe=e=>{re.current=!0,M(e),ee(null),te&&(P.current&&clearTimeout(P.current),P.current=setTimeout(()=>{V(e,!1),re.current=!1},450))},V=(e=j,n=!0)=>{let a=cd(e,R.current,De.current);a.success&&a.nState?(ee(null),r(a.params),De.current=a.params,u(a.simSpeed),f(a.trailLength),h(a.trailFade),_(a.showGrid),b(a.isEnsemble),S(a.ensembleCount),w(a.ensembleDelta),t(a.nState.numLinks),o(a.nState),R.current=a.nState,a.isEnsemble&&Ye(a.nState),n&&Pe(`✓ Script Executed & Simulation Updated`)):(ee(a.error||`Unknown script execution error`),n&&Pe(`⚡ Error: ${a.error}`)),re.current=!1},H=e=>{ie(e),oe(!0),se(!1),Pe(`Inspecting Joint #${e}`)},Ie=()=>{ae?oe(!1):(ie(F||Math.min(2,e)),oe(!0),se(!1),A(!1))},Le=()=>{k?A(!1):(B(),A(!0),se(!1),oe(!1))},Re=e=>{t(e);let n=Wu(e);o(n),R.current=n,F&&F>e&&ie(e),ve([]),Se([]),we([]),ke.current&&Ye(n),Pe(`Configured ${e}-Pendulum Spatial Chain`)},ze=(e,t,n)=>{let r=R.current,a=[...r.masses],s=[...r.lengths],c=[...r.colors||Array(r.numLinks).fill(`#ffffff`)];t===`mass`?(a[e]=n,Pe(`Joint #${e+1} Mass: ${n.toFixed(2)} kg`)):t===`length`?(s[e]=n,Pe(`Link #${e+1} Length: ${n.toFixed(2)} m`)):t===`color`&&(c[e]=n);let l={...r,masses:a,lengths:s,colors:c};o(l),R.current=l,ke.current&&Ye(l)},Be=(e,t,n)=>{let r=R.current,a=Ju(r,e,t,n);o(a),R.current=a,ke.current&&Ye(a)},Ve=(e,t)=>{let n=R.current,r=Yu(n,e,t);o(r),R.current=r,ke.current&&Ye(r)},He=(e,t,n=!1,r=null)=>{if(n){if(Ne.current={nodeIndex:null,targetPos:null},r&&!Oe.current){let t=R.current,n=t.velocities.map((t,n)=>n===e-1?{x:r.x,y:r.y,z:r.z}:t),a={...t,velocities:n};o(a),R.current=a,Pe(`Imparted Velocity to Joint #${e}`)}B()}else{Ne.current={nodeIndex:e,targetPos:t};let n=R.current,r=Yu(n,e,t);o(r),R.current=r}},Ue=e=>{let t=R.current,n=(Math.random()-.5)*5,r=(Math.random()-.5)*3,a=(Math.random()-.5)*5,s=t.velocities.map((t,o)=>o===e-1?{x:t.x+n,y:t.y+r,z:t.z+a}:t),c={...t,velocities:s};o(c),R.current=c,Pe(`⚡ Kicked Joint #${e}`)},We=e=>{let t=R.current,n=t.velocities.map((t,n)=>n===e-1?{x:0,y:0,z:0}:t),r={...t,velocities:n};o(r),R.current=r,Pe(`🛑 Froze Joint #${e} Velocity`)},Ge=e=>{let t=R.current,n=[...t.pinned||Array(t.numLinks+1).fill(!1)];n[e]=!n[e];let r={...t,pinned:n};o(r),R.current=r,Pe(n[e]?`📌 Pinned Joint #${e}`:`Unpinned Joint #${e}`),B()},Ke=(e=null)=>{let n=R.current,r=Xu(n,e);t(r.numLinks),o(r),R.current=r,ie(e===null?r.numLinks:e+1),Pe(`Added Joint #${r.numLinks}`)},qe=e=>{let n=R.current;if(n.numLinks<=1)return;let r=Zu(n,e);t(r.numLinks),o(r),R.current=r,ie(Math.min(e,r.numLinks)),Pe(`Removed Joint #${e}`)},Je=()=>{let e=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,t=document.documentElement;if(pe){let e=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen;e&&document.fullscreenElement?e.call(document).then(()=>{me(!1),Pe(`Exited Fullscreen`)}).catch(()=>{me(!1)}):(me(!1),Pe(`Exited Fullscreen`))}else{let n=t.requestFullscreen||t.webkitRequestFullscreen||t.mozRequestFullScreen||t.msRequestFullscreen;!e&&n?n.call(t).then(()=>{me(!0),Pe(`Entered Fullscreen`)}).catch(()=>{me(!0),window.scrollTo(0,1),Pe(`Fullscreen Mode (iOS Edge-to-Edge)`)}):(me(!0),window.scrollTo(0,1),Pe(`Fullscreen Mode (iOS Edge-to-Edge)`))}};(0,y.useEffect)(()=>{let e=()=>{me(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),document.addEventListener(`webkitfullscreenchange`,e),()=>{document.removeEventListener(`fullscreenchange`,e),document.removeEventListener(`webkitfullscreenchange`,e)}},[]);let Ye=(0,y.useCallback)((e=R.current)=>{let t=[],n=Ae.current,r=je.current,a=e.numLinks;for(let o=0;o<n;o++){let s=(o-Math.floor(n/2))*r,c=e.positions.map((e,t)=>t===0?{...e}:{x:e.x+t/a*s,y:e.y+s*.5*(t/a),z:e.z+s*1.5*(t/a)}),l=e.velocities.map((e,t)=>({x:e.x+s*.1,y:e.y,z:e.z+s*.2}));t.push({numLinks:a,lengths:[...e.lengths],masses:[...e.masses],colors:[...e.colors||Array(a).fill(`#ffffff`)],pinned:[...e.pinned||Array(a+1).fill(!1)],positions:c,velocities:l})}z.current=t,be(t.map(()=>[]))},[]);(0,y.useEffect)(()=>{ke.current=v,v?Ye():(z.current=[],be([]))},[v,x,C,Ye]);let Xe=()=>{let e=R.current,t=(Math.random()-.5)*4,n=(Math.random()-.5)*3,r=e.velocities.map((e,r)=>({x:e.x+n*(r+1)*.5,y:e.y+(Math.random()-.5)*2,z:e.z+t*(r+1)*.6})),a={...e,velocities:r};o(a),R.current=a,ke.current&&Ye(a),Pe(`Applied 3D Transverse Impulse`)},Ze=e=>{O(e.id),t(e.numLinks),r({...e.params});let n=e.initialConfig(e.numLinks);o(n),R.current=n,ie(e.numLinks),ve([]),Se([]),we([]),ke.current&&Ye(n),Pe(`Preset: ${e.name}`)},Qe=()=>{let t=Wu(e);o(t),R.current=t,ve([]),Se([]),we([]),ke.current&&Ye(t),Pe(`Simulation Reset`)},$e=()=>{ve([]),be(z.current.map(()=>[])),Se([]),Pe(`3D Trails Cleared`)};return(0,y.useEffect)(()=>(dd.toggle(T),()=>dd.toggle(!1)),[T]),(0,y.useEffect)(()=>{let e=e=>{e.target.tagName!==`INPUT`&&e.target.tagName!==`TEXTAREA`&&e.target.tagName!==`SELECT`&&(e.code===`Space`?(e.preventDefault(),c(e=>!e)):e.key===`r`||e.key===`R`?Qe():e.key===`c`||e.key===`C`?$e():e.key===`f`||e.key===`F`?Je():e.key===`k`||e.key===`K`?Xe():e.key===`e`||e.key===`E`?Ie():(e.key===`p`||e.key===`P`)&&Le())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[e,pe,ae,k]),(0,y.useEffect)(()=>{let e,t=performance.now(),n=0,r=a=>{let s=Math.min((a-t)/1e3,.05);if(t=a,!Oe.current){let e=De.current,t=s*l/6,r=R.current,a=Ne.current;for(let n=0;n<6;n++)r=Gu(r,e,t,a.nodeIndex,a.targetPos);if(R.current=r,o(r),T&&r.velocities.length>0){let e=r.velocities[0],t=r.velocities[r.velocities.length-1],n=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z),a=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);dd.update(n,a)}let c=r.positions[r.numLinks];if(c&&ve(e=>{let t=[...e,{x:c.x,y:c.y,z:c.z}];return t.length>d?t.slice(t.length-d):t}),ke.current&&z.current.length>0){let n=z.current.map(n=>{let r=n;for(let n=0;n<6;n++)r=Gu(r,e,t);return r});z.current=n,be(e=>n.map((t,n)=>{let r=t.positions[t.numLinks];if(!r)return[];let a=[...e[n]||[],{x:r.x,y:r.y,z:r.z}];return a.length>Math.min(d,300)?a.slice(a.length-Math.min(d,300)):a}))}if(n++,n%2==0){let t=Ku(r,e);if(Ee(t),r.positions.length>1&&r.velocities.length>0){let e=r.positions[1],t=r.velocities[0],n=Math.atan2(e.x,-e.y),a=(t.x*-e.y-t.y*e.x)/(e.x*e.x+e.y*e.y||1);Se(e=>{let t=[...e,{theta1:n,omega1:a}];return t.length>350?t.slice(t.length-350):t})}we(e=>{let n=[...e,t];return n.length>150?n.slice(n.length-150):n})}}e=requestAnimationFrame(r)};return e=requestAnimationFrame(r),()=>cancelAnimationFrame(e)},[l,d,T]),(0,$.jsxs)(`div`,{className:`w-screen h-screen h-[100dvh] overflow-hidden bg-black text-white relative flex select-none ${pe?`fixed inset-0 z-[9999]`:``}`,children:[he&&(0,$.jsxs)(`div`,{className:`fixed bottom-6 right-6 z-50 flex items-center gap-2 mono-glass text-white px-4 py-2 rounded-xl shadow-2xl animate-fade-in border border-zinc-700`,children:[(0,$.jsx)(lu,{size:14,className:`text-white`}),(0,$.jsx)(`span`,{className:`text-xs font-mono font-medium`,children:he})]}),(0,$.jsx)(Vu,{isPaused:s,onTogglePlay:()=>c(e=>!e),onStepForward:()=>{let e=.02*l/4,t=R.current,n=De.current;for(let r=0;r<4;r++)t=Gu(t,n,e);o(t),R.current=t},onReset:Qe,onClearTrail:$e,onApply3DKick:Xe,isFullscreen:pe,onToggleFullscreen:Je,drawerOpen:I,onToggleDrawer:()=>{se(e=>!e),I||(oe(!1),A(!1))},nodeMenuOpen:ae,onToggleNodeMenu:Ie,selectedNodeIndex:F,scriptEditorOpen:k,onToggleScriptEditor:Le,diagnosticsOpen:L,onToggleDiagnostics:()=>ce(e=>!e),presetsOpen:le,onTogglePresets:()=>ue(e=>!e),isEnsemble:v,onToggleEnsemble:()=>b(e=>!e),soundEnabled:T,onToggleSound:()=>E(e=>!e),showGrid:g,onToggleGrid:()=>_(e=>!e),onResetCamera:()=>Me.current&&Me.current(),onOpenTheory:()=>fe(!0)}),(0,$.jsx)(`div`,{className:`absolute inset-0 w-full h-full overflow-hidden`,children:(0,$.jsx)(Xl,{nState:a,ensembleStates:z.current,params:n,trailHistory:_e,ensembleTrails:ye,trailLength:d,trailFade:m,showGrid:g,isEnsemble:v,selectedNodeIndex:F,onSelectNodeIndex:H,onJointDrag:He,isPaused:s,onResetCameraRef:Me})}),(0,$.jsx)(ud,{isOpen:k,onClose:()=>A(!1),scriptCode:j,onChangeCode:Fe,onApplyScript:e=>V(e,!0),onRegenerateFromState:B,executionError:N,autoApply:te,setAutoApply:ne,isPaused:s,onTogglePlay:()=>c(e=>!e)}),(0,$.jsx)(nd,{isOpen:ae,onClose:()=>oe(!1),selectedNodeIndex:F,onSelectNodeIndex:ie,nState:a,onUpdateProperty:ze,onSetJointAngles:Be,onSetJointPosition:Ve,onKickJoint:Ue,onFreezeJoint:We,onTogglePinJoint:Ge,onAddLink:Ke,onRemoveLink:qe,isPaused:s,onTogglePlay:()=>c(e=>!e)}),(0,$.jsx)(Hu,{isOpen:I,onClose:()=>se(!1),numLinks:e,setNumLinks:Re,nState:a,selectedNodeIndex:F,onSelectNodeIndex:H,onAddLink:Ke,params:n,setParams:r,simSpeed:l,setSimSpeed:u,trailLength:d,setTrailLength:f,trailFade:m,setTrailFade:h,isEnsemble:v,setIsEnsemble:b,ensembleCount:x,setEnsembleCount:S,ensembleDelta:C,setEnsembleDelta:w,onReset:Qe,onApply3DKick:Xe}),(0,$.jsx)(Uu,{isOpen:L,onClose:()=>ce(!1),energyHistory:Ce,currentEnergy:Te,phaseHistory:xe}),(0,$.jsx)($u,{isOpen:le,onClose:()=>ue(!1),activePresetId:D,onSelectPreset:Ze}),(0,$.jsx)(ed,{isOpen:de,onClose:()=>fe(!1)})]})}function pd(){let e=document.getElementById(`root`);e&&(0,b.createRoot)(e).render((0,$.jsx)(y.StrictMode,{children:(0,$.jsx)(fd,{})}))}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,pd):pd();