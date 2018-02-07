var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(index) {
    var i, items, thumbnails;
    items = document.getElementsByClassName("gallery-item");
    thumbnails = document.getElementsByClassName("thumbnail");
    if (index > items.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = items.length;
    }
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    items[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].className += " active"
    document.getElementById("caption").innerHTML = thumbnails[slideIndex].alt;
}