
$(function(){


	$('.song').hover(function(){

		$(this).children('div').fadeIn(150);



	},function(){

		$(this).children('div .icon').fadeOut(150);
	})






	// Remove the place holder whin focusing on the field;

	
	var theAttr = '';

	$('.search-input').focus(function(){

		theAttr = $(this).attr('placeholder');

		$(this).attr('placeholder','');


	}).blur(function(){

		$(this).attr('placeholder', theAttr);

	});


});




