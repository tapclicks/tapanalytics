/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/modules/user/user.js. */
(function($){Drupal.behaviors.password={attach:function(context,settings){var translate=settings.password;$('input.password-field',context).once('password',function(){var passwordInput=$(this),innerWrapper=$(this).parent(),outerWrapper=$(this).parent().parent();innerWrapper.addClass('password-parent');$('input.password-confirm',outerWrapper).parent().prepend('<div class="password-confirm">'+translate.confirmTitle+' <span></span></div>').addClass('confirm-parent');var confirmInput=$('input.password-confirm',outerWrapper),confirmResult=$('div.password-confirm',outerWrapper),confirmChild=$('span',confirmResult),passwordMeter='<div class="password-strength"><div class="password-strength-text" aria-live="assertive"></div><div class="password-strength-title">'+translate.strengthTitle+'</div><div class="password-indicator"><div class="indicator"></div></div></div>';$(confirmInput).parent().after('<div class="password-suggestions description"></div>');$(innerWrapper).prepend(passwordMeter);var passwordDescription=$('div.password-suggestions',outerWrapper).hide(),passwordCheck=function(){var result=Drupal.evaluatePasswordStrength(passwordInput.val(),settings.password);if(passwordDescription.html()!=result.message)passwordDescription.html(result.message);if(result.strength==100){passwordDescription.hide()}else passwordDescription.show();$(innerWrapper).find('.indicator').css('width',result.strength+'%');$(innerWrapper).find('.password-strength-text').html(result.indicatorText);passwordCheckMatch()},passwordCheckMatch=function(){if(confirmInput.val()){var success=passwordInput.val()===confirmInput.val();confirmResult.css({visibility:'visible'});if(this.confirmClass)confirmChild.removeClass(this.confirmClass);var confirmClass=success?'ok':'error';confirmChild.html(translate['confirm'+(success?'Success':'Failure')]).addClass(confirmClass);this.confirmClass=confirmClass}else confirmResult.css({visibility:'hidden'})};passwordInput.keyup(passwordCheck).focus(passwordCheck).blur(passwordCheck);confirmInput.keyup(passwordCheckMatch).blur(passwordCheckMatch)})}};Drupal.evaluatePasswordStrength=function(password,translate){var weaknesses=0,strength=100,msg=[],hasLowercase=/[a-z]+/.test(password),hasUppercase=/[A-Z]+/.test(password),hasNumbers=/[0-9]+/.test(password),hasPunctuation=/[^a-zA-Z0-9]+/.test(password),usernameBox=$('input.username'),username=(usernameBox.length>0)?usernameBox.val():translate.username;if(password.length<6){msg.push(translate.tooShort);strength-=((6-password.length)*5)+30};if(!hasLowercase){msg.push(translate.addLowerCase);weaknesses++};if(!hasUppercase){msg.push(translate.addUpperCase);weaknesses++};if(!hasNumbers){msg.push(translate.addNumbers);weaknesses++};if(!hasPunctuation){msg.push(translate.addPunctuation);weaknesses++};switch(weaknesses){case 1:strength-=12.5;break;case 2:strength-=25;break;case 3:strength-=40;break;case 4:strength-=40;break};if(password!==''&&password.toLowerCase()===username.toLowerCase()){msg.push(translate.sameAsUsername);strength=5};if(strength<60){indicatorText=translate.weak}else if(strength<70){indicatorText=translate.fair}else if(strength<80){indicatorText=translate.good}else if(strength<=100)indicatorText=translate.strong;msg=translate.hasWeaknesses+'<ul><li>'+msg.join('</li><li>')+'</li></ul>';return{strength:strength,message:msg,indicatorText:indicatorText}};Drupal.behaviors.fieldUserRegistration={attach:function(context,settings){var $checkbox=$('form#field-ui-field-edit-form input#edit-instance-settings-user-register-form');if($checkbox.length)$('input#edit-instance-required',context).once('user-register-form-checkbox',function(){$(this).bind('change',function(e){if($(this).attr('checked'))$checkbox.attr('checked',true)})})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/modules/user/user.js. */
/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/misc/collapse.js. */
(function($){Drupal.toggleFieldset=function(fieldset){var $fieldset=$(fieldset);if($fieldset.is('.collapsed')){var $content=$('> .fieldset-wrapper',fieldset).hide();$fieldset.removeClass('collapsed').trigger({type:'collapsed',value:false}).find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));$content.slideDown({duration:'fast',easing:'linear',complete:function(){Drupal.collapseScrollIntoView(fieldset);fieldset.animating=false},step:function(){Drupal.collapseScrollIntoView(fieldset)}})}else{$fieldset.trigger({type:'collapsed',value:true});$('> .fieldset-wrapper',fieldset).slideUp('fast',function(){$fieldset.addClass('collapsed').find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));fieldset.animating=false})}};Drupal.collapseScrollIntoView=function(node){var h=document.documentElement.clientHeight||document.body.clientHeight||0,offset=document.documentElement.scrollTop||document.body.scrollTop||0,posY=$(node).offset().top,fudge=55;if(posY+node.offsetHeight+fudge>h+offset)if(node.offsetHeight>h){window.scrollTo(0,posY)}else window.scrollTo(0,posY+node.offsetHeight-h+fudge)};Drupal.behaviors.collapse={attach:function(context,settings){$('fieldset.collapsible',context).once('collapse',function(){var $fieldset=$(this),anchor=location.hash&&location.hash!='#'?', '+location.hash:'';if($fieldset.find('.error'+anchor).length)$fieldset.removeClass('collapsed');var summary=$('<span class="summary"></span>');$fieldset.bind('summaryUpdated',function(){var text=$.trim($fieldset.drupalGetSummary());summary.html(text?' ('+text+')':'')}).trigger('summaryUpdated');var $legend=$('> legend .fieldset-legend',this);$('<span class="fieldset-legend-prefix element-invisible"></span>').append($fieldset.hasClass('collapsed')?Drupal.t('Show'):Drupal.t('Hide')).prependTo($legend).after(' ');var $link=$('<a class="fieldset-title" href="#"></a>').prepend($legend.contents()).appendTo($legend).click(function(){var fieldset=$fieldset.get(0);if(!fieldset.animating){fieldset.animating=true;Drupal.toggleFieldset(fieldset)};return false});$legend.append(summary)})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/misc/collapse.js. */
(function($){Drupal.behaviors.tableHeader={attach:function(context,settings){if(!$.support.positionFixed)return;$("table.sticky-enabled",context).once("tableheader",function(){$(this).data("drupal-tableheader",new Drupal.tableHeader(this))})}};Drupal.tableHeader=function(table){var self=this;this.originalTable=$(table);this.originalHeader=$(table).children("thead");this.originalHeaderCells=this.originalHeader.find("> tr > th");this.displayWeight=null;this.originalTable.bind("columnschange",function(e,
display){self.widthCalculated=self.displayWeight!==null&&self.displayWeight===display;self.displayWeight=display});this.stickyTable=$('<table class="sticky-header"/>').insertBefore(this.originalTable).css({position:"fixed",top:"0px"});this.stickyHeader=this.originalHeader.clone(true).hide().appendTo(this.stickyTable);this.stickyHeaderCells=this.stickyHeader.find("> tr > th");this.originalTable.addClass("sticky-table");$(window).bind("scroll.drupal-tableheader",$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("resize.drupal-tableheader",
{calculateWidth:true},$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("drupalDisplaceAnchor.drupal-tableheader",function(){window.scrollBy(0,-self.stickyTable.outerHeight())}).bind("drupalDisplaceFocus.drupal-tableheader",function(event){if(self.stickyVisible&&event.clientY<self.stickyOffsetTop+self.stickyTable.outerHeight()&&event.$target.closest("sticky-header").length===0)window.scrollBy(0,-self.stickyTable.outerHeight())}).triggerHandler("resize.drupal-tableheader");this.stickyHeader.show()};
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader=function(event){var self=this;var calculateWidth=event.data&&event.data.calculateWidth;this.stickyOffsetTop=Drupal.settings.tableHeaderOffset?eval(Drupal.settings.tableHeaderOffset+"()"):0;this.stickyTable.css("top",this.stickyOffsetTop+"px");var viewHeight=document.documentElement.scrollHeight||document.body.scrollHeight;if(calculateWidth||this.viewHeight!==viewHeight){this.viewHeight=viewHeight;this.vPosition=this.originalTable.offset().top-
4-this.stickyOffsetTop;this.hPosition=this.originalTable.offset().left;this.vLength=this.originalTable[0].clientHeight-100;calculateWidth=true}var hScroll=document.documentElement.scrollLeft||document.body.scrollLeft;var vOffset=(document.documentElement.scrollTop||document.body.scrollTop)-this.vPosition;this.stickyVisible=vOffset>0&&vOffset<this.vLength;this.stickyTable.css({left:-hScroll+this.hPosition+"px",visibility:this.stickyVisible?"visible":"hidden"});if(this.stickyVisible&&(calculateWidth||
!this.widthCalculated)){this.widthCalculated=true;var $that=null;var $stickyCell=null;var display=null;var cellWidth=null;for(var i=0,il=this.originalHeaderCells.length;i<il;i+=1){$that=$(this.originalHeaderCells[i]);$stickyCell=this.stickyHeaderCells.eq($that.index());display=$that.css("display");if(display!=="none"){cellWidth=$that.css("width");if(cellWidth==="auto")cellWidth=$that[0].clientWidth+"px";$stickyCell.css({"width":cellWidth,"display":display})}else $stickyCell.css("display","none")}this.stickyTable.css("width",
this.originalTable.outerWidth())}}})(jQuery);;/**/
/* Source and licensing information for the line(s) below can be found at http://www.tapanalytics.com/misc/textarea.js. */
(function($){Drupal.behaviors.textarea={attach:function(context,settings){$('.form-textarea-wrapper.resizable',context).once('textarea',function(){var staticOffset=null,textarea=$(this).addClass('resizable-textarea').find('textarea'),grippie=$('<div class="grippie"></div>').mousedown(startDrag);grippie.insertAfter(textarea)
function startDrag(e){staticOffset=textarea.height()-e.pageY;textarea.css('opacity',0.25);$(document).mousemove(performDrag).mouseup(endDrag);return false}
function performDrag(e){textarea.height(Math.max(32,staticOffset+e.pageY)+'px');return false}
function endDrag(e){$(document).unbind('mousemove',performDrag).unbind('mouseup',endDrag);textarea.css('opacity',1)}})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.tapanalytics.com/misc/textarea.js. */
