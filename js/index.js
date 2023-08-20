let totalSum = 0;
function productCalculation(target) {
    // product Title
    const itemSelected = document.getElementById("item-Selected-id");
    const li = document.createElement("li");
    console.log();
    li.innerText = itemSelected.childNodes.length +". "+ target.childNodes[3].childNodes[3].innerText;
    itemSelected.appendChild(li);

    
    // product Total
    const totalPriceId = document.getElementById("total-price-id");
    const totalPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalSum = totalSum + parseFloat(totalPrice);
    totalPriceId.innerText = totalSum.toFixed(2) + "TK";
    
   
}