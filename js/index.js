let totalSum = 0;
function productCalculation(target) {
    // product Title
    const itemSelected = document.getElementById("item-Selected-id");
    const li = document.createElement("li");
    const countProduct = itemSelected.childNodes.length;
    li.innerText = countProduct +". "+ target.childNodes[3].childNodes[3].innerText;
    itemSelected.appendChild(li);
    // product Total
    const totalPriceId = document.getElementById("total-price-id");
    const grandTotal = document.getElementById("total-id");
    const totalPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalSum = totalSum + parseFloat(totalPrice);
    totalPriceId.innerText = totalSum.toFixed(2);
    grandTotal.innerText = totalSum.toFixed(2);
    
    // make purchase condition 
    const makePurchaseBtn = document.getElementById("make-purchase-btn");
    if (totalSum > 0) {
        makePurchaseBtn.removeAttribute("disabled");
    } else {
        makePurchaseBtn.setAttribute("disabled",true)
    }

    // Discount Coupon condition 
    const applyBtn = document.getElementById("apply-btn");
    const couponApply = document.getElementById("coupon-code-input");
    if (totalSum >= 200) {
        applyBtn.removeAttribute("disabled");
        couponApply.removeAttribute("disabled");
    } else {
        applyBtn.setAttribute("disabled", true);
        couponApply.setAttribute("disabled", true);
    }
   
    // coupon code  
     
    const discountShow = document.getElementById("discount-id");
    const couponDis = 20;
    applyBtn.addEventListener('click', function () {
        if(couponApply.value === "SELL200"){
        const discount = (couponDis / 100) * totalSum;
            discountShow.innerText = discount.toFixed(2) + " TK";
            const grandTotalCal = totalSum - discount;
            grandTotal.innerText = grandTotalCal.toFixed(2);
           
            
        } else {
            const discountShow = document.getElementById("discount-id");
            const disocuntTextHide = document.getElementById("disocunt-Text-Hide");
            discountShow.innerText = "Wrong 😥";
            disocuntTextHide.innerText = "";
            
            grandTotal.innerText = totalSum.toFixed(2);
            
    }
    })

    document.getElementById("go-home-id").addEventListener('click',function () {
        
        li.innerText = "";
        couponApply.value = ""; 
        discountShow.innerText = "00";
        totalPriceId.innerText = "00";
        grandTotal.innerText = "00";
        totalSum = 0;
        itemSelected.removeChild(itemSelected.firstElementChild);
        makePurchaseBtn.setAttribute("disabled", true);
        applyBtn.setAttribute("disabled", true);
        couponApply.setAttribute("disabled", true);
        
    })
    
}

