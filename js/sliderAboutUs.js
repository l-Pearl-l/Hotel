


const sliderAboutUs = {

    intervalId: setInterval(() => this.showNextPhoto, 3000),
    currentIndexPhoto: 0,
    photos: ["Dragon.jpg", "Eagle.jpg", "Girl.jpg", "Lion.jpg", "Swan.jpg", "Bear.jpg"],
    blockSlider: document.querySelector(".about-slider-container"),
    buttonForward: document.querySelector(".forward-about-us"),
    buttonBack: document.querySelector(".back-about-us"),
    sliderInDocument: document.querySelector(".about-slider"),

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

sliderAboutUs.play();



