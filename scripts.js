const cards = document.getElementsByClassName('card');
const buyButtons = document.getElementsByClassName('card__button-buy');
const modal = document.getElementById('modal-layer');
const btnClose = document.getElementById('btn-close');

// set event listener to card buttons
for (let btn of buyButtons) {
    btn.addEventListener('click', (event) => {
        modal.style.display = 'block';
        event.stopPropagation();
    });
}

// close the modal
btnClose.addEventListener('click', () => modal.style.display = 'none');

// set event listener to the cards
for (let card of cards) {
    card.addEventListener('click', (event) => {
        const overlay = card.getElementsByClassName('card__overlay')[0];
        overlay.style.opacity = 1;
        overlay.style.zIndex = 1;
        setTimeout(() => {
            overlay.style.opacity = 0;
            overlay.style.zIndex = -1;
        }, 2000);
    });
}


