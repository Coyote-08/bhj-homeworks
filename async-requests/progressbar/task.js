const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / e.total;
    };

    xhr.send(formData);
});