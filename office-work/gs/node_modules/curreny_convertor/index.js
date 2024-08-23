import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_lLzjsycKTxKNGJ6B1ZSJGxN15jjD2EzG6bTY2Iqd');

convertCurrency("INR","USD",3)

export async function convertCurrency(fromCurrency,toCurrency, units) {
   const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })

    const multiplier = res.data[toCurrency]
    
    return multiplier * units
    
}

