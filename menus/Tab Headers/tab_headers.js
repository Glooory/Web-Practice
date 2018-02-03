document.getElementById("open-default").click();

function displayCity(cityName, element, color) {
    var i, tabContents, tabLinks;
    tabContents = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }

    document.getElementById(cityName).style.display = "block";
    element.style.backgroundColor = color;
}