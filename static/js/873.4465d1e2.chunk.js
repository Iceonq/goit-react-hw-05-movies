"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[873],{873:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),c=t(439),a=t(757),s=t.n(a),i=t(791),o=t(87),u=t(689),l=t(243),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,l.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat("65128993e18cf258695ad7fce6893761"));case 5:return t=e.sent,e.abrupt("return",t.data);case 9:e.prev=9,e.t0=e.catch(2),console.log("Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}(),h=t(184),d=function(){var e=(0,u.UO)().movieId,r=(0,i.useState)([]),t=(0,c.Z)(r,2),a=t[0],l=t[1];if((0,i.useEffect)((function(){return(0,n.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p(e);case 2:(t=r.sent)&&l(t);case 4:case"end":return r.stop()}}),r)})))}),[e]),!a)return null;var d=Math.ceil(10*a.vote_average);return(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path," "),alt:"cze"}),(0,h.jsx)(o.rU,{to:"/",children:"Go back"}),(0,h.jsxs)("h2",{children:["Title: ",a.title]}),(0,h.jsxs)("p",{children:["User Score: ",d,"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:a.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{children:a.genres&&a.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")}),"")}())}))}),(0,h.jsx)("span",{children:"Additional information"}),(0,h.jsx)(o.rU,{to:"cast",children:"Cast"}),(0,h.jsx)(o.rU,{to:"reviews",children:"Reviews"}),(0,h.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=873.4465d1e2.chunk.js.map