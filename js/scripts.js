(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away
		//responsive menu function	
		$('.header-navigation').hide();
		$('.logobox-home img').show();
		$('.nav-icon').on('click', function(event){
				event.preventDefault();
				var slideoutMenu = $('.header-navigation');	
				slideoutMenu.toggle(500);
				$('.logobox-home img').fadeToggle(500);
		});
		
		 //navigation hover style 
		$('.desktop_nav .menu-item-has-children').on('mouseenter', function(){
				$(this).siblings().children('.sub-menu').hide();
				if($(this).hasClass('menu-item-has-children')) {
					$(this).children('.sub-menu').delay('300').show();
				}
			})
		
			$('.desktop_nav .menu-item-has-children').on('mouseleave', function(){
				$(this).children('.sub-menu').hide();
			})
		//portfolio filters
		$(document).ready(function(){
			$('li.all').addClass('selected');	
			$('li.all a').addClass('active');
			$('.port-filters li').on('click', function(e){
				$(this).addClass('selected');
				$(this).children().addClass('active');	
				$('.works-feed > div').hide();
				if($(this).hasClass('show')) {
				$(this).siblings().removeClass('selected');
				$(this).siblings().children().removeClass('active');
				$(this).next('li').children().addClass('active');
				  $('.works-feed > div').show();
				} else if($(this).hasClass('all')) {
				$(this).siblings().removeClass('selected');
				$(this).siblings().children().removeClass('active');
				  $('.works-feed > div').show();
				} else {
				$(this).siblings().removeClass('selected');
				$(this).siblings().children().removeClass('active');
				  var categoryId = $(this).data('category');
				  $('div.cat-'+ categoryId).show();
				}
				e.preventDefault();
			  })
		});

	});
	
})(jQuery, this);
