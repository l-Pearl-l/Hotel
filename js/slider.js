


const slider = {

    intervalId: setInterval(() => this.showNextPhoto, 3000),
    currentIndexPhoto: 0,
    photos: ["HotelRoom1.png", "HotelRoom2.png"],
    blockSlider: document.querySelector(".hero-image"),
    buttonForward: document.querySelector(".forward"),
    buttonBack: document.querySelector(".back"),
    sliderInDocument: document.querySelector(".slider"),

    scrollPhotosForward: function(){
        this.buttonForward.addEventListener("click", () => {
            this.currentIndexPhoto++;
            if(this.currentIndexPhoto > this.photos.length - 1){
                this.currentIndexPhoto = 0;
            }
            this.sliderInDocument.src = "images/" + this.photos[this.currentIndexPhoto];
        })
    },

    scrollPhotosBack: function(){
        this.buttonBack.addEventListener("click", () => {
            this.currentIndexPhoto--;
            if(this.currentIndexPhoto < 0){
                this.currentIndexPhoto = this.photos.length - 1;
            }
            this.sliderInDocument.src = "images/" + this.photos[this.currentIndexPhoto];
            
        })
    },

    showNextPhoto: function(){
        this.currentIndexPhoto++;
            if(this.currentIndexPhoto > this.photos.length - 1){
                this.currentIndexPhoto = 0;
            }
            this.sliderInDocument.src = "images/" + this.photos[this.currentIndexPhoto];
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



