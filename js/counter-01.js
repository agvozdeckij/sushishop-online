console.log('Hello from counter-01 JS')

// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем клик по кнопке btnMinus
btnMinus.addEventListener('click', function () {

    // Проверяем чтобы счётчик был больше единицы
    if (parseInt(counter.innerText) > 1) {

        // изменяем текст в счётчике,уменьшая его на 1
        counter.innerText = --counter.innerText;
    }
});

// отсдеживаем клик по btnPlus
btnPlus.addEventListener('click', function () {

        // изменяем текст в счётчике,увеличивая его на 1
    counter.innerText = ++counter.innerText;
});


