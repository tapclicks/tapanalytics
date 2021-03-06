(function($,undefined){$.ui=$.ui||{};if($.ui.version)return;$.extend($.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});$.fn.extend({_focus:$.fn.focus,
focus:function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn)fn.call(elem)},delay)}):this._focus.apply(this,arguments)},scrollParent:function(){var scrollParent;if($.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position")))scrollParent=this.parents().filter(function(){return/(relative|absolute|fixed)/.test($.curCSS(this,"position",1))&&/(auto|scroll)/.test($.curCSS(this,"overflow",
1)+$.curCSS(this,"overflow-y",1)+$.curCSS(this,"overflow-x",1))}).eq(0);else scrollParent=this.parents().filter(function(){return/(auto|scroll)/.test($.curCSS(this,"overflow",1)+$.curCSS(this,"overflow-y",1)+$.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!scrollParent.length?$(document):scrollParent},zIndex:function(zIndex){if(zIndex!==undefined)return this.css("zIndex",zIndex);if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=
elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0)return value}elem=elem.parent()}}return 0},disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left",
"Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.curCSS(elem,"padding"+this,true))||0;if(border)size-=parseFloat($.curCSS(elem,"border"+this+"Width",true))||0;if(margin)size-=parseFloat($.curCSS(elem,"margin"+this,true))||0});return size}$.fn["inner"+name]=function(size){if(size===undefined)return orig["inner"+
name].call(this);return this.each(function(){$(this).css(type,reduce(this,size)+"px")})};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number")return orig["outer"+name].call(this,size);return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px")})}});function visible(element){return!$(element).parents().andSelf().filter(function(){return $.curCSS(this,"visibility")==="hidden"||$.expr.filters.hidden(this)}).length}$.extend($.expr[":"],{data:function(elem,i,match){return!!$.data(elem,
match[3])},focusable:function(element){var nodeName=element.nodeName.toLowerCase(),tabIndex=$.attr(element,"tabindex");if("area"===nodeName){var map=element.parentNode,mapName=map.name,img;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map")return false;img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img)}return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"==nodeName?element.href||!isNaN(tabIndex):!isNaN(tabIndex))&&visible(element)},tabbable:function(element){var tabIndex=
$.attr(element,"tabindex");return(isNaN(tabIndex)||tabIndex>=0)&&$(element).is(":focusable")}});$(function(){var body=document.body,div=body.appendChild(div=document.createElement("div"));$.extend(div.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});$.support.minHeight=div.offsetHeight===100;$.support.selectstart="onselectstart"in div;body.removeChild(div).style.display="none"});$.extend($.ui,{plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=
proto.plugins[i]||[];proto.plugins[i].push([option,set[i]])}},call:function(instance,name,args){var set=instance.plugins[name];if(!set||!instance.element[0].parentNode)return;for(var i=0;i<set.length;i++)if(instance.options[set[i][0]])set[i][1].apply(instance.element,args)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(el,a){if($(el).css("overflow")==="hidden")return false;var scroll=a&&a==="left"?"scrollLeft":
"scrollTop",has=false;if(el[scroll]>0)return true;el[scroll]=1;has=el[scroll]>0;el[scroll]=0;return has},isOverAxis:function(x,reference,size){return x>reference&&x<reference+size},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width)}})})(jQuery);;
(function($,undefined){if($.cleanData){var _cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++)$(elem).triggerHandler("remove");_cleanData(elems)}}else{var _remove=$.fn.remove;$.fn.remove=function(selector,keepData){return this.each(function(){if(!keepData)if(!selector||$.filter(selector,[this]).length)$("*",this).add([this]).each(function(){$(this).triggerHandler("remove")});return _remove.call($(this),selector,keepData)})}}$.widget=function(name,base,prototype){var namespace=
name.split(".")[0],fullName;name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget}$.expr[":"][fullName]=function(elem){return!!$.data(elem,name)};$[namespace]=$[namespace]||{};$[namespace][name]=function(options,element){if(arguments.length)this._createWidget(options,element)};var basePrototype=new base;basePrototype.options=$.extend(true,{},basePrototype.options);$[namespace][name].prototype=$.extend(true,basePrototype,{namespace:namespace,widgetName:name,
widgetEventPrefix:$[namespace][name].prototype.widgetEventPrefix||name,widgetBaseClass:fullName},prototype);$.widget.bridge(name,$[namespace][name])};$.widget.bridge=function(name,object){$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=Array.prototype.slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.extend.apply(null,[true,options].concat(args)):options;if(isMethodCall&&options.charAt(0)==="_")return returnValue;if(isMethodCall)this.each(function(){var instance=
$.data(this,name),methodValue=instance&&$.isFunction(instance[options])?instance[options].apply(instance,args):instance;if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue;return false}});else this.each(function(){var instance=$.data(this,name);if(instance)instance.option(options||{})._init();else $.data(this,name,new object(options,this))});return returnValue}};$.Widget=function(options,element){if(arguments.length)this._createWidget(options,element)};$.Widget.prototype={widgetName:"widget",
widgetEventPrefix:"",options:{disabled:false},_createWidget:function(options,element){$.data(element,this.widgetName,this);this.element=$(element);this.options=$.extend(true,{},this.options,this._getCreateOptions(),options);var self=this;this.element.bind("remove."+this.widgetName,function(){self.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return $.metadata&&$.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},
destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(key,value){var options=key;if(arguments.length===0)return $.extend({},this.options);if(typeof key==="string"){if(value===undefined)return this.options[key];options={};options[key]=value}this._setOptions(options);return this},
_setOptions:function(options){var self=this;$.each(options,function(key,value){self._setOption(key,value)});return this},_setOption:function(key,value){this.options[key]=value;if(key==="disabled")this.widget()[value?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",value);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(type,event,data){var callback=
this.options[type];event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();data=data||{};if(event.originalEvent)for(var i=$.event.props.length,prop;i;){prop=$.event.props[--i];event[prop]=event.originalEvent[prop]}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented())}}})(jQuery);;
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
(function($){$.fn.ajaxSubmit=function(options){if(!this.length){log("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof options=="function")options={success:options};var action=this.attr("action");var url=typeof action==="string"?$.trim(action):"";if(url)url=(url.match(/^([^#]+)/)||[])[1];url=url||window.location.href||"";options=$.extend(true,{url:url,success:$.ajaxSettings.success,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||
"")?"javascript:false":"about:blank"},options);var veto={};this.trigger("form-pre-serialize",[this,options,veto]);if(veto.veto){log("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){log("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var n,v,a=this.formToArray(options.semantic);if(options.data){options.extraData=options.data;for(n in options.data)if(options.data[n]instanceof Array)for(var k in options.data[n])a.push({name:n,
value:options.data[n][k]});else{v=options.data[n];v=$.isFunction(v)?v():v;a.push({name:n,value:v})}}if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){log("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[a,this,options,veto]);if(veto.veto){log("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var q=$.param(a);if(options.type.toUpperCase()=="GET"){options.url+=(options.url.indexOf("?")>=0?"&":"?")+q;
options.data=null}else options.data=q;var $form=this,callbacks=[];if(options.resetForm)callbacks.push(function(){$form.resetForm()});if(options.clearForm)callbacks.push(function(){$form.clearForm()});if(!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(data){var fn=options.replaceTarget?"replaceWith":"html";$(options.target)[fn](data).each(oldSuccess,arguments)})}else if(options.success)callbacks.push(options.success);options.success=function(data,
status,xhr){var context=options.context||options;for(var i=0,max=callbacks.length;i<max;i++)callbacks[i].apply(context,[data,status,xhr||$form,$form])};var fileInputs=$("input:file",this).length>0;var mp="multipart/form-data";var multipart=$form.attr("enctype")==mp||$form.attr("encoding")==mp;if(options.iframe!==false&&(fileInputs||options.iframe||multipart))if(options.closeKeepAlive)$.get(options.closeKeepAlive,fileUpload);else fileUpload();else $.ajax(options);this.trigger("form-submit-notify",
[this,options]);return this;function fileUpload(){var form=$form[0];if($(":input[name=submit],:input[id=submit]",form).length){alert('Error: Form elements must not have name or id of "submit".');return}var s=$.extend(true,{},$.ajaxSettings,options);s.context=s.context||s;var id="jqFormIO"+(new Date).getTime(),fn="_"+id;var $io=$('<iframe id="'+id+'" name="'+id+'" src="'+s.iframeSrc+'" />');var io=$io[0];$io.css({position:"absolute",top:"-1000px",left:"-1000px"});var xhr={aborted:0,responseText:null,
responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){log("aborting upload...");var e="aborted";this.aborted=1;$io.attr("src",s.iframeSrc);xhr.error=e;s.error&&s.error.call(s.context,xhr,"error",e);g&&$.event.trigger("ajaxError",[xhr,s,e]);s.complete&&s.complete.call(s.context,xhr,"error")}};var g=s.global;if(g&&!$.active++)$.event.trigger("ajaxStart");if(g)$.event.trigger("ajaxSend",[xhr,s]);if(s.beforeSend&&
s.beforeSend.call(s.context,xhr,s)===false){if(s.global)$.active--;return}if(xhr.aborted)return;var timedOut=0;var sub=form.clk;if(sub){var n=sub.name;if(n&&!sub.disabled){s.extraData=s.extraData||{};s.extraData[n]=sub.value;if(sub.type=="image"){s.extraData[n+".x"]=form.clk_x;s.extraData[n+".y"]=form.clk_y}}}function doSubmit(){var t=$form.attr("target"),a=$form.attr("action");form.setAttribute("target",id);if(form.getAttribute("method")!="POST")form.setAttribute("method","POST");if(form.getAttribute("action")!=
s.url)form.setAttribute("action",s.url);if(!s.skipEncodingOverride)$form.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});if(s.timeout)setTimeout(function(){timedOut=true;cb()},s.timeout);var extraInputs=[];try{if(s.extraData)for(var n in s.extraData)extraInputs.push($('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />').appendTo(form)[0]);$io.appendTo("body");io.attachEvent?io.attachEvent("onload",cb):io.addEventListener("load",cb,false);form.submit()}finally{form.setAttribute("action",
a);if(t)form.setAttribute("target",t);else $form.removeAttr("target");$(extraInputs).remove()}}if(s.forceSync)doSubmit();else setTimeout(doSubmit,10);var data,doc,domCheckCount=50;function cb(){if(xhr.aborted)return;var doc=io.contentWindow?io.contentWindow.document:io.contentDocument?io.contentDocument:io.document;if(!doc||doc.location.href==s.iframeSrc)if(!timedOut)return;io.detachEvent?io.detachEvent("onload",cb):io.removeEventListener("load",cb,false);var ok=true;try{if(timedOut)throw"timeout";
var isXml=s.dataType=="xml"||doc.XMLDocument||$.isXMLDoc(doc);log("isXml="+isXml);if(!isXml&&window.opera&&(doc.body==null||doc.body.innerHTML==""))if(--domCheckCount){log("requeing onLoad callback, DOM not available");setTimeout(cb,250);return}xhr.responseText=doc.body?doc.body.innerHTML:doc.documentElement?doc.documentElement.innerHTML:null;xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;xhr.getResponseHeader=function(header){var headers={"content-type":s.dataType};return headers[header]};var scr=
/(json|script)/.test(s.dataType);if(scr||s.textarea){var ta=doc.getElementsByTagName("textarea")[0];if(ta)xhr.responseText=ta.value;else if(scr){var pre=doc.getElementsByTagName("pre")[0];var b=doc.getElementsByTagName("body")[0];if(pre)xhr.responseText=pre.textContent;else if(b)xhr.responseText=b.innerHTML}}else if(s.dataType=="xml"&&!xhr.responseXML&&xhr.responseText!=null)xhr.responseXML=toXml(xhr.responseText);data=httpData(xhr,s.dataType,s)}catch(e){log("error caught:",e);ok=false;xhr.error=
e;s.error&&s.error.call(s.context,xhr,"error",e);g&&$.event.trigger("ajaxError",[xhr,s,e])}if(xhr.aborted){log("upload aborted");ok=false}if(ok){s.success&&s.success.call(s.context,data,"success",xhr);g&&$.event.trigger("ajaxSuccess",[xhr,s])}g&&$.event.trigger("ajaxComplete",[xhr,s]);if(g&&!--$.active)$.event.trigger("ajaxStop");s.complete&&s.complete.call(s.context,xhr,ok?"success":"error");setTimeout(function(){$io.removeData("form-plugin-onload");$io.remove();xhr.responseXML=null},100)}var toXml=
$.parseXML||function(s,doc){if(window.ActiveXObject){doc=new ActiveXObject("Microsoft.XMLDOM");doc.async="false";doc.loadXML(s)}else doc=(new DOMParser).parseFromString(s,"text/xml");return doc&&doc.documentElement&&doc.documentElement.nodeName!="parsererror"?doc:null};var parseJSON=$.parseJSON||function(s){return window["eval"]("("+s+")")};var httpData=function(xhr,type,s){var ct=xhr.getResponseHeader("content-type")||"",xml=type==="xml"||!type&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==="parsererror")$.error&&$.error("parsererror");if(s&&s.dataFilter)data=s.dataFilter(data,type);if(typeof data==="string")if(type==="json"||!type&&ct.indexOf("json")>=0)data=parseJSON(data);else if(type==="script"||!type&&ct.indexOf("javascript")>=0)$.globalEval(data);return data}}};$.fn.ajaxForm=function(options){if(this.length===0){var o={s:this.selector,c:this.context};if(!$.isReady&&o.s){log("DOM not ready, queuing ajaxForm");$(function(){$(o.s,o.c).ajaxForm(options)});
return this}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(e){if(!e.isDefaultPrevented()){e.preventDefault();$(this).ajaxSubmit(options)}}).bind("click.form-plugin",function(e){var target=e.target;var $el=$(target);if(!$el.is(":submit,input:image")){var t=$el.closest(":submit");if(t.length==0)return;target=t[0]}var form=this;form.clk=target;if(target.type=="image")if(e.offsetX!=undefined){form.clk_x=
e.offsetX;form.clk_y=e.offsetY}else if(typeof $.fn.offset=="function"){var offset=$el.offset();form.clk_x=e.pageX-offset.left;form.clk_y=e.pageY-offset.top}else{form.clk_x=e.pageX-target.offsetLeft;form.clk_y=e.pageY-target.offsetTop}setTimeout(function(){form.clk=form.clk_x=form.clk_y=null},100)})};$.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};$.fn.formToArray=function(semantic){var a=[];if(this.length===0)return a;var form=this[0];var els=semantic?form.getElementsByTagName("*"):
form.elements;if(!els)return a;var i,j,n,v,el,max,jmax;for(i=0,max=els.length;i<max;i++){el=els[i];n=el.name;if(!n)continue;if(semantic&&form.clk&&el.type=="image"){if(!el.disabled&&form.clk==el){a.push({name:n,value:$(el).val()});a.push({name:n+".x",value:form.clk_x},{name:n+".y",value:form.clk_y})}continue}v=$.fieldValue(el,true);if(v&&v.constructor==Array)for(j=0,jmax=v.length;j<jmax;j++)a.push({name:n,value:v[j]});else if(v!==null&&typeof v!="undefined")a.push({name:n,value:v})}if(!semantic&&
form.clk){var $input=$(form.clk),input=$input[0];n=input.name;if(n&&!input.disabled&&input.type=="image"){a.push({name:n,value:$input.val()});a.push({name:n+".x",value:form.clk_x},{name:n+".y",value:form.clk_y})}}return a};$.fn.formSerialize=function(semantic){return $.param(this.formToArray(semantic))};$.fn.fieldSerialize=function(successful){var a=[];this.each(function(){var n=this.name;if(!n)return;var v=$.fieldValue(this,successful);if(v&&v.constructor==Array)for(var i=0,max=v.length;i<max;i++)a.push({name:n,
value:v[i]});else if(v!==null&&typeof v!="undefined")a.push({name:this.name,value:v})});return $.param(a)};$.fn.fieldValue=function(successful){for(var val=[],i=0,max=this.length;i<max;i++){var el=this[i];var v=$.fieldValue(el,successful);if(v===null||typeof v=="undefined"||v.constructor==Array&&!v.length)continue;v.constructor==Array?$.merge(val,v):val.push(v)}return val};$.fieldValue=function(el,successful){var n=el.name,t=el.type,tag=el.tagName.toLowerCase();if(successful===undefined)successful=
true;if(successful&&(!n||el.disabled||t=="reset"||t=="button"||(t=="checkbox"||t=="radio")&&!el.checked||(t=="submit"||t=="image")&&el.form&&el.form.clk!=el||tag=="select"&&el.selectedIndex==-1))return null;if(tag=="select"){var index=el.selectedIndex;if(index<0)return null;var a=[],ops=el.options;var one=t=="select-one";var max=one?index+1:ops.length;for(var i=one?index:0;i<max;i++){var op=ops[i];if(op.selected){var v=op.value;if(!v)v=op.attributes&&op.attributes["value"]&&!op.attributes["value"].specified?
op.text:op.value;if(one)return v;a.push(v)}}return a}return $(el).val()};$.fn.clearForm=function(){return this.each(function(){$("input,select,textarea",this).clearFields()})};$.fn.clearFields=$.fn.clearInputs=function(){return this.each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(t=="text"||t=="password"||tag=="textarea")this.value="";else if(t=="checkbox"||t=="radio")this.checked=false;else if(tag=="select")this.selectedIndex=-1})};$.fn.resetForm=function(){return this.each(function(){if(typeof this.reset==
"function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};$.fn.enable=function(b){if(b===undefined)b=true;return this.each(function(){this.disabled=!b})};$.fn.selected=function(select){if(select===undefined)select=true;return this.each(function(){var t=this.type;if(t=="checkbox"||t=="radio")this.checked=select;else if(this.tagName.toLowerCase()=="option"){var $sel=$(this).parent("select");if(select&&$sel[0]&&$sel[0].type=="select-one")$sel.find("option").selected(false);this.selected=
select}})};function log(){if($.fn.ajaxSubmit.debug){var msg="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(msg);else if(window.opera&&window.opera.postError)window.opera.postError(msg)}}})(jQuery);;
/*
 * jQuery UI Tabs 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var tabId = 0,
	listId = 0;

function getNextTabId() {
	return ++tabId;
}

function getNextListId() {
	return ++listId;
}

$.widget( "ui.tabs", {
	options: {
		add: null,
		ajaxOptions: null,
		cache: false,
		cookie: null, // e.g. { expires: 7, path: '/', domain: 'jquery.com', secure: true }
		collapsible: false,
		disable: null,
		disabled: [],
		enable: null,
		event: "click",
		fx: null, // e.g. { height: 'toggle', opacity: 'toggle', duration: 200 }
		idPrefix: "ui-tabs-",
		load: null,
		panelTemplate: "<div></div>",
		remove: null,
		select: null,
		show: null,
		spinner: "<em>Loading&#8230;</em>",
		tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
	},

	_create: function() {
		this._tabify( true );
	},

	_setOption: function( key, value ) {
		if ( key == "selected" ) {
			if (this.options.collapsible && value == this.options.selected ) {
				return;
			}
			this.select( value );
		} else {
			this.options[ key ] = value;
			this._tabify();
		}
	},

	_tabId: function( a ) {
		return a.title && a.title.replace( /\s/g, "_" ).replace( /[^\w\u00c0-\uFFFF-]/g, "" ) ||
			this.options.idPrefix + getNextTabId();
	},

	_sanitizeSelector: function( hash ) {
		// we need this because an id may contain a ":"
		return hash.replace( /:/g, "\\:" );
	},

	_cookie: function() {
		var cookie = this.cookie ||
			( this.cookie = this.options.cookie.name || "ui-tabs-" + getNextListId() );
		return $.cookie.apply( null, [ cookie ].concat( $.makeArray( arguments ) ) );
	},

	_ui: function( tab, panel ) {
		return {
			tab: tab,
			panel: panel,
			index: this.anchors.index( tab )
		};
	},

	_cleanup: function() {
		// restore all former loading tabs labels
		this.lis.filter( ".ui-state-processing" )
			.removeClass( "ui-state-processing" )
			.find( "span:data(label.tabs)" )
				.each(function() {
					var el = $( this );
					el.html( el.data( "label.tabs" ) ).removeData( "label.tabs" );
				});
	},

	_tabify: function( init ) {
		var self = this,
			o = this.options,
			fragmentId = /^#.+/; // Safari 2 reports '#' for an empty hash

		this.list = this.element.find( "ol,ul" ).eq( 0 );
		this.lis = $( " > li:has(a[href])", this.list );
		this.anchors = this.lis.map(function() {
			return $( "a", this )[ 0 ];
		});
		this.panels = $( [] );

		this.anchors.each(function( i, a ) {
			var href = $( a ).attr( "href" );
			// For dynamically created HTML that contains a hash as href IE < 8 expands
			// such href to the full page url with hash and then misinterprets tab as ajax.
			// Same consideration applies for an added tab with a fragment identifier
			// since a[href=#fragment-identifier] does unexpectedly not match.
			// Thus normalize href attribute...
			var hrefBase = href.split( "#" )[ 0 ],
				baseEl;
			if ( hrefBase && ( hrefBase === location.toString().split( "#" )[ 0 ] ||
					( baseEl = $( "base" )[ 0 ]) && hrefBase === baseEl.href ) ) {
				href = a.hash;
				a.href = href;
			}

			// inline tab
			if ( fragmentId.test( href ) ) {
				self.panels = self.panels.add( self.element.find( self._sanitizeSelector( href ) ) );
			// remote tab
			// prevent loading the page itself if href is just "#"
			} else if ( href && href !== "#" ) {
				// required for restore on destroy
				$.data( a, "href.tabs", href );

				// TODO until #3808 is fixed strip fragment identifier from url
				// (IE fails to load from such url)
				$.data( a, "load.tabs", href.replace( /#.*$/, "" ) );

				var id = self._tabId( a );
				a.href = "#" + id;
				var $panel = self.element.find( "#" + id );
				if ( !$panel.length ) {
					$panel = $( o.panelTemplate )
						.attr( "id", id )
						.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
						.insertAfter( self.panels[ i - 1 ] || self.list );
					$panel.data( "destroy.tabs", true );
				}
				self.panels = self.panels.add( $panel );
			// invalid tab href
			} else {
				o.disabled.push( i );
			}
		});

		// initialization from scratch
		if ( init ) {
			// attach necessary classes for styling
			this.element.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" );
			this.list.addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" );
			this.lis.addClass( "ui-state-default ui-corner-top" );
			this.panels.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" );

			// Selected tab
			// use "selected" option or try to retrieve:
			// 1. from fragment identifier in url
			// 2. from cookie
			// 3. from selected class attribute on <li>
			if ( o.selected === undefined ) {
				if ( location.hash ) {
					this.anchors.each(function( i, a ) {
						if ( a.hash == location.hash ) {
							o.selected = i;
							return false;
						}
					});
				}
				if ( typeof o.selected !== "number" && o.cookie ) {
					o.selected = parseInt( self._cookie(), 10 );
				}
				if ( typeof o.selected !== "number" && this.lis.filter( ".ui-tabs-selected" ).length ) {
					o.selected = this.lis.index( this.lis.filter( ".ui-tabs-selected" ) );
				}
				o.selected = o.selected || ( this.lis.length ? 0 : -1 );
			} else if ( o.selected === null ) { // usage of null is deprecated, TODO remove in next release
				o.selected = -1;
			}

			// sanity check - default to first tab...
			o.selected = ( ( o.selected >= 0 && this.anchors[ o.selected ] ) || o.selected < 0 )
				? o.selected
				: 0;

			// Take disabling tabs via class attribute from HTML
			// into account and update option properly.
			// A selected tab cannot become disabled.
			o.disabled = $.unique( o.disabled.concat(
				$.map( this.lis.filter( ".ui-state-disabled" ), function( n, i ) {
					return self.lis.index( n );
				})
			) ).sort();

			if ( $.inArray( o.selected, o.disabled ) != -1 ) {
				o.disabled.splice( $.inArray( o.selected, o.disabled ), 1 );
			}

			// highlight selected tab
			this.panels.addClass( "ui-tabs-hide" );
			this.lis.removeClass( "ui-tabs-selected ui-state-active" );
			// check for length avoids error when initializing empty list
			if ( o.selected >= 0 && this.anchors.length ) {
				self.element.find( self._sanitizeSelector( self.anchors[ o.selected ].hash ) ).removeClass( "ui-tabs-hide" );
				this.lis.eq( o.selected ).addClass( "ui-tabs-selected ui-state-active" );

				// seems to be expected behavior that the show callback is fired
				self.element.queue( "tabs", function() {
					self._trigger( "show", null,
						self._ui( self.anchors[ o.selected ], self.element.find( self._sanitizeSelector( self.anchors[ o.selected ].hash ) )[ 0 ] ) );
				});

				this.load( o.selected );
			}

			// clean up to avoid memory leaks in certain versions of IE 6
			// TODO: namespace this event
			$( window ).bind( "unload", function() {
				self.lis.add( self.anchors ).unbind( ".tabs" );
				self.lis = self.anchors = self.panels = null;
			});
		// update selected after add/remove
		} else {
			o.selected = this.lis.index( this.lis.filter( ".ui-tabs-selected" ) );
		}

		// update collapsible
		// TODO: use .toggleClass()
		this.element[ o.collapsible ? "addClass" : "removeClass" ]( "ui-tabs-collapsible" );

		// set or update cookie after init and add/remove respectively
		if ( o.cookie ) {
			this._cookie( o.selected, o.cookie );
		}

		// disable tabs
		for ( var i = 0, li; ( li = this.lis[ i ] ); i++ ) {
			$( li )[ $.inArray( i, o.disabled ) != -1 &&
				// TODO: use .toggleClass()
				!$( li ).hasClass( "ui-tabs-selected" ) ? "addClass" : "removeClass" ]( "ui-state-disabled" );
		}

		// reset cache if switching from cached to not cached
		if ( o.cache === false ) {
			this.anchors.removeData( "cache.tabs" );
		}

		// remove all handlers before, tabify may run on existing tabs after add or option change
		this.lis.add( this.anchors ).unbind( ".tabs" );

		if ( o.event !== "mouseover" ) {
			var addState = function( state, el ) {
				if ( el.is( ":not(.ui-state-disabled)" ) ) {
					el.addClass( "ui-state-" + state );
				}
			};
			var removeState = function( state, el ) {
				el.removeClass( "ui-state-" + state );
			};
			this.lis.bind( "mouseover.tabs" , function() {
				addState( "hover", $( this ) );
			});
			this.lis.bind( "mouseout.tabs", function() {
				removeState( "hover", $( this ) );
			});
			this.anchors.bind( "focus.tabs", function() {
				addState( "focus", $( this ).closest( "li" ) );
			});
			this.anchors.bind( "blur.tabs", function() {
				removeState( "focus", $( this ).closest( "li" ) );
			});
		}

		// set up animations
		var hideFx, showFx;
		if ( o.fx ) {
			if ( $.isArray( o.fx ) ) {
				hideFx = o.fx[ 0 ];
				showFx = o.fx[ 1 ];
			} else {
				hideFx = showFx = o.fx;
			}
		}

		// Reset certain styles left over from animation
		// and prevent IE's ClearType bug...
		function resetStyle( $el, fx ) {
			$el.css( "display", "" );
			if ( !$.support.opacity && fx.opacity ) {
				$el[ 0 ].style.removeAttribute( "filter" );
			}
		}

		// Show a tab...
		var showTab = showFx
			? function( clicked, $show ) {
				$( clicked ).closest( "li" ).addClass( "ui-tabs-selected ui-state-active" );
				$show.hide().removeClass( "ui-tabs-hide" ) // avoid flicker that way
					.animate( showFx, showFx.duration || "normal", function() {
						resetStyle( $show, showFx );
						self._trigger( "show", null, self._ui( clicked, $show[ 0 ] ) );
					});
			}
			: function( clicked, $show ) {
				$( clicked ).closest( "li" ).addClass( "ui-tabs-selected ui-state-active" );
				$show.removeClass( "ui-tabs-hide" );
				self._trigger( "show", null, self._ui( clicked, $show[ 0 ] ) );
			};

		// Hide a tab, $show is optional...
		var hideTab = hideFx
			? function( clicked, $hide ) {
				$hide.animate( hideFx, hideFx.duration || "normal", function() {
					self.lis.removeClass( "ui-tabs-selected ui-state-active" );
					$hide.addClass( "ui-tabs-hide" );
					resetStyle( $hide, hideFx );
					self.element.dequeue( "tabs" );
				});
			}
			: function( clicked, $hide, $show ) {
				self.lis.removeClass( "ui-tabs-selected ui-state-active" );
				$hide.addClass( "ui-tabs-hide" );
				self.element.dequeue( "tabs" );
			};

		// attach tab event handler, unbind to avoid duplicates from former tabifying...
		this.anchors.bind( o.event + ".tabs", function() {
			var el = this,
				$li = $(el).closest( "li" ),
				$hide = self.panels.filter( ":not(.ui-tabs-hide)" ),
				$show = self.element.find( self._sanitizeSelector( el.hash ) );

			// If tab is already selected and not collapsible or tab disabled or
			// or is already loading or click callback returns false stop here.
			// Check if click handler returns false last so that it is not executed
			// for a disabled or loading tab!
			if ( ( $li.hasClass( "ui-tabs-selected" ) && !o.collapsible) ||
				$li.hasClass( "ui-state-disabled" ) ||
				$li.hasClass( "ui-state-processing" ) ||
				self.panels.filter( ":animated" ).length ||
				self._trigger( "select", null, self._ui( this, $show[ 0 ] ) ) === false ) {
				this.blur();
				return false;
			}

			o.selected = self.anchors.index( this );

			self.abort();

			// if tab may be closed
			if ( o.collapsible ) {
				if ( $li.hasClass( "ui-tabs-selected" ) ) {
					o.selected = -1;

					if ( o.cookie ) {
						self._cookie( o.selected, o.cookie );
					}

					self.element.queue( "tabs", function() {
						hideTab( el, $hide );
					}).dequeue( "tabs" );

					this.blur();
					return false;
				} else if ( !$hide.length ) {
					if ( o.cookie ) {
						self._cookie( o.selected, o.cookie );
					}

					self.element.queue( "tabs", function() {
						showTab( el, $show );
					});

					// TODO make passing in node possible, see also http://dev.jqueryui.com/ticket/3171
					self.load( self.anchors.index( this ) );

					this.blur();
					return false;
				}
			}

			if ( o.cookie ) {
				self._cookie( o.selected, o.cookie );
			}

			// show new tab
			if ( $show.length ) {
				if ( $hide.length ) {
					self.element.queue( "tabs", function() {
						hideTab( el, $hide );
					});
				}
				self.element.queue( "tabs", function() {
					showTab( el, $show );
				});

				self.load( self.anchors.index( this ) );
			} else {
				throw "jQuery UI Tabs: Mismatching fragment identifier.";
			}

			// Prevent IE from keeping other link focussed when using the back button
			// and remove dotted border from clicked link. This is controlled via CSS
			// in modern browsers; blur() removes focus from address bar in Firefox
			// which can become a usability and annoying problem with tabs('rotate').
			if ( $.browser.msie ) {
				this.blur();
			}
		});

		// disable click in any case
		this.anchors.bind( "click.tabs", function(){
			return false;
		});
	},

    _getIndex: function( index ) {
		// meta-function to give users option to provide a href string instead of a numerical index.
		// also sanitizes numerical indexes to valid values.
		if ( typeof index == "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$=" + index + "]" ) );
		}

		return index;
	},

	destroy: function() {
		var o = this.options;

		this.abort();

		this.element
			.unbind( ".tabs" )
			.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" )
			.removeData( "tabs" );

		this.list.removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" );

		this.anchors.each(function() {
			var href = $.data( this, "href.tabs" );
			if ( href ) {
				this.href = href;
			}
			var $this = $( this ).unbind( ".tabs" );
			$.each( [ "href", "load", "cache" ], function( i, prefix ) {
				$this.removeData( prefix + ".tabs" );
			});
		});

		this.lis.unbind( ".tabs" ).add( this.panels ).each(function() {
			if ( $.data( this, "destroy.tabs" ) ) {
				$( this ).remove();
			} else {
				$( this ).removeClass([
					"ui-state-default",
					"ui-corner-top",
					"ui-tabs-selected",
					"ui-state-active",
					"ui-state-hover",
					"ui-state-focus",
					"ui-state-disabled",
					"ui-tabs-panel",
					"ui-widget-content",
					"ui-corner-bottom",
					"ui-tabs-hide"
				].join( " " ) );
			}
		});

		if ( o.cookie ) {
			this._cookie( null, o.cookie );
		}

		return this;
	},

	add: function( url, label, index ) {
		if ( index === undefined ) {
			index = this.anchors.length;
		}

		var self = this,
			o = this.options,
			$li = $( o.tabTemplate.replace( /#\{href\}/g, url ).replace( /#\{label\}/g, label ) ),
			id = !url.indexOf( "#" ) ? url.replace( "#", "" ) : this._tabId( $( "a", $li )[ 0 ] );

		$li.addClass( "ui-state-default ui-corner-top" ).data( "destroy.tabs", true );

		// try to find an existing element before creating a new one
		var $panel = self.element.find( "#" + id );
		if ( !$panel.length ) {
			$panel = $( o.panelTemplate )
				.attr( "id", id )
				.data( "destroy.tabs", true );
		}
		$panel.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide" );

		if ( index >= this.lis.length ) {
			$li.appendTo( this.list );
			$panel.appendTo( this.list[ 0 ].parentNode );
		} else {
			$li.insertBefore( this.lis[ index ] );
			$panel.insertBefore( this.panels[ index ] );
		}

		o.disabled = $.map( o.disabled, function( n, i ) {
			return n >= index ? ++n : n;
		});

		this._tabify();

		if ( this.anchors.length == 1 ) {
			o.selected = 0;
			$li.addClass( "ui-tabs-selected ui-state-active" );
			$panel.removeClass( "ui-tabs-hide" );
			this.element.queue( "tabs", function() {
				self._trigger( "show", null, self._ui( self.anchors[ 0 ], self.panels[ 0 ] ) );
			});

			this.load( 0 );
		}

		this._trigger( "add", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
		return this;
	},

	remove: function( index ) {
		index = this._getIndex( index );
		var o = this.options,
			$li = this.lis.eq( index ).remove(),
			$panel = this.panels.eq( index ).remove();

		// If selected tab was removed focus tab to the right or
		// in case the last tab was removed the tab to the left.
		if ( $li.hasClass( "ui-tabs-selected" ) && this.anchors.length > 1) {
			this.select( index + ( index + 1 < this.anchors.length ? 1 : -1 ) );
		}

		o.disabled = $.map(
			$.grep( o.disabled, function(n, i) {
				return n != index;
			}),
			function( n, i ) {
				return n >= index ? --n : n;
			});

		this._tabify();

		this._trigger( "remove", null, this._ui( $li.find( "a" )[ 0 ], $panel[ 0 ] ) );
		return this;
	},

	enable: function( index ) {
		index = this._getIndex( index );
		var o = this.options;
		if ( $.inArray( index, o.disabled ) == -1 ) {
			return;
		}

		this.lis.eq( index ).removeClass( "ui-state-disabled" );
		o.disabled = $.grep( o.disabled, function( n, i ) {
			return n != index;
		});

		this._trigger( "enable", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
		return this;
	},

	disable: function( index ) {
		index = this._getIndex( index );
		var self = this, o = this.options;
		// cannot disable already selected tab
		if ( index != o.selected ) {
			this.lis.eq( index ).addClass( "ui-state-disabled" );

			o.disabled.push( index );
			o.disabled.sort();

			this._trigger( "disable", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
		}

		return this;
	},

	select: function( index ) {
		index = this._getIndex( index );
		if ( index == -1 ) {
			if ( this.options.collapsible && this.options.selected != -1 ) {
				index = this.options.selected;
			} else {
				return this;
			}
		}
		this.anchors.eq( index ).trigger( this.options.event + ".tabs" );
		return this;
	},

	load: function( index ) {
		index = this._getIndex( index );
		var self = this,
			o = this.options,
			a = this.anchors.eq( index )[ 0 ],
			url = $.data( a, "load.tabs" );

		this.abort();

		// not remote or from cache
		if ( !url || this.element.queue( "tabs" ).length !== 0 && $.data( a, "cache.tabs" ) ) {
			this.element.dequeue( "tabs" );
			return;
		}

		// load remote from here on
		this.lis.eq( index ).addClass( "ui-state-processing" );

		if ( o.spinner ) {
			var span = $( "span", a );
			span.data( "label.tabs", span.html() ).html( o.spinner );
		}

		this.xhr = $.ajax( $.extend( {}, o.ajaxOptions, {
			url: url,
			success: function( r, s ) {
				self.element.find( self._sanitizeSelector( a.hash ) ).html( r );

				// take care of tab labels
				self._cleanup();

				if ( o.cache ) {
					$.data( a, "cache.tabs", true );
				}

				self._trigger( "load", null, self._ui( self.anchors[ index ], self.panels[ index ] ) );
				try {
					o.ajaxOptions.success( r, s );
				}
				catch ( e ) {}
			},
			error: function( xhr, s, e ) {
				// take care of tab labels
				self._cleanup();

				self._trigger( "load", null, self._ui( self.anchors[ index ], self.panels[ index ] ) );
				try {
					// Passing index avoid a race condition when this method is
					// called after the user has selected another tab.
					// Pass the anchor that initiated this request allows
					// loadError to manipulate the tab content panel via $(a.hash)
					o.ajaxOptions.error( xhr, s, index, a );
				}
				catch ( e ) {}
			}
		} ) );

		// last, so that load event is fired before show...
		self.element.dequeue( "tabs" );

		return this;
	},

	abort: function() {
		// stop possibly running animations
		this.element.queue( [] );
		this.panels.stop( false, true );

		// "tabs" queue must not contain more than two elements,
		// which are the callbacks for the latest clicked tab...
		this.element.queue( "tabs", this.element.queue( "tabs" ).splice( -2, 2 ) );

		// terminate pending requests from other tabs
		if ( this.xhr ) {
			this.xhr.abort();
			delete this.xhr;
		}

		// take care of tab labels
		this._cleanup();
		return this;
	},

	url: function( index, url ) {
		this.anchors.eq( index ).removeData( "cache.tabs" ).data( "load.tabs", url );
		return this;
	},

	length: function() {
		return this.anchors.length;
	}
});

$.extend( $.ui.tabs, {
	version: "1.8.11"
});

/*
 * Tabs Extensions
 */

/*
 * Rotate
 */
$.extend( $.ui.tabs.prototype, {
	rotation: null,
	rotate: function( ms, continuing ) {
		var self = this,
			o = this.options;

		var rotate = self._rotate || ( self._rotate = function( e ) {
			clearTimeout( self.rotation );
			self.rotation = setTimeout(function() {
				var t = o.selected;
				self.select( ++t < self.anchors.length ? t : 0 );
			}, ms );
			
			if ( e ) {
				e.stopPropagation();
			}
		});

		var stop = self._unrotate || ( self._unrotate = !continuing
			? function(e) {
				if (e.clientX) { // in case of a true click
					self.rotate(null);
				}
			}
			: function( e ) {
				t = o.selected;
				rotate();
			});

		// start rotation
		if ( ms ) {
			this.element.bind( "tabsshow", rotate );
			this.anchors.bind( o.event + ".tabs", stop );
			rotate();
		// stop rotation
		} else {
			clearTimeout( self.rotation );
			this.element.unbind( "tabsshow", rotate );
			this.anchors.unbind( o.event + ".tabs", stop );
			delete this._rotate;
			delete this._unrotate;
		}

		return this;
	}
});

})( jQuery );
;
(function($,undefined){var lastActive,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(event){$(":ui-button",event.target.form).each(function(){var inst=$(this).data("button");setTimeout(function(){inst.refresh()},1)})},radioGroup=function(radio){var name=radio.name,
form=radio.form,radios=$([]);if(name)if(form)radios=$(form).find("[name='"+name+"']");else radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form});return radios};$.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",formResetHandler);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");
this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var self=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",hoverClass="ui-state-hover"+(!toggleButton?" ui-state-active":""),focusClass="ui-state-focus";if(options.label===null)options.label=this.buttonElement.html();if(this.element.is(":disabled"))options.disabled=true;this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter.button",function(){if(options.disabled)return;
$(this).addClass("ui-state-hover");if(this===lastActive)$(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(options.disabled)return;$(this).removeClass(hoverClass)}).bind("focus.button",function(){$(this).addClass(focusClass)}).bind("blur.button",function(){$(this).removeClass(focusClass)});if(toggleButton)this.element.bind("change.button",function(){self.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(options.disabled)return false;
$(this).toggleClass("ui-state-active");self.buttonElement.attr("aria-pressed",self.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(options.disabled)return false;$(this).addClass("ui-state-active");self.buttonElement.attr("aria-pressed",true);var radio=self.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",
function(){if(options.disabled)return false;$(this).addClass("ui-state-active");lastActive=this;$(document).one("mouseup",function(){lastActive=null})}).bind("mouseup.button",function(){if(options.disabled)return false;$(this).removeClass("ui-state-active")}).bind("keydown.button",function(event){if(options.disabled)return false;if(event.keyCode==$.ui.keyCode.SPACE||event.keyCode==$.ui.keyCode.ENTER)$(this).addClass("ui-state-active")}).bind("keyup.button",function(){$(this).removeClass("ui-state-active")});
if(this.buttonElement.is("a"))this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE)$(this).click()})}this._setOption("disabled",options.disabled)},_determineButtonType:function(){if(this.element.is(":checkbox"))this.type="checkbox";else if(this.element.is(":radio"))this.type="radio";else if(this.element.is("input"))this.type="input";else this.type="button";if(this.type==="checkbox"||this.type==="radio"){var ancestor=this.element.parents().filter(":last"),labelSelector="label[for="+
this.element.attr("id")+"]";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length)this.buttonElement=ancestor.find(labelSelector)}this.element.addClass("ui-helper-hidden-accessible");var checked=this.element.is(":checked");if(checked)this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",checked)}else this.buttonElement=
this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle)this.buttonElement.removeAttr("title");$.Widget.prototype.destroy.call(this)},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key===
"disabled")if(value)this.element.attr("disabled",true);else this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var isDisabled=this.element.is(":disabled");if(isDisabled!==this.options.disabled)this._setOption("disabled",isDisabled);if(this.type==="radio")radioGroup(this.element[0]).each(function(){if($(this).is(":checked"))$(this).button("widget").addClass("ui-state-active").attr("aria-pressed",true);else $(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",
false)});else if(this.type==="checkbox")if(this.element.is(":checked"))this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true);else this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input"){if(this.options.label)this.element.val(this.options.label);return}var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),
icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text)buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":icons.primary?"-primary":"-secondary"));if(icons.primary)buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");if(icons.secondary)buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");if(!this.options.text){buttonClasses.push(multipleIcons?
"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle)buttonElement.attr("title",buttonText)}}else buttonClasses.push("ui-button-text-only");buttonElement.addClass(buttonClasses.join(" "))}});$.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(key,value){if(key==="disabled")this.buttons.button("option",key,value);$.Widget.prototype._setOption.apply(this,
arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
$.Widget.prototype.destroy.call(this)}})})(jQuery);;
(function($,undefined){$.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var self=this;this.element.bind("mousedown."+this.widgetName,function(event){return self._mouseDown(event)}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,self.widgetName+".preventClickEvent")){$.removeData(event.target,self.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(event){event.originalEvent=event.originalEvent||{};if(event.originalEvent.mouseHandled)return;this._mouseStarted&&this._mouseUp(event);this._mouseDownEvent=event;var self=this,btnIsLeft=event.which==1,elIsCancel=typeof this.options.cancel=="string"?$(event.target).parents().add(event.target).filter(this.options.cancel).length:false;if(!btnIsLeft||elIsCancel||!this._mouseCapture(event))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=
setTimeout(function(){self.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(event)!==false;if(!this._mouseStarted){event.preventDefault();return true}}if(true===$.data(event.target,this.widgetName+".preventClickEvent"))$.removeData(event.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(event){return self._mouseMove(event)};this._mouseUpDelegate=function(event){return self._mouseUp(event)};
$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();event.originalEvent.mouseHandled=true;return true},_mouseMove:function(event){if($.browser.msie&&!(document.documentMode>=9)&&!event.button)return this._mouseUp(event);if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault()}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,
event)!==false;this._mouseStarted?this._mouseDrag(event):this._mouseUp(event)}return!this._mouseStarted},_mouseUp:function(event){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target==this._mouseDownEvent.target)$.data(event.target,this.widgetName+".preventClickEvent",true);this._mouseStop(event)}return false},_mouseDistanceMet:function(event){return Math.max(Math.abs(this._mouseDownEvent.pageX-
event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance},_mouseDelayMet:function(event){return this.mouseDelayMet},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true}})})(jQuery);;
(function($,undefined){$.widget("ui.draggable",$.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable"+" ui-draggable-dragging"+" ui-draggable-disabled");this._mouseDestroy();return this},_mouseCapture:function(event){var o=
this.options;if(this.helper||o.disabled||$(event.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(event);if(!this.handle)return false;return true},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this._cacheHelperProportions();if($.ui.ddmanager)$.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset=
{top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);if(o.containment)this._setContainment();if(this._trigger("start",event)===false){this._clear();
return false}this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour)$.ui.ddmanager.prepareOffsets(this,event);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(event,true);return true},_mouseDrag:function(event,noPropagation){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp({});return false}this.position=ui.position}if(!this.options.axis||
this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);return false},_mouseStop:function(event){var dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour)dropped=$.ui.ddmanager.drop(this,event);if(this.dropped){dropped=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;
if(this.options.revert=="invalid"&&!dropped||this.options.revert=="valid"&&dropped||this.options.revert===true||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped)){var self=this;$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(self._trigger("stop",event)!==false)self._clear()})}else if(this._trigger("stop",event)!==false)this._clear();return false},cancel:function(){if(this.helper.is(".ui-draggable-dragging"))this._mouseUp({});
else this._clear();return this},_getHandle:function(event){var handle=!this.options.handle||!$(this.options.handle,this.element).length?true:false;$(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==event.target)handle=true});return handle},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):o.helper=="clone"?this.element.clone():this.element;if(!helper.parents("body").length)helper.appendTo(o.appendTo==
"parent"?this.element[0].parentNode:o.appendTo);if(helper[0]!=this.element[0]&&!/(fixed|absolute)/.test(helper.css("position")))helper.css("position","absolute");return helper},_adjustOffsetFromHelper:function(obj){if(typeof obj=="string")obj=obj.split(" ");if($.isArray(obj))obj={left:+obj[0],top:+obj[1]||0};if("left"in obj)this.offset.click.left=obj.left+this.margins.left;if("right"in obj)this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;if("top"in obj)this.offset.click.top=
obj.top+this.margins.top;if("bottom"in obj)this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&
this.offsetParent[0].tagName.toLowerCase()=="html"&&$.browser.msie)po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,
left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var o=this.options;if(o.containment=="parent")o.containment=this.helper[0].parentNode;if(o.containment==
"document"||o.containment=="window")this.containment=[(o.containment=="document"?0:$(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(o.containment=="document"?0:$(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(o.containment=="document"?0:$(window).scrollLeft())+$(o.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(o.containment=="document"?0:$(window).scrollTop())+($(o.containment=="document"?document:window).height()||
document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(o.containment)&&o.containment.constructor!=Array){var ce=$(o.containment)[0];if(!ce)return;var co=$(o.containment).offset();var over=$(ce).css("overflow")!="hidden";this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0),co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0),
co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}else if(o.containment.constructor==Array)this.containment=
o.containment},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);return{top:pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-($.browser.safari&&$.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition==
"fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop())*mod),left:pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-($.browser.safari&&$.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod)}},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?
this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0])pageX=this.containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<this.containment[1])pageY=this.containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>this.containment[2])pageX=this.containment[2]+this.offset.click.left;
if(event.pageY-this.offset.click.top>this.containment[3])pageY=this.containment[3]+this.offset.click.top}if(o.grid){var top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?!(top-this.offset.click.top<this.containment[1]||top-this.offset.click.top>this.containment[3])?top:!(top-this.offset.click.top<this.containment[1])?top-o.grid[1]:top+o.grid[1]:top;var left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?
!(left-this.offset.click.left<this.containment[0]||left-this.offset.click.left>this.containment[2])?left:!(left-this.offset.click.left<this.containment[0])?left-o.grid[0]:left+o.grid[0]:left}}return{top:pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+($.browser.safari&&$.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop()),left:pageX-this.offset.click.left-this.offset.relative.left-
this.offset.parent.left+($.browser.safari&&$.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval)this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui]);if(type=="drag")this.positionAbs=
this._convertPositionTo("absolute");return $.Widget.prototype._trigger.call(this,type,event,ui)},plugins:{},_uiHash:function(event){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});$.extend($.ui.draggable,{version:"1.8.11"});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui){var inst=$(this).data("draggable"),o=inst.options,uiSortable=$.extend({},ui,{item:inst.element});inst.sortables=[];$(o.connectToSortable).each(function(){var sortable=
$.data(this,"sortable");if(sortable&&!sortable.options.disabled){inst.sortables.push({instance:sortable,shouldRevert:sortable.options.revert});sortable.refreshPositions();sortable._trigger("activate",event,uiSortable)}})},stop:function(event,ui){var inst=$(this).data("draggable"),uiSortable=$.extend({},ui,{item:inst.element});$.each(inst.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;inst.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=
true;this.instance._mouseStop(event);this.instance.options.helper=this.instance.options._helper;if(inst.options.helper=="original")this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",event,uiSortable)}})},drag:function(event,ui){var inst=$(this).data("draggable"),self=this;var checkPos=function(o){var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var helperTop=this.positionAbs.top,helperLeft=this.positionAbs.left;
var itemHeight=o.height,itemWidth=o.width;var itemTop=o.top,itemLeft=o.left;return $.ui.isOver(helperTop+dyClick,helperLeft+dxClick,itemTop,itemLeft,itemHeight,itemWidth)};$.each(inst.sortables,function(i){this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=$(self).clone().appendTo(this.instance.element).data("sortable-item",
true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return ui.helper[0]};event.target=this.instance.currentItem[0];this.instance._mouseCapture(event,true);this.instance._mouseStart(event,true,true);this.instance.offset.click.top=inst.offset.click.top;this.instance.offset.click.left=inst.offset.click.left;this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=inst.offset.parent.top-
this.instance.offset.parent.top;inst._trigger("toSortable",event);inst.dropped=this.instance.element;inst.currentItem=inst.element;this.instance.fromOutside=inst}if(this.instance.currentItem)this.instance._mouseDrag(event)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",event,this.instance._uiHash(this.instance));this.instance._mouseStop(event,true);this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();if(this.instance.placeholder)this.instance.placeholder.remove();inst._trigger("fromSortable",event);inst.dropped=false}})}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui){var t=$("body"),o=$(this).data("draggable").options;if(t.css("cursor"))o._cursor=t.css("cursor");t.css("cursor",o.cursor)},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._cursor)$("body").css("cursor",o._cursor)}});$.ui.plugin.add("draggable","iframeFix",{start:function(event,
ui){var o=$(this).data("draggable").options;$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css($(this).offset()).appendTo("body")})},stop:function(event,ui){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});$.ui.plugin.add("draggable","opacity",{start:function(event,
ui){var t=$(ui.helper),o=$(this).data("draggable").options;if(t.css("opacity"))o._opacity=t.css("opacity");t.css("opacity",o.opacity)},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._opacity)$(ui.helper).css("opacity",o._opacity)}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui){var i=$(this).data("draggable");if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!="HTML")i.overflowOffset=i.scrollParent.offset()},drag:function(event,ui){var i=$(this).data("draggable"),
o=i.options,scrolled=false;if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!="HTML"){if(!o.axis||o.axis!="x")if(i.overflowOffset.top+i.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity)i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity)i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed;if(!o.axis||o.axis!="y")if(i.overflowOffset.left+i.scrollParent[0].offsetWidth-
event.pageX<o.scrollSensitivity)i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity)i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed}else{if(!o.axis||o.axis!="x")if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)scrolled=
$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);if(!o.axis||o.axis!="y")if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed)}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)$.ui.ddmanager.prepareOffsets(i,event)}});$.ui.plugin.add("draggable","snap",
{start:function(event,ui){var i=$(this).data("draggable"),o=i.options;i.snapElements=[];$(o.snap.constructor!=String?o.snap.items||":data(draggable)":o.snap).each(function(){var $t=$(this);var $o=$t.offset();if(this!=i.element[0])i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left})})},drag:function(event,ui){var inst=$(this).data("draggable"),o=inst.options;var d=o.snapTolerance;var x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,
y2=y1+inst.helperProportions.height;for(var i=inst.snapElements.length-1;i>=0;i--){var l=inst.snapElements[i].left,r=l+inst.snapElements[i].width,t=inst.snapElements[i].top,b=t+inst.snapElements[i].height;if(!(l-d<x1&&x1<r+d&&t-d<y1&&y1<b+d||l-d<x1&&x1<r+d&&t-d<y2&&y2<b+d||l-d<x2&&x2<r+d&&t-d<y1&&y1<b+d||l-d<x2&&x2<r+d&&t-d<y2&&y2<b+d)){if(inst.snapElements[i].snapping)inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));
inst.snapElements[i].snapping=false;continue}if(o.snapMode!="inner"){var ts=Math.abs(t-y2)<=d;var bs=Math.abs(b-y1)<=d;var ls=Math.abs(l-x2)<=d;var rs=Math.abs(r-x1)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;
if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left}var first=ts||bs||ls||rs;if(o.snapMode!="outer"){var ts=Math.abs(t-y1)<=d;var bs=Math.abs(b-y2)<=d;var ls=Math.abs(l-x1)<=d;var rs=Math.abs(r-x2)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",
{top:0,left:l}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left}if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first))inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));inst.snapElements[i].snapping=ts||bs||ls||rs||first}}});$.ui.plugin.add("draggable","stack",{start:function(event,ui){var o=$(this).data("draggable").options;
var group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0)});if(!group.length)return;var min=parseInt(group[0].style.zIndex)||0;$(group).each(function(i){this.style.zIndex=min+i});this[0].style.zIndex=min+group.length}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("draggable").options;if(t.css("zIndex"))o._zIndex=t.css("zIndex");t.css("zIndex",o.zIndex)},stop:function(event,
ui){var o=$(this).data("draggable").options;if(o._zIndex)$(ui.helper).css("zIndex",o._zIndex)}})})(jQuery);;
(function($,undefined){$.ui=$.ui||{};var horizontalPositions=/left|center|right/,verticalPositions=/top|center|bottom/,center="center",_position=$.fn.position,_offset=$.fn.offset;$.fn.position=function(options){if(!options||!options.of)return _position.apply(this,arguments);options=$.extend({},options);var target=$(options.of),targetElem=target[0],collision=(options.collision||"flip").split(" "),offset=options.offset?options.offset.split(" "):[0,0],targetWidth,targetHeight,basePosition;if(targetElem.nodeType===
9){targetWidth=target.width();targetHeight=target.height();basePosition={top:0,left:0}}else if(targetElem.setTimeout){targetWidth=target.width();targetHeight=target.height();basePosition={top:target.scrollTop(),left:target.scrollLeft()}}else if(targetElem.preventDefault){options.at="left top";targetWidth=targetHeight=0;basePosition={top:options.of.pageY,left:options.of.pageX}}else{targetWidth=target.outerWidth();targetHeight=target.outerHeight();basePosition=target.offset()}$.each(["my","at"],function(){var pos=
(options[this]||"").split(" ");if(pos.length===1)pos=horizontalPositions.test(pos[0])?pos.concat([center]):verticalPositions.test(pos[0])?[center].concat(pos):[center,center];pos[0]=horizontalPositions.test(pos[0])?pos[0]:center;pos[1]=verticalPositions.test(pos[1])?pos[1]:center;options[this]=pos});if(collision.length===1)collision[1]=collision[0];offset[0]=parseInt(offset[0],10)||0;if(offset.length===1)offset[1]=offset[0];offset[1]=parseInt(offset[1],10)||0;if(options.at[0]==="right")basePosition.left+=
targetWidth;else if(options.at[0]===center)basePosition.left+=targetWidth/2;if(options.at[1]==="bottom")basePosition.top+=targetHeight;else if(options.at[1]===center)basePosition.top+=targetHeight/2;basePosition.left+=offset[0];basePosition.top+=offset[1];return this.each(function(){var elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseInt($.curCSS(this,"marginLeft",true))||0,marginTop=parseInt($.curCSS(this,"marginTop",true))||0,collisionWidth=elemWidth+marginLeft+
(parseInt($.curCSS(this,"marginRight",true))||0),collisionHeight=elemHeight+marginTop+(parseInt($.curCSS(this,"marginBottom",true))||0),position=$.extend({},basePosition),collisionPosition;if(options.my[0]==="right")position.left-=elemWidth;else if(options.my[0]===center)position.left-=elemWidth/2;if(options.my[1]==="bottom")position.top-=elemHeight;else if(options.my[1]===center)position.top-=elemHeight/2;position.left=Math.round(position.left);position.top=Math.round(position.top);collisionPosition=
{left:position.left-marginLeft,top:position.top-marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]])$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:offset,my:options.my,at:options.at})});if($.fn.bgiframe)elem.bgiframe();elem.offset($.extend(position,{using:options.using}))})};$.ui.position=
{fit:{left:function(position,data){var win=$(window),over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft();position.left=over>0?position.left-over:Math.max(position.left-data.collisionPosition.left,position.left)},top:function(position,data){var win=$(window),over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop();position.top=over>0?position.top-over:Math.max(position.top-data.collisionPosition.top,position.top)}},flip:{left:function(position,
data){if(data.at[0]===center)return;var win=$(window),over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft(),myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:-data.targetWidth,offset=-2*data.offset[0];position.left+=data.collisionPosition.left<0?myOffset+atOffset+offset:over>0?myOffset+atOffset+offset:0},top:function(position,data){if(data.at[1]===center)return;var win=$(window),over=data.collisionPosition.top+
data.collisionHeight-win.height()-win.scrollTop(),myOffset=data.my[1]==="top"?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:-data.targetHeight,offset=-2*data.offset[1];position.top+=data.collisionPosition.top<0?myOffset+atOffset+offset:over>0?myOffset+atOffset+offset:0}}};if(!$.offset.setOffset){$.offset.setOffset=function(elem,options){if(/static/.test($.curCSS(elem,"position")))elem.style.position="relative";var curElem=$(elem),curOffset=
curElem.offset(),curTop=parseInt($.curCSS(elem,"top",true),10)||0,curLeft=parseInt($.curCSS(elem,"left",true),10)||0,props={top:options.top-curOffset.top+curTop,left:options.left-curOffset.left+curLeft};if("using"in options)options.using.call(elem,props);else curElem.css(props)};$.fn.offset=function(options){var elem=this[0];if(!elem||!elem.ownerDocument)return null;if(options)return this.each(function(){$.offset.setOffset(this,options)});return _offset.call(this)}}})(jQuery);;
(function($,undefined){$.widget("ui.resizable",$.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var self=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&$.browser.opera)this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap($('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var n=this.handles.split(",");this.handles={};for(var i=0;i<n.length;i++){var handle=$.trim(n[i]),hname="ui-resizable-"+handle;var axis=$('<div class="ui-resizable-handle '+hname+'"></div>');if(/sw|se|ne|nw/.test(handle))axis.css({zIndex:++o.zIndex});if("se"==handle)axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis)}}this._renderAxis=
function(target){target=target||this.element;for(var i in this.handles){if(this.handles[i].constructor==String)this.handles[i]=$(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var axis=$(this.handles[i],this.element),padWrapper=0;padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();var padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");
target.css(padPos,padWrapper);this._proportionallyResize()}if(!$(this.handles[i]).length)continue}};this._renderAxis(this.element);this._handles=$(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!self.resizing){if(this.className)var axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);self.axis=axis&&axis[1]?axis[1]:"se"}});if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").hover(function(){$(this).removeClass("ui-resizable-autohide");
self._handles.show()},function(){if(!self.resizing){$(this).addClass("ui-resizable-autohide");self._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var _destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){_destroy(this.element);var wrapper=this.element;wrapper.after(this.originalElement.css({position:wrapper.css("position"),
width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this},_mouseCapture:function(event){var handle=false;for(var i in this.handles)if($(this.handles[i])[0]==event.target)handle=true;return!this.options.disabled&&handle},_mouseStart:function(event){var o=this.options,iniPos=this.element.position(),el=this.element;this.resizing=true;this.documentScroll=
{top:$(document).scrollTop(),left:$(document).scrollLeft()};if(el.is(".ui-draggable")||/absolute/.test(el.css("position")))el.css({position:"absolute",top:iniPos.top,left:iniPos.left});if($.browser.opera&&/relative/.test(el.css("position")))el.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();var curleft=num(this.helper.css("left")),curtop=num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalPosition={left:curleft,top:curtop};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=typeof o.aspectRatio==
"number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1;var cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor=="auto"?this.axis+"-resize":cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return true},_mouseDrag:function(event){var el=this.helper,o=this.options,props={},self=this,smp=this.originalMousePosition,a=this.axis;var dx=event.pageX-smp.left||0,dy=event.pageY-smp.top||0;var trigger=this._change[a];if(!trigger)return false;
var data=trigger.apply(this,[event,dx,dy]),ie6=$.browser.msie&&$.browser.version<7,csdif=this.sizeDiff;if(this._aspectRatio||event.shiftKey)data=this._updateRatio(data,event);data=this._respectSize(data,event);this._propagate("resize",event);el.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length)this._proportionallyResize();this._updateCache(data);this._trigger("resize",event,
this.ui());return false},_mouseStop:function(event){this.resizing=false;var o=this.options,self=this;if(this._helper){var pr=this._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],"left")?0:self.sizeDiff.height,soffsetw=ista?0:self.sizeDiff.width;var s={width:self.helper.width()-soffsetw,height:self.helper.height()-soffseth},left=parseInt(self.element.css("left"),10)+(self.position.left-self.originalPosition.left)||null,top=parseInt(self.element.css("top"),
10)+(self.position.top-self.originalPosition.top)||null;if(!o.animate)this.element.css($.extend(s,{top:top,left:left}));self.helper.height(self.size.height);self.helper.width(self.size.width);if(this._helper&&!o.animate)this._proportionallyResize()}$("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper)this.helper.remove();return false},_updateCache:function(data){var o=this.options;this.offset=this.helper.offset();if(isNumber(data.left))this.position.left=
data.left;if(isNumber(data.top))this.position.top=data.top;if(isNumber(data.height))this.size.height=data.height;if(isNumber(data.width))this.size.width=data.width},_updateRatio:function(data,event){var o=this.options,cpos=this.position,csize=this.size,a=this.axis;if(data.height)data.width=csize.height*this.aspectRatio;else if(data.width)data.height=csize.width/this.aspectRatio;if(a=="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null}if(a=="nw"){data.top=cpos.top+(csize.height-data.height);
data.left=cpos.left+(csize.width-data.width)}return data},_respectSize:function(data,event){var el=this.helper,o=this.options,pRatio=this._aspectRatio||event.shiftKey,a=this.axis,ismaxw=isNumber(data.width)&&o.maxWidth&&o.maxWidth<data.width,ismaxh=isNumber(data.height)&&o.maxHeight&&o.maxHeight<data.height,isminw=isNumber(data.width)&&o.minWidth&&o.minWidth>data.width,isminh=isNumber(data.height)&&o.minHeight&&o.minHeight>data.height;if(isminw)data.width=o.minWidth;if(isminh)data.height=o.minHeight;
if(ismaxw)data.width=o.maxWidth;if(ismaxh)data.height=o.maxHeight;var dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height;var cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw&&cw)data.left=dw-o.minWidth;if(ismaxw&&cw)data.left=dw-o.maxWidth;if(isminh&&ch)data.top=dh-o.minHeight;if(ismaxh&&ch)data.top=dh-o.maxHeight;var isNotwh=!data.width&&!data.height;if(isNotwh&&!data.left&&data.top)data.top=null;else if(isNotwh&&!data.top&&data.left)data.left=null;return data},
_proportionallyResize:function(){var o=this.options;if(!this._proportionallyResizeElements.length)return;var element=this.helper||this.element;for(var i=0;i<this._proportionallyResizeElements.length;i++){var prel=this._proportionallyResizeElements[i];if(!this.borderDif){var b=[prel.css("borderTopWidth"),prel.css("borderRightWidth"),prel.css("borderBottomWidth"),prel.css("borderLeftWidth")],p=[prel.css("paddingTop"),prel.css("paddingRight"),prel.css("paddingBottom"),prel.css("paddingLeft")];this.borderDif=
$.map(b,function(v,i){var border=parseInt(v,10)||0,padding=parseInt(p[i],10)||0;return border+padding})}if($.browser.msie&&!!($(element).is(":hidden")||$(element).parents(":hidden").length))continue;prel.css({height:element.height()-this.borderDif[0]-this.borderDif[2]||0,width:element.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$('<div style="overflow:hidden;"></div>');
var ie6=$.browser.msie&&$.browser.version<7,ie6offset=ie6?1:0,pxyoffset=ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+pxyoffset,height:this.element.outerHeight()+pxyoffset,position:"absolute",left:this.elementOffset.left-ie6offset+"px",top:this.elementOffset.top-ie6offset+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(event,dx,dy){return{width:this.originalSize.width+dx}},w:function(event,
dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx}},n:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy}},s:function(event,dx,dy){return{height:this.originalSize.height+dy}},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,
arguments),this._change.w.apply(this,[event,dx,dy]))},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);n!="resize"&&this._trigger(n,event,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,
helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});$.extend($.ui.resizable,{version:"1.8.11"});$.ui.plugin.add("resizable","alsoResize",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options;var _store=function(exp){$(exp).each(function(){var el=$(this);el.data("resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css("left"),10),top:parseInt(el.css("top"),
10),position:el.css("position")})})};if(typeof o.alsoResize=="object"&&!o.alsoResize.parentNode)if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize)}else $.each(o.alsoResize,function(exp){_store(exp)});else _store(o.alsoResize)},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,os=self.originalSize,op=self.originalPosition;var delta={height:self.size.height-os.height||0,width:self.size.width-os.width||0,top:self.position.top-op.top||0,left:self.position.left-
op.left||0},_alsoResize=function(exp,c){$(exp).each(function(){var el=$(this),start=$(this).data("resizable-alsoresize"),style={},css=c&&c.length?c:el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0)style[prop]=sum||null});if($.browser.opera&&/relative/.test(el.css("position"))){self._revertToRelativePosition=true;el.css({position:"absolute",top:"auto",left:"auto"})}el.css(style)})};
if(typeof o.alsoResize=="object"&&!o.alsoResize.nodeType)$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c)});else _alsoResize(o.alsoResize)},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;var _reset=function(exp){$(exp).each(function(){var el=$(this);el.css({position:el.data("resizable-alsoresize").position})})};if(self._revertToRelativePosition){self._revertToRelativePosition=false;if(typeof o.alsoResize=="object"&&!o.alsoResize.nodeType)$.each(o.alsoResize,function(exp){_reset(exp)});
else _reset(o.alsoResize)}$(this).removeData("resizable-alsoresize")}});$.ui.plugin.add("resizable","animate",{stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;var pr=self._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],"left")?0:self.sizeDiff.height,soffsetw=ista?0:self.sizeDiff.width;var style={width:self.size.width-soffsetw,height:self.size.height-soffseth},left=parseInt(self.element.css("left"),10)+(self.position.left-
self.originalPosition.left)||null,top=parseInt(self.element.css("top"),10)+(self.position.top-self.originalPosition.top)||null;self.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(self.element.css("width"),10),height:parseInt(self.element.css("height"),10),top:parseInt(self.element.css("top"),10),left:parseInt(self.element.css("left"),10)};if(pr&&pr.length)$(pr[0]).css({width:data.width,height:data.height});
self._updateCache(data);self._propagate("resize",event)}})}});$.ui.plugin.add("resizable","containment",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options,el=self.element;var oc=o.containment,ce=oc instanceof $?oc.get(0):/parent/.test(oc)?el.parent().get(0):oc;if(!ce)return;self.containerElement=$(ce);if(/document/.test(oc)||oc==document){self.containerOffset={left:0,top:0};self.containerPosition={left:0,top:0};self.parentData={element:$(document),left:0,top:0,width:$(document).width(),
height:$(document).height()||document.body.parentNode.scrollHeight}}else{var element=$(ce),p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name))});self.containerOffset=element.offset();self.containerPosition=element.position();self.containerSize={height:element.innerHeight()-p[3],width:element.innerWidth()-p[1]};var co=self.containerOffset,ch=self.containerSize.height,cw=self.containerSize.width,width=$.ui.hasScroll(ce,"left")?ce.scrollWidth:cw,height=
$.ui.hasScroll(ce)?ce.scrollHeight:ch;self.parentData={element:ce,left:co.left,top:co.top,width:width,height:height}}},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,ps=self.containerSize,co=self.containerOffset,cs=self.size,cp=self.position,pRatio=self._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=self.containerElement;if(ce[0]!=document&&/static/.test(ce.css("position")))cop=co;if(cp.left<(self._helper?co.left:0)){self.size.width=self.size.width+(self._helper?self.position.left-
co.left:self.position.left-cop.left);if(pRatio)self.size.height=self.size.width/o.aspectRatio;self.position.left=o.helper?co.left:0}if(cp.top<(self._helper?co.top:0)){self.size.height=self.size.height+(self._helper?self.position.top-co.top:self.position.top);if(pRatio)self.size.width=self.size.height*o.aspectRatio;self.position.top=self._helper?co.top:0}self.offset.left=self.parentData.left+self.position.left;self.offset.top=self.parentData.top+self.position.top;var woset=Math.abs((self._helper?self.offset.left-
cop.left:self.offset.left-cop.left)+self.sizeDiff.width),hoset=Math.abs((self._helper?self.offset.top-cop.top:self.offset.top-co.top)+self.sizeDiff.height);var isParent=self.containerElement.get(0)==self.element.parent().get(0),isOffsetRelative=/relative|absolute/.test(self.containerElement.css("position"));if(isParent&&isOffsetRelative)woset-=self.parentData.left;if(woset+self.size.width>=self.parentData.width){self.size.width=self.parentData.width-woset;if(pRatio)self.size.height=self.size.width/
self.aspectRatio}if(hoset+self.size.height>=self.parentData.height){self.size.height=self.parentData.height-hoset;if(pRatio)self.size.width=self.size.height*self.aspectRatio}},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options,cp=self.position,co=self.containerOffset,cop=self.containerPosition,ce=self.containerElement;var helper=$(self.helper),ho=helper.offset(),w=helper.outerWidth()-self.sizeDiff.width,h=helper.outerHeight()-self.sizeDiff.height;if(self._helper&&!o.animate&&
/relative/.test(ce.css("position")))$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});if(self._helper&&!o.animate&&/static/.test(ce.css("position")))$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}});$.ui.plugin.add("resizable","ghost",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options,cs=self.size;self.ghost=self.originalElement.clone();self.ghost.css({opacity:.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,
top:0}).addClass("ui-resizable-ghost").addClass(typeof o.ghost=="string"?o.ghost:"");self.ghost.appendTo(self.helper)},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options;if(self.ghost)self.ghost.css({position:"relative",height:self.size.height,width:self.size.width})},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;if(self.ghost&&self.helper)self.helper.get(0).removeChild(self.ghost.get(0))}});$.ui.plugin.add("resizable","grid",{resize:function(event,
ui){var self=$(this).data("resizable"),o=self.options,cs=self.size,os=self.originalSize,op=self.originalPosition,a=self.axis,ratio=o._aspectRatio||event.shiftKey;o.grid=typeof o.grid=="number"?[o.grid,o.grid]:o.grid;var ox=Math.round((cs.width-os.width)/(o.grid[0]||1))*(o.grid[0]||1),oy=Math.round((cs.height-os.height)/(o.grid[1]||1))*(o.grid[1]||1);if(/^(se|s|e)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy}else if(/^(ne)$/.test(a)){self.size.width=os.width+ox;self.size.height=
os.height+oy;self.position.top=op.top-oy}else if(/^(sw)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.left=op.left-ox}else{self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.top=op.top-oy;self.position.left=op.left-ox}}});var num=function(v){return parseInt(v,10)||0};var isNumber=function(value){return!isNaN(parseInt(value,10))}})(jQuery);;
(function($,undefined){var uiDialogClasses="ui-dialog "+"ui-widget "+"ui-widget-content "+"ui-corner-all ",sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};$.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,
modal:false,position:{my:"center",at:"center",collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0)$(this).css("top",pos.top-topOffset)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var self=this,options=self.options,title=options.title||"&#160;",titleId=
$.ui.dialog.getTitleId(self.element),uiDialog=(self.uiDialog=$("<div></div>")).appendTo(document.body).hide().addClass(uiDialogClasses+options.dialogClass).css({zIndex:options.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(event){if(options.closeOnEscape&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){self.close(event);event.preventDefault()}}).attr({role:"dialog","aria-labelledby":titleId}).mousedown(function(event){self.moveToTop(false,event)}),uiDialogContent=self.element.show().removeAttr("title").addClass("ui-dialog-content "+
"ui-widget-content").appendTo(uiDialog),uiDialogTitlebar=(self.uiDialogTitlebar=$("<div></div>")).addClass("ui-dialog-titlebar "+"ui-widget-header "+"ui-corner-all "+"ui-helper-clearfix").prependTo(uiDialog),uiDialogTitlebarClose=$('<a href="#"></a>').addClass("ui-dialog-titlebar-close "+"ui-corner-all").attr("role","button").hover(function(){uiDialogTitlebarClose.addClass("ui-state-hover")},function(){uiDialogTitlebarClose.removeClass("ui-state-hover")}).focus(function(){uiDialogTitlebarClose.addClass("ui-state-focus")}).blur(function(){uiDialogTitlebarClose.removeClass("ui-state-focus")}).click(function(event){self.close(event);
return false}).appendTo(uiDialogTitlebar),uiDialogTitlebarCloseText=(self.uiDialogTitlebarCloseText=$("<span></span>")).addClass("ui-icon "+"ui-icon-closethick").text(options.closeText).appendTo(uiDialogTitlebarClose),uiDialogTitle=$("<span></span>").addClass("ui-dialog-title").attr("id",titleId).html(title).prependTo(uiDialogTitlebar);if($.isFunction(options.beforeclose)&&!$.isFunction(options.beforeClose))options.beforeClose=options.beforeclose;uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();
if(options.draggable&&$.fn.draggable)self._makeDraggable();if(options.resizable&&$.fn.resizable)self._makeResizable();self._createButtons(options.buttons);self._isOpen=false;if($.fn.bgiframe)uiDialog.bgiframe()},_init:function(){if(this.options.autoOpen)this.open()},destroy:function(){var self=this;if(self.overlay)self.overlay.destroy();self.uiDialog.hide();self.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");self.uiDialog.remove();
if(self.originalTitle)self.element.attr("title",self.originalTitle);return self},widget:function(){return this.uiDialog},close:function(event){var self=this,maxZ,thisZ;if(false===self._trigger("beforeClose",event))return;if(self.overlay)self.overlay.destroy();self.uiDialog.unbind("keypress.ui-dialog");self._isOpen=false;if(self.options.hide)self.uiDialog.hide(self.options.hide,function(){self._trigger("close",event)});else{self.uiDialog.hide();self._trigger("close",event)}$.ui.dialog.overlay.resize();
if(self.options.modal){maxZ=0;$(".ui-dialog").each(function(){if(this!==self.uiDialog[0]){thisZ=$(this).css("z-index");if(!isNaN(thisZ))maxZ=Math.max(maxZ,thisZ)}});$.ui.dialog.maxZ=maxZ}return self},isOpen:function(){return this._isOpen},moveToTop:function(force,event){var self=this,options=self.options,saveScroll;if(options.modal&&!force||!options.stack&&!options.modal)return self._trigger("focus",event);if(options.zIndex>$.ui.dialog.maxZ)$.ui.dialog.maxZ=options.zIndex;if(self.overlay){$.ui.dialog.maxZ+=
1;self.overlay.$el.css("z-index",$.ui.dialog.overlay.maxZ=$.ui.dialog.maxZ)}saveScroll={scrollTop:self.element.attr("scrollTop"),scrollLeft:self.element.attr("scrollLeft")};$.ui.dialog.maxZ+=1;self.uiDialog.css("z-index",$.ui.dialog.maxZ);self.element.attr(saveScroll);self._trigger("focus",event);return self},open:function(){if(this._isOpen)return;var self=this,options=self.options,uiDialog=self.uiDialog;self.overlay=options.modal?new $.ui.dialog.overlay(self):null;self._size();self._position(options.position);
uiDialog.show(options.show);self.moveToTop(true);if(options.modal)uiDialog.bind("keypress.ui-dialog",function(event){if(event.keyCode!==$.ui.keyCode.TAB)return;var tabbables=$(":tabbable",this),first=tabbables.filter(":first"),last=tabbables.filter(":last");if(event.target===last[0]&&!event.shiftKey){first.focus(1);return false}else if(event.target===first[0]&&event.shiftKey){last.focus(1);return false}});$(self.element.find(":tabbable").get().concat(uiDialog.find(".ui-dialog-buttonpane :tabbable").get().concat(uiDialog.get()))).eq(0).focus();
self._isOpen=true;self._trigger("open");return self},_createButtons:function(buttons){var self=this,hasButtons=false,uiDialogButtonPane=$("<div></div>").addClass("ui-dialog-buttonpane "+"ui-widget-content "+"ui-helper-clearfix"),uiButtonSet=$("<div></div>").addClass("ui-dialog-buttonset").appendTo(uiDialogButtonPane);self.uiDialog.find(".ui-dialog-buttonpane").remove();if(typeof buttons==="object"&&buttons!==null)$.each(buttons,function(){return!(hasButtons=true)});if(hasButtons){$.each(buttons,function(name,
props){props=$.isFunction(props)?{click:props,text:name}:props;var button=$('<button type="button"></button>').attr(props,true).unbind("click").click(function(){props.click.apply(self.element[0],arguments)}).appendTo(uiButtonSet);if($.fn.button)button.button()});uiDialogButtonPane.appendTo(self.uiDialog)}},_makeDraggable:function(){var self=this,options=self.options,doc=$(document),heightBeforeDrag;function filteredUi(ui){return{position:ui.position,offset:ui.offset}}self.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){heightBeforeDrag=options.height==="auto"?"auto":$(this).height();$(this).height($(this).height()).addClass("ui-dialog-dragging");self._trigger("dragStart",event,filteredUi(ui))},drag:function(event,ui){self._trigger("drag",event,filteredUi(ui))},stop:function(event,ui){options.position=[ui.position.left-doc.scrollLeft(),ui.position.top-doc.scrollTop()];$(this).removeClass("ui-dialog-dragging").height(heightBeforeDrag);self._trigger("dragStop",
event,filteredUi(ui));$.ui.dialog.overlay.resize()}})},_makeResizable:function(handles){handles=handles===undefined?this.options.resizable:handles;var self=this,options=self.options,position=self.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size}}self.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:self.element,
maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:self._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");self._trigger("resizeStart",event,filteredUi(ui))},resize:function(event,ui){self._trigger("resize",event,filteredUi(ui))},stop:function(event,ui){$(this).removeClass("ui-dialog-resizing");options.height=$(this).height();options.width=$(this).width();self._trigger("resizeStop",event,filteredUi(ui));$.ui.dialog.overlay.resize()}}).css("position",
position).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var options=this.options;if(options.height==="auto")return options.minHeight;else return Math.min(options.minHeight,options.height)},_position:function(position){var myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==="string"||typeof position==="object"&&"0"in position){myAt=position.split?position.split(" "):[position[0],position[1]];if(myAt.length===1)myAt[1]=myAt[0];$.each(["left",
"top"],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition}});position={my:myAt.join(" "),at:myAt.join(" "),offset:offset.join(" ")}}position=$.extend({},$.ui.dialog.prototype.options.position,position)}else position=$.ui.dialog.prototype.options.position;isVisible=this.uiDialog.is(":visible");if(!isVisible)this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position($.extend({of:window},position));if(!isVisible)this.uiDialog.hide()},_setOptions:function(options){var self=
this,resizableOptions={},resize=false;$.each(options,function(key,value){self._setOption(key,value);if(key in sizeRelatedOptions)resize=true;if(key in resizableRelatedOptions)resizableOptions[key]=value});if(resize)this._size();if(this.uiDialog.is(":data(resizable)"))this.uiDialog.resizable("option",resizableOptions)},_setOption:function(key,value){var self=this,uiDialog=self.uiDialog;switch(key){case "beforeclose":key="beforeClose";break;case "buttons":self._createButtons(value);break;case "closeText":self.uiDialogTitlebarCloseText.text(""+
value);break;case "dialogClass":uiDialog.removeClass(self.options.dialogClass).addClass(uiDialogClasses+value);break;case "disabled":if(value)uiDialog.addClass("ui-dialog-disabled");else uiDialog.removeClass("ui-dialog-disabled");break;case "draggable":var isDraggable=uiDialog.is(":data(draggable)");if(isDraggable&&!value)uiDialog.draggable("destroy");if(!isDraggable&&value)self._makeDraggable();break;case "position":self._position(value);break;case "resizable":var isResizable=uiDialog.is(":data(resizable)");
if(isResizable&&!value)uiDialog.resizable("destroy");if(isResizable&&typeof value==="string")uiDialog.resizable("option","handles",value);if(!isResizable&&value!==false)self._makeResizable(value);break;case "title":$(".ui-dialog-title",self.uiDialogTitlebar).html(""+(value||"&#160;"));break}$.Widget.prototype._setOption.apply(self,arguments)},_size:function(){var options=this.options,nonContentHeight,minContentHeight,isVisible=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,
height:0});if(options.minWidth>options.width)options.width=options.minWidth;nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).height();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);if(options.height==="auto")if($.support.minHeight)this.element.css({minHeight:minContentHeight,height:"auto"});else{this.uiDialog.show();var autoHeight=this.element.css("height","auto").height();if(!isVisible)this.uiDialog.hide();this.element.height(Math.max(autoHeight,minContentHeight))}else this.element.height(Math.max(options.height-
nonContentHeight,0));if(this.uiDialog.is(":data(resizable)"))this.uiDialog.resizable("option","minHeight",this._minHeight())}});$.extend($.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function($el){var id=$el.attr("id");if(!id){this.uuid+=1;id=this.uuid}return"ui-dialog-title-"+id},overlay:function(dialog){this.$el=$.ui.dialog.overlay.create(dialog)}});$.extend($.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:$.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),
function(event){return event+".dialog-overlay"}).join(" "),create:function(dialog){if(this.instances.length===0){setTimeout(function(){if($.ui.dialog.overlay.instances.length)$(document).bind($.ui.dialog.overlay.events,function(event){if($(event.target).zIndex()<$.ui.dialog.overlay.maxZ)return false})},1);$(document).bind("keydown.dialog-overlay",function(event){if(dialog.options.closeOnEscape&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){dialog.close(event);event.preventDefault()}});$(window).bind("resize.dialog-overlay",
$.ui.dialog.overlay.resize)}var $el=(this.oldInstances.pop()||$("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});if($.fn.bgiframe)$el.bgiframe();this.instances.push($el);return $el},destroy:function($el){var indexOf=$.inArray($el,this.instances);if(indexOf!=-1)this.oldInstances.push(this.instances.splice(indexOf,1)[0]);if(this.instances.length===0)$([document,window]).unbind(".dialog-overlay");$el.remove();var maxZ=0;$.each(this.instances,
function(){maxZ=Math.max(maxZ,this.css("z-index"))});this.maxZ=maxZ},height:function(){var scrollHeight,offsetHeight;if($.browser.msie&&$.browser.version<7){scrollHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);offsetHeight=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(scrollHeight<offsetHeight)return $(window).height()+"px";else return scrollHeight+"px"}else return $(document).height()+"px"},width:function(){var scrollWidth,offsetWidth;
if($.browser.msie&&$.browser.version<7){scrollWidth=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(scrollWidth<offsetWidth)return $(window).width()+"px";else return scrollWidth+"px"}else return $(document).width()+"px"},resize:function(){var $overlays=$([]);$.each($.ui.dialog.overlay.instances,function(){$overlays=$overlays.add(this)});$overlays.css({width:0,height:0}).css({width:$.ui.dialog.overlay.width(),
height:$.ui.dialog.overlay.height()})}});$.extend($.ui.dialog.overlay.prototype,{destroy:function(){$.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;
(function($,undefined){if($.ui&&$.ui.dialog)$.ui.dialog.overlay.events=$.map("focus,keydown,keypress".split(","),function(event){return event+".dialog-overlay"}).join(" ")})(jQuery);;
(function($){Drupal.ajax=Drupal.ajax||{};Drupal.behaviors.AJAX={attach:function(context,settings){for(var base in settings.ajax)if(!$("#"+base+".ajax-processed").length){var element_settings=settings.ajax[base];if(typeof element_settings.selector=="undefined")element_settings.selector="#"+base;$(element_settings.selector).each(function(){element_settings.element=this;Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});$("#"+base).addClass("ajax-processed")}$(".use-ajax:not(.ajax-processed)").addClass("ajax-processed").each(function(){var element_settings=
{};element_settings.progress={"type":"throbber"};if($(this).attr("href")){element_settings.url=$(this).attr("href");element_settings.event="click"}var base=$(this).attr("id");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});$(".use-ajax-submit:not(.ajax-processed)").addClass("ajax-processed").each(function(){var element_settings={};element_settings.url=$(this.form).attr("action");element_settings.setClick=true;element_settings.event="click";element_settings.progress={"type":"throbber"};
var base=$(this).attr("id");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)})}};Drupal.ajax=function(base,element,element_settings){var defaults={url:"system/ajax",event:"mousedown",keypress:true,selector:"#"+base,effect:"none",speed:"none",method:"replaceWith",progress:{type:"throbber",message:Drupal.t("Please wait...")},submit:{"js":true}};$.extend(this,defaults,element_settings);this.element=element;this.element_settings=element_settings;this.url=element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g,
"/ajax$1");this.wrapper="#"+element_settings.wrapper;if(this.element.form)this.form=$(this.element.form);var ajax=this;ajax.options={url:ajax.url,data:ajax.submit,beforeSerialize:function(element_settings,options){return ajax.beforeSerialize(element_settings,options)},beforeSubmit:function(form_values,element_settings,options){ajax.ajaxing=true;return ajax.beforeSubmit(form_values,element_settings,options)},beforeSend:function(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,
options)},success:function(response,status){if(typeof response=="string")response=$.parseJSON(response);return ajax.success(response,status)},complete:function(response,status){ajax.ajaxing=false;if(status=="error"||status=="parsererror")return ajax.error(response,ajax.url)},dataType:"json",type:"POST"};$(ajax.element).bind(element_settings.event,function(event){return ajax.eventResponse(this,event)});if(element_settings.keypress)$(ajax.element).keypress(function(event){return ajax.keypressResponse(this,
event)});if(element_settings.prevent)$(ajax.element).bind(element_settings.prevent,false)};Drupal.ajax.prototype.keypressResponse=function(element,event){var ajax=this;if(event.which==13||event.which==32&&element.type!="text"&&element.type!="textarea"){$(ajax.element_settings.element).trigger(ajax.element_settings.event);return false}};Drupal.ajax.prototype.eventResponse=function(element,event){var ajax=this;if(ajax.ajaxing)return false;try{if(ajax.form){if(ajax.setClick)element.form.clk=element;
ajax.form.ajaxSubmit(ajax.options)}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options)}}catch(e){ajax.ajaxing=false;alert("An error occurred while attempting to process "+ajax.options.url+": "+e.message)}if(typeof element.type!="undefined"&&(element.type=="checkbox"||element.type=="radio"))return true;else return false};Drupal.ajax.prototype.beforeSerialize=function(element,options){if(this.form){var settings=this.settings||Drupal.settings;Drupal.detachBehaviors(this.form,settings,
"serialize")}options.data["ajax_html_ids[]"]=[];$("[id]").each(function(){options.data["ajax_html_ids[]"].push(this.id)});options.data["ajax_page_state[theme]"]=Drupal.settings.ajaxPageState.theme;options.data["ajax_page_state[theme_token]"]=Drupal.settings.ajaxPageState.theme_token;for(var key in Drupal.settings.ajaxPageState.css)options.data["ajax_page_state[css]["+key+"]"]=1;for(var key in Drupal.settings.ajaxPageState.js)options.data["ajax_page_state[js]["+key+"]"]=1};Drupal.ajax.prototype.beforeSubmit=
function(form_values,element,options){};Drupal.ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload="1";var v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=Drupal.checkPlain(v)}$(this.element).addClass("progress-disabled").attr("disabled",true);if(this.progress.type=="bar"){var progressBar=new Drupal.progressBar("ajax-progress-"+this.element.id,eval(this.progress.update_callback),
this.progress.method,eval(this.progress.error_callback));if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(progressBar.element).addClass("ajax-progress ajax-progress-bar");this.progress.object=progressBar;$(this.element).after(this.progress.element)}else if(this.progress.type=="throbber"){this.progress.element=$('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
if(this.progress.message)$(".throbber",this.progress.element).after('<div class="message">'+this.progress.message+"</div>");$(this.element).after(this.progress.element)}};Drupal.ajax.prototype.success=function(response,status){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).removeClass("progress-disabled").removeAttr("disabled");Drupal.freezeHeight();for(var i in response)if(response.hasOwnProperty(i)&&response[i]["command"]&&
this.commands[response[i]["command"]])this.commands[response[i]["command"]](this,response[i],status);if(this.form){var settings=this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,settings)}Drupal.unfreezeHeight();this.settings=null};Drupal.ajax.prototype.getEffect=function(response){var type=response.effect||this.effect;var speed=response.speed||this.speed;var effect={};if(type=="none"){effect.showEffect="show";effect.hideEffect="hide";effect.showSpeed=""}else if(type=="fade"){effect.showEffect=
"fadeIn";effect.hideEffect="fadeOut";effect.showSpeed=speed}else{effect.showEffect=type+"Toggle";effect.hideEffect=type+"Toggle";effect.showSpeed=speed}return effect};Drupal.ajax.prototype.error=function(response,uri){alert(Drupal.ajaxError(response,uri));if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).removeClass("progress-disabled").removeAttr("disabled");if(this.form){var settings=response.settings||
this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,settings)}};Drupal.ajax.prototype.commands={insert:function(ajax,response,status){var wrapper=response.selector?$(response.selector):$(ajax.wrapper);var method=response.method||ajax.method;var effect=ajax.getEffect(response);var new_content_wrapped=$("<div></div>").html(response.data);var new_content=new_content_wrapped.contents();if(new_content.length!=1||new_content.get(0).nodeType!=1)new_content=new_content_wrapped;switch(method){case "html":case "replaceWith":case "replaceAll":case "empty":case "remove":var settings=
response.settings||ajax.settings||Drupal.settings;Drupal.detachBehaviors(wrapper,settings)}wrapper[method](new_content);if(effect.showEffect!="show")new_content.hide();if($(".ajax-new-content",new_content).length>0){$(".ajax-new-content",new_content).hide();new_content.show();$(".ajax-new-content",new_content)[effect.showEffect](effect.showSpeed)}else if(effect.showEffect!="show")new_content[effect.showEffect](effect.showSpeed);if(new_content.parents("html").length>0){var settings=response.settings||
ajax.settings||Drupal.settings;Drupal.attachBehaviors(new_content,settings)}},remove:function(ajax,response,status){var settings=response.settings||ajax.settings||Drupal.settings;Drupal.detachBehaviors($(response.selector),settings);$(response.selector).remove()},changed:function(ajax,response,status){if(!$(response.selector).hasClass("ajax-changed")){$(response.selector).addClass("ajax-changed");if(response.asterisk)$(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ')}},
alert:function(ajax,response,status){alert(response.text,response.title)},css:function(ajax,response,status){$(response.selector).css(response.argument)},settings:function(ajax,response,status){if(response.merge)$.extend(true,Drupal.settings,response.settings);else ajax.settings=response.settings},data:function(ajax,response,status){$(response.selector).data(response.name,response.value)},invoke:function(ajax,response,status){var $element=$(response.selector);$element[response.method].apply($element,
response.arguments)},restripe:function(ajax,response,status){$("> tbody > tr:visible, > tr:visible",$(response.selector)).removeClass("odd even").filter(":even").addClass("odd").end().filter(":odd").addClass("even")},updateBuildId:function(ajax,response,status){$('input[name="form_build_id"][value="'+response["old"]+'"]').val(response["new"])}}})(jQuery);;
