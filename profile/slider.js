let themeCurrent = document.querySelector("#profile-theme");

let wrapper = document.getElementById("slides");
let slides = document.querySelectorAll(".slide");
let width = parseInt(getComputedStyle(slides[0])['max-width']);
let index = 0;
let indexPrev;

let buttonLeft = document.querySelector("#button--left");
let buttonRight = document.querySelector("#button--right");

slides[0].classList.add("slide-current");
buttonLeft.onclick=function(){
    indexPrev = index;
    let step;
    if (index > 0)
    {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            step = 50;
        } 
        else step = 104;
        index--;
    }
    wrapper.style.left = -(index*(width+step)-300)+'px';
    SliderGlow();
}
buttonRight.onclick=function(){
    indexPrev = index;
    let step;
    if (index < slides.length - 1)
    {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            step = 50;
        } 
        else step = 104;
        index++;
    }
    wrapper.style.left = -(index*(width+step)-300)+'px';
    SliderGlow();
}
let SliderGlow = function(){
    slides[indexPrev].classList.remove("slide-current");
    slides[index].classList.add("slide-current");
}