import hamburgerMenu from "./hamburguer_menu.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".menu-btn", ".panel", ".menu-link");
  addGoBackFunctionality();
});

const addGoBackFunctionality = () => {
  const goBackButton = document.querySelector("[data-go-back]");
  if (goBackButton) {
    goBackButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.back();
    });
  }
};
