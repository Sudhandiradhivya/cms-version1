// Client side validation
var form = document.getElementById("register-form");
var username = document.getElementById("reg-username");
var email = document.getElementById("reg-email");
var phone = document.getElementById("reg-phone");
var password = document.getElementById("reg-password");
var password2 = document.getElementById("reg-password2");

username.addEventListener('input',validateRegisterUsername);
email.addEventListener('input',validateRegisterEmail);
phone.addEventListener('input',validateRegisterPhone);
password.addEventListener('input',validateRegisterPassword);
password2.addEventListener('input',validateRegisterPasswords);


function validateRegisterUsername(){
    var usernameValue = username.value.trim();
    if(usernameValue.length < 5){
        setError(username, 'Username should be minimum 5 charcters')
    }
    else{
        setSuccess(username);
    }
}

function validateRegisterEmail(){
    var emailValue = email.value.trim();
    if(emailValue === ''){
        setError(email, 'Email id cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Enter a valid email');
    }
    else{
        setSuccess(email);
    }
}

function validateRegisterPhone(){
    var phoneValue = phone.value.trim();
    if(phoneValue === ''){
        setError(phone, 'Phone number cannot be blank');
    }
    else if(!isPhone(phoneValue)){
        setError(phone, 'Enter a valid phone number');
    }
    else{
        setSuccess(phone);
    }
}

function validateRegisterPassword(){
    var passwordValue = password.value.trim();
    if(passwordValue === ''){
        setError(password, 'Password cannot be blank');
    }
    else if(passwordValue.length != 6){
        setError(password, 'Password length must be 6 digits');
    }
    else{
        setSuccess(password);
    }
}

function validateRegisterPasswords(){
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    if(password2Value === ''){
        setError(password2, 'Confirm password cannot be blank');
    }
    else if(passwordValue !== password2Value)
    {
        setError(password2, 'Password does not match ')
    }
    else{
        setSuccess(password2);
    }
}

function setError(input, message){
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone){
    return /^[6-9]\d{9}$/.test(phone);
}

// Server side validation
function validateRegisterCredentials(){
    usernameValue = username.value.trim();
    emailValue = email.value.trim();
    phoneValue = phone.value.trim();
    passwordValue = password.value.trim();
    password2Value = password2.value.trim();

    if( usernameValue == "sarulatha"  && emailValue == "sarulathadhavamani@gmail.com" && phoneValue == "7708715475" && passwordValue == "123456" && password2Value == "123456"){
        alert("registered successfully");
        window.open("../Loginpage/login.html");
        return true;
    }
    else{
    alert("Enter a valid details");
    return false;
    }
}