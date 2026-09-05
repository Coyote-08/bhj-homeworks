const controlFont = document.querySelectorAll('.font-size');
const bookContent = document.getElementById('book')

controlFont.forEach(font => {

    let fontSize;

    font.onclick = () => {

        controlFont.forEach(f => f.classList.remove('font-size_active'));
        font.classList.add('font-size_active');

        fontSize = font.dataset.size;

        if (fontSize === 'big') {
            bookContent.classList.add('book_fs-big')
            bookContent.classList.remove('book_fs-small')
        }
        else if (fontSize === 'small') {
            bookContent.classList.add('book_fs-small')
            bookContent.classList.remove('book_fs-big')
        }
        else if (fontSize === undefined) {
            bookContent.classList.remove('book_fs-small')
            bookContent.classList.remove('book_fs-big')
        }

        return false
    }
})