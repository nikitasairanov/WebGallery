let theme = document.querySelector("#theme");
let theme2 = document.querySelector("#profile-theme");

let time = new Date();
let themeButton = document.querySelector('#nightModeButton');
let themeButtonDesign = document.querySelector('#nightModeButton__inner');
if (time.getHours() >= 20) {
    theme.href = "../dark-mode.css";
    theme2.href = "profile-dark-mode.css";
}
else {
    theme.href = "../light-mode.css";
    theme2.href = "profile-light-mode.css";
}

themeButton.onclick = function() {
    if (theme.getAttribute("href") == "../light-mode.css") theme.href = "../dark-mode.css";
    else theme.href = "../light-mode.css";

    if (theme2.getAttribute("href") == "profile-light-mode.css") theme2.href = "profile-dark-mode.css";
    else theme2.href = "profile-light-mode.css";
}