<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
		<link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700|Passion+One:400,700" rel="stylesheet">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			
			<header class="header clear" role="banner">
			
				<div class="top">
					
					<div id="logobox" class="logobox">
					<?php if(!is_page('home')) { ?>
						<a href="<?php bloginfo('wpurl');?>"><img class="" src="<?php echo get_template_directory_uri();?>/img/df_logo_hz.png" alt="Design Formation"></a>
					<?php } ?>
					</div><!--.logobox-->
					
					<div class="navigation">
						<div class="help-nav">
							<img class="nav-icon" src="<?php echo get_template_directory_uri();?>/img/nav-icon.svg" alt="Mobile Navigation Icon">
						</div><!--help-nav-->
						<!--nav desktop-->
						<nav class="header-navigation desktop_nav" role="navigation">
							<?php wp_nav_menu( array(
									'theme_location' => 'header-menu', 
									'menu_class' => 'header-nav', 
									)
								);
							?>
						</nav>
						<!-- end nav desktop -->
						
					</div><!--.navigation-->	
				</div><!--.top-->
					
					<!-- nav mobile-->
						<nav class="header-navigation mobile_nav" role="navigation">
							<?php wp_nav_menu( array(
									'theme_location' => 'header-menu', 
									'menu_class' => 'header-nav', 
									)
								);
							?>
						</nav>
						<!--end nav mobile-->
							
					
					
				
					
			</header>
			<!-- /header -->
