(function($){Drupal.behaviors.devel={attach:function(context,settings){$(".krumo-footnote .krumo-call").once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="'+settings.basePath+'misc/help.png"/>');var krumo_name=[];var krumo_type=[];function krumo_traverse(el){krumo_name.push($(el).html());krumo_type.push($(el).siblings("em").html().match(/\w*/)[0]);if($(el).closest(".krumo-nest").length>0)krumo_traverse($(el).closest(".krumo-nest").prev().find(".krumo-name"))}
$(".krumo-child > div:first-child",context).dblclick(function(e){if($(this).find("> .krumo-php-path").length>0)$(this).find("> .krumo-php-path").remove();else{krumo_traverse($(this).find("> a.krumo-name"));var krumo_path_string="";for(var i=krumo_name.length-1;i>=0;--i){if(krumo_name.length-1==i)krumo_path_string+="$"+krumo_name[i];if(typeof krumo_name[i-1]!=="undefined"){if(krumo_type[i]=="Array"){krumo_path_string+="[";if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+=
krumo_name[i-1];if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+="]"}if(krumo_type[i]=="Object")krumo_path_string+="->"+krumo_name[i-1]}}$(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">'+krumo_path_string+"</div>");krumo_name=[];krumo_type=[]}})}}})(jQuery);;
(function($){Drupal.behaviors.tableHeader={attach:function(context,settings){if(!$.support.positionFixed)return;$("table.sticky-enabled",context).once("tableheader",function(){$(this).data("drupal-tableheader",new Drupal.tableHeader(this))})}};Drupal.tableHeader=function(table){var self=this;this.originalTable=$(table);this.originalHeader=$(table).children("thead");this.originalHeaderCells=this.originalHeader.find("> tr > th");this.displayWeight=null;this.originalTable.bind("columnschange",function(e,
display){self.widthCalculated=self.displayWeight!==null&&self.displayWeight===display;self.displayWeight=display});this.stickyTable=$('<table class="sticky-header"/>').insertBefore(this.originalTable).css({position:"fixed",top:"0px"});this.stickyHeader=this.originalHeader.clone(true).hide().appendTo(this.stickyTable);this.stickyHeaderCells=this.stickyHeader.find("> tr > th");this.originalTable.addClass("sticky-table");$(window).bind("scroll.drupal-tableheader",$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("resize.drupal-tableheader",
{calculateWidth:true},$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("drupalDisplaceAnchor.drupal-tableheader",function(){window.scrollBy(0,-self.stickyTable.outerHeight())}).bind("drupalDisplaceFocus.drupal-tableheader",function(event){if(self.stickyVisible&&event.clientY<self.stickyOffsetTop+self.stickyTable.outerHeight()&&event.$target.closest("sticky-header").length===0)window.scrollBy(0,-self.stickyTable.outerHeight())}).triggerHandler("resize.drupal-tableheader");this.stickyHeader.show()};
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader=function(event){var self=this;var calculateWidth=event.data&&event.data.calculateWidth;this.stickyOffsetTop=Drupal.settings.tableHeaderOffset?eval(Drupal.settings.tableHeaderOffset+"()"):0;this.stickyTable.css("top",this.stickyOffsetTop+"px");var viewHeight=document.documentElement.scrollHeight||document.body.scrollHeight;if(calculateWidth||this.viewHeight!==viewHeight){this.viewHeight=viewHeight;this.vPosition=this.originalTable.offset().top-
4-this.stickyOffsetTop;this.hPosition=this.originalTable.offset().left;this.vLength=this.originalTable[0].clientHeight-100;calculateWidth=true}var hScroll=document.documentElement.scrollLeft||document.body.scrollLeft;var vOffset=(document.documentElement.scrollTop||document.body.scrollTop)-this.vPosition;this.stickyVisible=vOffset>0&&vOffset<this.vLength;this.stickyTable.css({left:-hScroll+this.hPosition+"px",visibility:this.stickyVisible?"visible":"hidden"});if(this.stickyVisible&&(calculateWidth||
!this.widthCalculated)){this.widthCalculated=true;var $that=null;var $stickyCell=null;var display=null;var cellWidth=null;for(var i=0,il=this.originalHeaderCells.length;i<il;i+=1){$that=$(this.originalHeaderCells[i]);$stickyCell=this.stickyHeaderCells.eq($that.index());display=$that.css("display");if(display!=="none"){cellWidth=$that.css("width");if(cellWidth==="auto")cellWidth=$that[0].clientWidth+"px";$stickyCell.css({"width":cellWidth,"display":display})}else $stickyCell.css("display","none")}this.stickyTable.css("width",
this.originalTable.outerWidth())}}})(jQuery);;
(function ($) {

Drupal.behaviors.metatagUIConfigListing = {
  attach: function (context) {
    // Hide elements to be visible if JavaScript is enabled.
    $('.js-show').show();

    // Make the leaf arrow clickable.
    $('.metatag-config-label').hover(function(){
      $(this).css({'cursor':'pointer'});
    })
    .click(function(){
      $(this).find('a.toggle-details', context).trigger('click');
    });

    // Show or hide the summary
    $('table.metatag-config-overview a.toggle-details', context).click(function(event) {
      $(this).parent('div').siblings('div.metatag-config-details').each(function() {
        if ($(this).hasClass('js-hide')) {
          $(this).slideDown('slow').removeClass('js-hide');
        }
        else {
          $(this).slideUp('slow').addClass('js-hide');
        }
      });

      // Change the expanded or collapsed state of the instance label.
      if ($(this).parent('div').hasClass('collapsed')) {
        $(this).parent('div').removeClass('collapsed').addClass('expanded');
      }
      else {
        $(this).parent('div').removeClass('expanded').addClass('collapsed');
      }

      // This event may be triggered by a parent element click - so we don't
      // want the click to bubble up otherwise we get recursive click events.
      event.stopPropagation();
    });
  }
}

})(jQuery);
;
