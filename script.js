// Пример: Открытие модального окна для формы обратной связи
const contactButton = document.querySelector('.btn-contact');
const modal = document.querySelector('.modal');

contactButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});