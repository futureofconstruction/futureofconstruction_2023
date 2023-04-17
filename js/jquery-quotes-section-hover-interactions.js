$(document).ready(function(){
	$("article.quote").hover(function(){
		$(this).delay(2000).toggleClass("quotes-section-hover-interaction");
	});
});