(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[5],{11:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchContactsRequest",(function(){return r})),n.d(e,"fetchContactsSuccess",(function(){return a})),n.d(e,"fetchContactsError",(function(){return u})),n.d(e,"addContactRequest",(function(){return o})),n.d(e,"addContactSuccess",(function(){return i})),n.d(e,"addContactError",(function(){return s})),n.d(e,"deleteContactRequest",(function(){return b})),n.d(e,"deleteContactSuccess",(function(){return j})),n.d(e,"deleteContactError",(function(){return l})),n.d(e,"filterContact",(function(){return d}));var c=n(5),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),d=Object(c.b)("contacts/filter")},127:function(t,e,n){},128:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(22),u=n.n(a),o=n(21),i=n(13),s=n(64),b=n(8),j=n(28),l=(n(81),n(25)),d=n(7),f=n(16),O=n(3),h=["isAuthenticated","redirectTo","children"];function p(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(d.a)(t,h),r=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{children:r?n:Object(O.jsx)(b.a,{to:e})}))}var v=["isAuthenticated","redirectTo","children"];function x(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(d.a)(t,v),r=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{children:r&&c.restricted?Object(O.jsx)(b.a,{to:e}):n}))}var g=n(65),C=n.n(g);var k=function(t){var e=t.children;return Object(O.jsx)("div",{className:C.a.container,children:e})},m=n(34),y=n.n(m);var _=function(){var t=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsxs)("nav",{className:y.a.nav,children:[Object(O.jsx)(o.b,{to:"/",exact:!0,className:y.a.link,activeClassName:y.a.activeLink,children:"Home"}),t&&Object(O.jsx)(o.b,{to:"/contacts",exact:!0,className:y.a.link,activeClassName:y.a.activeLink,children:"Contacts"})]})},S=n(144),E=n(50),N=n.n(E);function w(){var t=Object(i.b)(),e=Object(i.c)(f.b.getUserName);return Object(O.jsxs)("div",{className:N.a.container,children:[Object(O.jsxs)("span",{className:N.a.name,children:["Welcome, ",e]}),Object(O.jsx)(S.a,{color:"secondary",variant:"outlined",type:"button",onClick:function(){return t(f.a.logOut())},children:"Log out"})]})}var A=n(39),R=n.n(A),q=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(o.b,{to:"/register",exact:!0,className:R.a.link,activeClassName:R.a.activeLink,children:"Sign up"}),Object(O.jsx)(o.b,{to:"/login",exact:!0,className:R.a.link,activeClassName:R.a.activeLink,children:"Log in"})]})},L=n(66),U=n.n(L);function T(){var t=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsxs)("header",{className:U.a.header,children:[Object(O.jsx)(_,{}),t?Object(O.jsx)(w,{}):Object(O.jsx)(q,{})]})}var z=n(67),I=n.n(z),P=(n(124),n(68)),J=n.n(P);var B=function(){return Object(O.jsx)("div",{className:J.a.overlay,children:Object(O.jsx)(I.a,{type:"ThreeDots",color:"#f5009999",height:"35"})})},M=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,211))})),K=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,212))})),Y=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(4)]).then(n.bind(null,213))})),D=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(2)]).then(n.bind(null,217))})),F=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,219))}));var G,H,Q,V=function(){var t=Object(i.b)();return Object(c.useEffect)((function(){t(f.a.getCurrentUser())}),[t]),Object(O.jsxs)(k,{children:[Object(O.jsx)(T,{}),Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(B,{}),children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(x,{path:"/",exact:!0,children:Object(O.jsx)(M,{})}),Object(O.jsx)(x,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(O.jsx)(K,{})}),Object(O.jsx)(x,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(O.jsx)(Y,{})}),Object(O.jsx)(p,{path:"/contacts",redirectTo:"/login",children:Object(O.jsx)(D,{})}),Object(O.jsx)(b.b,{children:Object(O.jsx)(F,{})})]})}),Object(O.jsx)(j.a,{autoClose:3700,position:"top-center"})]})},W=n(23),X=n(5),Z=n(27),$=n(69),tt=n.n($),et=n(2),nt=n(14),ct=n(11),rt=Object(X.c)([],(G={},Object(et.a)(G,ct.fetchContactsSuccess,(function(t,e){return e.payload})),Object(et.a)(G,ct.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(W.a)(t),[n])})),Object(et.a)(G,ct.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),G)),at=Object(X.c)(!1,(H={},Object(et.a)(H,ct.fetchContactsRequest,(function(){return!0})),Object(et.a)(H,ct.fetchContactsSuccess,(function(){return!1})),Object(et.a)(H,ct.fetchContactsError,(function(){return!1})),Object(et.a)(H,ct.addContactRequest,(function(){return!0})),Object(et.a)(H,ct.addContactSuccess,(function(){return!1})),Object(et.a)(H,ct.addContactError,(function(){return!1})),Object(et.a)(H,ct.deleteContactRequest,(function(){return!0})),Object(et.a)(H,ct.deleteContactSuccess,(function(){return!1})),Object(et.a)(H,ct.deleteContactError,(function(){return!1})),H)),ut=Object(X.c)("",Object(et.a)({},ct.filterContact,(function(t,e){return e.payload}))),ot=function(t,e){return e.payload},it=Object(X.c)(null,(Q={},Object(et.a)(Q,ct.fetchContactsError,ot),Object(et.a)(Q,ct.addContactError,ot),Object(et.a)(Q,ct.deleteContactError,ot),Object(et.a)(Q,ct.fetchContactsRequest,(function(){return null})),Object(et.a)(Q,ct.addContactRequest,(function(){return null})),Object(et.a)(Q,ct.deleteContactRequest,(function(){return null})),Q)),st=Object(nt.b)({items:rt,filter:ut,isLoading:at,error:it}),bt=n(42),jt=Object(W.a)(Object(X.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),lt={key:"auth",storage:tt.a,whitelist:["token"]},dt=Object(X.a)({reducer:{auth:Object(Z.g)(lt,bt.a),contacts:st},middleware:jt,devTools:!1}),ft=Object(Z.h)(dt);n(127);u.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(i.a,{store:dt,children:Object(O.jsx)(s.a,{loading:null,persistor:ft,children:Object(O.jsx)(o.a,{children:Object(O.jsx)(V,{})})})})}),document.getElementById("root"))},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var c={};n.r(c),n.d(c,"register",(function(){return f})),n.d(c,"logIn",(function(){return O})),n.d(c,"logOut",(function(){return h})),n.d(c,"getCurrentUser",(function(){return p}));var r={};n.r(r),n.d(r,"getIsAuthenticated",(function(){return v})),n.d(r,"getUserName",(function(){return x})),n.d(r,"getLoading",(function(){return g})),n.d(r,"getError",(function(){return C}));var a=n(4),u=(n(42),n(26)),o=n.n(u),i=n(38),s=n(29),b=n.n(s),j=n(28);b.a.defaults.baseURL="https://connections-api.herokuapp.com/";var l=function(t){b.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){b.a.defaults.headers.common.Authorization=""},f=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.k)()),e.prev=1,e.next=4,b.a.post("/users/signup",t);case 4:c=e.sent,l(c.data.token),n(Object(a.l)(c.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.j)(e.t0)),400===e.t0.response.status?j.b.error("User creation error! Please try again!"):500===e.t0.response.status?j.b.error("Oops! Server error! Please try later!"):j.b.error("Something went wrong!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.e)()),e.prev=1,e.next=4,b.a.post("/users/login",t);case 4:c=e.sent,l(c.data.token),n(Object(a.f)(c.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.d)(e.t0)),j.b.error("Invalid email or password! Try again!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(a.h)()),t.prev=1,t.next=4,b.a.post("/users/logout");case 4:return n=t.sent,d(n.data.token),e(Object(a.i)(n.data)),t.abrupt("return");case 10:t.prev=10,t.t0=t.catch(1),e(Object(a.g)(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e,n){var c,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return l(r),e(Object(a.b)()),t.prev=5,t.next=8,b.a.get("/users/current");case 8:u=t.sent,e(Object(a.c)(u.data)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(a.a)(t.t0)),d(),j.b.warn("Authorization timed out! Please authenticate again!");case 17:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},v=function(t){return t.auth.isAuthenticated},x=function(t){return t.auth.user.name},g=function(t){return t.auth.isLoading},C=function(t){return t.auth.error}},34:function(t,e,n){t.exports={link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB"}},39:function(t,e,n){t.exports={link:"AuthNav_link__2ejsg",activeLink:"AuthNav_activeLink__3huQJ"}},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return O}));var c=n(5),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),f=Object(c.b)("auth/getCurrentUserSuccess"),O=Object(c.b)("auth/getCurrentUserError")},42:function(t,e,n){"use strict";var c,r,a,u,o,i=n(2),s=n(5),b=n(14),j=n(4),l={name:null,email:null},d=Object(s.c)(l,(c={},Object(i.a)(c,j.l,(function(t,e){return e.payload.user})),Object(i.a)(c,j.f,(function(t,e){return e.payload.user})),Object(i.a)(c,j.i,(function(){return l})),Object(i.a)(c,j.c,(function(t,e){return e.payload})),c)),f=Object(s.c)(null,(r={},Object(i.a)(r,j.l,(function(t,e){return e.payload.token})),Object(i.a)(r,j.f,(function(t,e){return e.payload.token})),Object(i.a)(r,j.i,(function(){return null})),r)),O=function(t,e){return e.payload},h=Object(s.c)(null,(a={},Object(i.a)(a,j.j,O),Object(i.a)(a,j.d,O),Object(i.a)(a,j.g,O),Object(i.a)(a,j.a,O),Object(i.a)(a,j.k,(function(){return null})),Object(i.a)(a,j.e,(function(){return null})),Object(i.a)(a,j.h,(function(){return null})),Object(i.a)(a,j.b,(function(){return null})),a)),p=Object(s.c)(!1,(u={},Object(i.a)(u,j.l,(function(){return!0})),Object(i.a)(u,j.f,(function(){return!0})),Object(i.a)(u,j.c,(function(){return!0})),Object(i.a)(u,j.j,(function(){return!1})),Object(i.a)(u,j.d,(function(){return!1})),Object(i.a)(u,j.a,(function(){return!1})),Object(i.a)(u,j.i,(function(){return!1})),u)),v=Object(s.c)(!1,(o={},Object(i.a)(o,j.k,(function(){return!0})),Object(i.a)(o,j.l,(function(){return!1})),Object(i.a)(o,j.j,(function(){return!1})),Object(i.a)(o,j.e,(function(){return!0})),Object(i.a)(o,j.f,(function(){return!1})),Object(i.a)(o,j.d,(function(){return!1})),Object(i.a)(o,j.h,(function(){return!0})),Object(i.a)(o,j.i,(function(){return!1})),Object(i.a)(o,j.g,(function(){return!1})),Object(i.a)(o,j.b,(function(){return!0})),Object(i.a)(o,j.c,(function(){return!1})),Object(i.a)(o,j.a,(function(){return!1})),o));e.a=Object(b.b)({user:d,isAuthenticated:p,token:f,error:h,isLoading:v})},50:function(t,e,n){t.exports={container:"UserMenu_container__GgYhE",avatar:"UserMenu_avatar__2e7Jj",name:"UserMenu_name__3e8KV"}},65:function(t,e,n){t.exports={container:"Container_container__3RIox"}},66:function(t,e,n){t.exports={header:"AppBar_header__1Yk8v"}},68:function(t,e,n){t.exports={overlay:"LoaderComponent_overlay__3-Jp5"}}},[[128,8,9]]]);
//# sourceMappingURL=main.d7baf21c.chunk.js.map