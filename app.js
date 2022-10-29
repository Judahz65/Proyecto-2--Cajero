// alert('Mom Im programming');
// console.log('Hola desde la consola');

// ZONA DE IDENTIFICACION DEL USUARIO
const verificar=document.getElementById('verificar');
function ingresar(form){
    if (form.inputUser.value == 'Juan') {
        if (form.inputPassword.value== '1234') {
            console.log('Estas en el usuario');
            location='main.html';
        } else{
            alert('Contraseña incorrecta')
        }
    } else {
        alert('Usuario no encontrado');
    }
}



// ZONA DE ESTADO DE CUENTA
var enviar= document.getElementById('enviar');
var depositar = document.getElementById('depositar');
var verNo = document.getElementById('verNo');



enviar.addEventListener('click', ()=>{
    console.log('Le diste click a enviar mi fafa');
    var saldoT = parseInt(document.getElementById('saldoT').value);
    var cantidad = parseInt(document.getElementById('cantidadR').value); 
    if(saldoT>10 && saldoT<990){
        document.getElementById('saldoT').value= saldoT- cantidad;
    }else{
        alert('El valor no esta entre los limites permitidos');
    }    
})




depositar.addEventListener('click', ()=>{
    console.log('Le diste click a depositar mi fafa');
    var saldoT = parseInt(document.getElementById('saldoT').value);
    var cantidad = parseInt(document.getElementById('cantidadR').value); 
    if(saldoT>10 && saldoT<990){
        document.getElementById('saldoT').value= saldoT+ cantidad;
    }else{
        alert('El valor no esta entre los limites permitidos');
    }   
    
})

depositar.addEventListener('mouseover', ()=>{
    document.getElementById("funcion").style.display = "block";
    document.getElementById("funcion").innerHTML = "Depositar";
})
depositar.addEventListener('mouseout', ()=>{
    document.getElementById("funcion").style.display = "none";
})

enviar.addEventListener('mouseover', ()=>{
    document.getElementById("funcion").style.display = "block";
    document.getElementById("funcion").innerHTML = "Transferir";
})
enviar.addEventListener('mouseout', ()=>{
    document.getElementById("funcion").style.display = "none";
})


verNo.addEventListener('mouseover', ()=>{
    document.getElementById("funcion").style.display = "block";
    document.getElementById("funcion").innerHTML = "Ver/Ocultar saldo";
})
verNo.addEventListener('mouseout', ()=>{
    document.getElementById("funcion").style.display = "none";
})

