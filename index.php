<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>
			<div>
				<h1><?php the_title();?></h1>
				<div class="content">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<?php the_content(); ?>
					<?php endwhile; endif; ?>
				</div><!--.content-->
			</div>
		</section>
		<!-- /section -->
		
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
