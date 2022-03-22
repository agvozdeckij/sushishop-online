function toggleCartStatus() {
    
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpyBadge = document.querySelector('[data-cart-empty]')
    const cartOrderBadge = document.querySelector('#order-form')

    if (cartWrapper.children.length > 0) {
        
        cartEmpyBadge.classList.add('none')
        cartOrderBadge.classList.remove('none')

    } else {
        
        cartEmpyBadge.classList.remove('none')
        cartOrderBadge.classList.add('none')
    }
}