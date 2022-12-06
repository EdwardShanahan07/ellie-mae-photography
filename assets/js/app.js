// Hambuger Menu 
// Reference Link:
// https://medium.com/@codefoxx/how-to-create-a-responsive-hamburger-menu-with-html-css-javascript-4dc10a45d3

const navbarList = document.querySelector(".navbar ul");
const hamburger = document.querySelector(".hamburger");

function toggleNavbar() {
    navbarList.classList.toggle("active");
    hamburger.classList.toggle("active");
}

hamburger.addEventListener("click", toggleNavbar);