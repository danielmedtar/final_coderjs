$("body").fadeIn(1500)

let contenedorProductos = $("#contenedor_productos");

muestraProductos(productos)

function muestraProductos(productos) {

    contenedorProductos.html('');

        for(const producto of productos) {
            contenedorProductos.append(`
            <div class="card_productos">
                <img class="img-producto" src=${producto.img} alt="producto">
                <div class="info_producto">
                    <p class="producto_descripcion">${producto.desc}</p>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button onclick=agregarAlCarrito(${producto.id}) class="boton-comprar">Agregar al Carrito</button>
                </div>
            </div>
            `                    
        )}
}

const filtroProducto = $("#filtro-producto")

function filtrar(event) {

    const filter = event.target.value;

    if (filter === 'all') {
        muestraProductos(productos)
    } else {
        const productoFiltrado = productos.filter(el => el.tipo === filter)
        muestraProductos(productoFiltrado)
    }    
}

filtroProducto.on('change', (event) => {
    filtrar(event)
})
