const irPagar = () => {

    const carritoMP = carrito.map(el => ({
        title: el.nombre,
        description: "",
        picture_url: "",
        category_id: el.id,
        quantity: el.cantidad,
        currency_id: "ARS",
        unit_price: el.precio + (el.precio * 0.21)
    }))


    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: "POST",
        headers: {
            Authorization: 'Bearer TEST-6749401201952774-052316-331a4b286472f40790ff1702e7a29e62-292785847'
        },
        body: JSON.stringify({
        items: carritoMP
        })
    })
        .then(resp => resp.json())
        .then(data => {
            window.open(data.init_point, "_blank")
        })
}