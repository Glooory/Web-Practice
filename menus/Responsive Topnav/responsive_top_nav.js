function openMenu() {
    var x = document.getElementById("nav-top");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}