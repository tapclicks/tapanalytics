(function($) {
  $(document).ready(function() {

    var $container = $('#isotope-container');
    $container.isotope({
      itemSelector: '.isotope-element',
      layoutMode : 'fitRows'
      //filter: '.nothing'
    });

    var $optionSets = $('.isotope-options .option-set'),
            $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {

      var $this = $(this);
      // don't proceed if already selected
      if ($this.hasClass('selected')) {
        return false;
      }
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');
      var options = {},
              key = $optionSet.attr('data-option-key'),
              value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
        // changes in layout modes need extra logic
        changeLayoutMode($this, options)
      } else {
        // otherwise, apply new options
        $container.isotope(options);
      }

      return false;
    });
  });
  
 
	jQuery(document).ready(function($) {
		var $Filter = $('#filters');
		var FilterTimeOut;
		$Filter.find('ul li:first').addClass('active');
		$Filter.find('ul li:not(.active)').hide();
		$Filter.hover(function(){
			clearTimeout(FilterTimeOut);
			if( $(window).width() < 959 )
			{
				return;
			}
			FilterTimeOut=setTimeout(function(){ $Filter.find('ul li:not(.active)').stop(true, true).animate({width: 'show' }, 250, 'swing'); }, 100);
		},function(){
			if( $(window).width() < 959 )
			{
				return;
			}
			clearTimeout(FilterTimeOut);
			FilterTimeOut=setTimeout(function(){ $Filter.find('ul li:not(.active)').stop(true, true).animate({width: 'hide' }, 250, 'swing'); }, 100);
		});
		$(window).resize(function() {
			if( $(window).width() < 959 )
			{
				$Filter.find('ul li:not(.active)').show();
			}
			else
			{
				$Filter.find('ul li:not(.active)').hide();
			}
		});
		$(window).resize();
		$Filter.find('a').click(function(){
			$Filter.find('ul li').not($(this)).removeClass('active');
			$(this).parent('li').addClass('active');
		});
	});
    
    
})(jQuery);

