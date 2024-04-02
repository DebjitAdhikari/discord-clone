const hero=document.querySelector(".heroSec");
const download=document.querySelector(".downloadBtn")
const menu=document.querySelector(".hamburgerMenu")
const navBar=document.querySelector(".navSection")
const slideMenu=document.querySelector(".slideMenu")
const closeBtn=document.querySelector(".closeMenu")

download.addEventListener("click",function(){
    hero.scrollIntoView({behavior:"smooth"})
})

function hideAndDisplay(){
    navBar.classList.toggle("hidden")
    slideMenu.classList.toggle("hidden")
}

menu.addEventListener("click",hideAndDisplay)
closeBtn.addEventListener("click",hideAndDisplay)
