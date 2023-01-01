var className = "headerScroll";
var scrollTrigger = 10;
var checkDesgin = "Duis aute irure dolor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. Sed id est tincidunt,iaculis nulla vel, sodales metus. Morbi interdum accumsan augue, in accumsan neque lacinia sed. Fusce cursus eu ligula ut gravida. Lorem ipsum dolor sit amet,consectetuer dipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.";
var checkMobile = "Eget mi proin sed libero. Nisi porta lorem mollis aliquam. Bibendum neque egestas congue quisque egestas diam in. Orci porta non pulvinar neque laoreet suspendisse. Suspendisse sed nisi lacus sed. Amet nisl suscipit adipiscing bibendum. Feugiat scelerisque varius morbi enim nunc faucibus a. Gravida quis blandit turpis cursus in hac habitasse.";
var checkSocial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit. Enim eu turpis egestas pretium aenean. Eros donec ac odio tempor orci dapibus ultrices in iaculis. in voluptate velit esse dolore eu fugiat nulla pariatur. Sed id est tincidunt,iaculis nulla vel, sodales.";
var checkBurgerMenu = false;

window.onscroll = function () {
  
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("headerContainer")[0].classList.add(className);
  } else {
    document.getElementsByClassName("headerContainer")[0].classList.remove(className);
  }
  
};

function changeContent(text,object) {
  var paragraphContent = document.getElementsByClassName("checkContent")[0];
  if (paragraphContent.classList[1] != text) {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    object.classList.add("selected");
    paragraphContent.style.opacity = 0;
    paragraphContent.classList.remove(paragraphContent.classList[1]);
    paragraphContent.classList.add(text);
    setTimeout(() => {
      if (text == "checkDesgin") {
        paragraphContent.innerHTML = checkDesgin;
      } else if (text == "checkMobile") {
        paragraphContent.innerHTML = checkMobile;
      } else {
        paragraphContent.innerHTML = checkSocial;
      }
    }, 300);
    setTimeout(() => {
      paragraphContent.style.opacity = 1;
    }, 500);
  }
  else{
    return;
  }
}
function changableBackground(){
  document.getElementsByClassName("background")[0].style.backgound-image("url('../images/tech.jpg')");
}

function clickBugerMenu(){
  if(!checkBurgerMenu){
    openWindow();
    checkBurgerMenu = true;
  }
  else{
    closeWindow();
    checkBurgerMenu = false;
  }
}
function openWindow(){
  var navigation = document.getElementsByTagName("nav")[0];
  navigation.style.transform="translateY(0px)";
  document.getElementsByClassName("burgerButton")[0].classList.remove("closeBurgerMenu");
  document.getElementsByClassName("burgerButton")[0].classList.add("openBurgerMenu");
}
function closeWindow(){
  var navigation = document.getElementsByTagName("nav")[0];
  navigation.style.transform="translateY(-2000px)";
  document.getElementsByClassName("burgerButton")[0].classList.remove("openBurgerMenu");
  document.getElementsByClassName("burgerButton")[0].classList.add("closeBurgerMenu");
}
