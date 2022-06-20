function creoID () {
    return parseInt(Math.random() * 10000)
}

class Producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = 1.21
        this.id = creoID ()
    }
    precioConIVA () {
        let precioVenta = this.precio * this.iva
        return precioVenta.toFixed(2)
    }
    descontarStock (cantidad){
        this.stock = this.stock - cantidad
        // this.stock -= cantidad
    }
}

class Localidad {
    constructor(domicilio, costo) {
        this.domicilio = domicilio
        this.costo = costo
    }
}
