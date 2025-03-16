

const navPavelheight = document.querySelector(".container")
const main = document.querySelector("main")


function caclMargin(){
    const height = navPavelheight.offsetHeight;
    main.style.paddingTop = `${height + 50}px`; 
}

window.addEventListener("load", caclMargin);
window.addEventListener("resize", caclMargin);