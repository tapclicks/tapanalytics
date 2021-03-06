<?php

// $Id:

/**
 * Preprocess function to build the isotope grid
 */
function template_preprocess_views_isotope(&$vars) {
  
  template_preprocess_views_view_list($vars);

  $view = $vars['view'];
  $options = $view->style_plugin->options;

  $handler = $view->style_plugin;
  $fields = &$view->field;
  $rows = &$vars['rows'];
  $vars['attributes'] = array();

  $vars['isotope_id'] = 'views-isotope-' . $view->name . '-' . $view->style_plugin->display->id;
  $vars['portfolio_style'] = !empty($options['portfolio_style']) ? $options['portfolio_style'] : 'span3';

  // Get stylesheets.
  $path = drupal_get_path('module', 'views_isotope');
  drupal_add_css($path . '/views_isotope.css');

  // Add JavaScript files and settings.
  drupal_add_js($path . '/jquery.isotope.min.js');
  drupal_add_js($path . '/views_isotope.js');
}

/**
 * Preprocess function to build the isotope filter block
 */
function template_preprocess_views_isotope_filter_block(&$vars) {
  template_preprocess_views_view_list($vars);
  $view = $vars['view'];
  $options = $view->style_plugin->options;

  $handler = $view->style_plugin;
  $fields = &$view->field;
  $rows = &$vars['rows'];
  $vars['attributes'] = array();
}