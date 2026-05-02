const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

const productId = document.getElementById('productId');
const productName = document.getElementById('name');
const price = document.getElementById('price');
const city = document.getElementById('city');

const modal = document.getElementById('modal');

const modalProductId = document.getElementById('modalProductId');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalCity = document.getElementById('modalCity');

const okBtn = document.getElementById('okBtn');

openBtn.addEventListener('click', () => {
    modalProductId.innerHTML = `<span>Product Id: </span><span>${productId.value}</span>`;
    modalName.innerHTML = `<span>Name: </span><span>${productName.value}</span>`;
    modalPrice.innerHTML = `<span>Price: </span><span>${price.value}</span>`;
    modalCity.innerHTML = `<span>Shipped To: </span><span>${city.value}</span>`;

    modal.classList.add('show');
});

function closeModal() {
    modal.classList.remove('show');
}

// 1st way
closeBtn.addEventListener('click', closeModal);

// 2nd way
okBtn.addEventListener('click', closeModal);

// 3rd way
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// 4th way
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
