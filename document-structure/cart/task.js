const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const decButtons = document.querySelectorAll('.product__quantity-control_dec');

incButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const value = product.querySelector('.product__quantity-value');
        value.textContent = Number(value.textContent) + 1;
    });
});

decButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const value = product.querySelector('.product__quantity-value');
        const current = Number(value.textContent);
        if (current > 1) {
            value.textContent = current - 1;
        }
    });
});


const addButtons = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const id = product.dataset.id;
        const image = product.querySelector('.product__image').src;
        const quantity = Number(product.querySelector('.product__quantity-value').textContent);

        const existing = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

        if (existing) {
            const countEl = existing.querySelector('.cart__product-count');
            countEl.textContent = Number(countEl.textContent) + quantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = id;

            const img = document.createElement('img');
            img.classList.add('cart__product-image');
            img.src = image;

            const count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.textContent = quantity;

            cartProduct.appendChild(img);
            cartProduct.appendChild(count);
            cartProducts.appendChild(cartProduct);
        }
    });
});