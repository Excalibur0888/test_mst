document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    let lastScroll = 0;

    // Обработка скролла
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }

        lastScroll = currentScroll;
    });

    // Обработка бургер-меню
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Плавная прокрутка для кнопок ORDER
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Валидация формы
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Здесь можно добавить логику отправки формы
        console.log('Form submitted');
    });
}); 