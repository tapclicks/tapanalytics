
<div id="comments" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="twelve alt columns">
    <?php if ($content['comments'] && $node->type != 'forum'): ?>
      <?php print render($title_prefix); ?>
      <h3 class="headline title"><?php print t('Comments'); ?></h3>
      <span class="line"></span>
      <div class="clearfix"></div>
      <?php print render($title_suffix); ?>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>


  <?php if ($content['comment_form']): ?>
    <div class="twelve alt columns">
      <h2 class="title comment-form"><?php print t('Add new comment'); ?></h2>
      <?php print render($content['comment_form']); ?>
    </div>
  <?php endif; ?>
</div>
