

const buttonOpeningAdditionalServices = document.querySelector(".open-additional-services");
const additionalService = document.querySelector(".additional-services");
const closeAdditionalServices = document.querySelector(".additional-service__close");
const addtionalServicesButtons = document.querySelectorAll(".additional-service__card__button");
const deleteServices = document.querySelectorAll(".additional-service__delete"); 
const applyAdditionalServices = document.querySelector(".additional-service__apply");
let groupAdditionalServices = [];

buttonOpeningAdditionalServices.addEventListener("click", () => {
    additionalService.style.display = "block";
})

closeAdditionalServices.addEventListener("click", () => {
    additionalService.style.display = "none";
})

deleteServices.forEach(button => {
    button.addEventListener("click", (event) => {
        if(groupAdditionalServices.includes(event.target.classList[1])){
            groupAdditionalServices = groupAdditionalServices.filter(service => service !== event.target.classList[1])   
            event.target.style.opacity = 0.6;
            event.target.disabled = true;
        }
        addtionalServicesButtons.forEach(button => {
            if(!groupAdditionalServices.includes(button.classList[1])){
                button.style.opacity = 1;
                button.disabled = false;
                button.textContent = "Добавить";
                
            }
        })
    })
})

addtionalServicesButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if(!groupAdditionalServices.includes(event.target.classList[1])){
            groupAdditionalServices.push(event.target.classList[1]);
            event.target.style.opacity = 0.6;
            event.target.disabled = true;
            event.target.textContent = "Добавлено"
        }
        deleteServices.forEach(button => {
            if(groupAdditionalServices.includes(button.classList[1])){
                button.style.opacity = 1;
                button.disabled = false;
            }
        })
    })
})



applyAdditionalServices.addEventListener("click", () => {

})