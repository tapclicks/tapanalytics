(function(e){e.fn.farbtastic=function(f){e.farbtastic(this,f);return this};e.farbtastic=function(f,l){f=e(f).get(0);return f.farbtastic||(f.farbtastic=new e._farbtastic(f,l))};e._farbtastic=function(f,l){var a=this;e(f).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');var k=e(".farbtastic",f);a.wheel=e(".wheel",f).get(0);a.radius=84;a.square=100;a.width=194;navigator.appVersion.match(/MSIE [0-6]\./)&&
e("*",k).each(function(){if(this.currentStyle.backgroundImage!="none"){var b=this.currentStyle.backgroundImage;b=this.currentStyle.backgroundImage.substring(5,b.length-2);e(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+b+"')"})}});a.linkTo=function(b){typeof a.callback=="object"&&e(a.callback).unbind("keyup",a.updateValue);a.color=null;if(typeof b=="function")a.callback=b;else if(typeof b=="object"||typeof b=="string"){a.callback=
e(b);a.callback.bind("keyup",a.updateValue);a.callback.get(0).value&&a.setColor(a.callback.get(0).value)}return this};a.updateValue=function(){this.value&&this.value!=a.color&&a.setColor(this.value)};a.setColor=function(b){var c=a.unpack(b);if(a.color!=b&&c){a.color=b;a.rgb=c;a.hsl=a.RGBToHSL(a.rgb);a.updateDisplay()}return this};a.setHSL=function(b){a.hsl=b;a.rgb=a.HSLToRGB(b);a.color=a.pack(a.rgb);a.updateDisplay();return this};a.widgetCoords=function(b){var c=e(a.wheel).offset();return{x:b.pageX-
c.left-a.width/2,y:b.pageY-c.top-a.width/2}};a.mousedown=function(b){if(!document.dragging){e(document).bind("mousemove",a.mousemove).bind("mouseup",a.mouseup);document.dragging=true}var c=a.widgetCoords(b);a.circleDrag=Math.max(Math.abs(c.x),Math.abs(c.y))*2>a.square;a.mousemove(b);return false};a.mousemove=function(b){var c=a.widgetCoords(b);if(a.circleDrag){b=Math.atan2(c.x,-c.y)/6.28;if(b<0)b+=1;a.setHSL([b,a.hsl[1],a.hsl[2]])}else{b=Math.max(0,Math.min(1,-(c.x/a.square)+0.5));c=Math.max(0,Math.min(1,
-(c.y/a.square)+0.5));a.setHSL([a.hsl[0],b,c])}return false};a.mouseup=function(){e(document).unbind("mousemove",a.mousemove);e(document).unbind("mouseup",a.mouseup);document.dragging=false};a.updateDisplay=function(){var b=a.hsl[0]*6.28;e(".h-marker",k).css({left:Math.round(Math.sin(b)*a.radius+a.width/2)+"px",top:Math.round(-Math.cos(b)*a.radius+a.width/2)+"px"});e(".sl-marker",k).css({left:Math.round(a.square*(0.5-a.hsl[1])+a.width/2)+"px",top:Math.round(a.square*(0.5-a.hsl[2])+a.width/2)+"px"});
e(".color",k).css("backgroundColor",a.pack(a.HSLToRGB([a.hsl[0],1,0.5])));if(typeof a.callback=="object"){e(a.callback).css({backgroundColor:a.color,color:a.hsl[2]>0.5?"#000":"#fff"});e(a.callback).each(function(){if(this.value&&this.value!=a.color)this.value=a.color})}else typeof a.callback=="function"&&a.callback.call(a,a.color)};a.pack=function(b){var c=Math.round(b[0]*255),d=Math.round(b[1]*255);b=Math.round(b[2]*255);return"#"+(c<16?"0":"")+c.toString(16)+(d<16?"0":"")+d.toString(16)+(b<16?"0":
"")+b.toString(16)};a.unpack=function(b){if(b.length==7)return[parseInt("0x"+b.substring(1,3))/255,parseInt("0x"+b.substring(3,5))/255,parseInt("0x"+b.substring(5,7))/255];else if(b.length==4)return[parseInt("0x"+b.substring(1,2))/15,parseInt("0x"+b.substring(2,3))/15,parseInt("0x"+b.substring(3,4))/15]};a.HSLToRGB=function(b){var c,d=b[0];c=b[1];b=b[2];c=b<=0.5?b*(c+1):b+c-b*c;b=b*2-c;return[this.hueToRGB(b,c,d+0.33333),this.hueToRGB(b,c,d),this.hueToRGB(b,c,d-0.33333)]};a.hueToRGB=function(b,c,
d){d=d<0?d+1:d>1?d-1:d;if(d*6<1)return b+(c-b)*d*6;if(d*2<1)return c;if(d*3<2)return b+(c-b)*(0.66666-d)*6;return b};a.RGBToHSL=function(b){var c,d,m,g,h=b[0],i=b[1],j=b[2];c=Math.min(h,Math.min(i,j));b=Math.max(h,Math.max(i,j));d=b-c;g=(c+b)/2;m=0;if(g>0&&g<1)m=d/(g<0.5?2*g:2-2*g);c=0;if(d>0){if(b==h&&b!=i)c+=(i-j)/d;if(b==i&&b!=j)c+=2+(j-h)/d;if(b==j&&b!=h)c+=4+(h-i)/d;c/=6}return[c,m,g]};e("*",k).mousedown(a.mousedown);a.setColor("#000000");l&&a.linkTo(l)}})(jQuery);
;/**/
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
Drupal.behaviors.contentanalysisui={attach:function(context,settings){$$.init()}};Sliders={};Sliders.changeHandle=function(e,ui){var id=jQuery(ui.handle).parents("div.slider-widget-container").attr("id");if(typeof ui.values!="undefined")jQuery.each(ui.values,function(i,val){jQuery("#"+id+"_value_"+i).val(val);jQuery("#"+id+"_nr_"+i).text(val)});else{jQuery("#"+id+"_value_0").val(ui.value);jQuery("#"+id+"_nr_0").text(ui.value)}}})(jQuery,contentanalysis);;/**/
var contentoptimizer_contentanalysis_data=function(aid){data=new Array;data["keyword"]=document.getElementById("edit-seo-keyword").value;return data};;/**/