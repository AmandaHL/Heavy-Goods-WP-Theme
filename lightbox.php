<?php
/**
Single Post Template: Lightbox
*/
?>
<div id="<?php echo $post->ID; ?>" class="fancybox-inline">
<?php while (have_posts()) : the_post(); ?>
	<div class="lightbox-content">
		<?php	
			$post_id = get_the_ID();
			$headline = get_post_meta($post_id, 'bg_group_lightbox_headline', true);
			$images =  get_post_meta($post_id, 'lightbox_images', true);
			?>
		<div class="details">
			<h5><?php echo $headline; ?></h5>
			<?php the_content(); ?>
		</div><!--.details-->
		<div class="lightbox-images">
			
				<?php
					 if( !empty( $images ) ) {   
	
					// Checks and displays the retrieved values
					foreach ( (array) $images as $key => $image ) {
						$img = '';

						if ( isset( $image ['lightbox_image_id'] ) ) {
							$img = wp_get_attachment_image( $image['lightbox_image_id'], 'share-pick', null );
						}

						//Output Images
						echo  '<div class="work-image">'.$img .'</div>';
					}  
		

				} ?>
				</div><!--.lightbox-images-->
			
	</div><!--.lightbox-content-->
<?php endwhile; ?>
  

</div>

