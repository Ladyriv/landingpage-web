const menuToggle= document.querySelector(".menu-bars");
const nav = document.querySelector("nav ul li a");


menuToggle.addEventListener("click", () => {
    nav.classList.toggle("slide");
});