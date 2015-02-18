/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/misc/jquery.once.js. */
(function($){var cache={},uuid=0;$.fn.once=function(id,fn){if(typeof id!='string'){if(!(id in cache))cache[id]=++uuid;if(!fn)fn=id;id='jquery-once-'+cache[id]};var name=id+'-processed',elements=this.not('.'+name).addClass(name);return $.isFunction(fn)?elements.each(fn):elements};$.fn.removeOnce=function(id,fn){var name=id+'-processed',elements=this.filter('.'+name).removeClass(name);return $.isFunction(fn)?elements.each(fn):elements}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/misc/jquery.once.js. */
/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/misc/drupal.js. */
var Drupal=Drupal||{settings:{},behaviors:{},locale:{}};jQuery.noConflict();(function($){var jquery_init=$.fn.init;$.fn.init=function(selector,context,rootjQuery){if(selector&&typeof selector==='string'){var hash_position=selector.indexOf('#');if(hash_position>=0){var bracket_position=selector.indexOf('<');if(bracket_position>hash_position)throw'Syntax error, unrecognized expression: '+selector}};return jquery_init.call(this,selector,context,rootjQuery)};$.fn.init.prototype=jquery_init.prototype;Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||Drupal.settings;$.each(Drupal.behaviors,function(){if($.isFunction(this.attach))this.attach(context,settings)})};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||Drupal.settings;trigger=trigger||'unload';$.each(Drupal.behaviors,function(){if($.isFunction(this.detach))this.detach(context,settings,trigger)})};Drupal.checkPlain=function(str){var character,regex,replace={'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'};str=String(str);for(character in replace)if(replace.hasOwnProperty(character)){regex=new RegExp(character,'g');str=str.replace(regex,replace[character])};return str};Drupal.formatString=function(str,args){for(var key in args){switch(key.charAt(0)){case'@':args[key]=Drupal.checkPlain(args[key]);break;case'!':break;case'%':default:args[key]=Drupal.theme('placeholder',args[key]);break};str=str.replace(key,args[key])};return str};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(Drupal.locale.strings&&Drupal.locale.strings[options.context]&&Drupal.locale.strings[options.context][str])str=Drupal.locale.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str};Drupal.formatPlural=function(count,singular,plural,args,options){var args=args||{};args['@count']=count;var index=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(args['@count']):((args['@count']==1)?0:1);if(index==0){return Drupal.t(singular,args,options)}else if(index==1){return Drupal.t(plural,args,options)}else{args['@count['+index+']']=args['@count'];delete args['@count'];return Drupal.t(plural.replace('@count','@count['+index+']'),args,options)}};Drupal.theme=function(func){var args=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[func]||Drupal.theme.prototype[func]).apply(this,args)};Drupal.freezeHeight=function(){Drupal.unfreezeHeight();$('<div id="freeze-height"></div>').css({position:'absolute',top:'0px',left:'0px',width:'1px',height:$('body').css('height')}).appendTo('body')};Drupal.unfreezeHeight=function(){$('#freeze-height').remove()};Drupal.encodePath=function(item,uri){uri=uri||location.href;return encodeURIComponent(item).replace(/%2F/g,'/')};Drupal.getSelection=function(element){if(typeof element.selectionStart!='number'&&document.selection){var range1=document.selection.createRange(),range2=range1.duplicate();range2.moveToElementText(element);range2.setEndPoint('EndToEnd',range1);var start=range2.text.length-range1.text.length,end=start+range1.text.length;return{start:start,end:end}};return{start:element.selectionStart,end:element.selectionEnd}};Drupal.ajaxError=function(xmlhttp,uri){var statusCode,statusText,pathText,responseText,readyStateText,message;if(xmlhttp.status){statusCode="\n"+Drupal.t("An AJAX HTTP error occurred.")+"\n"+Drupal.t("HTTP Result Code: !status",{'!status':xmlhttp.status})}else statusCode="\n"+Drupal.t("An AJAX HTTP request terminated abnormally.");statusCode+="\n"+Drupal.t("Debugging information follows.");pathText="\n"+Drupal.t("Path: !uri",{'!uri':uri});statusText='';try{statusText="\n"+Drupal.t("StatusText: !statusText",{'!statusText':$.trim(xmlhttp.statusText)})}catch(e){};responseText='';try{responseText="\n"+Drupal.t("ResponseText: !responseText",{'!responseText':$.trim(xmlhttp.responseText)})}catch(e){};responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");responseText=responseText.replace(/[\n]+\s+/g,"\n");readyStateText=xmlhttp.status==0?("\n"+Drupal.t("ReadyState: !readyState",{'!readyState':xmlhttp.readyState})):"";message=statusCode+pathText+statusText+responseText+readyStateText;return message};$('html').addClass('js');document.cookie='has_js=1; path=/';$(function(){if(jQuery.support.positionFixed===undefined){var el=$('<div style="position:fixed; top:10px" />').appendTo(document.body);jQuery.support.positionFixed=el[0].offsetTop===10;el.remove()}});$(function(){Drupal.attachBehaviors(document,Drupal.settings)});Drupal.theme.prototype={placeholder:function(str){return'<em class="placeholder">'+Drupal.checkPlain(str)+'</em>'}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/misc/drupal.js. */
/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/sites/all/modules/contentanalysis/contentanalysis.js. */
var contentanalysis=contentanalysis||{};(function($,$$){$.extend($$,{contentanalysisPrevAnalyzerTab:'',contentanalysisPrevReportTab:'',contentanalysisCurrentAnalyzerTab:'',contentanalysisCurrentReportTab:'',contentanalysisReportActiveTab:{},init:function(){$$.contentanalysis_contentanalysisui()},contentanalysis_contentanalysisui:function(){if($('#modalContent div.analyzers h3.analyzer').size()>0){$$.contentanalysis_show_analyzer_tab($('div.analyzers h3.analyzer').get(0));$('div.analyzers h3.analyzer').mousedown(function(){$$.contentanalysis_show_analyzer_tab(this)});$('h3.contentanalysis-report-tab').mousedown(function(){$$.contentanalysis_show_report_tab(this)})}},contentanalysis_back:function(){$$.contentanalysis_show_analyzer_tab(contentanalysisPrevAnalyzerTab)},contentanalysis_show_analyzer_tab:function(theTab){$('div.analysis-results div.analyzer-analysis:eq('+$('.analyzers h3.analyzer').index(theTab)+')').children('.content-analysis-tab:first').addClass('active');$('div.analysis-results div.analyzer-analysis').hide();$('.analyzers h3.analyzer').removeClass('active');$(theTab).addClass('active');$('div.analysis-results div.analyzer-analysis:eq('+$('.analyzers h3.analyzer').index(theTab)+')').show();$('.content-analysis-results').hide();var id=$(theTab).attr('id'),e=id.split('-'),analyzer=e[3];if($$.contentanalysisReportActiveTab[analyzer]){$$.contentanalysis_show_report_tab($('#contentanalysis-report-tab-'+analyzer+'-'+$$.contentanalysisReportActiveTab[analyzer]))}else $$.contentanalysis_show_report_tab($('#contentanalysis-report-tab-'+analyzer+'-0'));$$.contentanalysisPrevAnalyzerTab=$$.contentanalysisCurrentAnalyzerTab;$$.contentanalysisCurrentAnalyzerTab=theTab},contentanalysis_show_report_tab:function(theTab){var id=$(theTab).attr('id'),e=id.split('-');$$.contentanalysisReportActiveTab[e[3]]=e[4];$('h3.contentanalysis-report-tab').removeClass('active');$(theTab).addClass('active');$('.contentanalysis-results-section').hide();var tabs=$("#contentanalysis-report-tabs-"+e[3]),pos=$("#contentanalysis-report-tabs-"+e[3]).position(),offset=$("#contentanalysis-report-tabs-"+e[3]).offset(),height=tabs.height(),top=(pos.top+height)+"px",left=(pos.left)+"px",sec_id=id.replace('tab','results'),result_id=sec_id.replace('-'+e[4],'');$('#'+result_id).css('top',top);$('#'+sec_id).show();$$.contentanalysisPrevReportTab=$$.contentanalysisCurrentReportTab;$$.contentanalysisCurrentReportTab=theTab},contentanalysis_inline_analysis:function(){Drupal.settings.contentanalysis.display_dialog=0;Drupal.settings.contentanalysis.display_inline=1;$('#contentanalysis-buttons').after('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">'+Drupal.t('Analyzing...')+'</div></div>');$$.contentanalysis_analyze()},contentanalysis_dialog_analysis:function(){Drupal.settings.contentanalysis.display_dialog=1;Drupal.settings.contentanalysis.display_inline=0;$$.contentanalysis_analyze()},contentanalysis_full_analysis:function(){Drupal.settings.contentanalysis.display_dialog=1;Drupal.settings.contentanalysis.display_inline=1;$$.contentanalysis_analyze()},contentanalysis_refresh_analysis:function(analyzer){Drupal.settings.contentanalysis.display_dialog=0;Drupal.settings.contentanalysis.display_inline=1;$('.contentanalysis-refresh-link-'+analyzer).replaceWith('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');$$.contentanalysis_analyze(analyzer)},contentanalysis_analyze:function(analyzer_override){var data={nid:-1,node_type:-1,source:-1,analyzers:-1,title:-1,body:-1,body_summary:-1,page_title:-1,meta_title:-1,meta_keywords:-1,meta_description:-1,path_alias:-1,path_pathauto:-1,url:-1,page:-1,body_input_filter:-1,hidden:-1,code:Drupal.settings.contentanalysis.code,action:-1};if(analyzer_override)data.action='refresh';if($('#contentanalysis-page-analyzer-form').html()){data.source='admin-form';data.body=$('[name=input]').val();data.nid=$('[name=input_nid]').val();data.url=$('[name=input_url]').val();if(data.body=='')data.body=-1;if(data.nid=='')data.nid=-1;if(data.url=='')data.url=-1}else if($('.node-form').html()){data.source='node-edit-form';if(typeof tinyMCE=='object')tinyMCE.get('edit-body-und-0-value').hide();var ckeditor=false;if($('#cke_edit-body-und-0-value').html()){$('#wysiwyg-toggle-edit-body-und-0-value').click();ckeditor=true};data.title=$('#edit-title').val();data.body=$('#edit-body-und-0-value').val();if($('#edit-body-und-0-summary').val()!=null)data.body_summary=$('#edit-body-und-0-summary').val();data.nid=Drupal.settings.contentanalysis.nid;data.node_type=Drupal.settings.contentanalysis.node_type;data.body_input_filter=$("select[name='body[und][0][format]'] option:selected").val();if($('#edit-page-title').val()!=null)data.page_title=$('#edit-page-title').val();if($('#edit-metatags-title-value').val()!=null)data.meta_title=$('#edit-metatags-title-value').val();if($('#edit-metatags-keywords-value').val()!=null)data.meta_keywords=$('#edit-metatags-keywords-value').val();if($('#edit-metatags-description-value').val()!=null)data.meta_description=$('#edit-metatags-description-value').val();if($('#edit-path-alias').val()!=null){data.url=window.location.host+Drupal.settings.contentanalysis.base_path+$('#edit-path-alias').val();data.path_alias=$('#edit-path-alias').val()};if($("input[name='path[pathauto]']:checked").val()!=null)data.path_pathauto=1;if(typeof tinyMCE=='object')tinyMCE.get('edit-body-und-0-value').show();if(ckeditor)$('#wysiwyg-toggle-edit-body-und-0-value').click()}else{data.source='page-link';data.page=$('html').html();data.url=window.location.href};if(Drupal.settings.contentanalysis.hidden!=null)data.hidden=Drupal.settings.contentanalysis.hidden;var analyzers_arr=new Array();if(analyzer_override){data.analyzers=analyzer_override;analyzers_arr[0]=data.analyzers}else if($('#contentanalysis_analyzers_override input').val()!=null){data.analyzers=$('#contentanalysis_analyzers_override input').val();analyzers_arr[0]=data.analyzers}else{var i=0;$('#contentanalysis_analyzers .form-checkbox:checked').each(function(){var expr=new RegExp(/\[[^\]]+\]/);analyzers_arr[i]=expr.exec($(this).attr('name'))[0].replace(']','').replace('[','');i++});data.analyzers=analyzers_arr.join(',')};for(var i in analyzers_arr){var aid=analyzers_arr[i],module=Drupal.settings.contentanalysis.analyzer_modules[aid].module;if(eval('typeof '+module+'_contentanalysis_data == "function"')){d=eval(module+'_contentanalysis_data')(aid,data);for(var k in d)eval('data.ao_'+aid+'_'+k+' = "'+d[k]+'";')}};$('#contentanalysis-buttons').hide();$.ajax({type:'POST',url:Drupal.settings.contentanalysis.analyze_callback,data:data,dataType:'json',success:function(data,textStatus){analyzers_arr=data.inputs['analyzers'].split(",");if(Drupal.settings.contentanalysis.display_dialog==1){$('#analysis-modal').append(data.main['output']);$('#analysis-modal .progress').remove();$$.contentanalysis_contentanalysisui()};if(Drupal.settings.contentanalysis.display_inline==1){if(data.inputs['action']=='refresh'){for(i in analyzers_arr){aid=analyzers_arr[i];$('.contentanalysis-report-'+aid+'-page_title').replaceWith(data.page_title['output']);$('.contentanalysis-report-'+aid+'-body').replaceWith(data.body['output']);$('.contentanalysis-report-'+aid+'-meta_description').replaceWith(data.meta_description['output']);$('.contentanalysis-report-'+aid+'-meta_keywords').replaceWith(data.meta_keywords['output'])}}else{var show_title=true;if($('.form-item-metatags-title-value').length>0){$('.form-item-metatags-title-value > .contentanalysis_section_analysis').remove();$('.form-item-metatags-title-value').append(data.page_title['output']);if($('#edit-metatags-title-value').val()!=null){var meta_title=$('#edit-metatags-title-value').val();if(meta_title.indexOf("[node:title]")==-1);}};if(show_title){$('.form-item-title > .contentanalysis_section_analysis').remove();$('.form-item-title').append(data.page_title['output'])};$('#edit-body > .contentanalysis_section_analysis').remove();$('#edit-body').append(data.body['output']);if(($('.form-item-metatags-description-value').length>0)&&data.meta_description!=null){$('.form-item-metatags-description-value > .contentanalysis_section_analysis').remove();$('.form-item-metatags-description-value').append(data.meta_description['output'])};if(($('.form-item-metatags-keywords-value').length>0)&&data.meta_keywords!=null){$('.form-item-metatags-keywords-value > .contentanalysis_section_analysis').remove();$('.form-item-metatags-keywords-value').append(data.meta_keywords['output'])}};for(var i in analyzers_arr){var aid=analyzers_arr[i];h='<a href="#" class="contentanalysis-refresh-link-'+aid+'" onclick="contentanalysis.contentanalysis_refresh_analysis(\''+aid+'\'); return false;">';h+='<img src="'+Drupal.settings.contentanalysis.path_to_module+'/icons/refresh.png" alt="refresh" />';h+='</a>';$('.contentanalysis-report-'+aid+' label').append(h)}};for(var i in analyzers_arr){var aid=analyzers_arr[i],module=Drupal.settings.contentanalysis.analyzer_modules[aid].module;if(eval('typeof '+module+'_contentanalysis_analysis_success == "function"'))eval(module+'_contentanalysis_analysis_success')(aid,data)};if(typeof Drupal.behaviors.collapse=='function')Drupal.behaviors.collapse();$('.ahah-progress-throbber').remove();$('#contentanalysis-buttons').show()},error:function(xhr,status){alert(xhr.responseText.toString());$('.ahah-progress-throbber').remove();$('#contentanalysis-buttons').show()}});return false}});Drupal.behaviors.contentanalysisui={attach:function(context,settings){$$.init()}};Sliders={};Sliders.changeHandle=function(e,ui){var id=jQuery(ui.handle).parents('div.slider-widget-container').attr('id');if(typeof(ui.values)!='undefined'){jQuery.each(ui.values,function(i,val){jQuery("#"+id+"_value_"+i).val(val);jQuery("#"+id+"_nr_"+i).text(val)})}else{jQuery("#"+id+"_value_0").val(ui.value);jQuery("#"+id+"_nr_0").text(ui.value)}}})(jQuery,contentanalysis);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/sites/all/modules/contentanalysis/contentanalysis.js. */
/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/sites/all/modules/contentoptimizer/contentoptimizer.js. */
var contentoptimizer_contentanalysis_data=function(aid){data=new Array();data.keyword=document.getElementById('edit-seo-keyword').value;return data};
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/sites/all/modules/contentoptimizer/contentoptimizer.js. */