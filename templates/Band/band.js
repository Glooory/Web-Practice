document.getElementById("menu_btn").onclick = function() {
    var menu = document.getElementById("navbar_small_screen");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};

var slidesCount = 1;
var slideTitle = document.getElementById("img-des-title");
var slideDes = document.getElementById("img-des-content");

function displaySlides() {
    var titles = ["Los Angeles", "Chicago", "New York"];
    var des = ["The Streets will make you feel brand new", "Big lights will inspire you", "Now hear it from New York"];
    var slides = document.getElementsByClassName("images-slide");
    var index = slidesCount % 3;
    for (var i = 0; i < slides.length; i++) {
        if (i == index) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
    slideTitle.innerHTML = titles[index];
    slideDes.innerHTML = des[index];
    slidesCount++;
}

window.setInterval(displaySlides, 5000);