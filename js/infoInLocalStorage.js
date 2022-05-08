import { refs } from "./refs.js";

refs.inputNameForm.addEventListener("input", inputNameForm);
refs.textAreaForm.addEventListener("input", inputTextareaForm);
refs.feedBackForm.addEventListener("submit", onSubmitForm);

const checkInputName = localStorage.getItem("nameUser");
const inputText = localStorage.getItem("userFeedback");

checkInputName !== " " ? (refs.inputNameForm.value = checkInputName) : " ";
inputText !== " " ? (refs.textAreaForm.value = inputText) : " ";

function inputNameForm(event) {
  let userName = event.currentTarget.value;
  window.localStorage.setItem("nameUser", userName);
}

function inputTextareaForm(event) {
  const feedbackText = event.currentTarget.value;
  localStorage.setItem("userFeedback", feedbackText);
}

function onSubmitForm(event) {
  event.preventDefault();
  refs.inputNameForm.value = " ";
  refs.textAreaForm.value = " ";
  localStorage.clear("nameUser");
  localStorage.clear("userFeedback");
}
