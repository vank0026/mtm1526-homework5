$(document).ready(function() {
    /*
	AJAX is the process where we call information direct from the server without passing through a PHP so to load other information eg an html php+mySQL result etc
	*/
	$(".tab-buttons a").on("click", function(ev){
				
		$('.tab-buttons .active').removeClass('active');
		$(this).addClass('active');

	});
	
	$(".ajax-in1").on("click", function (ev) {
	$(".fill-me").hide();
	$(".fill-me").load("ajax-in1.html", function(){
            $(this).fadeIn(300);	
		});
	});
	
	$(".ajax-in2").on("click", function (ev) {
	$(".fill-me").hide();
	$(".fill-me").load("ajax-in2.html", function(){
            $(this).fadeIn(300);	
			});
	});
	
	$(".ajax-in3").on("click", function (ev) {
	$(".fill-me").hide();
	$(".fill-me").load("ajax-in3.html", function(){
            $(this).fadeIn(300);
		});
	});
	
	$(".ajax-in4").on("click", function (ev) {
	$(".fill-me").hide();
	$(".fill-me").load("ajax-in4.html", function(){
            $(this).fadeIn(300);	
			});
	});
});