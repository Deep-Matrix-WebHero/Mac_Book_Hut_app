//----------------- Extra Price Add Function------------------
function addAllPrice(costID, price) {
    const preCost = document.getElementById(costID);
    preCost.innerHTML = price;
    totalPrice();
    return preCost;
};

// ------------------------Total Price Count Function-------------------
function totalPrice() {
    const ExtraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraDeliveryCost = document.getElementById('extra-delivery-cost');
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = 1299 + parseInt(ExtraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(extraDeliveryCost.innerText);
    previousTotalPrice.innerHTML = totalPrice;
    const subTotalPrice = document.getElementById('sub-total-price');
    subTotalPrice.innerHTML = totalPrice;
}

//--------------------Function Calling Shortcut Function--------------------
function buttonClicked(btnID, costID, price) {
    document.getElementById(btnID).addEventListener('click', function() {
        addAllPrice(costID, price);
    });
};

//---------------------Functions Calling----------------

buttonClicked('memory-0', 'extra-memory-cost', 0);

buttonClicked('memory-1', 'extra-memory-cost', 180);

buttonClicked('storage-0', 'extra-storage-cost', 0);

buttonClicked('storage-1', 'extra-storage-cost', 100);

buttonClicked('storage-2', 'extra-storage-cost', 180);

buttonClicked('delivery-0', 'extra-delivery-cost', 0);

buttonClicked('delivery-1', 'extra-delivery-cost', 20);

function finalPricePromo() {
    const promoField = document.getElementById('promo-code-field');
    const priceFinal = document.getElementById('sub-total-price');
    const totalPrice = document.getElementById('total-price');
    const discount = parseInt(totalPrice.innerHTML) / 100 * 20;
    if (promoField.value == 'stevekaku') {
        const totalPriceFinalPromo = parseInt(totalPrice.innerHTML) - discount;
        priceFinal.innerHTML = totalPriceFinalPromo;
    } else if (promoField.value = '') {

    } else {
        alert("oops! You entered an invalid Promo Code!!");
    }
    promoField.value = '';
};
//------------------------------- Appling Promo Code by using event ahndler-------------------------
document.getElementById('promo-code-btn').addEventListener('click', function() {
    finalPricePromo();
});