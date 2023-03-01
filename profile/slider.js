let wrapper = document.getElementById("slides");
let slides = document.querySelectorAll(".slide")
let space = parseInt(getComputedStyle(slides[0])['width']);
let index = 0;

document.querySelector("#button--left").onclick=function(){
    if (index > 0)
    {
        wrapper.style.left = (parseInt(getComputedStyle(wrapper)['left'])+(space+104))+'px';
        index--;
    }
    console.log("Левая кнопка")
}
document.querySelector("#button--right").onclick=function(){
    if (index < slides.length - 1)
    {
        wrapper.style.left = (parseInt(getComputedStyle(wrapper)['left'])-(space+104))+'px';
        index++;
    }
    console.log("Правая кнопка")
}