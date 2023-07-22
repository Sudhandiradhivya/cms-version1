//  client side validation 
var loginform = document.getElementById("form-login");
var loginemail = document.getElementById("login-email");
var loginpassword = document.getElementById("login-password");

loginemail.addEventListener('input',validateLoginEmail);
loginpassword.addEventListener('input',validateLoginPassword);

function validateLoginEmail(){
    var loginemailValue = loginemail.value.trim();
    if(loginemailValue === ''){
        setError(loginemail, 'Email id cannot be blank');
    }
    else if(!isEmail(loginemailValue)){
        setError(loginemail, 'Enter a valid email');
    }
    else{
        setSuccess(loginemail);
    }    
}

function validateLoginPassword(){
    var loginpasswordValue = loginpassword.value.trim();
    if(loginpasswordValue === ''){
        setError(loginpassword, 'Password cannot be blank');
    }
    else if(loginpasswordValue.length != 6){
        setError(loginpassword, 'Password length must be 6 digits');
    }
    else{
        setSuccess(loginpassword);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



//  server side validation 
function validateLoginCredentials(){
    emailValue = loginemail.value.trim();
    passwordValue = loginpassword.value.trim();
    if(emailValue == "sarulathadhavamani@gmail.com" && passwordValue == "123456"){
        alert("Login Succesfully");
        window.open("../index.html");
        return true;
    }
    else{
        alert("Invalid email id and password");
        return false;
    }
}
