<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> post"<?php print $attributes; ?>>

<?php
hide($content['field_type']);

  if (!empty($content['field_image'])) {
    print render($content['field_image']);
  }
  ?>
  <?php if (!empty($node->field_type['und'][0]['value']) && $node->field_type['und'][0]['value'] == 'Press'): ?>
    <div class="post-format">
      <div class="circle">
        <?php print $user_picture; ?>
        <?php if (empty($user_picture)): ?>
          <i class="icon-pencil"></i><span></span></div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  
  <?php if (!empty($node->field_type['und'][0]['value']) && $node->field_type['und'][0]['value'] == 'Blog'): ?>
    <div class="post-format">
      <div class="circle">
        <?php print $user_picture; ?>
        <?php if (empty($user_picture)): ?>
          <i class="icon-coffee"></i><span></span></div>
      <?php endif; ?>
    </div>
  <?php endif; ?>

<?php 
$post_content_class = 'content-section';
if($node->type == 'blog' || $node->type =='article'){
  $post_content_class = 'post-content';
}
?>

  <section class="<?php print $post_content_class?>">
    
   
    <header class="meta">
      <?php print render($title_prefix); ?>
      <?php if (!$page): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a> <?php print render($content['field_date']); ?></h2>
      <?php endif; ?>
      <?php if ($page && ($node->type !== 'portfolio' && $node->type !=='page')) : ?>
        <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>

      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <?php print $submitted; ?>
      <?php endif; ?>
    </header>
    

    <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);

    if (!empty($content['field_tags'])) {
      hide($content['field_tags']);
    }

    print render($content);
  

    ?>
    <?php if (!$page): ?>
      <a class="button color" href="<?php print $node_url; ?>"><?php print t('Read More'); ?></a>
    <?php endif; ?>
  </section>
  <div class="clearfix"></div>

  <?php
  if ($page) {
    print render($content['links']);
  }
  ?>
</article>
<?php print render($content['comments']); ?>




