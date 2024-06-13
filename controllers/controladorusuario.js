//consumiendo el api para acceder a los datos de la BD
let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log (respuesta)
    //recorriendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")

        let nombres=document.createElement("img")
        nombres.classList.add("text-center")
        nombres.textContent=usuario.nombres

        let cedula=document.createElement("h3")
        cedula.classList.add("text-center")
        cedula.textContent=usuario.cedula

        let correo=document.createElement("h3")
        correo.classList.add("text-center")
        correo.textContent=usuario.correo

        tarjeta.appendChild(nombres)
        tarjeta.appendChild(cedula)
        tarjeta.appendChild(correo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
})
})
.catch(function(respuesta){
    console.log (respuesta)
})