<?php

function astrum_form_system_theme_settings_alter(&$form, $form_state) {

  $path = drupal_get_path('theme', 'astrum');
  drupal_add_library('system', 'ui');
  drupal_add_library('system', 'farbtastic');

  drupal_add_js($path . '/scripts/theme_admin.js');

  $form['settings'] = array(
      '#type' => 'vertical_tabs',
      '#title' => t('Theme settings'),
      '#weight' => 2,
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

  $form['settings']['general'] = array(
      '#type' => 'fieldset',
      '#title' => t('General settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

  $form['settings']['general']['homepage_title'] = array(
      '#type' => 'checkbox',
      '#title' => t('Disable homepage title'),
      '#default_value' => theme_get_setting('homepage_title'),
  );

  if (module_exists('search')) {
    $form['settings']['general']['header_search_box'] = array(
        '#type' => 'checkbox',
        '#title' => t('Show search block on the header & menu'),
        '#default_value' => theme_get_setting('header_search_box'),
        '#description' => t('Display search block on the main nagivaion and  header mobile version. Manage <a href="!url#module-search">search permisison</a>', array('!url'=>url('admin/people/permissions'))),
    );
  }

  $form['settings']['skin'] = array(
      '#type' => 'fieldset',
      '#title' => t('Skin settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );


  $form['settings']['skin']['theme_layout_style'] = array(
      '#type' => 'select',
      '#title' => t('Layout style'),
      '#default_value' => theme_get_setting('theme_layout_style'),
      '#options' => array(
          'boxed' => t('Boxed'),
          'wide' => t('Wide'),
      ),
  );
  $form['settings']['skin']['footer_style'] = array(
      '#type' => 'select',
      '#title' => t('Footer style'),
      '#options' => array(
          'dark' => t('Dark'),
          'light' => t('Light'),
      ),
      '#default_value' => theme_get_setting('footer_style'),
  );
  $form['settings']['skin']['astrum_theme_color'] = array(
      '#title' => t('Theme color'),
      '#type' => 'textfield',
      '#default_value' => theme_get_setting('astrum_theme_color'),
      '#attributes' => array('class' => array('input color')),
      '#description' => t('Default color hex code is: #73B819'),
  );
  // bg background
  $dir = drupal_get_path('theme', 'astrum') . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . 'bg';

  $files = file_scan_directory($dir, '/.*\.png/');


  $bg_files = array();
  if (!empty($files)) {
    foreach ($files as $file) {
      if (isset($file->filename)) {
        $bg_files[$file->filename] = $file->filename;
      }
    }
  }

  $form['settings']['skin']['theme_background_image'] = array(
      '#title' => t('Background image'),
      '#type' => 'select',
      '#default_value' => theme_get_setting('theme_background_image', 'astrum'),
      '#options' => $bg_files,
      '#description' => t('All images background in <strong>!url</strong>', array('!url' => $dir)),
  );

  $form['#submit'][] = '_astrum_form_submit';
}

function _astrum_form_submit($form, &$form_state) {
  $values = $form_state['values'];

  if (!empty($values['astrum_theme_color'])) {
    _save_css_color_file($values['astrum_theme_color']);
  }
}

function _save_css_color_file($color) {
  $file = 'css/colors.css';
  $style = _get_color_css_temp($color);

  $palette = 'astrum';
  $theme = 'astrum';
  $id = $theme . '_color_cache';  //'-' . substr(hash('sha256', serialize($palette) . microtime()), 0, 8);
  $paths['color'] = 'public://color';
  $paths['target'] = $paths['color'] . '/' . $id;





  foreach ($paths as $path) {
    file_prepare_directory($path, FILE_CREATE_DIRECTORY);
  }

  $paths['target'] = $paths['target'] . '/';
  $paths['id'] = $id;
  $paths['source'] = drupal_get_path('theme', $theme) . '/';
  $paths['files'] = $paths['map'] = array();


  $base = base_path() . dirname($paths['source'] . $file) . '/';
  _drupal_build_css_path(NULL, $base);

  $base_file = drupal_basename($file);

  $file = $paths['target'] . $base_file;

  $filepath = file_unmanaged_save_data($style, $file, FILE_EXISTS_REPLACE);

  variable_set('astrum_theme_color', $filepath);
}

function _get_color_css_temp($color) {

  $css = '/* =================================================================== */
/* Green ' . $color . '
====================================================================== */

a, a:visited,
#not-found i,
.comment-by span.reply a:hover,
.comment-by span.reply a:hover i,
.categories a:hover,
.testimonials-author,
.happy-clients-author,
.dropcap,
.meta ul li a:hover,
.list-1 li:before,
.list-2 li:before,
.list-3 li:before,
.list-4 li:before { color: ' . $color . '; }

#current,#navigation a.sf-depth-1.active,
#nagivation ul li a:hover,
#navigation ul > li:hover > a,
.flickr-widget-blog a:hover { border-color: ' . $color . '; }
#navigation ul ul { border-top-color: ' . $color . '; }

.tp-leftarrow:hover,.ls-nav-next:hover,.ls-nav-prev:hover,
.tp-rightarrow:hover,
.flexslider .flex-next:hover,
.flexslider .flex-prev:hover,
.featured-box:hover > .circle,
.featured-box:hover > .circle span,
.featured-box:hover > .circle-2,
.featured-box:hover > .circle-3,
.portfolio-item:hover .item-description,
.sb-navigation-left:hover,
.sb-navigation-right:hover,
.newsletter-btn,
.search-btn { background-color: ' . $color . '; }

#filters a:hover, .selected { background-color: ' . $color . ' !important; }

.premium .plan-price,
.premium .plan-features a.button:hover { background-color: #68a914; }
.premium.plan h3,
.premium .plan-features a.button { background-color: ' . $color . '; }

.featured-box:hover > .circle-2,
.featured-box:hover > .circle-3 { box-shadow: 0 0 0 8px rgba(115,184,25,0.3); }

#current:after,
.pagination .current,
.pagination ul li a:hover,
.tags a:hover,
.button.gray:hover,
.button.light:hover,
.button.color,
input[type="button"],
input[type="submit"],
input[type="button"]:focus,
input[type="submit"]:focus,
.tabs-nav li.active a,ul.tabs li.active a,
.ui-accordion .ui-accordion-header-active:hover,
.ui-accordion .ui-accordion-header-active,
.trigger.active a,
.trigger.active a:hover,
.skill-bar-value,
.highlight.color,
.notice-box:hover { background: ' . $color . '; }';

  return $css;
}
