


const sliderAboutUs = {

    pathDirectory: "images/SliderAbout/",
    intervalId: setInterval(() => this.showNextPhoto, 3000),
    currentIndexPhoto: 0,
    photos: ["Dragon.jpg", "Eagle.jpg", "Girl.jpg", "Lion.jpg", "Swan.jpg", "Bear.jpg"],
    blockSlider: document.querySelector(".about__slider-container"),
    buttonForward: document.querySelector(".about__button-forward"),
    buttonBack: document.querySelector(".about__button-back"),
    imageInSlider: document.querySelector(".about__image-in-slider"),

    scrollPhotosForward: function(){
        this.buttonForward.addEventListener("click", () => {
            this.currentIndexPhoto++;
            if(this.currentIndexPhoto > this.photos.length - 1){
                this.currentIndexPhoto = 0;
            }
            this.imageInSlider.src = this.pathDirectory + this.photos[this.currentIndexPhoto];
        })
    },

    scrollPhotosBack: function(){
        this.buttonBack.addEventListener("click", () => {
            this.currentIndexPhoto--;
            if(this.currentIndexPhoto < 0){
                this.currentIndexPhoto = this.photos.length - 1;
            }
            this.imageInSlider.src = this.pathDirectory + this.photos[this.currentIndexPhoto];
            
        })
    },

    showNextPhoto: function(){
        this.currentIndexPhoto++;
            if(this.currentIndexPhoto > this.photos.length - 1){
                this.currentIndexPhoto = 0;
            }
            this.imageInSlider.src = this.pathDirectory + this.photos[this.currentIndexPhoto];
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



