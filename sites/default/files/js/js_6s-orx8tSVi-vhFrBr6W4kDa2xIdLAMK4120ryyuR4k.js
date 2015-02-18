(function($){Drupal.Views={};Drupal.behaviors.viewsTabs={attach:function(context){if($.viewsUi&&$.viewsUi.tabs)$("#views-tabset").once("views-processed").viewsTabs({selectedClass:"active"});$("a.views-remove-link").once("views-processed").click(function(event){var id=$(this).attr("id").replace("views-remove-link-","");$("#views-row-"+id).hide();$("#views-removed-"+id).attr("checked",true);event.preventDefault()});$("a.display-remove-link").addClass("display-processed").click(function(){var id=$(this).attr("id").replace("display-remove-link-",
"");$("#display-row-"+id).hide();$("#display-removed-"+id).attr("checked",true);return false})}};Drupal.Views.parseQueryString=function(query){var args={};var pos=query.indexOf("?");if(pos!=-1)query=query.substring(pos+1);var pairs=query.split("&");for(var i in pairs)if(typeof pairs[i]=="string"){var pair=pairs[i].split("=");if(pair[0]!="q"&&pair[1])args[decodeURIComponent(pair[0].replace(/\+/g," "))]=decodeURIComponent(pair[1].replace(/\+/g," "))}return args};Drupal.Views.parseViewArgs=function(href,
viewPath){var returnObj={};var path=Drupal.Views.getPath(href);if(viewPath&&path.substring(0,viewPath.length+1)==viewPath+"/"){var args=decodeURIComponent(path.substring(viewPath.length+1,path.length));returnObj.view_args=args;returnObj.view_path=path}return returnObj};Drupal.Views.pathPortion=function(href){var protocol=window.location.protocol;if(href.substring(0,protocol.length)==protocol)href=href.substring(href.indexOf("/",protocol.length+2));return href};Drupal.Views.getPath=function(href){href=
Drupal.Views.pathPortion(href);href=href.substring(Drupal.settings.basePath.length,href.length);if(href.substring(0,3)=="?q=")href=href.substring(3,href.length);var chars=["#","?","&"];for(i in chars)if(href.indexOf(chars[i])>-1)href=href.substr(0,href.indexOf(chars[i]));return href}})(jQuery);;
(function($){Drupal.progressBar=function(id,updateCallback,method,errorCallback){var pb=this;this.id=id;this.method=method||"GET";this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$('<div class="progress" aria-live="polite"></div>').attr("id",id);this.element.html('<div class="bar"><div class="filled"></div></div>'+'<div class="percentage"></div>'+'<div class="message">&nbsp;</div>')};Drupal.progressBar.prototype.setProgress=function(percentage,message){if(percentage>=
0&&percentage<=100){$("div.filled",this.element).css("width",percentage+"%");$("div.percentage",this.element).html(percentage+"%")}$("div.message",this.element).html(message);if(this.updateCallback)this.updateCallback(percentage,message,this)};Drupal.progressBar.prototype.startMonitoring=function(uri,delay){this.delay=delay;this.uri=uri;this.sendPing()};Drupal.progressBar.prototype.stopMonitoring=function(){clearTimeout(this.timer);this.uri=null};Drupal.progressBar.prototype.sendPing=function(){if(this.timer)clearTimeout(this.timer);
if(this.uri){var pb=this;$.ajax({type:this.method,url:this.uri,data:"",dataType:"json",success:function(progress){if(progress.status==0){pb.displayError(progress.data);return}pb.setProgress(progress.percentage,progress.message);pb.timer=setTimeout(function(){pb.sendPing()},pb.delay)},error:function(xmlhttp){pb.displayError(Drupal.ajaxError(xmlhttp,pb.uri))}})}};Drupal.progressBar.prototype.displayError=function(string){var error=$('<div class="messages error"></div>').html(string);$(this.element).before(error).hide();
if(this.errorCallback)this.errorCallback(this)}})(jQuery);;
(function($){Drupal.behaviors.ViewsAjaxView={};Drupal.behaviors.ViewsAjaxView.attach=function(){if(Drupal.settings&&Drupal.settings.views&&Drupal.settings.views.ajaxViews)$.each(Drupal.settings.views.ajaxViews,function(i,settings){Drupal.views.instances[i]=new Drupal.views.ajaxView(settings)})};Drupal.views={};Drupal.views.instances={};Drupal.views.ajaxView=function(settings){var selector=".view-dom-id-"+settings.view_dom_id;this.$view=$(selector);var ajax_path=Drupal.settings.views.ajax_path;if(ajax_path.constructor.toString().indexOf("Array")!=
-1)ajax_path=ajax_path[0];var queryString=window.location.search||"";if(queryString!==""){var queryString=queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/,"");if(queryString!=="")queryString=(/\?/.test(ajax_path)?"&":"?")+queryString}this.element_settings={url:ajax_path+queryString,submit:settings,setClick:true,event:"click",selector:selector,progress:{type:"throbber"}};this.settings=settings;this.$exposed_form=$("form#views-exposed-form-"+settings.view_name.replace(/_/g,"-")+"-"+settings.view_display_id.replace(/_/g,
"-"));this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax,this));this.$view.filter(jQuery.proxy(this.filterNestedViews,this)).once(jQuery.proxy(this.attachPagerAjax,this));var self_settings=this.element_settings;self_settings.event="RefreshView";this.refreshViewAjax=new Drupal.ajax(this.selector,this.$view,self_settings)};Drupal.views.ajaxView.prototype.attachExposedFormAjax=function(){var button=$("input[type=submit], button[type=submit], input[type=image]",this.$exposed_form);button=
button[0];this.exposedFormAjax=new Drupal.ajax($(button).attr("id"),button,this.element_settings)};Drupal.views.ajaxView.prototype.filterNestedViews=function(){return!this.$view.parents(".view").size()};Drupal.views.ajaxView.prototype.attachPagerAjax=function(){this.$view.find("ul.pager > li > a, th.views-field a, .attachment .views-summary a").each(jQuery.proxy(this.attachPagerLinkAjax,this))};Drupal.views.ajaxView.prototype.attachPagerLinkAjax=function(id,link){var $link=$(link);var viewData={};
var href=$link.attr("href");$.extend(viewData,this.settings,Drupal.Views.parseQueryString(href),Drupal.Views.parseViewArgs(href,this.settings.view_base_path));$.extend(viewData,Drupal.Views.parseViewArgs(href,this.settings.view_base_path));this.element_settings.submit=viewData;this.pagerAjax=new Drupal.ajax(false,$link,this.element_settings)};Drupal.ajax.prototype.commands.viewsScrollTop=function(ajax,response,status){var offset=$(response.selector).offset();var scrollTarget=response.selector;while($(scrollTarget).scrollTop()==
0&&$(scrollTarget).parent())scrollTarget=$(scrollTarget).parent();if(offset.top-10<$(scrollTarget).scrollTop())$(scrollTarget).animate({scrollTop:offset.top-10},500)}})(jQuery);;
(function($){Drupal.googleanalytics={};$(document).ready(function(){$(document.body).bind("mousedown keyup touchstart",function(event){$(event.target).closest("a,area").each(function(){if(Drupal.googleanalytics.isInternal(this.href))if($(this).is(".colorbox"));else if(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href))ga("send","event","Downloads",Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),Drupal.googleanalytics.getPageUrl(this.href));
else{if(Drupal.googleanalytics.isInternalSpecial(this.href))ga("send","pageview",{page:Drupal.googleanalytics.getPageUrl(this.href)})}else if(Drupal.settings.googleanalytics.trackMailto&&$(this).is("a[href^='mailto:'],area[href^='mailto:']"))ga("send","event","Mails","Click",this.href.substring(7));else if(Drupal.settings.googleanalytics.trackOutbound&&this.href.match(/^\w+:\/\//i))if(Drupal.settings.googleanalytics.trackDomainMode!=2&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains))ga("send",
"event","Outbound links","Click",this.href)})});if(Drupal.settings.googleanalytics.trackUrlFragments)window.onhashchange=function(){ga("send","pageview",location.pathname+location.search+location.hash)};$(document).bind("cbox_complete",function(){var href=$.colorbox.element().attr("href");if(href)ga("send","pageview",{page:Drupal.googleanalytics.getPageUrl(href)})})});Drupal.googleanalytics.isCrossDomain=function(hostname,crossDomains){if(!crossDomains)return false;else return $.inArray(hostname,
crossDomains)>-1?true:false};Drupal.googleanalytics.isDownload=function(url){var isDownload=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([?#].*)?$","i");return isDownload.test(url)};Drupal.googleanalytics.isInternal=function(url){var isInternal=new RegExp("^(https?)://"+window.location.host,"i");return isInternal.test(url)};Drupal.googleanalytics.isInternalSpecial=function(url){var isInternalSpecial=new RegExp("(/go/.*)$","i");return isInternalSpecial.test(url)};Drupal.googleanalytics.getPageUrl=
function(url){var extractInternalUrl=new RegExp("^(https?)://"+window.location.host,"i");return url.replace(extractInternalUrl,"")};Drupal.googleanalytics.getDownloadExtension=function(url){var extractDownloadextension=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([?#].*)?$","i");var extension=extractDownloadextension.exec(url);return extension===null?"":extension[1]}})(jQuery);;
