$(window).scroll(function() {

	var scroll = $(window).scrollTop();

	var position = $("#img1").position();

	if(scroll >= position.top - 150) {
		document.getElementById("img1").style.marginTop = scroll/20 + 'px';
		document.getElementById("img2").style.marginTop = scroll/20 + 'px';
		document.getElementById("img3").style.marginTop = scroll/20 + 'px';
	}
});