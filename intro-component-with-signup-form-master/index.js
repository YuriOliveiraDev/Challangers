const nome = document.querySelector('#name')
const sobreNome = document.querySelector('#sname')
const email = document.querySelector('#email')
const senha = document.querySelector('#password')
const aviso = document.querySelectorAll('.aviso')
let str = email.value;
var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function validar () {
    if (nome.value === '') {
        aviso[0].style.display = 'Block';
    } else {
        aviso[0].style.display = 'none';
    }

    if (sobreNome.value === '') {
        aviso[1].style.display = 'Block';
    } else {
        aviso[1].style.display = 'none';
    }

    if (email.value.length < 10) {
        aviso[2].style.display = 'Block';
    } 
    else {
        aviso[2].style.display = 'none';
    }

    if (senha.value === '') {
        aviso[3].style.display = 'Block';
    } else {
        aviso[3].style.display = 'none';
    }
}


function checkEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        email
};
