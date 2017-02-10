$(document).ready(function(){
	$(".wite_bg").click(function(){
		$(".content").eq($(".wite_bg").index(this)).addClass("active").siblings().removeClass("active");
		$(".wite_bg").eq($(".wite_bg").index(this)).addClass("active").siblings().removeClass("active");
	});
}

);

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

var playing = true;
var pauseButton = document.getElementById('pause');

function nextSlide() {
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

function pauseSlideshow() {
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow() {
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(nextSlide,5000);
}

pauseButton.onclick = function() {
if (playing) {
 pauseSlideshow();
} else { 
	playSlideshow();
}
};