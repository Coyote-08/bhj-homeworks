async function loadCourses() {

    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    const data = await response.json();

    const title = document.getElementById('poll__title');
    title.textContent = data.data.title;

    const contai = document.getElementById('poll__answers');
    const answers = data.data.answers;

    for (const a of answers) {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = a;

        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });

        contai.appendChild(button);
    }

}

loadCourses();