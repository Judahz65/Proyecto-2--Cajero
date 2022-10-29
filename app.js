// alert('Mom Im programming');

// ZONA DE IDENTIFICACION DEL USUARIO
const verificar=document.getElementById('verificar');
function ingresar(form){
    if (form.inputUser.value == 'Gera' && form.inputPassword.value== '1234') {
            console.log('Estas en Gera');  
            location='main.html'          
        } else if(form.inputUser.value == 'Mali' && form.inputPassword.value== '0000'){
            location='mali.html';
        }
     else if(form.inputUser.value == 'Mali') {
        if (form.inputPassword.value== '0000') {
            console.log('Estas en el usuario');
            location='mali.html';
        }
     }
        else if(form.inputUser.value == 'Maui') {
            if (form.inputPassword.value== '8521') {
                console.log('Estas en el usuario');
                location='maui.html';
            }
                else{
                    alert('Usuario y/o contraseña no encontrados');
                }
        }
}

// ZONA DE ESTADO DE CUENTA
var enviar= document.getElementById('enviar');
var depositar = document.getElementById('depositar');
var verNo = document.getElementById('verNo');


enviar.addEventListener('click', ()=>{
    var saldoT = parseInt(document.getElementById('saldoT').value);
    var cantidad = parseInt(document.getElementById('cantidadR').value); 
    if(saldoT>10 && saldoT<990){
        document.getElementById('saldoT').value= saldoT- cantidad;
    }else{
        alert('El valor no esta entre los limites permitidos');
    }    
})

depositar.addEventListener('click', ()=>{
    var saldoT = parseInt(document.getElementById('saldoT').value);
    var cantidad = parseInt(document.getElementById('cantidadR').value); 
    if(saldoT>10 && saldoT<990){
        document.getElementById('saldoT').value= saldoT+ cantidad;
    }else{
        alert('El valor no esta entre los limites permitidos');
    }   
    
})

verNo.addEventListener('click', ()=>{
    var visible=0;
    var monto= document.getElementById('monto').style.display;
    if(visible=0){
        monto= 'none';
        verNo.innerHTML='<a href="#"><i class="fa-solid fa-eye-slash fa-2x"</i></a>  ';
    }else if(visible=1){

    }
})


// FUNCIONES CAMBIO DE TEXTO
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

