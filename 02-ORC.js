// principio de abierto cerrado

function processPayment(employee) {
  //lógica para procesar el pago

  const payment = {
    amount: employee.hoursWorked * employee.hourlyRate,
    date: Date.now(),
    paymentMethod: employee.paymentMethod,
  };
  console.log(
    `Pago de $${payment.amount} procesado en la tarjeta de crédito de ${employee.name}`
  );
  return payment;
}
