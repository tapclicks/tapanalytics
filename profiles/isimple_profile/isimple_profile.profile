<?php
/**
 * @file
 * Enables modules and site configuration for a minimal site installation.
 */

/**
 * Implements hook_form_FORM_ID_alter() for install_configure_form().
 *
 * Allows the profile to alter the site configuration form.
 */
function isimple_profile_form_install_configure_form_alter(&$form, $form_state) {
  // Pre-populate the site name with the server name.
  $form['site_information']['site_name']['#default_value'] = $_SERVER['SERVER_NAME'];
  
  // set default site email
  //$form['site_information']['site_mail']['#default_value'] = '';
  
  // set default admin values
  $form['admin_account']['account']['name']['#default_value'] = 'isimple';
  $form['admin_account']['account']['mail']['#default_value'] = 'rex@isimple.net';
  
  // set default location
  $form['server_settings']['date_default_timezone']['#default_value'] = 'America/Los_Angeles';
  $form['server_settings']['site_default_country']['#default_value'] = 'US';
  $form['update_notifications']['update_status_module'][1]['#default_value'] = 0;
  $form['update_notifications']['update_status_module'][2]['#default_value'] = 0;
}