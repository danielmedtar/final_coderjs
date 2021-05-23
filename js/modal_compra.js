const abrirCarrito = $('#boton-carrito')

const modalContenedor = $('.modal-contenedor') //Por ser una clase se le indica que debe tomar el índice 0 indicando que queremos trabajar el primer elemento que tenga esa clase

const cerrarCarrito = $('#cerrar-carrito')

const modalCarrito = $('.modal-carrito')


//Con estas arrow functions se indica que cada vez que se haga clic en los elementos llamados, se les añada la clase active
abrirCarrito.on('click', () => {
    modalContenedor
    .fadeIn(500)
    .css({        
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100vh",
        "background-color": "rgba(0, 0, 0, 0.3)",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        transition: "all .5s",
    })

})

cerrarCarrito.on('click', () => {
    modalContenedor.fadeOut(800)
})


modalContenedor.on('click', () => {
    modalContenedor.slideUp(1000)
})



//Con esta se evita que el modal se cierre al hacer clic incluso dentro de él
modalCarrito.on('click', (event) => {
    event.stopPropagation()

})