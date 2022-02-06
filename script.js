var sliderFrameWrapper = document.getElementById ("slider-frame-wrapper");
var sliderWidth = 324;
var sliderSlides = 6;
var sliderCurrentSlide = 1;

var slideDuration = 3000;

setInterval (function () {
  sliderCurrentSlide += 1;
  if (sliderCurrentSlide > sliderSlides) {
    sliderCurrentSlide = 1;
  }
  var sliderPosition = (sliderCurrentSlide - 1) * (-sliderWidth) - (sliderWidth*2);
  sliderFrameWrapper.style.left = sliderPosition + "px";
  console.log ("current slide", sliderCurrentSlide);

  if (sliderCurrentSlide == 6) {
    setTimeout (function () {
      sliderFrameWrapper.setAttribute("data-no-transition", true);
      sliderFrameWrapper.style.left = (-sliderWidth) + "px";
      setTimeout (function () {
        sliderFrameWrapper.setAttribute("data-no-transition", false);
      }, 10);
    }, slideDuration-20);
  }
}, slideDuration);