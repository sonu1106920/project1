// Example exchange rates (static for demo)
const exchangeRates = {
  USD: { INR: 83, EUR: 0.92, GBP: 0.78 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094 },
  EUR: { USD: 1.09, INR: 90, GBP: 0.85 },
  GBP: { USD: 1.28, INR: 106, EUR: 1.18 }
};

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  if (fromCurrency === toCurrency) {
    document.getElementById("output").innerText = 
      `Converted Value: ${amount} ${toCurrency}`;
    return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  document.getElementById("output").innerText = 
    `Converted Value: ${convertedAmount} ${toCurrency}`;
}
