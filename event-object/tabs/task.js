const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabs.length; i++) {

    tabs[i].onclick = () => {
        
        for (let g = 0; g < tabs.length; g++) {
            tabs[g].classList.remove('tab_active')
            content[g].classList.remove('tab__content_active');
        }

        tabs[i].classList.add('tab_active')
        content[i].classList.add('tab__content_active');
    }
}  