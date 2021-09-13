$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    speed: 500,
    easing: "ease",
    infinite: false,
    draggable: true,
    waitForAnimate: false,
    centreMode: true,
  });
  var imgArray = [
      "./images/18.40.05 (2).jpeg",
      "./images/anime-4k.jpg",
      "./images/16.21.03.jpeg",
      "./images/16.15.45.jpeg",
      "./images/18.40.05 (2).jpeg",
    ],
    curIndex = 0;

  imgDuration = 5000;

  function slideShow() {
    document.getElementById("slider").className += "fadeOut";
    setTimeout(function () {
      document.getElementById("slider").src = imgArray[curIndex];
      document.getElementById("slider").className = "";
    }, 1000);

    curIndex++;

    if (curIndex == imgArray.length) {
      curIndex = 0;
    }

    setTimeout(slideShow, imgDuration);
  }
  slideShow();
});


