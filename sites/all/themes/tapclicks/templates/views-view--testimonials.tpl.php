<div class="<?php print $classes; ?>">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
    </div>
  <?php endif; ?>

  <?php if ($exposed): ?>
    <div class="view-filters">
      <?php print $exposed; ?>
    </div>
  <?php endif; ?>

  <?php if ($attachment_before): ?>
    <div class="attachment attachment-before">
      <?php print $attachment_before; ?>
    </div>
  <?php endif; ?>

  <?php if ($rows): ?>
    <!-- Container -->
    <div class="showbiz-container">

      <!-- Navigation / Left -->
      <div id="showbiz_left_3" class="sb-navigation-left-2 alt"><i class="icon-angle-left"></i></div>

      <!-- ShowBiz Carousel -->
      <div id="happy-clients" class="showbiz-container twelve carousel columns" >

      <!-- Portfolio Entries -->
      <div class="showbiz our-clients" data-left="#showbiz_left_3" data-right="#showbiz_right_3">
        <div class="overflowholder">

          <?php print $rows; ?>
          
          <div class="clearfix"></div>

      </div>
      </div>

      <!-- Navigation / Right -->
      <div id="showbiz_right_3" class="sb-navigation-right-2 alt"><i class="icon-angle-right"></i></div>

    </div>
    <!-- Container / End -->
          

        <div class="clearfix"></div>

    <div class="clearfix"></div>

  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <?php if ($pager): ?>
    <?php print $pager; ?>
  <?php endif; ?>

  <?php if ($attachment_after): ?>
    <div class="attachment attachment-after">
      <?php print $attachment_after; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <?php print $more; ?>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($feed_icon): ?>
    <div class="feed-icon">
      <?php print $feed_icon; ?>
    </div>
  <?php endif; ?>

</div>