const INSTRUMENTS_API = 'https://prototype.sbulltech.com/api/v2/instruments';
const QUOTES_API = "https://prototype.sbulltech.com/api/v2/quotes";


export const fetchStocks = ()=>{
    return fetch(INSTRUMENTS_API, {
        headers:{
            'Content-Type': 'text/csv',
        }
    });
}

export const fetchPriceQuotes = (quote) => {
    return fetch(`${QUOTES_API}/${quote}` , {
        headers:{
            'Content-Type': 'application/json'
        }
    })
}