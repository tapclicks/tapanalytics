<?php
/**
 * @file
 * portfolio.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function portfolio_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_portfolio:portfolio
  $menu_links['main-menu_portfolio:portfolio'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'portfolio',
    'router_path' => 'portfolio',
    'link_title' => 'Portfolio',
    'options' => array(
      'identifier' => 'main-menu_portfolio:portfolio',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Portfolio');


  return $menu_links;
}
