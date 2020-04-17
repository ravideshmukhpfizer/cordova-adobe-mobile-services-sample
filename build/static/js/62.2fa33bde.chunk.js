(this.webpackJsonpMyCapacitor=this.webpackJsonpMyCapacitor||[]).push([[62],{159:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_toast",(function(){return v}));var n=r(16),o=r(1),a=r.n(o),i=r(4),s=r(5),c=r(6),d=r(17),l=r(13),u=(r(20),r(3)),p=(r(30),r(26)),b=r(168),h=r(169),g=function(t,e){var r=Object(u.a)(),n=Object(u.a)(),o=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":n.fromTo("transform","translateY(-100%)","translateY(".concat("calc(10px + var(--ion-safe-area-top, 0px))",")"));break;case"middle":var i=Math.floor(o.clientHeight/2-a.clientHeight/2);a.style.top="".concat(i,"px"),n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(".concat("calc(-10px - var(--ion-safe-area-bottom, 0px))",")"))}return r.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},m=function(t,e){var r=Object(u.a)(),n=Object(u.a)(),o=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":n.fromTo("transform","translateY(".concat("calc(10px + var(--ion-safe-area-top, 0px))",")"),"translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(".concat("calc(-10px - var(--ion-safe-area-bottom, 0px))",")"),"translateY(100%)")}return r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},f=function(t,e){var r=Object(u.a)(),n=Object(u.a)(),o=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":var i=Math.floor(o.clientHeight/2-a.clientHeight/2);a.style.top="".concat(i,"px"),n.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},x=function(t){var e=Object(u.a)(),r=Object(u.a)(),n=t.host||t,o=t.querySelector(".toast-wrapper");return r.addElement(o).fromTo("opacity",.99,0),e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},v=function(){function t(e){var r=this;Object(s.a)(this,t),Object(d.l)(this,e),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){var e=t.detail.role;if(Object(p.j)(e)){var n=r.getButtons().find((function(t){return"cancel"===t.role}));r.callButtonHandler(n)}},Object(p.e)(this.el),this.didPresent=Object(d.f)(this,"ionToastDidPresent",7),this.willPresent=Object(d.f)(this,"ionToastWillPresent",7),this.willDismiss=Object(d.f)(this,"ionToastWillDismiss",7),this.didDismiss=Object(d.f)(this,"ionToastDidDismiss",7)}return Object(c.a)(t,[{key:"present",value:function(){var t=Object(i.a)(a.a.mark((function t(){var e=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.f)(this,"toastEnter",g,f,this.position);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return e.dismiss(void 0,"timeout")}),this.duration));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"dismiss",value:function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(p.g)(this,t,e,"toastLeave",m,x,this.position)}},{key:"onDidDismiss",value:function(){return Object(p.h)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(p.h)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function(){return this.buttons?this.buttons.map((function(t){return"string"===typeof t?{text:t}:t})):[]}},{key:"buttonClick",value:function(){var t=Object(i.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.role,!Object(p.j)(r)){t.next=3;break}return t.abrupt("return",this.dismiss(void 0,r));case 3:return t.next=5,this.callButtonHandler(e);case 5:if(!t.sent){t.next=8;break}return t.abrupt("return",this.dismiss(void 0,r));case 8:return t.abrupt("return",Promise.resolve());case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"callButtonHandler",value:function(){var t=Object(i.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.handler){t.next=12;break}return t.prev=1,t.next=4,Object(p.n)(e.handler);case 4:if(!1!==t.sent){t.next=7;break}return t.abrupt("return",!1);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"renderButtons",value:function(t,e){var r=this;if(0!==t.length){var o=Object(l.b)(this),a=Object(n.a)({"toast-button-group":!0},"toast-button-group-".concat(e),!0);return Object(d.j)("div",{class:a},t.map((function(t){return Object(d.j)("button",{type:"button",class:w(t),tabIndex:0,onClick:function(){return r.buttonClick(t)},part:"button"},Object(d.j)("div",{class:"toast-button-inner"},t.icon&&Object(d.j)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&Object(d.j)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}}},{key:"render",value:function(){var t=this.getButtons(),e=t.filter((function(t){return"start"===t.side})),r=t.filter((function(t){return"start"!==t.side})),o=Object(l.b)(this),a=Object(n.a)({"toast-wrapper":!0},"toast-".concat(this.position),!0);return Object(d.j)(d.b,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign(Object(n.a)({},o,!0),Object(b.a)(this.color)),Object(b.b)(this.cssClass)),{"toast-translucent":this.translucent}),onIonToastWillDismiss:this.dispatchCancelHandler},Object(d.j)("div",{class:a},Object(d.j)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),Object(d.j)("div",{class:"toast-content"},void 0!==this.header&&Object(d.j)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(d.j)("div",{class:"toast-message",part:"message",innerHTML:Object(h.a)(this.message)})),this.renderButtons(r,"end"))))}},{key:"el",get:function(){return Object(d.g)(this)}}]),t}(),w=function(t){var e;return Object.assign((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text},Object(n.a)(e,"toast-button-".concat(t.role),void 0!==t.role),Object(n.a)(e,"ion-focusable",!0),Object(n.a)(e,"ion-activatable",!0),e),Object(b.b)(t.cssClass))};v.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},168:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return u}));var n=r(1),o=r.n(n),a=r(4),i=r(16),s=function(t,e){return null!==e.closest(t)},c=function(t){return"string"===typeof t&&t.length>0?Object(i.a)({"ion-color":!0},"ion-color-".concat(t),!0):void 0},d=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},l=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=Object(a.a)(o.a.mark((function t(e,r,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||l.test(e)){t.next=5;break}if(!(a=document.querySelector("ion-router"))){t.next=5;break}return null!=r&&r.preventDefault(),t.abrupt("return",a.push(e,n));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},169:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){try{if("string"!==typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach((function(t){for(var r=e.querySelectorAll(t),n=r.length-1;n>=0;n--){var i=r[n];i.parentNode?i.parentNode.removeChild(i):e.removeChild(i);for(var s=a(i),c=0;c<s.length;c++)o(s[c])}}));for(var n=a(e),i=0;i<n.length;i++)o(n[i]);var c=document.createElement("div");c.appendChild(e);var d=c.querySelector("div");return null!==d?d.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},o=function t(e){if(!e.nodeType||1===e.nodeType){for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes.item(r),o=n.name;if(i.includes(o.toLowerCase())){var s=n.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}else e.removeAttribute(o)}for(var c=a(e),d=0;d<c.length;d++)t(c[d])}},a=function(t){return null!=t.children?t.children:t.childNodes},i=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=62.2fa33bde.chunk.js.map