const button = document.querySelector('.btn-circle');

button.addEventListener('click', () => {
    button.classList.add('fast-spin');
    setTimeout(() => {
        button.classList.remove('fast-spin');
    }, 400);
})

