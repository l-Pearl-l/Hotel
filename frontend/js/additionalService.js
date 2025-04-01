import { dataForServer } from "./dataForServer.js";


export function initAdditionalService(){
    const buttonOpeningAdditionalServices = document.querySelector(".open-additional-services");
    const additionalServiceWindow = document.querySelector(".additional-services");
    const closeAdditionalServicesWindow = document.querySelector(".additional-service__close");
    const addtionalServicesButtonsAdd = document.querySelectorAll(".additional-service__card__button");
    const buttonsDeleteServices = document.querySelectorAll(".additional-service__delete"); 
    const applyAdditionalServices = document.querySelector(".additional-service__apply");
    let groupAdditionalServices = [];
    let priceServices = 0;


    buttonOpeningAdditionalServices.addEventListener("click", () => {
        additionalServiceWindow.style.display = "block";
    })
    
    closeAdditionalServicesWindow.addEventListener("click", () => {
        additionalServiceWindow.style.display = "none";
    })

    addtionalServicesButtonsAdd.forEach(button => {
        button.addEventListener("click", (event) => {
            if(!groupAdditionalServices.includes(button.closest(".additional-service__card").dataset.nameService)){
                groupAdditionalServices.push(button.closest(".additional-service__card").dataset.nameService);
                priceServices += Number(button.closest(".additional-service__card").dataset.priceService)
                event.target.style.opacity = 0.6;
                event.target.disabled = true;
                event.target.textContent = "Добавлено"
            }
            buttonsDeleteServices.forEach(button => {
                if(groupAdditionalServices.includes(button.closest(".additional-service__card").dataset.nameService)){
                    button.style.opacity = 1;
                    button.disabled = false;
                }
            })
        })
    })
    
        
    buttonsDeleteServices.forEach(button => {
        button.addEventListener("click", (event) => {
            if(groupAdditionalServices.includes(event.target.closest(".additional-service__card").dataset.nameService)){
                groupAdditionalServices = groupAdditionalServices.filter(service => service !== event.target.closest(".additional-service__card").dataset.nameService)   
                priceServices -= Number(event.target.closest(".additional-service__card").dataset.priceService);
                event.target.style.opacity = 0.6;
                event.target.disabled = true;
            }
            addtionalServicesButtonsAdd.forEach(button => {
                if(!groupAdditionalServices.includes(button.closest(".additional-service__card").dataset.nameService)){
                    button.style.opacity = 1;
                    button.disabled = false;
                    button.textContent = "Добавить";
                }
            })
        })
    })
    

    applyAdditionalServices.addEventListener("click", () => {
        dataForServer.groupAdditionalServices = groupAdditionalServices;
        dataForServer.priceAdditionalServices = String(priceServices);
        additionalServiceWindow.style.display = "none";
    })
}
