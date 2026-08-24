const cookie = document.getElementById("cookie")

const count = document.getElementById("clicker__counter")
let countCookie = Number(count.textContent);

cookie.onclick = () => {
    countCookie += 1;
    count.textContent = countCookie;

    if (cookie.width === 200) {
        cookie.width = 250;
        cookie.height = 250;
    }
    else {
        cookie.width = 200;
        cookie.height = 200;
    }
}