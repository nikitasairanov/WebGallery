let time = new Date();
let themeButton = document.querySelector('#nightModeButton');
let themeButtonDesign = document.querySelector('#nightModeButton__inner');
if (time.getHours() >= 20) theme.href = "dark-mode.css";
else theme.href = "light-mode.css";
ThemeButtonChange();

themeButton.onclick = function() {
    let theme = document.querySelector("#theme");
    if (theme.getAttribute("href") == "light-mode.css") theme.href = "dark-mode.css";
    else theme.href = "light-mode.css";
    ThemeButtonChange();
}

function ThemeButtonChange() {
    let theme = document.querySelector("#theme");
    if (theme.getAttribute("href") == "light-mode.css") 
    {
        //themeButtonDesign.classList.add('nightModeButton__inner--light');
        themeButtonDesign.style.margin = '0 50%';
    }
    //else themeButtonDesign.classList.remove('nightModeButton__inner--dark');
    else themeButtonDesign.style.margin = '0';
}