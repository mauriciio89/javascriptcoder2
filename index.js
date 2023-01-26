const ingreso = alert("Ingresa tus datos")
const nombreUsuario = prompt("Cuál es tu nombre?")
const apellidoUsuario = prompt("Cuál es apellido?")


let total = 0
let nombreProducto = ""
let cantidad = 0
let totalDeCompra = 0


let productos = [
    {
        nombre : "producto1",
        precio : 25,
        
    },
    {
        nombre : "producto2",
        precio : 20,
        
    },
    {
        nombre : "producto3",
        precio : 18,
        
    },
    {
        nombre : "producto4",
        precio : 16,
        
    },
]  




const saludo = () => {
    ingreso
    alert(`Hola ${nombreUsuario} ${apellidoUsuario} bienvenido a tu sitio web favorito.`)
}
console.log(saludo)
saludo()



let productoSeleccionado = productos.filter(producto => producto.nombre === producto1 || producto2 || producto3 || producto4); 
console.log(productoSeleccionado)
    

function producto() {
    while(productoSeleccionado !== "6"){

         productoSeleccionado = prompt("Elija una opción 1.producto1 - 2.producto2 - 3.producto3 - 4.producto4 - 5.Compra total -  - 6.Salir")
        
         while (isNaN(productoSeleccionado)){
            productoSeleccionado = prompt("Elija una opción 1.producto1 - 2.producto2 - 3.producto3 - 4.producto4 - 5.Compra total  - 6.Salir Ingrese un número del 1 al 6")
         }
        
        if(productoSeleccionado == "1"){
        cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado."))
         while(isNaN(cantidad)){
        cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado. (Solo números)"))
         }   
        
        total = cocacola*cantidad
         nombreProducto = "producto1"
         totalDeCompra = totalDeCompra + total

        }else  if(productoSeleccionado == "2"){
            cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado."))
            while(isNaN(cantidad)){
           cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado. (Solo números)"))
            }   
         total = productos.nombre*cantidad
         nombreProducto = "producto2"
         totalDeCompra = totalDeCompra + total

        }else if(productoSeleccionado == "3"){
            cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado."))
            while(isNaN(cantidad)){
           cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado. (Solo números)"))
            }   
         total = producto3*cantidad
         nombreProducto = "producto3"
         totalDeCompra = totalDeCompra + total

        }else if(productoSeleccionado == "4"){
            cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado."))
            while(isNaN(cantidad)){
           cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado. (Solo números)"))
            }   
         total = producto4*cantidad

         nombreProducto = "producto4"
         totalDeCompra = totalDeCompra + total

        }else if(productoSeleccionado == "5"){
        alert("El valor total de la compra es "+ totalDeCompra)
           
        
        }else if(productoSeleccionado == "6") { 
            alert("Gracias por comprar")
        
        }else { 
            alert("Ingresaste una opción incorrecta")
        }
        
        
        

    }
   
    
   }

producto()




