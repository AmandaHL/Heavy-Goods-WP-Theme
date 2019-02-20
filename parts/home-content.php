<?php
/*
Display the Front Page Content sections.
*/
 $sections = get_post_meta(get_the_ID(), 'home_content_section', true);
 if( !empty( $sections ) ) {   
	
    // Checks and displays the retrieved values
    foreach ( (array) $sections as $key => $section ) {
	
		$front_section = '';

		if ( isset( $section ['section_content'] ) ) {
			$front_section = wpautop( $section['section_content'] );
    	}

		//Output the Boxes
		echo '<section class="front-content"><div>';
		echo $front_section;
		echo '</div></section>';
	}

}
?>