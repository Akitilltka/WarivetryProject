document.addEventListener('DOMContentLoaded', function() {
    // Добавим класс loaded к body после загрузки страницы
    document.body.classList.add('loaded');

    document.querySelector('.main-menu').classList.add('show');
    document.querySelector('.features').classList.add('show');
    document.querySelector('.contact').classList.add('show');
    document.querySelector('footer').classList.add('show');

    // Вызовем функцию приветствия
    greetUser();
});

// Пример функции приветствия
function greetUser() {
    console.log('Я конечно понимаю, что не кто это не читает, но я должен это написать. Добро пожаловать!.');
}
// Функция для скрытия баннера о сборе данных в куки
function hideCookieBanner() {
    const cookieBanner = document.querySelector('.cookie-banner');
    cookieBanner.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    // Добавим класс loaded к body после загрузки страницы
    document.body.classList.add('loaded');

    document.querySelector('.main-menu').classList.add('show');
    document.querySelector('.features').classList.add('show');
    document.querySelector('.contact').classList.add('show');
    document.querySelector('footer').classList.add('show');
});
