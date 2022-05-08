import { refs, LOCAL_NAME_KEY, LOCAL_FEEDBACK_KEY } from "./refs.js";

refs.inputNameForm.addEventListener("input", inputNameForm);
refs.textAreaForm.addEventListener("input", inputTextareaForm);
refs.feedBackForm.addEventListener("submit", onSubmitForm);

checkDataLocalStorage();

function checkDataLocalStorage() {
  const checkInputName = localStorage.getItem("LOCAL_NAME_KEY");
  const inputText = localStorage.getItem("LOCAL_FEEDBACK_KEY");

  checkInputName !== " " ? (refs.inputNameForm.value = checkInputName) : " ";
  inputText !== " " ? (refs.textAreaForm.value = inputText) : " ";
}

function inputNameForm(event) {
  let userName = event.currentTarget.value;
  window.localStorage.setItem("LOCAL_NAME_KEY", userName);
}

function inputTextareaForm(event) {
  const feedbackText = event.currentTarget.value;
  localStorage.setItem("LOCAL_FEEDBACK_KEY", feedbackText);
}

function onSubmitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem("LOCAL_NAME_KEY");
  localStorage.removeItem("LOCAL_FEEDBACK_KEY");
}
