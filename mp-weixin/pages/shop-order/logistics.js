(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order/logistics"],{"26a2":function(n,t,e){},"2a77":function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}));var u=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"332a":function(n,t,e){"use strict";(function(n){e("3274");r(e("66fd"));var t=r(e("dc20"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"710a":function(n,t,e){"use strict";var r=e("26a2"),u=e.n(r);u.a},dc20:function(n,t,e){"use strict";e.r(t);var r=e("2a77"),u=e("e479");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("710a");var o,i=e("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=c.exports},def3:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,r,u,a,o){try{var i=n[a](o),c=i.value}catch(f){return void e(f)}i.done?t(c):Promise.resolve(c).then(r,u)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var o=n.apply(t,e);function i(n){a(o,r,u,i,c,"next",n)}function c(n){a(o,r,u,i,c,"throw",n)}i(void 0)}))}}var i={data:function(){return{logistics:""}},onLoad:function(n){var t=this;return o(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.id){e.next=6;break}return e.next=3,t.$api.info("orders",n.id);case 3:u=e.sent,t.logistics=u.data.logistics,console.log(t.logistics);case 6:case"end":return e.stop()}}),e)})))()},onUnload:function(){},methods:{}};t.default=i},e479:function(n,t,e){"use strict";e.r(t);var r=e("def3"),u=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=u.a}},[["332a","common/runtime","common/vendor"]]]);