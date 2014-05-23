<?php get_template_part('templates/page', 'header'); ?>

<div class="alert-box info">
  <?php _e('Sorry, but the page you were trying to view does not exist.', 'froots'); ?>
</div>

<p><?php _e('It looks like this was the result of either:', 'froots'); ?></p>
<ul>
  <li><?php _e('a mistyped address', 'froots'); ?></li>
  <li><?php _e('an out-of-date link', 'froots'); ?></li>
</ul>

<?php get_search_form(); ?>
