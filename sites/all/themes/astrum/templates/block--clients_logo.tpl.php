
<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <?php print render($title_prefix); ?>
  <?php if ($block->subject): ?>
    <div class="sixteen columns">
      <h3 class="headline" <?php print $title_attributes; ?>><?php print $block->subject ?></h3>
      <span class="line"></span>
      <div class="clearfix"></div>
    </div>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php print $content ?>
  </div>
</div>
