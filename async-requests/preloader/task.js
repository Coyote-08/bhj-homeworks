async function loadCourses() {
    
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    const data = await response.json();

    const items = document.getElementById('items');
    const currencies = Object.values(data.response.Valute);

    for (const a of currencies) {
        const item = document.createElement('div');
        item.classList.add('item');

        const code = document.createElement('div');
        code.classList.add('item__code');
        code.textContent = a.CharCode;

        const value = document.createElement('div');
        value.classList.add('item__value');
        value.textContent = a.Value;

        const rub = document.createElement('div');
        rub.classList.add('item__currency');
        rub.textContent = 'руб.';

        item.appendChild(code);
        item.appendChild(value);
        item.appendChild(rub);
        items.appendChild(item);
    }

    img.classList.remove('loader_active');
}

loadCourses();

