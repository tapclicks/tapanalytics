iSimple Install Profile
=======================

How to use
----------

* Download the isimple_base.make file into the root directory
* Run the `drush make isimple_base.make -y` command
* Install Drupal as usual

List of features
---------------------------------------------------------
* Pre-populated maintenance account credentials (except password)
* Usually not needed blocks are disabled by default (like 'Powered by Drupal' block)
* There is no Filtered HTML text format
* Enables a list of frequently used contrib modules (list of modules below)
* Disables a few core modules that are usually not needed (list below)
* In the Site configuration step, the 'Check for updates automatically' and 'Receive e-mail notifications'
  checkboxes are unchecked by default

More coming soon.

List of automatically downloaded contrib modules
------------------------------------------------
* content_access
* admin
* admin_menu
* module_filter
* contemplate
* ctools
* context
* calendar
* date
* devel
* features
* content_taxonomy
* email
* filefield_paths
* link
* mimemail
* imce
* i18n
* advanced_help
* auto_nodetitle
* backup_migrate
* computed_field
* context_admin
* diff
* ds
* entity
* entityreference
* feeds
* field_group
* globalredirect
* logintoboggan
* login_destination
* node_clone
* pathauto
* search404
* site_map
* token
* rules
* page_title
* ckeditor
* views
* views_bulk_operations
* views_slideshow
* votingapi
* webform
* xmlsitemap

List of automatically enabled contrib modules
---------------------------------------------

* views
* views_ui
* ctools
* admin_menu
* admin_menu_toolbar
* module_filter
* link
* backup_migrate
* entity
* pathauto
* token
* webform
* ckeditor

List of disabled core modules (that would be enabled by default otherwise)
--------------------------------------------------------------------------
* color
* dashboard
* help
* toolbar
* overlay