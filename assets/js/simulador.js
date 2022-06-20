

//REMERAS
const remera1 = new Producto("REMERA CLASICA CON ESTAMPADO", 40, 800)
const remera2 = new Producto("REMERONES", 60, 1200)
const remera3 = new Producto("REMERA CON VOLADITO", 70, 900)
const remera4 = new Producto("REMERA LISA LANILLA", 70, 800)
//CAMPERAS
const campera1 = new Producto("CAMPERA CON PIEL MAXI", 40, 4600)
const campera2 = new Producto("CAMPERA CON PIEL", 60, 3800)
const campera3 = new Producto("ESPECIAL CAMPERA MAXI CON PIEL", 70, 4800)
const campera4 = new Producto("ESPECIAL CAMPERA CON PIEL", 70, 4000)
//PANTALONES
const pantalon1 = new Producto("PANTALON CON PIEL CLASICO", 40, 3000)
const pantalon2 = new Producto("PALAZO MORLEY FRIZA", 60, 2800 )
const pantalon3 = new Producto("BABUCHA MORLEY FRIZA", 70, 2800 )
const pantalon4 = new Producto("BABUCHA BENGALINA ELASTIZADA C/CIERRE", 70, 3500)
//DOMICILIOS PARA ENTREGAS
const domicilio4 = new Localidad("San fernando", 300)
const domicilio3 = new Localidad("Tigre", 250)
const domicilio1 = new Localidad("Pacheco", 200)
const domicilio2 = new Localidad("Carupa", 250)

// alert("Bienvenido a DaMia, para operar debe crear un usuario")
// let nuevoCliente = confirm("¿Desea crear un nuevo Usuario?")
//     if (nuevoCliente){
//     crearUsuario()
//     }else{
//         alert("Sin usuario no se puede operar")
// }

// alert(`Gracias por registrarte, ${nombreUsuario}`)

// let interaccion = prompt(`Bienvenido, ${nombreUsuario} puede solicitar ver PRECIO o costo ENVIO. ESC para salir `)
//     if (interaccion != ""){
//     while(interaccion != "ESC"){
//         switch(interaccion){
//             case "PRECIO":
//                 verPrecios()
//                 interaccion = prompt(`${nombreUsuario} Nuevamente puede solicitar ver PRECIO o costo ENVIO. ESC para salir `)
//                 break;
//             case "ENVIO":
//                 valoresEnvio()
//                 interaccion = prompt(`${nombreUsuario} Nuevamente puede solicitar ver PRECIO o costo ENVIO. ESC para salir `)
//                 break;
//             default:
//                 alert ("No ingreso una opcion valida")
//                 interaccion = prompt(`${nombreUsuario} No ingreso una opcion valida. Puede solicitar ver PRECIO o costo ENVIO. ESC para salir `)
//                 break;
//         }
//     }
//     }else {
//         alert("Valores ingresados no son correctos")
//     }

// interaccion = prompt("¿Desea calcular precio de prenda + envio ? CALCULAR o FINALIZAR")
//     if (interaccion != ""){
//         while(interaccion != ""){
//             switch(interaccion){
//                 case "CALCULAR":
//                     datosEnvio()
//                     interaccion = prompt("¿Desea calcular precio de otra prenda + envio ? CALCULAR o FINALIZAR")
//                     break;
//                 case "FINALIZAR":
//                     alert("Gracias por visitar nuestro sitio")
//                     break;
//         }}
//     }else{
//         alert("Gracias por visitar nuestro sitio")
//     }


// let verListaPrecios = confirm("Desea ver la lista de precios?")
// if (verListaPrecios) {
//     primerInteraccion ()
// }else{
//     console.log("El usuario no desea ver precios.")
// }
 
// let verListaEnvios = confirm ("Desea ver localidades de entrega y su costo")
// if(verListaEnvios){
//     listarDomicilios ()
// }else{
//     console.log("El usuario no desea ver localidades")
// }

// let sugerenciaCompra = prompt(`${nombreUsuario} ¿Desea agregar algun PANTALON, REMERA O CAMPERA elegida al carrito de compras? ESC para finalizar`)
//     if(sugerenciaCompra != ""){
//         while (sugerenciaCompra != "ESC"){
//             switch(sugerenciaCompra){
//                 case "PANTALON":
//                     agregarPantalon()
//                     sugerenciaCompra = prompt(` ¿Desea agregar otro producto al carrito? PANTALON, REMERA O CAMPERA elegida al carrito de compras? ESC para finalizar`)
//                     break;
//                 case "REMERA":
//                     agregarRemera()
//                     sugerenciaCompra = prompt(` ¿Desea agregar otro producto al carrito? PANTALON, REMERA O CAMPERA elegida al carrito de compras? ESC para finalizar`)
//                     break;
//                 case "CAMPERA":
//                     agregarCampera()
//                     sugerenciaCompra = prompt(` ¿Desea agregar otro producto al carrito? PANTALON, REMERA O CAMPERA elegida al carrito de compras? ESC para finalizar`)
//                     break;
//                 default:
//                     alert("NO trabajamos el producto elegido")
//                     sugerenciaCompra = prompt(` OPCIONES: PANTALON, REMERA, CAMPERA ESC para finalizar`)
//                     break;
//         }}
// }
//     sugerenciaCompra = confirm(` ¿Desea calcular su carrito de compras?`)
//     if (sugerenciaCompra) {
//         calcularCarrito()
//     }else{
//         alert("Gracias por visitar nuestro sitio web")
//     }

