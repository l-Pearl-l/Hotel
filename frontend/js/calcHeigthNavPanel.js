

const navPavelheight = document.querySelector(".header__container")
const main = document.querySelector("main")


function caclMargin(){
    const height = navPavelheight.offsetHeight;
    main.style.paddingTop = `${height + 40}px`; 
}

window.addEventListener("load", caclMargin);
window.addEventListener("resize", caclMargin);