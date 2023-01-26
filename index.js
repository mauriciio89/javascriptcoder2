const productos = [
    {
        nombre: "arroz",
        precio: 20
    },
    {
        nombre: "tomate",
        precio: 10
    },
    {
        nombre: "queso",
        precio: 30
    },
    {
        nombre: "arvejas",
        precio: 15
    },
    {
        nombre: "atun",
        precio: 25
    },
];

let carrito = []

let seleccion = prompt("Desea algún producto si o no?")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor diga si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("gracias por preferirnos , hasta pronto")
}


while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "arroz" || producto == "tomate" || producto == "queso" || producto == "arvejas" || producto == "atun") {
        switch (producto) {
            case "arroz":
                precio = 20;
                break;
            case "tomate":
                precio = 10;
                break;
            case "queso":
                precio = 30;
                break;
            case "arvejas":
                precio = 15;
                break;
            case "atun":
                precio = 25;
                break;
            default:
                break;
        }
      let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))   
      
      carrito.push({producto, unidades, precio})
      console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea agregar algo mas?")
    while(seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: ${total}`)
























