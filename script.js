let themeButton = document.querySelector('#nightModeButton');
themeButton.onclick = function() {
    let theme = document.querySelector("#theme")
    if (theme.getAttribute("href") == "light-mode.css") theme.href = "dark-mode.css"
    else theme.href = "light-mode.css"
}