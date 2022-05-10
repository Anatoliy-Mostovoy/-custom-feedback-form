import { refs, LOCAL_KEY } from "./refs.js";

const dataName = localStorage.getItem("LOCAL_KEY");

checkBackdropLoad();

refs.backdropBtn.addEventListener("click", onBackdropBtnClick);

function onBackdropBtnClick(event) {
  refs.backdrop.classList.add("isHidden");
}

function checkBackdropLoad() {
  if (dataName !== null) {
    refs.backdrop.classList.add("isHidden");
  }
}
