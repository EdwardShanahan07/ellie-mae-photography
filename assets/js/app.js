const navbarList = document.querySelector(".navbar ul");
const hamburger = document.querySelector(".hamburger");

function toggleNavbar() {
    navbarList.classList.toggle("active");
    hamburger.classList.toggle("active");
}

hamburger.addEventListener("click", toggleNavbar);