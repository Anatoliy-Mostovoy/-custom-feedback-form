import { refs } from "./refs.js";
console.log(refs.closeNotificationBtn);

refs.closeNotificationBtn.addEventListener(
  "click",
  onCloseNotificationBtnClick
);

function onCloseNotificationBtnClick(event) {
  refs.closeNotificationBtn.classList.add("isHidden");
  refs.backdrop.classList.remove("isHidden");
}
