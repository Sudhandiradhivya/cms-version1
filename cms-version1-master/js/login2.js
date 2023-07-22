//client side validation
var loginform=document.getElementById("formcontainer");
var loginemail=document.getElementById("Loginemail");
var loginpassword=document.getElementById("Loginpassword");

loginemail.addEventListener('input',validateLoginEmail);
loginpassword.addEventListener('input',validateLoginpassword);

function validateLoginEmail(){
 var loginemailValue = loginemail.value.trim();
 if(loginemailValue === ''){
    setError(loginemail, 'Email id cannot be blank');
 }
 else if(!isEmail(loginemailValue)){
    setError(loginemail,'Enter valid Email');
 }
 else{
    setSuccess(loginemail);
 }
}

function validateLoginpassword(){
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
   const inputfield= input.parentElement;
   const small = inputfield.querySelector('small');
   inputfield.className = 'input-field error';
   small.innerText = message;
}

function setSuccess(input){
   const inputfield= input.parentElement;
   inputfield.className = 'input-field success';
}

function isEmail(email)
{
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



//  server side validation 
function validateLoginCredentials(){
   emailValue = loginemail.value.trim();
   passwordValue = loginpassword.value.trim();
   if(emailValue == "dhivya4567890@gmail.com" && passwordValue == "567892"){
       alert("Login Succesfully");
    //    window.open(".mainindex.html");
       return true;
   }
   else{
       alert("Invalid email id and password");
       return false;
   }
}
