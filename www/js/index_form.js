$(document).ready(function(){
    $("#sign-up").hide();
    $("#sign-in").hide();
    
    $("#sign-in-button").click(function(){
	$("#sign-in").toggle();
    });
	    
    $("#sign-up-button").click(function(){
	$("#sign-up").toggle();
    });
});

