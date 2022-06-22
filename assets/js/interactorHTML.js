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
              li.addEventListener("click", ()=> {
                agregarAlCarrito(`${producto.nombre}`)
              })
              listadoIndumentaria.append(li)
    }
    for (const producto of remeras) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto.nombre
              li.id = producto.nombre + "Prod"
              li.addEventListener("click", ()=> {
                agregarAlCarrito(`${producto.nombre}`)
              })
              listadoIndumentaria.append(li)
    }
    for (const producto of pantalones) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto.nombre
              li.id = producto.nombre + "Prod"
              li.addEventListener("click", ()=> {
                agregarAlCarrito(`${producto.nombre}`)
              })
              listadoIndumentaria.append(li)
    }
}

cargarProductos()