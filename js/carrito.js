let carrito = []

let carritoLS = JSON.parse(localStorage.getItem('carrito'))

if (carritoLS) {
    carrito = carritoLS
    actualizarCarrito()
}

function agregarAlCarrito(idProducto) {

    const productoElegido = carrito.find(el => el.id === idProducto)
    const {stock} = productos.find(el => el.id === idProducto)

    if (productoElegido) {
        if((productoElegido.cantidad + 1) <= stock) {
            productoElegido.cantidad +=1
        } else {
            alert('No hay stock')
        }
    } else if (stock > 0) {
        const {id, desc, precio} = productos.find(el => el.id === idProducto)
        carrito.push({id: id, desc: desc, precio: precio, cantidad: 1})
    } else {
        alert('No hay suficiente stock')
    }    

    localStorage.setItem('carrito', JSON.stringify(carrito))

    actualizarCarrito()
}

// //ELIMINAR PRODUCTO

function eliminarProducto(id) {
    const quitarProducto = carrito.find(el => el.id === id)

    quitarProducto.cantidad--

    if(quitarProducto.cantidad === 0) {
        const indice = carrito.indexOf(quitarProducto)
        carrito.splice(indice, 1)
    }    

    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}

// //ACTUALIZAR CARRITO

function actualizarCarrito() {

    const contenedorCarrito = document.getElementById('contenedor-carrito')
    const precioTotal = document.getElementById('precio-total')
    const precioIva = document.getElementById('precio-iva')
    const precioPagar = document.getElementById('aPagar')
    const contadorCarrito = document.getElementById('contador-carrito')

    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        contenedorCarrito.innerHTML += `
        <div class="producto-carrito">
            <p>${producto.desc}</p>
            <p>Precio: $${producto.precio * producto.cantidad}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
        `
  
    })

    let ingresarPrecioTotal = carrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )
        precioTotal.innerText = ingresarPrecioTotal    
    
    let iva = carrito.reduce( (acc, el) => acc + ((el.precio * el.cantidad)* 0.21), 0 )    
    precioIva.innerText = iva.toFixed(2)

    let precioConDecimal = ingresarPrecioTotal + iva 
    precioPagar.innerText = precioConDecimal.toFixed(2)
    localStorage.setItem('precioConDecimal', JSON.stringify(precioConDecimal))

    contadorCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad, 0 )
    localStorage.setItem('contadorCarrito', JSON.stringify(carrito.length))
}

function eliminarTodo() {
    localStorage.clear(carrito)
    carrito = []
    actualizarCarrito()
    modalContenedor.fadeOut(800)
}