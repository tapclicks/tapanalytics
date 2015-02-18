/* ----------------- Start Document ----------------- */
(function($) {
  $(document).ready(function() {
    
    $('.notification .close').click(function(){
      
      $(this).parent().parent('.notification').hide();
      
    });
    $search_box = $('#menu-search');
    if ($search_box.length) {
      var search_form_code = '<li class="search-container"><div id="search-form"><form action="' + Drupal.settings.basePath + '?q=search" method="POST"><input type="text" name="keys" class="search-text-box"></form></div></li>';
      $('#navigation ul.sf-menu').append(search_form_code);
    }

    $('.block-simplenews .form-item-mail .form-text').focus(function() {
      $(this).parent().find('label').hide();
    });
    /*----------------------------------------------------*/
    /*	Sticky Header
     /*----------------------------------------------------*/

    var stickyheader = true; // set false to disable or true to enable sticky header

    if (stickyheader == true) {

      var searchform = $('#search-form'),
              logo = $('#logo'),
              header = $('#header'),
              menu = $('#navigation ul.sf-menu > li > a');


      var smallHeight = 80, // set compact header height
              durationAnim = 150, // animation speed

              defaultHeight = parseInt(header.css('height')),
              defSearchformMarginTop = parseInt(searchform.css('margin-top')),
              defLogoMarginTop = parseInt(logo.css('margin-top')),
              defMenuPaddingTop = parseInt(menu.css('padding-top')),
              defMenuPaddingBottom = parseInt(menu.css('padding-bottom')),
              small_height = defaultHeight - smallHeight;

      $("#header").css({position: "fixed"});

      var stickyValue = defaultHeight;

      function stickyPosition(val, body, header) {
        $(header).css({marginTop: val});
        $(body).css({paddingTop: val});
      }

      stickyPosition(-stickyValue, null, "#header");
      stickyPosition(stickyValue, "body", null);

      function stickymenu() {
        var base = this,
                offset = $(window).scrollTop(), // Get how much of the window is scrolled
                header = $('#header'),
                src = logo.find('img').attr('src');

        var searchformMarginTop = defSearchformMarginTop - small_height / 2;
        menuPaddingTop = defMenuPaddingTop - small_height / 2,
                menuPaddingBottom = defMenuPaddingBottom - small_height / 2,
                logoMarginTop = defLogoMarginTop - 1 - small_height / 2;

        if ($(window).width() > 767) {
          if (offset > 60) { // if it is over 60px (the initial width)
            if (!header.hasClass('compact')) {
              header.animate({
                height: defaultHeight - small_height
              }, {
                queue: false,
                duration: durationAnim,
                complete: function() {
                  header.addClass('compact').css("overflow", "visible");
                }
              });
              searchform.animate({
                marginTop: searchformMarginTop,
              }, {
                queue: false,
                duration: durationAnim
              });

              logo.animate({
                marginTop: logoMarginTop
              }, {
                queue: false,
                duration: durationAnim
              });
              menu.animate({
                paddingTop: menuPaddingTop,
                paddingBottom: menuPaddingBottom,
                margin: 0
              }, {
                queue: false,
                duration: durationAnim
              });
            }
          } else if (offset > -1 && offset < 60) {
            header.animate({
              height: defaultHeight,
            }, {
              queue: false,
              duration: durationAnim,
              complete: function() {
                header.removeClass('compact').css("overflow", "visible");
              }
            });
            searchform.animate({
              marginTop: defSearchformMarginTop,
            }, {
              queue: false,
              duration: durationAnim
            });
            logo.stop().animate({
              marginTop: defLogoMarginTop
            }, {
              queue: false,
              duration: durationAnim
            });
            menu.animate({
              paddingTop: defMenuPaddingTop,
              paddingBottom: defMenuPaddingBottom,
            }, {
              queue: false,
              duration: durationAnim
            });
          }
        }
      }

      stickymenu();
      $(window).scroll(function() {
        stickymenu();
      });

      // sticky header reset for mobile
      $(window).resize(function() {
        var winWidth = $(window).width();
        if (winWidth < 767) {
          $('#logo').css('marginTop', '');
          $('#header').css('height', '').removeClass('compact');
          $("#header").css({position: ""});
          $('#navigation ul.sf-menu > li > a').css({
            'paddingTop': '',
            'paddingBottom': '',
          });
          $('#search-form').css('marginTop', '');
          stickyPosition(null, null, "#header");
          stickyPosition(null, "body", null);
        } else {
          stickymenu();
          stickyPosition(-stickyValue, null, "#header");
          stickyPosition(stickyValue, "body", null);
          $("#header").css({position: "fixed"});
        }
      });
    }


    /*----------------------------------------------------*/
    /*	Navigation
     /*----------------------------------------------------*/

    /*----------------------------------------------------*/
    /*	Mobile Navigation
     /*----------------------------------------------------*/

    var jPanelMenu = {};
    $(function() {
      $('pre').each(function(i, e) {
        hljs.highlightBlock(e)
      });

      jPanelMenu = $.jPanelMenu({
        menu: 'ul.sf-menu',
        animated: false,
        keyboardShortcuts: true
      });
      jPanelMenu.on();

      $(document).on('click', jPanelMenu.menu + ' li a', function(e) {
        if (jPanelMenu.isOpen() && $(e.target).attr('href').substring(0, 1) == '#') {
          jPanelMenu.close();
        }
      });

      $(document).on('touchend', '.menu-trigger', function(e) {
        jPanelMenu.triggerMenu();
        e.preventDefault();
        return false;
      });

      // Removes SuperFish Styles
      $('#jPanelMenu-menu').removeClass('sf-menu');
      $('#jPanelMenu-menu li ul').removeAttr('style');

    });


    /*----------------------------------------------------*/
    /*	Mobile Search
     /*----------------------------------------------------*/

    $('.search-trigger').click(function() {
      if ($('#menu-search').is(":visible")) {
        $('.menu-trigger,#logo').show();
        $('#menu-search').hide();
        $('.search-trigger .icon-remove').removeClass('icon-remove').addClass('icon-search');
      } else {
        $('.menu-trigger, #logo').hide();
        $('#menu-search').show();
        $('.search-trigger .icon-search').removeClass('icon-search').addClass('icon-remove');
      }
    })

    $(window).resize(function() {
      var winWidth = $(window).width();
      if (winWidth > 767) {
        jPanelMenu.close();
        $('.menu-trigger, #logo').show();
        $('#menu-search').hide();
        $('.icon-remove').removeClass('icon-remove').addClass('icon-search');
      }
    });


    /*----------------------------------------------------*/
    /*	Revolution Slider
     /*----------------------------------------------------*/

    if ($.fn.cssOriginal != undefined) {
      $.fn.css = $.fn.cssOriginal;
    }



    /*----------------------------------------------------*/
    /*	ShowBiz Carousel
     /*----------------------------------------------------*/

    function is_mobile() {
      var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'Android', 'webos', , 'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
      var ismobile = false;
      for (i in agents) {
        if (navigator.userAgent.split(agents[i]).length > 1)
          ismobile = true;
      }
      return ismobile;
    }

    jQuery('#recent-work').showbizpro({
      dragAndScroll: (is_mobile() ? "on" : "off"),
      visibleElementsArray: [4, 4, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#our-clients').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [5, 4, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#our-coverage').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [5, 4, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#testimonials').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [1, 1, 1, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#happy-clients').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [1, 1, 1, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });

    jQuery('#team').showbizpro({
      dragAndScroll: "off",
      visibleElementsArray: [3, 3, 3, 1],
      carousel: "off",
      entrySizeOffset: 0,
      allEntryAtOnce: "off"
    });


    /*----------------------------------------------------*/
    /*	Hover Overlay
     /*----------------------------------------------------*/

    $(".media").hover(function() {
      $(this).find(".hovercover").stop().fadeTo(200, 1);
      $(this).find(".hovericon").stop().animate({'top': '50%', 'opacity': 1}, 250, 'easeOutBack');
    }, function() {
      $(this).find(".hovercover").stop().fadeTo(200, 0);
      $(this).find(".hovericon").stop().animate({'top': '65%', 'opacity': 0}, 150, 'easeOutSine');
    });


    /*----------------------------------------------------*/
    /*	Tooltips
     /*----------------------------------------------------*/

    $(".tooltip.top").tipTip({
      defaultPosition: "top"
    });

    $(".tooltip.bottom").tipTip({
      defaultPosition: "bottom"
    });

    $(".tooltip.left").tipTip({
      defaultPosition: "left"
    });

    $(".tooltip.right").tipTip({
      defaultPosition: "right"
    });




    /*----------------------------------------------------*/
    /*	Magnific Popup
     /*----------------------------------------------------*/

    $(document).ready(function() {

      $('body').magnificPopup({
        type: 'image',
        delegate: 'a.mfp-gallery',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: true,
        removalDelay: 0,
        mainClass: 'mfp-fade',
        gallery: {enabled: true},
        callbacks: {
          buildControls: function() {
            console.log('inside');
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }
        }
      });

      $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
          verticalFit: true
        }
      });

      $('.mfp-youtube, .mfp-vimeo, .mfp-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false
      });

    });


    /*----------------------------------------------------*/
    /*	Tabs
     /*----------------------------------------------------*/

    var $tabsNav = $('.tabs-nav'),
            $tabsNavLis = $tabsNav.children('li'),
            $tabContent = $('.tab-content');

    $tabsNav.each(function() {
      var $this = $(this);

      $this.next().children('.tab-content').stop(true, true).hide()
              .first().show();

      $this.children('li').first().addClass('active').stop(true, true).show();
    });

    $tabsNavLis.on('click', function(e) {
      var $this = $(this);

      $this.siblings().removeClass('active').end()
              .addClass('active');

      $this.parent().next().children('.tab-content').stop(true, true).hide()
              .siblings($this.find('a').attr('href')).fadeIn();

      e.preventDefault();
    });


    /*----------------------------------------------------*/
    /*	Accordion
     /*----------------------------------------------------*/

    var $accor = $('.accordion');

    $accor.each(function() {
      $(this).addClass('ui-accordion ui-widget ui-helper-reset');
      $(this).find('.field-accordion-tabs h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
      $(this).find('.field-accordion-tabs div.accordion-content').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
      $(this).find(".field-accordion-tabs div.accordion-content").hide().first().show();
      $(this).find(".field-accordion-tabs h3").first().removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-accordion-header-active ui-state-active ui-corner-top');
      $(this).find(".field-accordion-tabs span").first().addClass('ui-accordion-icon-active');
    });

    $trigger = $accor.find('h3');

    $trigger.on('click', function(e) {
      var location = $(this).parent();

      if ($(this).next().is(':hidden')) {
        $triggerloc = $('h3', location);
        $triggerloc.parent().siblings().find('.ui-accordion-header-active').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
        $triggerloc.parent().siblings().find('span').removeClass('ui-accordion-icon-active');
        $(this).find('span').addClass('ui-accordion-icon-active');
        $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
      }
      e.preventDefault();
    });


    /*----------------------------------------------------*/
    /*	Toggle
     /*----------------------------------------------------*/

    $(".toggle-container").hide();
    $(".trigger").toggle(function() {
      $(this).addClass("active");
    }, function() {
      $(this).removeClass("active");
    });
    $(".trigger").click(function() {
      $(this).next(".toggle-container").slideToggle();
    });

    $(".trigger.opened").toggle(function() {
      $(this).removeClass("active");
    }, function() {
      $(this).addClass("active");
    });

    $(".trigger.opened").addClass("active").next(".toggle-container").show();


    /*----------------------------------------------------*/
    /*	Skill Bars Animation
     /*----------------------------------------------------*/

    if ($('#skillzz').length != 0) {
      var skillbar_active = false;
      $('.skill-bar-value').hide();

      if ($(window).scrollTop() == 0 && isScrolledIntoView($('#skillzz')) == true) {
        skillbarActive();
        skillbar_active = true;
      }
      else if (isScrolledIntoView($('#skillzz')) == true) {
        skillbarActive();
        skillbar_active = true;
      }
      $(window).bind('scroll', function() {
        if (skillbar_active === false && isScrolledIntoView($('#skillzz')) == true) {
          skillbarActive();
          skillbar_active = true;
        }
      });
    }

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= (docViewBottom + $(elem).height())) && (elemTop >= (docViewTop - $(elem).height())));
    }

    function skillbarActive() {
      setTimeout(function() {

        $('.skill-bar-value').each(function() {
          $(this)
                  .data("origWidth", $(this)[0].style.width)
                  .css('width', '1%').show();
          $(this)
                  .animate({
                    width: $(this).data("origWidth")
                  }, 1200);
        });

        $('.skill-bar-value .dot').each(function() {
          var me = $(this);
          var perc = me.attr("data-percentage");

          var current_perc = 0;

          var progress = setInterval(function() {
            if (current_perc >= perc) {
              clearInterval(progress);
            } else {
              current_perc += 1;
              me.text((current_perc) + '%');
            }
          }, 10);
        });
      }, 10);
    }


    /*----------------------------------------------------*/
    /*	Alert Boxes
     /*----------------------------------------------------*/

    $(document).ready(function() {
      $("a.close").removeAttr("href").click(function() {
        $(this).parent().fadeOut(200);
      });
    });


    /* ------------------ End Document ------------------ */
        $(document).ready(function() {
          $("form.login").on('submit', function(e){
            e.preventDefault();
            var mail = $(this).find('input[name="email"]').val();

            if ($.browser.msie && window.XDomainRequest) {
                    if (window.XDomainRequest) {
                        var xdr = new XDomainRequest();
                        var query = 'http://im.tapclicks.com/send_login_details.php?action=send&email=' + mail;
                        if (xdr) {
                            xdr.onload = function () {
                              resp = JSON.parse(xdr.responseText);
                              
                              $('.login-form-wrapper div.message').remove();
                              $('.login-form-wrapper').prepend('<div class="message">' + resp.message + '</div>');

                              if (resp.status === 'success') {
                                $('.login-form-wrapper div.message').addClass('success');
                              }
                              if (resp.status === 'error') {
                                $('.login-form-wrapper div.message').addClass('error');
                              }
                            }
                            xdr.onerror = function () { /* error handling here */ }
                            xdr.open('GET', query);
                            xdr.send();
                        }
                    }
                }
                else {
                  $.ajax({           
                    url: 'http://im.tapclicks.com/send_login_details.php?action=send&email=' + mail,
                    type: 'post',
                    dataType: 'json',
                    crossDomain: true,
                    success: function (resp) {
                        console.log(resp);
                        $('.login-form-wrapper div.message').remove();
                        $('.login-form-wrapper').prepend('<div class="message">' + resp.message + '</div>');

                        if (resp.status === 'success') {
                          $('.login-form-wrapper div.message').addClass('success');
                        }
                        if (resp.status === 'error') {
                          $('.login-form-wrapper div.message').addClass('error');
                        }

                    },
                    error: function(e) {
                        console.log('Error: '+e);
                    }
                  });
                }
        });
        
        function blink(){
          $(".blink").css({ 'color' : '#EC008B'}).animate({opacity:0},300,"linear",function(){
            $(this).css({ 'color': '#ffffff'}).animate({opacity:1},300);
          });
        }

        setInterval(blink, 4000);

        
      });

      $(".front div#feature-desc").removeClass("seven").addClass("ten");

      $('#edit-field-integration-category-tid').live('click', function() {
        $('.content .view-content').first().fadeOut('slow');
      });


  });

})(this.jQuery);