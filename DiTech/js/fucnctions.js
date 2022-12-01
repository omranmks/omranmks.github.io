var className = "headerScroll";
var scrollTrigger = 10;


window.onscroll = function() {

  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("headerContainer")[0].classList.add(className);
  } else {
    document.getElementsByClassName("headerContainer")[0].classList.remove(className);
  }
};