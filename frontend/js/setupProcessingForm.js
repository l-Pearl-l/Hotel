import { dataForServer } from "./dataForServer.js";


const bookingButtons = document.querySelectorAll('.booking-button');
let chooseRoom;
let priceChooseRoom;
let dataForm = {};

for(let index = 0; index < bookingButtons.length; index++){
    let button = bookingButtons[index];
    button.addEventListener("click", (event) => {
        chooseRoom = event.target.closest(".main__card").dataset.roomId;
        priceChooseRoom = event.target.closest(".main__card").dataset.priceRoom;
    })
}

export function setupProcessingForm(){  

    const bookingForm = document.querySelector(".booking-form");
    const exeptionDate = document.querySelector(".exeption-date");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        getDataForm(bookingForm);
        const varifiedDate = checkDateInFrom(dataForm.arrival, dataForm.departure)
        if(varifiedDate === "valid"){
            exeptionDate.textContent = "";
            writeData();
        }else{
            exeptionDate.textContent = varifiedDate;
        }
    })
}


function getDataForm(form){
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        dataForm[key] = value;
    })
}

function checkDateInFrom(arrival, departure){
    const oneDay = (24 * 60 * 60 * 1000)
    let result = "valid";
    if(new Date(arrival) < new Date(Date.now() - oneDay)){
        result =  "Нельзя забронировать на прошедшую дату!";
    }
    else if(new Date(arrival) > new Date(departure)){
        result = "Выезд не может быть позже заезда!";
    } 
    return result;
}

function writeData(){
    dataForServer.chooseRoom = chooseRoom;
    dataForServer.arrivalDate = dataForm.arrival;
    dataForServer.departureDate = dataForm.departure;
    dataForServer.numberOfAdults = dataForm.adults;
    dataForServer.numberOfChildren = dataForm.children;
    dataForServer.priceChooseRoom = priceChooseRoom;
}




