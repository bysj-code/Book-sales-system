(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{3054:function(t,n,e){"use strict";(function(t){e("3274");a(e("66fd"));var n=a(e("9886"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},9886:function(t,n,e){"use strict";e.r(n);var a=e("9afd"),r=e("ac94");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("b17b");var c,i=e("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"3b1ac260",null,!1,a["a"],c);n["default"]=o.exports},"9afd":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},ac94:function(t,n,e){"use strict";e.r(n);var a=e("c1cd"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},b17b:function(t,n,e){"use strict";var a=e("d540"),r=e.n(a);r.a},c1cd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,r,u,c){try{var i=t[u](c),o=i.value}catch(d){return void e(d)}i.done?n(o):Promise.resolve(o).then(a,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var c=t.apply(n,e);function i(t){u(c,a,r,i,o,"next",t)}function o(t){u(c,a,r,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{detail:{},id:""}},onLoad:function(t){var n=this;return c(a.default.mark((function e(){var r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.info("news",t.id);case 3:r=e.sent,n.detail=r.data,n.detail.content=n.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return e.stop()}}),e)})))()}};n.default=i},d540:function(t,n,e){}},[["3054","common/runtime","common/vendor"]]]);