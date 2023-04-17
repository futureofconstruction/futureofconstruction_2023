$(document).ready(function(){
	$("svg.stroke-black").mouseover(function(){
		$(this).toggleClass("stroke-blue");
	});
	$("svg.stroke-blue").mouseover(function(){
		$(this).toggleClass("stroke-blue").addClass("stroke-black");
	});
	$("div#arrows-background svg").click(function(){
		$(this).fadeTo(500,0).delay(3000).fadeTo(3000,1);
	});
});