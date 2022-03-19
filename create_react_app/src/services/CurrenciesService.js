function getCurrencies(setCurrencies, setCurrenciesStatic) {
    fetch("https://currencyapi.net/api/v1/currencies?key=7JhHIydpksuvlRBzR7KsFR1FTvQ4Oib8S3BB&output=JSON")
        .then(
            (response)=>{
                return response.json()
            }
        )
        .then(
            (data)=>{
                let currencies = Object.entries(data.currencies)
                currencies = currencies.map(
                    (currency, index)=>{
                        return {
                            indice: index+1,
                            moeda: currency[0],
                            pais: currency[1],
                        };
                    }
                )
               return currencies
            }
        )
        .then(
            (currencies)=>{

                setCurrencies(currencies)
                setCurrenciesStatic(currencies)
            }
        )
}


function getCurrenciesRate(setCurrenciesRate) {
    fetch("https://currencyapi.net/api/v1/rates?key=7JhHIydpksuvlRBzR7KsFR1FTvQ4Oib8S3BB&output=JSON")
        .then(
            (response)=>{
                return response.json()
            }
        )
        .then(
            (data)=> {
                setCurrenciesRate(data)
            }
        )
}

export {getCurrenciesRate, getCurrencies};
