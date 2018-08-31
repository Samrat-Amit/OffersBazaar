$(document).ready(function(){
$(window).scroll(function(){
        var c =$('.nav').offset().top;
        if (c>=10) {
        	// alert('s');
        	$('.nav').animate({'height':'70px','z-index':'300'},10);
        }
        else{
        	$('.nav').animate({'height':'200px','z-index':'1'},1);
        }
    });
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
   	$('.menu').show(0);
   }

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
   	$('.menu').show();
   }
});
});