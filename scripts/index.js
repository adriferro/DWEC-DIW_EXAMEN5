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

const validar = (e) => {
    e.preventDefault()
    let mensajesError=[]

    nombre.value.trim().length === 0 && mensajesError.push("El nombre es un campo obligatorio"),
    nombre.style.outline = '1px solid red';
}