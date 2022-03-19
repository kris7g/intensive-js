const modalButton = document.querySelectorAll('.more'),
        modal = document.querySelector('.modal'),
        overlay = modal.querySelector('.overlay'),
        closeButton = modal.querySelector('.modal__close');

modalButton.forEach((modalB) => {
    modalB.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
});



overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});