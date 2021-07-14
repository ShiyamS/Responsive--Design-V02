let toggle = document.querySelector(".nav-toggle");
let nav = document.querySelector(".nav-lists");

toggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
