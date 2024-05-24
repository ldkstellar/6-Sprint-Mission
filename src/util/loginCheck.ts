type E = HTMLInputElement;
type D = HTMLDivElement | null;
type A = any;
export function emailError(input: E, errorMessage: D) {
  let email = input.value.trim();
  if (!isValidEmail(email)) {
    showError('잘못된 이메일입니다', errorMessage, input);
  } else {
    showError('', errorMessage, input);
    clearError(errorMessage, input);
  }
}
export function pwError(input: E, errorMessage: D) {
  if (input.value.length < 8) {
    showError('비밀번호를 8자 이상 입력해주세요', errorMessage, input);
  } else {
    clearError(errorMessage, input);
  }
}

export function showError(message: A, div: A, input: A) {
  input.classList.add('error-border');
  div.textContent = message;
}

export function clearError(div: any, input: A) {
  input.classList.remove('error-border');
  div.textContent = '';
}

export function isValidEmail(email: string) {
  // 이메일 형식을 정규표현식을 사용하여 검사
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

