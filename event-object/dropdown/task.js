const values = document.querySelectorAll('.dropdown__value');

values.forEach(value => {
    const dropdown = value.closest('.dropdown');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');

    value.onclick = () => {
        list.classList.add('dropdown__list_active');
    };

    for (let i = 0; i < items.length; i++) {
        items[i].onclick = () => {
            value.textContent = items[i].textContent;
            list.classList.remove('dropdown__list_active');
            return false;
        };
    }
});