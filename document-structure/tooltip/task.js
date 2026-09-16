const withTooltip = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

withTooltip.forEach((element) => {
    element.onclick = (event) => {
        event.preventDefault();

        if (currentTooltip && currentTooltip.classList.contains('tooltip_active')) {
            currentTooltip.remove();
        }

        let tooltipText = element.title;
        let div = document.createElement('div');
        div.classList.add('tooltip');
        div.textContent = tooltipText;

        const coords = element.getBoundingClientRect();
        div.style.top = coords.bottom + 'px';
        div.style.left = coords.left + 'px';

        document.body.appendChild(div);
        div.classList.add('tooltip_active');

        currentTooltip = div;
    }
})