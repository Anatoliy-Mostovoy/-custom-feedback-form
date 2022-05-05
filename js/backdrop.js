import { refs } from "./refs.js";

refs.backdropBtn.addEventListener("click", onBackdropBtnClick);

function onBackdropBtnClick(event) {
  refs.backdrop.classList.add("isHidden");
}
