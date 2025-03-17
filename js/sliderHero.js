


const slider = {

    intervalId: setInterval(() => this.showNextPhoto, 3000),
    currentIndexPhoto: 0,
    photos: ["HotelRoom1.png", "ComfortHotelRoom.png", "StandartHotelRoom.png", "HotelRoom2.png", "LuxuryHotelRoom.png"],
    blockSlider: document.querySelector(".hero__container-slider"),
    buttonForward: document.querySelector(".hero__button-forward"),
    buttonBack: document.querySelector(".hero__button-back"),
    imageInSlider: document.querySelector(".hero__image-in-slider"),

    scrollPhotosForward: function(){
        this.buttonForward.addEventListener("click", () => {
            this.currentIndexPhoto++;
            if(this.currentIndexPhoto > this.photos.length - 1){
                this.currentIndexPhoto = 0;
            }
            this.imageInSlider.src = "images/" + this.photos[this.currentIndexPhoto];
        })
    },

    scrollPhotosBack: function(){
        this.buttonBack.addEventListener("click", () => {
            this.currentIndexPhoto--;
            if(this.currentIndexPhoto < 0){
                this.currentIndexPhoto = this.photos.length - 1;
            }
            this.imageInSlider.src = "images/" + this.photos[this.currentIndexPhoto];
            
        })
    },

    showNextPhoto: function(){
        this.currentIndexPhoto++;
            if(this.currentIndexPhoto > this.photos.length - 1){
                this.currentIndexPhoto = 0;
            }
            this.imageInSlider.src = "images/" + this.photos[this.currentIndexPhoto];
    },

    autoPlay: function(){
        this.intervalId = setInterval(() => this.showNextPhoto(), 3000);
    },

    play: function(){
        this.autoPlay();
        this.blockSlider.addEventListener("mouseenter", () => {
            this.stop();
            this.scrollPhotosForward();
            this.scrollPhotosBack();
        })
        this.blockSlider.addEventListener("mouseleave", () => {
            this.autoPlay();
        })
    },

    stop: function(){
            clearInterval(this.intervalId);
    },
}

slider.play();



