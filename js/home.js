$(document).ready(function(){
$(window).resize(function(){
   
   if ($(window).width()<600) {
   	$('#ham').show().click(function(){
   		$('#menu-back').show();
   		$('.menu').show(150);
   		$('#close').show(50).click(function(){
   			$('.menu').hide(150);
   			$('#menu-back').hide();
   		});
   		$('#menu-back').click(function(){
   			$('.menu').hide(150);
   			$('#menu-back').hide();
   		});
   		// $('#ham').hide();
   	});
   }
   else{
   	$('.navbar').show();
   }
});

});