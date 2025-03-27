
const reviewsForm = document.querySelector(".main__form");
const reviewsBox = document.querySelector(".main__reviews"); 
const stars = document.querySelectorAll(".star");
const input = document.querySelector(".main__input");
let numberOfStars = 0;


window.onload = function(){
    fetch("http://localhost:8080/hotel/reviews")
    .then(response => response.json())
    .then(result => {
        for(let index = 0; index < result.length; index++){
            let stars = "";
            for(let i = 0; i < result[index].numberOfStars; i++){
                stars += "\u2605";
            }
            reviewsBox.innerHTML += 
                `<div class="review">
                    <div class="review__date">
                        <span>Дата: ${result[index].date}</span>
                        <div class="review__stars">
                            ${stars}
                        </div>
                    </div>
                    <div class="review__text">
                        ${result[index].review}
                    </div> 
                </div>`
        }
    })
}

reviewsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    form.forEach((review) => {

        const div = document.createElement("div");
        div.className = "review";
        div.textContent = review

        const span = document.createElement("span");
        stars.forEach(star => {
            if(star.classList[1] == "star--gold"){
                span.textContent += "\u2605";
            }
             
        })
        const date = new Date();
        const day = date.getDate();
        const yaer = date.getFullYear();
        const mounth = date.getMonth();
        const dateInReview = day + "-" + mounth + "-" + yaer;
        reviewsBox.innerHTML += 
            `<div class="review">
                <div class="review__date">
                    <span>Дата: ${dateInReview}</span>
                    <div class="review__stars">
                        ${span.textContent}
                    </div>
                </div>
                <div class="review__text">
                    ${review}
                </div> 
            </div>`

        input.value = "";
        stars.forEach((star) => {
            if(star.classList[1] == "star--gold"){
                star.classList.remove("star--gold");
                star.classList.add("star--black")
                star.style.color = "black";
                numberOfStars++;
            }
        })

        fetch("http://localhost:8080/hotel/writeReview", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                date: dateInReview,
                review: review,
                numberOfStars: numberOfStars
            })
        })
        numberOfStars = 0;
    })
})

stars.forEach((star) => {
    star.addEventListener("click", (event) => {
        if(event.target.classList[1] == "star--black"){
            event.target.style.color = "gold";
            event.target.classList.remove("star--black");
            event.target.classList.add("star--gold")
        } else if(event.target.classList[1] == "star--gold"){
            event.target.style.color = "black";
            event.target.classList.remove("star--gold") 
            event.target.classList.add("star--black") 
        }
    })
})