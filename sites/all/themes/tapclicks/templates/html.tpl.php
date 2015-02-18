<!DOCTYPE html>

<!--[if IE 7 ]><html class="ie ie7" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><![endif]-->
<!--[if IE 8 ]><html class="ie ie8" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>><!--<![endif]-->

  <head profile="<?php print $grddl_profile; ?>">
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <?php print $styles; ?>
    <?php $theme_background_image = theme_get_setting('theme_background_image'); ?>
    <?php if (!empty($theme_background_image)): ?>
      <style type="text/css">
        body{background: url('<?php print base_path() . path_to_theme(); ?>/images/bg/<?php print $theme_background_image; ?>') scroll 0 0 repeat;}
      </style>
    <?php endif; ?>
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  </head>
  <?php
  $theme_layout_style = theme_get_setting('theme_layout_style');
  if ($theme_layout_style) {
    $classes.= ' ' . $theme_layout_style;
  }
  ?>
  <body class="<?php print $classes; ?>" <?php print $attributes; ?>>
    <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>
    <?php print $page_top; ?>
    <?php print $page; ?>
<?php print $page_bottom; ?>

<?php print $scripts; ?>
<!-- Start of StatCounter Code for Default Guide -->
<script type="text/javascript">
var sc_project=10010248; 
var sc_invisible=1; 
var sc_security="c627623b"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript><div class="statcounter"><a title="web analytics"
href="http://statcounter.com/" target="_blank"><img
class="statcounter"
src="http://c.statcounter.com/10010248/0/c627623b/1/"
alt="web analytics"></a></div></noscript>
<!-- End of StatCounter Code for Default Guide -->
<script type="text/javascript" language="javascript">llactid=26251</script> 
<script type="text/javascript" language="javascript" src="http://t1.trackalyzer.com/trackalyze.js"></script>  
  </body>
</html>