console.log("hello from Js-counter-02")

window.addEventListener('click', function (event) {

    let counter;
    // проверяем клик строго по кнопке Plus or Minus
    if (event.target.dataset.action==='plus'||event.target.dataset.action === 'minus') {
    
     // Находим обёртку счётчика
    const counterWrapper = event.target.closest('.counter-wrapper');
    // Находим обёртку с числом счётчика
    counter = counterWrapper.querySelector('[data-counter]');
}

//    проверяем,является ли элемент, по которому был клик, кнопкой Plus
    if (event.target.dataset.action==='plus') {
        // // изменяем текст в счётчике,увеличивая его на 1
        counter.innerText = ++counter.innerText;
    }
//    проверяем,является ли элемент, по которому был клик, кнопкой Minus

    if (event.target.dataset.action === 'minus') {
    
       if (parseInt(counter.innerText) > 1) {
        // изменяем текст в счётчике,уменьшая его на 1
        counter.innerText = --counter.innerText;
       } else if (event.target.closest('.cart-wrapper')&&parseInt(counter.innerText)===1) {
        //   Проверяем товар который находится в корзине, если он есть и значение его 
        // счётчика равно 1, при нажатии на кнопку минус удаляем его из корзины
           event.target.closest('.cart-item').remove()
        }
       
    }
})