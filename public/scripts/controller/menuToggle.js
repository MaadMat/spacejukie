const hamburger = document.getElementById("Hamburger")
const menu = document.getElementById("links")
const ham1 = document.getElementById("ham1")
const ham2 = document.getElementById("ham2")
const ham3 = document.getElementById("ham3")


hamburger.addEventListener('click', () => {
    if (ham1.className == "ham open1") {
        ham1.setAttribute("class", "ham");
        ham2.setAttribute("class", "ham");
        ham3.setAttribute("class", "ham");
        menu.style.display = "none"
        menu.setAttribute("class", "closed")
    } else {
        ham1.setAttribute("class", "ham open1");
        ham2.setAttribute("class", "ham disappear");
        ham3.setAttribute("class", "ham open2");
        menu.style.display = "flex"
        menu.setAttribute("class", "open")
    }
})