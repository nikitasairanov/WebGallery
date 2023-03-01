let time = new Date();
let themeButton = document.querySelector('#nightModeButton');
let themeButtonDesign = document.querySelector('#nightModeButton__inner');
if (time.getHours() >= 20) theme.href = "../dark-mode.css";
else theme.href = "../light-mode.css";

themeButton.onclick = function() {
    let theme = document.querySelector("#theme");
    if (theme.getAttribute("href") == "../light-mode.css") theme.href = "../dark-mode.css";
    else theme.href = "../light-mode.css";
}