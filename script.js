// Product Price 
const mobilePrice = 1219;
const casingPrice = 59;

// Four Quantity Button
const mobileQtyMinus = document.getElementById("mobile_qty_minus");
mobileQtyMinus.addEventListener("click", function(){
    minus_button_function("mobile_qty_input", mobilePrice, "mobile_price");
    total_amount();
    
})

const mobileQtyPlus = document.getElementById("mobile_qty_plus");
mobileQtyPlus.addEventListener("click", function(){
    plus_button_function("mobile_qty_input", mobilePrice, "mobile_price");
    total_amount();
})

const casingQtyMinus = document.getElementById("casing_qty_minus");
casingQtyMinus.addEventListener("click", function(){
    minus_button_function("casing_qty_input", casingPrice, "casing_price");
    total_amount();   
})

const casingQtyPlus = document.getElementById("casing_qty_plus");
casingQtyPlus.addEventListener("click", function(){
    plus_button_function("casing_qty_input", casingPrice, "casing_price");
    total_amount();    
})

// Two Remove Button
const removeMobile = document.getElementById("remove_mobile");
removeMobile.addEventListener("click", function(){
    remove_mobile();
    total_amount();
})

const removeCasing = document.getElementById("remove_casing");
removeCasing.addEventListener("click", function(){
    remove_casing();
    total_amount();
})

// Minus Button Function 
function minus_button_function(id, price, id1){
    const currentQty = document.getElementById(id).value;
    const currentQtyNumber = parseFloat(currentQty);
    if (currentQtyNumber>=1) {
        finalQtyNumber = currentQtyNumber-1;
        document.getElementById(id).value = finalQtyNumber;

        const finalMobilePrice = price*finalQtyNumber;
        document.getElementById(id1).innerText = finalMobilePrice;
        
    }
}

// Plus Button Function 
function plus_button_function(id, price, id1){
    const currentQty = document.getElementById(id).value;
    const currentQtyNumber = parseFloat(currentQty);
    const finalQtyNumber = currentQtyNumber+1;
    document.getElementById(id).value = finalQtyNumber;

    const finalCasingPrice = price*finalQtyNumber;
    document.getElementById(id1).innerText = finalCasingPrice;

}

// Total Amount Calculation 
function total_amount(){
    const subtotal_mobile_string = document.getElementById("mobile_price").innerText;
    const subtotal_mobile = parseFloat(subtotal_mobile_string);
    const subtotal_casing_string = document.getElementById("casing_price").innerText;
    const subtotal_casing = parseFloat(subtotal_casing_string);
    const subTotal = subtotal_mobile+subtotal_casing;
    document.getElementById("subtotal").innerText = subTotal;
    const tax_two_digit = subTotal*0.02;
    document.getElementById("tax").innerText = tax_two_digit.toFixed(2);
    const total = tax_two_digit + subTotal;
    document.getElementById("total").innerText = total;
}

// Product Remove 
function remove_mobile(){
    const mobileArea = document.getElementById("product_mobile");
    mobileArea.style.display = "none";
    document.getElementById("mobile_price").innerText = 0;
}
function remove_casing(){
    const casingArea = document.getElementById("product_casing");
    casingArea.style.display = "none";
    document.getElementById("casing_price").innerText =0;
}


