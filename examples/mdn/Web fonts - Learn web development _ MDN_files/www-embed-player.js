(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function w(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function xa(){this.u=!1;this.m=null;this.i=void 0;this.h=1;this.B=this.l=0;this.I=this.j=null}
function ya(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,ld:!0};a.h=a.l||a.B}
xa.prototype.return=function(a){this.j={return:a};this.h=this.B};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.A=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.B=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Da(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.ld?a.h=a.l||a.B:void 0!=b.A&&a.B<b.A?(a.h=b.A,a.j=null):a.h=a.B:a.h=0}
function Ea(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.m;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ia(a)}a.h.m=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ld)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){ya(a.h);a.h.m?b=Ga(a,a.h.m.next,b,a.h.D):(a.h.D(b),b=Ia(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Ga(a,a.h.m["throw"],b,a.h.D):(za(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ja(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.B()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.B=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.da),reject:g(this.B)}};
b.prototype.da=function(g){if(g===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ha(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.m(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.B(k);return}"function"==typeof h?this.ta(h,g):this.m(g)};
b.prototype.B=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.fa();this.I()};
b.prototype.fa=function(){var g=this;e(function(){if(g.U()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ha=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ta=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(x){try{l(r(x))}catch(z){n(z)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(z){r[x]=z;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||wa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a){var b=E("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(void 0===eb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return-1===a.toString().indexOf("`")}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.te=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);void 0!==b&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Vb=Oa(610401301),Wb=Oa(188588736);function Xb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Yb,Zb=C.navigator;Yb=Zb?Zb.userAgentData||null:null;function $b(a){return Vb?Yb?Yb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Xb().indexOf(a)}
;function ac(){return Vb?!!Yb&&0<Yb.brands.length:!1}
function bc(){return ac()?!1:F("Opera")}
function cc(){return ac()?!1:F("Trident")||F("MSIE")}
function dc(){return F("Firefox")||F("FxiOS")}
function ec(){return ac()?$b("Chromium"):(F("Chrome")||F("CriOS"))&&!(ac()?0:F("Edge"))||F("Silk")}
;function fc(a){this.h=a}
fc.prototype.toString=function(){return this.h.toString()};function hc(a){var b="true".toString(),c=[new Ab];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function ic(a,b){throw Error(void 0===b?"unexpected value "+a+"!":b);}
;var jc="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function kc(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(-1===jc.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function lc(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function mc(a){this.h=a}
mc.prototype.toString=function(){return this.h.toString()};function nc(a){var b=lc(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function oc(a,b){if(b instanceof mc)b=b.h;else throw Error("");a.textContent=b;nc(a)}
function pc(a,b){a.src=kb(b);nc(a)}
;function qc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function rc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=sc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,tc[c])c=tc[c];else{c=String(c);if(!tc[c]){var f=/function\s+([^\(]+)/m.exec(c);tc[c]=f?f[1]:"[Anonymous]"}c=tc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function sc(a,b){b||(b={});b[uc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[uc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=sc(a,b));return c}
function uc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var tc={};function vc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xc(a){return a?decodeURI(a):a}
function yc(a,b){return b.match(wc)[a]||null}
function zc(a){return xc(yc(3,a))}
function Ac(a){var b=a.match(wc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Bc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function Cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Dc(a){var b=[],c;for(c in a)Cc(c,a[c],b);return b.join("&")}
function Ec(a,b){b=Dc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Fc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Gc=/#|$/,Hc=/[?&]($|#)/;function Ic(a,b){for(var c=a.search(Gc),d=0,e,f=[];0<=(e=Fc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Hc,"$1")}
;function Jc(a){this.h=a}
;function Kc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=Kc.prototype;m.Od=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new Jc(a)):this.Ad(a,b)};
m.Ad=function(a){var b=this.Tc(B.apply(1,arguments));this.h.set(b,[new Jc(a)])};
m.xc=function(){var a=this.Tc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.he=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Tc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Lc(a,b){Kc.call(this,a,3,b)}
w(Lc,Kc);Lc.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.h);this.Ad(c+a,b)};function Mc(a,b){Kc.call(this,a,2,b)}
w(Mc,Kc);Mc.prototype.record=function(a){this.Od(a,B.apply(1,arguments))};function Nc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Oc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Oc.apply(null,d):Nc(d)}}
;function H(){this.T=this.T;this.B=this.B}
H.prototype.T=!1;H.prototype.dispose=function(){this.T||(this.T=!0,this.S())};
function Pc(a,b){a.addOnDisposeCallback(Ya(Nc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.T?void 0!==b?a.call(b):a():(this.B||(this.B=[]),this.B.push(void 0!==b?Xa(a,b):a))};
H.prototype.S=function(){if(this.B)for(;this.B.length;)this.B.shift()()};function Qc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Qc.prototype.stopPropagation=function(){this.j=!0};
Qc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Rc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Sc(){return Vb?!!Yb&&!!Yb.platform:!1}
function Tc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Uc(a){Uc[" "](a);return a}
Uc[" "]=function(){};var Vc=bc(),Wc=cc(),Xc=F("Edge"),Yc=F("Gecko")&&!(-1!=Xb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Zc=-1!=Xb().toLowerCase().indexOf("webkit")&&!F("Edge");Zc&&F("Mobile");Sc()||F("Macintosh");Sc()||F("Windows");(Sc()?"Linux"===Yb.platform:F("Linux"))||Sc()||F("CrOS");var $c=Sc()?"Android"===Yb.platform:F("Android");Tc();F("iPad");F("iPod");Tc()||F("iPad")||F("iPod");Xb().toLowerCase().indexOf("kaios");
function ad(){var a=C.document;return a?a.documentMode:void 0}
var bd;a:{var cd="",dd=function(){var a=Xb();if(Yc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Xc)return/Edge\/([\d\.]+)/.exec(a);if(Wc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zc)return/WebKit\/(\S+)/.exec(a);if(Vc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
dd&&(cd=dd?dd[1]:"");if(Wc){var ed=ad();if(null!=ed&&ed>parseFloat(cd)){bd=String(ed);break a}}bd=cd}var fd=bd,gd;if(C.document&&Wc){var hd=ad();gd=hd?hd:parseInt(fd,10)||void 0}else gd=void 0;var id=gd;function jd(a,b){Qc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(jd,Qc);var kd={2:"touch",3:"pen",4:"mouse"};
jd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Yc){a:{try{Uc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:kd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&jd.Ba.preventDefault.call(this)};
jd.prototype.stopPropagation=function(){jd.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
jd.prototype.preventDefault=function(){jd.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ld="closure_listenable_"+(1E6*Math.random()|0);var md=0;function nd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++md;this.Lb=this.Vb=!1}
function od(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function pd(a){this.src=a;this.listeners={};this.h=0}
pd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=qd(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new nd(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
pd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=qd(e,b,c,d);return-1<b?(od(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function rd(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(od(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function qd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var sd="closure_lm_"+(1E6*Math.random()|0),td={},ud=0;function vd(a,b,c,d,e){if(d&&d.once)wd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);else c=xd(c),a&&a[ld]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):yd(a,b,c,!1,d,e)}
function yd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=zd(a);h||(a[sd]=h=new pd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ad();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Rc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Bd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ud++}}
function Ad(){function a(c){return b.call(a.src,a.listener,c)}
var b=Cd;return a}
function wd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)wd(a,b[f],c,d,e);else c=xd(c),a&&a[ld]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):yd(a,b,c,!0,d,e)}
function Dd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Dd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=xd(c),a&&a[ld])?a.h.remove(String(b),c,d,e):a&&(a=zd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=qd(b,c,d,e)),(c=-1<a?b[a]:null)&&Ed(c))}
function Ed(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[ld])rd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Bd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ud--;(c=zd(b))?(rd(c,a),0==c.h&&(c.src=null,b[sd]=null)):od(a)}}}
function Bd(a){return a in td?td[a]:td[a]="on"+a}
function Cd(a,b){if(a.Lb)a=!0;else{b=new jd(b,this);var c=a.listener,d=a.dc||a.src;a.Vb&&Ed(a);a=c.call(d,b)}return a}
function zd(a){a=a[sd];return a instanceof pd?a:null}
var Fd="__closure_events_fn_"+(1E9*Math.random()>>>0);function xd(a){if("function"===typeof a)return a;a[Fd]||(a[Fd]=function(b){return a.handleEvent(b)});
return a[Fd]}
;function Gd(){H.call(this);this.h=new pd(this);this.Za=this;this.fa=null}
$a(Gd,H);Gd.prototype[ld]=!0;m=Gd.prototype;m.addEventListener=function(a,b,c,d){vd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Dd(this,a,b,c,d)};
function Hd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new Qc(b,a):b instanceof Qc?b.target=b.target||a:(e=b,b=new Qc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Id(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Id(g,c,!0,b)&&e,b.j||(e=Id(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Id(g,c,!1,b)&&e}
m.S=function(){Gd.Ba.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,od(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Id(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Vb&&rd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Jd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Jd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Kd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Ld(){}
function Md(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Nd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Nd.prototype;m.clone=function(){return new Nd(this.x,this.y)};
m.equals=function(a){return a instanceof Nd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Od(a,b){this.width=a;this.height=b}
m=Od.prototype;m.clone=function(){return new Od(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Pd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Qd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Rd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Sd;function Td(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Qd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!cc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Yc;c.Yc=null;e()}};
return function(e){d.next={Yc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Ud(a){C.setTimeout(function(){throw a;},0)}
;function Vd(){this.i=this.h=null}
Vd.prototype.add=function(a,b){var c=Wd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Vd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Wd=new Jd(function(){return new Xd},function(a){return a.reset()});
function Xd(){this.next=this.scope=this.h=null}
Xd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Xd.prototype.reset=function(){this.next=this.scope=this.h=null};var Yd,Zd=!1,$d=new Vd;function ae(a,b){Yd||be();Zd||(Yd(),Zd=!0);$d.add(a,b)}
function be(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Yd=function(){a.then(ce)}}else Yd=function(){var b=ce;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(ac()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Sd||(Sd=Td()),Sd(b)):C.setImmediate(b)}}
function ce(){for(var a;a=$d.remove();){try{a.h.call(a.scope)}catch(b){Ud(b)}Kd(Wd,a)}Zd=!1}
;function de(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.B=this.m=!1;if(a!=Ld)try{var b=this;a.call(void 0,function(c){ee(b,2,c)},function(c){ee(b,3,c)})}catch(c){ee(this,3,c)}}
function fe(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
fe.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ge=new Jd(function(){return new fe},function(a){a.reset()});
function he(a,b,c){var d=ge.get();d.i=a;d.h=b;d.context=c;return d}
function ie(a){return new de(function(b,c){c(a)})}
de.prototype.then=function(a,b,c){return je(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
de.prototype.$goog_Thenable=!0;m=de.prototype;m.oc=function(a,b){return je(this,null,a,b)};
m.catch=de.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new ke(a);ae(function(){le(this,b)},this)}};
function le(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?le(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):me(c),ne(c,e,3,b)))}a.j=null}else ee(a,3,b)}
function oe(a,b){a.i||2!=a.h&&3!=a.h||pe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function je(a,b,c,d){var e=he(null,null,null);e.child=new de(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ke?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;oe(a,e);return e.child}
m.jf=function(a){this.h=0;ee(this,2,a)};
m.kf=function(a){this.h=0;ee(this,3,a)};
function ee(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.jf,f=a.kf;if(d instanceof de){oe(d,he(e||Ld,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){qe(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,pe(a),3!=b||c instanceof ke||re(a,c))}}
function qe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function pe(a){a.m||(a.m=!0,ae(a.ae,a))}
function me(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ae=function(){for(var a;a=me(this);)ne(this,a,this.h,this.u);this.m=!1};
function ne(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.B;a=a.j)a.B=!1;if(b.child)b.child.j=null,se(b,c,d);else try{b.j?b.i.call(b.context):se(b,c,d)}catch(e){te.call(null,e)}Kd(ge,b)}
function se(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function re(a,b){a.B=!0;ae(function(){a.B&&te.call(null,b)})}
var te=Ud;function ke(a){bb.call(this,a)}
$a(ke,bb);ke.prototype.name="cancel";function ue(a,b){Gd.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.gf,this);this.m=Za()}
$a(ue,Gd);m=ue.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.gf=function(){if(this.enabled){var a=Za()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),Hd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){ue.Ba.S.call(this);this.stop();delete this.i};
function ve(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function we(a){H.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.u=new Set;this.flushInterval=3E4;this.h=new ue(this.flushInterval);this.h.listen("tick",this.Aa,!1,this);Pc(this,this.h)}
w(we,H);m=we.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function xe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Aa()}
m.Aa=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);ye(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Lc(a,b))};
m.sc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Mc(a,b))};
function ze(a,b){return a.u.has(b)?void 0:a.i.get(b)}
m.Pb=function(a){this.Md(a,1,B.apply(1,arguments))};
m.Md=function(a,b){var c=B.apply(2,arguments),d=ze(this,a);d&&d instanceof Lc&&(d.i(b,c),xe(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=ze(this,a);d&&d instanceof Mc&&(d.record(b,c),xe(this))};
function ye(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ae(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{oa:3,na:"ke"})}
function Be(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{oa:3,na:"rk"},{oa:3,na:"ke"},{oa:2,na:"ec"},{oa:3,na:"em"})}
function Ce(a){this.h=a;this.h.sc("/client_streamz/bg/fil",{oa:3,na:"rk"},{oa:3,na:"ke"})}
Ce.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function De(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{oa:2,na:"ph"},{oa:3,na:"ke"})}
function Ee(a){this.h=a;this.h.sc("/client_streamz/bg/fcd",{oa:2,na:"ph"},{oa:3,na:"ke"})}
Ee.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function Fe(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{oa:3,na:"rk"},{oa:3,na:"ke"})}
function Ge(a){this.h=a;this.h.sc("/client_streamz/bg/fsl",{oa:3,na:"rk"},{oa:3,na:"ke"})}
Ge.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var He={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Ie(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Je(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ke(a,h),d+=Ke(a,h+4),e+=Ke(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return He.toString(e)}
function Je(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ke(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;dc();var Le=Tc()||F("iPod"),Me=F("iPad");!F("Android")||ec()||dc()||bc()||F("Silk");ec();var Ne=F("Safari")&&!(ec()||(ac()?0:F("Coast"))||bc()||(ac()?0:F("Edge"))||(ac()?$b("Microsoft Edge"):F("Edg/"))||(ac()?$b("Opera"):F("OPR"))||dc()||F("Silk")||F("Android"))&&!(Tc()||F("iPad")||F("iPod"));var Oe={},Pe=null;function Qe(a,b){Qa(a);void 0===b&&(b=0);Re();b=Oe[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Se(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Te(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Te(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Pe[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Re();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Re(){if(!Pe){Pe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Oe[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Pe[f]&&(Pe[f]=e)}}}}
;var Ue="undefined"!==typeof Uint8Array,Ve=!Wc&&"function"===typeof btoa;function We(a){if(!Ve)return Qe(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Xe=/[-_.]/g,Ye={"-":"+",_:"/",".":"="};function Ze(a){return Ye[a]||""}
function $e(a){return Ue&&null!=a&&a instanceof Uint8Array}
var af={};var bf;function cf(a){if(a!==af)throw Error("illegal external caller");}
function df(a,b){cf(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
df.prototype.sizeBytes=function(){cf(af);var a=this.h;if(null!=a&&!$e(a))if("string"===typeof a)if(Ve){Xe.test(a)&&(a=a.replace(Xe,Ze));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Se(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function ef(){return"function"===typeof BigInt}
;function ff(a){return Array.prototype.slice.call(a)}
;function gf(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var hf=gf(),jf=gf("2ex");Math.max.apply(Math,ma(Object.values({Mf:1,Kf:2,Jf:4,Pf:8,Of:16,Nf:32,Af:64,Rf:128,If:256,Hf:512,Lf:1024,Ff:2048,Qf:4096,Gf:8192})));var kf=hf?function(a,b){a[hf]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function lf(a,b,c){return c?a|b:a&~b}
var mf=hf?function(a){return a[hf]|0}:function(a){return a.Sa|0},nf=hf?function(a){return a[hf]}:function(a){return a.Sa},of=hf?function(a,b){a[hf]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function pf(a,b){of(b,(a|0)&-14591)}
function qf(a,b){of(b,(a|34)&-14557)}
function rf(a){a=a>>14&1023;return 0===a?536870912:a}
;var sf={},tf={};function uf(a){return!(!a||"object"!==typeof a||a.h!==tf)}
function vf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var wf;function xf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=mf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;of(a,d|1);return!0}
var yf,zf=[];of(zf,55);yf=Object.freeze(zf);function Af(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var Bf=0,Cf=0;function Df(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(Ef(c,a)),b=c.next().value,a=c.next().value,c=b);Bf=c>>>0;Cf=a>>>0}
function Ff(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else ef()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Gf(c)+Gf(a));return c}
function Gf(a){a=String(a);return"0000000".slice(a.length)+a}
function Hf(){var a=Bf,b=Cf;b&2147483648?ef()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(Ef(a,b)),a=b.next().value,b=b.next().value,a="-"+Ff(a,b)):a=Ff(a,b);return a}
function Ef(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var If;function Jf(a){a=Error(a);qc(a,"warning");return a}
;function Kf(a){return a.displayName||a.name||"unknown type name"}
function Lf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Mf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Nf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Mf.test(a)}
function Of(a){if(null!=a){if("number"!==typeof a)throw Jf("int32");if(!Number.isFinite(a))throw Jf("int32");a|=0}return a}
function Pf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Qf(a){if(null!=a){var b=!!b;if(!Nf(a))throw Jf("int64");a="string"===typeof a?Rf(a):b?Sf(a):Tf(a)}return a}
function Uf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Tf(a){Nf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Df(a);var b=Bf,c=Cf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Sf(a){Nf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Uf(b)?a=b:(Df(a),a=Hf())}return a}
function Rf(a){Nf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Uf(a)){if(16>a.length)Df(Number(a));else if(ef())a=BigInt(a),Bf=Number(a&BigInt(4294967295))>>>0,Cf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Cf=Bf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Cf*=1E6,Bf=1E6*Bf+d,4294967296<=Bf&&(Cf+=Math.trunc(Bf/4294967296),Cf>>>=0,Bf>>>=0);b&&(b=v(Ef(Bf,Cf)),
a=b.next().value,b=b.next().value,Bf=a,Cf=b)}a=Hf()}return a}
function Vf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Wf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Kf(b)+" but got "+(a&&Kf(a.constructor)));}
function Xf(a,b,c){if(null!=a&&"object"===typeof a&&a.Hc===sf)return a;if(Array.isArray(a)){var d=mf(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&of(a,e);return new b(a)}}
;var Yf;function Zf(a,b){mf(b);Yf=b;a=new a(b);Yf=void 0;return a}
function I(a,b,c){null==a&&(a=Yf);Yf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=mf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(vf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}of(a,d);return a}
;function $f(a,b){return ag(b)}
function ag(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(xf(a,void 0,0))return}else{if($e(a))return We(a);if(a instanceof df){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=We(b)}}}return a}
;function bg(a,b,c){a=ff(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function cg(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=xf(a,void 0,0)?void 0:e&&mf(a)&2?a:dg(a,b,c,void 0!==d,e);else if(vf(a)){var f={},g;for(g in a)f[g]=cg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function dg(a,b,c,d,e){var f=d||c?mf(a):0;d=d?!!(f&32):void 0;a=ff(a);for(var g=0;g<a.length;g++)a[g]=cg(a[g],b,c,d,e);c&&c(f,a);return a}
function eg(a){return a.Hc===sf?a.toJSON():ag(a)}
;function fg(a,b,c){c=void 0===c?qf:c;if(null!=a){if(Ue&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=mf(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?of(a,(d|34)&-12293):dg(a,fg,d&4?qf:c,!0,!0)}a.Hc===sf&&(c=a.F,d=nf(c),a=d&2?a:Zf(a.constructor,gg(c,d,!0)));return a}}
function gg(a,b,c){var d=c||b&2?qf:pf,e=!!(b&32);a=bg(a,b,function(f){return fg(f,e,d)});
kf(a,32|(c?2:0));return a}
function hg(a){var b=a.F,c=nf(b);return c&2?Zf(a.constructor,gg(b,c,!1)):a}
;function ig(a,b){a=a.F;return jg(a,nf(a),b)}
function kg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function jg(a,b,c,d){if(-1===c)return null;var e=rf(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(kg(a,b,e,c)&&null!=jf){var g;a=null!=(g=If)?g:If={};g=a[jf]||0;4<=g||(a[jf]=g+1,g=Error(),qc(g,"incident"),Ud(g))}return d}return kg(a,b,e,c)}}
function lg(a,b,c){var d=a.F,e=nf(d);Af(e);mg(d,e,b,c);return a}
function mg(a,b,c,d,e){vf(d);var f=rf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&of(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function ng(a){return void 0!==og(a,pg,11,!1)}
function qg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function rg(a,b,c,d){a=a.F;var e=nf(a);Af(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=jg(a,f,k)&&(0!==g&&(f=mg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=mg(a,e,c));mg(a,e,b,d)}
function og(a,b,c,d){a=a.F;var e=nf(a),f=jg(a,e,c,d);b=Xf(f,b,e);b!==f&&null!=b&&mg(a,e,c,b,d);return b}
function sg(a,b,c,d){d=void 0===d?!1:d;b=og(a,b,c,d);if(null==b)return b;a=a.F;var e=nf(a);if(!(e&2)){var f=hg(b);f!==b&&(b=f,mg(a,e,c,b,d))}return b}
function tg(a,b,c,d){null!=d?Wf(d,b):d=void 0;return lg(a,c,d)}
function ug(a,b,c,d){var e=a.F,f=nf(e);Af(f);if(null==d)return mg(e,f,c),a;if(!Array.isArray(d))throw Jf();for(var g=mf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,r=!0,t=0;t<d.length;t++){var x=d[t];Wf(x,b);k||(x=!!(mf(x.F)&2),p&&(p=!x),r&&(r=x))}k||(g=lf(g,5,!0),g=lf(g,8,p),g=lf(g,16,r));if(n||l&&g!==h)d=ff(d),h=0,g=vg(g,f),g=wg(g,f,!0);g!==h&&of(d,g);mg(e,f,c,d);return a}
function vg(a,b){a=lf(a,2,!!(2&b));a=lf(a,32,!0);return a=lf(a,2048,!1)}
function wg(a,b,c){32&b&&c||(a=lf(a,32,!1));return a}
function xg(a,b){a=ig(a,b);var c;null==a?c=a:Nf(a)?"number"===typeof a?c=Tf(a):c=Rf(a):c=void 0;return c}
function yg(a){a=ig(a,1);var b=void 0===b?!1:b;b=null==a?a:Nf(a)?"string"===typeof a?Rf(a):b?Sf(a):Tf(a):void 0;return b}
function zg(a){a=ig(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function Ag(a,b,c){return lg(a,b,Vf(c))}
function Bg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Jf("enum");c|=0}return lg(a,b,c)}
;function K(a,b,c){this.F=I(a,b,c)}
m=K.prototype;m.toJSON=function(){if(wf)var a=Cg(this,this.F,!1);else a=dg(this.F,eg,void 0,void 0,!1),a=Cg(this,a,!0);return a};
m.serialize=function(){wf=!0;try{return JSON.stringify(this.toJSON(),$f)}finally{wf=!1}};
function Dg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");kf(b,32);return Zf(a,b)}
m.clone=function(){var a=this.F,b=nf(a);return Zf(this.constructor,gg(a,b,!1))};
m.Hc=sf;m.toString=function(){return Cg(this,this.F,!1).toString()};
function Cg(a,b,c){var d=Wb?void 0:a.constructor.Ua;var e=nf(c?a.F:b);a=b.length;if(!a)return b;var f;if(vf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(xf(n,d,+l)||uf(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||xf(c,d,r)||uf(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;function Eg(a){this.F=I(a)}
w(Eg,K);var Fg=[1,2,3];function Gg(a){this.F=I(a)}
w(Gg,K);var Hg=[1,2,3];function Ig(a){this.F=I(a)}
w(Ig,K);Ig.Ua=[1];function Jg(a){this.F=I(a)}
w(Jg,K);Jg.Ua=[3,6,4];function Kg(a){this.F=I(a)}
w(Kg,K);Kg.Ua=[1];function Lg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Mg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],z=e[2],y=e[3],J=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=y^x&(z^y);var R=1518500249}else G=x^z^y,R=1859775393;else 60>t?(G=x&z|y&(x|z),R=2400959708):(G=x^z^y,R=3395469782);G=((p<<5|p>>>27)&4294967295)+G+J+R+r[t]&4294967295;J=y;y=z;z=(x<<30|x>>>2)&4294967295;x=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+J&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],x=0,z=p.length;x<z;++x)t.push(p.charCodeAt(x));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var x=24;0<=x;x-=8)p[r++]=e[t]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Wd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function Ng(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Og(Lg(d),a,c||null)].join(" "):null}
function Og(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Db(d,function(h){e.push(h)}),Pg(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=Pg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Pg(a){var b=Mg();b.update(a);return b.Wd().toLowerCase()}
;var Sg={};function Tg(a){this.h=a||{cookie:""}}
m=Tg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Jb:0,path:b,domain:c});return d};
m.ac=function(){return Ug(this).keys};
m.clear=function(){for(var a=Ug(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ug(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Vg=new Tg("undefined"==typeof document?null:document);function Wg(a){return!!Sg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Xg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Wg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Tg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Wg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Yg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Tg(document)).get(b));return a?Ng(a,c,d):null}
function Zg(a,b){b=void 0===b?!1:b;var c=Lg(String(C.location.href)),d=[];if(Xg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Tg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Ng(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Wg(b)&&((b=Yg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Yg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function $g(a){this.F=I(a)}
w($g,K);$g.Ua=[2];function ah(a){Gd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Za()};
this.j=this.i()}
w(ah,Gd);ah.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
ah.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
ah.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
ah.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),Hd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function bh(a){this.F=I(a)}
w(bh,K);function ch(a){this.F=I(a)}
w(ch,K);function dh(a){this.h=this.i=this.j=a}
dh.prototype.reset=function(){this.h=this.i=this.j};
dh.prototype.getValue=function(){return this.i};function eh(a){this.F=I(a)}
w(eh,K);eh.prototype.cc=function(){return zg(this)};function fh(a){this.F=I(a)}
w(fh,K);function gh(a){this.F=I(a)}
w(gh,K);function hh(a,b){ug(a,fh,1,b)}
gh.Ua=[1];function pg(a){this.F=I(a)}
w(pg,K);var ih=["platform","platformVersion","architecture","model","uaFullVersion"],jh=new gh,kh=null;function lh(a,b){b=void 0===b?ih:b;if(!kh){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues||a.brands&&"function"!==typeof a.brands.map)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new fh;f=Ag(f,1,e.brand);return Ag(f,2,e.version)});
hh(lg(jh,2,Lf(a.mobile)),c);kh=a.getHighEntropyValues(b)}var d=new Set(b);return kh.then(function(e){var f=jh.clone();d.has("platform")&&Ag(f,3,e.platform);d.has("platformVersion")&&Ag(f,4,e.platformVersion);d.has("architecture")&&Ag(f,5,e.architecture);d.has("model")&&Ag(f,6,e.model);d.has("uaFullVersion")&&Ag(f,7,e.uaFullVersion);return f}).catch(function(){return jh.clone()})}
;function mh(a){this.F=I(a)}
w(mh,K);function nh(a){this.F=I(a,4)}
w(nh,K);function oh(a){this.F=I(a,35)}
w(oh,K);oh.Ua=[3,20,27];function ph(a){this.F=I(a,19)}
w(ph,K);ph.prototype.Mb=function(a){return Bg(this,2,a)};
ph.Ua=[3,5];function qh(a){this.F=I(a,8)}
w(qh,K);var rh=function(a){return function(b){return Dg(a,b)}}(qh);
qh.Ua=[5,6,7];function sh(a){this.F=I(a)}
w(sh,K);var th=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=sg;this.defaultValue=void 0}(175237375,sh);function uh(a){H.call(this);var b=this;this.componentId="";this.j=[];this.da="";this.pageId=null;this.fa=this.Y=-1;this.experimentIds=null;this.U=this.m=0;this.ha=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new vh(a.logSource,a.eb);this.network=a.network;this.xb=a.xb||null;this.bufferSize=1E3;this.u=a.lf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.logger=null;this.withCredentials=!a.cd;this.eb=a.eb||!1;this.I="undefined"!==typeof URLSearchParams&&!!(new URL(wh())).searchParams&&!!(new URL(wh())).searchParams.set;var c=Bg(new mh,1,1);xh(this.i,c);this.l=new dh(1E4);this.h=new ah(this.l.getValue());a=yh(this,a.Vc);vd(this.h,"tick",a,!1,this);this.D=new ah(6E5);vd(this.D,"tick",
a,!1,this);this.Db||this.D.start();this.eb||(vd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.vc()}),vd(document,"pagehide",this.vc,!1,this))}
w(uh,H);function yh(a,b){return a.I?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=uh.prototype;m.S=function(){this.vc();this.h.stop();this.D.stop();H.prototype.S.call(this)};
m.log=function(a){if(this.I){a=a.clone();var b=this.ha++;a=lg(a,21,Qf(b));this.componentId&&Ag(a,26,this.componentId);if(!yg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";lg(b,1,Qf(c))}null==xg(a,15)&&lg(a,15,Qf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),tg(b,$g,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.fa>d&&this.Y<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.cc?zh(this.i,this.network.cc()):zh(this.i,0));var e=Ah(this.i,this.j,this.m,this.U,this.xb);d={};var f=this.Fb();f&&(d.Authorization=f);this.u||(this.u=wh());try{var g=(new URL(this.u)).toString()}catch(k){g=(new URL(this.u,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.da===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Uf:1,wd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=rh(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=yg(l);k=k(null!=p?p:n);0<k&&(c.Y=Date.now(),c.fa=c.Y+k);l=th.ctor?th.i(l,th.ctor,th.h,!0):th.i(l,th.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=Pf(ig(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new dh(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.U=0};
h=function(k,l){var n=e.F;var p=nf(n),r=p,t=!(2&p),x=!!(2&r),z=x?1:2;p=1===z;z=2===z;t&&(t=!x);x=jg(n,r,3);x=Array.isArray(x)?x:yf;var y=mf(x),J=!!(4&y);if(!J){var G=y;0===G&&(G=vg(G,r));G=lf(G,1,!0);y=x;var R=r,N=!!(2&G);N&&(R=lf(R,2,!0));for(var da=!N,Ca=!0,O=0,ea=0;O<y.length;O++){var ka=Xf(y[O],oh,R);if(ka instanceof oh){if(!N){var pa=!!(mf(ka.F)&2);da&&(da=!pa);Ca&&(Ca=pa)}y[ea++]=ka}}ea<O&&(y.length=ea);G=lf(G,4,!0);G=lf(G,16,Ca);G=lf(G,8,da);of(y,G);N&&Object.freeze(y);y=G}G=!!(8&y)||p&&!x.length;
if(t&&!G){qg(y)&&(x=ff(x),y=vg(y,r),r=mg(n,r,3,x));t=x;for(G=0;G<t.length;G++)R=t[G],N=hg(R),R!==N&&(t[G]=N);y=lf(y,8,!0);y=lf(y,16,!t.length);of(t,y)}qg(y)||(t=y,p?(G=!!(32&y),G||(x=ff(x),t=0,r=mg(n,r,3,x)),y=lf(y,!x.length||16&y&&(!J||G)?2:2048,!0)):y=wg(y,r,!1),y!==t&&of(x,y),p&&Object.freeze(x));z&&qg(y)&&(x=ff(x),y=vg(y,r),y=wg(y,r,!1),of(x,y),mg(n,r,3,x));n=x;r=xg(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());
401===k&&f&&(c.da=f);r&&(c.m+=r);void 0===l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.U};
c.network&&c.network.send(d,g,h)}}}};
m.vc=function(){Bh(this.i,!0);this.flush();Bh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function wh(){return"https://play.google.com/log?format=json&hasfast=true"}
function vh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new ph;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));xh(this,new mh)}
vh.prototype.Mb=function(a){this.h.Mb(a);return this};
function xh(a,b){tg(a.h,mh,1,b);zg(b)||Bg(b,1,1);if(!a.eb){b=Ch(a);var c=ig(b,5);(null==c||"string"===typeof c)&&c||Ag(b,5,a.locale)}a.uach&&(b=Ch(a),sg(b,gh,9)||tg(b,gh,9,a.uach))}
function zh(a,b){ng(Dh(a))&&(a=Eh(a),Bg(a,1,b))}
function Bh(a,b){ng(Dh(a))&&(a=Eh(a),lg(a,2,Lf(b)))}
function Dh(a){return sg(a.h,mh,1)}
function Fh(a){var b=void 0===b?ih:b;var c=a.eb?void 0:window;c?lh(c,b).then(function(d){a.uach=d;d=Ch(a);tg(d,gh,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Ch(a){a=Dh(a);var b=sg(a,pg,11);b||(b=new pg,tg(a,pg,11,b));return b}
function Eh(a){a=Ch(a);var b=sg(a,eh,10);b||(b=new eh,lg(b,2,Lf(!1)),tg(a,eh,10,b));return b}
function Ah(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(ng(Dh(a))){var h=Eh(a);lg(h,3,Of(d))}ng(Dh(a))&&(d=Eh(a),lg(d,4,Of(f)));ng(Dh(a))&&(f=Eh(a),lg(f,5,Of(g)));a=a.h.clone();g=Date.now().toString();a=lg(a,4,Qf(g));b=ug(a,oh,3,b);e&&(a=new bh,e=lg(a,13,Of(e)),a=new ch,e=tg(a,bh,2,e),a=new nh,e=tg(a,ch,1,e),e=Bg(e,2,9),tg(b,nh,18,e));c&&lg(b,14,Qf(c));return b}
;function Gh(){this.Nd="undefined"!==typeof AbortController}
Gh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t,x,z;return A(function(y){switch(y.h){case 1:return f=(e=d.Nd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(y,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.wd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),y.yield(fetch(a.url,g),5);case 5:h=y.i;if(200!==h.status){null==(k=c)||k(h.status);y.A(3);break}if(null==(l=b)){y.A(7);break}p=n=l;return y.yield(h.text(),8);case 8:p(y.i);case 7:case 3:y.I=[y.j];y.l=0;y.B=0;clearTimeout(f);Da(y);break;case 2:r=Ba(y);switch(null==(t=r)?void 0:t.name){case "AbortError":null==(x=c)||x(408);break;default:null==(z=c)||z(400)}y.A(3)}})};
Gh.prototype.cc=function(){return 4};function Hh(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.xb=null}
w(Hh,H);Hh.prototype.cd=function(){this.l=!0;return this};function Ih(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;H.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Hh(a,"0"),a.componentId=b,Pc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),a.network||(a.network=new Gh),b=new uh({logSource:a.logSource,Fb:a.Fb?a.Fb:Zg,sessionIndex:a.sessionIndex,lf:a.i,eb:a.j,Db:!1,cd:a.l,Vc:a.Vc,network:a.network}),Pc(a,b),a.h&&(c=a.h,d=Ch(b.i),Ag(d,7,c)),a.componentId&&(b.componentId=
a.componentId),a.xb&&(b.xb=a.xb),a.pageId&&(b.pageId=a.pageId),Fh(b.i),a.network.Mb&&a.network.Mb(a.logSource),a.network.Ye&&a.network.Ye(b),a=b);this.h=a}
w(Ih,H);
Ih.prototype.flush=function(a){var b=a||[];if(b.length){a=new Kg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Jg;f=Ag(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].na);h=f.F;var k=nf(h);Af(k);if(null==g)mg(h,k,3);else{if(!Array.isArray(g))throw Jf();var l=mf(g),n=l,p=!!(2&l)||Object.isFrozen(g),r=!p&&!1;var t=4&l?!1:!0;if(t)for(l=21,p&&(g=ff(g),n=0,l=vg(l,k),l=wg(l,k,!0)),t=0;t<g.length;t++){p=g;var x=t,z=g[t];if("string"!==typeof z)throw Error();p[x]=z}r&&(g=ff(g),n=
0,l=vg(l,k),l=wg(l,k,!0));l!==n&&of(g,l);mg(h,k,3,g)}g=[];h=[];k=v(e.h.keys());for(l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];n=e.j;r=e.xc(l)||[];t=[];for(p=0;p<r.length;p++){z=(x=r[p])&&x.h;x=new Gg;switch(n){case 3:z=Number(z);Number.isFinite(z)&&rg(x,1,Hg,Qf(z));break;case 2:z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);rg(x,2,Hg,z)}t.push(x)}n=t;for(r=0;r<n.length;r++){t=
n[r];p=new Ig;t=tg(p,Gg,2,t);p=l;x=[];z=[];for(var y=0;y<e.fields.length;y++)z.push(e.fields[y].oa);for(y=0;y<z.length;y++){var J=z[y],G=p[y],R=new Eg;switch(J){case 3:rg(R,1,Fg,Vf(String(G)));break;case 2:J=Number(G);Number.isFinite(J)&&rg(R,2,Fg,Of(J));break;case 1:rg(R,3,Fg,Lf("true"===G))}x.push(R)}ug(t,Eg,1,x);g.push(t)}}ug(f,Ig,4,g);c.push(f);e.clear()}ug(a,Jg,1,c);b=this.h;b.I&&(a instanceof oh?b.log(a):(c=new oh,a=a.serialize(),a=Ag(c,8,a),b.log(a)));this.h.flush()}};function Jh(){}
Jh.prototype.serialize=function(a){var b=[];Kh(this,a,b);return b.join("")};
function Kh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Lh(d,c),c.push(":"),Kh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Lh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Mh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Nh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Lh(a,b){b.push('"',a.replace(Nh,function(c){var d=Mh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Mh[c]=d);return d}),'"')}
;function Oh(){}
Oh.prototype.h=null;Oh.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Ph;function Qh(){}
$a(Qh,Oh);Ph=new Qh;function Rh(a){Gd.call(this);this.headers=new Map;this.Pa=a||null;this.i=!1;this.I=this.K=null;this.l=this.da="";this.j=this.Y=this.u=this.U=!1;this.m=0;this.D=null;this.Fa="";this.ha=this.ta=!1}
$a(Rh,Gd);var Sh=/^https?$/i,Th=["POST","PUT"],Uh=[];function Vh(a,b,c,d,e,f,g){var h=new Rh;Uh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Ud,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.ta=g);h.send(a,c,d,e)}
m=Rh.prototype;m.Ud=function(){this.dispose();Ib(Uh,this)};
m.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.U=!1;this.i=!0;this.K=new XMLHttpRequest;this.I=this.Pa?this.Pa.getOptions():Ph.getOptions();this.K.onreadystatechange=Xa(this.qd,this);try{this.getStatus(),this.Y=!0,this.K.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();Wh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=Cb(Th,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.Fa&&(this.K.responseType=this.Fa);"withCredentials"in this.K&&this.K.withCredentials!==this.ta&&(this.K.withCredentials=this.ta);try{Xh(this),0<this.m&&(this.ha=Yh(this.K),this.getStatus(),this.ha?(this.K.timeout=this.m,this.K.ontimeout=Xa(this.Fd,
this)):this.D=ve(this.Fd,this.m,this)),this.getStatus(),this.u=!0,this.K.send(a),this.u=!1}catch(g){this.getStatus(),Wh(this,g)}};
function Yh(a){return Wc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Fd=function(){"undefined"!=typeof Na&&this.K&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),Hd(this,"timeout"),this.abort(8))};
function Wh(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.l=b;Zh(a);$h(a)}
function Zh(a){a.U||(a.U=!0,Hd(a,"complete"),Hd(a,"error"))}
m.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,Hd(this,"complete"),Hd(this,"abort"),$h(this))};
m.S=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),$h(this,!0));Rh.Ba.S.call(this)};
m.qd=function(){this.T||(this.Y||this.u||this.j?ai(this):this.De())};
m.De=function(){ai(this)};
function ai(a){if(a.i&&"undefined"!=typeof Na)if(a.I[1]&&4==bi(a)&&2==a.getStatus())a.getStatus();else if(a.u&&4==bi(a))ve(a.qd,0,a);else if(Hd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ci(a))Hd(a,"complete"),Hd(a,"success");else{try{var b=2<bi(a)?a.K.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Zh(a)}}finally{$h(a)}}}
function $h(a,b){if(a.K){Xh(a);var c=a.K,d=a.I[0]?function(){}:null;
a.K=null;a.I=null;b||Hd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Xh(a){a.K&&a.ha&&(a.K.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.K};
m.isComplete=function(){return 4==bi(this)};
function ci(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=yc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Sh.test(a?a.toLowerCase():"");c=b}return c}
function bi(a){return a.K?a.K.readyState:0}
m.getStatus=function(){try{return 2<bi(this)?this.K.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function di(){}
di.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Vh(a.url,function(d){d=d.target;if(ci(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.wd,a.timeoutMillis,a.withCredentials)};
di.prototype.cc=function(){return 1};function ei(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=fi()}
ei.prototype.start=function(){this.h=fi()};
ei.prototype.done=function(){null!=this.h&&this.logger.nd(this.event,fi()-this.h)};
function gi(){}
m=gi.prototype;m.Ec=function(){};
m.nd=function(){};
m.hc=function(){};
m.md=function(){};
m.Aa=function(){};
function hi(a,b,c){H.call(this);this.i=b;this.l=new Ih(1828,"","",!1,"",void 0,new di);this.h=new we(this.l);c&&(this.h.l=1E5,b=this.h,b.flushInterval=3E4,b.h.setInterval(3E4));this.I=new Ce(this.h);this.U=new Fe(this.h);this.Y=new Ge(this.h);this.D=new Be(this.h);this.m=new De(this.h);this.u=new Ee(this.h);this.j=Ie(a);(new Ae(this.h)).h.Pb("/client_streamz/bg/fic",this.i);Pc(this,this.l);Pc(this,this.h)}
w(hi,H);m=hi.prototype;m.Ec=function(){this.U.h.Pb("/client_streamz/bg/fsc",this.j,this.i)};
m.nd=function(a,b){0===a?this.I.record(b,this.j,this.i):1===a&&this.Y.record(b,this.j,this.i)};
m.hc=function(a,b){this.D.h.Pb("/client_streamz/bg/fiec",this.j,this.i,a,b)};
function ii(a,b,c){a.m.h.Pb("/client_streamz/bg/fcc",c,a.i);a.u.record(b,c,a.i)}
m.md=function(a,b,c,d,e){d?ii(this,a,4):e?ii(this,a,5):b?ii(this,a,1):c?ii(this,a,2):ii(this,a,3)};
m.Aa=function(){this.h.Aa()};
function fi(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function ji(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ki(a){function b(t,x,z){Promise.resolve().then(function(){p.done();d.h&&d.aa.Aa();n.resolve({Qd:t,bf:x,hg:z})})}
function c(t,x,z,y,J){h&&d.aa.md(t,x,z,null!=y?y:!1,null!=J?J:!1)}
H.call(this);var d=this;this.h=!1;var e=a.program;var f=a.ke;var g=Math.random(),h=.1>g;null!=a.Sd&&(h=g<a.Sd);h&&(this.h=!0);var k=new H;this.addOnDisposeCallback(function(){d.i.then(function(t){t=t.bf;d.aa.Aa();null==t||t();k.dispose()})});
if(!1!==a.Je)if(a.aa)this.aa=a.aa;else{var l;Pc(k,this.aa=new hi(f,null!=(l=a.Ae)?l:"_",this.h))}else this.aa=new gi;var n=new ji;this.i=n.promise;var p=new ei(this.aa,0,!1);C[f]?C[f].a||(this.aa.hc(2,""),this.aa.Aa()):(this.aa.hc(1,""),this.aa.Aa());try{var r=C[f].a;p.start();this.j=v(r(e,b,!0,a.rg,c)).next().value;this.af=n.promise.then(function(){})}catch(t){throw this.aa.hc(4,t.message),this.aa.Aa(),t;
}}
w(ki,H);ki.prototype.snapshot=function(a){var b=this;if(this.T)throw Error("Already disposed");this.aa.Ec();return this.i.then(function(c){var d=c.Qd;return new Promise(function(e){var f=new ei(b.aa,1);d(function(g){f.done();b.h&&b.aa.Aa();e(g)},[a.bd,
a.cf,a.nf,a.df])})})};
ki.prototype.Cd=function(a){if(this.T)throw Error("Already disposed");this.aa.Ec();var b=new ei(this.aa,1);a=this.j([a.bd,a.cf,a.nf,a.df]);b.done();this.h&&this.aa.Aa();return a};var li=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function mi(a){var b=ni;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function oi(){var a=[];mi(function(b){a.push(b)});
return a}
var ni={pf:"allow-forms",qf:"allow-modals",rf:"allow-orientation-lock",sf:"allow-pointer-lock",tf:"allow-popups",uf:"allow-popups-to-escape-sandbox",vf:"allow-presentation",wf:"allow-same-origin",xf:"allow-scripts",yf:"allow-top-navigation",zf:"allow-top-navigation-by-user-activation"},pi=Md(function(){return oi()});
function qi(){var a=ri(),b={};Db(pi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ri(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function si(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ti=(new Date).getTime();function ui(a){Gd.call(this);var b=this;this.u=this.j=0;this.Da=null!=a?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(vi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.u||wi(this)}
w(ui,Gd);function xi(){var a=yi;ui.h||(ui.h=new ui(a));return ui.h}
ui.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.qa(this.u);delete ui.h};
ui.prototype.wa=function(){return this.i};
function wi(a){a.u=a.Da.pa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):c.yield(vi(a),3):c.yield(vi(a),3);wi(a);c.h=0})},3E4)}
function vi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.I=[h.j];h.l=0;h.B=0;a.m=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Hd(a,"networkstatus-online"):Hd(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function zi(){this.data=[];this.h=-1}
zi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
zi.prototype.get=function(a){return!!this.data[a]};
function Ai(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Bi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Bi.prototype[Symbol.iterator]=function(){return this};
Bi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ci(a,b){return new Bi(a,b)}
;function Di(){this.blockSize=-1}
;function Ei(){this.blockSize=-1;this.blockSize=64;this.h=[];this.B=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Ei,Di);Ei.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Fi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ei.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.B,f=this.i;d<b;){if(0==f)for(;d<=c;)Fi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Fi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Fi(this,e);f=0;break}}this.i=f;this.l+=b}};
Ei.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.B[c]=b&255,b/=256;Fi(this,this.B);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Gi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Hi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ii(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Gi(a).match(/\S+/g)||[],b=0<=Cb(a,b));return b}
function Ji(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ii(a,"inverted-hdpi")&&Hi(a,Array.prototype.filter.call(a.classList?a.classList:Gi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ki(){}
Ki.prototype.next=function(){return Li};
var Li={done:!0,value:void 0};function Mi(a){return{value:a,done:!1}}
Ki.prototype.Ga=function(){return this};function Ni(a){if(a instanceof Oi||a instanceof Pi||a instanceof Qi)return a;if("function"==typeof a.next)return new Oi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Oi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Oi(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Oi(a){this.i=a}
Oi.prototype.Ga=function(){return new Pi(this.i())};
Oi.prototype[Symbol.iterator]=function(){return new Qi(this.i())};
Oi.prototype.h=function(){return new Qi(this.i())};
function Pi(a){this.i=a}
w(Pi,Ki);Pi.prototype.next=function(){return this.i.next()};
Pi.prototype[Symbol.iterator]=function(){return new Qi(this.i)};
Pi.prototype.h=function(){return new Qi(this.i)};
function Qi(a){Oi.call(this,function(){return a});
this.j=a}
w(Qi,Oi);Qi.prototype.next=function(){return this.j.next()};function L(a){H.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.u=!!a}
$a(L,H);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.zb(a)}return!1};
m.zb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Ri(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.T;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.zb(c)}}return 0!=e}return!1};
function Ri(a,b,c){ae(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.zb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.Ba.S.call(this);this.clear();this.j.length=0};function Si(a){this.h=a}
Si.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Jh).serialize(b))};
Si.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Si.prototype.remove=function(a){this.h.remove(a)};function Ti(a){this.h=a}
$a(Ti,Si);function Ui(a){this.data=a}
function Vi(a){return void 0===a||a instanceof Ui?a:new Ui(a)}
Ti.prototype.set=function(a,b){Ti.Ba.set.call(this,a,Vi(b))};
Ti.prototype.i=function(a){a=Ti.Ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ti.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Wi(a){this.h=a}
$a(Wi,Ti);Wi.prototype.set=function(a,b,c){if(b=Vi(b)){if(c){if(c<Za()){Wi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Wi.Ba.set.call(this,a,b)};
Wi.prototype.i=function(a){var b=Wi.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Wi.prototype.remove.call(this,a);else return b}};function Xi(){}
;function Yi(){}
$a(Yi,Xi);Yi.prototype[Symbol.iterator]=function(){return Ni(this.Ga(!0)).h()};
Yi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Zi(a){this.h=a;this.i=null}
$a(Zi,Yi);m=Zi.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){$i(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){$i(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){$i(this);this.h.removeItem(a)};
m.Ga=function(a){$i(this);var b=0,c=this.h,d=new Ki;d.next=function(){if(b>=c.length)return Li;var e=c.key(b++);if(a)return Mi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Mi(e)};
return d};
m.clear=function(){$i(this);this.h.clear()};
m.key=function(a){$i(this);return this.h.key(a)};
function $i(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Ud(Error("Storage mechanism: Storage unavailable"))}
;function aj(){var a=null;try{a=C.localStorage||null}catch(b){}Zi.call(this,a)}
$a(aj,Zi);function bj(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof bj)for(c=a.ac(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=bj.prototype;m.ac=function(){cj(this);return this.h.concat()};
m.has=function(a){return dj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ej;cj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ej(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return dj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&cj(this),!0):!1};
function cj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];dj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],dj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return dj(this.i,a)?this.i[a]:b};
m.set=function(a,b){dj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.ac(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new bj(this)};
m.keys=function(){return Ni(this.Ga(!0)).h()};
m.values=function(){return Ni(this.Ga(!1)).h()};
m.entries=function(){var a=this;return Ci(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){cj(this);var b=0,c=this.Wa,d=this,e=new Ki;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Li;var f=d.h[b++];return Mi(a?f:d.i[f])};
return e};
function dj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function fj(a,b){this.i=a;this.h=null;var c;if(c=Wc)c=!(9<=Number(id));if(c){gj||(gj=new bj);this.h=gj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),gj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(fj,Yi);var hj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},gj=null;function ij(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return hj[b]})}
m=fj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(ij(a),b);jj(this)};
m.get=function(a){a=this.h.getAttribute(ij(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(ij(a));jj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ki;d.next=function(){if(b>=c.length)return Li;var e=c[b++];if(a)return Mi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Mi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);jj(this)};
function jj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function kj(a,b){this.i=a;this.h=b+"::"}
$a(kj,Yi);kj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
kj.prototype.get=function(a){return this.i.get(this.h+a)};
kj.prototype.remove=function(a){this.i.remove(this.h+a)};
kj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ki;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Mi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},lj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Pc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var mj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ed:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},nj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ed:function(a){return[].concat.apply([],a)}};
M.Ze=function(){lj?(M.lb=Uint8Array,M.Ia=Uint16Array,M.Ld=Int32Array,M.assign(M,mj)):(M.lb=Array,M.Ia=Array,M.Ld=Array,M.assign(M,nj))};
M.Ze();var oj=!0;try{new Uint8Array(1)}catch(a){oj=!1}
function pj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var qj={};qj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var rj={},sj,tj=[],uj=0;256>uj;uj++){sj=uj;for(var vj=0;8>vj;vj++)sj=sj&1?3988292384^sj>>>1:sj>>>1;tj[uj]=sj}rj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^tj[(a^b[d])&255];return a^-1};var wj={};wj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function xj(a){for(var b=a.length;0<=--b;)a[b]=0}
var yj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],zj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Aj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Bj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Cj=Array(576);xj(Cj);var Dj=Array(60);xj(Dj);var Ej=Array(512);xj(Ej);var Fj=Array(256);xj(Fj);var Gj=Array(29);xj(Gj);var Hj=Array(30);xj(Hj);function Ij(a,b,c,d,e){this.Dd=a;this.de=b;this.ce=c;this.Xd=d;this.ze=e;this.jd=a&&a.length}
var Jj,Kj,Lj;function Mj(a,b){this.dd=a;this.ub=0;this.Va=b}
function Nj(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Oj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Nj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Pj(a,b,c){Oj(a,c[2*b],c[2*b+1])}
function Qj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Rj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Qj(d[e]++,e))}
function Sj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.ra[512]=1;a.Oa=a.yb=0;a.ya=a.matches=0}
function Tj(a){8<a.ga?Nj(a,a.ma):0<a.ga&&(a.X[a.pending++]=a.ma);a.ma=0;a.ga=0}
function Uj(a,b,c){Tj(a);Nj(a,c);Nj(a,~c);M.mb(a.X,a.window,b,c,a.pending);a.pending+=c}
function Vj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Wj(a,b,c){for(var d=a.Z[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Vj(b,a.Z[e+1],a.Z[e],a.depth)&&e++;if(Vj(b,d,a.Z[e],a.depth))break;a.Z[c]=a.Z[e];c=e;e<<=1}a.Z[c]=d}
function Xj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.X[a.Cb+2*d]<<8|a.X[a.Cb+2*d+1];var f=a.X[a.Dc+d];d++;if(0===e)Pj(a,f,b);else{var g=Fj[f];Pj(a,g+256+1,b);var h=yj[g];0!==h&&(f-=Gj[g],Oj(a,f,h));e--;g=256>e?Ej[e]:Ej[256+(e>>>7)];Pj(a,g,c);h=zj[g];0!==h&&(e-=Hj[g],Oj(a,e,h))}}while(d<a.ya)}Pj(a,256,b)}
function Yj(a,b){var c=b.dd,d=b.Va.Dd,e=b.Va.jd,f=b.Va.Xd,g,h=-1;a.Ma=0;a.pb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Z[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.Z[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.yb-=d[2*k+1])}b.ub=h;for(g=a.Ma>>1;1<=g;g--)Wj(a,c,g);k=f;do g=a.Z[1],a.Z[1]=a.Z[a.Ma--],Wj(a,c,1),d=a.Z[1],a.Z[--a.pb]=g,a.Z[--a.pb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Z[1]=k++,Wj(a,c,1);while(2<=a.Ma);a.Z[--a.pb]=
a.Z[1];g=b.dd;k=b.ub;d=b.Va.Dd;e=b.Va.jd;f=b.Va.de;var l=b.Va.ce,n=b.Va.ze,p,r=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.Z[a.pb]+1]=0;for(b=a.pb+1;573>b;b++){var t=a.Z[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ja[p]++;var x=0;t>=l&&(x=f[t-l]);var z=g[2*t];a.Oa+=z*(p+x);e&&(a.yb+=z*(d[2*t+1]+x))}}if(0!==r){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ja[p];0!==t;)d=a.Z[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Rj(c,h,a.Ja)}
function Zj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ak(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Pj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Pj(a,l,a.ia),g--),Pj(a,16,a.ia),Oj(a,g-3,2)):10>=g?(Pj(a,17,a.ia),Oj(a,g-3,3)):(Pj(a,18,a.ia),Oj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function bk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var ck=!1;function dk(a,b,c){a.X[a.Cb+2*a.ya]=b>>>8&255;a.X[a.Cb+2*a.ya+1]=b&255;a.X[a.Dc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Fj[c]+256+1)]++,a.bb[2*(256>b?Ej[b]:Ej[256+(b>>>7)])]++);return a.ya===a.Hb-1}
;function ek(a,b){a.msg=wj[b];return b}
function fk(a){for(var b=a.length;0<=--b;)a[b]=0}
function gk(a){var b=a.state,c=b.pending;c>a.P&&(c=a.P);0!==c&&(M.mb(a.output,b.X,b.Kb,c,a.vb),a.vb+=c,b.Kb+=c,a.Qc+=c,a.P-=c,b.pending-=c,0===b.pending&&(b.Kb=0))}
function hk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.J.uc&&(a.J.uc=bk(a));Yj(a,a.fc);Yj(a,a.Yb);Zj(a,a.ra,a.fc.ub);Zj(a,a.bb,a.Yb.ub);Yj(a,a.Wc);for(e=18;3<=e&&0===a.ia[2*Bj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Oj(a,b?1:0,3),Uj(a,c,d);else if(4===a.strategy||g===f)Oj(a,2+(b?1:0),3),Xj(a,Cj,Dj);else{Oj(a,4+(b?1:0),3);c=a.fc.ub+1;d=a.Yb.ub+1;e+=1;Oj(a,c-257,5);Oj(a,d-1,5);Oj(a,e-4,4);for(f=0;f<e;f++)Oj(a,a.ia[2*
Bj[f]+1],3);ak(a,a.ra,c-1);ak(a,a.bb,d-1);Xj(a,a.ra,a.bb)}Sj(a);b&&Tj(a);a.va=a.o;gk(a.J)}
function P(a,b){a.X[a.pending++]=b}
function ik(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function jk(a,b){var c=a.od,d=a.o,e=a.xa,f=a.pd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Xa,l=a.Ha,n=a.o+258,p=h[d+e-1],r=h[d+e];a.xa>=a.hd&&(c>>=2);f>a.v&&(f=a.v);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.tb=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.v?e:a.v}
function kk(a){var b=a.ka,c;do{var d=a.Jd-a.v-a.o;if(a.o>=b+(b-262)){M.mb(a.window,a.window,b,b,0);a.tb-=b;a.o-=b;a.va-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.J.la)break;e=a.J;c=a.window;f=a.o+a.v;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,M.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=qj(e.H,c,g,f):2===e.state.wrap&&(e.H=rj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.v+=c;if(3<=a.v+a.sa)for(d=a.o-a.sa,a.M=a.window[d],
a.M=(a.M<<a.La^a.window[d+1])&a.Ka;a.sa&&!(a.M=(a.M<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Xa]=a.head[a.M],a.head[a.M]=d,d++,a.sa--,3>a.v+a.sa););}while(262>a.v&&0!==a.J.la)}
function lk(a,b){for(var c;;){if(262>a.v){kk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=jk(a,c));if(3<=a.R)if(c=dk(a,a.o-a.tb,a.R-3),a.v-=a.R,a.R<=a.Fc&&3<=a.v){a.R--;do a.o++,a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.M=a.window[a.o],a.M=(a.M<<a.La^a.window[a.o+1])&a.Ka;else c=dk(a,0,
a.window[a.o]),a.v--,a.o++;if(c&&(hk(a,!1),0===a.J.P))return 1}a.sa=2>a.o?a.o:2;return 4===b?(hk(a,!0),0===a.J.P?3:4):a.ya&&(hk(a,!1),0===a.J.P)?1:2}
function mk(a,b){for(var c,d;;){if(262>a.v){kk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);a.xa=a.R;a.sd=a.tb;a.R=2;0!==c&&a.xa<a.Fc&&a.o-c<=a.ka-262&&(a.R=jk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.tb)&&(a.R=2));if(3<=a.xa&&a.R<=a.xa){d=a.o+a.v-3;c=dk(a,a.o-1-a.sd,a.xa-3);a.v-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);
while(0!==--a.xa);a.fb=0;a.R=2;a.o++;if(c&&(hk(a,!1),0===a.J.P))return 1}else if(a.fb){if((c=dk(a,0,a.window[a.o-1]))&&hk(a,!1),a.o++,a.v--,0===a.J.P)return 1}else a.fb=1,a.o++,a.v--}a.fb&&(dk(a,0,a.window[a.o-1]),a.fb=0);a.sa=2>a.o?a.o:2;return 4===b?(hk(a,!0),0===a.J.P?3:4):a.ya&&(hk(a,!1),0===a.J.P)?1:2}
function nk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.v){kk(a);if(258>=a.v&&0===b)return 1;if(0===a.v)break}a.R=0;if(3<=a.v&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.v&&(a.R=a.v)}3<=a.R?(c=dk(a,1,a.R-3),a.v-=a.R,a.o+=a.R,a.R=0):(c=dk(a,0,a.window[a.o]),a.v--,a.o++);if(c&&(hk(a,!1),0===a.J.P))return 1}a.sa=0;return 4===b?(hk(a,!0),0===a.J.P?3:4):
a.ya&&(hk(a,!1),0===a.J.P)?1:2}
function ok(a,b){for(var c;;){if(0===a.v&&(kk(a),0===a.v)){if(0===b)return 1;break}a.R=0;c=dk(a,0,a.window[a.o]);a.v--;a.o++;if(c&&(hk(a,!1),0===a.J.P))return 1}a.sa=0;return 4===b?(hk(a,!0),0===a.J.P?3:4):a.ya&&(hk(a,!1),0===a.J.P)?1:2}
function pk(a,b,c,d,e){this.le=a;this.ye=b;this.Ce=c;this.xe=d;this.ge=e}
var qk;qk=[new pk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.v){kk(a);if(0===a.v&&0===b)return 1;if(0===a.v)break}a.o+=a.v;a.v=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.v=a.o-d,a.o=d,hk(a,!1),0===a.J.P)return 1;if(a.o-a.va>=a.ka-262&&(hk(a,!1),0===a.J.P))return 1}a.sa=0;if(4===b)return hk(a,!0),0===a.J.P?3:4;a.o>a.va&&hk(a,!1);return 1}),
new pk(4,4,8,4,lk),new pk(4,5,16,8,lk),new pk(4,6,32,32,lk),new pk(4,4,16,16,mk),new pk(8,16,32,32,mk),new pk(8,16,128,128,mk),new pk(8,32,128,256,mk),new pk(32,128,258,1024,mk),new pk(32,258,258,4096,mk)];
function rk(){this.J=null;this.status=0;this.X=null;this.wrap=this.pending=this.Kb=this.za=0;this.G=null;this.Ca=0;this.method=8;this.rb=-1;this.Xa=this.Sc=this.ka=0;this.window=null;this.Jd=0;this.head=this.Ha=null;this.pd=this.hd=this.strategy=this.level=this.Fc=this.od=this.xa=this.v=this.tb=this.o=this.fb=this.sd=this.R=this.va=this.La=this.Ka=this.Ac=this.ec=this.M=0;this.ra=new M.Ia(1146);this.bb=new M.Ia(122);this.ia=new M.Ia(78);fk(this.ra);fk(this.bb);fk(this.ia);this.Wc=this.Yb=this.fc=
null;this.Ja=new M.Ia(16);this.Z=new M.Ia(573);fk(this.Z);this.pb=this.Ma=0;this.depth=new M.Ia(573);fk(this.depth);this.ga=this.ma=this.sa=this.matches=this.yb=this.Oa=this.Cb=this.ya=this.Hb=this.Dc=0}
function sk(a,b){if(!a||!a.state||5<b||0>b)return a?ek(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return ek(a,0===a.P?-5:-2);c.J=a;var d=c.rb;c.rb=b;if(42===c.status)if(2===c.wrap)a.H=0,P(c,31),P(c,139),P(c,8),c.G?(P(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),P(c,c.G.time&255),P(c,c.G.time>>8&255),P(c,c.G.time>>16&255),P(c,c.G.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(P(c,c.G.extra.length&255),P(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=rj(a.H,c.X,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Sc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ik(c,e+(31-e%31));0!==c.o&&(ik(c,a.H>>>16),ik(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=rj(a.H,c.X,c.pending-e,e)),gk(a),e=c.pending,c.pending!==c.za));)P(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=rj(a.H,c.X,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=rj(a.H,c.X,c.pending-e,e)),gk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=rj(a.H,c.X,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=rj(a.H,c.X,c.pending-e,e)),gk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=rj(a.H,c.X,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&gk(a),c.pending+2<=c.za&&(P(c,a.H&
255),P(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(gk(a),0===a.P)return c.rb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ek(a,-5);if(666===c.status&&0!==a.la)return ek(a,-5);if(0!==a.la||0!==c.v||0!==b&&666!==c.status){d=2===c.strategy?ok(c,b):3===c.strategy?nk(c,b):qk[c.level].ge(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.P&&(c.rb=-1),0;if(2===d&&(1===b?(Oj(c,2,3),Pj(c,256,Cj),16===c.ga?(Nj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.X[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Oj(c,0,3),Uj(c,0,0),3===b&&(fk(c.head),0===c.v&&(c.o=0,c.va=0,c.sa=0))),gk(a),0===a.P))return c.rb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.H&255),P(c,a.H>>8&255),P(c,a.H>>16&255),P(c,a.H>>24&255),P(c,a.kb&255),P(c,a.kb>>8&255),P(c,a.kb>>16&255),P(c,a.kb>>24&255)):(ik(c,a.H>>>16),ik(c,a.H&65535));gk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var tk={};tk=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Qc=this.P=this.vb=0;this.msg="";this.state=null;this.uc=2;this.H=0};var uk=Object.prototype.toString;
function vk(a){if(!(this instanceof vk))return new vk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.J=new tk;this.J.P=0;var b=this.J;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ek(b,-2);else{8===e&&(e=9);var k=new rk;b.state=k;k.J=b;k.wrap=h;k.G=null;k.Sc=e;k.ka=1<<k.Sc;k.Xa=k.ka-1;k.Ac=f+7;k.ec=1<<k.Ac;k.Ka=k.ec-1;k.La=~~((k.Ac+3-1)/3);k.window=new M.lb(2*k.ka);k.head=new M.Ia(k.ec);k.Ha=new M.Ia(k.ka);k.Hb=1<<f+6;k.za=4*k.Hb;k.X=new M.lb(k.za);k.Cb=1*k.Hb;k.Dc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Qc=0;b.uc=2;c=b.state;c.pending=0;c.Kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.rb=0;if(!ck){d=Array(16);for(f=g=0;28>f;f++)for(Gj[f]=g,e=0;e<1<<yj[f];e++)Fj[g++]=f;Fj[g-1]=f;for(f=g=0;16>f;f++)for(Hj[f]=g,e=0;e<1<<zj[f];e++)Ej[g++]=f;for(g>>=7;30>f;f++)for(Hj[f]=g<<7,e=0;e<1<<zj[f]-7;e++)Ej[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Cj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Cj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Cj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Cj[2*e+1]=8,e++,d[8]++;Rj(Cj,287,d);for(e=0;30>e;e++)Dj[2*e+1]=5,Dj[2*e]=Qj(e,5);Jj=new Ij(Cj,yj,257,286,15);Kj=new Ij(Dj,
zj,0,30,15);Lj=new Ij([],Aj,0,19,7);ck=!0}c.fc=new Mj(c.ra,Jj);c.Yb=new Mj(c.bb,Kj);c.Wc=new Mj(c.ia,Lj);c.ma=0;c.ga=0;Sj(c);c=0}else c=ek(b,-2);0===c&&(b=b.state,b.Jd=2*b.ka,fk(b.head),b.Fc=qk[b.level].ye,b.hd=qk[b.level].le,b.pd=qk[b.level].Ce,b.od=qk[b.level].xe,b.o=0,b.va=0,b.v=0,b.sa=0,b.R=b.xa=2,b.fb=0,b.M=0);b=c}}else b=-2;if(0!==b)throw Error(wj[b]);a.header&&(b=this.J)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=pj(a.dictionary):
"[object ArrayBuffer]"===uk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.J;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.v)b=-2;else{1===b&&(a.H=qj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(fk(l.head),l.o=0,l.va=0,l.sa=0),c=new M.lb(l.ka),M.mb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(kk(l);3<=l.v;){f=l.o;g=l.v-2;do l.M=(l.M<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Xa]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.v=2;kk(l)}l.o+=l.v;l.va=l.o;l.sa=l.v;l.v=0;l.R=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(wj[b]);this.Sf=!0}}
vk.prototype.push=function(a,b){var c=this.J,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=pj(a):"[object ArrayBuffer]"===uk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.P&&(c.output=new M.lb(d),c.vb=0,c.P=d);a=sk(c,e);if(1!==a&&0!==a)return wk(this,a),this.ended=!0,!1;if(0===c.P||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=M.Pc(c.output,c.vb);b=f;f=f.length;if(65537>f&&(b.subarray&&oj||!b.subarray))b=
String.fromCharCode.apply(null,M.Pc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Pc(c.output,c.vb),this.chunks.push(b)}while((0<c.la||0===c.P)&&1!==a);if(4===e)return(c=this.J)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ek(c,-2):(c.state=null,a=113===d?ek(c,-3):0)):a=-2,wk(this,a),this.ended=!0,0===a;2===e&&(wk(this,0),c.P=0);return!0};
function wk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.ed(a.chunks));a.chunks=[];a.err=b;a.msg=a.J.msg}
function xk(a,b){b=b||{};b.gzip=!0;b=new vk(b);b.push(a,!0);if(b.err)throw b.msg||wj[b.err];return b.result}
;function yk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function zk(a){return mb(null===a?"null":void 0===a?"undefined":a)}
;function Ak(a){this.name=a}
;var Bk=new Ak("rawColdConfigGroup");var Ck=new Ak("rawHotConfigGroup");function Dk(a){this.F=I(a)}
w(Dk,K);var Ek=new Ak("continuationCommand");var Fk=new Ak("webCommandMetadata");var Gk=new Ak("signalServiceEndpoint");var Hk={Ef:"EMBEDDED_PLAYER_MODE_UNKNOWN",Bf:"EMBEDDED_PLAYER_MODE_DEFAULT",Df:"EMBEDDED_PLAYER_MODE_PFP",Cf:"EMBEDDED_PLAYER_MODE_PFL"};var Ik=new Ak("feedbackEndpoint");function Jk(a){this.F=I(a)}
w(Jk,K);Jk.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new df(a,af):bf||(bf=new df(null,af));else if(a.constructor!==df)if($e(a))a=a.length?new df(new Uint8Array(a),af):bf||(bf=new df(null,af));else throw Error();return lg(this,1,a)};var Kk=new Ak("webPlayerShareEntityServiceEndpoint");var Lk=new Ak("playlistEditEndpoint");var Mk=new Ak("modifyChannelNotificationPreferenceEndpoint");var Nk=new Ak("unsubscribeEndpoint");var Ok=new Ak("subscribeEndpoint");function Pk(){var a=Qk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Rk(a){D("yt.ads.biscotti.lastId_",a)}
;function Sk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Tk=C.window,Uk,Vk,Wk=(null==Tk?void 0:null==(Uk=Tk.yt)?void 0:Uk.config_)||(null==Tk?void 0:null==(Vk=Tk.ytcfg)?void 0:Vk.data_)||{};D("yt.config_",Wk);function Xk(){Sk(Wk,arguments)}
function S(a,b){return a in Wk?Wk[a]:b}
function Yk(a){var b=Wk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Zk=[];function $k(a){Zk.forEach(function(b){return b(a)})}
function al(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){bl(b)}}:a}
function bl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Xk("ERRORS",b));$k(a)}
function cl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Xk("ERRORS",f))}
;var dl=/^[\w.]*$/,el={q:!0,search_query:!0};function fl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=gl(f[0]||""),h=gl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(fl);l.args=[{key:n,value:f[1],query:a,method:hl===p?"unchanged":p}];el.hasOwnProperty(n)||cl(l)}}return c}
var hl=String(fl);function il(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function jl(a){"?"===a.charAt(0)&&(a=a.substring(1));return fl(a,"&")}
function kl(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),jl(1<a.length?a[1]:a[0])):{}}
function ll(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ec(a,e)+d}
function ml(a){if(!b)var b=window.location.href;var c=yc(1,a),d=zc(a);c&&d?(a=a.match(wc),b=b.match(wc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?zc(b)===d&&(Number(yc(4,b))||null)===(Number(yc(4,a))||null):!0;return a}
function gl(a){return a&&a.match(dl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function nl(a){var b=ol;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ti;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ha){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?li:g;try{var h=g.history.length}catch(Ha){h=0}e.u_his=h;var k;e.u_h=null==(k=li.screen)?void 0:k.height;var l;e.u_w=null==(l=li.screen)?void 0:l.width;var n;e.u_ah=null==(n=li.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=li.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=li.screen)?void 0:r.colorDepth}catch(Ha){}h=b.h;try{var t=h.screenX;var x=h.screenY}catch(Ha){}try{var z=h.outerWidth;var y=h.outerHeight}catch(Ha){}try{var J=h.innerWidth;var G=h.innerHeight}catch(Ha){}try{var R=h.screenLeft;var N=h.screenTop}catch(Ha){}try{J=h.innerWidth,G=h.innerHeight}catch(Ha){}try{var da=h.screen.availWidth;var Ca=h.screen.availTop}catch(Ha){}t=[R,N,t,x,da,Ca,z,y,J,G];try{var O=(b.h.top||window).document,ea="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var ka=(new Od(ea.clientWidth,ea.clientHeight)).round()}catch(Ha){ka=new Od(-12245933,-12245933)}O=ka;ka={};var pa=void 0===pa?C:pa;ea=new zi;"SVGElement"in pa&&"createElementNS"in pa.document&&ea.set(0);x=qi();x["allow-top-navigation-by-user-activation"]&&ea.set(1);x["allow-popups-to-escape-sandbox"]&&ea.set(2);pa.crypto&&pa.crypto.subtle&&ea.set(3);"TextDecoder"in pa&&"TextEncoder"in pa&&ea.set(4);pa=Ai(ea);ka.bc=pa;ka.bih=O.height;ka.biw=O.width;ka.brdim=t.join();
b=b.i;b=(ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ka.wgl=!!li.WebGLRenderingContext,ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ol=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return il(nl(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var pl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ql(){if(!pl)return null;var a=pl();return"open"in a?a:null}
function rl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sl(a,b){"function"===typeof a&&(a=al(a));return window.setTimeout(a,b)}
;var tl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(tl),["client_dev_set_cookie"]);function T(a){a=ul(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=ul(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ul(a){return S("EXPERIMENT_FLAGS",{})[a]}
function vl(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var wl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},xl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(tl)),yl=!1;
function zl(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&al(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ql();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Al(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Bl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){cl(p)}}l.send(d);return l}
function Bl(a,b){b=void 0===b?{}:b;var c=ml(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in wl){var f=S(wl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&zc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!zc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!zc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&zc(a)||(b["X-YouTube-Ad-Signals"]=il(nl()));return b}
function Cl(a,b){b.method="POST";b.postParams||(b.postParams={});return Dl(a,b)}
function Dl(a,b){var c=b.format||"JSON";a=El(a,b);var d=Fl(a,b),e=!1,f=Gl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=rl(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Hl(a,c,k,b.convertToSafeHtml);l&&(l=Il(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=sl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function El(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ll(a,b||{},!0);return a}
function Fl(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||zc(a)&&!b.withCredentials&&zc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=jl(e),Ub(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):Dc(e));f=e||f&&!Nb(f);!yl&&f&&"POST"!==b.method&&(yl=!0,bl(Error("AJAX request with postData should use POST")));return e}
function Hl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,cl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Jl(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Kl(g)})}d&&Ll(e);
return e}
function Ll(a){if(Ra(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new fc(d)}else Ll(a[b])}}
function Il(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Jl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Kl(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Al(a){var b=window.location.search,c=zc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ml(a)&&(c=document.location.hostname);var d=xc(yc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jl(b),f={};Db(xl,function(g){e[g]&&(f[g]=e[g])});
return ll(a,f||{},!1)}
var Gl=zl;var Ml=[{Gc:function(a){return"Cannot read property '"+a.key+"'"},
ic:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Gc:function(a){return"Cannot call '"+a.key+"'"},
ic:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Gc:function(a){return a.key+" is not defined"},
ic:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ol={Ta:[],Qa:[{callback:Nl,weight:500}]};function Nl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Pl(){this.Qa=[];this.Ta=[]}
var Ql;function Rl(){if(!Ql){var a=Ql=new Pl;a.Ta.length=0;a.Qa.length=0;Ol.Ta&&a.Ta.push.apply(a.Ta,Ol.Ta);Ol.Qa&&a.Qa.push.apply(a.Qa,Ol.Qa)}return Ql}
;var Sl=new L;function Tl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ul(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ul(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ul(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ul(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Vl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Wl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Tl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Wl(f+".ve",g,h,k):0;d+=f;d+=Wl(e,a[e],b,c);if(500<d)break}}else c[b]=Xl(a),d+=c[b].length;else c[b]=Xl(a),d+=c[b].length;return d}
function Wl(a,b,c,d){c+="."+a;a=Xl(b);d[c]=a;return c.length+a.length}
function Xl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Yl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Zl(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function $l(){this.ef=!0}
function am(){$l.h||($l.h=new $l);return $l.h}
function bm(a,b){a={};var c=Zg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Wk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Wk&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var cm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function dm(a,b,c,d,e){Vg.set(""+a,b,{Jb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function em(a){return Vg.get(""+a,void 0)}
function fm(a,b,c){Vg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function gm(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Vg.isEnabled())return!1;if(Vg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?Vg.set("TESTCOOKIESENABLED","1",{Jb:60,Pe:"none",secure:!0}):Vg.set("TESTCOOKIESENABLED","1",{Jb:60});if("1"!==Vg.get("TESTCOOKIESENABLED"))return!1;Vg.remove("TESTCOOKIESENABLED");return!0}
;var hm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",hm);function im(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=em(this.h);a&&this.parse(a)}
var jm;function km(){jm||(jm=new im);return jm}
m=im.prototype;m.get=function(a,b){lm(a);mm(a);a=void 0!==hm[a]?hm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){lm(a);mm(a);if(null==b)throw Error("ExpectedNotNull");hm[a]=b.toString()};
function nm(a){return!!((om("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){lm(a);mm(a);delete hm[a]};
m.clear=function(){for(var a in hm)delete hm[a]};
function mm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function lm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function om(a){a=void 0!==hm[a]?hm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(hm[d]=c.toString())}};var pm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},qm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function rm(){var a=C.navigator;return a?a.connection:void 0}
function sm(){var a=rm();if(a){var b=pm[a.type||"unknown"]||"CONN_UNKNOWN";a=pm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function tm(){var a=rm();if(null!=a&&a.effectiveType)return qm.hasOwnProperty(a.effectiveType)?qm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
w(V,Error);function um(){try{return wm(),!0}catch(a){return!1}}
function wm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function xm(){}
function ym(a,b){return yi.ab(a,0,b)}
xm.prototype.pa=function(a,b){return this.ab(a,1,b)};
xm.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var zm=U("web_emulated_idle_callback_delay",300),Am=1E3/60-3,Bm=[8,5,4,3,2,1,0];
function Cm(a){a=void 0===a?{}:a;H.call(this);this.i=[];this.j={};this.da=this.h=0;this.Y=this.m=!1;this.I=[];this.U=this.fa=!1;for(var b=v(Bm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.qc=a.timeout||1;this.D=Am;this.u=0;this.ta=this.Ee.bind(this);this.pc=this.hf.bind(this);this.Pa=this.Pd.bind(this);this.Za=this.me.bind(this);this.Qb=this.He.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ha=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ta)}
w(Cm,H);m=Cm.prototype;m.Ab=function(a){var b=Za();Dm(this,a);a=Za()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.da;if(10===b)return this.Ab(a),this.da;var d=this.da;this.j[d]=a;this.m&&!c?this.I.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.m||(0!==this.h&&Em(this)!==this.u&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function Fm(a){a.I.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Gm(a){return!a.isHidden()&&a.ha}
function Em(a){if(a.i[8].length){if(a.U)return 4;if(Gm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Gm(a)?3:2:1;return 0}
m.Ib=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Dm(a,b){try{b()}catch(c){a.Ib(c)}}
function Hm(a){for(var b=v(Bm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.me=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fa=!0;Im(this,b);this.fa=!1};
m.hf=function(){Im(this)};
m.Pd=function(){Jm(this)};
m.He=function(a){this.U=!0;var b=Em(this);4===b&&b!==this.u&&(this.stop(),this.start());Im(this,void 0,a);this.U=!1};
m.Ee=function(){this.isHidden()||Jm(this);this.h&&(this.stop(),this.start())};
function Jm(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Dm(a,e)}Km(a);a.m=!1;Hm(a)&&a.start();b=Za()-b;a.D-=b}
function Km(a){for(var b=0,c=a.I.length;b<c;b++){var d=a.I[b];a.i[d.priority].push(d.id)}a.I.length=0}
function Im(a,b,c){a.U&&4===a.u&&a.h||a.stop();a.m=!0;b=Za()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ib(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Dm(a,f);d=a.fa?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Dm(a,c)}while(c&&Za()<b)}a.m=!1;Km(a);a.D=Am;Hm(a)&&a.start()}
m.start=function(){this.Y=!1;if(0===this.h)switch(this.u=Em(this),this.u){case 1:var a=this.Za;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,zm);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
m.pause=function(){this.stop();this.Y=!0};
m.stop=function(){if(this.h){switch(this.u){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Fm(this);this.stop();this.ha&&document.removeEventListener("visibilitychange",this.ta);H.prototype.S.call(this)};var Lm=E("yt.scheduler.instance.timerIdMap_")||{},Mm=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Nm=0,Om=0;function Pm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.T)a=new Cm(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Qm(){Rm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Nc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Rm(){Fm(Pm());for(var a in Lm)Lm.hasOwnProperty(a)&&delete Lm[Number(a)]}
function Sm(a,b,c){if(!c)return c=void 0===c,-Pm().ab(a,b,c);var d=window.setTimeout(function(){var e=Pm().ab(a,b);Lm[d]=e},c);
return d}
function Tm(a){Pm().Ab(a)}
function Um(a){var b=Pm();if(0>a)b.qa(-a);else{var c=Lm[a];c?(b.qa(c),delete Lm[a]):window.clearTimeout(a)}}
function Vm(){Wm()}
function Wm(){window.clearTimeout(Nm);Pm().start()}
function Xm(){Pm().pause();window.clearTimeout(Nm);Nm=window.setTimeout(Vm,Mm)}
function Ym(){window.clearTimeout(Om);Om=window.setTimeout(function(){Zm(0)},Mm)}
function Zm(a){Ym();var b=Pm();b.l=a;b.start()}
function $m(a){Ym();var b=Pm();b.l>a&&(b.l=a,b.start())}
function an(){window.clearTimeout(Om);var a=Pm();a.l=0;a.start()}
;function bn(){xm.apply(this,arguments)}
w(bn,xm);function cn(){bn.h||(bn.h=new bn);return bn.h}
bn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):sl(a,c||0)};
bn.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
bn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
bn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var yi=cn();
T("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Qm),D("yt.scheduler.instance.addJob",Sm),D("yt.scheduler.instance.addImmediateJob",Tm),D("yt.scheduler.instance.cancelJob",Um),D("yt.scheduler.instance.cancelAllJobs",Rm),D("yt.scheduler.instance.start",Wm),D("yt.scheduler.instance.pause",Xm),D("yt.scheduler.instance.setPriorityThreshold",Zm),D("yt.scheduler.instance.enablePriorityThreshold",$m),D("yt.scheduler.instance.clearPriorityThreshold",an),D("yt.scheduler.initialized",
!0));function dn(a){var b=new aj;(b=b.isAvailable()?a?new kj(b,a):b:null)||(a=new fj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Wi(a):null;this.i=document.domain||window.location.hostname}
dn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Jh).serialize(b))}catch(f){return}else e=escape(b);dm(a,e,c,this.i)};
dn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=em(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
dn.prototype.remove=function(a){this.h&&this.h.remove(a);fm(a,"/",this.i)};var en=function(){var a;return function(){a||(a=new dn("ytidb"));return a}}();
function fn(){var a;return null==(a=en())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var gn=[],hn,jn=!1;function kn(){var a={};for(hn=new ln(void 0===a.handleError?mn:a.handleError,void 0===a.logEvent?nn:a.logEvent);0<gn.length;)switch(a=gn.shift(),a.type){case "ERROR":hn.Ib(a.payload);break;case "EVENT":hn.logEvent(a.eventType,a.payload)}}
function on(a){jn||(hn?hn.Ib(a):(gn.push({type:"ERROR",payload:a}),10<gn.length&&gn.shift()))}
function pn(a,b){jn||(hn?hn.logEvent(a,b):(gn.push({type:"EVENT",eventType:a,payload:b}),10<gn.length&&gn.shift()))}
;function qn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function rn(a){return a.substr(0,a.indexOf(":"))||a}
;var sn=Le||Me;function tn(a){var b=Xb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var un={},vn=(un.AUTH_INVALID="No user identifier specified.",un.EXPLICIT_ABORT="Transaction was explicitly aborted.",un.IDB_NOT_SUPPORTED="IndexedDB is not supported.",un.MISSING_INDEX="Index not created.",un.MISSING_OBJECT_STORES="Object stores not created.",un.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",un.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",un.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
un.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",un.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",un.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",un.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",un),wn={},xn=(wn.AUTH_INVALID="ERROR",wn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",wn.EXPLICIT_ABORT="IGNORED",wn.IDB_NOT_SUPPORTED="ERROR",wn.MISSING_INDEX=
"WARNING",wn.MISSING_OBJECT_STORES="ERROR",wn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",wn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",wn.QUOTA_EXCEEDED="WARNING",wn.QUOTA_MAYBE_EXCEEDED="WARNING",wn.UNKNOWN_ABORT="WARNING",wn.INCOMPATIBLE_DB_VERSION="WARNING",wn),yn={},zn=(yn.AUTH_INVALID=!1,yn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,yn.EXPLICIT_ABORT=!1,yn.IDB_NOT_SUPPORTED=!1,yn.MISSING_INDEX=!1,yn.MISSING_OBJECT_STORES=!1,yn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,yn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,yn.QUOTA_EXCEEDED=!1,yn.QUOTA_MAYBE_EXCEEDED=!0,yn.UNKNOWN_ABORT=!0,yn.INCOMPATIBLE_DB_VERSION=!1,yn);function An(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?vn[a]:c;d=void 0===d?xn[a]:d;e=void 0===e?zn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,An.prototype)}
w(An,V);function Bn(a,b){An.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},vn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Bn.prototype)}
w(Bn,An);function Cn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Cn.prototype)}
w(Cn,Error);var Dn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function En(a,b,c,d){b=rn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof An)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new An("QUOTA_EXCEEDED",a);if(Ne&&"UnknownError"===e.name)return new An("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Cn)return new An("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Dn.some(function(f){return e.message.includes(f)}))return new An("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new An("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",rd:e.name})];e.level="WARNING";return e}
function Fn(a,b,c){var d=fn();return new An("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Gn(a){if(!a)throw Error();throw a;}
function Hn(a){return a}
function In(a){this.h=a}
function Jn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Jn.all=function(a){return new Jn(new In(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={qb:0};f.qb<a.length;f={qb:f.qb},++f.qb)Jn.resolve(a[f.qb]).then(function(g){return function(h){d[g.qb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Jn.resolve=function(a){return new Jn(new In(function(b,c){a instanceof Jn?a.then(b,c):b(a)}))};
Jn.reject=function(a){return new Jn(new In(function(b,c){c(a)}))};
Jn.prototype.then=function(a,b){var c=this,d=null!=a?a:Hn,e=null!=b?b:Gn;return new Jn(new In(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Kn(c,c,d,f,g)}),c.i.push(function(){Ln(c,c,e,f,g)})):"FULFILLED"===c.state.status?Kn(c,c,d,f,g):"REJECTED"===c.state.status&&Ln(c,c,e,f,g)}))};
Jn.prototype.catch=function(a){return this.then(void 0,a)};
function Kn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Jn?Mn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ln(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Jn?Mn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Mn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Jn?Mn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Nn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function On(a){return new Promise(function(b,c){Nn(a,b,c)})}
function Pn(a){return new Jn(new In(function(b,c){Nn(a,b,c)}))}
;function Qn(a,b){return new Jn(new In(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Rn=window,W=Rn.ytcsi&&Rn.ytcsi.now?Rn.ytcsi.now:Rn.performance&&Rn.performance.timing&&Rn.performance.now&&Rn.performance.timing.navigationStart?function(){return Rn.performance.timing.navigationStart+Rn.performance.now()}:function(){return(new Date).getTime()};function Sn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Sn.prototype;m.add=function(a,b,c){return Tn(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Tn(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Tn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function Un(a,b,c){a=a.h.createObjectStore(b,c);return new Vn(a)}
m.delete=function(a,b){return Tn(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Tn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function Wn(a,b,c){return Tn(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Pn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Tn(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,x,z;return A(function(y){switch(y.h){case 1:var J={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){y.A(4);break}g++;k=Math.round(W());Aa(y,5);l=a.h.transaction(b,e.mode);J=y.yield;var G=new Xn(l);G=Yn(G,d);return J.call(y,G,7);case 7:return n=y.i,p=Math.round(W()),Zn(a,k,p,g,void 0,b.join(),e),y.return(n);case 5:r=Ba(y);t=Math.round(W());x=En(r,
a.h.name,b.join(),a.h.version);if((z=x instanceof An&&!x.h)||g>=f)Zn(a,k,t,g,x,b.join(),e),h=x;y.A(2);break;case 4:return y.return(Promise.reject(h))}})}
function Zn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof An&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&pn("QUOTA_EXCEEDED",{dbName:rn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof An&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),pn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),$n(a,!1,d,f,b,g.tag),on(e)):$n(a,!0,d,f,b,g.tag)}
function $n(a,b,c,d,e,f){pn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Vn(a){this.h=a}
m=Vn.prototype;m.add=function(a,b){return Pn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Pn(this.h.clear()).then(function(){})};
function ao(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Pn(this.h.count(a))};
function bo(a,b){return co(a,{query:b},function(c){return c.delete().then(function(){return eo(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?bo(this,a):Pn(this.h.delete(a))};
m.get=function(a){return Pn(this.h.get(a))};
m.index=function(a){try{return new fo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Cn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function co(a,b,c){a=a.h.openCursor(b.query,b.direction);return go(a).then(function(d){return Qn(d,c)})}
function Xn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=An;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Yn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Xn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new An("EXPLICIT_ABORT");};
Xn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Vn(a),this.i.set(a,b));return b};
function fo(a){this.h=a}
m=fo.prototype;m.count=function(a){return Pn(this.h.count(a))};
m.delete=function(a){return ho(this,{query:a},function(b){return b.delete().then(function(){return eo(b)})})};
m.get=function(a){return Pn(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ho(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return go(a).then(function(d){return Qn(d,c)})}
function io(a,b){this.request=a;this.cursor=b}
function go(a){return Pn(a).then(function(b){return b?new io(a,b):null})}
function eo(a){a.cursor.continue(void 0);return go(a.request)}
io.prototype.delete=function(){return Pn(this.cursor.delete()).then(function(){})};
io.prototype.getValue=function(){return this.cursor.value};
io.prototype.update=function(a){return Pn(this.cursor.update(a))};function jo(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Sn(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Rd,k=c.blocking,l=c.ff,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&pn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:rn(a)});var x=f(),z=new Xn(g.transaction);
n&&n(x,function(y){return t.oldVersion<y&&t.newVersion>=y},z);
z.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){pn("IDB_UNEXPECTEDLY_CLOSED",{dbName:rn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ko(a,b,c){c=void 0===c?{}:c;return jo(a,b,c)}
function lo(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Rd)&&c.addEventListener("blocked",function(){e()}),g.yield(On(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),En(f,a,"",-1);})}
;function mo(a,b){this.name=a;this.options=b;this.j=!0;this.B=this.l=0}
mo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ko(a,b,c)};
mo.prototype.delete=function(a){a=void 0===a?{}:a;return lo(this.name,a)};
function no(a,b){return new An("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function oo(a,b){if(!b)throw Fn("openWithToken",rn(a.name));return a.open()}
mo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,x;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=z.i,J=c.options,G=[],R=v(Object.keys(J.wb)),N=R.next();!N.done;N=R.next()){N=N.value;var da=J.wb[N],Ca=void 0===da.Ke?Number.MAX_VALUE:da.Ke;!(y.h.version>=da.Bb)||y.h.version>=Ca||y.h.objectStoreNames.contains(N)||G.push(N)}k=G;if(0===k.length){z.A(5);break}l=Object.keys(c.options.wb);
n=h.objectStoreNames();if(c.B<U("ytidb_reopen_db_retries",0))return c.B++,h.close(),on(new An("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){z.A(6);break}c.l++;return z.yield(c.delete(),7);case 7:return on(new An("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new Bn(n,l);case 5:return z.return(h);case 2:p=Ba(z);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.A(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,no(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),En(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw no(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,ff:b,upgrade:this.options.upgrade};return this.h=d=a()};var po=new mo("YtIdbMeta",{wb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&Un(a,"databases",{keyPath:"actualName"})}});
function qo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(oo(po,b),2);c=d.i;return d.return(Tn(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Pn(f.h.put(a,void 0)).then(function(){})})}))})}
function ro(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(oo(po,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function so(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(oo(po,b),2)):3!=e.h?(d=e.i,e.yield(Tn(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return co(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return eo(g)})}),3)):e.return(c)})}
function to(a){return so(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function uo(a,b,c){return so(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function vo(a){var b,c;return A(function(d){if(1==d.h)return b=wm("YtIdbMeta hasAnyMeta other"),d.yield(so(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var wo,xo=new function(){}(new function(){});
function yo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=fn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=sn)f=/WebKit\/([0-9]+)/.exec(Xb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Xb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Xc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(qo(d,xo),4);case 4:return e.yield(ro("yt-idb-test-do-not-use",xo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function zo(){if(void 0!==wo)return wo;jn=!0;return wo=yo().then(function(a){jn=!1;var b;if(null!=(b=en())&&b.h){var c;b={hasSucceededOnce:(null==(c=fn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=en())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ao(){return E("ytglobal.idbToken_")||void 0}
function Bo(){var a=Ao();return a?Promise.resolve(a):zo().then(function(b){(b=b?xo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Co=0;function Do(a,b){Co||(Co=yi.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Bo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(uo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(lo(f.actualName),7);case 7:return h.yield(ro(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),on(g),d=!1;case 4:yi.qa(Co),Co=0,d&&Do(a,b),h.h=0}})}))}
function Eo(){var a;return A(function(b){return 1==b.h?b.yield(Bo(),2):(a=b.i)?b.return(vo(a)):b.return(!1)})}
new ji;function Fo(a){if(!um())throw a=new An("AUTH_INVALID",{dbName:a}),on(a),a;var b=wm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Go(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Bo(),2);case 2:g=n.i;if(!g)throw h=Fn("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),on(h),h;qn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Fo(a);Aa(n,3);return n.yield(qo(k,g),5);case 5:return n.yield(ko(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(ro(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Ho(a,b,c){c=void 0===c?{}:c;return Go(a,b,!1,c)}
function Io(a,b,c){c=void 0===c?{}:c;return Go(a,b,!0,c)}
function Jo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Bo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();qn(a);d=Fo(a);return e.yield(lo(d.actualName,b),3)}return e.yield(ro(d.actualName,c),0)})}
function Ko(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(lo(d.actualName,b),2):e.yield(ro(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Lo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Bo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();qn("LogsDatabaseV2");return d.yield(to(b),3)}c=d.i;return d.yield(Ko(c,a,b),0)})}
function Mo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Bo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();qn(a);return d.yield(lo(a,b),3)}return d.yield(ro(a,c),0)})}
;function No(a,b){mo.call(this,a,b);this.options=b;qn(a)}
w(No,mo);function Oo(a,b){var c;return function(){c||(c=new No(a,b));return c}}
No.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.shared?Io:Ho)(a,b,Object.assign({},c))};
No.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.shared?Mo:Jo)(this.name,a)};
function Po(a,b){return Oo(a,b)}
;var Qo={},Ro=Po("ytGcfConfig",{wb:(Qo.coldConfigStore={Bb:1},Qo.hotConfigStore={Bb:1},Qo),shared:!1,upgrade:function(a,b){b(1)&&(ao(Un(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),ao(Un(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function So(a){return oo(Ro(),a)}
function To(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(So(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Wn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Uo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(So(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Wn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Vo(a){var b,c;return A(function(d){return 1==d.h?d.yield(So(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Tn(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return ho(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Wo(a){var b,c;return A(function(d){return 1==d.h?d.yield(So(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Tn(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return ho(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Xo(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Xo,H);Xo.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;H.prototype.S.call(this)};function Yo(){this.h=0;this.i=new Xo}
function Zo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:S("RAW_HOT_CONFIG_GROUP")}
function $o(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Ao();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(Wo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(To(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function ap(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Ao())?c?h.A(4):h.yield(Vo(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(Uo(c,b,g,d),0)})}
function bp(){if(!Yo.h){var a=new Yo;Yo.h=a}a=Yo.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Yo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function cp(){return"INNERTUBE_API_KEY"in Wk&&"INNERTUBE_API_VERSION"in Wk}
function dp(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ne:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),kd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ag:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:S("INNERTUBE_CONTEXT_HL"),oe:S("INNERTUBE_CONTEXT_GL"),qe:S("INNERTUBE_HOST_OVERRIDE")||"",se:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ep(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.kd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=vl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.kd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Zl()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=sm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=tm())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=bp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(jl(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function fp(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Tf:(a=bm(am()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var gp="undefined"!==typeof TextEncoder?new TextEncoder:null,hp=gp?function(a){return gp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ip(a,b){this.version=a;this.args=b}
ip.prototype.serialize=function(){return{version:this.version,args:this.args}};function jp(a,b){this.topic=a;this.h=b}
jp.prototype.toString=function(){return this.topic};var kp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.zb;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",kp);var lp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",lp);var mp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",mp);var np=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",np);
D("ytPubsub2Pubsub2SkipSubKey",null);function op(a,b){var c=pp();c&&c.publish.call(c,a.toString(),a,b)}
function qp(a){var b=rp,c=pp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(lp[d])try{if(f&&b instanceof jp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(y){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var x=Array(t);for(k=0;k<t;k++)x[k]=r[k];var z=x}else z=[];f=p.call(n,h,z)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){bl(y)}},np[b.toString()]?E("yt.scheduler.instance")?yi.pa(g):sl(g,0):g())});
lp[d]=!0;mp[b.toString()]||(mp[b.toString()]=[]);mp[b.toString()].push(d);return d}
function sp(){var a=tp,b=qp(function(c){a.apply(void 0,arguments);up(b)});
return b}
function up(a){var b=pp();b&&("number"===typeof a&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete lp[c]}))}
function pp(){return E("ytPubsub2Pubsub2Instance")}
;function vp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&op("meta_logging_csi_event",{timerName:a,qg:b})}
;var wp=void 0,xp=void 0;function yp(){xp||(xp=yk(S("WORKER_SERIALIZATION_URL")));return xp||void 0}
function zp(){var a=yp();wp||void 0===a||(wp=new Worker(kb(a),void 0));return wp}
;var Ap=U("max_body_size_to_compress",5E5),Bp=U("min_body_size_to_compress",500),Cp=!0,Dp=0,Ep=0,Fp=U("compression_performance_threshold_lr",250),Gp=U("slow_compressions_before_abandon_count",4),Hp=!1,Ip=new Map,Jp=1,Kp=!0;function Lp(){if("function"===typeof Worker&&yp()&&!Hp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Ip.get(c.key);d&&(Mp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Ip.delete(c.key))}},b=zp();
b&&(b.addEventListener("message",a),b.onerror=function(){Ip.clear()},Hp=!0)}}
function Np(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Cp)try{var g=Op(b);if(null!=g&&(g>Ap||g<Bp))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Kp||!T("initial_gzip_use_main_thread"))){Hp||Lp();var h=zp();if(h&&!e){Ip.set(Jp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Jp});Jp++;return}}var k=xk(hp(b));Mp(k,f,a,c,d)}}catch(l){cl(l),d(a,c)}else d(a,c)}
function Mp(a,b,c,d,e){Kp=!1;var f=W();b.ticks.gelc=f;Ep++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Fp&&(Dp++,T("abandon_compression_after_N_slow_zips")?Ep===U("compression_disable_point")&&Dp>Gp&&(Cp=!1):Cp=!1);Pp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Qp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Cp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Op(g);if(null!=h&&(h>Ap||h<Bp))return a;c=b?{level:1}:void 0;f=xk(hp(g),c);var k=W();e.ticks.gelc=k;if(b){Ep++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Fp)if(Dp++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Dp/Ep;var l=Gp/U("compression_disable_point");0<Ep&&0===Ep%U("compression_disable_point")&&b>=l&&(Cp=!1)}else Cp=!1;Pp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return cl(n),a}}else return a}
function Op(a){try{return(new Blob(a.split(""))).size}catch(b){return cl(b),null}}
function Pp(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||vp("gel_compression",a,{sampleRate:.1})}
;function Rp(a){a=Object.assign({},a);delete a.Authorization;var b=Zg();if(b){var c=new Ei;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Qe(c.digest(),3)}return a}
;var Sp;function Tp(){Sp||(Sp=new dn("yt.innertube"));return Sp}
function Up(a,b,c,d){if(d)return null;d=Tp().get("nextId",!0)||1;var e=Tp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Rp(c),requestTime:Math.round(W())};Tp().set("nextId",d+1,86400,!0);Tp().set("requests",e,86400,!0);return d}
function Vp(a){var b=Tp().get("requests",!0)||{};delete b[a];Tp().set("requests",b,86400,!0)}
function Wp(a){var b=Tp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Rp(fp(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Xp(a,d.method,e,{}));delete b[c]}}Tp().set("requests",b,86400,!0)}}
;function Yp(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ob=function(){};
this.now=Date.now;this.Eb=!1;var b;this.Ed=null!=(b=a.Ed)?b:100;var c;this.yd=null!=(c=a.yd)?c:1;var d;this.vd=null!=(d=a.vd)?d:2592E6;var e;this.td=null!=(e=a.td)?e:12E4;var f;this.xd=null!=(f=a.xd)?f:5E3;var g;this.V=null!=(g=a.V)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.kc=null!=(k=a.kc)?k:10;a.handleError&&(this.handleError=a.handleError);a.ob&&(this.ob=a.ob);a.Eb&&(this.Eb=a.Eb);a.Ub&&(this.Ub=a.Ub);this.W=a.W;this.Da=a.Da;this.ea=a.ea;this.ba=a.ba;this.sendFn=a.sendFn;
this.Mc=a.Mc;this.Jc=a.Jc;Zp(this)&&(!this.W||this.W("networkless_logging"))&&$p(this)}
function $p(a){Zp(a)&&!a.Eb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.ea.Td(a.V),aq(a),a.ba.wa()&&a.Ob(),a.ba.listen(a.Mc,a.Ob.bind(a)),a.ba.listen(a.Jc,a.Xc.bind(a)))}
m=Yp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Zp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ea.set(d,this.V).then(function(e){d.id=e;c.ba.wa()&&bq(c,d)}).catch(function(e){bq(c,d);
cq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Zp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ba.wa()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ea.set(e,d.V).catch(function(l){cq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ea.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
cq(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Zp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ea.nb(d.id,c.V):e=!0;c.ba.gb&&c.W&&c.W("vss_network_hint")&&c.ba.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ea.set(d,this.V).then(function(g){d.id=g;e&&c.ea.nb(d.id,c.V)}).catch(function(g){cq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!Zp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.pa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ea.gd("NEW",a.V),2);if(3!=c.h)return b=c.i,b?c.yield(bq(a,b),3):(a.Xc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Ed))};
m.Xc=function(){this.Da.qa(this.i);this.i=0};
function bq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Zp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.A(2);break}return d.yield(a.ea.we(b.id,a.V),3);case 3:(c=d.i)||a.ob(Error("The request cannot be found in the database."));case 2:if(dq(a,b,a.vd)){d.A(4);break}a.ob(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.A(5);break}return d.yield(a.ea.nb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=eq(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||void 0===b.id){d.A(8);break}return d.yield(a.ea.nb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function eq(a,b){if(!Zp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=fq(f);(h=gq(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.kc)){n.A(2);break}if(!a.ba.nc){n.A(3);break}return n.yield(a.ba.nc(),3);case 3:if(a.ba.wa()){n.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.A(6);
break}return n.yield(a.ea.Nc(b.id,a.V,!1),6);case 6:return n.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.kc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.A(8);break}return b.sendCount<a.yd?n.yield(a.ea.Nc(b.id,a.V,!0,h?!1:void 0),12):n.yield(a.ea.nb(b.id,a.V),8);case 12:a.Da.pa(function(){a.ba.wa()&&a.Ob()},a.xd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):h.yield(a.ea.nb(b.id,a.V),2);a.ba.gb&&a.W&&a.W("vss_network_hint")&&a.ba.gb(!0);d(e,f);h.h=0})};
return b}
function dq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function aq(a){if(!Zp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ea.gd("QUEUED",a.V).then(function(b){b&&!dq(a,b,a.td)?a.Da.pa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.A(2):c.yield(a.ea.Nc(b.id,a.V),2);aq(a);c.h=0})}):a.ba.wa()&&a.Ob()})}
function cq(a,b){a.Kd&&!a.ba.wa()?a.Kd(b):a.handleError(b)}
function Zp(a){return!!a.V||a.Ub}
function fq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function gq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var hq;
function iq(){if(hq)return hq();var a={};hq=Po("LogsDatabaseV2",{wb:(a.LogsRequestsStore={Bb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Un(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),ao(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return hq()}
;function jq(a){return oo(iq(),a)}
function kq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(jq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Wn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();lq(c);return g.return(f)})}
function mq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(1==n.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(jq(b),2);if(3!=n.h)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(Tn(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(p){return ho(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();lq(c);return n.return(l)})}
function nq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(jq(b),2);c=d.i;return d.return(Tn(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Pn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function oq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(jq(b),2);e=f.i;return f.return(Tn(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Pn(h.h.put(k,void 0)).then(function(){return k})):Jn.resolve(void 0)})}))})}
function pq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(jq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function qq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(jq(a),2);b=d.i;c=W()-2592E6;return d.yield(Tn(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return co(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return eo(f)})})}),0)})}
function rq(){A(function(a){return a.yield(Lo(),0)})}
function lq(a){T("nwl_csi_killswitch")||vp("networkless_performance",a,{sampleRate:1})}
;var sq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var tq={},uq=Po("ServiceWorkerLogsDatabase",{wb:(tq.SWHealthLog={Bb:1},tq),shared:!0,upgrade:function(a,b){b(1)&&ao(Un(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function vq(a){return oo(uq(),a)}
function wq(a){var b,c;A(function(d){if(1==d.h)return d.yield(vq(a),2);b=d.i;c=W()-2592E6;return d.yield(Tn(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return co(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return eo(f)})})}),0)})}
function xq(a){var b;return A(function(c){if(1==c.h)return c.yield(vq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var yq={},zq=0;function Aq(a){var b=new Image,c=""+zq++;yq[c]=b;b.onload=b.onerror=function(){delete yq[c]};
b.src=a}
;var Bq;function Cq(){Bq||(Bq=new dn("yt.offline"));return Bq}
function Dq(a){if(T("offline_error_handling")){var b=Cq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Cq().set("errors",b,2592E3,!0)}}
;function Eq(){this.h=new Map;this.i=!1}
function Fq(){if(!Eq.h){var a=E("yt.networkRequestMonitor.instance")||new Eq;D("yt.networkRequestMonitor.instance",a);Eq.h=a}return Eq.h}
Eq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Eq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Eq.prototype.removeParams=function(a){return a.split("?")[0]};
Eq.prototype.removeParams=Eq.prototype.removeParams;Eq.prototype.isEndpointCFR=Eq.prototype.isEndpointCFR;Eq.prototype.requestComplete=Eq.prototype.requestComplete;Eq.getInstance=Fq;function Gq(){Gd.call(this);var a=this;this.j=!1;this.i=xi();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Cq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;bl(d)}Cq().set("errors",{},2592E3,!0)}}})}
w(Gq,Gd);function Hq(){if(!Gq.h){var a=E("yt.networkStatusManager.instance")||new Gq;D("yt.networkStatusManager.instance",a);Gq.h=a}return Gq.h}
m=Gq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.je=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Yd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.nc=function(a){a=vi(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Fq().requestComplete("generate_204",b)});
return a};
Gq.prototype.sendNetworkCheckRequest=Gq.prototype.nc;Gq.prototype.listen=Gq.prototype.listen;Gq.prototype.enableErrorFlushing=Gq.prototype.Yd;Gq.prototype.getWindowStatus=Gq.prototype.je;Gq.prototype.networkStatusHint=Gq.prototype.gb;Gq.prototype.isNetworkAvailable=Gq.prototype.wa;Gq.getInstance=Hq;function Iq(a){a=void 0===a?{}:a;Gd.call(this);var b=this;this.i=this.m=0;this.j=Hq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Jq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Jq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Hd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Hd(b,"publicytnetworkstatus-offline")})))}
w(Iq,Gd);Iq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Iq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Iq.prototype.nc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Fq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Jq(a,b){a.rateLimit?a.i?(yi.qa(a.m),a.m=yi.pa(function(){a.l!==b&&(Hd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(Hd(a,b),a.l=b,a.i=W()):Hd(a,b)}
;var Kq;function Lq(){var a=Yp.call;Kq||(Kq=new Iq({fg:!0,Yf:!0}));a.call(Yp,this,{ea:{Td:qq,nb:pq,gd:mq,we:nq,Nc:oq,set:kq},ba:Kq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;cl(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else bl(b)},
ob:cl,sendFn:Mq,now:W,Kd:Dq,Da:cn(),Mc:"publicytnetworkstatus-online",Jc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,kc:U("potential_esf_error_limit",10),W:T,Eb:!(um()&&Nq())});this.j=new ji;T("networkless_immediately_drop_all_requests")&&rq();Mo("LogsDatabaseV2")}
w(Lq,Yp);function Oq(){var a=E("yt.networklessRequestController.instance");a||(a=new Lq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Bo().then(function(b){a.V=b;$p(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.V&&wq(a.V);T("networkless_immediately_drop_sw_health_store")&&Pq(a)}));
return a}
Lq.prototype.writeThenSend=function(a,b){b||(b={});b=Qq(a,b);um()||(this.h=!1);Yp.prototype.writeThenSend.call(this,a,b)};
Lq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Qq(a,b);um()||(this.h=!1);Yp.prototype.sendThenWrite.call(this,a,b,c)};
Lq.prototype.sendAndWrite=function(a,b){b||(b={});b=Qq(a,b);um()||(this.h=!1);Yp.prototype.sendAndWrite.call(this,a,b)};
Lq.prototype.awaitInitialization=function(){return this.j.promise};
function Pq(a){var b;A(function(c){if(!a.V)throw b=Fn("clearSWHealthLogsDb"),b;return c.return(xq(a.V).catch(function(d){a.handleError(d)}))})}
function Mq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Rq(a,b);if(T("use_request_time_ms_header"))b.headers&&ml(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)zl(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)zl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=xc(yc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(Gc),r=Fc(a,0,"ri",p);if(0>r)var t=null;else{var x=a.indexOf("&",r);if(0>x||x>p)x=p;t=decodeURIComponent(a.slice(r+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==t}var z=!n;break b}}catch(J){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(J){}y=!1}c=y?!0:!1}else c=
!1;c||Aq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Np(a,b.postBody,b,Dl,d)):Np(a,JSON.stringify(b.postParams),b,Cl,d):Dl(a,b)}
function Qq(a,b){T("use_event_time_ms_header")&&ml(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Rq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Fq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Fq().requestComplete(a,!0);d(e,f)}}
function Nq(){return"www.youtube-nocookie.com"!==zc(document.location.toString())}
;var Sq=!1,Tq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Sq};D("ytNetworklessLoggingInitializationOptions",Tq);function Uq(){var a;A(function(b){if(1==b.h)return b.yield(Bo(),2);a=b.i;if(!a||!um()&&!T("nwl_init_require_datasync_id_killswitch")||!Nq())return b.A(0);Sq=!0;Tq.isNwlInitialized=Sq;return b.yield(Oq().awaitInitialization(),0)})}
;function Vq(a){var b=this;this.config_=null;a?this.config_=a:cp()&&(this.config_=dp());ym(function(){Wp(b)},5E3)}
Vq.prototype.isReady=function(){!this.config_&&cp()&&(this.config_=dp());return!!this.config_};
function Xp(a,b,c,d){function e(x){x=void 0===x?!1:x;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Up(b,c,l,k)),z)){var y=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(N,da){Vp(z);y(N,da)};
c.onFetchSuccess=function(N,da){Vp(z);J(N,da)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Oq().writeThenSend(t,g):Oq().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Np(t,R,g,Dl,G)}else Np(t,JSON.stringify(g.postParams),g,Cl,G)}else T("web_all_payloads_via_jspb")?Dl(t,g):Cl(t,g)}catch(N){if("InvalidAccessError"===N.name)z&&(Vp(z),z=0),cl(Error("An extension is blocking network request."));else throw N;}z&&ym(function(){Wp(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&cl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);bl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,z){if(d.onError)d.onError(z)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=fp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.re&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=ll(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Tq.isNwlInitialized:Sq)?zo().then(function(x){e(x)}):e(!1)}
;var Wq=0,Xq=Zc?"webkit":Yc?"moz":Wc?"ms":Vc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Wq});var Yq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Zq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Yq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function $q(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Zq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Zq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Zq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Mb);var ar=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ar);
function br(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function cr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=br(a,b,c,d);if(e)return e;e=++ar.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Zq(h);if(!Rd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Zq(h);
h.currentTarget=a;return c.call(a,h)};
g=al(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),dr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function er(a){a&&("string"==typeof a&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?dr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var dr=Md(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function fr(a){this.D=a;this.h=null;this.l=0;this.u=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.U=cr(window,"mousemove",Xa(this.Y,this));a=Xa(this.I,this);"function"===typeof a&&(a=al(a));this.da=window.setInterval(a,25)}
$a(fr,H);fr.prototype.Y=function(a){void 0===a.h&&$q(a);var b=a.h;void 0===a.i&&$q(a);this.h=new Nd(b,a.i)};
fr.prototype.I=function(){if(this.h){var a=W();if(0!=this.l){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.u=this.h;this.j=(this.j+1)%4}};
fr.prototype.S=function(){window.clearInterval(this.da);er(this.U)};var gr={};
function hr(a){var b=void 0===a?{}:a;a=void 0===b.Ge?!1:b.Ge;b=void 0===b.Zd?!0:b.Zd;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&ir();cr(document,"keydown",ir);cr(document,"keyup",ir);cr(document,"mousedown",ir);cr(document,"mouseup",ir);a?cr(window,"touchmove",function(){jr("touchmove",200)},{passive:!0}):(cr(window,"resize",function(){jr("resize",200)}),b&&cr(window,"scroll",function(){jr("scroll",200)}));
new fr(function(){jr("mouse",100)});
cr(document,"touchstart",ir,{passive:!0});cr(document,"touchend",ir,{passive:!0})}}
function jr(a,b){gr[a]||(gr[a]=!0,yi.pa(function(){ir();gr[a]=!1},b))}
function ir(){null==E("_lact",window)&&hr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function kr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var lr=C.ytPubsubPubsubInstance||new L,mr=C.ytPubsubPubsubSubscribedKeys||{},nr=C.ytPubsubPubsubTopicToKeys||{},or=C.ytPubsubPubsubIsSynchronous||{};function pr(a,b){var c=qr();if(c&&b){var d=c.subscribe(a,function(){function e(){mr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,f)}
var f=arguments;try{or[a]?e():sl(e,0)}catch(g){bl(g)}},void 0);
mr[d]=!0;nr[a]||(nr[a]=[]);nr[a].push(d);return d}return 0}
function rr(a){var b=qr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete mr[c]}))}
function sr(a,b){var c=qr();c&&c.publish.apply(c,arguments)}
function tr(a){var b=qr();if(b)if(b.clear(a),a)xr(a);else for(var c in nr)xr(c)}
function qr(){return C.ytPubsubPubsubInstance}
function xr(a){nr[a]&&(a=nr[a],Db(a,function(b){mr[b]&&delete mr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.zb;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",lr);D("ytPubsubPubsubTopicToKeys",nr);D("ytPubsubPubsubIsSynchronous",or);D("ytPubsubPubsubSubscribedKeys",mr);var yr=Symbol("injectionDeps");function zr(a){this.name=a}
zr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ar(a){this.key=a}
function Br(){this.i=new Map;this.j=new Map;this.h=new Map}
function Cr(a,b){a.i.set(b.mc,b);var c=a.j.get(b.mc);if(c)try{c.mg(a.resolve(b.mc))}catch(d){c.kg(d)}}
Br.prototype.resolve=function(a){return a instanceof Ar?Dr(this,a.key,[],!0):Dr(this,a,[])};
function Dr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Hd)var e=d.Hd;else if(d.mf)e=d[yr]?Er(a,d[yr],c):[],e=d.mf.apply(d,ma(e));else if(d.Gd){e=d.Gd;var f=e[yr]?Er(a,e[yr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.pg||a.h.set(b,e);return e}
function Er(a,b,c){return b?b.map(function(d){return d instanceof Ar?Dr(a,d.key,c,!0):Dr(a,d,c)}):[]}
;var Fr;function Gr(){Fr||(Fr=new Br);return Fr}
;var Hr=window;function Ir(){var a,b;return"h5vcc"in Hr&&(null==(a=Hr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Hr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Hr&&Hr.performance.mark&&Hr.performance.measure?2:0}
function Jr(a){var b=Ir();switch(b){case 1:Hr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Hr.performance.mark(a+"-start");break;case 0:break;default:ic(b,"unknown trace type")}}
function Kr(a){var b=Ir();switch(b){case 1:Hr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Hr.performance.mark(c);Hr.performance.measure(a,b,c);break;case 0:break;default:ic(b,"unknown trace type")}}
;var Lr=T("web_enable_lifecycle_monitoring")&&0!==Ir(),Mr=T("web_enable_lifecycle_monitoring");function Nr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?cn():d;this.j=c;this.scheduler=d;this.i=new ji;this.h=a;for(a={cb:0};a.cb<this.h.length;a={jc:void 0,cb:a.cb},a.cb++)a.jc=this.h[a.cb],c=function(e){return function(){e.jc.Cc();b.h[e.cb].lc=!0;b.h.every(function(f){return!0===f.lc})&&b.i.resolve()}}(a),d=this.getPriority(a.jc),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.jc,{Cc:c,
jobId:d})}
function Or(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.lc||(a.scheduler.qa(c.jobId),a.scheduler.ab(c.Cc,10))}
Nr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.lc||this.scheduler.qa(b.jobId),b.lc=!0;this.i.resolve()};
Nr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Pr(a){this.state=a;this.j=[];this.B=void 0;this.D={};Lr&&Jr(this.state)}
m=Pr.prototype;m.install=function(a){this.j.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.j.indexOf(b);-1<b&&a.j.splice(b,1)})};
m.transition=function(a,b){var c=this;Lr&&Kr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.l&&(Or(this.l),this.l=void 0);Qr(this,a,b);this.state=a;Lr&&Jr(this.state);d=d.action.bind(this);var e=this.j.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Rr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Rr(a,b){var c=b.filter(function(e){return 10===Sr(a,e)}),d=b.filter(function(e){return 10!==Sr(a,e)});
return a.D.og?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ne.apply(a,[c].concat(ma(e))),2);a.Bd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Oe.apply(a,[c].concat(ma(e)));a.Bd.apply(a,[d].concat(ma(e)))}}
m.Oe=function(a){for(var b=B.apply(1,arguments),c=cn(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){Tr(g.Gb.name);g.Gb.callback.apply(g.Gb,ma(b));Ur(g.Gb.name)}}(f))};
m.Ne=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=cn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.A(0);f.sb=e.value;f.Sb=void 0;g=function(k){return function(){Tr(k.sb.name);var l=k.sb.callback.apply(k.sb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){Ur(k.sb.name)}):Ur(k.sb.name)}}(f);
c.Ab(g);return f.Sb?h.yield(f.Sb,3):h.A(3)}f={sb:void 0,Sb:void 0};e=d.next();return h.A(2)})};
m.Bd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Cc:function(){Tr(e.name);e.callback.apply(e,ma(b));Ur(e.name)},
priority:Sr(c,e)}});
d.length&&(this.l=new Nr(d))};
function Sr(a,b){var c,d;return null!=(d=null!=(c=a.B)?c:b.priority)?d:0}
function Tr(a){Lr&&a&&Jr(a)}
function Ur(a){Lr&&a&&Kr(a)}
function Qr(a,b,c){Mr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Pr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Vr(a){Pr.call(this,void 0===a?"none":a);this.h=null;this.B=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Wr;w(Vr,Pr);Vr.prototype.i=function(a,b){var c=this;this.h=ym(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Vr.prototype.m=function(a,b){this.h&&(yi.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Xr(){Wr||(Wr=new Vr);return Wr}
;var Yr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Yr});function Zr(){this.store={};this.h={}}
Zr.prototype.storePayload=function(a,b){a=$r(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Zr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=as(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
Zr.prototype.extractMatchingEntries=function(a){a=as(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
Zr.prototype.getSequenceCount=function(a){a=as(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function as(a,b){var c=$r(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&$r(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(bs(b.auth,g[0])){var h=b.isJspb;bs(void 0===h?"undefined":h?"true":"false",g[1])&&bs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),bs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function bs(a,b){return void 0===a||"undefined"===a?!0:a===b}
Zr.prototype.getSequenceCount=Zr.prototype.getSequenceCount;Zr.prototype.extractMatchingEntries=Zr.prototype.extractMatchingEntries;Zr.prototype.smartExtractMatchingEntries=Zr.prototype.smartExtractMatchingEntries;Zr.prototype.storePayload=Zr.prototype.storePayload;function $r(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function cs(a,b){if(a)return a[b.name]}
;var ds=U("initial_gel_batch_timeout",2E3),es=U("gel_queue_timeout_max_ms",6E4),gs=Math.pow(2,16)-1,hs=U("gel_min_batch_size",5),is=void 0;function js(){this.l=this.h=this.i=0;this.j=!1}
var ks=new js,ls=new js,ms=new js,ns=new js,ps,qs=!0,rs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",rs);var ss={};function ts(){var a=E("yt.logging.ims");a||(a=new Zr,D("yt.logging.ims",a));return a}
function us(a,b){if("log_event"===a.endpoint){vs();var c=ws(a),d=xs(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=sq[d||""];var f,g,h,k=null==Gr().resolve(new Ar(Yo))?void 0:null==(f=Zo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=ys(e.tier);if(400===k){zs(a,b);return}}ss[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ts().storePayload(e,a.payload);As(b,c,e,"gelDebuggingEvent"===d)}}
function As(a,b,c,d){function e(){Bs({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(is=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=Cs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ts().getSequenceCount(c));1E3<=d?e():d>=a?ps||(ps=Ds(function(){e();ps=void 0},0)):10<=g-k&&(Es(f,c.tier),h.l=g)}
function zs(a,b){if("log_event"===a.endpoint){vs();var c=ws(a),d=new Map;d.set(c,[a.payload]);var e=xs(a.payload)||"";b&&(is=new b);return new de(function(f,g){is&&is.isReady()?Fs(d,is,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ws(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);rs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Bs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new de(function(e,f){var g=Cs(c,d),h=g.j;g.j=!1;Gs(g.i);Gs(g.h);g.h=0;is&&is.isReady()?void 0===d&&T("enable_web_tiered_gel")?Hs(e,f,a,b,c,300,h):Hs(e,f,a,b,c,d,h):(Es(c,d),e())})}
function Hs(a,b,c,d,e,f,g){var h=is;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?ts().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ts().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(ss)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?ts().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ts().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete ss[l];Fs(k,h,a,b,c,!1,g)}
function Es(a,b){function c(){Bs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Cs(a,b),e=d===ns||d===ms?5E3:es;T("web_gel_timeout_cap")&&!d.h&&(e=Ds(function(){c()},e),d.h=e);
Gs(d.i);e=S("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&qs&&(e=ds);e=Ds(function(){0<U("gel_min_batch_size")?ts().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=hs&&c():c()},e);
d.i=e}
function Fs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Ic:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Lc:void 0,Kc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Sb({context:ep(b.config_||dp())});if(!Qa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=rs[n])&&
Is(g.batchRequest,n,p);delete rs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Js(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Lc=function(r){T("start_client_gcf")&&yi.pa(function(){return A(function(t){return t.yield(Ks(r),0)})});
k--;k||c()};
g.Ic=0;g.Kc=function(r){return function(){r.Ic++;if(e.bypassNetworkless&&1===r.Ic)try{Xp(b,l,r.batchRequest,Ls({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Lc,r.Kc,f)),qs=!1}catch(t){bl(t),d()}k--;k||c()}}(g);
try{Xp(b,l,g.batchRequest,Ls(e,g.dangerousLogToVisitorSession,g.Lc,g.Kc,f)),qs=!1}catch(r){bl(r),d()}}}
function Ls(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Vf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ms()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Js(a,b,c){Ms()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*gs/2)),c++,c>gs&&(c=1),Xk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Is(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=ul("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Yr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Yr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ms(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Ds(a,b){return!1===T("embeds_transport_use_scheduler")?sl(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?ym(function(){if("none"===Xr().currentState)a();else{var c={};Xr().install((c.none={callback:a},c))}},b):ym(a,b)}
function Gs(a){T("transport_use_scheduler")?yi.qa(a):window.clearTimeout(a)}
function Ks(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=cs(d,Ck),g=null==(f=d)?void 0:f.hotHashData,h=cs(d,Bk),l=null==(k=d)?void 0:k.coldHashData,(n=Gr().resolve(new Ar(Yo)))?g?e?p.yield($o(n,g,e),2):p.yield($o(n,g),2):p.A(2):p.return()):l?h?p.yield(ap(n,l,h),0):p.yield(ap(n,l),0):p.A(0)})}
function Cs(a,b){b=void 0===b?200:b;return a?300===b?ns:ls:300===b?ms:ks}
function xs(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,sq[b])return b}
function ys(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ns=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ns);
function Os(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=kr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ns[b]=b in Ns?Ns[b]+1:0,a.sequence={index:Ns[b],groupKey:b},d.endOfSequence&&delete Ns[d.sequenceGroup]);(d.sendIsolatedPayload?zs:us)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function nn(a,b,c){c=void 0===c?{}:c;var d=Vq;S("ytLoggingEventsDefaultDisabled",!1)&&Vq===Vq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=kr(),c.timestamp=W());Os(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ps=new Set,Qs=0,Rs=0,Ss=0,Ts=[],Us=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function mn(a){Vs(a)}
function Ws(a){Vs(a,"WARNING")}
function Xs(a){a instanceof Error?Vs(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Ws(a))}
function Vs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Qs))){d=Ts;var k=rc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=Vl(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var x="params."+r,z=Xl(t[r]);c[x]=z;p+=x.length+z.length;if(500<p)break}}else c.params=Xl(t)}if(d.length)for(r=0;r<d.length&&!(p=Vl(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Rl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.gg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Ml);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ic[r.name])for(e=v(c.ic[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Gc(f);break}r.params||(r.params={});a=Rl();r.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Ps.has(r.message)){if(g&&T("web_enable_error_204"))Ys(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Sl.Ya("handleError",r),T("record_app_crashed_web")&&0===Ss&&1===r.sampleWeight&&(Ss++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),nn("appCrashed",g)),Rs++):"WARNING"===b&&Sl.Ya("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Us);for(c=a.next();!c.done;c=a.next())if(tn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Yk("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(nn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&Bs(void 0,void 0,!1))}T("suppress_error_204_logging")||Ys(b,r)}try{Ps.add(r.message)}catch(y){}Qs++}}}
function Ys(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Dl(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Zs(){this.register=new Map}
function $s(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.jg("ABORTED")}
Zs.prototype.clear=function(){$s(this);this.register.clear()};
var at=new Zs;var bt=Date.now().toString();
function ct(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(bt)for(a=1,b=0;b<bt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^bt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var dt,et=C.ytLoggingDocDocumentNonce_;et||(et=ct(),D("ytLoggingDocDocumentNonce_",et));dt=et;function ft(a){this.h=a}
m=ft.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Jk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&lg(a,2,Of(this.h.veType)),void 0!==this.h.veCounter&&lg(a,6,Of(this.h.veCounter)),void 0!==this.h.elementIndex&&lg(a,3,Of(this.h.elementIndex)),this.h.isCounterfactual&&lg(a,5,Lf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();tg(a,Jk,7,b)}void 0!==this.h.youtubeData&&tg(a,Dk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function gt(a){return S("client-screen-nonce-store",{})[void 0===a?0:a]}
function ht(a,b){b=void 0===b?0:b;var c=S("client-screen-nonce-store");c||(c={},Xk("client-screen-nonce-store",c));c[b]=a}
function jt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function kt(a){return S(jt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",kt);function lt(){var a=S("csn-to-ctt-auth-info");a||(a={},Xk("csn-to-ctt-auth-info",a));return a}
function mt(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function nt(a){a=gt(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",nt);function ot(a,b,c){var d=lt();(c=nt(c))&&delete d[c];b&&(d[a]=b)}
function pt(a){return lt()[a]}
D("yt_logging_screen.getCttAuthInfo",pt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==gt(c)||b!==S(jt(c)))if(ot(a,d,c),ht(a,c),Xk(jt(c),b),b=function(){setTimeout(function(){a&&nn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:dt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function qt(){var a=Rb(rt),b;return(new de(function(c,d){a.onSuccess=function(e){rl(e)?c(new st(e)):d(new tt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new tt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new tt("Request timed out","net.timeout",e))};
b=Dl("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof ke){var d;
null==(d=b)||d.abort()}return ie(c)})}
function tt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(tt,bb);function st(a){this.xhr=a}
;function ut(){this.h=0;this.i=null}
ut.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:vt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:wt(a):this};
ut.prototype.getValue=function(){return this.i};
ut.prototype.isRejected=function(){return 2==this.h};
ut.prototype.$goog_Thenable=!0;function wt(a){var b=new ut;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function vt(a){var b=new ut;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function xt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:ml(a)?"same-origin":"cors",credentials:ml(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function zt(){return Xg()||(Le||Me)&&tn("applewebkit")&&!tn("version")&&(!tn("safari")||tn("gsa/"))||$c&&tn("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function At(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Hk)if(Hk[d]==c.embeddedPlayerMode){b=Hk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Bt(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ct;this.isTimeout=a instanceof tt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ke}
w(Bt,bb);Bt.prototype.name="BiscottiError";function Ct(){bb.call(this,"Biscotti ID is missing from server")}
w(Ct,bb);Ct.prototype.name="BiscottiMissingError";var rt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Dt=null;function Et(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!zt())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==Pb(a))return Error("Biscotti ID is not available in private embed mode");if(At(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Qk(){var a=Et();if(void 0!==a)return ie(a);Dt||(Dt=qt().then(Ft).oc(function(b){return Gt(2,b)}));
return Dt}
function Ft(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ct;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ct;a=a.id;Rk(a);Dt=vt(a);Ht(18E5,2);return a}
function Gt(a,b){b=new Bt(b);Rk("");Dt=wt(b);0<a&&Ht(12E4,a-1);throw b;}
function Ht(a,b){sl(function(){qt().then(Ft,function(c){return Gt(b,c)}).oc(Ld)},a)}
function It(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Qk()}catch(b){return ie(b)}}
;var Bb=ja(["data-"]);function Jt(a){a&&(a.dataset?a.dataset[Kt()]="true":hc(a))}
function Lt(a){return a?a.dataset?a.dataset[Kt()]:a.getAttribute("data-loaded"):null}
var Mt={};function Kt(){return Mt.loaded||(Mt.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Nt(a,b,c){H.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.u=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=Cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.u)}
w(Nt,H);Nt.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){cl(d)}}};
Nt.prototype.S=function(){window.removeEventListener("message",this.u);H.prototype.S.call(this)};function Ot(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ot.prototype.clone=function(){var a=new Ot,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=Rb(c):a[b]=c}return a};var Pt=["share/get_web_player_share_panel"],Qt=["feedback"],Rt=["notification/modify_channel_preference"],St=["browse/edit_playlist"],Tt=["subscription/subscribe"],Ut=["subscription/unsubscribe"];var Vt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Vt);function Wt(a){Sk(Vt,arguments)}
;function Xt(a,b,c){Yt(a,b,void 0===c?null:c)}
function Zt(a){a=$t(a);var b=document.getElementById(a);b&&(tr(a),b.parentNode.removeChild(b))}
function au(a,b){a&&b&&(a=""+Sa(b),(a=bu[a])&&rr(a))}
function Yt(a,b,c){c=void 0===c?null:c;var d=$t(a),e=document.getElementById(d),f=e&&Lt(e),g=e&&!f;f?b&&b():(b&&(f=pr(d,b),b=""+Sa(b),bu[b]=f),g||(e=cu(a,d,function(){Lt(e)||(Jt(e),sr(d),sl(function(){tr(d)},0))},c)))}
function cu(a,b,c,d){d=void 0===d?null:d;var e=Qd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);pc(e,zk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function $t(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+vc(a)}
var bu={};function du(a){var b=eu(a),c=document.getElementById(b),d=c&&Lt(c);d||c&&!d||(c=fu(a,b,function(){if(!Lt(c)){Jt(c);sr(b);var e=Ya(tr,b);sl(e,0)}}))}
function fu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=zk(a);kc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function eu(a){var b=Qd("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+vc(a)}
;function gu(a){var b=B.apply(1,arguments);if(!hu(a)||b.some(function(d){return!hu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())iu(a,c.value)}
function iu(a,b){for(var c in b)if(hu(b[c])){if(c in a&&!hu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});iu(a[c],b[c])}else if(ju(b[c])){if(c in a&&!ju(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ku(a[c],b[c])}else a[c]=b[c];return a}
function ku(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,hu(c)?a.push(iu({},c)):ju(c)?a.push(ku([],c)):a.push(c);return a}
function hu(a){return"object"===typeof a&&!Array.isArray(a)}
function ju(a){return"object"===typeof a&&Array.isArray(a)}
;function lu(a){a=void 0===a?!1:a;H.call(this);this.h=new L(a);Pc(this,this.h)}
$a(lu,H);lu.prototype.subscribe=function(a,b,c){return this.T?0:this.h.subscribe(a,b,c)};
lu.prototype.unsubscribe=function(a,b,c){return this.T?!1:this.h.unsubscribe(a,b,c)};
lu.prototype.l=function(a,b){this.T||this.h.Ya.apply(this.h,arguments)};var mu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function nu(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=zc(window.location.href);e&&d.push(e);e=zc(a);if(0<=Cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=Ac(a),a=Bc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:nt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ou(a,b,f)}else ou(a,b)}
function ou(a,b,c){a=pu(a);b=b?Dc(b):"";c=c||5;zt()&&dm(a,b,c)}
function pu(a){for(var b=v(mu),c=b.next();!c.done;c=b.next())a=Ic(a,c.value);return"ST-"+vc(a).toString(36)}
;function qu(a){ip.call(this,1,arguments);this.csn=a}
w(qu,ip);var rp=new jp("screen-created",qu),ru=[],su=0,tu=new Map,uu=new Map,vu=new Map;
function wu(a,b,c,d,e){e=void 0===e?!1:e;for(var f=xu({cttAuthInfo:pt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&Ws(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=yu(h,b);if(k.veType&&!uu.has(l)&&!vu.has(l)&&!e){if(!T("il_attach_cache_limit")||1E3>tu.size){tu.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&1E3<tu.size&&Ws(new V("IL Attach cache exceeded limit"))}h=yu(c,b);tu.has(h)?
zu(c,b):vu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Au("visualElementAttached",f,c):a?Os("visualElementAttached",c,a,f):nn("visualElementAttached",c,f)}
function Au(a,b,c){ru.push({Fe:a,payload:c,cg:void 0,options:b});su||(su=sp())}
function tp(a){if(ru){for(var b=v(ru),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,nn(c.Fe,c.payload,c.options));ru.length=0}su=0}
function yu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function zu(a,b){a=yu(a,b);tu.has(a)&&(b=tu.get(a)||[],wu(b[0],b[1],b[2],[b[3]],!0),tu.delete(a))}
function xu(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Bu(){try{return!!self.localStorage}catch(a){return!1}}
;function Cu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Du(a){if(Bu()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Cu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Eu(){if(!Bu())return!1;var a=wm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Cu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Fu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return("WEB"===S("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===S("INNERTUBE_CLIENT_NAME"))&&a}
function Gu(a){if(S("LOGGED_IN",!0)&&Fu()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=zc(window.location.href);c&&b.push(c);c=zc(a);0<=Cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=Ac(a),(b=Bc(b))?(b=pu(b),b=(b=em(b)||null)?jl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Fu()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&nu(a,b)}}
;function Hu(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&nu(a,b);if(c)return!1;Gu(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=Ec(a,e);Gu(a);f=a+f;var h=void 0===h?wb:h;a:if(h=void 0===h?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.te(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);void 0!==h&&(g.href=h);return!0}
;function Iu(a){if("1"!=Pb(S("PLAYER_VARS",{}))){a&&Pk();try{It().then(function(){},function(){}),sl(Iu,18E5)}catch(b){bl(b)}}}
;var Ju=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ku(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;xc(yc(5,a));try{var b=kl(a).theme;return Ju.get(b)||null}catch(c){}return null}
;function Lu(){this.h={};if(this.i=gm()){var a=em("CONSISTENCY");a&&Mu(this,{encryptedTokenJarContents:a})}}
Lu.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Mu(this,a)}};
function Mu(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&dm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Nu=window.location.hostname.split(".").slice(-2).join(".");function Ou(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=Pu(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Qu;function Ru(){Qu=E("yt.clientLocationService.instance");Qu||(Qu=new Ou,D("yt.clientLocationService.instance",Qu));return Qu}
m=Ou.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=Pu(this))&&this.h.set("yt-location-playability-token",a,15552E3):dm("YT_CL",JSON.stringify({loctok:a}),15552E3,Nu,!0))};
function Pu(a){return void 0===a.h?new dn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Pu(this))&&this.h.remove("yt-location-playability-token"):fm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Su(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Tu(){this.h={}}
m=Tu.prototype;m.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
m.get=function(a){if(this.contains(a))return this.h[a]};
m.set=function(a,b){this.h[a]=b};
m.ac=function(){return Object.keys(this.h)};
m.remove=function(a){delete this.h[a]};function Uu(){this.mappings=new Tu}
Uu.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Uu.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=ic(b)}}return a};
new Uu;function Vu(a){return function(){return new a}}
;var Wu={},Xu=(Wu.WEB_UNPLUGGED="^unplugged/",Wu.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Wu.WEB_UNPLUGGED_OPS="^unplugged/",Wu.WEB_UNPLUGGED_PUBLIC="^unplugged/",Wu.WEB_CREATOR="^creator/",Wu.WEB_KIDS="^kids/",Wu.WEB_EXPERIMENTS="^experiments/",Wu.WEB_MUSIC="^music/",Wu.WEB_REMIX="^music/",Wu.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Wu.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Wu);
function Yu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Xu[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Xu).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Zu(){}
Zu.prototype.B=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?cm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Sb(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;km();var l="USER_INTERFACE_THEME_LIGHT";nm(165)?l="USER_INTERFACE_THEME_DARK":nm(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Ku()||l;h.userInterfaceTheme=k;if(!f){if(k=sm())h.connectionType=k;T("web_log_effective_connection_type")&&(k=tm())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=bp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},p&&(g.client.configInfo.coldConfigData=
p),n&&(g.client.configInfo.coldHashData=n),k&&(g.client.configInfo.hotHashData=k));p=kl(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&Yl.h&&(p=Yl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Zl(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=
void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=vl();Lu.h||(Lu.h=new Lu);h=Lu.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=km();t=nm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?e&&(f=nt())&&(g.clientScreenNonce=f):!f&&(f=nt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Ru().setLocationOnInnerTubeContext(g);try{var x=nl(),z=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:z};var y=v(Object.entries(x));for(var J=y.next();!J.done;J=y.next()){var G=v(J.value),R=G.next().value,N=G.next().value;x=R;z=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+
z})}var da;if(T("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(da=g.client)?void 0:da.clientName)){var Ca=S("INNERTUBE_CONTEXT");Ca.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ca.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Ca.adSignalsInfo.limitAdTracking)}}catch(ea){Vs(ea)}y=g}else Vs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};if(J=this.i(a)){this.h(y,J,b);var O;
b="/youtubei/v1/"+Yu(this.j());(J=null==(O=cs(a.commandMetadata,Fk))?void 0:O.apiUrl)&&(b=J);O=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(O=String(b)+String(Ac(O)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");O=ll(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,ib:xt(O),Na:y,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}Vs(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Zu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function $u(){}
w($u,Zu);function av(){}
w(av,$u);av.prototype.B=function(){return{input:"/getDatasyncIdsEndpoint",ib:xt("/getDatasyncIdsEndpoint","GET"),Na:{}}};
av.prototype.j=function(){return[]};
av.prototype.i=function(){};
av.prototype.h=function(){};var bv={},cv=(bv.GET_DATASYNC_IDS=Vu(av),bv);function dv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function ev(){var a=dv();a.info||(a.info={});return a.info}
function fv(a){a=dv(a);a.metadata||(a.metadata={});return a.metadata}
function gv(a){a=dv(a);a.tick||(a.tick={});return a.tick}
function hv(a){a=dv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function iv(a){a=hv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function jv(a){var b=dv(a).nonce;b||(b=ct(),dv(a).nonce=b);return b}
;function kv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function lv(a){a=a||"";var b=E("ytcsi.reference");b||(kv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=kv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},mv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]=
"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",
X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function nv(a,b){ip.call(this,1,arguments);this.timer=b}
w(nv,ip);var ov=new jp("aft-recorded",nv);var pv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",pv);function qv(){this.h=0}
function rv(){qv.h||(qv.h=new qv);return qv.h}
qv.prototype.tick=function(a,b,c,d){sv(this,"tick_"+a+"_"+b)||nn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
qv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");sv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,nn("latencyActionInfo",a,{cttAuthInfo:c}))};
qv.prototype.jspbInfo=function(){};
qv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");sv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,nn("latencyActionSpan",a,{cttAuthInfo:c}))};
function sv(a,b){pv[b]=pv[b]||{count:0};var c=pv[b];c.count++;c.time=W();a.h||(a.h=ym(function(){var d=W(),e;for(e in pv)pv[e]&&6E4<d-pv[e].time&&delete pv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ws(c)),!0):!1}
;var tv=window;function uv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function vv(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=wv(e.requestStart),e.responseEnd=wv(e.responseEnd),e.redirectStart=wv(e.redirectStart),e.redirectEnd=wv(e.redirectEnd),e.domainLookupEnd=wv(e.domainLookupEnd),e.connectStart=wv(e.connectStart),e.connectEnd=
wv(e.connectEnd),e.responseStart=wv(e.responseStart),e.secureConnectionStart=wv(e.secureConnectionStart),e.domainLookupStart=wv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function wv(a){return Math.round(xv()+a)}
function xv(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=tv.performance||tv.mozPerformance||tv.msPerformance||tv.webkitPerformance||new uv;var yv=!1,zv=!1,Av={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Ld,Y);function Bv(a,b){if(!T("web_csi_action_sampling_enabled")||!dv(b).actionDisabled){var c=lv(b||"");gu(c.info,a);a.loadType&&(c=a.loadType,fv(b).loadType=c);gu(iv(b),a);c=jv(b);b=dv(b).cttAuthInfo;rv().info(a,c,b)}}
function Cv(){var a,b,c,d;return(null!=(d=null==Gr().resolve(new Ar(Yo))?void 0:null==(a=Zo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!dv(c).actionDisabled){var d=jv(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==Gr().resolve(new Ar(Yo))?0:Zo())&&!zv&&(zv=!0,Z("gcfl",W(),c));var f,g,h;e=(null==Gr().resolve(new Ar(Yo))?void 0:null==(f=Zo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Cv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;dv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Bv(f,c));dv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=lv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=hv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=gv(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=dv(c).cttAuthInfo;"_start"===a?(a=rv(),sv(a,"baseline_"+d)||nn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):rv().tick(a,d,b,f);Dv(c);return e}}}
function Ev(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Xq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Fv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Gv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);lc(window)&&a.setAttribute("nonce",lc(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=xv(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Hv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",wv(b.startTime)),Z("wffe",wv(b.responseEnd)))}
function Iv(a){var b=Jv("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Jv(b[d],a);if(e)return e}return NaN}
function Jv(a,b){if(a=gv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Dv(a){var b=Jv("_start",a),c=Iv(a);b&&c&&!yv&&(op(ov,new nv(Math.round(c-b),a)),yv=!0)}
function Kv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(b){return"first-paint"===b.name}))return wv(a.startTime)}a=Y.timing;
return a.Be?Math.max(0,a.Be):0}
;function Lv(a,b){al(function(){lv("").info.actionType=a;b&&Xk("TIMING_AFT_KEYS",b);Xk("TIMING_ACTION",a);var c=Fv();0<Object.keys(c).length&&Bv(c);c={isNavigation:!0,actionType:mv[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=mv[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=nt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Ev();if(1===d||-1===d)c.isVisible=!0;fv();ev();
c.loadType="cold";d=ev();var e=vv(),f=xv(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=Kv();0<d&&Z("fpt",d);d=vv();d.isPerformanceNavigationTiming&&Bv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=xv()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Hv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Av)Av.hasOwnProperty(h)&&(e=Av[h],
Gv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Bv(c);c=hv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=iv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===fv().loadType&&("cold"===c.loadType||"cold"===d)){d=gv();e=hv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,Jv(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,gu(c,d),gu(k,d),d=!0;d&&Bv(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Mv()&&Iv()&&Dv()})()}
function Nv(a,b,c){al(Bv)(a,b,void 0===c?!1:c)}
function Ov(a,b,c){return al(Z)(a,b,c)}
function Mv(){return al(function(){return"_start"in gv()})()}
function Pv(){al(function(){var a=jv();requestAnimationFrame(function(){setTimeout(function(){a===jv()&&Ov("ol",void 0,void 0)},0)})})()}
var Qv=window;Qv.ytcsi&&(Qv.ytcsi.infoGel=Nv,Qv.ytcsi.tick=Ov);var Rv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Sv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Tv(a,b,c,d){this.B=a;this.ba=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},cv,a.Nb)}
function Uv(a,b,c,d){if(void 0!==Tv.h){if(d=Tv.h,a=[a!==d.B,b!==d.ba,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Tv.h=new Tv(a,b,c,d)}
function Vv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?cm:c;var d=Wv(a,b);return d?new de(function(e,f){var g,h,k,l,n;return A(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.B(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));p.A(0);break}Gu(h.input);l="cors"===(null==(k=h.ib)?void 0:k.mode)?"cors":void 0;if(a.l.ef){var r=h.config,t;r=null==r?void 0:null==(t=r.Tb)?void 0:t.sessionIndex;t=bm(0,{sessionIndex:r});n=Object.assign({},
Su(l),t);p.A(4);break}return p.yield(Xv(h.config,l),5);case 5:n=p.i;case 4:e(Yv(a,h,n)),p.h=0}})}):ie(new V("Error: No request builder found for command.",b))}
function Zv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(Rv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Yv(a,b,c){var d=void 0===d?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,x,z,y,J,G,R,N,da,Ca,O,ea,ka,pa,Ha,Qg,Rg,ur,vr,wr;return A(function(ha){switch(ha.h){case 1:ha.A(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!(null==(f=b)?0:null==(g=f.Na)?0:g.context)){ha.A(4);break}h=b.Na.context;ha.A(5);break;case 5:k=v([]),l=k.next();case 7:if(l.done){ha.A(4);break}n=l.value;return ha.yield(n.ig(h),8);case 8:l=k.next();ha.A(7);break;case 4:if(null==(p=a.i)||!p.ng(b.input,b.Na)){ha.A(11);break}return ha.yield(a.i.eg(b.input,
b.Na),12);case 12:return r=ha.i,T("kevlar_process_local_innertube_responses_killswitch")||Zv(a,r,b),ha.return(r);case 11:return(z=null==(x=b.config)?void 0:x.lg)&&a.h.has(z)?t=a.h.get(z):(y=JSON.stringify(b.Na),R=null!=(G=null==(J=b.ib)?void 0:J.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},R,c)}),N=Object.assign({},b.ib),"POST"===b.ib.method&&(N=Object.assign({},N,{body:y})),(null==(da=b.config)?0:da.Le)&&Ov(b.config.Le),Ca=function(){return a.ba.fetch(b.input,N,b.config)},t=
Ca(),z&&a.h.set(z,t)),ha.yield(t,13);
case 13:if((O=ha.i)&&"error"in O&&(null==(ea=O)?0:null==(ka=ea.error)?0:ka.details))for(pa=O.error.details,Ha=v(pa),Qg=Ha.next();!Qg.done;Qg=Ha.next())Rg=Qg.value,(ur=Rg["@type"])&&-1<Sv.indexOf(ur)&&(delete Rg["@type"],O=Rg);z&&a.h.has(z)&&a.h.delete(z);(null==(vr=b.config)?0:vr.Me)&&Ov(b.config.Me);if(O||null==(wr=a.i)||!wr.Wf(b.input,b.Na)){ha.A(14);break}return ha.yield(a.i.dg(b.input,b.Na),15);case 15:O=ha.i;case 14:return Zv(a,O,b),d(),ha.return(O||void 0)}})}
function Wv(a,b){a:{a=a.B;var c,d=null==(c=cs(b,Gk))?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=null==(f=cs(b,Ek))?void 0:f.request)&&a.Vd&&(f=a.Vd[c])){e=f();break a}for(e in b)if(a.Zc[e]&&(b=a.Zc[e])){e=b();break a}e=void 0}if(void 0!==e)return Promise.resolve(e)}
function Xv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=bm(0,{sessionIndex:e});if(!(k instanceof de)){var l=new de(Ld);ee(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Su(b),f)))})}
;var $v=new zr("INNERTUBE_TRANSPORT_TOKEN");function aw(){}
w(aw,$u);aw.prototype.j=function(){return Tt};
aw.prototype.i=function(a){return cs(a,Ok)||void 0};
aw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(aw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function bw(){}
w(bw,$u);bw.prototype.j=function(){return Ut};
bw.prototype.i=function(a){return cs(a,Nk)||void 0};
bw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(bw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cw(){}
w(cw,$u);cw.prototype.j=function(){return Qt};
cw.prototype.i=function(a){return cs(a,Ik)||void 0};
cw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(cw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function dw(){}
w(dw,$u);dw.prototype.j=function(){return Rt};
dw.prototype.i=function(a){return cs(a,Mk)||void 0};
dw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ew(){}
w(ew,$u);ew.prototype.j=function(){return St};
ew.prototype.i=function(a){return cs(a,Lk)||void 0};
ew.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function fw(){}
w(fw,$u);fw.prototype.j=function(){return Pt};
fw.prototype.i=function(a){return cs(a,Kk)};
fw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function gw(a,b){var c=B.apply(2,arguments);a=void 0===a?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(gw,V);var hw=new zr("NETWORK_SLI_TOKEN");function iw(a){this.h=a}
iw.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=jw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Ws(g);
if((null==c?0:c.be)&&g instanceof gw&&1===g.errorType)return Promise.reject(g)}))})};
function jw(a,b,c){if(a.h){var d=xc(yc(5,Ic(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Qp(c));return new window.Request(b,a)}
iw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((null==b?0:b.ue)&&a.ok)return Dg(b.ue,d);d=d.replace(")]}'","");if((null==b?0:b.be)&&d)try{var e=JSON.parse(d)}catch(g){throw new gw(1,"JSON parsing failed after fetch");}var f;return null!=(f=e)?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Zf(),c=c.then(function(d){Ws(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
iw[yr]=[new Ar(hw)];var kw=new zr("NETWORK_MANAGER_TOKEN");var lw;function mw(){var a,b,c;return A(function(d){if(1==d.h)return a=Gr().resolve($v),a?d.yield(Vv(a),2):(Ws(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ws(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Xf;return d.return(c)}Ws(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var nw=C.caches,ow;function pw(a){var b=a.indexOf(":");return-1===b?{rd:a}:{rd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function qw(){return A(function(a){if(void 0!==ow)return a.return(ow);ow=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(nw.open("test-only"),4);case 4:return d.yield(nw.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(ow)})}
function rw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(qw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(nw.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=pw(f),h=g.datasyncId,!h||a.includes(h)||b.push(nw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function sw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(qw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=wm("cache contains other");return h.yield(nw.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=pw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function tw(){mw().then(function(a){a&&(Do(a),rw(a),Du(a))})}
function uw(){var a=new Iq;yi.pa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=wm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Do(g);rw(g);Du(g);return f.return()}c=Eu();return f.yield(sw(),3);case 3:return d=f.i,f.yield(Eo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?tw():a.h.add("publicytnetworkstatus-online",tw,!0,void 0,void 0),f.h=0}})})}
;function vw(){this.state=1;this.h=null}
m=vw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new mc(d?d.createScript(f):f)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=yk(a.interpreterSafeUrl).toString());ww(this,d,e,a.program,b,c)}else Ws(Error("Cannot initialize botguard without program"))};
function ww(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Xt(c,function(){window[g]?xw(a,d,g,e):(a.state=3,Zt(c),Ws(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Qd("SCRIPT"),b instanceof mc?oc(f,b):f.textContent=b,f.nonce=lc(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?xw(a,d,g,e):(a.state=4,Ws(new V("Unable to load Botguard from JS")))):Ws(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function xw(a,b,c,d){a.state=5;try{var e=new ki({program:b,ke:c,Je:T("att_web_record_metrics"),Ae:"aGIf"});e.af.then(function(){a.state=6;d&&d(b)});
a.Oc(e)}catch(f){a.state=7,f instanceof Error&&Ws(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Rc()?this.Id({bd:a}):null};
m.dispose=function(){this.Oc(null);this.state=8};
m.Rc=function(){return!!this.h};
m.Id=function(a){return this.h.Cd(a)};
m.Oc=function(a){Nc(this.h);this.h=a};var yw=[],zw=!1;function Aw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&zt()){var a=S("PLAYER_VARS",{});if("1"!=Pb(a)&&!At(a)){var b=function(){zw=!0;"google_ad_status"in window?Xk("DCLKSTAT",1):Xk("DCLKSTAT",2)};
try{Xt("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}yw.push(yi.pa(function(){if(!(zw||"google_ad_status"in window)){try{au("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}zw=!0;Xk("DCLKSTAT",3)}},5E3))}}}
function Bw(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Cw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Dw(){vw.apply(this,arguments)}
w(Dw,vw);Dw.prototype.Oc=function(a){var b;null==(b=Cw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Cd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Dw.prototype.Rc=function(){return!!Cw()};
Dw.prototype.Id=function(a){return Cw().bgvmc(a)};function Ew(a){Pr.call(this,void 0===a?"document_active":a);var b=this;this.B=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.I},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ew,Pr);Ew.prototype.I=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ew.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ew.prototype.u=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Ew.prototype.i=function(){this.h=new Map};function Fw(a){Pr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Fw,Pr);Fw.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Fw.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Fw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Fw.prototype.u=function(a,b){a(null==b?void 0:b.event)};function Gw(){this.l=new Ew;this.B=new Fw}
Gw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.B.install(c)})};function Hw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Hw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=nt(void 0===c?0:c)){a=this.client;d=new ft({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=yu(d,c);uu.set(f,!0);zu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=xu({cttAuthInfo:pt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Au("visualElementGestured",f,d):a?Os("visualElementGestured",d,a,f):nn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Hw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new ft({trackingParams:a}),b,void 0===c?0:c)};
Hw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=nt(d);a||(a=(a=kt(void 0===d?0:d))?new ft({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=xu({cttAuthInfo:pt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Au("visualElementStateChanged",d,b):a?Os("visualElementStateChanged",b,a,d):nn("visualElementStateChanged",b,d))}};
function Iw(a,b){if(void 0===b)for(var c=mt(),d=0;d<c.length;d++)void 0!==c[d]&&Iw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&wu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Jw(){Gw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Jw,Gw);Jw.prototype.j=function(){nn("finalPayload",{csn:nt()})};
Jw.prototype.h=function(){$s(at)};
Jw.prototype.i=function(){var a=Iw;Hw.h||(Hw.h=new Hw);a(Hw.h)};function Kw(){}
function Lw(){var a=E("ytglobal.storage_");a||(a=new Kw,D("ytglobal.storage_",a));return a}
Kw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Mw()):d.return()})};
function Mw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Kw);function ln(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
ln.prototype.Ib=function(a){this.handleError(a)};
ln.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Nw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Nw(a,b){Lw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Ow(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Ow(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Ow(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Pw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Nt(!!S("WIDGET_ID_ENFORCE")),b=this.Ie.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=Pw.prototype;m.Ie=function(a,b,c){"addEventListener"===a&&b?this.Bc(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.wc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Bc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.wc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ee=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.zc());this.sendMessage("onReady");Db(this.i,this.zd,this);this.i=[]};
m.zc=function(){return null};
function Qw(a,b){a.sendMessage("infoDelivery",b)}
m.zd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.zd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Rw={},Sw=(Rw["api.invalidparam"]=2,Rw.auth=150,Rw["drm.auth"]=150,Rw["heartbeat.net"]=150,Rw["heartbeat.servererror"]=150,Rw["heartbeat.stop"]=150,Rw["html5.unsupportedads"]=5,Rw["fmt.noneavailable"]=5,Rw["fmt.decode"]=5,Rw["fmt.unplayable"]=5,Rw["html5.missingapi"]=5,Rw["html5.unsupportedlive"]=5,Rw["drm.unavailable"]=5,Rw["mrm.blocked"]=151,Rw);var Tw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Uw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Vw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Tw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ww(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Xw(a){Pw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ve.bind(this));this.addEventListener("onVolumeChange",this.We.bind(this));this.addEventListener("onApiChange",this.Qe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Se.bind(this));this.addEventListener("onPlaybackRateChange",this.Te.bind(this));this.addEventListener("onStateChange",this.Ue.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xe.bind(this))}
w(Xw,Pw);m=Xw.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Uw(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Vw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Vw(e);break;case "loadPlaylist":case "cuePlaylist":e=Ww(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Uw(a)&&Qw(this,this.zc())}};
m.Bc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Pw.prototype.Bc.call(this,a,b)};
m.wc=function(a,b){var c=this,d=Pw.prototype.wc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ee.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Sw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.zc=function(){if(!this.api)return null;var a=this.api.getApiInterface();Ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Qw(this,a)};
m.Se=function(a){Qw(this,{playbackQuality:a})};
m.Te=function(a){Qw(this,{playbackRate:a})};
m.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.We=function(){Qw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Qw(this,a)};
m.Xe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Qw(this,a)};
m.dispose=function(){Pw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Yw(a){H.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.ud,this)}
w(Yw,H);m=Yw.prototype;m.start=function(){this.started||this.T||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.T&&this.connection.jb(a,b)};
m.ud=function(a,b,c){if(this.started&&!this.T){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Zw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=$w(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Re.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Re=function(a,b){this.started&&!this.T&&this.connection.jb(a,this.yc(a,b))};
m.yc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.ud,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.S.call(this)};function ax(a,b){Yw.call(this,b);this.api=a;this.start()}
w(ax,Yw);ax.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
ax.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Zw(a,b){switch(a){case "loadVideoById":return a=Vw(b),[a];case "cueVideoById":return a=Vw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Ww(b),[a];case "cuePlaylist":return a=Ww(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function $w(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ax.prototype.yc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Yw.prototype.yc.call(this,a,b)};
ax.prototype.S=function(){Yw.prototype.S.call(this);delete this.api};function bx(a,b,c){lu.call(this);this.j=a;this.i=b;this.id=c}
w(bx,lu);bx.prototype.jb=function(a,b){this.T||this.j.jb(this.i,this.id,a,b)};
bx.prototype.S=function(){this.i=this.j=null;lu.prototype.S.call(this)};function cx(a,b,c){H.call(this);this.h=a;this.origin=c;this.i=cr(window,"message",this.j.bind(this));this.connection=new bx(this,a,b);Pc(this,this.connection)}
w(cx,H);cx.prototype.jb=function(a,b,c,d){this.T||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
cx.prototype.j=function(a){if(!this.T&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.T||c.l("command",b.command,b.data,a.origin)}}}};
cx.prototype.S=function(){er(this.i);this.h=null;H.prototype.S.call(this)};var dx=new Dw;function ex(){return dx.Rc()}
function fx(a){a=void 0===a?{}:a;return dx.invoke(a)}
;function gx(a,b,c,d,e){H.call(this);var f=this;this.u=b;this.webPlayerContextConfig=d;this.pc=e;this.Pa=!1;this.api={};this.ha=this.m=null;this.U=new L;this.h={};this.da=this.ta=this.elementId=this.Za=this.config=null;this.Y=!1;this.j=this.D=null;this.Fa={};this.qc=["onReady"];this.lastError=null;this.Qb=NaN;this.I={};this.fa=0;this.i=this.l=a;Pc(this,this.U);hx(this);c?this.fa=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ix(this),jx(this))}
w(gx,H);m=gx.prototype;m.getId=function(){return this.u};
m.loadNewVideoConfig=function(a){if(!this.T){this.fa&&(clearTimeout(this.fa),this.fa=0);var b=a||{};b instanceof Ot||(b=new Ot(b));this.config=b;this.setConfig(a);jx(this);this.isReady()&&kx(this)}};
function ix(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.u,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.u:a.config.attrs.id=a.u);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=lx(a);ix(this);if(!this.ta){var b;this.ta=mx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=si(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=si(Number(a)||a))};
function kx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function nx(a){var b=!0,c=ox(a);c&&a.config&&(b=c.dataset.version===px(a));return b&&!!E("yt.player.Application.create")}
function jx(a){if(!a.T&&!a.Y){var b=nx(a);if(b&&"html5"===(ox(a)?"html5":null))a.da="html5",a.isReady()||qx(a);else if(rx(a),a.da="html5",b&&a.j&&a.l)a.l.appendChild(a.j),qx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=sx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?lx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.pc);qx(a)};
a.Y=!0;b?a.D():(Xt(px(a),a.D),(b=tx(a))&&du(b||""),ux(a)&&!c&&D("yt.player.Application.create",null))}}}
function ox(a){var b=Pd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function qx(a){if(!a.T){var b=ox(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!sx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}vx(a)}else a.Qb=setTimeout(function(){qx(a)},50)}}
function vx(a){hx(a);a.Pa=!0;var b=ox(a);if(b){a.m=wx(a,b,"addEventListener");a.ha=wx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=wx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);kx(a);a.ta&&a.ta(a.api);a.U.Ya("onReady",a.api)}
function wx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.u}),e.level="WARNING",e;}}}
function hx(a){a.Pa=!1;if(a.ha)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ha(b,a.h[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&clearTimeout(Number(c));a.I={};a.m=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Pa};
m.addEventListener=function(a,b){var c=this,d=mx(this,b);d&&(0<=Cb(this.qc,a)||this.h[a]||(b=xx(this,a),this.m&&this.m(a,b)),this.U.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.T||(b=mx(this,b))&&this.U.unsubscribe(a,b)};
function mx(a,b){var c=b;if("string"===typeof b){if(a.Fa[b])return a.Fa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function xx(a,b){function c(d){var e=setTimeout(function(){if(!a.T){try{a.U.Ya(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.u,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.I;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.I,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.da||(ox(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function rx(a){a.cancel();hx(a);a.da=null;a.config&&(a.config.loaded=!1);var b=ox(a);b&&(nx(a)||!ux(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&au(px(this),this.D);clearTimeout(this.Qb);this.Y=!1};
m.S=function(){rx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;H.prototype.S.call(this)};
function ux(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function px(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function tx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function sx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function lx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?Rb(e):e}return b}
;var yx={},zx="player_uid_"+(1E9*Math.random()>>>0);function Ax(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Pd(c):c;var e=zx+"_"+Sa(c),f=yx[e];if(f&&d)return Bx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new gx(c,e,a,b,void 0);yx[e]=f;f.addOnDisposeCallback(function(){delete yx[f.getId()]});
return f.api}
function Bx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Cx=null,Dx=null,Ex=null;
function Fx(){Pv();var a=km(),b=nm(119),c=1<window.devicePixelRatio;if(document.body&&Ii(document.body,"exp-invert-logo"))if(c&&!Ii(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ii(d,"inverted-hdpi")){var e=Gi(d);Hi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ii(document.body,"inverted-hdpi")&&Ji();if(b!=c){b="f"+(Math.floor(119/31)+1);d=om(b)||0;d=c?d|67108864:d&-67108865;0===d?delete hm[b]:(c=d.toString(16),hm[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in hm)hm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(hm[f])));var f=d.join("&");dm(b,f,63072E3,a.i,c)}}
function Gx(){Hx()}
function Ix(){Ov("ep_init_pr");Hx()}
function Hx(){var a=Cx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Jx(){Cx&&Cx.sendAbandonmentPing&&Cx.sendAbandonmentPing();S("PL_ATT")&&dx.dispose();for(var a=yi,b=0,c=yw.length;b<c;b++)a.qa(yw[b]);yw.length=0;Zt("//static.doubleclick.net/instream/ad_status.js");zw=!1;Xk("DCLKSTAT",0);Oc(Ex,Dx);Cx&&(Cx.removeEventListener("onVideoDataChange",Gx),Cx.destroy())}
;D("yt.setConfig",Xk);D("yt.config.set",Xk);D("yt.setMsg",Wt);D("yt.msgs.set",Wt);D("yt.logging.errors.log",Vs);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Iu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Lv("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=kl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Lv("watch",["pbs","pbu","pbp"]);Cx=Ax(a,c);Cx.addEventListener("onVideoDataChange",Gx);Cx.addEventListener("onReady",Ix);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Ex=new Xw(Cx):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Dx=new cx(window.parent,a,b),Ex=new ax(Cx,Dx.connection));Aw();T("ytidb_create_logger_embed_killswitch")||kn();a={};Jw.h||(Jw.h=new Jw);
Jw.h.install((a.flush_logs={callback:function(){Bs()}},a));
Uq();T("ytidb_clear_embedded_player")&&yi.pa(function(){var f,g;if(!lw){var h=Gr();Cr(h,{mc:kw,Gd:iw});var k={Zc:{feedbackEndpoint:Vu(cw),modifyChannelNotificationPreferenceEndpoint:Vu(dw),playlistEditEndpoint:Vu(ew),subscribeEndpoint:Vu(aw),unsubscribeEndpoint:Vu(bw),webPlayerShareEntityServiceEndpoint:Vu(fw)}},l=Ru(),n={};l&&(n.client_location=l);void 0===f&&(f=am());void 0===g&&(g=h.resolve(kw));Uv(k,g,f,n);Cr(h,{mc:$v,Hd:Tv.h});lw=h.resolve($v)}uw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ex);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||fx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Bw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Hu);D("yt.util.activity.init",E("yt.util.activity.init")||hr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||kr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||ir);window.addEventListener("load",al(function(){Fx()}));
window.addEventListener("pageshow",al(function(a){a.persisted||Fx()}));
window.addEventListener("pagehide",al(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Jx():a.persisted||Jx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Yk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Vs(e):Ws(e))};
te=Xs;window.addEventListener("unhandledrejection",function(a){Xs(a.reason)});
Db(S("ERRORS")||[],function(a){Vs.apply(null,a)});
Xk("ERRORS",[]);}).call(this);
