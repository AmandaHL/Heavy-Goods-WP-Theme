			<!-- footer -->
			<footer class="footer" role="contentinfo">
				<div class="footer-content">
					<nav class="footer-navigation footer_nav">
						<?php wp_nav_menu( array(
							'theme_location' => 'footer-menu', 
							'menu_class' => 'footernav', 
							)
							);
						?>
					</nav>
					<div class="footer-info">
						<p>Design Formation is based in Denver, CO and is owned and operated by Amanda Long, who has been providing graphic design and website development solutions since 2002.</p>
					</div>
				</div>
					
				
			</footer>
			<!-- /footer -->
<!-- copyright -->
					<p class="copyright">
						&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?> and Wyrmwyrx Media Design, LLC. 
					</p>
					<!-- /copyright -->
		</div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
