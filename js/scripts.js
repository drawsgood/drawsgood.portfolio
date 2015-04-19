var blurbOverlay = ".blurbOverlay";

//jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
//	var caseStudy_1 = jQuery('#caseStudy_1').offset().top;
//	var caseStudy_2 = jQuery('#caseStudy_2').offset().top;
	
	// When #scroll is clicked
//	jQuery('#one').click(function(){
		// Scroll down to 'catTopPosition'
//		jQuery('html, body').animate({scrollTop:caseStudy_1}, 'slow');
		// Stop the link from acting like a normal anchor link
//		return false;
//	});
    
    
//    	jQuery('#two').click(function(){
		// Scroll down to 'catTopPosition'
//		jQuery('html, body').animate({scrollTop:caseStudy_2}, 'slow');
		// Stop the link from acting like a normal anchor link
//		return false;
//	});
//});


$(".myButton").hover(function() {
    $(this).toggleClass("buttonOn");
    $(this).children(".buttonText").toggleClass("textOn");
});

$("#one").hover(function() {
    $(this).find(blurbOverlay).toggleClass("blurbMove");
});

$("#one").click(function() {
    $(this).toggleClass("blockGrow");
});

$(".block").hover(function() {
    $(this).toggleClass("blockLift");
});

$("#two").hover(function() {
    $(this).find(blurbOverlay).toggleClass("blurbMove");
});

$("#three").hover(function() {
    $(this).find(blurbOverlay).toggleClass("blurbMove");
});

$(".buttonLarge").hover(function() {
    $(this).toggleClass("buttonOn");
    $(this).toggleClass("textOn");
});



