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