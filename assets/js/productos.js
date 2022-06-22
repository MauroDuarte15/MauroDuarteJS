// generadorPantalones ()
function generadorPantalones () {
    pantalones.push(new Producto("PANTALON CON PIEL MAXI", 40, 3000))
    pantalones.push(new Producto("PALAZO MORLEY FRIZA", 60, 2800 ))
    pantalones.push(new Producto("BABUCHA MORLEY FRIZA", 70, 2800 ))
    pantalones.push(new Producto("BABUCHA BENGALINA ELASTIZADA C/CIERRE", 70, 3500))
}
// generadorCamperas ()
function generadorCamperas () {
    camperas.push(new Producto("MAXI CAMPERA CON PIEL", 40, 4600))
    camperas.push(new Producto("CAMPERA CON PIEL", 60, 3800))
    camperas.push(new Producto("ESPECIAL-MAXI CON PIEL", 70, 4800))
    camperas.push(new Producto("ESPECIAL-CAMPERA CON PIEL", 70, 4000))
}
// generadorRemeras ()
function generadorRemeras () {
    remeras.push(new Producto("REMERA CLASICA CON ESTAMPADO", 40, 800))
    remeras.push(new Producto("REMERONES", 60, 1200))
    remeras.push(new Producto("REMERA CON VOLADITO", 70, 900))
    remeras.push(new Producto("REMERA LISA LANILLA", 70, 800))
}
// generadorDeEnvio ()
function generadorDeEnvio () {
    domicilios.push(new Localidad("San fernando", 300))
    domicilios.push(new Localidad("Tigre", 250))
    domicilios.push(new Localidad("Pacheco", 200))
    domicilios.push(new Localidad("Carupa", 250))
}

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