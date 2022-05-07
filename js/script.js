let itemBtn = document.querySelectorAll(".item-btn");
for (a = 0; a < itemBtn.length; a++) {
    itemBtn[a].name = "Sold";
    itemBtn[a].value = "Sold";
    itemBtn[a].style.background = "#999999";
    itemBtn[a].disabled = true;
    itemBtn[a].style.display = "none";
    /*
    if (itemBtn[a].name == "Buy") {
        itemBtn[a].style.background =
            "linear-gradient(to right, "
            + "#3b73a1"
            + ", "
            + "#5e8fb4"
            + ")";
    } else if (itemBtn[a].name == "Sell") {
        itemBtn[a].style.background = "#ba4369";
    } else {
        itemBtn[a].style.background = "#999999";
        itemBtn[a].disabled = true;
    }
    */
}
