//These lines are code are written by theAyomidealonge 2020

/** First Slider*/
$(".slider-one")
.not(".slick-initialized")
.slick({
	autoplay:true,
	autoplaySpeed: 3000,
	dots: true,
	prevArrow: ".site-slider .slider-btn .prev",
	nextArrow: ".site-slider .slider-btn .next",
	slidesToShow: 2,
	slidesToScroll: 1,
});

/** Second Slider*/
$(".slider-two")
.not(".slick-initialized")
.slick({
	prevArrow: ".site-slider-two .prev",
	nextArrow: ".site-slider-two .next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//AOS Instance
AOS.init();

