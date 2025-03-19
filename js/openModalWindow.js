

const bookingButtons = document.querySelectorAll(".booking-button");
const body = document.querySelector("body");
const modal = document.querySelector(".booking-modal-container");
const closeModal = document.querySelector(".booking-modal__close");

for(let index = 0; index < bookingButtons.length; index++){
    let bookingButton = bookingButtons[index];
    bookingButton.addEventListener("click", function(){
        openModal();
    })
}


function openModal(){
    modal.style.display = "block";
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})

