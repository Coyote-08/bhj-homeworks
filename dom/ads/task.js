const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let i = 0;

    setInterval(() => {
        cases[i].classList.remove('rotator__case_active');
        i+=1;
        if (i===cases.length) {
            i=0;
        }
        cases[i].classList.add('rotator__case_active');
    }, 1000);
});