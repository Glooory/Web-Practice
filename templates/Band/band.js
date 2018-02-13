document.getElementById("menu_btn").onclick = function() {
    var menu = document.getElementById("navbar_small_screen");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};