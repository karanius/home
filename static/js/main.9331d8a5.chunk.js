(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{35:function(e,t,n){e.exports=n(63)},40:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){e.exports=n.p+"static/media/shadow.04fe26e5.png"},57:function(e,t,n){e.exports=n.p+"static/media/character.0a4b285b.png"},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o);n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(10),u=n(8),s=n(19),l=n(33),f=n.n(l),p=n(15),A="SET_BURGER_STATE",h="IS_BURGER_OPEN",m={burgerActive:null,burgerOpen:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(p.a)({},e,{burgerActive:t.payload});case h:return Object(p.a)({},e,{burgerOpen:t.payload});default:return e}},v="SET_CHARACTER_POSITION_LEFT",d="SET_CHARACTER_DIRECTION_ANIMATION",O="END_CHARACTER_ANIMATION",E="START_CHARACTER_ANIMATION",P="EEND_SPEECH_BUBBLE_ANIMATION",g="START_SPEECH_BUBBLE_ANIMATION",T={speechBubbleIsActive:null,characterIsActive:null,characterDirection:"right",characterLeft:-50},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)({},e,{characterLeft:t.payload});case P:case g:return Object(p.a)({},e,{speechBubbleIsActive:t.payload});case d:return Object(p.a)({},e,{characterDirection:t.payload});case E:return Object(p.a)({},e,{characterIsActive:t.payload});case O:return Object(p.a)({},e,{characterIsActive:null});default:return e}},y=Object(s.b)({navBar:b,animation:C}),B=(f.a,Object(s.c)(y)),N=n(3),j=n(4),w=n(6),G=n(5),k=n(7),x=(n(45),n(17)),I=(n(46),n(47),function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("burger-button").addEventListener("click",(function(t){var n=e.props,a=n.burgerOpen,r=n.isBurgerOpen;null===a?r(!0):!0===a&&r(null)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"burger-button",className:"burger"},r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}))}}]),t}(r.a.Component)),U=Object(u.b)((function(e){return{burgerOpen:e.navBar.burgerOpen}}),(function(e){return{isBurgerOpen:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))(I),S=(n(48),function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){document.querySelectorAll(".nav-link").forEach((function(e){e.addEventListener("click",(function(e){console.log("!")}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-items"},r.a.createElement(i.b,{className:"nav-link",to:"/about"},"ABOUT"),r.a.createElement(i.b,{className:"nav-link",to:"/portfolio"},"PORTFOLIO"),r.a.createElement(i.b,{className:"nav-link",to:"/contact"},"CONTACT"))}}]),t}(r.a.Component)),H=(n(50),function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).fireworks=function(e){console.log(e)},n}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".nav-logo");t.addEventListener("mouseenter",(function(t){e.fireworks("enter")})),t.addEventListener("mouseleave",(function(t){e.fireworks("leave")}))}},{key:"render",value:function(){return r.a.createElement(i.b,{className:"nav-logo",to:"/"},"DEV KAVIAN")}}]),t}(r.a.Component)),L=Object(u.b)((function(e){return{burgerActive:e.navBar.burgerActive}}))((function(e){var t=e.burgerActive;return r.a.createElement("div",{className:"nav"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(U,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(S,null)))})),_=(n(51),function(e){return{type:v,payload:e}}),D=function(e){return{type:P,payload:e}},R=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).openClose=function(e){return null===e?0:!0===e?35:void 0},n}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setCharacterPositionLeft,n=e.endSpeechBubbleAnimation,a=e.endCharacterAnimation;document.querySelectorAll(".nav-link").forEach((function(e){e.addEventListener("click",(function(e){n(null),a(null),t(-50)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"drop-nav",style:{top:"".concat(this.openClose(this.props.burgerOpen),"px")}},r.a.createElement(i.b,{className:"nav-link",to:"/about"},"ABOUT"),r.a.createElement(i.b,{className:"nav-link",to:"/portfolio"},"PORTFOLIO"),r.a.createElement(i.b,{className:"nav-link",to:"/contact"},"CONTACT"))}}]),t}(r.a.Component),M=Object(u.b)((function(e){var t=e.navBar,n=e.animation;return{burgerOpen:t.burgerOpen,speechBubbleIsActive:n.speechBubbleIsActive}}),(function(e){return{endSpeechBubbleAnimation:function(t){return e(D(t))},endCharacterAnimation:function(t){return e(function(e){return{type:O,payload:e}}(t))},setCharacterPositionLeft:function(t){return e(_(t))}}}))(R),F=(n(52),function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setBurgerSate;window.innerWidth<=550&&e(!0),window.addEventListener("resize",(function(t){t.target.innerWidth>=550?e(null):e(!0)}))}},{key:"render",value:function(){var e=this.props.burgerActive;return r.a.createElement("div",{id:"navHeighAnchor"},r.a.createElement(L,null),e?r.a.createElement(M,null):null)}}]),t}(r.a.Component)),q=Object(u.b)((function(e){return{burgerActive:e.navBar.burgerActive}}),(function(e){return{setBurgerSate:function(t){return e(function(e){return{type:A,payload:e}}(t))}}}))(F),W=(n(53),n(2)),X=n.n(W),Y=n(18),z=(n(55),function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.characterDirection;return r.a.createElement("div",{className:"character"},r.a.createElement("img",{className:"pixelArt shadow",alt:"shadow",src:n(56)}),r.a.createElement("img",{className:"pixelArt character-sprite-sheet ".concat(e),alt:"charX",src:n(57)}))}}]),t}(r.a.Component)),J=Object(u.b)((function(e){return{characterDirection:e.animation.characterDirection}}),null)(z),K=(n(58),n(59),n(24)),V=n(25),$=X.a.mark(fe),Q=X.a.mark(pe),Z=X.a.mark(Ae);var ee,te=n(0),ne=(ee=te)&&"object"===typeof ee&&"default"in ee?ee.default:ee;function ae(e){return re.apply(this,arguments)}function re(){return(re=Object(Y.a)(X.a.mark((function e(t){var n,a,r,o,c,i,u=arguments;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=u.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=u[r];o=0,c=a;case 2:if(!(o<c.length)){e.next=21;break}i=c[o],e.t0=typeof i,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,oe(t,i);case 9:return e.abrupt("break",18);case 10:return e.next=12,ie(i);case 12:return e.abrupt("break",18);case 13:return e.next=15,i.apply(void 0,[t].concat(a));case 15:return e.abrupt("break",18);case 16:return e.next=18,i;case 18:o++,e.next=2;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(Y.a)(X.a.mark((function e(t,n){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=he(t.textContent,n),e.next=3,se(t,[].concat(Object(K.a)(Ae(" ",a)),Object(K.a)(pe(n,a))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(Y.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e,t){return le.apply(this,arguments)}function le(){return(le=Object(Y.a)(X.a.mark((function e(t,n){var a,r,o,c,i,u,s=arguments;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=s.length>2&&void 0!==s[2]?s[2]:30,r=!0,o=!1,c=void 0,e.prev=4,i=fe(n)[Symbol.iterator]();case 6:if(r=(u=i.next()).done){e.next=14;break}return(0,u.value)(t),e.next=11,ie(a+a*(Math.random()-.5));case 11:r=!0,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),o=!0,c=e.t0;case 20:e.prev=20,e.prev=21,r||null==i.return||i.return();case 23:if(e.prev=23,!o){e.next=26;break}throw c;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[4,16,20,28],[21,,23,27]])})))).apply(this,arguments)}function fe(e){var t,n,a,r,o,c;return X.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=!0,n=!1,a=void 0,i.prev=3,r=X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),o=e[Symbol.iterator]();case 6:if(t=(c=o.next()).done){i.next=11;break}return i.delegateYield(r(),"t0",8);case 8:t=!0,i.next=6;break;case 11:i.next=17;break;case 13:i.prev=13,i.t1=i.catch(3),n=!0,a=i.t1;case 17:i.prev=17,i.prev=18,t||null==o.return||o.return();case 20:if(i.prev=20,!n){i.next=23;break}throw a;case 23:return i.finish(20);case 24:return i.finish(17);case 25:case"end":return i.stop()}}),$,null,[[3,13,17,25],[18,,20,24]])}function pe(e){var t,n,a,r,o=arguments;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=Object(V.a)(e),n=t.slice(0),a=o.length>1&&void 0!==o[1]?o[1]:0,r=o.length>2&&void 0!==o[2]?o[2]:n.length;case 3:if(!(a<r)){c.next=8;break}return c.next=6,n.slice(0,++a).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),Q)}function Ae(e){var t,n,a,r,o=arguments;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=Object(V.a)(e),n=t.slice(0),a=o.length>1&&void 0!==o[1]?o[1]:0,r=o.length>2&&void 0!==o[2]?o[2]:n.length;case 3:if(!(r>a)){c.next=8;break}return c.next=6,n.slice(0,--r).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),Z)}function he(e,t){var n=Object(V.a)(t).slice(0);return[].concat(Object(K.a)(e),[NaN]).findIndex((function(e,t){return n[t]!==e}))}var me="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("");var be=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},ve=te.memo((function(e){var t=e.steps,n=e.loop,a=e.className,r=e.wrapper,o=void 0===r?"p":r,c=te.useRef(null),i=o,u=[me];return a&&u.unshift(a),te.useEffect((function(){n===1/0?ae.apply(void 0,[c.current].concat(be(t),[ae])):"number"===typeof n?ae.apply(void 0,[c.current].concat(be(Array(n).fill(t).flat()))):ae.apply(void 0,[c.current].concat(be(t)))})),ne.createElement(i,{ref:c,className:u.join(" ")})})),de=function(e){var t=e.steps;return r.a.createElement(ve,{steps:t,loop:1/0,wrapper:"b"})},Oe=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(w.a)(this,Object(G.a)(t).call(this,e))).adjusterFunction=function(){var e=n.props,t=e.speechBubbleIsActive,a=e.endSpeechBubbleAnimation;if(t){var r;r=requestAnimationFrame((function e(){console.log("running"),t&&document.querySelector(".character-position")?(document.querySelector(".show").style.top="".concat(document.querySelector(".character-position").offsetTop-100,"px"),document.querySelector(".show").style.left="".concat(document.querySelector(".character-position").offsetLeft-200,"px"),setTimeout((function(){requestAnimationFrame(e)}),500)):(cancelAnimationFrame(r),a(null))}))}else console.log("speechBubbleIs NOT Active")},n.state={stage:n.props.stage,steps1:["Hi! \ud83d\udc4b",2e3,"My name is Kavian \ud83d\ude0a",4e3,' and I do the "dev" thing! \u2764\ufe0f',4e3,"give me the job! \ud83e\udd17",3e3,"btw, welcome to my website! \ud83d\ude4c",3e3,"Hope you \ud83d\udc4d it!",3e3,"I \ud83d\udee0\ufe0f it myself!! ...using the \u269b\ufe0f library",3e3,"I love \u269b\ufe0f",4e3,"Please check out the rest of my website.",5e3]},n}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.adjusterFunction()}},{key:"render",value:function(){var e=this.state,t=e.stage,n=e.steps1,a=this.props.speechBubbleIsActive;if(1===t)return r.a.createElement("div",{className:"".concat(a?"show":null)},r.a.createElement("div",{className:"speech-bubble"},r.a.createElement("div",{className:"msg-itself",style:{}},r.a.createElement(de,{steps:n}))))}}]),t}(r.a.Component),Ee=Object(u.b)((function(e){var t=e.animation;return{speechBubbleIsActive:t.speechBubbleIsActive,bubbleTailIsActive:t.bubbleTailIsActive}}),(function(e){return{endSpeechBubbleAnimation:function(t){return e(D(t))}}}))(Oe),Pe=function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(w.a)(this,Object(G.a)(t).call(this))).animate=function(t){1===t&&e.moveToMiddle()},e.moveToMiddle=Object(Y.a)(X.a.mark((function t(){var n,a,r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,a=n.startCharacterAnimation,r=n.setCharacterDirectionAnimation,t.abrupt("return",new Promise((function(t,n){var o;a(!0),o=requestAnimationFrame((function n(a){e.props.characterIsActive?e.props.characterLeft<e.state.pageCenterX+30?(e.props.setCharacterPositionLeft(e.props.characterLeft+5),setTimeout((function(){requestAnimationFrame(n)}),80)):(r("stand"),cancelAnimationFrame(o),e.props.startSpeechBubbleAnimation(!0),t()):(e.props.setCharacterPositionLeft(-50),cancelAnimationFrame(o),t())}))})));case 2:case"end":return t.stop()}}),t)}))),e.state={pageCenterX:window.innerWidth/2,pageBottomY:window.innerHeight-200,stage:1},e}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.stage;1===t&&this.props.setCharacterDirectionAnimation("right"),window.addEventListener("resize",(function(t){e.setState({pageCenterX:window.innerWidth/2,pageBottomY:window.innerHeight-200})})),this.animate(t)}},{key:"render",value:function(){var e=this.state,t=e.pageBottomY,n=e.stage,a=this.props,o=a.speechBubbleIsActive,c=a.characterLeft;return r.a.createElement("div",{className:"x-container"},o?r.a.createElement(Ee,{left:c,stage:n}):null,r.a.createElement("div",{className:"character-position",style:{top:"".concat(t,"px"),left:"".concat(c,"px"),position:"absolute"}},r.a.createElement(J,null)))}}]),t}(r.a.Component),ge=Object(u.b)((function(e){var t=e.animation;return{speechBubbleIsActive:t.speechBubbleIsActive,characterIsActive:t.characterIsActive,characterDirection:t.characterDirection,characterLeft:t.characterLeft}}),(function(e){return{startSpeechBubbleAnimation:function(t){return e(function(e){return{type:g,payload:e}}(t))},setCharacterDirectionAnimation:function(t){return e(function(e){return{type:d,payload:e}}(t))},setCharacterPositionLeft:function(t){return e(_(t))},startCharacterAnimation:function(t){return e(function(e){return{type:E,payload:e}}(t))}}}))(Pe),Te=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(ge,null))},Ce=(n(60),function(){return r.a.createElement("div",{className:"about-page"},"ABOUT PAGE ABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGEABOUT PAGE")}),ye=(n(61),function(){return r.a.createElement("div",{className:"portfolio-page"},"Portfolio Page Portfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio PagePortfolio Page")}),Be=(n(62),function(){return r.a.createElement("div",{className:"contact-page"},"CONTACT PAGE CONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGECONTACT PAGE")}),Ne=function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(w.a)(this,Object(G.a)(t).call(this))).webPageHeightAdjuster=function(){var t=e.state,n=t.navBarHeight;return t.windowTotalHeight-n},e.state={navBarHeight:null,windowTotalHeight:null},e}return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({navBarHeight:document.getElementById("navHeighAnchor").offsetHeight,windowTotalHeight:window.innerHeight}),window.addEventListener("resize",(function(t){e.setState({navBarHeight:document.getElementById("navHeighAnchor").offsetHeight,windowTotalHeight:window.innerHeight})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"website"},r.a.createElement(q,null),r.a.createElement("div",{id:"route-container",style:{height:"".concat(this.webPageHeightAdjuster(),"px")}},r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:Te}),r.a.createElement(x.a,{path:"/about",component:Ce}),r.a.createElement(x.a,{path:"/portfolio",component:ye}),r.a.createElement(x.a,{path:"/contact",component:Be}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(u.a,{store:B},r.a.createElement(i.a,null,r.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9331d8a5.chunk.js.map