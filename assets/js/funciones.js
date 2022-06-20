function crearUsuario () {
    let nuevoUsuario = confirm ("¿Acepta las politicas de la empresa?")
    if (nuevoUsuario == true) {
        nombreUsuario = prompt("Ingrese su nombre de usuario")
        codigoUsuario = parseInt(prompt("Ingrese un codigo de 3 digitos"))
        if ((codigoUsuario > 100 && codigoUsuario < 1000) && (nombreUsuario != ""))  { 
            console.log ("Usuario creado correctamente")
        }else{
            console.log ("Codigo ingresado incorrecto")
            alert("Codigo ingresado incorrecto")
        }
    }else if (nuevoUsuario == false) {
        alert ("Sin usuario no se pueden realizar compras")
    }
}

function verPrecios() {
    let operacion = prompt(`${nombreUsuario}, Valor de prendas: REMERAS, PANTALONES , CAMPERAS`).toUpperCase()
    while (operacion != "ESC") {
        switch (operacion) {
            case "REMERAS":
                console.log(remera1.nombre, remera1.precio)
                console.log(remera2.nombre, remera2.precio)
                console.log(remera3.nombre, remera3.precio)
                console.log(remera4.nombre, remera4.precio)
                operacion = prompt("Ingrese otra opcion: REMERAS, PANTALONES, CAMPERAS o ESC para salir").toUpperCase()
                break;
            case "PANTALONES":
                console.log(pantalon1.nombre, pantalon1.precio)
                console.log(pantalon2.nombre, pantalon2.precio)
                console.log(pantalon3.nombre, pantalon3.precio)
                console.log(pantalon4.nombre, pantalon4.precio)
                operacion = prompt("Ingrese otra opcion: REMERAS, PANTALONES, CAMPERAS o ESC para salir").toUpperCase()
                break;
            case "CAMPERAS":
                console.log(campera1.nombre, campera1.precio)
                console.log(campera2.nombre, campera2.precio)
                console.log(campera3.nombre, campera3.precio)
                console.log(campera4.nombre, campera4.precio)
                operacion = prompt("Ingrese otra opcion: REMERAS, PANTALONES, CAMPERAS o ESC para salir").toUpperCase() 
                break;
            default:
                alert(`No trabajamos ese producto, ${nombreUsuario}`)
                operacion = prompt("Ingrese otra opcion: REMERAS, PANTALONES, CAMPERAS o ESC para salir").toUpperCase() 
                break;
        }
    } 
    }
function valoresEnvio() {
    let operacion = prompt(`${nombreUsuario}, Valor de envio: PACHECO, TIGRE, CARUPA, SAN FERNANDO`).toUpperCase()
        while (operacion != "ESC") {
            switch (operacion) {
                case "PACHECO":
                    console.log(domicilio1.nombre, domicilio1.precio)
                    operacion = prompt("Ingrese otra zona o ESC para salir").toUpperCase()                    
                    break;
                case "TIGRE":
                    console.log(domicilio3.nombre, domicilio3.precio)
                    operacion = prompt("Ingrese otra zona o ESC para salir").toUpperCase()                    
                    break;
                case "CARUPA":
                    console.log(domicilio2.nombre, domicilio2.precio)
                    operacion = prompt("Ingrese otra zona o ESC para salir").toUpperCase()                    
                    break;
                case "SAN FERNANDO":
                    console.log(domicilio4.nombre, domicilio4.precio)
                    operacion = prompt("Ingrese otra zona o ESC para salir").toUpperCase()                    
                    break;
                default:
                    alert(`No Realizamos envios a esa localidad, ${nombreUsuario}`)
                    operacion = prompt("Ingrese otra zona o ESC para salir")                    
                    break;
                }
            }         
        }

function calcularEnvio(prenda, envio) {
    // console.log ("Resultado:",parseFloat(prenda) + parseFloat(envio))
    costoEnvio = parseFloat(prenda) + parseFloat(envio)
    return costoEnvio
    // alert (`El costo con envio es ${costoEnvio}`)
}
function elegirRemera () {
    debugger
    let primerNro = prompt("Que remera desea elegir? VOLADITO, REMERONES, ESTAMPADO, LANILLA").toUpperCase()
       switch(primerNro){
           case "VOLADITO":
                resultado = remera3.precio
                return resultado
           case "REMERONES":
                resultado = remera2.precio
                return resultado
           case "ESTAMPADO":
                resultado = remera1.precio
                return resultado
           case "LANILLA":
                resultado = remera4.precio
                return resultado
           default:
               console.error("No eligio una prenda correcta.")
       }
}
function elegirPantalon () {
    let primerNro = prompt("Que remera desea elegir? BABUCHA-MORLEY, BABUCHA-BENGALINA, CLASICO, PALAZO").toUpperCase()
       switch(primerNro){
           case "BABUCHA-MORLEY":
                resultado = pantalon3.precio
                return resultado
           case "BABUCHA-BENGALINA":
                resultado = pantalon4.precio
                return resultado
           case "CLASICO":
                resultado = pantalon1.precio
                return resultado
           case "PALAZO":
                resultado = pantalon2.precio
                return resultado
           default:
               console.error("No eligio una prenda correcta.")
       }
}

function elegirCampera () {
    let primerNro = prompt("Que remera desea elegir? MAXI-CAMPERA, CAMPERA, ESPECIAL-MAXI, ESPECIAL-CAMPERA").toUpperCase()
       switch(primerNro){
           case "MAXI-CAMPERA":
                resultado = campera1.precio
                return resultado
           case "CAMPERA":
                resultado = campera2.precio
                return resultado
           case "ESPECIAL-MAXI":
                resultado = campera3.precio
                return resultado
           case "ESPECIAL-CAMPERA":
                resultado = campera4.precio
                return resultado
           default:
               console.error("No eligio una prenda correcta.")
       }
}

function datosEnvio() {
    let primerNro = prompt("Ingresa una prenda; CAMPERA, PANTALON, REMERA").toUpperCase()
    let segundoNro = prompt("Ingresa un lugar de envio, PACHECO, CARUPA, TIGRE, SAN FERNANDO").toUpperCase()
    if ((primerNro != "") && (segundoNro != "")){
    switch (primerNro) {
        case "REMERA":
            primerNro = elegirRemera ()
            break;
        case "PANTALON":
            primerNro = elegirPantalon ()
            break;
        case "CAMPERA":
            primerNro = elegirCampera ()
            break;
        default:
            alert("No trabajamos ese producto")
            break;
    }
    switch (segundoNro) {
        case "PACHECO":
            segundoNro = domicilio1.costo
            break;
        case "CARUPA":
            segundoNro = domicilio2.costo
            break;
        case "TIGRE":
            segundoNro = domicilio3.costo
            break;
        case "SAN FERNANDO":
            segundoNro = domicilio4.costo
            break;
        default:
            alert("No realizamos envio a esa localidad")
    }
    alert (`El costo con envio es : ${calcularEnvio(primerNro, segundoNro)}`) 
}else{
    console.error("No ingreso ninguna opcion")
}
} 

function primerInteraccion () {
    interaccion = prompt("Que lista desea ver: CAMPERAS, REMERAS, PANTALONES").toUpperCase()
        switch(interaccion){
            case "CAMPERAS":
                listarCamperas()
                break;
            case "REMERAS":
                listarRemeras()
                break;
            case "PANTALONES":
                listarPantalones()
                break;
            default:
                interaccion = prompt("Opcion incorrecta. para VER: PANTALONES, REMERAS, CAMPERAS")
            }
}


function listarCamperas () {
    camperas.forEach( (producto)=> { 
        console.log(producto.nombre, producto.precio)
    });
}
function listarRemeras () {
    remeras.forEach( (producto)=> { 
        console.log(producto.nombre, producto.precio)
    });
}

function listarPantalones () {
    pantalones.forEach( (producto)=> { 
        console.log(producto.nombre, producto.precio)
    });
}

function listarDomicilios () {
    domicilios.forEach( (localidad)=> { 
        console.log(localidad.domicilio, localidad.costo)
    });
}

function buscarPantalon() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        let resultado = pantalones.find((producto)=> producto.nombre.includes(aBuscar)) //texto parcial
        if (resultado !== undefined) {
            alert("Hubo una coincidencia")
            return resultado
        }
}

function buscarRemera() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        let resultado = remeras.find((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            alert("Hubo una coincidencia")
            return resultado
        }
}


function buscarCampera() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        let resultado = camperas.find((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            alert("Hubo una coincidencia")
            return resultado
        }
}


function calcularCarrito() {
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.log("TOTAL DEL CARRITO:", total)
}

function generarCarrito() {
    carrito.push(new Producto("REMERA CLASICA CON ESTAMPADO", 40, 800))
    carrito.push(new Producto("CAMPERA CON PIEL MAXI", 40, 4600))
    carrito.push(new Producto("PANTALON CON PIEL MAXI", 40, 3000))
}


function filtrarRemeras() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = remeras.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

function filtrarCamperas() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = camperas.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

function filtrarPantalones() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = pantalones.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

function agregarPantalon() {
    resultadoBusqueda = buscarPantalon()
    carrito.push((resultadoBusqueda))
}

function agregarRemera() {
    resultadoBusqueda = buscarRemera()
    carrito.push((resultadoBusqueda))}

function agregarCampera() {
    resultadoBusqueda = buscarCampera()
    carrito.push((resultadoBusqueda))
}