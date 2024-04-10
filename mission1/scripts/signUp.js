import { toggleSwitchSignup } from "./switch.js";
import {
  isValidEmail,
  emailError,
  pwError,
  showError,
  clearError,
} from "./loginCheck.js";

const eyeIcon = document.getElementById("eyeIcon");
const passIcon = document.getElementById("passIcon");
eyeIcon.addEventListener("click", () =>
  toggleSwitchSignup(eyeIcon, "passwordInput")
);
passIcon.addEventListener("click", () =>
  toggleSwitchSignup(passIcon, "passwordInput2")
);

const email = document.querySelector(".emailInput");
const error = document.querySelector(".emailError");
email.addEventListener("focusout", () => emailError(email, error));

const passwordInput = document.querySelector(".passwordInput");
const passwordError = document.querySelector(".pwError");
passwordInput.addEventListener("focusout", () =>
  pwError(passwordInput, passwordError)
);

const passwordRepeatInput = document.querySelector(".passwordInput2");
const passwordRepeatError = document.querySelector(".pwRepeatError");
passwordRepeatInput.addEventListener("focusout", () =>
  isSamePassword(passwordInput, passwordRepeatInput, passwordRepeatError)
);
function isSamePassword(inputValue, repeatInputValue, error) {
  if (inputValue.value !== repeatInputValue.value) {
    showError("비밀번호가 일치하지 않습니다.", error, passwordRepeatInput);
  } else {
    clearError(error, passwordRepeatInput);
  }
}
const btn = document.querySelector(".signUpButton");
btn.addEventListener("click", (e) => btnClick(e));

function btnClick(e) {
  if (
    passwordInput.value.length > 8 &&
    passwordRepeatInput.value.length > 8 &&
    isValidEmail(email.value.trim())
  ) {
    location.href = "../signin/signin.html";
  } else {
    e.preventDefault();
    e.event.stopPropagation();
  }
}

