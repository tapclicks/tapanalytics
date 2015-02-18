<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>


  <?php
  if (!empty($content['field_image'])) {
    print render($content['field_image']);
  }
  ?>
  <?php if (($node->type == 'blog') || ($node->type == 'article')): ?>
    <div>
      <div>
        <?php print $user_picture; ?>
        <?php if (empty($user_picture)): ?>
         
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
    
   
    <?php if (!$page): ?>
      <h2<?php print $title_attributes; ?> class="headline"><?php print $title; ?></h2>
      <p><span class="line" style="margin-bottom:35px;"></span></p>
      <div class="clearfix"></div>
    <?php endif; ?>
    
    <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_accordion_tabs']);

    if (!empty($content['field_tags'])) {
      hide($content['field_tags']);
    }

    print render($content);
  

    ?>
  </section>
  <div class="clearfix"></div>


</div>
<div class="accordion">
  <?php print render($content['field_accordion_tabs']); ?>
</div>

<?php print render($content['comments']); ?>




