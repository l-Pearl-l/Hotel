
import { initAdditionalService } from "./additionalService.js";
import { setupProcessingForm} from "./setupProcessingForm.js";
import { loadWindowPayment } from "./payment.js";

function loadBookingModal() {
    fetch('bookingModal.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector("footer").insertAdjacentHTML('afterend', html);
            initModalHandlers();
            if(document.querySelector(".booking-modal-container")){
                initAdditionalService();
                setupProcessingForm();
            }

        })
        .catch(error => console.error('Ошибка загрузки модального окна:', error));
}

function initModalHandlers() {
    const bookingButtons = document.querySelectorAll('.booking-button');
    const closeButton = document.querySelector('.booking-modal__close');
    const paymentButton = document.querySelector(".procced-payment");
    const bookingModalContainer = document.querySelector('.booking-modal-container');
    const departureInput = document.querySelector(".departure-input");

    paymentButton.disabled = true;
    paymentButton.style.opacity = 0.6;

    bookingButtons.forEach(button => {
        button.addEventListener('click', () => {
            bookingModalContainer.style.display = 'flex';
        });
    });
    
    closeButton.addEventListener('click', () => {
        bookingModalContainer.style.display = 'none';
    });

    departureInput.addEventListener("input", () => {
        paymentButton.disabled = false;
        paymentButton.style.opacity = 1;
    
    })

    paymentButton.addEventListener("click", () => {
        bookingModalContainer.style.display = "none";
        loadWindowPayment();
    })
}

document.addEventListener('DOMContentLoaded', loadBookingModal);

