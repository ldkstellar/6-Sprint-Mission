import { toggleSwitch } from "./switch.js";
import { emailError, pwError, isValidEmail } from "./loginCheck.js";
//클로저로  변수 함수에 저장이 된다.
const toggle = document.getElementById("eyeIcon");
toggle.addEventListener("click", toggleSwitch);

const input = document.querySelector(".emailInput");
const errorMessage = document.querySelector(".email-error-message");
input.addEventListener("focusout", () => emailError(input, errorMessage));

const pwInput = document.querySelector(".passwordBar");
const errorMessage2 = document.querySelector(".pw-error-message");
pwInput.addEventListener("focusout", () => pwError(pwInput, errorMessage2));

const btn = document.querySelector(".loginButton");
btn.addEventListener("click", (e) => btnClick(e));
function btnClick(e) {
  if (pwInput.value.length > 8 && isValidEmail(input.value.trim())) {
    location.href = "../item/item.html";
  } else {
    e.preventDefault();
    e.stopPropagation();
  }
}

