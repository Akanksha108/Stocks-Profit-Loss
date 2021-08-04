const purchasePrice = document.getElementById("purchase_price");

const stockQuantity = document.getElementById("stock_quantity");

const currentPrice = document.getElementById("current_price");

let submitBtn = document.getElementById("submit_btn");


submitBtn.addEventListener("click", function(event){

    event.preventDefault();

    let purchasePriceValue = purchasePrice.value * stockQuantity.value;

    let currentPriceValue = currentPrice.value * stockQuantity.value;

    if(currentPriceValue > purchasePriceValue){
        let profit = currentPriceValue - purchasePriceValue;

        console.log(`You have made a profit of Rs.${profit}`);
    }
    else{
        let loss = purchasePriceValue - currentPriceValue;

        console.log(`loss of ${loss}`);
    }

});
