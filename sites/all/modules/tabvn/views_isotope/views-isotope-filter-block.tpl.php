<?php
/**
 * @file views-isotope-filter-block.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>


<!-- Filters -->
<div class="showing"><?php print t('Showing'); ?>:</div>
<span class="line showing"></span>
<div id="filters" class="filters-dropdown headline"><span></span>
  <div class="isotope-options">
    <ul id="filters-lists" class="option-set" data-option-key="filter">
      <?php
      if (!empty($rows)):
        ?>	
        <li><a href="#filter" class="selected" data-option-value="*"><?php print t('All'); ?></a></li>
        <?php foreach ($rows as $id => $row): ?>

          <?php
          // remove characters that cause problems with classes
          // this is also do to the isotope elements
          $dataoption = trim(strip_tags(strtolower($row)));
          $dataoption = str_replace(' ', '-', $dataoption);
          $dataoption = str_replace('/', '-', $dataoption);
          $dataoption = str_replace('&amp;', '', $dataoption);
          ?>
          <li><a href="#filter" data-option-value=".<?php print $dataoption; ?>"><?php print trim($row); ?></a></li>
        <?php endforeach; ?>
      <?php endif; ?>
  </div>
</ul>
</div>
<span class="line filters"></span><div class="clearfix"></div>