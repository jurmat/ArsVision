$(document).ready(function(){
	
	new WOW().init();
	
	var reviewsSlider = $('.slider').lightSlider({
			
		item:1,
		loop:true,
		adaptiveHeight:false,
		autoWidth:false,
		slideMove:1,
		speed:1000,
		
		pause :  5000 ,
//		auto:true,
		pager: true,
		pauseOnHover: false,
		controls: false,
	
		onBeforeSlide: function(el){
			$('.curent').text(el.getCurrentSlideCount());
			sliderBussy = true;
		},
		onAfterSlide: function(){
			sliderBussy = false;
		},

		
		
		
	});
	$('.total').text(reviewsSlider.getTotalSlideCount());


	$('.RevSlidePrev').click(function() {
		if(sliderBussy) return;
		reviewsSlider.goToPrevSlide();

	});

	$('.RevSlideNext').click(function(e) {
		if(sliderBussy) return;
		reviewsSlider.goToNextSlide();

	});
	
	sliderBussy = false;
	
});