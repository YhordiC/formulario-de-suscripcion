
document.getElementById('myForm').addEventListener('submit', function(e) {
    
    e.preventDefault(validarEmail());
    
})
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validarEmail= () => {
    const errorGmail = document.getElementById('error-email')
    const email = document.getElementById('email');
    
    if(regex.test(email.value)){
        window.location.href= 'aceptado.html'
    }else {
        errorGmail.innerHTML='Valid email required';
        email.classList.add('emailError');
    }
}
