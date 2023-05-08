const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});
//------------------------------------------------------------------Its for sign up validation-------------------------------------
function validateUsername() {
  var userName = document.getElementById("username").value;
  var errorUsername = document.getElementById("user");
  var regexUsername = /^[A-Za-z]+$/;
  if (!userName.match(regexUsername)) {
    errorUsername.innerHTML = "Enter valid userName";
    return false;
  }
  errorUsername.innerHTML = "";
  return true;
}
function validatePassword() {


  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
  }

  // When the user starts to type something inside the password field
  myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");

    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
  return true;
}
function validateConpass() {
  var conPass = document.getElementById("confirmpassword").value;
  var myInput = document.getElementById("psw").value;
  var errorConfirmpass = document.getElementById("conpass");
  if (conPass != myInput) {
    errorConfirmpass.innerHTML = "Enter valid password";
    return false;
  }
  errorConfirmpass.innerHTML = "";
  return true;
}

function validatePhone() {
  var phoneNo = document.getElementById("phonenumber").value;
  var errorPhone = document.getElementById("phoneNo");
  var regexPhone = /^[6-9]{1}[0-9]{9}$/;
  if (!phoneNo.match(regexPhone)) {
    errorPhone.innerHTML = "enter valid number"
    return false;
  }
  errorPhone.innerHTML = "";
  return true;
}
function validateSignup() {
  if (validateUsername() && validatePassword() && validateConpass() && validatePhone()) {
    alert("Register successfull");
    window.open("carsection.html");
  }

  else {
    alert("Enter Valid Details");

  }
}

// function vfun() {
//   var password = document.getElementById("psw1").value;
//   var Username = document.getElementById("Username").value;
//   if(Username == "" || password == ""){
//     alert("Please fill all the details");
//     return false;
//   }
//   else if(Username != "dhivya@gmail.com"){
//     alert("Username not exist");
//     return false;
//   }
//   else if (password != "Dhivya@123") {
//     alert("Password not matches user name");
//     return false;
//   }else{
//     window.open("mainindex.html");
//     return false;
//   }
// }

function loginUserValidate(){
  var Username = document.getElementById("Username").value;
  var UserError = document.getElementById("useremail");
  var Userregex = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";
  if(!Username.match(Userregex)){
    UserError.innerHTML = "Enter valid email";
    return false;
  }
  UserError.innerHTML = "";
  return true;
}

function loginPassValidate(){
  var Password = document.getElementById("psw1").value;
  var PassError = document.getElementById("userpass");
  if(Password == ""){
    PassError.innerHTML = "Please enter password";
    return false;
  }
  // else if(Password != "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"){
  // PassError.innerHTML = "Please match the pattern given below";
  // return false;
  // }
  else{
    PassError.innerHTML = "";
    return true;
  }
}

