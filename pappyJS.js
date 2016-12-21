$(document).ready( function() {
	"use strict"; $(".headerOptionAbout").hover(function(){
		$(".optionLineAbout").slideToggle(100);
	}, function(){
		$(".optionLineAbout").css("display","none");
	});
	
	$(".headerOptionTeam").hover(function(){
		$(".optionLineTeam").slideToggle(100);
	}, function(){
		$(".optionLineTeam").css("display","none");
	});
	
	$(".headerOptionWorkshops").hover(function(){
		$(".optionLineWorkshops").slideToggle(100);
	}, function(){
		$(".optionLineWorkshops").css("display","none");
	});
	
	$(".headerOptionProjects").hover(function(){
		$(".optionLineProjects").slideToggle(100);
	}, function(){
		$(".optionLineProjects").css("display","none");
	});
	
	$(".headerOptionGallery").hover(function(){
		$(".optionLineGallery").slideToggle(100);
	}, function(){
		$(".optionLineGallery").css("display","none");
	});
	
	$(".headerOptionContact").hover(function(){
		$(".optionLineContact").slideToggle(100);
	}, function(){
		$(".optionLineContact").css("display","none");
	});
	
$(document).ready(function(){
	$("#startLogo").delay(200).fadeIn(1500);
	$("#click").delay(400).fadeToggle(500);
	});

$(window).scroll( function(){
		$("#header").css("opacity", "1"-0.8*($(window).scrollTop()/(300+$(window).scrollTop())));
		$("#blackStrip").css("opacity", "1"-0.99*($(window).scrollTop()/(100+$(window).scrollTop())));
		
});

$("#header").hover(function(){
		$(this).animate({opacity:"1"},200);
		$("#blackStrip").animate({opacity:"1"},200);
	}, function(){
		$(this).animate({opacity:"1"-0.8*($(window).scrollTop()/(300+$(window).scrollTop()))},100);
		$("#blackStrip").animate({opacity:"1"-0.8*($(window).scrollTop()/(300+$(window).scrollTop()))},100);
	});
	
/*$(window).scroll(function(){
	$("#header").css("height", 6-2*($(window).scrollTop()/(50+$(window).scrollTop()))+"em");
	$("#blackStrip").css("margin-top", 6-2*($(window).scrollTop()/(50+$(window).scrollTop()))+"em");
}); */
	
/*$(window).scroll( function(){
	var height = $("#header").height();
	if ($(document).scrollTop() > 3*height) {
	$("#BGimage").animate({"opacity": 0,"z-index":-100},500);
	$("#header").fadeIn(500);
	$("#blackStrip").fadeIn(500);
	$('html, body').animate({ scrollTop: 0 }, 0);
	}
	$("#widthAdjust").css("opacity", "1"-($(window).scrollTop()/(300+$(window).scrollTop())));
	$("#startLogo").css("opacity", "1"-($(window).scrollTop()/(100+$(window).scrollTop()))); 
	
	 
}); */

$(window).bind('scroll', function(){
			parallaxScroll();
		});
		function parallaxScroll(){
			var scrolledY = $(window).scrollTop();
			$("#para1").css('top',((scrolledY*0.05))+"em");
			$("#testdiv").css('top',30 - ((scrolledY*0.0005)) + 'em');
			$("#testdivGrey").css('top',72 - ((scrolledY*0.01)) + 'em');
			$("#para2").css('top',30 + ((scrolledY*0.02))+"em");
			/*$("#BGimage").css('top', - ((scrolledY*0.01)) + 'em');*/
		} 
		
$("#click").on("click", function(){
	$('#startLogo').animate({'top':-30+ '%'},{queue: false, duration: 1500}).animate({"opacity":0},{queue: false, duration: 1000});
	$("#widthAdjust").animate({'top':-100+ 'em'},{queue: false, duration: 4000}).animate({"opacity":0},{queue: false, duration: 1000});
	$("#BGimage").animate({"z-index":-100},{queue: false, duration: 1000});
	$("#click").animate({"opacity": 0,"z-index":-101},300);
	$("#header").delay(500).fadeIn(1000);
	$("#blackStrip").delay(500).fadeIn(1000);
	$("#para1").delay(500).fadeIn(1000);
	$("#para2").delay(500).fadeIn(1000);
	$(".blueLine").delay(500).fadeIn(1000);
	$("#logo").delay(300).fadeIn(1000);
	$(".headerOptionAbout").delay(450).fadeIn(1000);
	$(".headerOptionTeam").delay(600).fadeIn(1000);
	$(".headerOptionWorkshops").delay(750).fadeIn(1000);
	$(".headerOptionProjects").delay(900).fadeIn(1000);
	$(".headerOptionGallery").delay(1050).fadeIn(1000);
	$(".headerOptionContact").delay(1050).fadeIn(1000);
});

/*$(document).ready(function(){if( $("#BGimage").css("opacity")>0){
	$(this).scrollTop(0);
}});*/

});

