export function emailError(input, errorMessage) {
  let email = input.value.trim();
  if (!isValidEmail(email)) {
    showError("잘못된 이메일입니다", errorMessage, input);
  } else {
    showError("", errorMessage, input);
    clearError(errorMessage, input);
  }
}

const length = 8;
export function pwError(input, element) {
  if (input.value.length < length) {
    showError("비밀번호를 8자 이상 입력해주세요", element, input);
  } else {
    clearError(element, input);
  }
}

export function showError(message, element, input) {
  element.textContent = message;
  input.classList.add("error-border");
}

export function clearError(element, input) {
  input.classList.remove("error-border");
  element.textContent = "";
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isValidEmail(email) {
  // 이메일 형식을 정규표현식을 사용하여 검사
  return emailRegex.test(emailRegex);
}

