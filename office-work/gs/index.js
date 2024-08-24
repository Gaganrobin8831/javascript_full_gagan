let {convertCurrency}  = require('curreny_convertor')

convertCurrency("EUR","INR",3).then(data => console.log(data));