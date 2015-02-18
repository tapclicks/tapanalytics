<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?> eight columns"<?php print $attributes; ?>>

  <?php print render($title_prefix); ?>
  <?php if ($block->subject): ?>
  <div class="clearfix"></div>
    <div class="eight columns">
      <?php print $title_attributes; ?>><?php print $block->subject ?>
    </div>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php print $content ?>
  </div>
</div>
