const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm")

function checkMatch() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity('비밀번호가 일치하지 않습니다.');
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.addEventListener('input', checkMatch)
confirmPassword.addEventListener('input', checkMatch)
