let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let assunto = window.document.getElementById('assunto')


nome.style.width = '32%'
email.style.width = '32%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        alert('nome com menos de 3 letras')
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtemail')

    if(email.value.indexOf('@') == -1){
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    } 
}
    
function validaAssunto() {
let txtAssunto = document.querySelector('#txtAssunto')

if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    
}
    
}