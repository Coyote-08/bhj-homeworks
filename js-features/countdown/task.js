const time = document.getElementById("timer");
let currentTime = Number(time.textContent);

const timerId = setInterval(() => {
    currentTime -= 1;
    time.textContent = currentTime;

    if (currentTime <= 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
}, 1000);