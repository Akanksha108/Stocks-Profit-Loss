const purchasePrice = document.getElementById("purchase_price");

const stockQuantity = document.getElementById("stock_quantity");

const currentPrice = document.getElementById("current_price");

let submitBtn = document.getElementById("submit_btn");

let output = document.getElementById("output");

let stocksBackground = document.getElementById("stocks");

heroImg = document.getElementById("hero_img");

function celebration(){
    document.body.style.backgroundImage = "url('./images/pexels-olya-kobruseva-5386754.jpg'}";
}

submitBtn.addEventListener("click", function(event){

    event.preventDefault();

    let purchasePriceValue = purchasePrice.value * stockQuantity.value;

    let currentPriceValue = currentPrice.value * stockQuantity.value;

    if(currentPriceValue > purchasePriceValue){
        let profit = currentPriceValue - purchasePriceValue;

        let profitPercent = ((profit/purchasePriceValue) * 100).toFixed(2);

        // Added Styles to output
        output.style.border = "2px solid #064E3B";
        output.style.background = "linear-gradient(to right, #00D956, #0468CD)";
        output.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 30px 90px";
       
        output.innerHTML =`You have gained ${profitPercent}% .Your total profit is ₹${profit}`;

        if(profitPercent > 50){
            stocksBackground.style.backgroundImage = "url('./images/celebration1_gif.gif')";

            output.innerHTML =`You have gained ${profitPercent}% .Your total profit is ₹${profit}`;
        }
    }
    else{
        let loss = purchasePriceValue - currentPriceValue;

        let lossPercent = ((loss/purchasePriceValue) * 100).toFixed(2);


         // Added Styles to output
        output.style.border = "2px solid #064E3B";
        output.style.background = "linear-gradient(to right, #00D956, #0468CD)";
        output.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 30px 90px";

        output.innerHTML =`You lost ${lossPercent}%. Your total loss is ₹${loss}`;

        if(lossPercent > 50){

            heroImg.style.display = "none";

            stocksBackground.style.backgroundImage = "url('./images/sad_gif.gif')";

            stocksBackground.style.backgroundRepeat = "no-repeat";

            stocksBackground.style.backgroundSize = "cover";

            output.style.border = "2px solid #064E3B";

            output.style.background = "black";

            output.style.color = "white";

            output.innerHTML =`You lost ${lossPercent}%. Your total loss is ₹${loss}`;

        }
    }

});
