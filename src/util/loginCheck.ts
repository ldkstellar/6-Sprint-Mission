import style from '@/styles/signup.module.css';
type I = HTMLInputElement;
type D = HTMLDivElement;

export function emailError(inputBox: I, errorBox: D) {
  let email = inputBox.value.trim();
  if (!isValidEmail(email)) {
    showError('잘못된 이메일입니다', inputBox, errorBox);
  } else {
    clearError(inputBox, errorBox);
  }
}
export function pwError(inputBox: I, errorBox: D) {
  if (inputBox?.value?.length < 8) {
    showError('비밀번호를 8자 이상 입력해주세요', inputBox, errorBox);
  } else {
    clearError(inputBox, errorBox);
  }
}

export function showError(message: string, inputBox: I, errorBox: D) {
  inputBox.classList.add(`${style['error-border']}`);
  errorBox.textContent = message;
}

export function clearError(inputBox: I, errorBox: D) {
  inputBox.classList.remove(`${style['error-border']}`);
  errorBox.textContent = '';
}

export function isValidEmail(email: string) {
  // 이메일 형식을 정규표현식을 사용하여 검사
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isPassword(inputBox: I, repeatInputBox: I, errorBox: D) {
  if (inputBox.value !== repeatInputBox.value) {
    showError('비밀번호가 일치하지 않습니다.', repeatInputBox, errorBox);
  } else {
    clearError(repeatInputBox, errorBox);
  }
}

