(function($){Drupal.toggleFieldset=function(fieldset){var $fieldset=$(fieldset);if($fieldset.is(".collapsed")){var $content=$("> .fieldset-wrapper",fieldset).hide();$fieldset.removeClass("collapsed").trigger({type:"collapsed",value:false}).find("> legend span.fieldset-legend-prefix").html(Drupal.t("Hide"));$content.slideDown({duration:"fast",easing:"linear",complete:function(){Drupal.collapseScrollIntoView(fieldset);fieldset.animating=false},step:function(){Drupal.collapseScrollIntoView(fieldset)}})}else{$fieldset.trigger({type:"collapsed",
value:true});$("> .fieldset-wrapper",fieldset).slideUp("fast",function(){$fieldset.addClass("collapsed").find("> legend span.fieldset-legend-prefix").html(Drupal.t("Show"));fieldset.animating=false})}};Drupal.collapseScrollIntoView=function(node){var h=document.documentElement.clientHeight||document.body.clientHeight||0;var offset=document.documentElement.scrollTop||document.body.scrollTop||0;var posY=$(node).offset().top;var fudge=55;if(posY+node.offsetHeight+fudge>h+offset)if(node.offsetHeight>
h)window.scrollTo(0,posY);else window.scrollTo(0,posY+node.offsetHeight-h+fudge)};Drupal.behaviors.collapse={attach:function(context,settings){$("fieldset.collapsible",context).once("collapse",function(){var $fieldset=$(this);var anchor=location.hash&&location.hash!="#"?", "+location.hash:"";if($fieldset.find(".error"+anchor).length)$fieldset.removeClass("collapsed");var summary=$('<span class="summary"></span>');$fieldset.bind("summaryUpdated",function(){var text=$.trim($fieldset.drupalGetSummary());
summary.html(text?" ("+text+")":"")}).trigger("summaryUpdated");var $legend=$("> legend .fieldset-legend",this);$('<span class="fieldset-legend-prefix element-invisible"></span>').append($fieldset.hasClass("collapsed")?Drupal.t("Show"):Drupal.t("Hide")).prependTo($legend).after(" ");var $link=$('<a class="fieldset-title" href="#"></a>').prepend($legend.contents()).appendTo($legend).click(function(){var fieldset=$fieldset.get(0);if(!fieldset.animating){fieldset.animating=true;Drupal.toggleFieldset(fieldset)}return false});
$legend.append(summary)})}}})(jQuery);;
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.abs(pX-cX)+Math.abs(pY-cY)<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,
ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t)ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1)ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1)ob.hoverIntent_t=setTimeout(function(){delay(ev,
ob)},cfg.timeout)}};return this.bind("mouseenter",handleHover).bind("mouseleave",handleHover)}})(jQuery);;
(function($){$.fn.sfsmallscreen=function(options){options=$.extend({mode:"inactive",breakpoint:768,useragent:"",title:"",addSelected:true,menuClasses:true,hyperlinkClasses:true,excludeClass_menu:"",excludeClass_hyperlink:"",includeClass_menu:"",includeClass_hyperlink:""},options);function refine(menu){if($(".sf-megamenu",menu).length>0){var refined=menu.clone();refined.find("div.sf-megamenu-column > ol").each(function(){$(this).replaceWith("<ul>"+$(this).html()+"</ul>")});refined.find("div.sf-megamenu-column").each(function(){$(this).replaceWith($(this).html())}).end().find(".sf-megamenu-wrapper > ol").each(function(){$(this).replaceWith($(this).html())}).end().find("li.sf-megamenu-wrapper").each(function(){$(this).replaceWith($(this).html())})}else var refined=
menu.clone();refined.find(".sf-smallscreen-remove").each(function(){$(this).replaceWith($(this).html())}).end().find(".sf-sub-indicator, .sf-description").each(function(){$(this).remove()});return refined}function toSelect(menu,level){var items="";$(menu).children("li").each(function(){var list=$(this);list.children("a, span").each(function(){var item=$(this),path=item.is("a")?item.attr("href"):"",itemClone=item.clone(),classes=options.hyperlinkClasses?options.excludeClass_hyperlink&&itemClone.hasClass(options.excludeClass_hyperlink)?
itemClone.removeClass(options.excludeClass_hyperlink).attr("class"):itemClone.attr("class"):"",classes=options.includeClass_hyperlink&&!itemClone.hasClass(options.includeClass_hyperlink)?options.hyperlinkClasses?itemClone.addClass(options.includeClass_hyperlink).attr("class"):options.includeClass_hyperlink:classes,classes=classes?' class="'+classes+'"':"",disable=item.is("span")?' disabled="disabled"':"",subIndicator=1<level?Array(level).join("-")+" ":"";items+='<option value="'+path+'"'+classes+
disable+">"+subIndicator+$.trim(item.text())+"</option>";list.find("> ul").each(function(){items+=toSelect(this,level+1)})})});return items}function convert(menu){var menuClone=menu.clone(),classes=options.menuClasses?options.excludeClass_menu&&menuClone.hasClass(options.excludeClass_menu)?menuClone.removeClass(options.excludeClass_menu).attr("class"):menuClone.attr("class"):"",classes=options.includeClass_menu&&!menuClone.hasClass(options.includeClass_menu)?options.menuClasses?menuClone.addClass(options.includeClass_menu).attr("class"):
options.includeClass_menu:classes,classes=classes?' class="'+classes+'"':"";if($("#"+menu.attr("id")+"-select").length==0){var selectList=$("<select"+classes+' id="'+menu.attr("id")+'-select"/>'),refinedMenu=refine(menu);newMenu=toSelect(refinedMenu,1);selectList.append("<option>"+options.title+"</option>").append(newMenu).change(function(){window.location=selectList.val()});if(options.addSelected)selectList.find(".active").attr("selected",!0);menu.before(selectList).hide()}}function turnBack(menu){var id=
"#"+menu.attr("id");$(id+"-select").remove();$(id).show()}return this.each(function(){var menu=$(this),mode=options.mode;switch(mode){case "always_active":convert(menu);break;case "window_width":if($(window).width()<options.breakpoint)convert(menu);var timer;$(window).resize(function(){clearTimeout(timer);timer=setTimeout(function(){if($(window).width()<options.breakpoint)convert(menu);else turnBack(menu)},100)});break;case "useragent_custom":if(options.useragent!=""){var ua=RegExp(options.useragent,
"i");if(navigator.userAgent.match(ua))convert(menu)}break;case "useragent_predefined":if(navigator.userAgent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i))convert(menu);break}})}})(jQuery);;
(function($){$.fn.supposition=function(){var $w=$(window),_offset=function(dir){return window[dir=="y"?"pageYOffset":"pageXOffset"]||document.documentElement&&document.documentElement[dir=="y"?"scrollTop":"scrollLeft"]||document.body[dir=="y"?"scrollTop":"scrollLeft"]},onHide=function(){this.css({bottom:""})},onBeforeShow=function(){this.each(function(){var $u=$(this);$u.css("display","block");var menuWidth=$u.width(),menuParentWidth=$u.closest("li").outerWidth(true),menuParentLeft=$u.closest("li").offset().left,
totalRight=$w.width()+_offset("x"),menuRight=$u.offset().left+menuWidth,exactMenuWidth=menuRight>menuParentWidth+menuParentLeft?menuWidth-(menuRight-(menuParentWidth+menuParentLeft)):menuWidth;if($u.parents(".sf-js-enabled").hasClass("rtl")){if(menuParentLeft<exactMenuWidth){$u.css("left",menuParentWidth+"px");$u.css("right","auto")}}else if(menuRight>totalRight&&menuParentLeft>menuWidth){$u.css("right",menuParentWidth+"px");$u.css("left","auto")}var windowHeight=$w.height(),offsetTop=$u.offset().top,
menuParentShadow=$u.closest(".sf-menu").hasClass("sf-shadow")&&$u.css("padding-bottom").length>0?parseInt($u.css("padding-bottom").slice(0,-2)):0,menuParentHeight=$u.closest(".sf-menu").hasClass("sf-vertical")?"-"+menuParentShadow:$u.parent().outerHeight(true)-menuParentShadow,menuHeight=$u.height(),baseline=windowHeight+_offset("y");var expandUp=offsetTop+menuHeight>baseline&&offsetTop>menuHeight;if(expandUp){$u.css("bottom",menuParentHeight+"px");$u.css("top","auto")}$u.css("display","none")})};
return this.each(function(){var o=$.fn.superfish.o[this.serial];var _onBeforeShow=o.onBeforeShow,_onHide=o.onHide;$.extend($.fn.superfish.o[this.serial],{onBeforeShow:function(){onBeforeShow.call(this);_onBeforeShow.call(this)},onHide:function(){onHide.call(this);_onHide.call(this)}})})}})(jQuery);;
(function($){$.fn.superfish=function(op){var sf=$.fn.superfish,c=sf.c,$arrow=$(['<span class="',c.arrowClass,'"> &#187;</span>'].join("")),over=function(){var $$=$(this),menu=getMenu($$);clearTimeout(menu.sfTimer);$$.showSuperfishUl().siblings().hideSuperfishUl()},out=function(){var $$=$(this),menu=getMenu($$),o=sf.op;clearTimeout(menu.sfTimer);menu.sfTimer=setTimeout(function(){o.retainPath=$.inArray($$[0],o.$path)>-1;$$.hideSuperfishUl();if(o.$path.length&&$$.parents(["li.",o.hoverClass].join("")).length<
1)over.call(o.$path)},o.delay)},getMenu=function($menu){var menu=$menu.parents(["ul.",c.menuClass,":first"].join(""))[0];sf.op=sf.o[menu.serial];return menu},addArrow=function($a){$a.addClass(c.anchorClass).append($arrow.clone())};return this.each(function(){var s=this.serial=sf.o.length;var o=$.extend({},sf.defaults,op);o.$path=$("li."+o.pathClass,this).slice(0,o.pathLevels).each(function(){$(this).addClass([o.hoverClass,c.bcClass].join(" ")).filter("li:has(ul)").removeClass(o.pathClass)});sf.o[s]=
sf.op=o;$("li:has(ul)",this)[$.fn.hoverIntent&&!o.disableHI?"hoverIntent":"hover"](over,out).each(function(){if(o.autoArrows)addArrow($(">a:first-child",this))}).not("."+c.bcClass).hideSuperfishUl();var $a=$("a",this);$a.each(function(i){var $li=$a.eq(i).parents("li");$a.eq(i).focus(function(){over.call($li)}).blur(function(){out.call($li)})});o.onInit.call(this)}).each(function(){var menuClasses=[c.menuClass];if(sf.op.dropShadows&&!($.browser.msie&&$.browser.version<7))menuClasses.push(c.shadowClass);
$(this).addClass(menuClasses.join(" "))})};var sf=$.fn.superfish;sf.o=[];sf.op={};sf.IE7fix=function(){var o=sf.op;if($.browser.msie&&$.browser.version>6&&o.dropShadows&&o.animation.opacity!=undefined)this.toggleClass(sf.c.shadowClass+"-off")};sf.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"};sf.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",
autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};$.fn.extend({hideSuperfishUl:function(){var o=sf.op,not=o.retainPath===true?o.$path:"";o.retainPath=false;var $ul=$(["li.",o.hoverClass].join(""),this).add(this).not(not).removeClass(o.hoverClass).find(">ul").addClass("sf-hidden");o.onHide.call($ul);return this},showSuperfishUl:function(){var o=sf.op,sh=sf.c.shadowClass+"-off",$ul=this.addClass(o.hoverClass).find(">ul.sf-hidden").hide().removeClass("sf-hidden");
sf.IE7fix.call($ul);o.onBeforeShow.call($ul);$ul.animate(o.animation,o.speed,function(){sf.IE7fix.call($ul);o.onShow.call($ul)});return this}})})(jQuery);;
(function($){$.fn.supersubs=function(options){var opts=$.extend({},$.fn.supersubs.defaults,options);return this.each(function(){var $$=$(this);var o=$.meta?$.extend({},opts,$$.data()):opts;var fontsize=$('<li id="menu-fontsize">&#8212;</li>').css({"padding":0,"position":"absolute","top":"-99999em","width":"auto"}).appendTo($$).width();$("#menu-fontsize").remove();if($$.hasClass("sf-navbar"))$$=$("li > ul",$$);$ULs=$$.find("ul:not(.sf-megamenu)");$ULs.each(function(i){var $ul=$ULs.eq(i);var $LIs=$ul.children();
var $As=$LIs.children("a");var liFloat=$LIs.css("white-space","nowrap").css("float");var emWidth=$ul.add($LIs).add($As).css({"float":"none","width":"auto"}).end().end()[0].clientWidth/fontsize;emWidth+=o.extraWidth;if(emWidth>o.maxWidth)emWidth=o.maxWidth;else if(emWidth<o.minWidth)emWidth=o.minWidth;emWidth+="em";$ul.css("width",emWidth);$LIs.css({"float":liFloat,"width":"100%","white-space":"normal"}).each(function(){var $childUl=$(">ul",this);var offsetDirection=$childUl.css("left")!==undefined?
"left":"right";$childUl.css(offsetDirection,emWidth)})})})};$.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);;
(function($){Drupal.behaviors.superfish={attach:function(context,settings){$.each(settings.superfish||{},function(index,options){$("#superfish-"+options.id,context).once("superfish",function(){var list=$(this);if(options.plugins||false)if(options.plugins.supersubs||false)list.supersubs(options.plugins.supersubs);list.superfish(options.sf);if(options.plugins||false){if(options.plugins.touchscreen||false)list.sftouchscreen(options.plugins.touchscreen);if(options.plugins.smallscreen||false)list.sfsmallscreen(options.plugins.smallscreen);
if(options.plugins.supposition||false)list.supposition();if(options.plugins.bgiframe||false)list.find("ul").bgIframe({opacity:false})}})})}}})(jQuery);;
