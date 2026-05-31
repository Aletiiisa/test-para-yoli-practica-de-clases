const BOT_TOKEN = "8123866702:AAF2-pu56D_WkGSjpBqSoUK5JToT1_c1A60";
const CHAT_ID = "-1003148363441";

let productoActual = "";

function comprar(producto) {
productoActual = producto;

```
const modal = document.getElementById("pedidoModal");

if (modal) {
    modal.style.display = "block";

    window.scrollTo({
        top: modal.offsetTop,
        behavior: "smooth"
    });
}
```

}

async function enviarPedidoTelegram() {

```
const nombre = document.getElementById("nombrePedido").value.trim();
const correo = document.getElementById("correoPedido").value.trim();
const telefono = document.getElementById("telefonoPedido").value.trim();

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

    if (
        BOT_TOKEN === "PON_AQUI_TU_NUEVO_TOKEN" ||
        CHAT_ID === "PON_AQUI_TU_CHAT_ID"
    ) {

        alert(
            "Formulario funcionando.\n\n" +
            "Ahora debes colocar tu BOT_TOKEN y CHAT_ID reales."
        );

        return;
    }

    const respuesta = await fetch(
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

    const datos = await respuesta.json();

    if (datos.ok) {

        alert("✅ Pedido enviado correctamente.");

        document.getElementById("nombrePedido").value = "";
        document.getElementById("correoPedido").value = "";
        document.getElementById("telefonoPedido").value = "";

        document.getElementById("pedidoModal").style.display = "none";

    } else {

        alert("Error de Telegram.");
        console.log(datos);

    }

} catch (error) {

    console.error(error);
    alert("Error al enviar el pedido.");

}
```

}
