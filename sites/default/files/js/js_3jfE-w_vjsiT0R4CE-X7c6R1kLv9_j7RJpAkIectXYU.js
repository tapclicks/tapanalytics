(function(e){function t(e){if(e in u.style)return e;var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1);if(e in u.style)return e;for(e=0;e<t.length;++e){var r=t[e]+n;if(r in u.style)return r}}function n(e){"string"===typeof e&&this.parse(e);return this}function r(t,n,r,i){var s=[];e.each(t,function(t){t=e.camelCase(t);t=e.transit.propertyMap[t]||e.cssProps[t]||t;t=t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()});-1===e.inArray(t,s)&&s.push(t)});e.cssEase[r]&&(r=e.cssEase[r]);
var u=""+o(n)+" "+r;0<parseInt(i,10)&&(u+=" "+o(i));var a=[];e.each(s,function(e,t){a.push(t+" "+u)});return a.join(", ")}function i(t,n){n||(e.cssNumber[t]=!0);e.transit.propertyMap[t]=a.transform;e.cssHooks[t]={get:function(n){return e(n).css("transit:transform").get(t)},set:function(n,r){var i=e(n).css("transit:transform");i.setFromString(t,r);e(n).css({"transit:transform":i})}}}function s(e,t){return"string"===typeof e&&!e.match(/^[\-0-9\.]+$/)?e:""+e+t}function o(t){e.fx.speeds[t]&&(t=e.fx.speeds[t]);
return s(t,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var u=document.createElement("div"),a={},f=-1<navigator.userAgent.toLowerCase().indexOf("chrome");a.transition=t("transition");a.transitionDelay=t("transitionDelay");a.transform=t("transform");a.transformOrigin=t("transformOrigin");u.style[a.transform]=
"";u.style[a.transform]="rotateY(90deg)";a.transform3d=""!==u.style[a.transform];var l=a.transitionEnd={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[a.transition]||null,c;for(c in a)a.hasOwnProperty(c)&&"undefined"===typeof e.support[c]&&(e.support[c]=a[c]);u=null;e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||
new n},set:function(t,r){var i=r;i instanceof n||(i=new n(i));t.style[a.transform]="WebkitTransform"===a.transform&&!f?i.toString(!0):i.toString();e(t).data("transform",i)}};e.cssHooks.transform={set:e.cssHooks["transit:transform"].set};"1.8">e.fn.jquery&&(e.cssHooks.transformOrigin={get:function(e){return e.style[a.transformOrigin]},set:function(e,t){e.style[a.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[a.transition]},set:function(e,t){e.style[a.transition]=t}});i("scale");
i("translate");i("rotate");i("rotateX");i("rotateY");i("rotate3d");i("perspective");i("skewX");i("skewY");i("x",!0);i("y",!0);n.prototype={setFromString:function(e,t){var r="string"===typeof t?t.split(","):t.constructor===Array?t:[t];r.unshift(e);n.prototype.set.apply(this,r)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=
s(e,"deg")},rotateX:function(e){this.rotateX=s(e,"deg")},rotateY:function(e){this.rotateY=s(e,"deg")},scale:function(e,t){void 0===t&&(t=e);this.scale=e+","+t},skewX:function(e){this.skewX=s(e,"deg")},skewY:function(e){this.skewY=s(e,"deg")},perspective:function(e){this.perspective=s(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
null!==e&&void 0!==e&&(this._translateX=s(e,"px"));null!==t&&void 0!==t&&(this._translateY=s(t,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");e[0]&&(e[0]=parseFloat(e[0]));e[1]&&(e[1]=parseFloat(e[1]));return e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));
e[3]&&(e[3]=s(e[3],"deg"));return e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[],n;for(n in this)if(this.hasOwnProperty(n)&&(a.transform3d||!("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n)))"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"));return t.join(" ")}};e.fn.transition=e.fn.transit=function(t,
n,i,s){var u=this,f=0,c=!0;"function"===typeof n&&(s=n,n=void 0);"function"===typeof i&&(s=i,i=void 0);"undefined"!==typeof t.easing&&(i=t.easing,delete t.easing);"undefined"!==typeof t.duration&&(n=t.duration,delete t.duration);"undefined"!==typeof t.complete&&(s=t.complete,delete t.complete);"undefined"!==typeof t.queue&&(c=t.queue,delete t.queue);"undefined"!==typeof t.delay&&(f=t.delay,delete t.delay);"undefined"===typeof n&&(n=e.fx.speeds._default);"undefined"===typeof i&&(i=e.cssEase._default);
n=o(n);var h=r(t,n,i,f),v=e.transit.enabled&&a.transition?parseInt(n,10)+parseInt(f,10):0;if(0===v)return n=c,i=function(e){u.css(t);s&&s.apply(u);e&&e()},!0===n?u.queue(i):n?u.queue(n,i):i(),u;var m={};n=c;i=function(n){var r=0;"MozTransition"===a.transition&&25>r&&(r=25);window.setTimeout(function(){var r=!1,i=function(){r&&u.unbind(l,i);0<v&&u.each(function(){this.style[a.transition]=m[this]||null});"function"===typeof s&&s.apply(u);"function"===typeof n&&n()};0<v&&l&&e.transit.useTransitionEnd?
(r=!0,u.bind(l,i)):window.setTimeout(i,v);u.each(function(){0<v&&(this.style[a.transition]=h);e(this).css(t)})},r)};!0===n?u.queue(i):n?u.queue(n,i):i();return this};e.transit.getTransitionValue=r})(jQuery);
(function(e,t){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+
1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/
2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/
2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/
u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*
Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*
t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75)return r*7.5625*t*t+n;else if(t<2/2.75)return r*(7.5625*(t-=1.5/2.75)*t+.75)+n;else if(t<2.5/2.75)return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n;else return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});
e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var i=e(this),
s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached"))s.push({src:t.attr("src"),element:t[0]});e.each(o,function(e,n){var r=t.css(n);if(!r)return true;var i;while(i=u.exec(r))s.push({src:i[2],element:t[0]})})})}else i.find("img:uncached").each(function(){s.push({src:this.src,element:this})});var f=s.length,l=0;if(f==0)t.call(i[0]);e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;
n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in
window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*
180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u)e.preventDefault();else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=
l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v)if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target);if(t==d){if(n.swipe)n.swipe.call(_,e,direction,distance);switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,
e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0)if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m)P=e.touches.length;E=
p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd)if(distance>=n.threshold){E=d;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m)P=e.touches.length;distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else C(e);M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F=
{x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}})(jQuery);
function revslider_showDoubleJqueryError(sliderID){var errorMessage="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";errorMessage+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";errorMessage+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";errorMessage+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
errorMessage="<span style='font-size:16px;color:#BC0C06;'>"+errorMessage+"</span>";jQuery(sliderID).show().html(errorMessage)}
(function(e){function t(e){if(e in u.style)return e;var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1);if(e in u.style)return e;for(e=0;e<t.length;++e){var r=t[e]+n;if(r in u.style)return r}}function n(e){"string"===typeof e&&this.parse(e);return this}function r(t,n,r,i){var s=[];e.each(t,function(t){t=e.camelCase(t);t=e.transit.propertyMap[t]||e.cssProps[t]||t;t=t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()});-1===e.inArray(t,s)&&s.push(t)});e.cssEase[r]&&(r=e.cssEase[r]);
var u=""+o(n)+" "+r;0<parseInt(i,10)&&(u+=" "+o(i));var a=[];e.each(s,function(e,t){a.push(t+" "+u)});return a.join(", ")}function i(t,n){n||(e.cssNumber[t]=!0);e.transit.propertyMap[t]=a.transform;e.cssHooks[t]={get:function(n){return e(n).css("transit:transform").get(t)},set:function(n,r){var i=e(n).css("transit:transform");i.setFromString(t,r);e(n).css({"transit:transform":i})}}}function s(e,t){return"string"===typeof e&&!e.match(/^[\-0-9\.]+$/)?e:""+e+t}function o(t){e.fx.speeds[t]&&(t=e.fx.speeds[t]);
return s(t,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var u=document.createElement("div"),a={},f=-1<navigator.userAgent.toLowerCase().indexOf("chrome");a.transition=t("transition");a.transitionDelay=t("transitionDelay");a.transform=t("transform");a.transformOrigin=t("transformOrigin");u.style[a.transform]=
"";u.style[a.transform]="rotateY(90deg)";a.transform3d=""!==u.style[a.transform];var l=a.transitionEnd={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[a.transition]||null,c;for(c in a)a.hasOwnProperty(c)&&"undefined"===typeof e.support[c]&&(e.support[c]=a[c]);u=null;e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||
new n},set:function(t,r){var i=r;i instanceof n||(i=new n(i));t.style[a.transform]="WebkitTransform"===a.transform&&!f?i.toString(!0):i.toString();e(t).data("transform",i)}};e.cssHooks.transform={set:e.cssHooks["transit:transform"].set};"1.8">e.fn.jquery&&(e.cssHooks.transformOrigin={get:function(e){return e.style[a.transformOrigin]},set:function(e,t){e.style[a.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[a.transition]},set:function(e,t){e.style[a.transition]=t}});i("scale");
i("translate");i("rotate");i("rotateX");i("rotateY");i("rotate3d");i("perspective");i("skewX");i("skewY");i("x",!0);i("y",!0);n.prototype={setFromString:function(e,t){var r="string"===typeof t?t.split(","):t.constructor===Array?t:[t];r.unshift(e);n.prototype.set.apply(this,r)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=
s(e,"deg")},rotateX:function(e){this.rotateX=s(e,"deg")},rotateY:function(e){this.rotateY=s(e,"deg")},scale:function(e,t){void 0===t&&(t=e);this.scale=e+","+t},skewX:function(e){this.skewX=s(e,"deg")},skewY:function(e){this.skewY=s(e,"deg")},perspective:function(e){this.perspective=s(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
null!==e&&void 0!==e&&(this._translateX=s(e,"px"));null!==t&&void 0!==t&&(this._translateY=s(t,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");e[0]&&(e[0]=parseFloat(e[0]));e[1]&&(e[1]=parseFloat(e[1]));return e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));
e[3]&&(e[3]=s(e[3],"deg"));return e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[],n;for(n in this)if(this.hasOwnProperty(n)&&(a.transform3d||!("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n)))"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"));return t.join(" ")}};e.fn.transition=e.fn.transit=function(t,
n,i,s){var u=this,f=0,c=!0;"function"===typeof n&&(s=n,n=void 0);"function"===typeof i&&(s=i,i=void 0);"undefined"!==typeof t.easing&&(i=t.easing,delete t.easing);"undefined"!==typeof t.duration&&(n=t.duration,delete t.duration);"undefined"!==typeof t.complete&&(s=t.complete,delete t.complete);"undefined"!==typeof t.queue&&(c=t.queue,delete t.queue);"undefined"!==typeof t.delay&&(f=t.delay,delete t.delay);"undefined"===typeof n&&(n=e.fx.speeds._default);"undefined"===typeof i&&(i=e.cssEase._default);
n=o(n);var h=r(t,n,i,f),v=e.transit.enabled&&a.transition?parseInt(n,10)+parseInt(f,10):0;if(0===v)return n=c,i=function(e){u.css(t);s&&s.apply(u);e&&e()},!0===n?u.queue(i):n?u.queue(n,i):i(),u;var m={};n=c;i=function(n){var r=0;"MozTransition"===a.transition&&25>r&&(r=25);window.setTimeout(function(){var r=!1,i=function(){r&&u.unbind(l,i);0<v&&u.each(function(){this.style[a.transition]=m[this]||null});"function"===typeof s&&s.apply(u);"function"===typeof n&&n()};0<v&&l&&e.transit.useTransitionEnd?
(r=!0,u.bind(l,i)):window.setTimeout(i,v);u.each(function(){0<v&&(this.style[a.transition]=h);e(this).css(t)})},r)};!0===n?u.queue(i):n?u.queue(n,i):i();return this};e.transit.getTransitionValue=r})(jQuery);
(function(d){+"use strict";var n="left",m="right",c="up",u="down",b="in",v="out",k="none",q="auto",j="swipe",r="pinch",e="click",x="horizontal",s="vertical",h="all",f="start",i="move",g="end",o="cancel",a="ontouchstart"in window,w="TouchSwipe";var l={fingers:1,threshold:75,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,triggerOnTouchEnd:true,
triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};d.fn.swipe=function(A){var z=d(this),y=z.data(w);if(y&&typeof A==="string")if(y[A])return y[A].apply(this,Array.prototype.slice.call(arguments,1));else d.error("Method "+A+" does not exist on jQuery.swipe");else if(!y&&(typeof A==="object"||!A))return t.apply(this,arguments);return z};d.fn.swipe.defaults=l;d.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:i,PHASE_END:g,
PHASE_CANCEL:o};d.fn.swipe.directions={LEFT:n,RIGHT:m,UP:c,DOWN:u,IN:b,OUT:v};d.fn.swipe.pageScroll={NONE:k,HORIZONTAL:x,VERTICAL:s,AUTO:q};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function t(y){if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined)))y.allowPageScroll=k;if(!y)y={};y=d.extend({},d.fn.swipe.defaults,y);return this.each(function(){var A=d(this);var z=A.data(w);if(!z){z=new p(this,y);A.data(w,z)}})}function p(S,af){var aF=a||!af.fallbackToMouseEvents,
ax=aF?"touchstart":"mousedown",U=aF?"touchmove":"mousemove",au=aF?"touchend":"mouseup",D=aF?null:"mouseleave",R="touchcancel";var ac=0;var N=null;var ag=0;var aB=0;var A=0;var ai=1;var aH=0;var H=d(S);var O="start";var aE=0;var ah=null;var I=0;var Y=0;var aA=0;var aJ=0;try{H.bind(ax,ar);H.bind(R,M)}catch(aC){d.error("events not supported "+ax+","+R+" on jQuery.swipe")}this.enable=function(){H.bind(ax,ar);H.bind(R,M);return H};this.disable=function(){Q();return H};this.destroy=function(){Q();H.data(w,
null);return H};function ar(aM){if(X())return;if(d(aM.target).closest(af.excludedElements,H).length>0)return;var aN=aM.originalEvent;var aL,aK=a?aN.touches[0]:aN;O=f;if(a)aE=aN.touches.length;else aM.preventDefault();ac=0;N=null;aH=null;ag=0;aB=0;A=0;ai=1;pinchDistance=0;ah=T();z();if(!a||(aE===af.fingers||af.fingers===h)||ao()){aI(0,aK);I=B();if(aE==2){aI(1,aN.touches[1]);aB=A=Z(ah[0].start,ah[1].start)}if(af.swipeStatus||af.pinchStatus)aL=aD(aN,O)}else aL=false;if(aL===false){O=o;aD(aN,O);return aL}else aj(true)}
function P(aN){var aQ=aN.originalEvent;if(O===g||O===o||ae())return;var aM,aL=a?aQ.touches[0]:aQ;var aO=V(aL);Y=B();if(a)aE=aQ.touches.length;O=i;if(aE==2){if(aB==0){aI(1,aQ.touches[1]);aB=A=Z(ah[0].start,ah[1].start)}else{V(aQ.touches[1]);A=Z(ah[0].end,ah[1].end);aH=an(ah[0].end,ah[1].end)}ai=y(aB,A);pinchDistance=Math.abs(aB-A)}if(aE===af.fingers||af.fingers===h||!a||ao()){N=aq(aO.start,aO.end);C(aN,N);ac=G(aO.start,aO.end);ag=L();if(af.swipeStatus||af.pinchStatus)aM=aD(aQ,O);if(!af.triggerOnTouchEnd||
af.triggerOnTouchLeave){var aK=true;if(af.triggerOnTouchLeave){var aP=at(this);aK=az(aO.end,aP)}if(!af.triggerOnTouchEnd&&aK)O=aG(i);else if(af.triggerOnTouchLeave&&!aK)O=aG(g);if(O==o||O==g)aD(aQ,O)}}else{O=o;aD(aQ,O)}if(aM===false){O=o;aD(aQ,O)}}function aa(aM){var aO=aM.originalEvent;if(a)if(aO.touches.length>0){av();return true}if(ae())aE=aJ;aM.preventDefault();Y=B();if(af.triggerOnTouchEnd||af.triggerOnTouchEnd==false&&O===i){O=g;var aL=aE===af.fingers||af.fingers===h||!a;var aK=ah[0].end.x!==
0;var aN=aL&&aK&&(am()||ay());if(aN)aD(aO,O);else{O=o;aD(aO,O)}}else if(O===i){O=o;aD(aO,O)}aj(false)}function M(){aE=0;Y=0;I=0;aB=0;A=0;ai=1;z();aj(false)}function W(aK){var aL=aK.originalEvent;if(af.triggerOnTouchLeave){O=aG(g);aD(aL,O)}}function Q(){H.unbind(ax,ar);H.unbind(R,M);H.unbind(U,P);H.unbind(au,aa);if(D)H.unbind(D,W);aj(false)}function aG(aN){var aM=aN;var aL=ap();var aK=ad();if(!aL)aM=o;else if(aK&&aN==i&&(!af.triggerOnTouchEnd||af.triggerOnTouchLeave))aM=g;else if(!aK&&aN==g&&af.triggerOnTouchLeave)aM=
o;return aM}function aD(aM,aK){var aL=undefined;if(ab())aL=al(aM,aK,j);if(ao()&&aL!==false)aL=al(aM,aK,r);if(K()&&aL!==false)aL=al(aM,aK,e);if(aK===o)M(aM);if(aK===g)if(a){if(aM.touches.length==0)M(aM)}else M(aM);return aL}function al(aN,aK,aM){var aL=undefined;if(aM==j){if(af.swipeStatus){aL=af.swipeStatus.call(H,aN,aK,N||null,ac||0,ag||0,aE);if(aL===false)return false}if(aK==g&&ay()){if(af.swipe){aL=af.swipe.call(H,aN,N,ac,ag,aE);if(aL===false)return false}switch(N){case n:if(af.swipeLeft)aL=af.swipeLeft.call(H,
aN,N,ac,ag,aE);break;case m:if(af.swipeRight)aL=af.swipeRight.call(H,aN,N,ac,ag,aE);break;case c:if(af.swipeUp)aL=af.swipeUp.call(H,aN,N,ac,ag,aE);break;case u:if(af.swipeDown)aL=af.swipeDown.call(H,aN,N,ac,ag,aE);break}}}if(aM==r){if(af.pinchStatus){aL=af.pinchStatus.call(H,aN,aK,aH||null,pinchDistance||0,ag||0,aE,ai);if(aL===false)return false}if(aK==g&&am())switch(aH){case b:if(af.pinchIn)aL=af.pinchIn.call(H,aN,aH||null,pinchDistance||0,ag||0,aE,ai);break;case v:if(af.pinchOut)aL=af.pinchOut.call(H,
aN,aH||null,pinchDistance||0,ag||0,aE,ai);break}}if(aM==e)if(aK===o)if(af.click&&(aE===1||!a)&&(isNaN(ac)||ac===0))aL=af.click.call(H,aN,aN.target);return aL}function ad(){if(af.threshold!==null)return ac>=af.threshold;return true}function ak(){if(af.pinchThreshold!==null)return pinchDistance>=af.pinchThreshold;return true}function ap(){var aK;if(af.maxTimeThreshold)if(ag>=af.maxTimeThreshold)aK=false;else aK=true;else aK=true;return aK}function C(aK,aL){if(af.allowPageScroll===k||ao())aK.preventDefault();
else{var aM=af.allowPageScroll===q;switch(aL){case n:if(af.swipeLeft&&aM||!aM&&af.allowPageScroll!=x)aK.preventDefault();break;case m:if(af.swipeRight&&aM||!aM&&af.allowPageScroll!=x)aK.preventDefault();break;case c:if(af.swipeUp&&aM||!aM&&af.allowPageScroll!=s)aK.preventDefault();break;case u:if(af.swipeDown&&aM||!aM&&af.allowPageScroll!=s)aK.preventDefault();break}}}function am(){return ak()}function ao(){return!!(af.pinchStatus||af.pinchIn||af.pinchOut)}function aw(){return!!(am()&&ao())}function ay(){var aK=
ap();var aM=ad();var aL=aM&&aK;return aL}function ab(){return!!(af.swipe||af.swipeStatus||af.swipeLeft||af.swipeRight||af.swipeUp||af.swipeDown)}function E(){return!!(ay()&&ab())}function K(){return!!af.click}function av(){aA=B();aJ=event.touches.length+1}function z(){aA=0;aJ=0}function ae(){var aK=false;if(aA){var aL=B()-aA;if(aL<=af.fingerReleaseThreshold)aK=true}return aK}function X(){return!!(H.data(w+"_intouch")===true)}function aj(aK){if(aK===true){H.bind(U,P);H.bind(au,aa);if(D)H.bind(D,W)}else{H.unbind(U,
P,false);H.unbind(au,aa,false);if(D)H.unbind(D,W,false)}H.data(w+"_intouch",aK===true)}function aI(aL,aK){var aM=aK.identifier!==undefined?aK.identifier:0;ah[aL].identifier=aM;ah[aL].start.x=ah[aL].end.x=aK.pageX;ah[aL].start.y=ah[aL].end.y=aK.pageY;return ah[aL]}function V(aK){var aM=aK.identifier!==undefined?aK.identifier:0;var aL=J(aM);aL.end.x=aK.pageX;aL.end.y=aK.pageY;return aL}function J(aL){for(var aK=0;aK<ah.length;aK++)if(ah[aK].identifier==aL)return ah[aK]}function T(){var aK=[];for(var aL=
0;aL<=5;aL++)aK.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0});return aK}function L(){return Y-I}function Z(aN,aM){var aL=Math.abs(aN.x-aM.x);var aK=Math.abs(aN.y-aM.y);return Math.round(Math.sqrt(aL*aL+aK*aK))}function y(aK,aL){var aM=aL/aK*1;return aM.toFixed(2)}function an(){if(ai<1)return v;else return b}function G(aL,aK){return Math.round(Math.sqrt(Math.pow(aK.x-aL.x,2)+Math.pow(aK.y-aL.y,2)))}function F(aN,aL){var aK=aN.x-aL.x;var aP=aL.y-aN.y;var aM=Math.atan2(aP,aK);var aO=Math.round(aM*
180/Math.PI);if(aO<0)aO=360-Math.abs(aO);return aO}function aq(aL,aK){var aM=F(aL,aK);if(aM<=45&&aM>=0)return n;else if(aM<=360&&aM>=315)return n;else if(aM>=135&&aM<=225)return m;else if(aM>45&&aM<135)return u;else return c}function B(){var aK=new Date;return aK.getTime()}function at(aK){aK=d(aK);var aM=aK.offset();var aL={left:aM.left,right:aM.left+aK.outerWidth(),top:aM.top,bottom:aM.top+aK.outerHeight()};return aL}function az(aK,aL){return aK.x>aL.left&&aK.x<aL.right&&aK.y>aL.top&&aK.y<aL.bottom}
}})(jQuery);
(function(a,b){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+
1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/
2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/
2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/
h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*
Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*
b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75)return d*7.5625*b*b+c;else if(b<2/2.75)return d*(7.5625*(b-=1.5/2.75)*b+.75)+c;else if(b<2.5/2.75)return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c;else return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});
a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};a.expr[":"].uncached=function(b){var c=document.createElement("img");c.src=b.src;return a(b).is('img[src!=""]')&&!c.complete};a.fn.waitForImages=function(b,c,d){if(a.isPlainObject(arguments[0])){c=b.each;d=b.waitForAll;b=b.finished}b=b||a.noop;c=c||a.noop;d=!!d;if(!a.isFunction(b)||!a.isFunction(c))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var e=a(this),
f=[];if(d){var g=a.waitForImages.hasImageProperties||[],h=/url\((['"]?)(.*?)\1\)/g;e.find("*").each(function(){var b=a(this);if(b.is("img:uncached"))f.push({src:b.attr("src"),element:b[0]});a.each(g,function(a,c){var d=b.css(c);if(!d)return true;var e;while(e=h.exec(d))f.push({src:e[2],element:b[0]})})})}else e.find("img:uncached").each(function(){f.push({src:this.src,element:this})});var i=f.length,j=0;if(i==0)b.call(e[0]);a.each(f,function(d,f){var g=new Image;a(g).bind("load error",function(a){j++;
c.call(f.element,j,i,a.type=="load");if(j==i){b.call(e[0]);return false}});g.src=f.src})})}})(jQuery);
jQuery(document).ready(function(){(function(e,t,n,r,i,s,o,u,a){var f="overscroll",l=function(){var r=u.browser,s,o=n.userAgent,c=t.createElement(f).style,h=r.webkit?"webkit":r.mozilla?"moz":r.msie?"ms":r.opera?"o":"",p=h?["-","-"].join(h):"";l={prefix:h,overflowScrolling:false};u.each(h?[h,""]:[h],function(t,n){var r=n?n+"RequestAnimationFrame":"requestAnimationFrame",i=n?n+"OverflowScrolling":"overflowScrolling";if(e[r]!==a)l.animate=function(t){e[r].call(e,t)};if(c[i]!==a)if(o.indexOf("Chrome")<
0)l.overflowScrolling=p+"overflow-scrolling"});l.touchEvents="ontouchstart"in e;if(!l.animate)l.animate=function(e){i(e,1E3/60)};if(h==="moz"||h==="webkit"){l.cursorGrab=p+"grab";l.cursorGrabbing=p+"grabbing"}else{s="https://mail.google.com/mail/images/2/";l.cursorGrab="url("+s+"openhand.cur), default";l.cursorGrabbing="url("+s+"closedhand.cur), default"}return l}(),c={drag:"mousemove touchmove",end:"mouseup mouseleave click touchend touchcancel",hover:"mouseenter mouseleave",ignored:"select dragstart drag",
scroll:"scroll",start:"mousedown touchstart",wheel:"mousewheel DOMMouseScroll"},h={captureThreshold:3,driftDecay:1.1,driftSequences:22,driftTimeout:100,scrollDelta:15,thumbOpacity:.7,thumbThickness:6,thumbTimeout:400,wheelDelta:20},p={cancelOn:"select,input,textarea",direction:"multi",dragHold:false,hoverThumbs:false,scrollDelta:h.scrollDelta,showThumbs:true,persistThumbs:false,wheelDelta:h.wheelDelta,wheelDirection:"vertical",zIndex:999},d=function(e,t){t.trigger("overscroll:"+e)},v=function(){return(new Date).getTime()},
m=function(e,t,n){t.x=e.pageX;t.y=e.pageY;t.time=v();t.index=n;return t},g=function(e,t,n,r){var i,s;if(e&&e.added){if(e.horizontal){i=n*(1+t.container.width/t.container.scrollWidth);s=r+t.thumbs.horizontal.top;e.horizontal.css("margin",s+"px 0 0 "+i+"px")}if(e.vertical){i=n+t.thumbs.vertical.left;s=r*(1+t.container.height/t.container.scrollHeight);e.vertical.css("margin",s+"px 0 0 "+i+"px")}}},y=function(e,t,n){if(e&&e.added&&!t.persistThumbs)if(n){if(e.vertical)e.vertical.stop(true,true).fadeTo("fast",
h.thumbOpacity);if(e.horizontal)e.horizontal.stop(true,true).fadeTo("fast",h.thumbOpacity)}else{if(e.vertical)e.vertical.fadeTo("fast",0);if(e.horizontal)e.horizontal.fadeTo("fast",0)}},b=function(e){var t,n="events";var r=u._data?u._data(e[0],n):e.data(n);if(r&&r.click){t=r.click.slice();e.off("click").one("click",function(n){u.each(t,function(t,n){e.click(n)});return false})}},w=function(e){var t=e.data,n=t.thumbs,r=t.options,i=e.type==="mouseenter";y(n,r,i)},E=function(e){var t=e.data;if(!t.flags.dragged)g(t.thumbs,
t.sizing,this.scrollLeft,this.scrollTop)},S=function(e){e.preventDefault();var t=e.data,n=t.options,r=t.sizing,i=t.thumbs,s=t.wheel,o=t.flags,u,a=e.originalEvent;o.drifting=false},x=function(e){e.preventDefault();var t=e.data,n=e.originalEvent.touches,r=t.options,i=t.sizing,s=t.thumbs,o=t.position,u=t.flags,a=t.target.get(0);if(l.touchEvents&&n&&n.length)e=n[0];if(!u.dragged)y(s,r,true);u.dragged=true;if(r.direction!=="vertical")a.scrollLeft-=e.pageX-o.x;if(t.options.direction!=="horizontal")a.scrollTop-=
e.pageY-o.y;m(e,t.position);if(--t.capture.index<=0){t.target.data(f).dragging=u.dragging=true;m(e,t.capture,h.captureThreshold)}g(s,i,a.scrollLeft,a.scrollTop)},T=function(e,t,n){var r=t.data,i,s,o,u,a=r.capture,f=r.options,c=r.sizing,p=r.thumbs,m=v()-a.time,y=e.scrollLeft,b=e.scrollTop,w=h.driftDecay;if(m>h.driftTimeout)return n(r);i=f.scrollDelta*(t.pageX-a.x);s=f.scrollDelta*(t.pageY-a.y);if(f.direction!=="vertical")y-=i;if(f.direction!=="horizontal")b-=s;o=i/h.driftSequences;u=s/h.driftSequences;
d("driftstart",r.target);r.drifting=true;l.animate(function E(){if(r.drifting){var t=1,i=-1;r.drifting=false;if(u>t&&e.scrollTop>b||u<i&&e.scrollTop<b){r.drifting=true;e.scrollTop-=u;u/=w}if(o>t&&e.scrollLeft>y||o<i&&e.scrollLeft<y){r.drifting=true;e.scrollLeft-=o;o/=w}g(p,c,e.scrollLeft,e.scrollTop);l.animate(E)}else{d("driftend",r.target);n(r)}})},N=function(e){var t=e.data,n=t.target,r=t.start=u(e.target),i=t.flags;i.drifting=false;if(r.size()&&!r.is(t.options.cancelOn)){if(!l.touchEvents)e.preventDefault();
n.css("cursor",l.cursorGrabbing);n.data(f).dragging=i.dragging=i.dragged=false;if(t.options.dragHold)u(document).on(c.drag,t,x);else n.on(c.drag,t,x);t.position=m(e,{});t.capture=m(e,{},h.captureThreshold);d("dragstart",n)}},C=function(e){var t=e.data,n=t.target,r=t.options,i=t.flags,s=t.thumbs,o=function(){if(s&&!r.hoverThumbs)y(s,r,false)};if(r.dragHold)u(document).unbind(c.drag,x);else n.unbind(c.drag,x);if(t.position){d("dragend",n);if(i.dragging)T(n.get(0),e,o);else o()}if(i.dragging&&t.start.is(e.target))b(t.start);
n.data(f).dragging=t.start=t.capture=t.position=i.dragged=i.dragging=false;n.css("cursor",l.cursorGrab)},k=function(e){e=u.extend({},p,e);if(e.direction!=="multi"&&e.direction!==e.wheelDirection)e.wheelDirection=e.direction;e.scrollDelta=r.abs(e.scrollDelta);e.wheelDelta=r.abs(e.wheelDelta);e.scrollLeft=e.scrollLeft===a?null:r.abs(e.scrollLeft);e.scrollTop=e.scrollTop===a?null:r.abs(e.scrollTop);return e},L=function(e){var t=u(e),n=t.width(),r=t.height(),i=n>=e.scrollWidth?n:e.scrollWidth,s=r>=e.scrollHeight?
r:e.scrollHeight,o=i>n||s>r;return{valid:o,container:{width:n,height:r,scrollWidth:i,scrollHeight:s},thumbs:{horizontal:{width:n*n/i,height:h.thumbThickness,corner:h.thumbThickness/2,left:0,top:r-h.thumbThickness},vertical:{width:h.thumbThickness,height:r*r/s,corner:h.thumbThickness/2,left:n-h.thumbThickness,top:0}}}},A=function(e,t){var n=u(e),r,i=n.data(f)||{},s=n.attr("style"),o=t?function(){i=n.data(f);r=i.thumbs;if(s)n.attr("style",s);else n.removeAttr("style");if(r){if(r.horizontal)r.horizontal.remove();
if(r.vertical)r.vertical.remove()}n.removeData(f).off(c.start,N).off(c.end,C).off(c.ignored,false)}:u.noop;return u.isFunction(i.remover)?i.remover:o},O=function(e,t){return{position:"absolute",opacity:t.persistThumbs?h.thumbOpacity:0,"background-color":"black",width:e.width+"px",height:e.height+"px","border-radius":e.corner+"px",margin:e.top+"px 0 0 "+e.left+"px","z-index":t.zIndex}},M=function(e,t,n){var r="<div/>",i={},s=false;if(t.container.scrollWidth>0&&n.direction!=="vertical"){s=O(t.thumbs.horizontal,
n);i.horizontal=u(r).css(s).prependTo(e)}if(t.container.scrollHeight>0&&n.direction!=="horizontal"){s=O(t.thumbs.vertical,n);i.vertical=u(r).css(s).prependTo(e)}i.added=!!s;return i},_=function(e,t){t=k(t);var n=L(e),r,i={options:t,sizing:n,flags:{dragging:false},remover:A(e,true)};if(n.valid){i.target=e=u(e).css({position:"relative",overflow:"hidden",cursor:l.cursorGrab}).on(c.start,i,N).on(c.end,i,C).on(c.scroll,i,E).on(c.ignored,false);if(t.dragHold)u(document).on(c.end,i,C);else i.target.on(c.end,
i,C);if(t.scrollLeft!==null)e.scrollLeft(t.scrollLeft);if(t.scrollTop!==null)e.scrollTop(t.scrollTop);if(t.showThumbs){i.thumbs=r=M(e,n,t);if(r.added){g(r,n,e.scrollLeft(),e.scrollTop());if(t.hoverThumbs)e.on(c.hover,i,w)}}e.data(f,i)}},D=function(e){A(e)()},P=function(e){return this.removeOverscroll().each(function(){_(this,e)})},H=function(e){return this.removeOverscroll().each(function(){var t=u(this).data(f,{remover:A(this)}).css(l.overflowScrolling,"touch").css("overflow","auto");e=k(e);if(e.scrollLeft!==
null)t.scrollLeft(e.scrollLeft);if(e.scrollTop!==null)t.scrollTop(e.scrollTop)})},B=function(){return this.each(function(){D(this)})};P.settings=h;u.extend(o,{overscroll:l.overflowScrolling?H:P,removeOverscroll:B})})(window,document,navigator,Math,setTimeout,clearTimeout,jQuery.fn,jQuery)});
(function(e){e.fn.fitVids=function(t){var n={customSelector:null};var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.innerHTML="?<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
i.parentNode.insertBefore(r,i);if(t)e.extend(n,t);return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];if(n.customSelector)t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(this.tagName.toLowerCase()=="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)return;var n=this.tagName.toLowerCase()=="object"?t.attr("height"):t.height(),
r=n/t.width();if(!t.attr("id")){var i="fitvid"+Math.floor(Math.random()*999999);t.attr("id",i)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",r*100+"%");t.removeAttr("height").removeAttr("width")})})}})(jQuery);;
(function(e,t){function n(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"];var t=false;for(i in e)if(navigator.userAgent.split(e[i]).length>1)t=true;return t}function r(n){n.find(".show_on_hover, .hovercover").each(function(){var r=e(this).closest("li");if(n.data("ie9")||n.data("ie"))e(this).animate({opacity:0},{duration:200,queue:false});else e(this).transit({opacity:0},{duration:200,queue:false});r.hover(function(){e(this).find(".show_on_hover, .hovercover").each(function(){var r=
1;if(e(this).data("maxopacity")!=t)r=e(this).data("maxopacity");if(n.data("ie9")||n.data("ie"))e(this).animate({opacity:r},{duration:200,queue:false});else e(this).transit({opacity:r},{duration:200,queue:false})})},function(){e(this).find(".show_on_hover, .hovercover").each(function(){if(n.data("ie9")||n.data("ie"))e(this).animate({opacity:0},{duration:200,queue:false});else e(this).transit({opacity:0},{duration:200,queue:false})})})})}function s(t,n){t.find(".excerpt").each(function(){var t=e(this);
t.closest("li").hover(function(){t.slideDown(300)},function(){t.stop(true);t.slideUp(300)})});t.find(".reveal_opener").each(function(){var r=e(this);r.click(function(){if(r.parent().hasClass("reveal_container"))var i=r.parent();else var i=r.parent().find(".reveal_container");if(i.hasClass("revactive")){i.removeClass("revactive");r.removeClass("revactive");i.closest("li").removeClass("revactive");if(t.data("ie9")||t.data("ie"))i.find(".reveal_wrapper").css({visibility:"visible"}).animate({height:"0px",
opacity:0},{duration:500});else i.find(".reveal_wrapper").css({visibility:"visible"}).transit({height:"0px",opacity:0},{duration:500});i.find(".sb-vimeo-markup, .sb-yt-markup").html("");if(i.hasClass("tofullwidth")){f(200,t,n);setTimeout(function(){i.appendTo(i.data("comefrom"))},300)}}else{if(i.hasClass("tofullwidth")){i.data("comefrom",i.parent());i.data("indexli",i.closest("li").index());i.appendTo(i.closest(".showbiz"));r.addClass("revactive")}setTimeout(function(){if(t.data("coo")=="on")i.closest("ul").find(".reveal_opener").each(function(t){if(e(this).hasClass("revactive"))e(this).click()});
i.addClass("revactive");r.addClass("revactive");i.closest("li").addClass("revactive");if(t.data("ie9")||t.data("ie"))i.find(".reveal_wrapper").css({visibility:"visible"}).animate({height:"100%",opacity:1},{duration:300});else i.find(".reveal_wrapper").css({visibility:"visible"}).transit({height:"100%",opacity:1},{duration:300});i.find(".sb-vimeo-markup, .sb-yt-markup").each(function(n){var r=e(this);if(r.hasClass("sb-vimeo-markup"))var i=t.data("vimeomarkup");else var i=t.data("ytmarkup");var s=i.split("%%videoid%%")[0];
var o=i.split("%%videoid%%")[1];var i=s+r.data("videoid")+o;r.append(i);try{r.fitVids()}catch(u){}});setTimeout(function(){o(t,n)},500)},100)}})})}function o(e,n){var r=e.find(".tofullwidth.revactive .heightadjuster");var i=n.find("ul").first();var s=parseInt(r.parent().css("paddingTop"),0)+parseInt(r.parent().css("paddingBottom"),0);var o=0;if(e.data("hboffset")!=t)o=e.data("hboffset");var u=o+s+r.outerHeight(true);if(e.data("ie9")||e.data("ie")){i.animate({height:u+"px"},{duration:300,queue:false});
i.parent().animate({height:u+"px"},{duration:300,queue:false})}else{i.transit({height:u+"px",duration:300,queue:false});i.parent().transit({height:u+"px",duration:300,queue:false})}}function u(t,n){var r=t.data("carousel");var i=e(n.data("left"));var s=e(n.data("right"));var o=t.width();i.data("teaser",n);s.data("teaser",n);n.data("offset",0);f(0,t,n);t.find("img").each(function(){e(this).parent().waitForImages(function(){f(200,t,n)})});s.click(function(){if(t.find(".tofullwidth.revactive .heightadjuster").length>
0){var n=t.find(".tofullwidth.revactive").data("indexli");var i=n+2;if(i>t.find("ul:first-child li").length)i=1;t.find(".tofullwidth.revactive").addClass("sb-removemesoon");setTimeout(function(){t.find(".tofullwidth.revactive.sb-removemesoon .reveal_opener").click();t.find(".sb-removemesoon").each(function(){e(this).removeClass("sb-removemesoon")})},350);t.find("ul:first-child li:nth-child("+i+")").find(".reveal_opener").click()}else if(s.data("inmove")!=1){var o=e(e(this).data("teaser"));var u=o.find("ul").first();
var l=u.find(">li").length;if(t.data("das")=="on")a(t,1);else{var c=u.find(">li:first-child").offset().left;if(r==1&&c<0){s.data("inmove",1);o.data("offset",o.data("offset")-1);f(0,t,o);u.find(">li:first-child").appendTo(u);o.data("offset",o.data("offset")+1);f(200,t,o);setTimeout(function(){s.data("inmove",0)},350)}else{s.data("inmove",1);var h=1;var p=t.width();if(t.data("allentry")=="on"){if(p>980)h=t.data("vea")[0];if(p<981&&p>768)h=t.data("vea")[1];if(p<769&&p>420)h=t.data("vea")[2];if(p<421)h=
t.data("vea")[3]}o.data("offset",o.data("offset")+h);f(200,t,o);setTimeout(function(){s.data("inmove",0)},350)}}}return false});i.click(function(){if(t.find(".tofullwidth.revactive .heightadjuster").length>0){var n=t.find(".tofullwidth.revactive").data("indexli");var s=n-1;if(s<=0)s=t.find("ul:first-child li").length;t.find(".tofullwidth.revactive").addClass("sb-removemesoon");setTimeout(function(){t.find(".tofullwidth.revactive.sb-removemesoon .reveal_opener").click();t.find(".sb-removemesoon").each(function(){e(this).removeClass("sb-removemesoon")})},
350);t.find("ul:first-child li:nth-child("+s+")").find(".reveal_opener").click()}else if(i.data("inmove")!=1){var o=e(this).data("teaser");var u=o.find("ul").first();if(t.data("das")=="on")a(t,-1);else{var l=u.find(">li:first-child").offset().left;if(r==1&&l>=0){i.data("inmove",1);o.data("offset",o.data("offset")+1);f(0,t,o);u.find(">li:last-child").prependTo(u);o.data("offset",o.data("offset")-1);f(200,t,o);setTimeout(function(){i.data("inmove",0)},350)}else{i.data("inmove",1);var c=1;var h=t.width();
if(t.data("allentry")=="on"){if(h>980)c=t.data("vea")[0];if(h<981&&h>768)c=t.data("vea")[1];if(h<769&&h>420)c=t.data("vea")[2];if(h<421)c=t.data("vea")[3]}o.data("offset",o.data("offset")-c);f(200,t,o);setTimeout(function(){i.data("inmove",0)},350)}}}return false});if(t.data("das")!="on")t.swipe({data:t,swipeRight:function(){i.click()},swipeLeft:function(){s.click()},excludedElements:".reveal_opener, a,  .linkicon, .notalone, .lupeicon, .hovercover, .showbiz-navigation, .sb-navigation-left, .sb-navigation-right",
allowPageScroll:"auto"});var u;e(window).resize(function(){clearTimeout(u);u=setTimeout(function(){n.data("offset",0);f(0,t,n);if(t.data("das")=="on")setTimeout(function(){a(t,0)},300)},150)});if(r==1){s.data("inmove",1);i.data("inmove",1)}for(var l=0;l<3;l++){e(window).data("teaserreset",setTimeout(function(){f(200,t,n)},l*500));if(l==2)setTimeout(function(){s.data("inmove",0);i.data("inmove",0)},l*500+200)}}function a(t,n){var r=t;var i=t.width();var s=r.find("ul").first();var o=s.find(">li").length;
var u=4;if(i>980)u=t.data("vea")[0];if(i<981&&i>768)u=t.data("vea")[1];if(i<769&&i>420)u=t.data("vea")[2];if(i<421)u=t.data("vea")[3];var a=o-u;var f=s.find(">li:first-child").outerWidth(true);var l=r.find(".overflowholder");var c=l.scrollLeft();var h=Math.round(c/f);var p=e(l.parent().data("right"));var d=e(l.parent().data("left"));var v=(h+n)*f;if(v>=a*f){v=a*f;try{p.addClass("notclickable")}catch(m){}}else try{p.removeClass("notclickable")}catch(m){}if(v<=0){v=0;try{d.addClass("notclickable")}catch(m){}}else try{d.removeClass("notclickable")}catch(m){}l.animate({scrollLeft:v+
"px"},{duration:300,queue:false,complete:function(){l.removeClass("inmove")}})}function f(n,r,i){var s=r.data("carousel");var u=i.find("ul");var a=i.data("offset");var f=r.width();var l=parseInt(i.css("paddingLeft"),0)+parseInt(i.css("paddingRight"),0);f=f-l;var u=i.find("ul:first");maxitem=u.find(">li").length;var c=e(i.data("right"));if(r.data("das")!="on")c.removeClass("notclickable");var h=e(i.data("left"));if(r.data("das")!="on")h.removeClass("notclickable");var p=r.data("vea")[0];var d=r.data("mediaMaxHeight");
if(f>980){p=r.data("vea")[0];try{if(d[0]!=0)r.find(".mediaholder_innerwrap").each(function(){e(this).css({maxHeight:d[0]+"px"})})}catch(v){}}if(f<981&&f>768){p=r.data("vea")[1];try{if(d[1]!=0)r.find(".mediaholder_innerwrap").each(function(){e(this).css({maxHeight:d[1]+"px"})})}catch(v){}}if(f<769&&f>420){p=r.data("vea")[2];try{if(d[2]!=0)r.find(".mediaholder_innerwrap").each(function(){e(this).css({maxHeight:d[2]+"px"})})}catch(v){}}if(f<421){p=r.data("vea")[3];try{if(d[3]!=0)r.find(".mediaholder_innerwrap").each(function(){e(this).css({maxHeight:d[3]+
"px"})})}catch(v){}}if(s!=1){if(a>=maxitem-p){a=maxitem-p;if(r.data("das")!="on")c.addClass("notclickable")}if(a<=0){a=0;if(r.data("das")!="on")h.addClass("notclickable")}}var m=u.find(">li:first-child").outerWidth(true)-u.find(">li:first-child").width();var g=0;if(r.data("eoffset")!=t)g=r.data("eoffset")*(p-1);var y=0;if(r.data("croffset")!=t)y=r.data("croffset");step=(f-(p-1)*m)/p;step=Math.round(step-g);i.data("offset",a);u.find(">li").each(function(){e(this).width(step)});step=u.find("li:first").outerWidth(true);
i.data("step",step);u.css({width:"10000px"});if(n==0)u.css({left:0-step*a+"px"});else u.animate({left:0-step*a+"px"},{duration:n,queue:false});var b=0;if(r.data("hboffset")!=t)b=r.data("hboffset");setTimeout(function(){var t=0;u.find("li").each(function(){if(e(this).outerHeight(true)>t)t=e(this).outerHeight(true)});setTimeout(function(){if(step>100){var e=u.find(">li:last-child");var t=e.position().left+e.outerWidth(true)+m+1;u.css({width:t+"px"})}},200);if(r.find(".tofullwidth.revactive .heightadjuster").length>
0)o(r,i);else if(r.data("ie9")||r.data("ie")){u.animate({height:t+b+"px"},{duration:300,queue:false});u.parent().animate({height:t+b+"px"},{duration:300,queue:false})}else{u.transit({height:t+b+"px",duration:300,queue:false});u.parent().transit({height:t+b+"px",duration:300,queue:false})}},n+210)}e.fn.extend({showbizpro:function(t){e.fn.showbizpro.defaults={entrySizeOffset:0,containerOffsetRight:0,heightOffsetBottom:0,carousel:"off",visibleElementsArray:[4,3,2,1],mediaMaxHeight:[0,0,0,0],ytMarkup:"<iframe src='http://www.youtube.com/embed/%%videoid%%?hd=1&wmode=opaque&autohide=1&showinfo=0&autoplay=1'></iframe>",
vimeoMarkup:"<iframe src='http://player.vimeo.com/video/&&videoid%%?title=0&byline=0&portrait=0;api=1&autoplay=1'></iframe>",closeOtherOverlays:"off",allEntryAtOnce:"off",dragAndScroll:"off"};t=e.extend({},e.fn.showbizpro.defaults,t);return this.each(function(){var i=e(this);i.data("eoffset",t.entrySizeOffset);i.data("croffset",t.containerOffsetRight);i.data("hboffset",t.heightOffsetBottom);if(t.carousel=="on")i.data("carousel",1);else i.data("carousel",0);i.data("ytmarkup",t.ytMarkup);i.data("vimeomarkup",
t.vimeoMarkup);i.data("vea",t.visibleElementsArray);i.data("coo",t.closeOtherOverlays);i.data("allentry",t.allEntryAtOnce);i.data("mediaMaxHeight",t.mediaMaxHeight);i.data("das",t.dragAndScroll);i.data("ie",!e.support.opacity);i.data("ie9",document.documentMode==9);if(!e.support.transition)e.fn.transition=e.fn.animate;var o=i.find(".showbiz");o.attr("id","sbiz"+Math.round(Math.random()*1E4));var f;if(t.dragAndScroll=="on")o.find(".overflowholder").overscroll({driftTimeout:0,direction:"horizontal",
wheelDirection:"horizontal",captureWheel:false}).on("overscroll:dragstart",function(){i.find(".overflowholder").stop(true)}).on("overscroll:driftend",function(){i.find(".overflowholder").data("drifting",0);a(i,0)}).on("overscroll:driftstart",function(){clearTimeout(f);i.find(".overflowholder").data("drifting",1)}).on("overscroll:dragend",function(){if(!n()){clearTimeout(f);f=setTimeout(function(){if(i.find(".overflowholder").data("drifting")!=1)a(i,0)},50)}});u(i,o);s(i,o);try{i.find(".mediaholder_innerwrap").each(function(){e(this).fitVids()})}catch(l){}r(i);
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))e(".reveal_opener, .sb-navigation-left, .sb-navigation-right").click(function(){})})},showbizredraw:function(t){return this.each(function(){var t=e(this);var n=t.find(".showbiz");f(200,t,n)})}})})(jQuery);;
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return-h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1)return h/2*f*f+a;return-h/2*(--f*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1)return h/
2*f*f*f+a;return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return-h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1)return h/2*f*f*f*f+a;return-h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1)return h/2*f*f*f*f*f+a;return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,
f,a,h,g){return-h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return-h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return f==0?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return f==g?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0)return a;if(f==g)return a+h;if((f/=g/2)<1)return h/2*Math.pow(2,10*(f-1))+a;return h/2*(-Math.pow(2,-10*--f)+2)+a},
easeInCirc:function(e,f,a,h,g){return-h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1)return-h/2*(Math.sqrt(1-f*f)-1)+a;return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0)return e;if((h/=k)==1)return e+l;if(!j)j=k*.3;if(g<Math.abs(l)){g=l;var i=j/4}else var i=j/(2*Math.PI)*Math.asin(l/g);return-(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*
Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0)return e;if((h/=k)==1)return e+l;if(!j)j=k*.3;if(g<Math.abs(l)){g=l;var i=j/4}else var i=j/(2*Math.PI)*Math.asin(l/g);return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0)return e;if((h/=k/2)==2)return e+l;if(!j)j=k*(.3*1.5);if(g<Math.abs(l)){g=l;var i=j/4}else var i=j/(2*Math.PI)*Math.asin(l/g);if(h<1)return-.5*(g*Math.pow(2,
10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e;return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined)g=1.70158;return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined)g=1.70158;return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined)g=1.70158;if((f/=h/2)<1)return i/2*(f*f*(((g*=1.525)+1)*f-g))+a;return i/2*((f-=2)*f*(((g*=1.525)+1)*f+g)+2)+a},easeInBounce:function(e,f,a,
h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<1/2.75)return h*(7.5625*f*f)+a;else if(f<2/2.75)return h*(7.5625*(f-=1.5/2.75)*f+.75)+a;else if(f<2.5/2.75)return h*(7.5625*(f-=2.25/2.75)*f+.9375)+a;else return h*(7.5625*(f-=2.625/2.75)*f+.984375)+a},easeInOutBounce:function(e,f,a,h,g){if(f<g/2)return jQuery.easing.easeInBounce(e,f*2,0,h,g)*.5+a;return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*.5+h*.5+a}});;
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"top",delay:30,fadeIn:180,fadeOut:50,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');
$("html").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content)var org_title=opts.content;else var org_title=org_elem.attr(opts.attribute);if(org_title!=""){if(!opts.content)org_elem.removeAttr(opts.attribute);var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},
function(){if(!opts.keepAlive)deactive_tiptip()});if(opts.keepAlive)tiptip_holder.hover(function(){},function(){deactive_tiptip()})}else if(opts.activation=="focus")org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()});else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive)deactive_tiptip()});if(opts.keepAlive)tiptip_holder.hover(function(){},function(){deactive_tiptip()})}function active_tiptip(){opts.enter.call(this);
tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()["top"]);var left=parseInt(org_elem.offset()["left"]);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+
w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom")t_class="_bottom";else if(opts.defaultPosition=="top")t_class="_top";else if(opts.defaultPosition=="left")t_class="_left";else if(opts.defaultPosition=="right")t_class="_right";var right_compare=w_compare+left<parseInt($(window).scrollLeft());var left_compare=tip_w+left>parseInt($(window).width());if(right_compare&&w_compare<0||
t_class=="_right"&&!left_compare||t_class=="_left"&&left<tip_w+opts.edgeOffset+5){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if(left_compare&&w_compare<0||t_class=="_left"&&!right_compare){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=top+org_height+
opts.edgeOffset+tip_h+8>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=top+org_height-(opts.edgeOffset+tip_h+8)<0;if(top_compare||t_class=="_bottom"&&top_compare||t_class=="_top"&&!bottom_compare){if(t_class=="_top"||t_class=="_bottom")t_class="_top";else t_class=t_class+"_top";arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||t_class=="_bottom"&&!top_compare){if(t_class=="_top"||t_class=="_bottom")t_class=
"_bottom";else t_class=t_class+"_bottom";arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top")marg_top=marg_top+5;else if(t_class=="_right_bottom"||t_class=="_left_bottom")marg_top=marg_top-5;if(t_class=="_left_top"||t_class=="_left_bottom")marg_left=marg_left+5;tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);
if(timeout)clearTimeout(timeout);timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout)clearTimeout(timeout);tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);;
(function(a){var b="Close",c="AfterClose",d="BeforeAppend",e="MarkupParse",f="Open",g="Change",h="mfp",i="."+h,j="mfp-ready",k="mfp-removing",l="mfp-prevent-close",m,n=function(){},o=!!window.jQuery,p,q=a(window),r,s,t,u,v,w=function(a,b){m.ev.on(h+a+i,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){m.ev.triggerHandler(h+b,c),m.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),
m.st.callbacks[b]&&m.st.callbacks[b].apply(m,a.isArray(c)?c:[c]))},z=function(){(m.st.focus?m.content.find(m.st.focus).eq(0):m.wrap).focus()},A=function(b){if(b!==v||!m.currTemplate.closeBtn)m.currTemplate.closeBtn=a(m.st.closeMarkup.replace("%title%",m.st.tClose)),v=b;return m.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(m=new n,m.init(),a.magnificPopup.instance=m)},C=function(b){if(a(b).hasClass(l))return;var c=m.st.closeOnContentClick,d=m.st.closeOnBgClick;if(c&&d)return!0;if(!m.content||
a(b).hasClass("mfp-close")||m.preloader&&b===m.preloader[0])return!0;if(b!==m.content[0]&&!a.contains(m.content[0],b)){if(d)return!0}else if(c)return!0;return!1};n.prototype={constructor:n,init:function(){var b=navigator.appVersion;m.isIE7=b.indexOf("MSIE 7.")!==-1,m.isIE8=b.indexOf("MSIE 8.")!==-1,m.isLowIE=m.isIE7||m.isIE8,m.isAndroid=/android/gi.test(b),m.isIOS=/iphone|ipad|ipod/gi.test(b),m.probablyMobile=m.isAndroid||m.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
r=a(document.body),s=a(document),m.popupsCache={}},open:function(b){var c;if(b.isObj===!1){m.items=b.items.toArray(),m.index=0;var d=b.items,g;for(c=0;c<d.length;c++){g=d[c],g.parsed&&(g=g.el[0]);if(g===b.el[0]){m.index=c;break}}}else m.items=a.isArray(b.items)?b.items:[b.items],m.index=b.index||0;if(m.isOpen){m.updateItemHTML();return}m.types=[],u="",m.ev=b.mainEl||s,b.key?(m.popupsCache[b.key]||(m.popupsCache[b.key]={}),m.currTemplate=m.popupsCache[b.key]):m.currTemplate={},m.st=a.extend(!0,{},
a.magnificPopup.defaults,b),m.fixedContentPos=m.st.fixedContentPos==="auto"?!m.probablyMobile:m.st.fixedContentPos,m.bgOverlay||(m.bgOverlay=x("bg").on("click"+i,function(){m.close()}),m.wrap=x("wrap").attr("tabindex",-1).on("click"+i,function(a){C(a.target)&&m.close()}),m.container=x("container",m.wrap)),m.contentContainer=x("content"),m.st.preloader&&(m.preloader=x("preloader",m.container,m.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var k=h[c];k=k.charAt(0).toUpperCase()+
k.slice(1),m["init"+k].call(m)}y("BeforeOpen"),m.st.closeBtnInside?(w(e,function(a,b,c,d){c.close_replaceWith=A(d.type)}),u+=" mfp-close-btn-in"):m.wrap.append(A()),m.st.alignTop&&(u+=" mfp-align-top"),m.fixedContentPos?m.wrap.css({overflow:m.st.overflowY,overflowX:"hidden",overflowY:m.st.overflowY}):m.wrap.css({top:q.scrollTop(),position:"absolute"}),(m.st.fixedBgPos===!1||m.st.fixedBgPos==="auto"&&!m.fixedContentPos)&&m.bgOverlay.css({height:s.height(),position:"absolute"}),s.on("keyup"+i,function(a){a.keyCode===
27&&m.close()}),q.on("resize"+i,function(){m.updateSize()}),m.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&m.wrap.addClass(u);var l=m.wH=q.height(),n={};if(m.fixedContentPos&&m._hasScrollBar(l)){var o=m._getScrollbarSize();o&&(n.paddingRight=o)}m.fixedContentPos&&(m.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var p=m.st.mainClass;m.isIE7&&(p+=" mfp-ie7"),p&&m._addClassToMFP(p),m.updateItemHTML(),y("BuildControls"),r.css(n),m.bgOverlay.add(m.wrap).prependTo(document.body),
m._lastFocusedEl=document.activeElement,setTimeout(function(){m.content?(m._addClassToMFP(j),z()):m.bgOverlay.addClass(j),s.on("focusin"+i,function(b){if(b.target!==m.wrap[0]&&!a.contains(m.wrap[0],b.target))return z(),!1})},16),m.isOpen=!0,m.updateSize(l),y(f)},close:function(){if(!m.isOpen)return;m.isOpen=!1,m.st.removalDelay&&!m.isLowIE?(m._addClassToMFP(k),setTimeout(function(){m._close()},m.st.removalDelay)):m._close()},_close:function(){y(b);var d=k+" "+j+" ";m.bgOverlay.detach(),m.wrap.detach(),
m.container.empty(),m.st.mainClass&&(d+=m.st.mainClass+" "),m._removeClassFromMFP(d);if(m.fixedContentPos){var e={paddingRight:""};m.isIE7?a("body, html").css("overflow",""):e.overflow="",r.css(e)}s.off("keyup"+i+" focusin"+i),m.ev.off(i),m.wrap.attr("class","mfp-wrap").removeAttr("style"),m.bgOverlay.attr("class","mfp-bg"),m.container.attr("class","mfp-container"),(!m.st.closeBtnInside||m.currTemplate[m.currItem.type]===!0)&&m.currTemplate.closeBtn&&m.currTemplate.closeBtn.detach(),m._lastFocusedEl&&
a(m._lastFocusedEl).focus(),m.currItem=null,m.content=null,m.currTemplate=null,m.prevHeight=0,y(c)},updateSize:function(a){if(m.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;m.wrap.css("height",c),m.wH=c}else m.wH=a||q.height();m.fixedContentPos||m.wrap.css("height",m.wH),y("Resize")},updateItemHTML:function(){var b=m.items[m.index];m.contentContainer.detach(),m.content&&m.content.detach(),b.parsed||(b=m.parseEl(m.index));var c=b.type;y("BeforeChange",
[m.currItem?m.currItem.type:"",c]),m.currItem=b;if(!m.currTemplate[c]){var d=m.st[c]?m.st[c].markup:!1;y("FirstMarkupParse",d),d?m.currTemplate[c]=a(d):m.currTemplate[c]=!0}t&&t!==b.type&&m.container.removeClass("mfp-"+t+"-holder");var e=m["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,m.currTemplate[c]);m.appendContent(e,c),b.preloaded=!0,y(g,b),t=b.type,m.container.prepend(m.contentContainer),y("AfterChange")},appendContent:function(a,b){m.content=a,a?m.st.closeBtnInside&&m.currTemplate[b]===!0?
m.content.find(".mfp-close").length||m.content.append(A()):m.content=a:m.content="",y(d),m.container.addClass("mfp-"+b+"-holder"),m.contentContainer.append(m.content)},parseEl:function(b){var c=m.items[b],d=c.type;c.tagName?c={el:a(c)}:c={data:c,src:c.src};if(c.el){var e=m.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||m.st.type||"inline",c.index=b,c.parsed=!0,m.items[b]=c,y("ElementParse",
c),m.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,m._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(e||b.which!==2){var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(m))return!0}else if(q.width()<
f)return!0;b.type&&(b.preventDefault(),m.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),m.open(d)}},updateStatus:function(a,b){if(m.preloader){p!==a&&m.container.removeClass("mfp-s-"+p),!b&&a==="loading"&&(b=m.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,m.preloader.html(b),m.preloader.find("a").click(function(a){a.stopImmediatePropagation()}),m.container.addClass("mfp-s-"+a),p=a}},_addClassToMFP:function(a){m.bgOverlay.addClass(a),
m.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),m.wrap.removeClass(a)},_hasScrollBar:function(a){return(m.isIE7?s.height():document.body.scrollHeight)>(a||q.height())},_parseMarkup:function(b,c,d){var f;d.data&&(c=a.extend(d.data,c)),y(e,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;f=a.split("_");if(f.length>1){var d=b.find(i+"-"+f[0]);if(d.length>0){var e=f[1];e==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):e==="img"?d.is("img")?d.attr("src",
c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(f[1],c)}}else b.find(i+"-"+a).html(c)})},_getScrollbarSize:function(){if(m.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),m.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return m.scrollbarSize}},a.magnificPopup={instance:null,proto:n.prototype,
modules:[],open:function(a,b){return B(),a||(a={}),a.isObj=!0,a.index=b||0,this.instance.open(a)},close:function(){return a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",
closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){B();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=o?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),m._openClick({mfpEl:d},c,e)}else m.isOpen&&m[b].apply(m,Array.prototype.slice.call(arguments,1));else o?c.data("magnificPopup",b):c[0].magnificPopup=
b,m.addGroup(c,b);return c};var D="inline",E,F,G,H=function(){G&&(F.after(G.addClass(E)).detach(),G=null)};a.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){m.types.push(D),w(b+"."+D,function(){H()})},getInline:function(b,c){H();if(b.src){var d=m.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(F||(E=d.hiddenClass,F=x(E),E="mfp-"+E),G=e.after(F).detach().removeClass(E)),m.updateStatus("ready")}else m.updateStatus("error",
d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return m.updateStatus("ready"),m._parseMarkup(c,{},b),c}}});var I="ajax",J,K=function(){J&&r.removeClass(J)};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){m.types.push(I),J=m.st.ajax.cursor,w(b+"."+I,function(){K(),m.req&&m.req.abort()})},getAjax:function(b){J&&r.addClass(J),m.updateStatus("loading");var c=a.extend({url:b.src,
success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),m.appendContent(a(f.data),I),b.finished=!0,K(),z(),setTimeout(function(){m.wrap.addClass(j)},16),m.updateStatus("ready"),y("AjaxContentAdded")},error:function(){K(),b.finished=b.loadError=!0,m.updateStatus("error",m.st.ajax.tError.replace("%url%",b.src))}},m.st.ajax.settings);return m.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=m.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(m,
b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=m.st.image,c=".image";m.types.push("image"),w(f+c,function(){m.currItem.type===
"image"&&a.cursor&&r.addClass(a.cursor)}),w(b+c,function(){a.cursor&&r.removeClass(a.cursor),q.off("resize"+i)}),w("Resize"+c,m.resizeImage),m.isLowIE&&w("AfterChange",m.resizeImage)},resizeImage:function(){var a=m.currItem;if(!a.img)return;if(m.st.image.verticalFit){var b=0;m.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",m.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",
a),a.imgHidden&&(m.content&&m.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){m._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===m.currItem&&(m._onImageHasSize(b),m.updateStatus("ready")),b.hasSize=!0,b.loaded=!0):(d++,
d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===m.currItem&&(m._onImageHasSize(b),m.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=m.st.image,h=c.find(".mfp-img");if(h.length){var i=new Image;i.className="mfp-img",b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone())}return m._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),m.resizeImage(),b.hasSize?(L&&clearInterval(L),
b.loadError?(c.addClass("mfp-loading"),m.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),m.updateStatus("ready")),c):(m.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),m.findImageSize(b)),c)}}});var N="iframe",O="//about:blank",P=function(a){if(m.currTemplate[N]){var b=m.currTemplate[N].find("iframe");b.length&&(a||(b[0].src=O),m.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(N,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){m.types.push(N),w("BeforeChange",function(a,b,c){b!==c&&(b===N?P():c===N&&P(!0))}),w(b+"."+N,function(){P()})},getIframe:function(b,c){var d=b.src,e=m.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&
(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),m._parseMarkup(c,f,b),m.updateStatus("ready"),c}}});var Q=function(a){var b=m.items.length;return a>b-1?a-b:a<0?b+a:a},R=function(a,b,c){return a.replace("%curr%",b+1).replace("%total%",c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=m.st.gallery,d=".mfp-gallery",h=Boolean(a.fn.mfpFastClick);m.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(f+d,function(){c.navigateByImgClick&&m.wrap.on("click"+d,".mfp-img",function(){if(m.items.length>1)return m.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?m.prev():a.keyCode===39&&m.next()})}),w("UpdateStatus"+
d,function(a,b){b.text&&(b.text=R(b.text,m.currItem.index,m.items.length))}),w(e+d,function(a,b,d,e){var f=m.items.length;d.counter=f>1?R(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(m.items.length>1&&c.arrows&&!m.arrowLeft){var b=c.arrowMarkup,d=m.arrowLeft=a(b.replace("%title%",c.tPrev).replace("%dir%","left")).addClass(l),e=m.arrowRight=a(b.replace("%title%",c.tNext).replace("%dir%","right")).addClass(l),f=h?"mfpFastClick":"click";d[f](function(){m.prev()}),e[f](function(){m.next()}),
m.isIE7&&(x("b",d[0],!1,!0),x("a",d[0],!1,!0),x("b",e[0],!1,!0),x("a",e[0],!1,!0)),m.container.append(d.add(e))}}),w(g+d,function(){m._preloadTimeout&&clearTimeout(m._preloadTimeout),m._preloadTimeout=setTimeout(function(){m.preloadNearbyImages(),m._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),m.wrap.off("click"+d),m.arrowLeft&&h&&m.arrowLeft.add(m.arrowRight).destroyMfpFastClick(),m.arrowRight=m.arrowLeft=null})},next:function(){m.direction=!0,m.index=Q(m.index+1),m.updateItemHTML()},prev:function(){m.direction=
!1,m.index=Q(m.index-1),m.updateItemHTML()},goTo:function(a){m.direction=a>=m.index,m.index=a,m.updateItemHTML()},preloadNearbyImages:function(){var a=m.st.gallery.preload,b=Math.min(a[0],m.items.length),c=Math.min(a[1],m.items.length),d;for(d=1;d<=(m.direction?c:b);d++)m._preloadItem(m.index+d);for(d=1;d<=(m.direction?b:c);d++)m._preloadItem(m.index-d)},_preloadItem:function(b){b=Q(b);if(m.items[b].preloaded)return;var c=m.items[b];c.parsed||(c=m.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=
a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0}).attr("src",c.src)),c.preloaded=!0}}})})(window.jQuery||window.Zepto);;
(function($){$.jPanelMenu=function(options){if(typeof options=="undefined"||options==null)options={};var jP={options:$.extend({menu:"#menu",trigger:".menu-trigger",excludedPanelContent:"style, script",direction:"left",openPosition:"250px",animated:true,closeOnContentClick:true,keyboardShortcuts:[{code:27,open:false,close:true},{code:37,open:false,close:true},{code:39,open:true,close:true},{code:77,open:true,close:true}],duration:150,openDuration:options.duration||150,closeDuration:options.duration||
150,easing:"ease-in-out",openEasing:options.easing||"ease-in-out",closeEasing:options.easing||"ease-in-out",before:function(){},beforeOpen:function(){},beforeClose:function(){},after:function(){},afterOpen:function(){},afterClose:function(){},beforeOn:function(){},afterOn:function(){},beforeOff:function(){},afterOff:function(){}},options),settings:{transitionsSupported:"WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"msTransition"in document.body.style||"OTransition"in
document.body.style||"Transition"in document.body.style,shiftFixedChildren:false,panelPosition:"relative",positionUnits:"px"},menu:"#jPanelMenu-menu",panel:".jPanelMenu-panel",fixedChildren:[],timeouts:{},clearTimeouts:function(){clearTimeout(jP.timeouts.open);clearTimeout(jP.timeouts.afterOpen);clearTimeout(jP.timeouts.afterClose)},setPositionUnits:function(){var foundUnit=false,allowedUnits=["%","px","em"];for(unitID in allowedUnits){var unit=allowedUnits[unitID];if(jP.options.openPosition.toString().substr(-unit.length)==
unit){foundUnit=true;jP.settings.positionUnits=unit}}if(!foundUnit)jP.options.openPosition=parseInt(jP.options.openPosition)+jP.settings.positionUnits},checkFixedChildren:function(){jP.disableTransitions();var defaultPanelStyle={position:$(jP.panel).css("position")};defaultPanelStyle[jP.options.direction]=$(jP.panel).css(jP.options.direction)=="auto"?0:$(jP.panel).css(jP.options.direction);$(jP.panel).find("> *").each(function(){if($(this).css("position")=="fixed"&&$(this).css(jP.options.direction)==
"auto")jP.fixedChildren.push(this)});if(jP.fixedChildren.length>0){var newPanelStyle={position:"relative"};newPanelStyle[jP.options.direction]="1px";jP.setPanelStyle(newPanelStyle);if(parseInt($(jP.fixedChildren[0]).offset().left)==0)jP.settings.shiftFixedChildren=true}jP.setPanelStyle(defaultPanelStyle)},setjPanelMenuStyles:function(){var bgColor="#fff";var htmlBG=$("html").css("background-color");var bodyBG=$("body").css("background-color");if(bodyBG!="transparent"&&bodyBG!="rgba(0, 0, 0, 0)")bgColor=
bodyBG;else if(htmlBG!="transparent"&&htmlBG!="rgba(0, 0, 0, 0)")bgColor=htmlBG;else bgColor="#fff";if($("#jPanelMenu-style-master").length==0)$("body").append('<style id="jPanelMenu-style-master">@media only screen and (max-width: 767px) { body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;'+jP.options.direction+":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;"+jP.options.direction+
":0;top:0;z-index:2;width:100%;min-height:100%;background:"+bgColor+"}}</style>")},setMenuState:function(open){var position=open?"open":"closed";$("body").attr("data-menu-position",position)},getMenuState:function(){return $("body").attr("data-menu-position")},menuIsOpen:function(){if(jP.getMenuState()=="open")return true;else return false},setMenuStyle:function(styles){$(jP.menu).css(styles)},setPanelStyle:function(styles){$(jP.panel).css(styles)},showMenu:function(){jP.setMenuStyle({display:"block"});
jP.setMenuStyle({"z-index":"1"})},hideMenu:function(){jP.setMenuStyle({"z-index":"-1"});jP.setMenuStyle({display:"none"})},enableTransitions:function(duration,easing){var formattedDuration=duration/1E3;var formattedEasing=jP.getCSSEasingFunction(easing);jP.disableTransitions();$("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{-webkit-transition: all '+formattedDuration+"s "+formattedEasing+"; -moz-transition: all "+formattedDuration+"s "+formattedEasing+"; -o-transition: all "+
formattedDuration+"s "+formattedEasing+"; transition: all "+formattedDuration+"s "+formattedEasing+";}</style>")},disableTransitions:function(){$("#jPanelMenu-style-transitions").remove()},enableFixedTransitions:function(selector,id,duration,easing){var formattedDuration=duration/1E3;var formattedEasing=jP.getCSSEasingFunction(easing);jP.disableFixedTransitions(id);$("body").append('<style id="jPanelMenu-style-fixed-'+id+'">'+selector+"{-webkit-transition: all "+formattedDuration+"s "+formattedEasing+
"; -moz-transition: all "+formattedDuration+"s "+formattedEasing+"; -o-transition: all "+formattedDuration+"s "+formattedEasing+"; transition: all "+formattedDuration+"s "+formattedEasing+";}</style>")},disableFixedTransitions:function(id){$("#jPanelMenu-style-fixed-"+id).remove()},getCSSEasingFunction:function(name){switch(name){case "linear":return name;break;case "ease":return name;break;case "ease-in":return name;break;case "ease-out":return name;break;case "ease-in-out":return name;break;default:return"ease-in-out";
break}},getJSEasingFunction:function(name){switch(name){case "linear":return name;break;default:return"swing";break}},openMenu:function(animated){if(typeof animated=="undefined"||animated==null)animated=jP.options.animated;jP.clearTimeouts();jP.options.before();jP.options.beforeOpen();jP.setMenuState(true);jP.setPanelStyle({position:"relative"});jP.showMenu();var animationChecks={none:!animated?true:false,transitions:animated&&jP.settings.transitionsSupported?true:false};if(animationChecks.transitions||
animationChecks.none){if(animationChecks.none)jP.disableTransitions();if(animationChecks.transitions)jP.enableTransitions(jP.options.openDuration,jP.options.openEasing);var newPanelStyle={};newPanelStyle[jP.options.direction]=jP.options.openPosition;jP.setPanelStyle(newPanelStyle);if(jP.settings.shiftFixedChildren)$(jP.fixedChildren).each(function(){var id=$(this).prop("tagName").toLowerCase()+" "+$(this).attr("class"),selector=id.replace(" ","."),id=id.replace(" ","-");if(animationChecks.none)jP.disableFixedTransitions(id);
if(animationChecks.transitions)jP.enableFixedTransitions(selector,id,jP.options.openDuration,jP.options.openEasing);var newChildrenStyle={};newChildrenStyle[jP.options.direction]=jP.options.openPosition;$(this).css(newChildrenStyle)});jP.timeouts.afterOpen=setTimeout(function(){jP.disableTransitions();if(jP.settings.shiftFixedChildren)$(jP.fixedChildren).each(function(){var id=$(this).prop("tagName").toLowerCase()+" "+$(this).attr("class"),id=id.replace(" ","-");jP.disableFixedTransitions(id)});jP.options.after();
jP.options.afterOpen();jP.initiateContentClickListeners()},jP.options.openDuration)}else{var formattedEasing=jP.getJSEasingFunction(jP.options.openEasing);var animationOptions={};animationOptions[jP.options.direction]=jP.options.openPosition;$(jP.panel).stop().animate(animationOptions,jP.options.openDuration,formattedEasing,function(){jP.options.after();jP.options.afterOpen();jP.initiateContentClickListeners()});if(jP.settings.shiftFixedChildren)$(jP.fixedChildren).each(function(){var childrenAnimationOptions=
{};childrenAnimationOptions[jP.options.direction]=jP.options.openPosition;$(this).stop().animate(childrenAnimationOptions,jP.options.openDuration,formattedEasing)})}},closeMenu:function(animated){if(typeof animated=="undefined"||animated==null)animated=jP.options.animated;jP.clearTimeouts();jP.options.before();jP.options.beforeClose();jP.setMenuState(false);var animationChecks={none:!animated?true:false,transitions:animated&&jP.settings.transitionsSupported?true:false};if(animationChecks.transitions||
animationChecks.none){if(animationChecks.none)jP.disableTransitions();if(animationChecks.transitions)jP.enableTransitions(jP.options.closeDuration,jP.options.closeEasing);var newPanelStyle={};newPanelStyle[jP.options.direction]=0+jP.settings.positionUnits;jP.setPanelStyle(newPanelStyle);if(jP.settings.shiftFixedChildren)$(jP.fixedChildren).each(function(){var id=$(this).prop("tagName").toLowerCase()+" "+$(this).attr("class"),selector=id.replace(" ","."),id=id.replace(" ","-");if(animationChecks.none)jP.disableFixedTransitions(id);
if(animationChecks.transitions)jP.enableFixedTransitions(selector,id,jP.options.closeDuration,jP.options.closeEasing);var newChildrenStyle={};newChildrenStyle[jP.options.direction]=0+jP.settings.positionUnits;$(this).css(newChildrenStyle)});jP.timeouts.afterClose=setTimeout(function(){jP.setPanelStyle({position:jP.settings.panelPosition});jP.disableTransitions();if(jP.settings.shiftFixedChildren)$(jP.fixedChildren).each(function(){var id=$(this).prop("tagName").toLowerCase()+" "+$(this).attr("class"),
id=id.replace(" ","-");jP.disableFixedTransitions(id)});jP.hideMenu();jP.options.after();jP.options.afterClose();jP.destroyContentClickListeners()},jP.options.closeDuration)}else{var formattedEasing=jP.getJSEasingFunction(jP.options.closeEasing);var animationOptions={};animationOptions[jP.options.direction]=0+jP.settings.positionUnits;$(jP.panel).stop().animate(animationOptions,jP.options.closeDuration,formattedEasing,function(){jP.setPanelStyle({position:jP.settings.panelPosition});jP.hideMenu();
jP.options.after();jP.options.afterClose();jP.destroyContentClickListeners()});if(jP.settings.shiftFixedChildren)$(jP.fixedChildren).each(function(){var childrenAnimationOptions={};childrenAnimationOptions[jP.options.direction]=0+jP.settings.positionUnits;$(this).stop().animate(childrenAnimationOptions,jP.options.closeDuration,formattedEasing)})}},triggerMenu:function(animated){if(jP.menuIsOpen())jP.closeMenu(animated);else jP.openMenu(animated)},initiateClickListeners:function(){$(document).on("click",
jP.options.trigger,function(){jP.triggerMenu(jP.options.animated);return false})},destroyClickListeners:function(){$(document).off("click",jP.options.trigger,null)},initiateContentClickListeners:function(){if(!jP.options.closeOnContentClick)return false;$(document).on("click",jP.panel,function(e){if(jP.menuIsOpen())jP.closeMenu(jP.options.animated)});$(document).on("touchend",jP.panel,function(e){if(jP.menuIsOpen())jP.closeMenu(jP.options.animated)})},destroyContentClickListeners:function(){if(!jP.options.closeOnContentClick)return false;
$(document).off("click",jP.panel,null);$(document).off("touchend",jP.panel,null)},initiateKeyboardListeners:function(){var preventKeyListeners=["input","textarea"];$(document).on("keydown",function(e){var target=$(e.target),prevent=false;$.each(preventKeyListeners,function(){if(target.is(this.toString()))prevent=true});if(prevent)return true;for(mapping in jP.options.keyboardShortcuts)if(e.which==jP.options.keyboardShortcuts[mapping].code){var key=jP.options.keyboardShortcuts[mapping];if(key.open&&
key.close)jP.triggerMenu(jP.options.animated);else if(key.open&&!key.close&&!jP.menuIsOpen())jP.openMenu(jP.options.animated);else if(!key.open&&key.close&&jP.menuIsOpen())jP.closeMenu(jP.options.animated);return false}})},destroyKeyboardListeners:function(){$(document).off("keydown",null)},setupMarkup:function(){$("html").addClass("jPanelMenu");$("body > *").not(jP.menu+", "+jP.options.excludedPanelContent).wrapAll('<div class="'+jP.panel.replace(".","")+'"/>');$(jP.options.menu).clone().attr("id",
jP.menu.replace("#","")).insertAfter("body > "+jP.panel)},resetMarkup:function(){$("html").removeClass("jPanelMenu");$("body > "+jP.panel+" > *").unwrap();$(jP.menu).remove()},init:function(){jP.options.beforeOn();jP.initiateClickListeners();if(Object.prototype.toString.call(jP.options.keyboardShortcuts)==="[object Array]")jP.initiateKeyboardListeners();jP.setjPanelMenuStyles();jP.setMenuState(false);jP.setupMarkup();jP.setMenuStyle({width:jP.options.openPosition});jP.checkFixedChildren();jP.setPositionUnits();
jP.closeMenu(false);jP.options.afterOn()},destroy:function(){jP.options.beforeOff();jP.closeMenu();jP.destroyClickListeners();if(Object.prototype.toString.call(jP.options.keyboardShortcuts)==="[object Array]")jP.destroyKeyboardListeners();jP.resetMarkup();var childrenStyles={};childrenStyles[jP.options.direction]="auto";$(jP.fixedChildren).each(function(){$(this).css(childrenStyles)});jP.fixedChildren=[];jP.options.afterOff()}};return{on:jP.init,off:jP.destroy,trigger:jP.triggerMenu,open:jP.openMenu,
close:jP.closeMenu,isOpen:jP.menuIsOpen,menu:jP.menu,getMenu:function(){return $(jP.menu)},panel:jP.panel,getPanel:function(){return $(jP.panel)}}}})(jQuery);;
/* ----------------- Start Document ----------------- */
(function($) {
  $(document).ready(function() {
    
    $('.notification .close').click(function(){
      
      $(this).parent().parent('.notification').hide();
      
    });
    $search_box = $('#menu-search');
    if ($search_box.length) {
      var search_form_code = '<li class="search-container"><div id="search-form"><form action="' + Drupal.settings.basePath + '?q=search" method="POST"><input type="text" name="keys" class="search-text-box"></form></div></li>';
      $('#navigation ul.sf-menu').append(search_form_code);
    }

    $('.block-simplenews .form-item-mail .form-text').focus(function() {
      $(this).parent().find('label').hide();
    });
    /*----------------------------------------------------*/
    /*	Sticky Header
     /*----------------------------------------------------*/

    var stickyheader = true; // set false to disable or true to enable sticky header

    if (stickyheader == true) {

      var searchform = $('#search-form'),
              logo = $('#logo'),
              header = $('#header'),
              menu = $('#navigation ul.sf-menu > li > a');


      var smallHeight = 80, // set compact header height
              durationAnim = 150, // animation speed

              defaultHeight = parseInt(header.css('height')),
              defSearchformMarginTop = parseInt(searchform.css('margin-top')),
              defLogoMarginTop = parseInt(logo.css('margin-top')),
              defMenuPaddingTop = parseInt(menu.css('padding-top')),
              defMenuPaddingBottom = parseInt(menu.css('padding-bottom')),
              small_height = defaultHeight - smallHeight;

      $("#header").css({position: "fixed"});

      var stickyValue = defaultHeight;

      function stickyPosition(val, body, header) {
        $(header).css({marginTop: val});
        $(body).css({paddingTop: val});
      }

      stickyPosition(-stickyValue, null, "#header");
      stickyPosition(stickyValue, "body", null);

      function stickymenu() {
        var base = this,
                offset = $(window).scrollTop(), // Get how much of the window is scrolled
                header = $('#header'),
                src = logo.find('img').attr('src');

        var searchformMarginTop = defSearchformMarginTop - small_height / 2;
        menuPaddingTop = defMenuPaddingTop - small_height / 2,
                menuPaddingBottom = defMenuPaddingBottom - small_height / 2,
                logoMarginTop = defLogoMarginTop - 1 - small_height / 2;

        if ($(window).width() > 767) {
          if (offset > 60) { // if it is over 60px (the initial width)
            if (!header.hasClass('compact')) {
              header.animate({
                height: defaultHeight - small_height
              }, {
                queue: false,
                duration: durationAnim,
                complete: function() {
                  header.addClass('compact').css("overflow", "visible");
                }
              });
              searchform.animate({
                marginTop: searchformMarginTop,
              }, {
                queue: false,
                duration: durationAnim
              });

              logo.animate({
                marginTop: logoMarginTop
              }, {
                queue: false,
                duration: durationAnim
              });
              menu.animate({
                paddingTop: menuPaddingTop,
                paddingBottom: menuPaddingBottom,
                margin: 0
              }, {
                queue: false,
                duration: durationAnim
              });
            }
          } else if (offset > -1 && offset < 60) {
            header.animate({
              height: defaultHeight,
            }, {
              queue: false,
              duration: durationAnim,
              complete: function() {
                header.removeClass('compact').css("overflow", "visible");
              }
            });
            searchform.animate({
              marginTop: defSearchformMarginTop,
            }, {
              queue: false,
              duration: durationAnim
            });
            logo.stop().animate({
              marginTop: defLogoMarginTop
            }, {
              queue: false,
              duration: durationAnim
            });
            menu.animate({
              paddingTop: defMenuPaddingTop,
              paddingBottom: defMenuPaddingBottom,
            }, {
              queue: false,
              duration: durationAnim
            });
          }
        }
      }

      stickymenu();
      $(window).scroll(function() {
        stickymenu();
      });

      // sticky header reset for mobile
      $(window).resize(function() {
        var winWidth = $(window).width();
        if (winWidth < 767) {
          $('#logo').css('marginTop', '');
          $('#header').css('height', '').removeClass('compact');
          $("#header").css({position: ""});
          $('#navigation ul.sf-menu > li > a').css({
            'paddingTop': '',
            'paddingBottom': '',
          });
          $('#search-form').css('marginTop', '');
          stickyPosition(null, null, "#header");
          stickyPosition(null, "body", null);
        } else {
          stickymenu();
          stickyPosition(-stickyValue, null, "#header");
          stickyPosition(stickyValue, "body", null);
          $("#header").css({position: "fixed"});
        }
      });
    }


    /*----------------------------------------------------*/
    /*	Navigation
     /*----------------------------------------------------*/

    /*----------------------------------------------------*/
    /*	Mobile Navigation
     /*----------------------------------------------------*/

    var jPanelMenu = {};
    $(function() {
      $('pre').each(function(i, e) {
        hljs.highlightBlock(e)
      });

      jPanelMenu = $.jPanelMenu({
        menu: 'ul.sf-menu',
        animated: false,
        keyboardShortcuts: true
      });
      jPanelMenu.on();

      $(document).on('click', jPanelMenu.menu + ' li a', function(e) {
        if (jPanelMenu.isOpen() && $(e.target).attr('href').substring(0, 1) == '#') {
          jPanelMenu.close();
        }
      });

      $(document).on('touchend', '.menu-trigger', function(e) {
        jPanelMenu.triggerMenu();
        e.preventDefault();
        return false;
      });

      // Removes SuperFish Styles
      $('#jPanelMenu-menu').removeClass('sf-menu');
      $('#jPanelMenu-menu li ul').removeAttr('style');

    });


    /*----------------------------------------------------*/
    /*	Mobile Search
     /*----------------------------------------------------*/

    $('.search-trigger').click(function() {
      if ($('#menu-search').is(":visible")) {
        $('.menu-trigger,#logo').show();
        $('#menu-search').hide();
        $('.search-trigger .icon-remove').removeClass('icon-remove').addClass('icon-search');
      } else {
        $('.menu-trigger, #logo').hide();
        $('#menu-search').show();
        $('.search-trigger .icon-search').removeClass('icon-search').addClass('icon-remove');
      }
    })

    $(window).resize(function() {
      var winWidth = $(window).width();
      if (winWidth > 767) {
        jPanelMenu.close();
        $('.menu-trigger, #logo').show();
        $('#menu-search').hide();
        $('.icon-remove').removeClass('icon-remove').addClass('icon-search');
      }
    });


    /*----------------------------------------------------*/
    /*	Revolution Slider
     /*----------------------------------------------------*/

    if ($.fn.cssOriginal != undefined) {
      $.fn.css = $.fn.cssOriginal;
    }



    /*----------------------------------------------------*/
    /*	ShowBiz Carousel
     /*----------------------------------------------------*/

    function is_mobile() {
      var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'Android', 'webos', , 'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
      var ismobile = false;
      for (i in agents) {
        if (navigator.userAgent.split(agents[i]).length > 1)
          ismobile = true;
      }
      return ismobile;
    }

    jQuery('#recent-work').showbizpro({
      dragAndScroll: (is_mobile() ? "on" : "off"),
      visibleElementsArray: [4, 4, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#our-clients').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [5, 4, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#our-coverage').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [5, 4, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#testimonials').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [1, 1, 1, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#happy-clients').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [1, 1, 1, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#team').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [3, 3, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });


    /*----------------------------------------------------*/
    /*	Hover Overlay
     /*----------------------------------------------------*/

    $(".media").hover(function() {
      $(this).find(".hovercover").stop().fadeTo(200, 1);
      $(this).find(".hovericon").stop().animate({'top': '50%', 'opacity': 1}, 250, 'easeOutBack');
    }, function() {
      $(this).find(".hovercover").stop().fadeTo(200, 0);
      $(this).find(".hovericon").stop().animate({'top': '65%', 'opacity': 0}, 150, 'easeOutSine');
    });


    /*----------------------------------------------------*/
    /*	Tooltips
     /*----------------------------------------------------*/

    $(".tooltip.top").tipTip({
      defaultPosition: "top"
    });

    $(".tooltip.bottom").tipTip({
      defaultPosition: "bottom"
    });

    $(".tooltip.left").tipTip({
      defaultPosition: "left"
    });

    $(".tooltip.right").tipTip({
      defaultPosition: "right"
    });




    /*----------------------------------------------------*/
    /*	Magnific Popup
     /*----------------------------------------------------*/

    $(document).ready(function() {

      $('body').magnificPopup({
        type: 'image',
        delegate: 'a.mfp-gallery',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: true,
        removalDelay: 0,
        mainClass: 'mfp-fade',
        gallery: {enabled: true},
        callbacks: {
          buildControls: function() {
            console.log('inside');
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }
        }
      });

      $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
          verticalFit: true
        }
      });

      $('.mfp-youtube, .mfp-vimeo, .mfp-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false
      });

    });


    /*----------------------------------------------------*/
    /*	Tabs
     /*----------------------------------------------------*/

    var $tabsNav = $('.tabs-nav'),
            $tabsNavLis = $tabsNav.children('li'),
            $tabContent = $('.tab-content');

    $tabsNav.each(function() {
      var $this = $(this);

      $this.next().children('.tab-content').stop(true, true).hide()
              .first().show();

      $this.children('li').first().addClass('active').stop(true, true).show();
    });

    $tabsNavLis.on('click', function(e) {
      var $this = $(this);

      $this.siblings().removeClass('active').end()
              .addClass('active');

      $this.parent().next().children('.tab-content').stop(true, true).hide()
              .siblings($this.find('a').attr('href')).fadeIn();

      e.preventDefault();
    });


    /*----------------------------------------------------*/
    /*	Accordion
     /*----------------------------------------------------*/

    var $accor = $('.accordion');

    $accor.each(function() {
      $(this).addClass('ui-accordion ui-widget ui-helper-reset');
      $(this).find('.field-accordion-tabs h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
      $(this).find('.field-accordion-tabs div.accordion-content').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
      $(this).find(".field-accordion-tabs div.accordion-content").hide().first().show();
      $(this).find(".field-accordion-tabs h3").first().removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-accordion-header-active ui-state-active ui-corner-top');
      $(this).find(".field-accordion-tabs span").first().addClass('ui-accordion-icon-active');
    });

    $trigger = $accor.find('h3');

    $trigger.on('click', function(e) {
      var location = $(this).parent();

      if ($(this).next().is(':hidden')) {
        $triggerloc = $('h3', location);
        $triggerloc.parent().siblings().find('.ui-accordion-header-active').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
        $triggerloc.parent().siblings().find('span').removeClass('ui-accordion-icon-active');
        $(this).find('span').addClass('ui-accordion-icon-active');
        $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
      }
      e.preventDefault();
    });


    /*----------------------------------------------------*/
    /*	Toggle
     /*----------------------------------------------------*/

    $(".toggle-container").hide();
    $(".trigger").toggle(function() {
      $(this).addClass("active");
    }, function() {
      $(this).removeClass("active");
    });
    $(".trigger").click(function() {
      $(this).next(".toggle-container").slideToggle();
    });

    $(".trigger.opened").toggle(function() {
      $(this).removeClass("active");
    }, function() {
      $(this).addClass("active");
    });

    $(".trigger.opened").addClass("active").next(".toggle-container").show();


    /*----------------------------------------------------*/
    /*	Skill Bars Animation
     /*----------------------------------------------------*/

    if ($('#skillzz').length != 0) {
      var skillbar_active = false;
      $('.skill-bar-value').hide();

      if ($(window).scrollTop() == 0 && isScrolledIntoView($('#skillzz')) == true) {
        skillbarActive();
        skillbar_active = true;
      }
      else if (isScrolledIntoView($('#skillzz')) == true) {
        skillbarActive();
        skillbar_active = true;
      }
      $(window).bind('scroll', function() {
        if (skillbar_active === false && isScrolledIntoView($('#skillzz')) == true) {
          skillbarActive();
          skillbar_active = true;
        }
      });
    }

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= (docViewBottom + $(elem).height())) && (elemTop >= (docViewTop - $(elem).height())));
    }

    function skillbarActive() {
      setTimeout(function() {

        $('.skill-bar-value').each(function() {
          $(this)
                  .data("origWidth", $(this)[0].style.width)
                  .css('width', '1%').show();
          $(this)
                  .animate({
                    width: $(this).data("origWidth")
                  }, 1200);
        });

        $('.skill-bar-value .dot').each(function() {
          var me = $(this);
          var perc = me.attr("data-percentage");

          var current_perc = 0;

          var progress = setInterval(function() {
            if (current_perc >= perc) {
              clearInterval(progress);
            } else {
              current_perc += 1;
              me.text((current_perc) + '%');
            }
          }, 10);
        });
      }, 10);
    }


    /*----------------------------------------------------*/
    /*	Alert Boxes
     /*----------------------------------------------------*/

    $(document).ready(function() {
      $("a.close").removeAttr("href").click(function() {
        $(this).parent().fadeOut(200);
      });
    });


    /* ------------------ End Document ------------------ */
        $(document).ready(function() {
          $("form.login").on('submit', function(e){
            e.preventDefault();
            var mail = $(this).find('input[name="email"]').val();

            if ($.browser.msie && window.XDomainRequest) {
                    if (window.XDomainRequest) {
                        var xdr = new XDomainRequest();
                        var query = 'http://im.tapclicks.com/send_login_details.php?action=send&email=' + mail;
                        if (xdr) {
                            xdr.onload = function () {
                              resp = JSON.parse(xdr.responseText);
                              
                              $('.login-form-wrapper div.message').remove();
                              $('.login-form-wrapper').prepend('<div class="message">' + resp.message + '</div>');

                              if (resp.status === 'success') {
                                $('.login-form-wrapper div.message').addClass('success');
                              }
                              if (resp.status === 'error') {
                                $('.login-form-wrapper div.message').addClass('error');
                              }
                            }
                            xdr.onerror = function () { /* error handling here */ }
                            xdr.open('GET', query);
                            xdr.send();
                        }
                    }
                }
                else {
                  $.ajax({           
                    url: 'http://im.tapclicks.com/send_login_details.php?action=send&email=' + mail,
                    type: 'post',
                    dataType: 'json',
                    crossDomain: true,
                    success: function (resp) {
                        console.log(resp);
                        $('.login-form-wrapper div.message').remove();
                        $('.login-form-wrapper').prepend('<div class="message">' + resp.message + '</div>');

                        if (resp.status === 'success') {
                          $('.login-form-wrapper div.message').addClass('success');
                        }
                        if (resp.status === 'error') {
                          $('.login-form-wrapper div.message').addClass('error');
                        }

                    },
                    error: function(e) {
                        console.log('Error: '+e);
                    }
                  });
                }
        });
        
        function blink(){
          $(".blink").css({ 'color' : '#EC008B'}).animate({opacity:0},300,"linear",function(){
            $(this).css({ 'color': '#ffffff'}).animate({opacity:1},300);
          });
        }

        setInterval(blink, 4000);

        
      });

      $(".front div#feature-desc").removeClass("seven").addClass("ten");

      $('#edit-field-integration-category-tid').live('click', function() {
        $('.content .view-content').first().fadeOut('slow');
      });


  });

})(this.jQuery);;
