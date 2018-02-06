window.onscroll = function() { scrollFuntion() };

function scrollFuntion() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav-bar").style.top = "-50px";
    } else {
        document.getElementById("nav-bar").style.top = "0";
    }
}