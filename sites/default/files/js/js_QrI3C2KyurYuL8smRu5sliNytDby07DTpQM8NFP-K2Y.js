(function($){Drupal.behaviors.devel={attach:function(context,settings){$(".krumo-footnote .krumo-call").once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="'+settings.basePath+'misc/help.png"/>');var krumo_name=[];var krumo_type=[];function krumo_traverse(el){krumo_name.push($(el).html());krumo_type.push($(el).siblings("em").html().match(/\w*/)[0]);if($(el).closest(".krumo-nest").length>0)krumo_traverse($(el).closest(".krumo-nest").prev().find(".krumo-name"))}
$(".krumo-child > div:first-child",context).dblclick(function(e){if($(this).find("> .krumo-php-path").length>0)$(this).find("> .krumo-php-path").remove();else{krumo_traverse($(this).find("> a.krumo-name"));var krumo_path_string="";for(var i=krumo_name.length-1;i>=0;--i){if(krumo_name.length-1==i)krumo_path_string+="$"+krumo_name[i];if(typeof krumo_name[i-1]!=="undefined"){if(krumo_type[i]=="Array"){krumo_path_string+="[";if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+=
krumo_name[i-1];if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+="]"}if(krumo_type[i]=="Object")krumo_path_string+="->"+krumo_name[i-1]}}$(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">'+krumo_path_string+"</div>");krumo_name=[];krumo_type=[]}})}}})(jQuery);;
var contentanalysis=contentanalysis||{};
(function($,$$){$.extend($$,{contentanalysisPrevAnalyzerTab:"",contentanalysisPrevReportTab:"",contentanalysisCurrentAnalyzerTab:"",contentanalysisCurrentReportTab:"",contentanalysisReportActiveTab:{},init:function(){$$.contentanalysis_contentanalysisui()},contentanalysis_contentanalysisui:function(){if($("#modalContent div.analyzers h3.analyzer").size()>0){$$.contentanalysis_show_analyzer_tab($("div.analyzers h3.analyzer").get(0));$("div.analyzers h3.analyzer").mousedown(function(){$$.contentanalysis_show_analyzer_tab(this)});$("h3.contentanalysis-report-tab").mousedown(function(){$$.contentanalysis_show_report_tab(this)})}},
contentanalysis_back:function(){$$.contentanalysis_show_analyzer_tab(contentanalysisPrevAnalyzerTab)},contentanalysis_show_analyzer_tab:function(theTab){$("div.analysis-results div.analyzer-analysis:eq("+$(".analyzers h3.analyzer").index(theTab)+")").children(".content-analysis-tab:first").addClass("active");$("div.analysis-results div.analyzer-analysis").hide();$(".analyzers h3.analyzer").removeClass("active");$(theTab).addClass("active");$("div.analysis-results div.analyzer-analysis:eq("+$(".analyzers h3.analyzer").index(theTab)+
")").show();$(".content-analysis-results").hide();var id=$(theTab).attr("id");var e=id.split("-");var analyzer=e[3];if($$.contentanalysisReportActiveTab[analyzer])$$.contentanalysis_show_report_tab($("#contentanalysis-report-tab-"+analyzer+"-"+$$.contentanalysisReportActiveTab[analyzer]));else $$.contentanalysis_show_report_tab($("#contentanalysis-report-tab-"+analyzer+"-0"));$$.contentanalysisPrevAnalyzerTab=$$.contentanalysisCurrentAnalyzerTab;$$.contentanalysisCurrentAnalyzerTab=theTab},contentanalysis_show_report_tab:function(theTab){var id=
$(theTab).attr("id");var e=id.split("-");$$.contentanalysisReportActiveTab[e[3]]=e[4];$("h3.contentanalysis-report-tab").removeClass("active");$(theTab).addClass("active");$(".contentanalysis-results-section").hide();var tabs=$("#contentanalysis-report-tabs-"+e[3]);var pos=$("#contentanalysis-report-tabs-"+e[3]).position();var offset=$("#contentanalysis-report-tabs-"+e[3]).offset();var height=tabs.height();var top=pos.top+height+"px";var left=pos.left+"px";var sec_id=id.replace("tab","results");var result_id=
sec_id.replace("-"+e[4],"");$("#"+result_id).css("top",top);$("#"+sec_id).show();$$.contentanalysisPrevReportTab=$$.contentanalysisCurrentReportTab;$$.contentanalysisCurrentReportTab=theTab},contentanalysis_inline_analysis:function(){Drupal.settings.contentanalysis.display_dialog=0;Drupal.settings.contentanalysis.display_inline=1;$("#contentanalysis-buttons").after('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">'+Drupal.t("Analyzing...")+
"</div></div>");$$.contentanalysis_analyze()},contentanalysis_dialog_analysis:function(){Drupal.settings.contentanalysis.display_dialog=1;Drupal.settings.contentanalysis.display_inline=0;$$.contentanalysis_analyze()},contentanalysis_full_analysis:function(){Drupal.settings.contentanalysis.display_dialog=1;Drupal.settings.contentanalysis.display_inline=1;$$.contentanalysis_analyze()},contentanalysis_refresh_analysis:function(analyzer){Drupal.settings.contentanalysis.display_dialog=0;Drupal.settings.contentanalysis.display_inline=
1;$(".contentanalysis-refresh-link-"+analyzer).replaceWith('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');$$.contentanalysis_analyze(analyzer)},contentanalysis_analyze:function(analyzer_override){var data={"nid":-1,"node_type":-1,"source":-1,"analyzers":-1,"title":-1,"body":-1,"body_summary":-1,"page_title":-1,"meta_title":-1,"meta_keywords":-1,"meta_description":-1,"path_alias":-1,"path_pathauto":-1,"url":-1,"page":-1,"body_input_filter":-1,"hidden":-1,
"code":Drupal.settings.contentanalysis.code,"action":-1};if(analyzer_override)data.action="refresh";if($("#contentanalysis-page-analyzer-form").html()){data.source="admin-form";data.body=$("[name=input]").val();data.nid=$("[name=input_nid]").val();data.url=$("[name=input_url]").val();if(data.body=="")data.body=-1;if(data.nid=="")data.nid=-1;if(data.url=="")data.url=-1}else if($(".node-form").html()){data.source="node-edit-form";if(typeof tinyMCE=="object")tinyMCE.get("edit-body-und-0-value").hide();
var ckeditor=false;if($("#cke_edit-body-und-0-value").html()){$("#wysiwyg-toggle-edit-body-und-0-value").click();ckeditor=true}data.title=$("#edit-title").val();data.body=$("#edit-body-und-0-value").val();if($("#edit-body-und-0-summary").val()!=null)data.body_summary=$("#edit-body-und-0-summary").val();data.nid=Drupal.settings.contentanalysis.nid;data.node_type=Drupal.settings.contentanalysis.node_type;data.body_input_filter=$("select[name='body[und][0][format]'] option:selected").val();if($("#edit-page-title").val()!=
null)data.page_title=$("#edit-page-title").val();if($("#edit-metatags-title-value").val()!=null)data.meta_title=$("#edit-metatags-title-value").val();if($("#edit-metatags-keywords-value").val()!=null)data.meta_keywords=$("#edit-metatags-keywords-value").val();if($("#edit-metatags-description-value").val()!=null)data.meta_description=$("#edit-metatags-description-value").val();if($("#edit-path-alias").val()!=null){data.url=window.location.host+Drupal.settings.contentanalysis.base_path+$("#edit-path-alias").val();
data.path_alias=$("#edit-path-alias").val()}if($("input[name='path[pathauto]']:checked").val()!=null)data.path_pathauto=1;if(typeof tinyMCE=="object")tinyMCE.get("edit-body-und-0-value").show();if(ckeditor)$("#wysiwyg-toggle-edit-body-und-0-value").click()}else{data.source="page-link";data.page=$("html").html();data.url=window.location.href}if(Drupal.settings.contentanalysis.hidden!=null)data.hidden=Drupal.settings.contentanalysis.hidden;var analyzers_arr=new Array;if(analyzer_override){data.analyzers=
analyzer_override;analyzers_arr[0]=data.analyzers}else if($("#contentanalysis_analyzers_override input").val()!=null){data.analyzers=$("#contentanalysis_analyzers_override input").val();analyzers_arr[0]=data.analyzers}else{var i=0;$("#contentanalysis_analyzers .form-checkbox:checked").each(function(){var expr=new RegExp(/\[[^\]]+\]/);analyzers_arr[i]=expr.exec($(this).attr("name"))[0].replace("]","").replace("[","");i++});data.analyzers=analyzers_arr.join(",")}for(var i in analyzers_arr){var aid=
analyzers_arr[i];var module=Drupal.settings.contentanalysis.analyzer_modules[aid].module;if(eval("typeof "+module+'_contentanalysis_data == "function"')){d=eval(module+"_contentanalysis_data")(aid,data);for(var k in d)eval("data.ao_"+aid+"_"+k+' = "'+d[k]+'";')}}$("#contentanalysis-buttons").hide();$.ajax({type:"POST",url:Drupal.settings.contentanalysis.analyze_callback,data:data,dataType:"json",success:function(data,textStatus){analyzers_arr=data.inputs["analyzers"].split(",");if(Drupal.settings.contentanalysis.display_dialog==
1){$("#analysis-modal").append(data.main["output"]);$("#analysis-modal .progress").remove();$$.contentanalysis_contentanalysisui()}if(Drupal.settings.contentanalysis.display_inline==1){if(data.inputs["action"]=="refresh")for(i in analyzers_arr){aid=analyzers_arr[i];$(".contentanalysis-report-"+aid+"-page_title").replaceWith(data.page_title["output"]);$(".contentanalysis-report-"+aid+"-body").replaceWith(data.body["output"]);$(".contentanalysis-report-"+aid+"-meta_description").replaceWith(data.meta_description["output"]);
$(".contentanalysis-report-"+aid+"-meta_keywords").replaceWith(data.meta_keywords["output"])}else{var show_title=true;if($(".form-item-metatags-title-value").length>0){$(".form-item-metatags-title-value > .contentanalysis_section_analysis").remove();$(".form-item-metatags-title-value").append(data.page_title["output"]);if($("#edit-metatags-title-value").val()!=null){var meta_title=$("#edit-metatags-title-value").val();if(meta_title.indexOf("[node:title]")==-1);}}if(show_title){$(".form-item-title > .contentanalysis_section_analysis").remove();
$(".form-item-title").append(data.page_title["output"])}$("#edit-body > .contentanalysis_section_analysis").remove();$("#edit-body").append(data.body["output"]);if($(".form-item-metatags-description-value").length>0&&data.meta_description!=null){$(".form-item-metatags-description-value > .contentanalysis_section_analysis").remove();$(".form-item-metatags-description-value").append(data.meta_description["output"])}if($(".form-item-metatags-keywords-value").length>0&&data.meta_keywords!=null){$(".form-item-metatags-keywords-value > .contentanalysis_section_analysis").remove();
$(".form-item-metatags-keywords-value").append(data.meta_keywords["output"])}}for(var i in analyzers_arr){var aid=analyzers_arr[i];h='<a href="#" class="contentanalysis-refresh-link-'+aid+'" onclick="contentanalysis.contentanalysis_refresh_analysis(\''+aid+"'); return false;\">";h+='<img src="'+Drupal.settings.contentanalysis.path_to_module+'/icons/refresh.png" alt="refresh" />';h+="</a>";$(".contentanalysis-report-"+aid+" label").append(h)}}for(var i in analyzers_arr){var aid=analyzers_arr[i];var module=
Drupal.settings.contentanalysis.analyzer_modules[aid].module;if(eval("typeof "+module+'_contentanalysis_analysis_success == "function"'))eval(module+"_contentanalysis_analysis_success")(aid,data)}if(typeof Drupal.behaviors.collapse=="function")Drupal.behaviors.collapse();$(".ahah-progress-throbber").remove();$("#contentanalysis-buttons").show()},error:function(xhr,status){alert(xhr.responseText.toString());$(".ahah-progress-throbber").remove();$("#contentanalysis-buttons").show()}});return false}});
Drupal.behaviors.contentanalysisui={attach:function(context,settings){$$.init()}};Sliders={};Sliders.changeHandle=function(e,ui){var id=jQuery(ui.handle).parents("div.slider-widget-container").attr("id");if(typeof ui.values!="undefined")jQuery.each(ui.values,function(i,val){jQuery("#"+id+"_value_"+i).val(val);jQuery("#"+id+"_nr_"+i).text(val)});else{jQuery("#"+id+"_value_0").val(ui.value);jQuery("#"+id+"_nr_0").text(ui.value)}}})(jQuery,contentanalysis);;
(function($){Drupal.progressBar=function(id,updateCallback,method,errorCallback){var pb=this;this.id=id;this.method=method||"GET";this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$('<div class="progress" aria-live="polite"></div>').attr("id",id);this.element.html('<div class="bar"><div class="filled"></div></div>'+'<div class="percentage"></div>'+'<div class="message">&nbsp;</div>')};Drupal.progressBar.prototype.setProgress=function(percentage,message){if(percentage>=
0&&percentage<=100){$("div.filled",this.element).css("width",percentage+"%");$("div.percentage",this.element).html(percentage+"%")}$("div.message",this.element).html(message);if(this.updateCallback)this.updateCallback(percentage,message,this)};Drupal.progressBar.prototype.startMonitoring=function(uri,delay){this.delay=delay;this.uri=uri;this.sendPing()};Drupal.progressBar.prototype.stopMonitoring=function(){clearTimeout(this.timer);this.uri=null};Drupal.progressBar.prototype.sendPing=function(){if(this.timer)clearTimeout(this.timer);
if(this.uri){var pb=this;$.ajax({type:this.method,url:this.uri,data:"",dataType:"json",success:function(progress){if(progress.status==0){pb.displayError(progress.data);return}pb.setProgress(progress.percentage,progress.message);pb.timer=setTimeout(function(){pb.sendPing()},pb.delay)},error:function(xmlhttp){pb.displayError(Drupal.ajaxError(xmlhttp,pb.uri))}})}};Drupal.progressBar.prototype.displayError=function(string){var error=$('<div class="messages error"></div>').html(string);$(this.element).before(error).hide();
if(this.errorCallback)this.errorCallback(this)}})(jQuery);;
(function($){Drupal.CTools=Drupal.CTools||{};Drupal.CTools.Modal=Drupal.CTools.Modal||{};Drupal.CTools.Modal.show=function(choice){var opts={};if(choice&&typeof choice=="string"&&Drupal.settings[choice])$.extend(true,opts,Drupal.settings[choice]);else if(choice)$.extend(true,opts,choice);var defaults={modalTheme:"CToolsModalDialog",throbberTheme:"CToolsModalThrobber",animation:"show",animationSpeed:"fast",modalSize:{type:"scale",width:.8,height:.8,addWidth:0,addHeight:0,contentRight:25,contentBottom:45},
modalOptions:{opacity:.55,background:"#fff"}};var settings={};$.extend(true,settings,defaults,Drupal.settings.CToolsModal,opts);if(Drupal.CTools.Modal.currentSettings&&Drupal.CTools.Modal.currentSettings!=settings){Drupal.CTools.Modal.modal.remove();Drupal.CTools.Modal.modal=null}Drupal.CTools.Modal.currentSettings=settings;var resize=function(e){var context=e?document:Drupal.CTools.Modal.modal;if(Drupal.CTools.Modal.currentSettings.modalSize.type=="scale"){var width=$(window).width()*Drupal.CTools.Modal.currentSettings.modalSize.width;
var height=$(window).height()*Drupal.CTools.Modal.currentSettings.modalSize.height}else{var width=Drupal.CTools.Modal.currentSettings.modalSize.width;var height=Drupal.CTools.Modal.currentSettings.modalSize.height}$("div.ctools-modal-content",context).css({"width":width+Drupal.CTools.Modal.currentSettings.modalSize.addWidth+"px","height":height+Drupal.CTools.Modal.currentSettings.modalSize.addHeight+"px"});$("div.ctools-modal-content .modal-content",context).css({"width":width-Drupal.CTools.Modal.currentSettings.modalSize.contentRight+
"px","height":height-Drupal.CTools.Modal.currentSettings.modalSize.contentBottom+"px"})};if(!Drupal.CTools.Modal.modal){Drupal.CTools.Modal.modal=$(Drupal.theme(settings.modalTheme));if(settings.modalSize.type=="scale")$(window).bind("resize",resize)}resize();$("span.modal-title",Drupal.CTools.Modal.modal).html(Drupal.CTools.Modal.currentSettings.loadingText);Drupal.CTools.Modal.modalContent(Drupal.CTools.Modal.modal,settings.modalOptions,settings.animation,settings.animationSpeed);$("#modalContent .modal-content").html(Drupal.theme(settings.throbberTheme));
$("#modalContent .modal-content").delegate("input.form-autocomplete","keyup",function(){$("#autocomplete").css("top",$(this).position().top+$(this).outerHeight()+$(this).offsetParent().filter("#modal-content").scrollTop())})};Drupal.CTools.Modal.dismiss=function(){if(Drupal.CTools.Modal.modal)Drupal.CTools.Modal.unmodalContent(Drupal.CTools.Modal.modal)};Drupal.theme.prototype.CToolsModalDialog=function(){var html="";html+='  <div id="ctools-modal">';html+='    <div class="ctools-modal-content">';
html+='      <div class="modal-header">';html+='        <a class="close" href="#">';html+=Drupal.CTools.Modal.currentSettings.closeText+Drupal.CTools.Modal.currentSettings.closeImage;html+="        </a>";html+='        <span id="modal-title" class="modal-title">&nbsp;</span>';html+="      </div>";html+='      <div id="modal-content" class="modal-content">';html+="      </div>";html+="    </div>";html+="  </div>";return html};Drupal.theme.prototype.CToolsModalThrobber=function(){var html="";html+=
'  <div id="modal-throbber">';html+='    <div class="modal-throbber-wrapper">';html+=Drupal.CTools.Modal.currentSettings.throbber;html+="    </div>";html+="  </div>";return html};Drupal.CTools.Modal.getSettings=function(object){var match=$(object).attr("class").match(/ctools-modal-(\S+)/);if(match)return match[1]};Drupal.CTools.Modal.clickAjaxCacheLink=function(){Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));return Drupal.CTools.AJAX.clickAJAXCacheLink.apply(this)};Drupal.CTools.Modal.clickAjaxLink=
function(){Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));return false};Drupal.CTools.Modal.submitAjaxForm=function(e){var $form=$(this);var url=$form.attr("action");setTimeout(function(){Drupal.CTools.AJAX.ajaxSubmit($form,url)},1);return false};Drupal.behaviors.ZZCToolsModal={attach:function(context){$("area.ctools-use-modal, a.ctools-use-modal",context).once("ctools-use-modal",function(){var $this=$(this);$this.click(Drupal.CTools.Modal.clickAjaxLink);var element_settings={};if($this.attr("href")){element_settings.url=
$this.attr("href");element_settings.event="click";element_settings.progress={type:"throbber"}}var base=$this.attr("href");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});$("input.ctools-use-modal, button.ctools-use-modal",context).once("ctools-use-modal",function(){var $this=$(this);$this.click(Drupal.CTools.Modal.clickAjaxLink);var button=this;var element_settings={};element_settings.url=Drupal.CTools.Modal.findURL(this);if(element_settings.url=="")element_settings.url=$(this).closest("form").attr("action");
element_settings.event="click";element_settings.setClick=true;var base=$this.attr("id");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings);$("."+$(button).attr("id")+"-url").change(function(){Drupal.ajax[base].options.url=Drupal.CTools.Modal.findURL(button)})});$("#modal-content form",context).once("ctools-use-modal",function(){var $this=$(this);var element_settings={};element_settings.url=$this.attr("action");element_settings.event="submit";element_settings.progress={"type":"throbber"};
var base=$this.attr("id");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings);Drupal.ajax[base].form=$this;$("input[type=submit], button",this).click(function(event){Drupal.ajax[base].element=this;this.form.clk=this;if(event.bubbles==undefined){$(this.form).trigger("submit");return false}})});$(".ctools-close-modal",context).once("ctools-close-modal").click(function(){Drupal.CTools.Modal.dismiss();return false})}};Drupal.CTools.Modal.modal_display=function(ajax,response,status){if($("#modalContent").length==
0)Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(ajax.element));$("#modal-title").html(response.title);$("#modal-content").html(response.output).scrollTop(0);var settings=response.settings||ajax.settings||Drupal.settings;Drupal.attachBehaviors("#modalContent",settings)};Drupal.CTools.Modal.modal_dismiss=function(command){Drupal.CTools.Modal.dismiss();$("link.ctools-temporary-css").remove()};Drupal.CTools.Modal.modal_loading=function(command){Drupal.CTools.Modal.modal_display({output:Drupal.theme(Drupal.CTools.Modal.currentSettings.throbberTheme),
title:Drupal.CTools.Modal.currentSettings.loadingText})};Drupal.CTools.Modal.findURL=function(item){var url="";var url_class="."+$(item).attr("id")+"-url";$(url_class).each(function(){var $this=$(this);if(url&&$this.val())url+="/";url+=$this.val()});return url};Drupal.CTools.Modal.modalContent=function(content,css,animation,speed){if(!animation)animation="show";else if(animation!="fadeIn"&&animation!="slideDown")animation="show";if(!speed)speed="fast";css=jQuery.extend({position:"absolute",left:"0px",
margin:"0px",background:"#000",opacity:".55"},css);css.filter="alpha(opacity="+100*css.opacity+")";content.hide();if($("#modalBackdrop"))$("#modalBackdrop").remove();if($("#modalContent"))$("#modalContent").remove();if(self.pageYOffset)var wt=self.pageYOffset;else if(document.documentElement&&document.documentElement.scrollTop)var wt=document.documentElement.scrollTop;else if(document.body)var wt=document.body.scrollTop;var docHeight=$(document).height()+50;var docWidth=$(document).width();var winHeight=
$(window).height();var winWidth=$(window).width();if(docHeight<winHeight)docHeight=winHeight;$("body").append('<div id="modalBackdrop" style="z-index: 1000; display: none;"></div><div id="modalContent" style="z-index: 1001; position: absolute;">'+$(content).html()+"</div>");modalEventHandler=function(event){target=null;if(event)target=event.target;else{event=window.event;target=event.srcElement}var parents=$(target).parents().get();for(var i=0;i<parents.length;++i){var position=$(parents[i]).css("position");
if(position=="absolute"||position=="fixed")return true}if($(target).filter("*:visible").parents("#modalContent").size())return true;if($("#modalContent"))$("#modalContent").get(0).focus();return false};$("body").bind("focus",modalEventHandler);$("body").bind("keypress",modalEventHandler);var modalContent=$("#modalContent").css("top","-1000px");var mdcTop=wt+winHeight/2-modalContent.outerHeight()/2;var mdcLeft=winWidth/2-modalContent.outerWidth()/2;$("#modalBackdrop").css(css).css("top",0).css("height",
docHeight+"px").css("width",docWidth+"px").show();modalContent.css({top:mdcTop+"px",left:mdcLeft+"px"}).hide()[animation](speed);modalContentClose=function(){close();return false};$(".close").bind("click",modalContentClose);modalEventEscapeCloseHandler=function(event){if(event.keyCode==27){close();return false}};$(document).bind("keydown",modalEventEscapeCloseHandler);function close(){$(window).unbind("resize",modalContentResize);$("body").unbind("focus",modalEventHandler);$("body").unbind("keypress",
modalEventHandler);$(".close").unbind("click",modalContentClose);$("body").unbind("keypress",modalEventEscapeCloseHandler);$(document).trigger("CToolsDetachBehaviors",$("#modalContent"));if(animation=="fadeIn")animation="fadeOut";if(animation=="slideDown")animation="slideUp";if(animation=="show")animation="hide";modalContent.hide()[animation](speed);$("#modalContent").remove();$("#modalBackdrop").remove()}modalContentResize=function(){var docHeight=$(document).height();var docWidth=$(document).width();
var winHeight=$(window).height();var winWidth=$(window).width();if(docHeight<winHeight)docHeight=winHeight;var modalContent=$("#modalContent");var mdcTop=winHeight/2-modalContent.outerHeight()/2;var mdcLeft=winWidth/2-modalContent.outerWidth()/2;$("#modalBackdrop").css("height",docHeight+"px").css("width",docWidth+"px").show();modalContent.css("top",mdcTop+"px").css("left",mdcLeft+"px").show()};$(window).bind("resize",modalContentResize);$("#modalContent").focus()};Drupal.CTools.Modal.unmodalContent=
function(content,animation,speed){if(!animation)var animation="show";else if(animation!="fadeOut"&&animation!="slideUp")animation="show";if(!speed)var speed="fast";$(window).unbind("resize",modalContentResize);$("body").unbind("focus",modalEventHandler);$("body").unbind("keypress",modalEventHandler);$(".close").unbind("click",modalContentClose);$(document).trigger("CToolsDetachBehaviors",$("#modalContent"));content.each(function(){if(animation=="fade")$("#modalContent").fadeOut(speed,function(){$("#modalBackdrop").fadeOut(speed,
function(){$(this).remove()});$(this).remove()});else if(animation=="slide")$("#modalContent").slideUp(speed,function(){$("#modalBackdrop").slideUp(speed,function(){$(this).remove()});$(this).remove()});else{$("#modalContent").remove();$("#modalBackdrop").remove()}})};$(function(){Drupal.ajax.prototype.commands.modal_display=Drupal.CTools.Modal.modal_display;Drupal.ajax.prototype.commands.modal_dismiss=Drupal.CTools.Modal.modal_dismiss})})(jQuery);;
(function($){Drupal.CTools=Drupal.CTools||{};Drupal.CTools.AJAX=Drupal.CTools.AJAX||{};Drupal.CTools.AJAX.warmCache=function(){$this=$(this);var old_url=$this.attr("href");if($this.hasClass("ctools-fetching")||Drupal.CTools.AJAX.commandCache[old_url])return false;var $objects=$('a[href="'+old_url+'"]');$objects.addClass("ctools-fetching");try{url=old_url.replace(/\/nojs(\/|$)/g,"/ajax$1");$.ajax({type:"POST",url:url,data:{"js":1,"ctools_ajax":1},global:true,success:function(data){Drupal.CTools.AJAX.commandCache[old_url]=
data;$objects.addClass("ctools-cache-warmed").trigger("ctools-cache-warm",[data])},complete:function(){$objects.removeClass("ctools-fetching")},dataType:"json"})}catch(err){$objects.removeClass("ctools-fetching");return false}return false};Drupal.CTools.AJAX.clickAJAXCacheLink=function(){$this=$(this);if($this.hasClass("ctools-fetching")){$this.bind("ctools-cache-warm",function(event,data){Drupal.CTools.AJAX.respond(data)});return false}else if($this.hasClass("ctools-cache-warmed")&&Drupal.CTools.AJAX.commandCache[$this.attr("href")]){Drupal.CTools.AJAX.respond(Drupal.CTools.AJAX.commandCache[$this.attr("href")]);
return false}else return Drupal.CTools.AJAX.clickAJAXLink.apply(this)};Drupal.CTools.AJAX.findURL=function(item){var url="";var url_class="."+$(item).attr("id")+"-url";$(url_class).each(function(){var $this=$(this);if(url&&$this.val())url+="/";url+=$this.val()});return url};$(function(){Drupal.ajax.prototype.commands.attr=function(ajax,data,status){$(data.selector).attr(data.name,data.value)};Drupal.ajax.prototype.commands.redirect=function(ajax,data,status){if(data.delay>0)setTimeout(function(){location.href=
data.url},data.delay);else location.href=data.url};Drupal.ajax.prototype.commands.reload=function(ajax,data,status){location.reload()};Drupal.ajax.prototype.commands.submit=function(ajax,data,status){$(data.selector).submit()}})})(jQuery);;
var alchemy_contentanalysis_contentanalysis_data=function(){var data=new Array;var types=new Array;var i=0;jQuery("#alchemy_contentanalysis_types .form-checkbox:checked").each(function(){types[i]=jQuery(this).attr("value");i++});data["types"]=types.join(",");data["usecache"]=jQuery("#edit-alchemy-alchemy-usecache").is(":checked")?data["usecache"]=1:data["usecache"]=0;return data};;
var contentoptimizer_contentanalysis_data=function(aid){data=new Array;data["keyword"]=document.getElementById("edit-seo-keyword").value;return data};;

var kwresearch = kwresearch || {};

(function ($, $$) {
	$.extend($$, {
		kwresearch_keyword_data: {},
		
		init: function() {
			$$.kwresearch_init();
		},
		
		kwresearch_init: function () {
		  var report_vocabs = Drupal.settings.kwresearch.tax_report_vocabs;
		  for(var vid in report_vocabs) {
			if (report_vocabs[vid] > 0 && ($('.kwresearch-refresh-link-' + vid).length == 0)) {
		      h = '<a href="#" class="kwresearch.kwresearch-refresh-link-' + vid + '" onclick="kwresearch.kwresearch_refresh_tax_report(\'' + vid + '\'); return false;" title="refresh report">';
		      h += '<img src="' + Drupal.settings.kwresearch.path_to_module + '/icons/refresh.png" alt="refresh report" />';
		      h += '</a>';
		      $('.kwresearch-tax-report-' + vid + ' label').append(h);
			}
		  } 
		  $$.kwresearch_process_keywords();
		},
		
		kwresearch_get_keyword_list: function(type) {
		  var value = '';
		  var keywords = new Array();
		  
		  if (type == 'vocab') {
		    if (Drupal.settings.kwresearch.keyword_tag_vocabulary) {    
		      if ($('#edit-taxonomy-tags-' + Drupal.settings.kwresearch.keyword_tag_vocabulary).val() != null) {
		        value = $('#edit-taxonomy-tags-' + Drupal.settings.kwresearch.keyword_tag_vocabulary).val();
		      } 
		    }    
		  }
		  else if (type == 'mlt') {
		    if ($('#edit-morelikethis-terms').val() != null) {
		      value = $('#edit-morelikethis-terms').val();  
		    }
		  }
		  else if (type == 'meta_keywords') {
		    if ($('#edit-nodewords-keywords-value').val() != null) {
		      value = $('#edit-nodewords-keywords-value').val();
		    }
		  }
		  
		  keywords = value.split(',');  
		  for(var i in keywords) {
		    keywords[i] = jQuery.trim(keywords[i].toLowerCase());
		  }
		  return keywords;
		},
		
		// Implementation of hook_contentanalysis_analysis_success
		kwresearch_contentanalysis_analysis_success: function(aid, data) {	
			$$.kwresearch_init();	
		},

		kwresearch_in_array: function(needle, haystack) {
			for(var i = 0; i < haystack.length; i++) {
				if (haystack[i] == needle) {
					return true;
				}
			}
			return false;
		},

		kwresearch_process_keywords: function() {
		//alert('hi');
		  $('.kwresearch_keyword:not(.processed)').each( function(index) {
		    keyword = $(this).text().toLowerCase();
		    str = $$.kwresearch_get_buttons(keyword);
		    
		    $(this).addClass('processed');
		    $(this).append(str);
		    $('.kwresearch_actions').hide();
		    $(this).mouseover( function() {
		      $(this).addClass('active');
		      var tools = $(this).find('.kwresearch_actions');
		      var pos = $(this).position(); 
		      var left = pos.left; 
		      var top = pos.top;
		      var topOffset = $(this).height();
		      var xTip = (left-0)+"px";  
		      //var yTip = (0-topOffset+top)+"px";  
		      var yTip = (0+top)+"px";  
		      tools.css({'top' : yTip, 'left' : xTip});  
		      tools.show();
		      
		    });
		    $(this).mouseout( function() {
		      var tools = $(this).find('.kwresearch_actions');
		      $(this).removeClass('active');
		      tools.hide();
		    });
		  });
		},

		kwresearch_get_buttons: function(keyword) {
		    str = '<div class="kwresearch_actions">';
		    title = Drupal.t('Keyword report');
		    str += '<a href="#" onclick="kwresearch.kwresearch_launch_report(\'' + keyword + '\'); return false;" title="' + title + '" class="kwresearch-tool-button">';
		    str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/report.png" title="' + title + '" />';
		    str += '</a>';

		    str += $$.kwresearch_get_toggle_button(keyword, 'sitekw');
		    str += $$.kwresearch_get_toggle_button(keyword, 'siteops');
		    str += $$.kwresearch_get_toggle_button(keyword, 'pagekw');
		    str += $$.kwresearch_get_toggle_button(keyword, 'vocab');
		    str += $$.kwresearch_get_toggle_button(keyword, 'mlt');
		    str += $$.kwresearch_get_toggle_button(keyword, 'meta_keywords');

		    str += '</div>';
		    return str;
		},

		kwresearch_get_toggle_button: function(keyword, type) {
		  var str = '';
		  var keyword_list = $$.kwresearch_get_keyword_list(type);
		  if (type == 'sitekw') {  
		    if (Drupal.settings.kwresearch.enable_site_keyword_tool) { // TODO add admin permission logic
		      keywordns = keyword.replace(/ /g,'-');
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to targeted site keyword list');
		      var d = Drupal.settings.kwresearch.site_keywords_data;
		      var activei = -1;
		      if ((d[keyword] != null) && (d[keyword]['priority'] >= 0)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from targeted site keyword list');
		        activei = d[keyword]['priority'];
		      }
		      str += '<div onmouseover="kwresearch.kwresearch_display_tool_site_keyword_menu(this, 1);" onmouseout="kwresearch.kwresearch_display_tool_site_keyword_menu(this, 0);" class="kwresearch-tool-group kwresearch-tool-button kwresearch-tool-button-site-keyword-' + keywordns + '">'
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_sitekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\'); return false;" title="' + title + '" >';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/site_keyword_' + img + '.png" title="' + title + '" />';
		      str += '</a>';      

		      str += '<ul class="kwresearch-tool-menu kwresearch-tool-menu-site-priority-' + keyword + '" style="display: none; left: 0px; top: 18px;">';
		      op = Drupal.settings.kwresearch.site_priority_options;
		      for ( var i in op ) {
		        active = '';
		        if (activei == i) {
		          active = 'active';
		        }
		        str += '<li class="' + active + '"><a href="#" onclick="kwresearch.kwresearch_toggle_sitekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\', ' + i + '); return false;">' + op[i] + '</a></li>';
		      }
		      str += '</ul>';  
		      str += '</div>';      
		    }
		  }
		  if (type == 'siteops') {
			var d = Drupal.settings.kwresearch.site_keywords_data;
			if ((Drupal.settings.kwresearch.form != null) && (Drupal.settings.kwresearch.form.substr(0, 5) == 'admin')) {
				var link = Drupal.settings.kwresearch.keyword_edit_path + d[keyword]['kid'];
				if (Drupal.settings.kwresearch.return_destination) {
			  		link += '?destination=' + Drupal.settings.kwresearch.return_destination;
			  	}
			  	var title = Drupal.t('Edit keyword');
			    str += '<a href="' + link + '" onclick="kwresearch.kwresearch_edit_keyword(' + d[keyword]['kid'] + '); return false;" title="' + title + '" class="kwresearch-tool-button">';
			    str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/keyword_edit.png" title="' + title + '" />';
			    str += '</a>';   	  
			}
		    if ((Drupal.settings.kwresearch.form != null) && (Drupal.settings.kwresearch.form == 'admin_keyword_list') && !(d[keyword]['page_count'] > 0)) {
		    	var title = Drupal.t('Delete keyword');
			    str += '<a href="#" onclick="kwresearch.kwresearch_delete_keyword(\'' + escape(keyword) + '\', ' + d[keyword]['kid'] + '); return false;" title="' + title + '" class="kwresearch-tool-button">';
			    str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/keyword_delete.png" title="' + title + '" />';
			    str += '</a>';   	  
		    }	  
		  }
		  if (type == 'pagekw') {  
		    if (Drupal.settings.kwresearch.enable_page_keyword_tool) { // TODO add admin permission logic
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to page keyword list');
		      var d = Drupal.settings.kwresearch.page_keywords_data;
		      var activei = 0;
		      if ((d[keyword] != null) && (d[keyword]['priority'] > 0)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from page keyword list');
		        activei = d[keyword]['priority'];
		      }
		      /*
		      str += '<a href="#" onclick="kwresearch_toggle_pagekw_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/page_keyword_' + img + '.png" title="' + title + '" />';
		      str += '</a>';
		      */      
		      str += '<div onmouseover="kwresearch.kwresearch_display_tool_page_keyword_menu(this, 1);" onmouseout="kwresearch.kwresearch_display_tool_page_keyword_menu(this, 0);" class="kwresearch-tool-group kwresearch-tool-button kwresearch-tool-button-page-keyword-' + keywordns + '">'
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_pagekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\'); return false;" title="' + title + '" >';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/page_keyword_' + img + '.png" title="' + title + '" />';
		      str += '</a>';      

		      str += '<ul class="kwresearch-tool-menu kwresearch-tool-menu-site-priority-' + keyword + '" style="display: none; left: 18px; top: 18px;">';
		      op = Drupal.settings.kwresearch.page_priority_options;
		      for ( var i in op ) {
		        active = '';
		        if (activei == i) {
		          active = 'active';
		        }
		        str += '<li class="' + active + '"><a href="#" onclick="kwresearch.kwresearch_toggle_pagekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\', ' + i + '); return false;">' + op[i] + '</a></li>';
		      }
		      str += '</ul>';    
		      str += '</div>';      
		      
		    }
		  }
		  else if (type == 'vocab') {
		    if (Drupal.settings.kwresearch.keyword_tag_vocabulary 
		      && ($('#edit-taxonomy-tags-' + Drupal.settings.kwresearch.keyword_tag_vocabulary).size() > 0)) {
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to keyword vocabulary');
		      
		      if ($$.kwresearch_in_array(keyword, keyword_list)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from keyword vocabulary');
		      }
		      keyword
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_vocab_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/vocab_' + img + '.png" title="' + title + '" />';
		      str += '</a>';       
		    }
		  }
		  else if (type == 'mlt') {  
		    if ($('#edit-morelikethis-terms').size() > 0) {
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to More Like This');
		      if ($$.kwresearch_in_array(keyword, keyword_list)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from More Like This');
		      }
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_mlt_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/mlt_' + img + '.png" title="' + title + '" />';
		      str += '</a>';
		    }
		  }
		  else if (type == 'meta_keywords') {  
		    if ($('#edit-nodewords-keywords-value').size() > 0) {
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to meta keywords');
		      if ($$.kwresearch_in_array(keyword, keyword_list)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword to meta keywords');
		      }
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_meta_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/metakeywords_' + img + '.png" title="' + title + '" />';
		      str += '</a>';
		    }
		  }
		  return str
		},

		kwresearch_display_tool_site_keyword_menu: function(theDiv, state) {
		  if (state == 1) {
		    $(theDiv).children('ul').show();
		  }
		  else {
		    $(theDiv).children('ul').hide();
		  }
		},

		kwresearch_display_tool_page_keyword_menu: function(theDiv, state) {
		  if (state == 1) {
		    $(theDiv).children('ul').show();
		  }
		  else {
		    $(theDiv).children('ul').hide();
		  }
		},

		kwresearch_launch_report: function(keyword) {
		  if (Drupal.settings.kwresearch.form.substr(0,5) == 'admin') {
		    window.location = Drupal.settings.kwresearch.analyze_path + keyword;
		    return false;
		  }
		  //alert(keyword);
		  $('#edit-kwresearch-keyword').val(keyword);
		  contentanalysis.contentanalysis_show_analyzer_tab(document.getElementById('contentanalysis-analyzer-tab-kwresearch'));
		  $$.kwresearch_analyze();
		  return false;
		},

		kwresearch_toggle_sitekw_keyword: function(keyword, add, keywordns, priority) {
		  var data = { 
		    'kwresearch_keyword': keyword,
		    'priority': -1,
		    'form': Drupal.settings.kwresearch.form
		  };
		  if (priority != null) {
		    data.priority = priority;
		    $('.kwresearch_actions').hide();
		  }
		  else if (add == 1) {
		    data.priority = 0;  
		  }  

		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.toggle_site_keyword_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
			  var keyword = String(data.data['keyword']).toString();
		      if (Drupal.settings.kwresearch.site_keywords_data[keyword] == null) {
		        Drupal.settings.kwresearch.site_keywords_data[keyword] = {
		          'priority': data.data['priority']
		        }
		      }
		      else {
		        Drupal.settings.kwresearch.site_keywords_data[keyword]['priority'] = data.data['priority'];
		      }
		//alert(Drupal.settings.kwresearch.site_keywords_data[data.data['keyword']]['priority']);
		      $('.kwresearch-tool-button-site-keyword-' + keywordns).replaceWith($$.kwresearch_get_toggle_button(keyword, 'sitekw'));
		      //$(theLink).replaceWith(kwresearch_get_toggle_button(keyword, 'sitekw'));
		      if (Drupal.settings.kwresearch.form == 'admin_keyword_list') {
		    	$('#kid-' + data.data['kid']).hide();
		    	$('#kid-' + data.data['kid'] + ' .site_priority').replaceWith('<td class="site_priority">' + data.data['priority_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .value').replaceWith('<td class="value">' + data.data['value_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .user').replaceWith('<td class="user">' + data.data['user_out'] + "</td>");        
		        $('#kid-' + data.data['kid']).fadeIn(100);
		      }
		      if (Drupal.settings.kwresearch.form == 'admin_keyword_stats') {
		      	$('#kid-' + data.data['kid']).hide();
		      	$('#kid-' + data.data['kid'] + ' .site_priority').replaceWith('<td class="site_priority">' + data.data['priority_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .value').replaceWith('<td class="value">' + data.data['value_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .user').replaceWith('<td class="user">' + data.data['user_out'] + "</td>");
		        $('#kid-' + data.data['kid']).fadeIn(100);
		      }
		      if (Drupal.settings.kwresearch.form == 'node_edit') {
			    	$('#kid-' + data.data['kid']).hide();
			    	$('#kid-' + data.data['kid'] + ' .site_priority').replaceWith('<td class="site_priority">' + data.data['priority_out'] + "</td>");
			        $('#kid-' + data.data['kid'] + ' .value').replaceWith('<td class="value">' + data.data['value_out'] + "</td>");
			        $('#kid-' + data.data['kid'] + ' .user').replaceWith('<td class="user">' + data.data['user_out'] + "</td>");        
			        $('#kid-' + data.data['kid']).fadeIn(100);
			      }
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {

		    }
		  });

		  return false;  
		},

		kwresearch_edit_keyword: function(kid) {
			var loc = Drupal.settings.kwresearch.keyword_edit_path + kid;
			if (Drupal.settings.kwresearch.return_destination) {
			  loc += '?destination=' + Drupal.settings.kwresearch.return_destination;
			}
			window.location	= loc;
			return false;
		},

		kwresearch_delete_keyword: function(keyword, kid) {
		  keyword = unescape(keyword);
		  if (Drupal.settings.kwresearch.site_keywords_data[keyword]['priority'] > 0) {
			if (!confirm(Drupal.t('This keyword has a site priority. Are you sure you want to delete it?'))) {
				return false;
			}
		  }
		  var data = { 
		    'kwresearch_keyword': keyword,
		    'kid': kid,
		    'form': Drupal.settings.kwresearch.form
		  };

		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.delete_site_keyword_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
			  	if (data.data['deleted']) {
		// TODO this does not work with multiple deletes
		    	  $('#kid-' + data.data['kid']).fadeOut(100);
		    	  $('#kid-' + data.data['kid']).remove();
			  	}
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {

		    }
		  });

		  return false;  
		},

		kwresearch_toggle_pagekw_keyword: function(keyword, add, keywordns, priority) {
		  
		  // update sync vocabulary
		  v = $('#edit-' + Drupal.settings.kwresearch.sync_vocab_field).val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-' + Drupal.settings.kwresearch.sync_vocab_field).val(nv);
		  
		  // do ajax call to store in database
		  var data = { 
		    'kwresearch_keyword': keyword,
		    'priority': 0,
		    'nid': Drupal.settings.contentanalysis.nid
		  };
		  if (priority != null) {
		    data.priority = priority;
		    $('.kwresearch_actions').hide();
		  }
		  else if (add) {    
		    data.priority = 50;  
		  } 

		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.toggle_page_keyword_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
		      if (Drupal.settings.kwresearch.page_keywords_data[data.data['keyword']] == null) {
		        Drupal.settings.kwresearch.page_keywords_data[data.data['keyword']] = {
		          'priority': data.data['priority']
		        }
		      }
		      else {
		        Drupal.settings.kwresearch.page_keywords_data[data.data['keyword']]['priority'] = data.data['priority'];
		      }
		      //$(theLink).replaceWith(kwresearch_get_toggle_button(keyword, 'pagekw'));
		      $('.kwresearch-tool-button-page-keyword-' + keywordns).replaceWith($$.kwresearch_get_toggle_button(data.data['keyword'], 'pagekw'));

		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {

		    }
		  });

		  return false;  
		},

		kwresearch_toggle_vocab_keyword: function(keyword, add, theLink) {
		  v = $('#edit-' + Drupal.settings.kwresearch.sync_vocab_field).val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-' + Drupal.settings.kwresearch.sync_vocab_field).val(nv);
		  $(theLink).replaceWith($$.kwresearch_get_toggle_button(keyword, 'vocab'));
		  return false;
		},

		kwresearch_toggle_mlt_keyword: function(keyword, add, theLink) {
		  v = $('#edit-morelikethis-terms').val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-morelikethis-terms').val(nv);
		  $(theLink).replaceWith($$.kwresearch_get_toggle_button(keyword, 'mlt'));
		  return false;
		},

		kwresearch_toggle_meta_keyword: function(keyword, add, theLink) {
		  v = $('#edit-metatags-keywords-value').val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-metatags-keywords-value').val(nv);
		  $(theLink).replaceWith($$.kwresearch_get_toggle_button(keyword, 'meta_keywords'));
		  return false;
		},

		kwresearch_remove_phrase_from_list: function(keyword, list) {
		  kws0 = list.split(',');  
		  kws1 = new Array();
		  j = 0;
		  for(var i in kws0) {    
		    k = jQuery.trim(kws0[i].toLowerCase());
		    if (k != keyword) {
		      kws1[j] = k;
		      j++;
		    }    
		  }  
		  return kws1.join(', ');
		},

		kwresearch_analyze: function() {
		  // if TinyMCE is used, turn off and on to save body text to textarea

		  var data = { 
		    'kwresearch_keyword': '',
		    'kwresearch_include_misspellings': 0,
		    'kwresearch_include_plurals': 0,
		    'kwresearch_adult_filter':$('#edit-kwresearch-adult-filter:selected').val(),
		    'kwresearch_nid': -1
		  };
		  data.kwresearch_keyword = $('#edit-kwresearch-keyword').val();
		  if ($('#edit-kwresearch-include-misspellings:checked').val() != null) {
		    data.kwresearch_include_misspellings = 1;
		  }
		  if ($('#edit-kwresearch-include-plurals:checked').val() != null) {
		    data.kwresearch_include_plurals = 1;
		  }
		  if (Drupal.settings.contentanalysis.nid > 0) {
		    data.kwresearch_nid = Drupal.settings.contentanalysis.nid;
		  }
		  
		  $('.kwresearch-result-block').hide();
		  var id = 'kwresearch-result-block-' + data.kwresearch_keyword.replace(/ /g, '-').toLowerCase();
		  var existing = $('#' + id);
		  if (existing.size() > 0) {
		    $(existing).show();
		  } else {
		    $('#kwresearch-submit-button').after('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">' + Drupal.t('Analyzing...') + '</div></div>');
		    $('#kwresearch-submit-button').hide();  
		    $.ajax({
		      type: 'POST',
		      url: Drupal.settings.kwresearch.analyze_callback,
		      data: data,
		      dataType: 'json',
		      success: function(data, textStatus) {
		        $('#kwresearch-report').append(data.report['output']);
		        $$.kwresearch_init();
		        $('.ahah-progress-throbber').remove();
		        $('#kwresearch-submit-button').show();
		        //$$.kwresearch_keyword_data = $$.kwresearch_keyword_data.concat(data.report['data']);
		        //alert(pop(data.report['data']));
		      },
		      error: function(XMLHttpRequest, textStatus, errorThrown) {
		        //alert("error " + XMLHttpRequest.toString());
		        $('.ahah-progress-throbber').remove();
		        $('#kwresearch-submit-button').show();
		      }
		    });
		  }
		  return false;	
		},
		
		kwresearch_refresh_tax_report: function(vid) {
		  $('.kwresearch-refresh-link-' + vid).replaceWith('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
		  var data = { 
		    'keywords': $('#edit-taxonomy-tags-' + vid + '-wrapper input').val(),
		    'vid': vid,
		  };
		 
		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.tax_report_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
			  vid = data.inputs['vid'];
			  $('#kwresearch-tax-report-'+vid).replaceWith(data.report['output']);
			  $('.ahah-progress-throbber').remove();
		      h = '<a href="#" class="kwresearch-refresh-link-' + vid + '" onclick="kwresearch.kwresearch_refresh_tax_report(\'' + vid + '\'); return false;" title="refresh report">';
		      h += '<img src="' + Drupal.settings.kwresearch.path_to_module + '/icons/refresh.png" alt="refresh report" />';
		      h += '</a>';
		      $('.kwresearch-tax-report-' + vid + ' label').append(h);      
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {
		      alert("error " + errorThrown.toString());
		      $('.ahah-progress-throbber').remove();
		      
		    }
		  });
		  return false;	
		}
	});	

	Drupal.behaviors.kwresearch_init = {
	  attach: function (context, settings) {
		$$.init();
	  }
	}

})(jQuery, kwresearch);

//Implementation of hook_contentanalysis_analysis_success
var kwresearch_contentanalysis_analysis_success = function(aid) {
  kwresearch.kwresearch_process_keywords();
};
(function($){Drupal.behaviors.textarea={attach:function(context,settings){$(".form-textarea-wrapper.resizable",context).once("textarea",function(){var staticOffset=null;var textarea=$(this).addClass("resizable-textarea").find("textarea");var grippie=$('<div class="grippie"></div>').mousedown(startDrag);grippie.insertAfter(textarea);function startDrag(e){staticOffset=textarea.height()-e.pageY;textarea.css("opacity",.25);$(document).mousemove(performDrag).mouseup(endDrag);return false}function performDrag(e){textarea.height(Math.max(32,
staticOffset+e.pageY)+"px");return false}function endDrag(e){$(document).unbind("mousemove",performDrag).unbind("mouseup",endDrag);textarea.css("opacity",1)}})}}})(jQuery);;
(function($){Drupal.behaviors.textSummary={attach:function(context,settings){$(".text-summary",context).once("text-summary",function(){var $widget=$(this).closest("div.field-type-text-with-summary");var $summaries=$widget.find("div.text-summary-wrapper");$summaries.once("text-summary-wrapper").each(function(index){var $summary=$(this);var $summaryLabel=$summary.find("label");var $full=$widget.find(".text-full").eq(index).closest(".form-item");var $fullLabel=$full.find("label");if($fullLabel.length==
0)$fullLabel=$("<label></label>").prependTo($full);var $link=$('<span class="field-edit-link">(<a class="link-edit-summary" href="#">'+Drupal.t("Hide summary")+"</a>)</span>").toggle(function(){$summary.hide();$(this).find("a").html(Drupal.t("Edit summary")).end().appendTo($fullLabel);return false},function(){$summary.show();$(this).find("a").html(Drupal.t("Hide summary")).end().appendTo($summaryLabel);return false}).appendTo($summaryLabel);if($(this).find(".text-summary").val()=="")$link.click();
return})})}}})(jQuery);;
(function($){Drupal.behaviors.filterGuidelines={attach:function(context){$(".filter-guidelines",context).once("filter-guidelines").find(":header").hide().closest(".filter-wrapper").find("select.filter-list").bind("change",function(){$(this).closest(".filter-wrapper").find(".filter-guidelines-item").hide().siblings(".filter-guidelines-"+this.value).show()}).change()}}})(jQuery);;
(function($){Drupal.toggleFieldset=function(fieldset){var $fieldset=$(fieldset);if($fieldset.is(".collapsed")){var $content=$("> .fieldset-wrapper",fieldset).hide();$fieldset.removeClass("collapsed").trigger({type:"collapsed",value:false}).find("> legend span.fieldset-legend-prefix").html(Drupal.t("Hide"));$content.slideDown({duration:"fast",easing:"linear",complete:function(){Drupal.collapseScrollIntoView(fieldset);fieldset.animating=false},step:function(){Drupal.collapseScrollIntoView(fieldset)}})}else{$fieldset.trigger({type:"collapsed",
value:true});$("> .fieldset-wrapper",fieldset).slideUp("fast",function(){$fieldset.addClass("collapsed").find("> legend span.fieldset-legend-prefix").html(Drupal.t("Show"));fieldset.animating=false})}};Drupal.collapseScrollIntoView=function(node){var h=document.documentElement.clientHeight||document.body.clientHeight||0;var offset=document.documentElement.scrollTop||document.body.scrollTop||0;var posY=$(node).offset().top;var fudge=55;if(posY+node.offsetHeight+fudge>h+offset)if(node.offsetHeight>
h)window.scrollTo(0,posY);else window.scrollTo(0,posY+node.offsetHeight-h+fudge)};Drupal.behaviors.collapse={attach:function(context,settings){$("fieldset.collapsible",context).once("collapse",function(){var $fieldset=$(this);var anchor=location.hash&&location.hash!="#"?", "+location.hash:"";if($fieldset.find(".error"+anchor).length)$fieldset.removeClass("collapsed");var summary=$('<span class="summary"></span>');$fieldset.bind("summaryUpdated",function(){var text=$.trim($fieldset.drupalGetSummary());
summary.html(text?" ("+text+")":"")}).trigger("summaryUpdated");var $legend=$("> legend .fieldset-legend",this);$('<span class="fieldset-legend-prefix element-invisible"></span>').append($fieldset.hasClass("collapsed")?Drupal.t("Show"):Drupal.t("Hide")).prependTo($legend).after(" ");var $link=$('<a class="fieldset-title" href="#"></a>').prepend($legend.contents()).appendTo($legend).click(function(){var fieldset=$fieldset.get(0);if(!fieldset.animating){fieldset.animating=true;Drupal.toggleFieldset(fieldset)}return false});
$legend.append(summary)})}}})(jQuery);;
(function($){Drupal.behaviors.menuFieldsetSummaries={attach:function(context){$("fieldset.menu-link-form",context).drupalSetSummary(function(context){if($(".form-item-menu-enabled input",context).is(":checked"))return Drupal.checkPlain($(".form-item-menu-link-title input",context).val());else return Drupal.t("Not in menu")})}};Drupal.behaviors.menuLinkAutomaticTitle={attach:function(context){$("fieldset.menu-link-form",context).each(function(){var $checkbox=$(".form-item-menu-enabled input",this);
var $link_title=$(".form-item-menu-link-title input",context);var $title=$(this).closest("form").find(".form-item-title input");if(!($checkbox.length&&$link_title.length&&$title.length))return;if($checkbox.is(":checked")&&$link_title.val().length)$link_title.data("menuLinkAutomaticTitleOveridden",true);$link_title.keyup(function(){$link_title.data("menuLinkAutomaticTitleOveridden",true)});$checkbox.change(function(){if($checkbox.is(":checked")){if(!$link_title.data("menuLinkAutomaticTitleOveridden"))$link_title.val($title.val())}else{$link_title.val("");
$link_title.removeData("menuLinkAutomaticTitleOveridden")}$checkbox.closest("fieldset.vertical-tabs-pane").trigger("summaryUpdated");$checkbox.trigger("formUpdated")});$title.keyup(function(){if(!$link_title.data("menuLinkAutomaticTitleOveridden")&&$checkbox.is(":checked")){$link_title.val($title.val());$link_title.val($title.val()).trigger("formUpdated")}})})}}})(jQuery);;
(function($){Drupal.behaviors.pathFieldsetSummaries={attach:function(context){$("fieldset.path-form",context).drupalSetSummary(function(context){var path=$(".form-item-path-alias input").val();var automatic=$(".form-item-path-pathauto input").attr("checked");if(automatic)return Drupal.t("Automatic alias");if(path)return Drupal.t("Alias: @alias",{"@alias":path});else return Drupal.t("No alias")})}}})(jQuery);;
(function($){Drupal.behaviors.metatagFieldsetSummaries={attach:function(context){$("fieldset.metatags-form",context).drupalSetSummary(function(context){var vals=[];$("input[type='text'], select, textarea",context).each(function(){var input_field=$(this).attr("name");if(input_field===undefined)return false;var default_name=input_field.replace(/\[value\]/,"[default]");var default_value=$("input[type='hidden'][name='"+default_name+"']",context);if(default_value.length&&default_value.val()==$(this).val())return true;
else if(!default_value.length&&!$(this).val().length)return true;var label=$("label[for='"+$(this).attr("id")+"']").text();vals.push(Drupal.t("@label: @value",{"@label":$.trim(label),"@value":Drupal.truncate($(this).val(),25)||Drupal.t("None")}))});if(vals.length===0)return Drupal.t("Using defaults");else return vals.join("<br />")})}};Drupal.truncate=function(str,limit){if(str.length>limit)return str.substr(0,limit)+"...";else return str}})(jQuery);;
(function($){Drupal.behaviors.xmlsitemapFieldsetSummaries={attach:function(context){$("fieldset#edit-xmlsitemap",context).drupalSetSummary(function(context){var vals=[];var status=$("#edit-xmlsitemap-status option:selected").text();vals.push(Drupal.t("Inclusion: @value",{"@value":status}));var priority=$("#edit-xmlsitemap-priority option:selected").text();vals.push(Drupal.t("Priority: @value",{"@value":priority}));return vals.join("<br />")})}}})(jQuery);;
(function($){Drupal.behaviors.commentFieldsetSummaries={attach:function(context){$("fieldset.comment-node-settings-form",context).drupalSetSummary(function(context){return Drupal.checkPlain($(".form-item-comment input:checked",context).next("label").text())});$("fieldset.comment-node-type-settings-form",context).drupalSetSummary(function(context){var vals=[];vals.push($(".form-item-comment select option:selected",context).text());var threading=$(".form-item-comment-default-mode input:checked",context).next("label").text();
if(threading)vals.push(threading);var number=$(".form-item-comment-default-per-page select option:selected",context).val();vals.push(Drupal.t("@number comments per page",{"@number":number}));return Drupal.checkPlain(vals.join(", "))})}}})(jQuery);;
(function($){Drupal.behaviors.autocomplete={attach:function(context,settings){var acdb=[];$("input.autocomplete",context).once("autocomplete",function(){var uri=this.value;if(!acdb[uri])acdb[uri]=new Drupal.ACDB(uri);var $input=$("#"+this.id.substr(0,this.id.length-13)).attr("autocomplete","OFF").attr("aria-autocomplete","list");$($input[0].form).submit(Drupal.autocompleteSubmit);$input.parent().attr("role","application").append($('<span class="element-invisible" aria-live="assertive"></span>').attr("id",
$input.attr("id")+"-autocomplete-aria-live"));new Drupal.jsAC($input,acdb[uri])})}};Drupal.autocompleteSubmit=function(){return $("#autocomplete").each(function(){this.owner.hidePopup()}).length==0};Drupal.jsAC=function($input,db){var ac=this;this.input=$input[0];this.ariaLive=$("#"+this.input.id+"-autocomplete-aria-live");this.db=db;$input.keydown(function(event){return ac.onkeydown(this,event)}).keyup(function(event){ac.onkeyup(this,event)}).blur(function(){ac.hidePopup();ac.db.cancel()})};Drupal.jsAC.prototype.onkeydown=
function(input,e){if(!e)e=window.event;switch(e.keyCode){case 40:this.selectDown();return false;case 38:this.selectUp();return false;default:return true}};Drupal.jsAC.prototype.onkeyup=function(input,e){if(!e)e=window.event;switch(e.keyCode){case 16:case 17:case 18:case 20:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:return true;case 9:case 13:case 27:this.hidePopup(e.keyCode);return true;default:if(input.value.length>0&&!input.readOnly)this.populatePopup();else this.hidePopup(e.keyCode);
return true}};Drupal.jsAC.prototype.select=function(node){this.input.value=$(node).data("autocompleteValue")};Drupal.jsAC.prototype.selectDown=function(){if(this.selected&&this.selected.nextSibling)this.highlight(this.selected.nextSibling);else if(this.popup){var lis=$("li",this.popup);if(lis.length>0)this.highlight(lis.get(0))}};Drupal.jsAC.prototype.selectUp=function(){if(this.selected&&this.selected.previousSibling)this.highlight(this.selected.previousSibling)};Drupal.jsAC.prototype.highlight=
function(node){if(this.selected)$(this.selected).removeClass("selected");$(node).addClass("selected");this.selected=node;$(this.ariaLive).html($(this.selected).html())};Drupal.jsAC.prototype.unhighlight=function(node){$(node).removeClass("selected");this.selected=false;$(this.ariaLive).empty()};Drupal.jsAC.prototype.hidePopup=function(keycode){if(this.selected&&(keycode&&keycode!=46&&keycode!=8&&keycode!=27||!keycode))this.input.value=$(this.selected).data("autocompleteValue");var popup=this.popup;
if(popup){this.popup=null;$(popup).fadeOut("fast",function(){$(popup).remove()})}this.selected=false;$(this.ariaLive).empty()};Drupal.jsAC.prototype.populatePopup=function(){var $input=$(this.input);var position=$input.position();if(this.popup)$(this.popup).remove();this.selected=false;this.popup=$('<div id="autocomplete"></div>')[0];this.popup.owner=this;$(this.popup).css({top:parseInt(position.top+this.input.offsetHeight,10)+"px",left:parseInt(position.left,10)+"px",width:$input.innerWidth()+"px",
display:"none"});$input.before(this.popup);this.db.owner=this;this.db.search(this.input.value)};Drupal.jsAC.prototype.found=function(matches){if(!this.input.value.length)return false;var ul=$("<ul></ul>");var ac=this;for(key in matches)$("<li></li>").html($("<div></div>").html(matches[key])).mousedown(function(){ac.select(this)}).mouseover(function(){ac.highlight(this)}).mouseout(function(){ac.unhighlight(this)}).data("autocompleteValue",key).appendTo(ul);if(this.popup)if(ul.children().length){$(this.popup).empty().append(ul).show();
$(this.ariaLive).html(Drupal.t("Autocomplete popup"))}else{$(this.popup).css({visibility:"hidden"});this.hidePopup()}};Drupal.jsAC.prototype.setStatus=function(status){switch(status){case "begin":$(this.input).addClass("throbbing");$(this.ariaLive).html(Drupal.t("Searching for matches..."));break;case "cancel":case "error":case "found":$(this.input).removeClass("throbbing");break}};Drupal.ACDB=function(uri){this.uri=uri;this.delay=300;this.cache={}};Drupal.ACDB.prototype.search=function(searchString){var db=
this;this.searchString=searchString;searchString=searchString.replace(/^\s+|\s+$/,"");if(searchString.length<=0||searchString.charAt(searchString.length-1)==",")return;if(this.cache[searchString])return this.owner.found(this.cache[searchString]);if(this.timer)clearTimeout(this.timer);this.timer=setTimeout(function(){db.owner.setStatus("begin");$.ajax({type:"GET",url:db.uri+"/"+Drupal.encodePath(searchString),dataType:"json",success:function(matches){if(typeof matches.status=="undefined"||matches.status!=
0){db.cache[searchString]=matches;if(db.searchString==searchString)db.owner.found(matches);db.owner.setStatus("found")}},error:function(xmlhttp){alert(Drupal.ajaxError(xmlhttp,db.uri))}})},this.delay)};Drupal.ACDB.prototype.cancel=function(){if(this.owner)this.owner.setStatus("cancel");if(this.timer)clearTimeout(this.timer);this.searchString=""}})(jQuery);;
(function($){Drupal.behaviors.nodeFieldsetSummaries={attach:function(context){$("fieldset.node-form-revision-information",context).drupalSetSummary(function(context){var revisionCheckbox=$(".form-item-revision input",context);if(revisionCheckbox.is(":checked")||!revisionCheckbox.length&&$(".form-item-log textarea",context).length)return Drupal.t("New revision");return Drupal.t("No revision")});$("fieldset.node-form-author",context).drupalSetSummary(function(context){var name=$(".form-item-name input",
context).val()||Drupal.settings.anonymous,date=$(".form-item-date input",context).val();return date?Drupal.t("By @name on @date",{"@name":name,"@date":date}):Drupal.t("By @name",{"@name":name})});$("fieldset.node-form-options",context).drupalSetSummary(function(context){var vals=[];$("input:checked",context).parent().each(function(){vals.push(Drupal.checkPlain($.trim($(this).text())))});if(!$(".form-item-status input",context).is(":checked"))vals.unshift(Drupal.t("Not published"));return vals.join(", ")})}}})(jQuery);;
