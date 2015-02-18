(function($){Drupal.behaviors.devel={attach:function(context,settings){$(".krumo-footnote .krumo-call").once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="'+settings.basePath+'misc/help.png"/>');var krumo_name=[];var krumo_type=[];function krumo_traverse(el){krumo_name.push($(el).html());krumo_type.push($(el).siblings("em").html().match(/\w*/)[0]);if($(el).closest(".krumo-nest").length>0)krumo_traverse($(el).closest(".krumo-nest").prev().find(".krumo-name"))}
$(".krumo-child > div:first-child",context).dblclick(function(e){if($(this).find("> .krumo-php-path").length>0)$(this).find("> .krumo-php-path").remove();else{krumo_traverse($(this).find("> a.krumo-name"));var krumo_path_string="";for(var i=krumo_name.length-1;i>=0;--i){if(krumo_name.length-1==i)krumo_path_string+="$"+krumo_name[i];if(typeof krumo_name[i-1]!=="undefined"){if(krumo_type[i]=="Array"){krumo_path_string+="[";if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+=
krumo_name[i-1];if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+="]"}if(krumo_type[i]=="Object")krumo_path_string+="->"+krumo_name[i-1]}}$(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">'+krumo_path_string+"</div>");krumo_name=[];krumo_type=[]}})}}})(jQuery);;
(function ($) {
  "use strict";

  /**
   * Updates the progress bar as checkboxes are changed.
   */
  Drupal.behaviors.checklistapiUpdateProgressBar = {
    attach: function (context) {
      var total_items = $(':checkbox.checklistapi-item', context).size(),
        progress_bar = $('#checklistapi-checklist-form .progress .bar .filled', context),
        progress_percentage = $('#checklistapi-checklist-form .progress .percentage', context);
      $(':checkbox.checklistapi-item', context).change(function () {
        var num_items_checked = $(':checkbox.checklistapi-item:checked', context).size(),
          percent_complete = Math.round(num_items_checked / total_items * 100),
          args = {};
        progress_bar.css('width', percent_complete + '%');
        args['@complete'] = num_items_checked;
        args['@total'] = total_items;
        args['@percent'] = percent_complete;
        progress_percentage.html(Drupal.t('@complete of @total (@percent%)', args));
      });
    }
  };

  /**
   * Provides the summary information for the checklist form vertical tabs.
   */
  Drupal.behaviors.checklistapiFieldsetSummaries = {
    attach: function (context) {
      $('#checklistapi-checklist-form .vertical-tabs-panes > fieldset', context).drupalSetSummary(function (context) {
        var total = $(':checkbox.checklistapi-item', context).size(),
          args = {};
        if (total) {
          args['@complete'] = $(':checkbox.checklistapi-item:checked', context).size();
          args['@total'] = total;
          args['@percent'] = Math.round(args['@complete'] / args['@total'] * 100);
          return Drupal.t('@complete of @total (@percent%)', args);
        }
      });
    }
  };

  /**
   * Adds dynamic item descriptions toggling.
   */
  Drupal.behaviors.checklistapiCompactModeLink = {
    attach: function (context) {
      $('#checklistapi-checklist-form .compact-link a', context).click(function () {
        $(this).closest('#checklistapi-checklist-form').toggleClass('compact-mode');
        var is_compact_mode = $(this).closest('#checklistapi-checklist-form').hasClass('compact-mode');
        $(this)
          .text(is_compact_mode ? Drupal.t('Show item descriptions') : Drupal.t('Hide item descriptions'))
          .attr('title', is_compact_mode ? Drupal.t('Expand layout to include item descriptions.') : Drupal.t('Compress layout by hiding item descriptions.'));
        document.cookie = 'Drupal.visitor.checklistapi_compact_mode=' + (is_compact_mode ? 1 : 0);
        return false;
      });
    }
  };

  /**
   * Prompts the user if they try to leave the page with unsaved changes.
   *
   * Note: Auto-checked items are not considered unsaved changes for the purpose
   * of this feature.
   */
  Drupal.behaviors.checklistapiPromptBeforeLeaving = {
    getFormState: function () {
      return $('#checklistapi-checklist-form :checkbox.checklistapi-item').serializeArray().toString();
    },
    attach: function () {
      var beginningState = this.getFormState();
      $(window).bind('beforeunload', function () {
        var endingState = Drupal.behaviors.checklistapiPromptBeforeLeaving.getFormState();
        if (beginningState !== endingState) {
          return Drupal.t('Your changes will be lost if you leave the page without saving.');
        }
      });
      $('#checklistapi-checklist-form').submit(function () {
        $(window).unbind('beforeunload');
      });
      $('#checklistapi-checklist-form .clear-saved-progress').click(function () {
        $(window).unbind('beforeunload');
      });
    }
  };

})(jQuery);
;
(function ($) {

  "use strict";
  Drupal.behaviors.seo_checklist = {
    attach: function (context) {

      // Open external links in a new window.
      $('#checklistapi-checklist-form fieldset a', context).filter(function () {
        // Ignore non-HTTP (e.g. mailto:) link.
        return this.href.indexOf('http') === 0;
      }).filter(function () {
        // Filter out links to the same domain.
        return this.hostname && this.hostname !== location.hostname;
      }).each(function () {
        // Send all links to drupal.org to the same window. Open others in their
        // own windows.
        $(this).attr('target', (this.hostname === 'drupal.org') ? 'drupal_org' : '_blank');
      });

    }
  };

})(jQuery);
;
