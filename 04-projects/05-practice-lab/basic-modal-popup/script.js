const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');

// Simple for open and close...using arrow funtion here
openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    openBtn.style.opacity = 0;

    console.log('Modal opened');
});

function closeModal() {
    modal.classList.remove('show');
    openBtn.style.opacity = 1;

    console.log('Modal closed');
}

// ---------------------------------------------------------
// Adding EventListeners...

// 1st way
closeBtn.addEventListener('click', closeModal);

// 2nd way
// If user presses Escape key or click anywhere outside the modal-box (means in the whole overlay) adding events for other purpose means if user presses escape key or click on the
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// 3rd way
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
