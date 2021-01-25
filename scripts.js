const cards = document.getElementsByClassName('card');
const buyButtons = document.getElementsByClassName('btn-buy');
const modal = document.getElementById('modal-layer');
const btnClose = document.getElementById('btn-close');

for (let btn of buyButtons) {
    btn.addEventListener('click', (event) => {
        modal.style.display = 'block';
        event.stopPropagation();
    });
}

// close the modal
btnClose.addEventListener('click', () => modal.style.display = 'none');

for (let card of cards) {
    card.addEventListener('click', (event) => {
        const overlay = card.getElementsByClassName('overlay')[0];
        overlay.style.opacity = 1;
        overlay.style.zIndex = 1;
        setTimeout(() => {
            overlay.style.opacity = 0;
            overlay.style.zIndex = -1;
        }, 2000);
    });
}


