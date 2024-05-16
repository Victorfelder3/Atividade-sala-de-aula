function calcularTroco() {
    // Obtendo os valores dos campos de entrada
    let valorPago = parseFloat(document.getElementById('valorPago').value);
    let precoProduto = parseFloat(document.getElementById('precoProduto').value);
    // Calculando o troco
    let troco = valorPago - precoProduto;

    // Exibindo o troco
    if (troco < 0) {
      document.getElementById('troco').textContent = 'Falta: R$ ' + (-troco).toFixed(2);
    } else if (troco === 0) {
      document.getElementById('troco').textContent = 'Pagamento exato, sem troco.';
    } else {
      document.getElementById('troco').textContent = 'Troco: R$ ' + troco.toFixed(2);
    }
  }