
const accordeon = document.querySelector('.feature-list'),
    accordeonButtons = document.querySelectorAll('.feature__link');

accordeonButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        accordeonButtons.forEach((button) => {
            button.classList.remove('feature__link_active');
            button.nextElementSibling.classList.add('hidden');
        });
        
        btn.classList.toggle('feature__link_active');
        // открываем контентный блок у каждой кнопки
        btn.nextElementSibling.classList.toggle('hidden');
    });
});