(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/gear2.c2c478b4.svg"},,,,,,,,,,,,,,,,function(e,t){},,function(e,t,a){e.exports=a.p+"static/media/gear.0b123230.svg"},function(e,t,a){e.exports=a.p+"static/media/tie.404ca5b5.svg"},function(e,t,a){e.exports=a.p+"static/media/html5.1a202c4f.svg"},function(e,t,a){e.exports=a.p+"static/media/css3.544d6b5a.svg"},function(e,t,a){e.exports=a.p+"static/media/sass.d3e94e5a.svg"},function(e,t,a){e.exports=a.p+"static/media/bootstrap.699e0c70.svg"},function(e,t,a){e.exports=a.p+"static/media/js.c84f592a.svg"},function(e,t,a){e.exports=a.p+"static/media/jquery.7e04a699.svg"},function(e,t,a){e.exports=a.p+"static/media/node.de843389.svg"},function(e,t,a){e.exports=a.p+"static/media/react.c037c57e.svg"},function(e,t,a){e.exports=a.p+"static/media/git.98a54548.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql.04279c50.svg"},function(e,t,a){e.exports=a.p+"static/media/mongo.e2988ed5.svg"},,function(e,t,a){e.exports=a(81)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/shadow.04fe26e5.png"},function(e,t,a){e.exports=a.p+"static/media/character.0a4b285b.png"},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c);a(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(10),s=a(14),l=a(18),u=a(33),m="SET_DROPNAV_STATUS",p="DROP_NAV_IS_OPEN",d={dropLinkIsActive:!1,dropNavIsOpen:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)({},e,{dropLinkIsActive:t.payload});case p:return Object(u.a)({},e,{dropNavIsOpen:t.payload});default:return e}},h=a(37),v=a.n(h),b=Object(l.b)({navBar:f,animation:v.a}),g=Object(l.c)(b),k=a(5),E=a(6),y=a(8),O=a(7),N=a(9),w=(a(63),a(17)),j=a(2),S=(a(64),function(e){return{type:p,payload:e}}),L=Object(s.b)((function(e){return{dropNavIsOpen:e.navBar.dropNavIsOpen}}),(function(e){return{openCloseDropNav:function(t){return e(S(t))}}}))((function(e){var t=e.dropNavIsOpen,a=e.openCloseDropNav,c=Object(n.useState)(!1),o=Object(j.a)(c,2),s=o[0],l=o[1];if(Object(n.useEffect)((function(){var e=function(){a(!1)};return document.querySelectorAll(".nav-link").forEach((function(t){t.addEventListener("click",e)})),function(){document.querySelectorAll(".nav-link").forEach((function(t){t.removeEventListener("click",e)}))}}),[]),!s&&document.querySelector(".drop-nav")){l(!0);var u,m=document.querySelector(".drop-nav");if(t){u=requestAnimationFrame((function e(t){m.offsetTop<=30?(m.style.top=m.offsetTop+2+"px",requestAnimationFrame(e)):(cancelAnimationFrame(u),l(!1))}))}else{u=requestAnimationFrame((function e(t){m.offsetTop>=0?(m.style.top=m.offsetTop-2+"px",requestAnimationFrame(e)):(cancelAnimationFrame(u),l(!1))}))}}return r.a.createElement("div",{className:"drop-nav"},r.a.createElement(i.b,{className:"nav-link",to:"/competencies"},"COMPETENCIES"),r.a.createElement("span",null,"|"),r.a.createElement(i.b,{className:"nav-link",to:"/portfolio"},"PORTFOLIO"),r.a.createElement("span",null,"|"),r.a.createElement(i.b,{className:"nav-link",to:"/contact"},"CONTACT"))})),x=(a(66),function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).close=function(){a.props.openCloseDropNav(!1)},a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.querySelectorAll(".nav-logo").forEach((function(t){t.addEventListener("click",e.close)}))}},{key:"componentWillUnmount",value:function(){var e=this;document.querySelectorAll(".nav-logo").forEach((function(t){t.removeEventListener("click",e.close)}))}},{key:"render",value:function(){return r.a.createElement(i.b,{className:"nav-logo",to:"/home"},"DEV KAVIAN")}}]),t}(r.a.Component)),A=Object(s.b)(null,(function(e){return{openCloseDropNav:function(t){return e(S(t))}}}))(x),C=(a(67),function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).dropLinkWillOpenClose=function(e){a.props.dropNavIsOpen?a.props.openCloseDropNav(!1):a.props.openCloseDropNav(!0)},a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#burger-button").addEventListener("click",this.dropLinkWillOpenClose)}},{key:"componentWillUnmount",value:function(){document.querySelector("#burger-button").removeEventListener("click",this.dropLinkWillOpenClose)}},{key:"render",value:function(){return r.a.createElement("div",{id:"burger-button",className:"burger"},r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}))}}]),t}(r.a.Component)),T=Object(s.b)((function(e){return{dropNavIsOpen:e.navBar.dropNavIsOpen}}),(function(e){return{openCloseDropNav:function(t){return e(S(t))}}}))(C),D=(a(68),function(e){function t(){return Object(k.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-items"},r.a.createElement(i.b,{className:"nav-link",to:"/competencies"},"COMPETENCIES"),r.a.createElement(i.b,{className:"nav-link",to:"/portfolio"},"PORTFOLIO"),r.a.createElement(i.b,{className:"nav-link",to:"/contact"},"CONTACT"))}}]),t}(r.a.Component)),I=(a(69),function(e){function t(){return Object(k.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("#navHeighAnchor");new ResizeObserver((function(t){t[0].contentRect.width<=600?e.props.setDropNavStatus(!0):(e.props.setDropNavStatus(!1),e.props.openCloseDropNav(!1))})).observe(t)}},{key:"render",value:function(){var e=this.props.dropLinkIsActive;return r.a.createElement("div",{id:"navHeighAnchor"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav"},r.a.createElement(A,null),r.a.createElement(T,null)),r.a.createElement(L,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav"},r.a.createElement(A,null),r.a.createElement(D,null))))}}]),t}(r.a.Component)),F=Object(s.b)((function(e){return{dropLinkIsActive:e.navBar.dropLinkIsActive}}),(function(e){return{setDropNavStatus:function(t){return e(function(e){return{type:m,payload:e}}(t))},openCloseDropNav:function(t){return e(S(t))}}}))(I),q=(a(70),a(71),function(e){function t(){return Object(k.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.characterDirection;return r.a.createElement("div",{className:"character"},r.a.createElement("img",{className:"pixelArt shadow",alt:"shadow",src:a(72)}),r.a.createElement("img",{className:"pixelArt character-sprite-sheet ".concat(e),alt:"charX",src:a(73)}))}}]),t}(r.a.Component)),P=(a(74),a(75),a(28)),B=a(27),M=a(3),K=a.n(M),W=a(20),U=K.a.mark(te),G=K.a.mark(ae),H=K.a.mark(ne);var R,Q=a(0),Y=(R=Q)&&"object"===typeof R&&"default"in R?R.default:R;function J(e){return V.apply(this,arguments)}function V(){return(V=Object(W.a)(K.a.mark((function e(t){var a,n,r,c,o,i,s=arguments;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=s.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=s[r];c=0,o=n;case 2:if(!(c<o.length)){e.next=21;break}i=o[c],e.t0=typeof i,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,_(t,i);case 9:return e.abrupt("break",18);case 10:return e.next=12,X(i);case 12:return e.abrupt("break",18);case 13:return e.next=15,i.apply(void 0,[t].concat(n));case 15:return e.abrupt("break",18);case 16:return e.next=18,i;case 18:c++,e.next=2;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return z.apply(this,arguments)}function z(){return(z=Object(W.a)(K.a.mark((function e(t,a){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=re(t.textContent,a),e.next=3,$(t,[].concat(Object(P.a)(ne(" ",n)),Object(P.a)(ae(a,n))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(W.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(W.a)(K.a.mark((function e(t,a){var n,r,c,o,i,s,l=arguments;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.length>2&&void 0!==l[2]?l[2]:30,r=!0,c=!1,o=void 0,e.prev=4,i=te(a)[Symbol.iterator]();case 6:if(r=(s=i.next()).done){e.next=14;break}return(0,s.value)(t),e.next=11,X(n+n*(Math.random()-.5));case 11:r=!0,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),c=!0,o=e.t0;case 20:e.prev=20,e.prev=21,r||null==i.return||i.return();case 23:if(e.prev=23,!c){e.next=26;break}throw o;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[4,16,20,28],[21,,23,27]])})))).apply(this,arguments)}function te(e){var t,a,n,r,c,o;return K.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=!0,a=!1,n=void 0,i.prev=3,r=K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),c=e[Symbol.iterator]();case 6:if(t=(o=c.next()).done){i.next=11;break}return i.delegateYield(r(),"t0",8);case 8:t=!0,i.next=6;break;case 11:i.next=17;break;case 13:i.prev=13,i.t1=i.catch(3),a=!0,n=i.t1;case 17:i.prev=17,i.prev=18,t||null==c.return||c.return();case 20:if(i.prev=20,!a){i.next=23;break}throw n;case 23:return i.finish(20);case 24:return i.finish(17);case 25:case"end":return i.stop()}}),U,null,[[3,13,17,25],[18,,20,24]])}function ae(e){var t,a,n,r,c=arguments;return K.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t=Object(B.a)(e),a=t.slice(0),n=c.length>1&&void 0!==c[1]?c[1]:0,r=c.length>2&&void 0!==c[2]?c[2]:a.length;case 3:if(!(n<r)){o.next=8;break}return o.next=6,a.slice(0,++n).join("");case 6:o.next=3;break;case 8:case"end":return o.stop()}}),G)}function ne(e){var t,a,n,r,c=arguments;return K.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t=Object(B.a)(e),a=t.slice(0),n=c.length>1&&void 0!==c[1]?c[1]:0,r=c.length>2&&void 0!==c[2]?c[2]:a.length;case 3:if(!(r>n)){o.next=8;break}return o.next=6,a.slice(0,--r).join("");case 6:o.next=3;break;case 8:case"end":return o.stop()}}),H)}function re(e,t){var a=Object(B.a)(t).slice(0);return[].concat(Object(P.a)(e),[NaN]).findIndex((function(e,t){return a[t]!==e}))}var ce="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("");var oe=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},ie=Q.memo((function(e){var t=e.steps,a=e.loop,n=e.className,r=e.wrapper,c=void 0===r?"p":r,o=Q.useRef(null),i=c,s=[ce];return n&&s.unshift(n),Q.useEffect((function(){a===1/0?J.apply(void 0,[o.current].concat(oe(t),[J])):"number"===typeof a?J.apply(void 0,[o.current].concat(oe(Array(a).fill(t).flat()))):J.apply(void 0,[o.current].concat(oe(t)))})),Y.createElement(i,{ref:o,className:s.join(" ")})})),se=function(e){var t=e.steps;return r.a.createElement(ie,{steps:t,loop:1/0,wrapper:"b"})},le=function(e){return Object(n.useEffect)((function(){var t,a=!1,n=e.isActive,r=e.top;if(n){t=requestAnimationFrame((function e(){document.querySelector(".character-position")&&document.querySelector(".show")?(document.querySelector(".show").style.top="".concat(document.querySelector(".character-position").offsetTop-r,"px"),document.querySelector(".show").style.left="".concat(document.querySelector(".character-position").offsetLeft-200,"px"),a||setTimeout((function(){requestAnimationFrame(e)}),500)):cancelAnimationFrame(t)}))}else cancelAnimationFrame(t);return function(){a=!0}}),[]),r.a.createElement("div",{className:"".concat(e.isActive?"show":null),style:{transform:"scale(".concat(e.scale,")")}},r.a.createElement("div",{className:"speech-bubble"},r.a.createElement("div",{className:"msg-itself",style:{fontSize:"".concat(e.fontSize?e.fontSize:null,"rem")}},r.a.createElement(se,{steps:e.steps}))))},ue=function(){var e=Object(n.useState)(100),t=Object(j.a)(e,1)[0],a=Object(n.useState)(!1),c=Object(j.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(["Hi! \ud83d\udc4b",2e3,"My name is Kavian \ud83d\ude0a",4e3,' and I do the "dev" thing! \u2764\ufe0f',4e3,"Welcome to my website! \ud83d\ude4c",3e3,"Hope you \ud83d\udc4d it!",3e3,"I \ud83d\udee0\ufe0f it myself!! ...using the \u269b\ufe0f library",3e3,"I love \u269b\ufe0f",4e3,"Please check out the rest of my website.",5e3]),l=Object(j.a)(s,1)[0],u=Object(n.useState)("right"),m=Object(j.a)(u,2),p=m[0],d=m[1],f=Object(n.useState)(-50),h=Object(j.a)(f,2),v=h[0],b=h[1],g=Object(n.useState)(!0),k=Object(j.a)(g,2),E=k[0],y=k[1],O=Object(n.useState)(window.innerWidth/2),N=Object(j.a)(O,2),w=N[0],S=N[1],L=Object(n.useState)(window.innerHeight-250),x=Object(j.a)(L,2),A=x[0],C=x[1];return Object(n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"});var e=function(){S(window.innerWidth/2),C(window.innerHeight-250)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){var e=!1;return E&&(v<w?setTimeout((function(){e||b((function(e){return e+5}))}),100):(y(!1),d("stand"),i(!0))),function(){e=!0}}),[v]),r.a.createElement("div",{className:"x-container"},o?r.a.createElement(le,{isActive:o,top:t,left:v,steps:l}):null,r.a.createElement("div",{className:"character-position",style:{top:"".concat(A,"px"),left:"".concat(v,"px"),position:"absolute"}},r.a.createElement(q,{characterDirection:p})))},me=function(e){return r.a.createElement("div",{className:"home-page"},r.a.createElement(ue,null))},pe=(a(77),a(39)),de=a.n(pe),fe=a(21),he=a.n(fe),ve=a(40),be=a.n(ve),ge=a(41),ke=a.n(ge),Ee=a(42),ye=a.n(Ee),Oe=a(43),Ne=a.n(Oe),we=a(44),je=a.n(we),Se=a(45),Le=a.n(Se),xe=a(46),Ae=a.n(xe),Ce=a(47),Te=a.n(Ce),De=a(48),Ie=a.n(De),Fe=a(49),qe=a.n(Fe),Pe=a(50),Be=a.n(Pe),Me=a(51),Ke=a.n(Me),We=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,1)[0],a=Object(n.useState)(0),c=Object(j.a)(a,1)[0],o=Object(n.useState)(["look at me!",2e3,"I can do the Moonwalk",3e3," \ud83e\udd29",3e3]),i=Object(j.a)(o,1)[0],s=Object(n.useState)(-50),l=Object(j.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)("right"),d=Object(j.a)(p,2),f=d[0],h=d[1],v=Object(n.useState)(!0),b=Object(j.a)(v,2),g=b[0],k=b[1],E=Object(n.useState)(!1),y=Object(j.a)(E,2),O=(y[0],y[1]);Object(n.useEffect)((function(){return window.scrollTo({top:65,behavior:"smooth"}),O(!0),window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]),Object(n.useEffect)((function(){var e=!1,t=document.querySelector(".dev-kavian-name").offsetLeft,a=document.querySelector(".dev-kavian-name").offsetWidth+document.querySelector(".dev-kavian-name").offsetLeft-60,n=document.querySelector(".character-position").offsetLeft;return g&&("right"===f?e||(h("left"),m(t)):"left"===f&&(e||(h("right"),m(a))),e||k(!1)),g||("right"===f?n>=t?n<=t?(k(!0),setTimeout((function(){e||m((function(e){return e-5}))}),65)):setTimeout((function(){e||m((function(e){return e-5}))}),65):(k(!0),m((function(e){return e+5}))):"left"===f&&(n<=a?n>=a?(k(!0),setTimeout((function(){e||m((function(e){return e+5}))}),65)):setTimeout((function(){e||m((function(e){return e+5}))}),65):e||(k(!0),m((function(e){return e-5}))))),function(){e=!0}}),[u]);var N=function(e){var t=window.scrollY,a=(window.innerHeight,document.querySelector(".dev-kavian"));a.style.opacity="".concat(1/(t-10+1)<0?1:1/(t-10+1)),Number(a.style.opacity)<.03&&(a.style.opacity=0),document.querySelector(".gear-holder").style.opacity=(t+10)/100};return r.a.createElement("div",{className:"comp-main-container"},r.a.createElement("div",{className:"top-card"},r.a.createElement("div",{className:"dev-kavian"},r.a.createElement(le,{isActive:t,fontSize:2.3,top:c,scale:.7,left:u,stage:1,steps:i}),r.a.createElement("div",{className:"character-position",style:{left:"".concat(u,"px"),position:"absolute"}},r.a.createElement(q,{characterDirection:f})),r.a.createElement("p",{className:"dev-kavian-name"},"DEV KAVIAN")),r.a.createElement("div",{className:"gear-holder"},r.a.createElement("div",{className:"gear-holder-left"},r.a.createElement("img",{className:"left-gear",width:"50",alt:"gear",src:he.a})),r.a.createElement("div",{className:"gear-holder-middle"},r.a.createElement("div",{className:"middle-gear-wrapper"},r.a.createElement("img",{className:"middle-gear",alt:"gear",src:de.a}),r.a.createElement("img",{className:"small-middle-gear",width:"50",alt:"gear",src:he.a}),r.a.createElement("img",{className:"smaller-middle-gear",width:"50",alt:"gear",src:he.a}))),r.a.createElement("div",{className:"gear-holder-right"},r.a.createElement("img",{className:"right-gear",width:"50",alt:"gear",src:he.a})))),r.a.createElement("div",{className:"clip-background-color"},r.a.createElement("div",{className:"path-clip-border"},r.a.createElement("div",{className:"path-clip"}))),r.a.createElement("div",{className:"firstCard"},r.a.createElement("h1",{className:"msg-title"},"FULLSTACK"),r.a.createElement("ul",{className:"list-container"},r.a.createElement("li",{className:"list"},r.a.createElement("p",{className:"title-logo"},"</>"),r.a.createElement("h3",{className:"title-msg"},"Front-End")," ",r.a.createElement("p",{className:" title-description"},"To Make It Look Good.",r.a.createElement("br",null),"User Friendly.")),r.a.createElement("li",{className:"list"},r.a.createElement("p",{className:"title-logo"},"{ "," ",r.a.createElement("img",{width:"15",alt:"tie",src:be.a})," "," }"),r.a.createElement("h3",{className:"title-msg"},"Back-End")," ",r.a.createElement("p",{className:"title-description"},"To Make It Function.",r.a.createElement("br",null),"No Aheadaches.")))),r.a.createElement("div",{className:"clip-background-color-two"},r.a.createElement("div",{className:"path-clip-border-two"},r.a.createElement("div",{className:"path-clip-two"}))),r.a.createElement("div",{className:"second-card"},r.a.createElement("p",{className:"skill-title"},"SKILLS"),r.a.createElement("div",{className:"skill-logos-container"},r.a.createElement("img",{className:"",alt:"HTML: Hyper Text Markup Language Version 5",title:"HTML: Hyper Text Markup Language Version 5",src:ke.a}),r.a.createElement("img",{className:"",alt:"CSS: Cascading Style Sheets Version 3",title:"CSS: Cascading Style Sheets Version 3",src:ye.a}),r.a.createElement("img",{className:"",alt:"Sass: Syntactically Awesome Style Sheets",title:"Sass: Syntactically Awesome Style Sheets",src:Ne.a}),r.a.createElement("img",{className:"",alt:"Bootstrap: a front end library",title:"Bootstrap: a front end library",src:je.a}),r.a.createElement("img",{className:"",alt:"JS: Javascript",title:"JS: Javascript",src:Le.a}),r.a.createElement("img",{className:"",alt:"jQuery: javascript framework",title:"jQuery: javascript framework",src:Ae.a}),r.a.createElement("img",{className:"",alt:"Node.js: JavaScript run-time environment that executes code outside a browser.",title:"Node.js a JavaScript run-time environment that executes code outside a browser.",src:Te.a}),r.a.createElement("img",{className:"",alt:"React.js: Front End javascript Framework",title:"React.js Front End javascript Framework",src:Ie.a}),r.a.createElement("img",{className:"",alt:"Git: version-control system",title:"Git: version-control system",src:qe.a}),r.a.createElement("img",{className:"",alt:"MySQL: Structured Query Language",title:"MySQL: Structured Query Language",src:Be.a}),r.a.createElement("img",{className:"",alt:"MongoDB: noSQL database technology",title:"MongoDB: noSQL database technology",src:Ke.a}),r.a.createElement("p",{className:"and-more"},"and more"))),r.a.createElement("footer",{className:"comp-footer"},"Built By Dev Kavian",r.a.createElement("br",null)," 2020"))},Ue=(a(78),a(52)),Ge=(a(79),function(e){e.demo;var t=e.title,a=e.imageLink,n=e.liveLink,c=e.repo;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{loading:"lazy",className:"card-img",src:a,alt:"pix"}),r.a.createElement("p",{className:"card-title"},t.toUpperCase()),r.a.createElement("div",{className:"card-buttons"},r.a.createElement("a",{className:"".concat(n?null:"gray"),rel:"noopener noreferrer",target:"_blank",href:n},"Live Link"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:c},"Repo")))}),He=(a(80),[{id:13,imageLink:"https://raw.githubusercontent.com/karanius/APPSchat/master/screenShot.png",liveLink:"https://appschat.herokuapp.com/",repo:"https://github.com/karanius/APPSchat",title:"Appschat",demo:!0},{id:12,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/smart-i.png?token=AFO4PS3O6Q56AX5C57AOXUK6K333W",liveLink:"https://karanius.github.io/smart-i/",repo:"https://github.com/karanius/smart-i",title:"smart-i"},{id:11,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/Screen%20Shot%202020-02-19%20at%205.52.42%20PM.png?token=AFO4PSYX3R63V7BO2TW5SQK6K33TC",liveLink:"https://business-qard.herokuapp.com/",repo:"https://github.com/jondam1985/business-QaRd",title:"Business qards"},{id:10,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/workoutTracker.png?token=AFO4PS7DXUFWDC4TXCKY62C6K35BG",liveLink:"https://uoft-workout-tracker.herokuapp.com/",repo:"https://github.com/karanius/workoutTracker",title:"Workout tracker"},{id:9,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/eatDaBurger.png?token=AFO4PS77E6CLDUAYF6JDEJC6K35PO",liveLink:"http://afternoon-savannah-01200.herokuapp.com/",repo:"https://github.com/karanius/EatDaBurger",title:"Eat Da Burger"},{id:8,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/Screen%20Shot%202020-02-19%20at%206.16.28%20PM.png?token=AFO4PS5GFYUXGRA5IHKDU4K6K36GM",liveLink:null,repo:"https://github.com/karanius/employeeTracker",title:"employee tracker"},{id:7,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/NoteTaker.png?token=AFO4PS3GDLVEF5DYYMECBZ26K36MG",liveLink:"https://notetakerapps.herokuapp.com/",repo:"https://github.com/karanius/noteTaker",title:"note taker"},{id:6,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/Teamgenerator.png?token=AFO4PSYLUBCJ25QPSU3HJMC6K36S6",liveLink:null,repo:"https://github.com/karanius/TeamGenerator",title:"Team generator"},{id:5,imageLink:"https://raw.githubusercontent.com/karanius/pdfGenerator/master/screenShot.png",liveLink:null,repo:"https://github.com/karanius/pdfGenerator",title:"git account pdf generator"},{id:4,imageLink:"https://raw.githubusercontent.com/karanius/portfolioImages/master/weather.png?token=AFO4PS3UOOZLYFHPXCTYL2C6K36XC",liveLink:"https://karanius.github.io/weatherDashboard/",repo:"https://github.com/karanius/weatherDashboard",title:"weather dashboard"},{id:3,imageLink:"https://raw.githubusercontent.com/karanius/Day-Planner/master/screenShot.png",liveLink:"https://karanius.github.io/Day-Planner/",repo:"https://github.com/karanius/Day-Planner",title:"day planner"},{id:2,imageLink:"https://raw.githubusercontent.com/karanius/WebApi/master/screenShot.png",liveLink:"hhttps://karanius.github.io/WebApi/",repo:"https://github.com/karanius/WebApi",title:"Quize Challenge"},{id:1,imageLink:"https://raw.githubusercontent.com/karanius/passwordGenerator/master/screenShot.png",liveLink:"https://karanius.github.io/passwordGenerator/",repo:"https://github.com/karanius/passwordGenerator",title:"password generator"}]),Re=function(e){function t(){var e;return Object(k.a)(this,t),(e=Object(y.a)(this,Object(O.a)(t).call(this))).state={cards:He},e}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cards-container-warapper"},r.a.createElement("div",{className:"cards-container"},this.state.cards.map((function(e){var t=e.id,a=Object(Ue.a)(e,["id"]);return r.a.createElement(Ge,Object.assign({key:t},a))}))))}}]),t}(r.a.Component),Qe=function(){return r.a.createElement("div",{className:"port-container"},r.a.createElement("div",{className:"top-title-port"},r.a.createElement("p",{className:"top-title-msg-port"},"PORTFOLIO")),r.a.createElement("div",{className:"clip-background-color"},r.a.createElement("div",{className:"path-clip-border"},r.a.createElement("div",{className:"path-clip"}))),r.a.createElement(Re,null),r.a.createElement("div",{className:"clip-background-color-two"},r.a.createElement("div",{className:"path-clip-border-two"},r.a.createElement("div",{className:"path-clip-two"}))),r.a.createElement("div",{className:"bottom-port"},"All The Projects Listed Here Are Build By Kavian Darvish Under The Open Source Licenses. You May Use The Code As You Please. Enjoy."),r.a.createElement("footer",{className:"comp-footer"},"Built By Dev Kavian",r.a.createElement("br",null)," 2020"))},Ye=function(e){function t(){return Object(k.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"website"},r.a.createElement(F,null),r.a.createElement("div",{id:"route-container"},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/home",component:me}),r.a.createElement(w.a,{exact:!0,path:"/competencies",component:We}),r.a.createElement(w.a,{path:"/portfolio",component:Qe}))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(s.a,{store:g},r.a.createElement(i.a,null,r.a.createElement(Ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[53,1,2]]]);
//# sourceMappingURL=main.ca3d9370.chunk.js.map