let registerForm = document.querySelector('.register');

document.querySelector('#register-btn').onclick = () =>{
    registerForm.classList.toggle('active');
}

document.querySelector('#close-register-btn').onclick = () =>{
    registerForm.classList.remove('active');
}