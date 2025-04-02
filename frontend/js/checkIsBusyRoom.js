

const busyHotelRooms = []
const cards = document.querySelectorAll(".main__card")

window.onload = function(){
    fetch("http://localhost:8080/hotel/isBusy", {
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
      .then(result => {
          for(let index = 0; index < result.length; index++){
            busyHotelRooms[index] = result[index];
          }
          for(let index = 0; index < busyHotelRooms.length; index++){
            cards.forEach((card) => {
                if(card.dataset.roomId == busyHotelRooms[index].choose_room){
                    const button = card.children[3];
                    button.disabled = true;
                    button.textContent = `Номер освободится: ${busyHotelRooms[index].departure_date}`;
                    card.style.opacity = 0.6;
                }
            })
          }
    })
}