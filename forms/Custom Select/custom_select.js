var selectContainers, i, j, selectElement, a, b, c;
selectContainers = document.getElementsByClassName("select-container");
for (i = 0; i < selectContainers.length; i++) {
    selectElement = selectContainers[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    selectContainers[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-item select-hide");
    for (j = 1; j < selectElement.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selectElement.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var k, m, n;
            m = this.parentNode.parentNode.getElementsByTagName("select")[0];
            n = this.parentNode.previousSibling;
            for (k = 0; k < m.length; k++) {
                if (m.options[k].innerHTML == this.innerHTML) {
                    m.selectedIndex = k;
                    n.innerHTML = this.innerHTML;
                    break;
                }
            }
            n.click();
        });
        b.appendChild(c);
    }
    selectContainers[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation;
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(element) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-item");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (element == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}