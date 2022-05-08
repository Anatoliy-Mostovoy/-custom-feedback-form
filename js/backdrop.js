import { refs } from "./refs.js";

const dataName = localStorage.getItem("nameUser");

if (dataName !== null) {
  refs.backdrop.classList.add("isHidden");
}

refs.backdropBtn.addEventListener("click", onBackdropBtnClick);

function onBackdropBtnClick(event) {
  refs.backdrop.classList.add("isHidden");
}
