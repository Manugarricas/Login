let verContraseña = false;

function mostrarContrasenia() {
    if (!verContraseña) {
        document.getElementById("ojo").classList = "fa fa-eye-slash";
        document.getElementById("password").type = "text";

        verContraseña = true;
    }
    else {
        document.getElementById("ojo").classList = "fa fa-eye";
        document.getElementById("password").type = "password";

        verContraseña = false;
    }
    
    
}

function mostrarContraseniaRecu() {
    if (!verContraseña) {
        document.getElementById("ojo1").classList = "fa fa-eye-slash";
        document.getElementById("password1").type = "text";
        document.getElementById("ojo2").classList = "fa fa-eye-slash";
        document.getElementById("password2").type = "text";

        verContraseña = true;
    }
    else {
        document.getElementById("ojo1").classList = "fa fa-eye";
        document.getElementById("password1").type = "password";
        document.getElementById("ojo2").classList = "fa fa-eye";
        document.getElementById("password2").type = "password";

        verContraseña = false;
    }
    
    
}

function dontTouch() {
    document.getElementById("register").innerHTML = "Don't touch me!";
    document.getElementById("register").classList = "dontTouch";
}

function validarPassword(password) {
    let tamanio = false, number = false, mayus = false;
    resultado = false;
    numbers = "1234567890";
    arrNumbers = numbers.split("");
    letters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    arrLetters = letters.split("");

    if (password.length >= 8) {
        tamanio = true;
    }
    for (let i = 0; i < password.length; i++) {

        let char = password.charAt(i);

        if (arrNumbers.includes(char)) {
            number = true;
        }
        if (arrLetters.includes(char)) {
            mayus = true;
        }
    }
    if (tamanio && number && mayus) {
        resultado = true;
    }
    return resultado;
}

function hacerLogin() {
    
    let password = document.getElementById("password").value;

    if (validarPassword(password)) {
        document.getElementById("btn_login").href = "./logeado.html";
    }
    else {
        document.getElementById("pass-label").classList = "col-4 col-form-label fail";
        document.getElementById("pass-label").innerHTML = "Password*";
    }

}