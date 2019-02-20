<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>
			<div>
				<div class="content">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<?php the_content(); ?>
					<?php endwhile; endif; ?>
				</div><!--.content-->
			</div>
		</section>
		<!--Add conditional: if has parent page services--?>
		<!-- section -->
		
		<?php 
		if(is_page(array('graphics','websites','publications'))){?>
		<section class="portfolio-feed">
			
			<?php get_template_part('parts/portfolio-feed');?>
			
		</section><!--.portfolio-feed-->
		<!-- /section -->
		<?php } ?>
		
	</main>



<?php get_footer(); ?>
