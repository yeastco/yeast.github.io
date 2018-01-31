$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	//theFuture();
});


// function theFuture(){
//     $timezone = new Date().getTimezoneOffset()
//     $timezone = parseInt(($timezone<0? '+':'-')+(parseInt(Math.abs($timezone/60))));
//     if($timezone < 8)
//         $thefuture = (8-$timezone) + ' hours in the future.';
//     else
//         $thefuture = '';
//
//     $('#thefuture').text($thefuture);
// }
