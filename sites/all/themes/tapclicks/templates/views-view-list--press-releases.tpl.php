<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>

<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
  <div class="field-accordion-tabs">
    <h3><span class="ui-accordion-header-icon ui-icon ui-accordion-icon"></span><?php print $title; ?></h3>
  <?php endif; ?>
  <div class="accordion-content">
  <?php print $list_type_prefix; ?>
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
  </div>
</div>
<?php print $wrapper_suffix; ?>