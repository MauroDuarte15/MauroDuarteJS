const productos = ['Maxi-Campera', 'Campera', 'Remera Clasica', 'Remera Estampada']
const carrito = []

tituloIndex = document.getElementById("titulo")
tituloSloganIndex = document.getElementById("slogan")
productosTitulo = document.getElementById("tituloProductos")


tituloIndex.innerText = "Indumentaria Femenina"
tituloSloganIndex.innerText = "Calidad Premium, Lo nuevo en moda femenina"
productosTitulo.innerText = "nuestro CATALOGO"

function cargarProductos() {
    debugger
    listadoIndumentaria.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto
              li.id = producto + "Prod"
              listadoIndumentaria.append(li)
    }
}

cargarProductos()