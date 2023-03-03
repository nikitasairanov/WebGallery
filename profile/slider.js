let themeCurrent = document.querySelector("#profile-theme");

let wrapper = document.getElementById("slides");
let slides = document.querySelectorAll(".slide");
let space = parseInt(getComputedStyle(slides[0])['width']);
let index = 0;
let indexPrev;

let buttonLeft = document.querySelector("#button--left");
let buttonRight = document.querySelector("#button--right");

slides[0].classList.add("slide-current");
buttonLeft.onclick=function(){
    indexPrev = index;
    if (index > 0)
    {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            wrapper.style.left = (parseInt(getComputedStyle(wrapper)['left'])+(space+50))+'px';
          } else {
            wrapper.style.left = (parseInt(getComputedStyle(wrapper)['left'])+(space+104))+'px';
        }
        index--;
    }
    SliderGlow();
}
buttonRight.onclick=function(){
    indexPrev = index;
    if (index < slides.length - 1)
    {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            wrapper.style.left = (parseInt(getComputedStyle(wrapper)['left'])-(space+50))+'px';
          } else {
            wrapper.style.left = (parseInt(getComputedStyle(wrapper)['left'])-(space+104))+'px';
        }
        index++;
    }
    SliderGlow();
}
let SliderGlow = function(){
    slides[indexPrev].classList.remove("slide-current");
    slides[index].classList.add("slide-current");
}