<?php /*
Template Name: Front Page
*/ 
get_header();?>
<main role="main">
	<?php if(is_page('home')) { ?>
		<section class="logo-home">
			<div id="logobox-home" class="logobox-home">
				<a href="<?php bloginfo('wpurl');?>"><img class="" src="<?php echo get_template_directory_uri();?>/img/DF_Logo.png" alt="Design Formation"></a>
			</div><!--.logobox-home-->
		</section><!--.logo-home-->
	<?php } ?>
	

	<?php //get the Home Content Sections
		get_template_part('parts/home-content');
	?>

</main>
 
<?php get_footer(); ?>