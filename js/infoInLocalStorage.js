import { refs, LOCAL_KEY } from "./refs.js";

refs.feedBackForm.addEventListener("input", onInputForm);
refs.feedBackForm.addEventListener("submit", onSubmitForm);

const userData = {};

checkDataLocalStorage();

function checkDataLocalStorage() {
  const { userName, userText } = JSON.parse(localStorage.getItem("LOCAL_KEY"));

  if (userName !== " " && userText !== " ") {
    refs.inputNameForm.value = userName;
    refs.textAreaForm.value = userText;
  }
}

function onInputForm(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem("LOCAL_KEY", JSON.stringify(userData));
}

function onSubmitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem("LOCAL_KEY");
}
