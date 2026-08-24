const dead = document.getElementById("dead");
let currentDead = Number(dead.textContent);
const lost = document.getElementById("lost");
let currentLost = Number(lost.textContent);

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {

        if (getHole(i).className.includes('hole_has-mole')) {
            currentDead += 1;
            dead.textContent = currentDead;
        }
        else {
            currentLost += 1;
            lost.textContent = currentLost;
        }

        let result = false;

        if (currentDead === 10) {
            alert("Ты выиграл");
            result = true;
        }
        if (currentLost === 5) {
            alert("Ты проиграл");
            result = true;
        }

        if (result) {
            currentLost = 0;
            currentDead = 0;
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}

