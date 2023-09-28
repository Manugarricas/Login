let esCorrecto = false;

function comprobarContrasenia() {
    
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    if (validarPassword(pass1) && validarPassword(pass2)) {
        if (pass1 === pass2 && pass1.length != 0 && pass2.length != 0) {
            document.getElementById("boton").href = "./index.html";
            
            esCorrecto = true;
        }
        else if (pass1 != pass2) {
            document.getElementById("mensaje").innerHTML = "The passwords aren't equals";
            document.getElementById("mensaje").classList = "mensaje mostrar";
        }
        else if (pass1.length == 0 || pass2.length == 0) {
            document.getElementById("mensaje").innerHTML = "Both camps should be filled";
            document.getElementById("mensaje").classList = "mensaje mostrar";
        }
        else {
            document.getElementById("mensaje").innerHTML = "A error ocurred";
            document.getElementById("mensaje").classList = "mensaje mostrar";
        }
    }
    else {
        document.getElementById("mensaje").innerHTML = "The passwords should have a number, a mayus character and a minimus length of 8.";
        document.getElementById("mensaje").classList = "mensaje mostrar";
    }
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