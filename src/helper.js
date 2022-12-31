const INSTRUMENTS_API = 'https://prototype.sbulltech.com/api/v2/instruments';

export const fetchStocks = ()=>{
    return fetch(INSTRUMENTS_API, {
        headers:{
            'Content-Type': 'text/csv',
        }
    });
}