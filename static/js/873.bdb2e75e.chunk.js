"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[873],{873:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(861),i=t(439),a=t(757),c=t.n(a),s=t(791),o=t(689),u=t(87),l=t(243),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,l.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat("65128993e18cf258695ad7fce6893761"));case 5:return t=e.sent,e.abrupt("return",t.data);case 9:e.prev=9,e.t0=e.catch(2),console.log("Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}(),h=t(184),p=function(){var e,r,t=null!==(e=null===(r=(0,o.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",a=(0,o.UO)().movieId,l=(0,s.useState)(null),p=(0,i.Z)(l,2),v=p[0],f=p[1],x=(0,s.useState)(!0),m=(0,i.Z)(x,2),j=m[0],g=m[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a);case 2:(r=e.sent)&&f(r),g(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,j]),(0,h.jsx)(h.Fragment,{children:j?(0,h.jsx)("div",{children:"Loading... "}):v?(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path," "),alt:"cze"}),(0,h.jsx)(u.rU,{to:t,children:"Go back"}),(0,h.jsxs)("h2",{children:["Title: ",v.title]}),(0,h.jsxs)("p",{children:["User Score: ",Math.ceil(10*v.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:v.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{children:v.genres&&v.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")}),"")}())}))}),(0,h.jsx)("span",{children:"Additional information"}),(0,h.jsx)(u.rU,{to:"cast",state:{from:t},children:"Cast"}),(0,h.jsx)(u.rU,{to:"reviews",state:{from:t},children:"Reviews"}),(0,h.jsx)(o.j3,{})]}):(0,h.jsx)("div",{children:"There is no movie with this id!"})})}}}]);
//# sourceMappingURL=873.bdb2e75e.chunk.js.map