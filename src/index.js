// aqui exportaras las funciones que necesites
const loginButton = document.getElementById('login-sesion');
const registerButton = document.getElementById('register-button');
const closeButton = document.getElementById('close');


//function open or close sections
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};
//Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};

//functions to change sections

const goinglogin = () => {
    hideSection('welcomepage');
    hideSection('section-register');
    showSection('login');
}
loginButton.addEventListener("click", goinglogin);

const goingregister = () => {
    hideSection('welcomepage');
    hideSection('login');
    showSection('register');
}

registerButton.addEventListener("click", goingregister);

const closelogin = () => {
    hideSection('login');
    showSection('welcomepage');
}

closeButton.addEventListener("click", closelogin);

//probando limpiar pagina

const clean = () =>{
   document.getElementById('register-name').value = "";
   document.getElementById('register-email').value = "";
   document.getElementById('register-username').value = "";
   document.getElementById('register-password').value = "";
   document.getElementById('register-cp').value = "";
}