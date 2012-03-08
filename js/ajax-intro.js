$(document).ready(function() {
    /*
	AJAX is the process where we call information direct from the server without passing through a PHP so to load other information eg an html php+mySQL result etc
	*/
	
	$(".ajax-in1").on("click", function (ev) {
	$(".fill-me").load("ajax-in1.html");	// ajax files are relative to the html file and not the js file
	});
	
	$(".ajax-in2").on("click", function (ev) {
	$(".fill-me").load("ajax-in2.html");	// ajax files are relative to the html file and not the js file
	});
	
	$(".ajax-in3").on("click", function (ev) {
	$(".fill-me").load("ajax-in3.html");	// ajax files are relative to the html file and not the js file
	});
	
	$(".ajax-in4").on("click", function (ev) {
	$(".fill-me").load("ajax-in4.html");	// ajax files are relative to the html file and not the js file
	});
});