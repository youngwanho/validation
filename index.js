// 출처: youngwanho(mavin) 개인 작업물
// 업데이트: 2023.10.16
// 아이디 비밀번호 이메일 유효성 검사입니다.

// 아이디 유효성 체크
function idCheck() {
  var inputId = document.getElementById("input_id").value;
  var idError = document.getElementById("id_error");
  var num = inputId.search(/[0-9]/g);
  var eng = inputId.search(/[a-z]/gi);

  if (inputId < 2 || num < 0 || eng < 0) {
    idError.classList.add("show");
  } else {
    idError.classList.remove("show");
  }
}

// 비밀번호 유효성 체크
function pwCheck() {
  var inputPw = document.getElementById("input_pw").value;
  var pwError = document.getElementById("pw_error");
  var isPwType =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\""])[A-Za-z\d\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\""]{8,16}$/;

  if (inputPw.length < 8 || inputPw.length > 20 || isPwType == false) {
    pwError.classList.add("show");
  } else {
    pwError.classList.remove("show");
  }
}

// 이메일 유효성 체크
function emailCheck() {
  var inputEmail = document.getElementById("input_email").value;
  var emailError = document.getElementById("email_error");
  var isEmailType = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if (isEmailType.test(inputEmail) == false) {
    emailError.classList.add("show");
  } else {
    emailError.classList.remove("show");
  }
}
