
const bookingForm = document.querySelector(".booking-form");
const exeptionDate = document.querySelector(".exeption-date")
const exeptionDatePast = document.querySelector(".exeption-date-past")
let busyHotelRooms = []
let chooseRoom;


window.onload = function(){
    fetch("http://localhost:8080/hotel/isBusy", {
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
      .then(result => {
          for(let index = 0; index < result.length; index++){
            busyHotelRooms[index] = result[index].chooseRoom
          }
          for(let index = 0; index < busyHotelRooms.length; index++){
            let element = document.querySelector(`.${busyHotelRooms[index]}`)
            if(element !== null){
                element.style.display = "none";
                element.parentElement.style.opacity = 0.6;
            }
          }
    })
    

}

for(let index = 0; index < bookingButtons.length; index++){
    button = bookingButtons[index];
    button.addEventListener("click", (event) => {
        chooseRoom = event.target.classList[1];
    })
}

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {}

    formData.forEach((value, key) => {
        data[key] = value;
    })

    if(new Date(data.arrival) < new Date(Date.now())){
        exeptionDatePast.style.display = "inline";
    }
    else if(new Date(data.arrival) > new Date(data.departure)){
        exeptionDate.style.display = "inline";
    } else{
        exeptionDate.style.display = "none";
        fetch("http://localhost:8080/hotel/checkIn", {
            method : "POST",
            body : JSON.stringify({
                chooseRoom: chooseRoom,
                arrivalDate: data.arrival,
                departureDate: data.departure,
                numberOfAdults: data.adults,
                numberOfChildren: data.children
            }),
            headers: {
                "Content-type": 'application/json'
            }
        }).then(response => response.text())
          .then(result => window.location.reload())
    }

    
})