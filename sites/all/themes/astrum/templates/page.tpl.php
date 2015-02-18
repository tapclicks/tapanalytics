
<!-- Header
================================================== -->
<header id="header">

<!-- Top Menu / Start -->
<div id="top-menu">

  <!-- Container -->
  <div class="container">
    <div class="sixteen columns">
      <?php print render($page['top_menu']); ?>
    </div>

  </div>
  <!-- Container / End -->

</div>
<!-- Top Menu / End -->

  <!-- Container -->
  <div class="container">

    <!-- Logo / Mobile Menu -->
    <div class="three columns">

      <div id="mobile-navigation">

        <?php if (module_exists('search') && theme_get_setting('header_search_box')): ?>
          <form method="POST" id="menu-search" action="<?php print url('search'); ?>">
            <input name="keys" id="keys" type="text" placeholder="<?php print t('Start Typing'); ?>..." />
          </form>

          <span class="search-trigger"><i class="icon-search"></i></span>
        <?php endif; ?>
        <a href="#menu" class="menu-trigger"><i class="icon-reorder"></i></a>
      </div>

      <div id="logo">
        <?php if ($logo): ?>
          <h1><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home">
              <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
            </a></h1>
        <?php endif; ?>

        <?php if ($site_name || $site_slogan): ?>
          <div id="name-and-slogan">
            <?php if ($site_name): ?>
              <?php if ($title): ?>
                <div id="site-name"><strong>
                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
                  </strong></div>
              <?php else: /* Use h1 when the content title is empty */ ?>
                <h1 id="site-name">
                  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
                </h1>
              <?php endif; ?>
            <?php endif; ?>

            <?php if ($site_slogan): ?>
              <div id="tagline"><?php print $site_slogan; ?></div>
            <?php endif; ?>
          </div> <!-- /#name-and-slogan -->
        <?php endif; ?>

        <div class="clearfix"></div>
      </div>
    </div>


    <!-- Navigation
    ================================================== -->
    <div class="thirteen columns">
      <?php if ($page['main_menu']): ?>
        <nav id="navigation" class="menu">
          <?php print render($page['main_menu']); ?>
        </nav>
      <?php endif; ?>
    </div>

  </div>
  <!-- Container / End -->

</header>
<!-- Header / End -->


<!-- Content Wrapper / Start -->
<div id="content-wrapper">


  <?php if ($page['slider']): ?>
    <div id="slider-wrapper">
      <?php print render($page['slider']); ?>
    </div>
  <?php endif; ?>

  <?php if ($page['highlighted']): ?>
    <div class="container">
      <div class="sixteen columns">
        <div id="highlighted">
          <?php print render($page['highlighted']); ?>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if ($title): ?>
    <?php if (!drupal_is_front_page()): ?>
      <?php if ($title || $breadcrumb): ?>  
        <section id="titlebar">
          <!-- Container -->
          <div class="container">

            <div class="eight columns">
              <h2><?php print $title; ?></h2>
            </div>


            <div class="eight columns">
              <?php if ($breadcrumb): ?>
                <nav id="breadcrumbs">
                  <?php print $breadcrumb; ?>
                </nav>
              <?php endif; ?>
            </div>

          </div>
          <!-- Container / End -->
        </section>
      <?php endif; ?>
    <?php endif; ?>
  <?php endif; ?>

  <?php if (drupal_is_front_page() && !theme_get_setting('homepage_title')): ?>
    <?php if ($title || $breadcrumb): ?>  
      <section id="titlebar">
        <!-- Container -->
        <div class="container">
          <?php if ($title): ?>
            <div class="eight columns">
              <h2><?php print $title; ?></h2>
            </div>
          <?php endif; ?>


          <div class="eight columns">
            <?php if ($breadcrumb): ?>
              <nav id="breadcrumbs">
                <?php print $breadcrumb; ?>
              </nav>
            <?php endif; ?>
          </div>

        </div>
        <!-- Container / End -->
      </section>
    <?php endif; ?>
  <?php endif; ?>

  <div id="content-container" class="container">

    <?php if ($page['sidebar_first']): ?>
      <div id="sidebar-first" class="four columns">
        <aside class="sidebar">
          <div class="section">
            <?php print render($page['sidebar_first']); ?>
          </div>
        </aside>
      </div>
    <?php endif; ?>

    <!-- Page Content -->
    <div class="<?php print $content_class; ?>">
      <section class="page-content">
        <?php print $messages; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php print render($title_suffix); ?> 
        <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
      </section>
    </div>
    <!-- Page Content / End -->
    <?php if ($page['sidebar_second']): ?>
      <div id="sidebar-second" class="four columns">
        <aside class="sidebar">
          <div class="section">
            <?php print render($page['sidebar_second']); ?>
          </div>
        </aside>
      </div>
    <?php endif; ?>

    <div class="clearfix"></div>

  </div>

  <?php if ($page['home_recent_work']): ?>
    <div id="recent-works-wrapper">
      <div class="container">
        <div class="sixteen columns">
          <?php print render($page['home_recent_work']); ?>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  <?php endif; ?>


  <?php if ($page['clients_logo']): ?>
    <div id="clients-logo-wrapper">
      <div class="container">
        <?php print render($page['clients_logo']); ?>
      </div>
    </div>
  <?php endif; ?>

</div>
<!-- Content Wrapper / End -->


<!-- Footer
================================================== -->
<div id="footer" class="<?php print theme_get_setting('footer_style'); ?>">
  <div class="container">

    <?php if ($page['footer_first']): ?>
      <div class="four columns">
        <?php print render($page['footer_first']); ?>
      </div>
    <?php endif; ?>

    <?php if ($page['footer_second']): ?>
      <div class="four columns">
        <?php print render($page['footer_second']); ?>
      </div>
    <?php endif; ?>

    <?php if ($page['footer_third']): ?>
      <div class="four columns">
        <?php print render($page['footer_third']); ?>
      </div>
    <?php endif; ?>


    <?php if ($page['footer_fourth']): ?>
      <div class="four columns">
        <?php print render($page['footer_fourth']); ?>
      </div>
    <?php endif; ?>


  </div>

</div>
<!-- Footer / End -->

<!-- Footer Bottom / Start -->
<div id="footer-bottom">

  <!-- Container -->
  <div class="container">
    <div class="sixteen columns">
      <?php print render($page['footer']); ?>
       <div class="copyright">
          <p><?php print t('TapClicks © ') . date('Y') . t('. All rights reserved.'); ?> | <a href="http://tapanalytics.com/privacy-policy">Privacy Policy</a> | <a href="http://tapanalytics.com/terms-use">Terms of Use</a></p>
        </div>
    </div>

  </div>
  <!-- Container / End -->

</div>
<!-- Footer Bottom / Start -->
