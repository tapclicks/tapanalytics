api = 2
core = 7.x

; core
projects[drupal][type] = core

; iSimple Profile
projects[isimple_profile][type] = profile
projects[isimple_profile][download][type] = git
projects[isimple_profile][download][url] = git@githost.isimple.net:isimple/isimple-install-profile.git
projects[isimple_profile][download][branch] = master
projects[isimple_profile][directory_name] = isimple_profile

; Modules
; --------

projects[] = content_access
projects[] = admin
projects[] = admin_menu
projects[] = module_filter
projects[] = contemplate
projects[] = ctools
projects[] = context
projects[] = calendar
projects[] = date
projects[] = devel
projects[] = features
projects[] = content_taxonomy
projects[] = email
projects[] = filefield_paths
projects[] = link
projects[] = mimemail
projects[] = imce
projects[] = i18n
projects[] = advanced_help
projects[] = auto_nodetitle
projects[] = backup_migrate
projects[] = computed_field
projects[] = context_admin
projects[] = diff
projects[] = ds
projects[] = entity
projects[] = entityreference
projects[] = feeds
projects[] = field_group
projects[] = globalredirect
projects[] = logintoboggan
projects[] = login_destination
projects[] = node_clone
projects[] = pathauto
projects[] = search404
projects[] = site_map
projects[] = token
projects[] = rules
projects[] = page_title
projects[] = ckeditor
projects[] = views
projects[] = views_bulk_operations
projects[] = views_slideshow
projects[] = votingapi
projects[] = webform
projects[] = xmlsitemap

  

; Themes
; --------

  
  
; Libraries
; ---------
libraries[html5bp][download][type] = "file"
libraries[html5bp][download][url] = "http://github.com/h5bp/html5-boilerplate/zipball/v3.0.2stripped"
libraries[ckeditor][download][type] = "get"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.2/ckeditor_4.2_standard.zip"