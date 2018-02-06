window.onscroll = function() { customScroll() };

var navBar = document.getElementById("nav-bar");
var topOffset = navBar.offsetTop;

function customScroll() {
    if (window.pageYOffset >= topOffset) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}