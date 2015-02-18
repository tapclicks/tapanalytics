/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/sites/all/modules/checklistapi/checklistapi.js. */
(function($){"use strict";Drupal.behaviors.checklistapiUpdateProgressBar={attach:function(context){var total_items=$(':checkbox.checklistapi-item',context).size(),progress_bar=$('#checklistapi-checklist-form .progress .bar .filled',context),progress_percentage=$('#checklistapi-checklist-form .progress .percentage',context);$(':checkbox.checklistapi-item',context).change(function(){var num_items_checked=$(':checkbox.checklistapi-item:checked',context).size(),percent_complete=Math.round(num_items_checked/total_items*100),args={};progress_bar.css('width',percent_complete+'%');args['@complete']=num_items_checked;args['@total']=total_items;args['@percent']=percent_complete;progress_percentage.html(Drupal.t('@complete of @total (@percent%)',args))})}};Drupal.behaviors.checklistapiFieldsetSummaries={attach:function(context){$('#checklistapi-checklist-form .vertical-tabs-panes > fieldset',context).drupalSetSummary(function(context){var total=$(':checkbox.checklistapi-item',context).size(),args={};if(total){args['@complete']=$(':checkbox.checklistapi-item:checked',context).size();args['@total']=total;args['@percent']=Math.round(args['@complete']/args['@total']*100);return Drupal.t('@complete of @total (@percent%)',args)}})}};Drupal.behaviors.checklistapiCompactModeLink={attach:function(context){$('#checklistapi-checklist-form .compact-link a',context).click(function(){$(this).closest('#checklistapi-checklist-form').toggleClass('compact-mode');var is_compact_mode=$(this).closest('#checklistapi-checklist-form').hasClass('compact-mode');$(this).text(is_compact_mode?Drupal.t('Show item descriptions'):Drupal.t('Hide item descriptions')).attr('title',is_compact_mode?Drupal.t('Expand layout to include item descriptions.'):Drupal.t('Compress layout by hiding item descriptions.'));document.cookie='Drupal.visitor.checklistapi_compact_mode='+(is_compact_mode?1:0);return false})}};Drupal.behaviors.checklistapiPromptBeforeLeaving={getFormState:function(){return $('#checklistapi-checklist-form :checkbox.checklistapi-item').serializeArray().toString()},attach:function(){var beginningState=this.getFormState();$(window).bind('beforeunload',function(){var endingState=Drupal.behaviors.checklistapiPromptBeforeLeaving.getFormState();if(beginningState!==endingState)return Drupal.t('Your changes will be lost if you leave the page without saving.')});$('#checklistapi-checklist-form').submit(function(){$(window).unbind('beforeunload')});$('#checklistapi-checklist-form .clear-saved-progress').click(function(){$(window).unbind('beforeunload')})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/sites/all/modules/checklistapi/checklistapi.js. */
/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/sites/all/modules/seo_checklist/seo_checklist.js. */
(function($){"use strict";Drupal.behaviors.seo_checklist={attach:function(context){$('#checklistapi-checklist-form fieldset a',context).filter(function(){return this.href.indexOf('http')===0}).filter(function(){return this.hostname&&this.hostname!==location.hostname}).each(function(){$(this).attr('target',(this.hostname==='drupal.org')?'drupal_org':'_blank')})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/sites/all/modules/seo_checklist/seo_checklist.js. */
