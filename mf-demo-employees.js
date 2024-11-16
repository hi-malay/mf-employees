System.register(["react","react-dom"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,n){e.exports=t},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return x}));var r=n(5),o=n(0),i=n.n(o),a=n(8),c=n.n(a),u=n(3),s=n(4),l=n(2),f=n(9),p=n.n(f),d=(n(11),n(6)),m=(n(15),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:{});function h(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var y=i.a.createContext||function(e,t){var n,o,a="__create-react-context-"+function(){var e="__global_unique_id__";return m[e]=(m[e]||0)+1}()+"__",u=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).emitter=h(t.props.value),t}Object(r.a)(n,e);var o=n.prototype;return o.getChildContext=function(){var e;return(e={})[a]=this.emitter,e},o.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof t?t(r,o):1073741823,0!==(n|=0)&&this.emitter.set(e.value,n))}var i,a},o.render=function(){return this.props.children},n}(i.a.Component);u.childContextTypes=((n={})[a]=c.a.object.isRequired,n);var s=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).observedBits=void 0,e.state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}Object(r.a)(n,t);var o=n.prototype;return o.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},o.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},o.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},o.getValue=function(){return this.context[a]?this.context[a].get():e},o.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(i.a.Component);return s.contextTypes=((o={})[a]=c.a.object,o),{Provider:u,Consumer:s}},v=function(e){var t=y();return t.displayName=e,t},b=v("Router-History"),g=v("Router"),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._pendingLocation=e}))),n}Object(r.a)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(t){e._isMounted&&e.setState({location:t})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return i.a.createElement(g.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},t}(i.a.Component);i.a.Component;i.a.Component;var O={},E=0;function x(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=O[n]||(O[n]={});if(r[e])return r[e];var o=[],i={regexp:p()(e,o,t),keys:o};return E<1e4&&(r[e]=i,E++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(e);if(!u)return null;var l=u[0],f=u.slice(1),d=e===l;return i&&!d?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:d,params:a.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}i.a.Component;function P(e){return"/"===e.charAt(0)?e:"/"+e}function j(e,t){if(!e)return t;var n=P(e);return 0!==t.pathname.indexOf(n)?t:Object(l.a)({},t,{pathname:t.pathname.substr(n.length)})}function C(e){return"string"==typeof e?e:Object(u.e)(e)}function S(e){return function(){Object(s.a)(!1)}}function R(){}i.a.Component;i.a.Component;i.a.useContext}).call(this,n(18))},function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return y})),n.d(t,"e",(function(){return m}));var r=n(2);function o(e){return"/"===e.charAt(0)}function i(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var a=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],a=t&&t.split("/")||[],c=e&&o(e),u=t&&o(t),s=c||u;if(e&&o(e)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var l=a[a.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=a.length;p>=0;p--){var d=a[p];"."===d?i(a,p):".."===d?(i(a,p),f++):f&&(i(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var m=a.join("/");return n&&"/"!==m.substr(-1)&&(m+="/"),m};function c(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}var u=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"==typeof t||"object"==typeof n){var r=c(t),o=c(n);return r!==t||o!==n?e(r,o):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1},s=n(4);function l(e){return"/"===e.charAt(0)?e:"/"+e}function f(e){return"/"===e.charAt(0)?e.substr(1):e}function p(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function d(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function m(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function h(e,t,n,o){var i;"string"==typeof e?(i=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(i=Object(r.a)({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=a(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function y(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&u(e.state,t.state)}function v(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var b=!("undefined"==typeof window||!window.document||!window.document.createElement);function g(e,t){t(window.confirm(e))}function w(){try{return window.history.state||{}}catch(e){return{}}}function O(e){void 0===e&&(e={}),b||Object(s.a)(!1);var t,n=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,c=a.forceRefresh,u=void 0!==c&&c,f=a.getUserConfirmation,y=void 0===f?g:f,O=a.keyLength,E=void 0===O?6:O,x=e.basename?d(l(e.basename)):"";function P(e){var t=e||{},n=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return x&&(i=p(i,x)),h(i,r,n)}function j(){return Math.random().toString(36).substr(2,E)}var C=v();function S(e){Object(r.a)(B,e),B.length=n.length,C.notifyListeners(B.location,B.action)}function R(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||A(P(e.state))}function T(){A(P(w()))}var k=!1;function A(e){if(k)k=!1,S();else{C.confirmTransitionTo(e,"POP",y,(function(t){t?S({action:"POP",location:e}):function(e){var t=B.location,n=L.indexOf(t.key);-1===n&&(n=0);var r=L.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(k=!0,D(o))}(e)}))}}var _=P(w()),L=[_.key];function M(e){return x+m(e)}function D(e){n.go(e)}var N=0;function $(e){1===(N+=e)&&1===e?(window.addEventListener("popstate",R),i&&window.addEventListener("hashchange",T)):0===N&&(window.removeEventListener("popstate",R),i&&window.removeEventListener("hashchange",T))}var U=!1;var B={length:n.length,action:"POP",location:_,createHref:M,push:function(e,t){var r=h(e,t,j(),B.location);C.confirmTransitionTo(r,"PUSH",y,(function(e){if(e){var t=M(r),i=r.key,a=r.state;if(o)if(n.pushState({key:i,state:a},null,t),u)window.location.href=t;else{var c=L.indexOf(B.location.key),s=L.slice(0,c+1);s.push(r.key),L=s,S({action:"PUSH",location:r})}else window.location.href=t}}))},replace:function(e,t){var r=h(e,t,j(),B.location);C.confirmTransitionTo(r,"REPLACE",y,(function(e){if(e){var t=M(r),i=r.key,a=r.state;if(o)if(n.replaceState({key:i,state:a},null,t),u)window.location.replace(t);else{var c=L.indexOf(B.location.key);-1!==c&&(L[c]=r.key),S({action:"REPLACE",location:r})}else window.location.replace(t)}}))},go:D,goBack:function(){D(-1)},goForward:function(){D(1)},block:function(e){void 0===e&&(e=!1);var t=C.setPrompt(e);return U||($(1),U=!0),function(){return U&&(U=!1,$(-1)),t()}},listen:function(e){var t=C.appendListener(e);return $(1),function(){$(-1),t()}}};return B}var E={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+f(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:f,decodePath:l},slash:{encodePath:l,decodePath:l}};function x(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function P(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function j(e){window.location.replace(x(window.location.href)+"#"+e)}function C(e){void 0===e&&(e={}),b||Object(s.a)(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),o=n.getUserConfirmation,i=void 0===o?g:o,a=n.hashType,c=void 0===a?"slash":a,u=e.basename?d(l(e.basename)):"",f=E[c],y=f.encodePath,w=f.decodePath;function O(){var e=w(P());return u&&(e=p(e,u)),h(e)}var C=v();function S(e){Object(r.a)(B,e),B.length=t.length,C.notifyListeners(B.location,B.action)}var R=!1,T=null;function k(){var e,t,n=P(),r=y(n);if(n!==r)j(r);else{var o=O(),a=B.location;if(!R&&(t=o,(e=a).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(T===m(o))return;T=null,function(e){if(R)R=!1,S();else{C.confirmTransitionTo(e,"POP",i,(function(t){t?S({action:"POP",location:e}):function(e){var t=B.location,n=M.lastIndexOf(m(t));-1===n&&(n=0);var r=M.lastIndexOf(m(e));-1===r&&(r=0);var o=n-r;o&&(R=!0,D(o))}(e)}))}}(o)}}var A=P(),_=y(A);A!==_&&j(_);var L=O(),M=[m(L)];function D(e){t.go(e)}var N=0;function $(e){1===(N+=e)&&1===e?window.addEventListener("hashchange",k):0===N&&window.removeEventListener("hashchange",k)}var U=!1;var B={length:t.length,action:"POP",location:L,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=x(window.location.href)),n+"#"+y(u+m(e))},push:function(e,t){var n=h(e,void 0,void 0,B.location);C.confirmTransitionTo(n,"PUSH",i,(function(e){if(e){var t=m(n),r=y(u+t);if(P()!==r){T=t,function(e){window.location.hash=e}(r);var o=M.lastIndexOf(m(B.location)),i=M.slice(0,o+1);i.push(t),M=i,S({action:"PUSH",location:n})}else S()}}))},replace:function(e,t){var n=h(e,void 0,void 0,B.location);C.confirmTransitionTo(n,"REPLACE",i,(function(e){if(e){var t=m(n),r=y(u+t);P()!==r&&(T=t,j(r));var o=M.indexOf(m(B.location));-1!==o&&(M[o]=t),S({action:"REPLACE",location:n})}}))},go:D,goBack:function(){D(-1)},goForward:function(){D(1)},block:function(e){void 0===e&&(e=!1);var t=C.setPrompt(e);return U||($(1),U=!0),function(){return U&&(U=!1,$(-1)),t()}},listen:function(e){var t=C.appendListener(e);return $(1),function(){$(-1),t()}}};return B}function S(e,t,n){return Math.min(Math.max(e,t),n)}function R(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,o=t.initialEntries,i=void 0===o?["/"]:o,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,s=void 0===u?6:u,l=v();function f(e){Object(r.a)(w,e),w.length=w.entries.length,l.notifyListeners(w.location,w.action)}function p(){return Math.random().toString(36).substr(2,s)}var d=S(c,0,i.length-1),y=i.map((function(e){return h(e,void 0,"string"==typeof e?p():e.key||p())})),b=m;function g(e){var t=S(w.index+e,0,w.entries.length-1),r=w.entries[t];l.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var w={length:y.length,action:"POP",location:y[d],index:d,entries:y,createHref:b,push:function(e,t){var r=h(e,t,p(),w.location);l.confirmTransitionTo(r,"PUSH",n,(function(e){if(e){var t=w.index+1,n=w.entries.slice(0);n.length>t?n.splice(t,n.length-t,r):n.push(r),f({action:"PUSH",location:r,index:t,entries:n})}}))},replace:function(e,t){var r=h(e,t,p(),w.location);l.confirmTransitionTo(r,"REPLACE",n,(function(e){e&&(w.entries[w.index]=r,f({action:"REPLACE",location:r}))}))},go:g,goBack:function(){g(-1)},goForward:function(){g(1)},canGo:function(e){var t=w.index+e;return t>=0&&t<w.entries.length},block:function(e){return void 0===e&&(e=!1),l.setPrompt(e)},listen:function(e){return l.appendListener(e)}};return w}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r="Invariant failed";function o(e,t){if(!e)throw new Error(r)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(7);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object(r.a)(e,t)}},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(21)()},function(e,t,n){var r=n(19);e.exports=m,e.exports.parse=i,e.exports.compile=function(e,t){return u(i(e,t),t)},e.exports.tokensToFunction=u,e.exports.tokensToRegExp=d;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,c=0,u="",s=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],d=n.index;if(u+=e.slice(c,d),c=d+f.length,p)u+=p[1];else{var m=e[c],h=n[2],y=n[3],v=n[4],b=n[5],g=n[6],w=n[7];u&&(r.push(u),u="");var O=null!=h&&null!=m&&m!==h,E="+"===g||"*"===g,x="?"===g||"*"===g,P=h||s,j=v||b,C=h||("string"==typeof r[r.length-1]?r[r.length-1]:"");r.push({name:y||i++,prefix:h||"",delimiter:P,optional:x,repeat:E,partial:O,asterisk:!!w,pattern:j?l(j):w?".*":a(P,C)})}}return c<e.length&&(u+=e.substr(c)),u&&r.push(u),r}function a(e,t){return!t||t.indexOf(e)>-1?"[^"+s(e)+"]+?":s(t)+"|(?:(?!"+s(t)+")[^"+s(e)+"])+?"}function c(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function u(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",p(t)));return function(t,o){for(var i="",a=t||{},u=(o||{}).pretty?c:encodeURIComponent,s=0;s<e.length;s++){var l=e[s];if("string"!=typeof l){var f,p=a[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=u(p[d]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function p(e){return e&&e.sensitive?"":"i"}function d(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<e.length;c++){var u=e[c];if("string"==typeof u)a+=s(u);else{var l=s(u.prefix),d="(?:"+u.pattern+")";t.push(u),u.repeat&&(d+="(?:"+l+d+")*"),a+=d=u.optional?u.partial?l+"("+d+")?":"(?:"+l+"("+d+"))?":l+"("+d+")"}}var m=s(n.delimiter||"/"),h=a.slice(-m.length)===m;return o||(a=(h?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&h?"":"(?="+m+"|$)",f(new RegExp("^"+a,p(n)),t)}function m(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):function(e,t,n){return d(i(e,n),t,n)}(e,t,n)}},,function(e,t,n){"use strict";e.exports=n(20)},function(e,t,n){function r(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,i=r.length;o!==t&&i>=0;){"/"===r[--i]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var a=r.slice(0,i+1);return n.protocol+"//"+n.host+a}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||isNaN(t)||!o(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");var i;try{if(!(i=window.System.resolve(e)))throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=r(i,t)},t.resolveDirectory=r;var o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},function(e,t){e.exports=n},function(e,t,n){!function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.SingleSpaContext=null;var o={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function i(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function a(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var i=l(e,t),a=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(o,t);s({elementToRender:i,domElement:a,whenFinished:function(){n(this)},opts:e}),e.domElements[t.name]=a}))}function c(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function u(e,t){return new Promise((function(n,r){s({elementToRender:l(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function s(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(r).render(n,o):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(r).render(n,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,r,o):t.ReactDOM.render(n,r,o)}function l(t,n){var r=t.React.createElement(t.rootComponent,n),o=e.SingleSpaContext?t.React.createElement(e.SingleSpaContext.Provider,{value:n},r):r;return t.errorBoundary&&(t.errorBoundaryClass=t.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(t),o=t.React.createElement(t.errorBoundaryClass,n,o)),o}e.default=function(s){if("object"!==t(s))throw new Error("single-spa-react requires a configuration object");var l=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{},s);if(!l.React)throw new Error("single-spa-react must be passed opts.React");if(!l.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!l.rootComponent&&!l.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(l.errorBoundary&&"function"!=typeof l.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!e.SingleSpaContext&&l.React.createContext&&(e.SingleSpaContext=l.React.createContext());var f={bootstrap:i.bind(null,l),mount:a.bind(null,l),unmount:c.bind(null,l)};return l.parcelCanUpdate&&(f.update=u.bind(null,l)),f},Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){"use strict";var r=n(11),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?a:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=u(t),h=u(n),y=0;y<a.length;++y){var v=a[y];if(!(i[v]||r&&r[v]||h&&h[v]||c&&c[v])){var b=p(n,v);try{s(t,v,b)}catch(e){}}}}return t}},function(e,t,n){n(17),e.exports=n(23)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(12);const r=e.replace(/\?/g,"").split("&").reduce((function(e,t){const n=t.split("=");return e[n[0]]=n[1],e}),{});Object(t.setPublicPath)(decodeURIComponent(r.systemjsModuleName),Number(r.rootDirectoryLevel))}.call(this,"?systemjsModuleName=%40mf-demo%2Femployees&rootDirectoryLevel=1")},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case a:case u:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case v:case y:case s:return e;default:return t}}case i:return t}}}function x(e){return E(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=y,t.Portal=i,t.Profiler=u,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return x(e)||E(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return E(e)===l},t.isContextProvider=function(e){return E(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===v},t.isMemo=function(e){return E(e)===y},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===u},t.isStrictMode=function(e){return E(e)===c},t.isSuspense=function(e){return E(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===u||e===c||e===m||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===O||e.$$typeof===b)},t.typeOf=E},function(e,t,n){"use strict";var r=n(22);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return L})),n.d(t,"mount",(function(){return M})),n.d(t,"unmount",(function(){return D}));var r=n(0),o=n.n(r),i=n(13),a=n.n(i),c=n(14),u=n.n(c);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function p(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=n(7);var h=n(1),y=n(5),v=n(3),b=n(2),g=n(6),w=n(4),O=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=Object(v.a)(t.props),t}return Object(y.a)(t,e),t.prototype.render=function(){return o.a.createElement(h.a,{history:this.history,children:this.props.children})},t}(o.a.Component);o.a.Component;var E=function(e,t){return"function"==typeof e?e(t):e},x=function(e,t){return"string"==typeof e?Object(v.c)(e,null,null,t):e},P=function(e){return e},j=o.a.forwardRef;void 0===j&&(j=P);var C=j((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,a=Object(g.a)(e,["innerRef","navigate","onClick"]),c=a.target,u=Object(b.a)({},a,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=P!==j&&t||n,o.a.createElement("a",u)}));var S=j((function(e,t){var n=e.component,r=void 0===n?C:n,i=e.replace,a=e.to,c=e.innerRef,u=Object(g.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(h.b.Consumer,null,(function(e){e||Object(w.a)(!1);var n=e.history,s=x(E(a,e.location),e.location),l=s?n.createHref(s):"",f=Object(b.a)({},u,{href:l,navigate:function(){var t=E(a,e.location),r=Object(v.e)(e.location)===Object(v.e)(x(t));(i||r?n.replace:n.push)(t)}});return P!==j?f.ref=t||c:f.innerRef=c,o.a.createElement(r,f)}))})),R=function(e){return e},T=o.a.forwardRef;void 0===T&&(T=R);T((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,a=void 0===i?"active":i,c=e.activeStyle,u=e.className,s=e.exact,l=e.isActive,f=e.location,p=e.sensitive,d=e.strict,m=e.style,y=e.to,v=e.innerRef,O=Object(g.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(h.b.Consumer,null,(function(e){e||Object(w.a)(!1);var n=f||e.location,i=x(E(y,n),n),g=i.pathname,P=g&&g.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=P?Object(h.c)(n.pathname,{path:P,exact:s,sensitive:p,strict:d}):null,C=!!(l?l(j,n):j),k="function"==typeof u?u(C):u,A="function"==typeof m?m(C):m;C&&(k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(k,a),A=Object(b.a)({},A,c));var _=Object(b.a)({"aria-current":C&&r||null,className:k,style:A,to:i},O);return R!==T?_.ref=t||v:_.innerRef=v,o.a.createElement(S,_)}))}));function k(e,t,n){return t=d(t),p(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}var A=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=k(this,t,[e])).state={employees:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(m.a)(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;fetch("https://reqres.in/api/users").then((function(t){t.json().then((function(t){return e.setState({employees:t.data})}))}))}},{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){var e=this.state.employees;return e.length?o.a.createElement(O,{basename:"/"},o.a.createElement("table",{className:"table table-striped table-bordered table-sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"ID"),o.a.createElement("th",{scope:"col"},"First Name"),o.a.createElement("th",{scope:"col"},"Last Name"),o.a.createElement("th",{scope:"col"},"Email"))),o.a.createElement("tbody",null,e.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("th",null,o.a.createElement(S,{to:"/employees/".concat(e.id)},e.id)),o.a.createElement("td",null,e.first_name),o.a.createElement("td",null,e.last_name),o.a.createElement("td",null,e.email))})))),o.a.createElement("em",null,this.props.name," using React")):o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))}}])&&f(n.prototype,r),i&&f(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,i}(o.a.Component);!function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||!Number.isInteger(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let r;try{if(r=window.System.resolve(e),!r)throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=function(e,t){const n=new URL(e),r=new URL(e).pathname;let o=0,i=r.length;for(;o!==t&&i>=0;){"/"===r[--i]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+fullUrl);return n.pathname=n.pathname.slice(0,i+1),n.href}(r,t)}("@mf-demo/employees");var _=u()({React:o.a,ReactDOM:a.a,rootComponent:A,domElementGetter:function(){var e=document.getElementById("mf-content");e||((e=document.createElement("div")).id="mf-demo-employees",document.body.appendChild(e));return e}}),L=_.bootstrap,M=_.mount,D=_.unmount}]))}}}));
//# sourceMappingURL=mf-demo-employees.js.map