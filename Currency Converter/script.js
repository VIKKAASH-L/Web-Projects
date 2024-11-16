document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');

    // Example conversion rates (you can replace these with actual rates from an API)
    const conversionRates = {
        USD: { USD: 1, EUR: 0.85, INR: 74.5 },
        EUR: { USD: 1.18, EUR: 1, INR: 88 },
        INR: { USD: 0.013, EUR: 0.011, INR: 1 }
    };

    // Check if conversion is possible
    if (!isNaN(amount) && conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        const rate = conversionRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        resultElement.textContent = 'Invalid input or unsupported currency conversion.';
    }
});
