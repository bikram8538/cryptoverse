let toggleBtn = document.querySelector(".navToogler");
let toggleBtnIcon = document.querySelector(".navToogler i");
let navMenu = document.querySelector("#navMenublock");

toggleBtn.onclick = function () {
  navMenu.classList.toggle("open");
  let isOpen = navMenu.classList.contains("open");
  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
