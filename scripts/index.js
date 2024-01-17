/**
 * @author Adrián Fernández Rodríguez
 * @github
 */

const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const mensaje = document.getElementById("mensaje")
const enviar = document.getElementById("enviar")
const errores = document.getElementById("errores")


const infobtn = document.getElementById("infobtn")
const infor = document.getElementById("infor")
const reserva = document.getElementById("reserva")

const validar = (e) => {
    e.preventDefault()
    mensajesError=[]

    nombre.value.trim().length === 0 && mensajesError.push("El nombre es un campo obligatorio"),
    nombre.style.outline = '1px solid red';

    !/^[A-Z].{1}[a-zA-Z]*$/.test(nombre.value.trim()) && mensajesError.push("Un nombre propio comienza siempre por una letra mayúscula y no contiene números"),
    nombre.style.outline = '1px solid red';

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesError.push("Introduce una dirección de correo electrónico válida"),
    correo.style.outline = '1px solid red';
    
    mensaje.value.trim().length < 5 && mensajesError.push("Mensaje demasiado corto"),
    mensaje.style.outline = '1px solid red';


    if(mensajesError.length>0){
        errores.textContent = ''

        mensajesError.forEach(error => {
            errores.innerHTML += `<li>${error}</li>`
        })
        errores.style.color = 'red'
    } else if (mensajesError.length === 0 && confirm("¿Desea enviar el formulario?")){
        errores.textContent = ''
        errores.textContent = 'Enviado correctamente'

        formulario.submit();
    }


    
}

const info = (e2) => {
    e2.preventDefault()
    if(infor){
        alert("¿Desea recibir más información?")
    }else if(infor && reserva){
        alert("¿Desea reservar la ruta?")
    }
}

formulario.addEventListener('submit',info);

formulario.addEventListener('submit',validar);
