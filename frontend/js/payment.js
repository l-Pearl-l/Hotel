
import { dataForServer } from "./dataForServer.js";

let dataPaymentForm = {};


export function loadWindowPayment(){
    fetch("payment.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector("footer").insertAdjacentHTML("afterend", html)

            loadCleaveJS().then(() => {
                initPaymentHandlers();
            })
        })
}

function loadCleaveJS() {
    return new Promise((resolve, reject) => {
        if (window.Cleave) {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.6.0/cleave.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}


function initPaymentHandlers(){
    const paymentContainer = document.querySelector(".payment-container");
    const paymentForm = document.querySelector(".payment-form");
    const paymentContainerClose = document.querySelector(".payment-model__close")
    const bookButton = document.querySelector(".book-button")
    
    paymentContainer.style.display = "flex";

    initInputMasks();

    paymentContainerClose.addEventListener("click", () => {
        paymentContainer.style.display = "none";
    })
    
    bookButton.addEventListener("click", (event) => {
        event.preventDefault();
        getDataForm(paymentForm);
        writeData();

        fetch("http://localhost:8080/hotel/checkIn", {
            method: "POST", 
            headers: {

                "Content-type": "application/json"
            },
            body: JSON.stringify(dataForServer)
        })
        bookRoom(dataForServer.chooseRoom, dataForServer.departureDate);
        paymentContainer.style.display = "none";
    })

    
}

function getDataForm(form){
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        dataPaymentForm[key] = value
    })
}

function writeData(){
    dataForServer.nameGuest = dataPaymentForm.nameGuest;
    dataForServer.surnameGuest = dataPaymentForm.surnameGuest;
    dataForServer.patronymicGuest = dataPaymentForm.patronymicGuest;
    dataForServer.phone = dataPaymentForm.phone;
    dataForServer.numberBankCard = dataPaymentForm.numberBankCard;
    dataForServer.validityPeriod = dataPaymentForm.cardValidityPeriod;
    dataForServer.cvv = dataPaymentForm.cvv;
    dataForServer.totalPrice = Number(dataForServer.priceChooseRoom) + Number(dataForServer.priceAdditionalServices);
}

function initInputMasks() {

    new Cleave('#number-bank-card', {
        blocks: [4, 4, 4, 4],
        delimiter: ' ',
        numericOnly: true,
        onValueChanged: function(e) {
            const rawValue = e.target.rawValue;
            document.querySelector('#number-bank-card').dataset.rawValue = rawValue;
        }
    });

    new Cleave('#period', {
        date: true,
        datePattern: ['m', 'y'],
        delimiter: '/'
    });

    new Cleave('#cvv', {
        blocks: [3],
        numericOnly: true
    });

    new Cleave('#phone', {
        numericOnly: true,
        blocks: [2, 3, 3, 2, 2],
        delimiters: [' (', ') ', '-', '-'],
        prefix: '+7'
    });
}

function bookRoom(room, date){    
    const card = document.querySelector(`[data-room-id="${room}"]`)
    const button = card.children[3];
    button.disabled = true;
    button.textContent = `Номер освободится: ${date}`;
    card.style.opacity = 0.6;
}