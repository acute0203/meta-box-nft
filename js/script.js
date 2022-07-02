let itemBtn = document.querySelectorAll(".item-btn");
for (a = 0; a < itemBtn.length; a++) {
    itemBtn[a].name = "SOLD";
    itemBtn[a].value = "SOLD";
    itemBtn[a].style.background = "#ba4369";
    itemBtn[a].disabled = true;
}

let itemTransferBtn = document.querySelectorAll(".item-transfer-btn");
for (a = 0; a < itemTransferBtn.length; a++) {
    itemTransferBtn[a].name = "Transfer";
    itemTransferBtn[a].value = "Transfer";
    itemTransferBtn[a].style.background = "#ba4369";
    itemTransferBtn[a].disabled = true;
    itemTransferBtn[a].style.display = "none";
}
