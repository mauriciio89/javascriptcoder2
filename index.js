let ingreso = alert("Ingresa tus datos")
let nombreUsuario = prompt("Cuál es tu nombre?")
let apellidoUsuario = prompt("Cuál es apellido?")

let producto1 = 25
let producto2 = 20
let producto3 = 18
let producto4 = 16

let total
let nombreProducto
let cantidad
let totalDeCompra



const saludo = () => {
    ingreso
    alert(`Hola ${nombreUsuario} ${apellidoUsuario} bienvenido a tu sitio web favorito.`)
}
console.log(saludo)
saludo()

function producto() {
    while(true){
        let productoSeleccionado = prompt("Elija una opción 1.producto1 - 2.producto2 - 3.producto3 - 4.producto4 - 5.Compra total - 6.Salir")
        
        if(productoSeleccionado == "1"){
        cantidad = prompt("Ingrese la cantidad del producto seleccionado.")
        total = producto1*cantidad
         nombreProducto = "producto1"
         totalDeCompra = totalDeCompra + total

        }else  if(productoSeleccionado == "2"){
        cantidad = prompt("Ingrese la cantidad del producto seleccionado.")
         total = producto2*cantidad
         nombreProducto = "producto2"
         totalDeCompra = totalDeCompra + total

        }else if(productoSeleccionado == "3"){
        cantidad = prompt("Ingrese la cantidad del producto seleccionado.")
         total = producto3*cantidad
         nombreProducto = "producto3"
         totalDeCompra = totalDeCompra + total

        }else if(productoSeleccionado == "4"){
        cantidad = prompt("Ingrese la cantidad del producto seleccionado.")
         total = producto4*cantidad

         nombreProducto = "producto4"
         totalDeCompra = totalDeCompra + total

        }else if(productoSeleccionado == "5"){
        alert("El valor total de la compra es "+ totalDeCompra)
        }else if(productoSeleccionado == "6"){ 
        
         break
        }else{
            continue
        }  
        alert("Se ha seleccionado "+ nombreProducto + " por una cantidad de "+ cantidad + " por el precio de " + total)
        
        

    }
   
    
   }

producto()





