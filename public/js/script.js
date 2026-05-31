const BOT_TOKEN = "8123866702:AAF2-pu56D_WkGSjpBqSoUK5JToT1_c1A60";
const CHAT_ID = "-1003148363441";

let productoActual = "";

function comprar(producto) {
productoActual = producto;

```
document.getElementById("pedidoModal").style.display = "block";
document.getElementById("productoSeleccionado").value = producto;

window.scrollTo({
    top: document.getElementById("pedidoModal").offsetTop,
    behavior: "smooth"
});
```

}

async function enviarPedidoTelegram() {

```
const nombre = document.getElementById("nombrePedido").value;
const correo = document.getElementById("correoPedido").value;
const telefono = document.getElementById("telefonoPedido").value;

if (!nombre || !correo || !telefono) {
    alert("Completa todos los campos.");
    return;
}

const mensaje =
```

`🌸 NUEVO PEDIDO

💐 Producto: ${productoActual}
👤 Nombre: ${nombre}
📧 Correo: ${correo}
📱 Teléfono: ${telefono}`;

```
try {

    await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: mensaje
            })
        }
    );

    alert("Pedido enviado correctamente.");

    document.getElementById("pedidoModal").style.display = "none";

} catch (error) {
    alert("Error al enviar el pedido.");
    console.error(error);
}
```

}
