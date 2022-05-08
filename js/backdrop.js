import { refs, LOCAL_NAME_KEY } from "./refs.js";

const dataName = localStorage.getItem("LOCAL_NAME_KEY");

if (dataName !== null) {
  refs.backdrop.classList.add("isHidden");
}

refs.backdropBtn.addEventListener("click", onBackdropBtnClick);

function onBackdropBtnClick(event) {
  refs.backdrop.classList.add("isHidden");
}
