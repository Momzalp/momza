let pedido = {};

function mostrarPago() {
  const playerId = document.getElementById("playerId").value.trim();
  const diamonds = document.getElementById("diamonds").value;
  const metodo = document.getElementById("paymentMethod").value;

  if (!playerId) {
    alert("Por favor, ingresa tu ID de jugador.");
    return;
  }

  if (metodo === "pagoefectivo") {
    alert("❌ PagoEfectivo no está disponible actualmente.");
    return;
  }

  let precio;
  switch(diamonds) {
    case "341": precio = "S/7.01"; break;
    case "572": precio = "S/11.68"; break;
    case "1166": precio = "S/23.29"; break;
    case "2398": precio = "S/45.95"; break;
    case "6160": precio = "S/116.82"; break;
    default: precio = "S/0.00";
  }

  pedido = {
    playerId,
    diamonds,
    precio
  };

  document.getElementById("main-section").style.display = "none";
  document.getElementById("payment-section").style.display = "block";
}