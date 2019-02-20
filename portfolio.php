<?php 
/* Template Name: Portfolio
*/
get_header(); ?>

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
		<section class="portfolio-feed">
			<?php get_template_part('parts/portfolio-feed');?>
		</section><!--.portfolio-feed-->
		<!-- /section -->
	<!--	<section>
		<div>
			<h3>Additional Examples</h3>
			<p>add metabox to portfolio page for this content block.</p>
			
			<p>This portfolio is a collection of projects I've worked on through my company, Wyrmwyrx Media Design LLC (dba Design Formation). To view additional examples of my work, please visit <a href="http://theamandalong.com" target="_blank">my portfolio site</a>.</p>
		</div>
		
		</section>
		-->
	</main>

<?php get_footer(); ?>
