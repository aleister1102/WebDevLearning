let modal = document.querySelector(".js-modal");
let modalContainer = document.querySelector(".js-modal-container")

// Open modal
let buyTickets = document.querySelectorAll('.js-buy-ticket');
for (let element of buyTickets) {
    element.addEventListener('click', function () {
        modal.classList.add("modal--open")
    })
}

function closeModal() {
    modal.classList.remove("modal--open")
}

// Close modal with button
let closeButtonModal = document.querySelectorAll(".js-close-modal");
for (let element of closeButtonModal) {
    element.addEventListener('click', closeModal)
}

// Close modal without button
modal.addEventListener('click', closeModal)

// Stop Propagation
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})