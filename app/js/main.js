'use strict';

(function($){
	$(document).ready(function() {
		// Code
		// Mobile menu
		$('.burger-menu').click(function() {
			$(this).toggleClass('burger-menu--active');
			$('body').toggleClass('is-menu-shown');
		});
		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1
		});
		$('.contact-item__icon').click(function() {
			$('.contact-item').toggleClass('contact-item__text--show');
			//$('body').toggleClass('is-menu-shown');
		});
	});
})(jQuery);

function initMap() {
	var coords, map, marker,content, info, styles;
	//content = '<h1 class="title">I\'m here</h1>'
	
  // The location of Uluru 49.584055, 34.556989
	coords = {lat: 49.584055, 	lng: 34.556989
  };
  // The map, centered at Uluru
	map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 16, 
      	center: coords,
      	styles: styles
      });
	info = new google.maps.InfoWindow({
		//content: content
	});
  // The marker, positioned at Uluru
	marker = new google.maps.Marker({
  	position: coords,
  	map: map,
  	icon: 'images/map-marker.png',
  	draggable: true
  });
	marker.addListener('click',function(){
		info.open(map, marker);
	});
}