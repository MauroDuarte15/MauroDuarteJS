const productos = ['Maxi-Campera', 'Campera', 'Remera Clasica', 'Remera Estampada']
const pantalones = []
const camperas = []
const remeras = []
const domicilios = []
const carrito = []
generadorPantalones ()
generadorCamperas ()
generadorRemeras ()
generadorDeEnvio ()

tituloIndex = document.getElementById("titulo")
tituloSloganIndex = document.getElementById("slogan")
productosTitulo = document.getElementById("tituloProductos")


tituloIndex.innerText = "Indumentaria Femenina"
tituloSloganIndex.innerText = "Calidad Premium, Lo nuevo en moda femenina"
productosTitulo.innerText = "nuestro CATALOGO"

function cargarProductos() {
    listadoIndumentaria.innerHTML = ""
    for (const producto of camperas) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto.nombre
              li.id = producto.nombre + "Prod"
              listadoIndumentaria.append(li)
    }
    for (const producto of remeras) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto.nombre
              li.id = producto.nombre + "Prod"
              listadoIndumentaria.append(li)
    }
    for (const producto of pantalones) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto.nombre
              li.id = producto.nombre + "Prod"
              listadoIndumentaria.append(li)
    }
}

cargarProductos()