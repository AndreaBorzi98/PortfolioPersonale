function toggleMenu() {
    var menu = document.getElementById("hamburger-content");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}