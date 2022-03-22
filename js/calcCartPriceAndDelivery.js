function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost')

    let totalPrice = 0;
    cartItems.forEach(function (item) {

        const quantityEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(quantityEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })
    
    totalPriceEl.innerText = totalPrice;
    
    if (totalPrice >= 600) { 
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
}

}