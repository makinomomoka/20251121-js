const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', () => {
    btnChange.classList.add('done');
    btnChange.textContent = '完了!';
});