document.getElementById("display-default").click();

function displayTab(tabName, element, backgroundColor) {
    var i, tabs, contents;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = "";
    }
    contents = document.getElementsByClassName("tab-content");
    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    element.style.backgroundColor = backgroundColor;
}