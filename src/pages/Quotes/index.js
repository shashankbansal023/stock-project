import React, { useState , useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import Table from '../../components/Table';
import { fetchPriceQuotes } from '../../helper';
import useInterval from '../../hooks/useInterval';
import './quotes.css';

const Quotes = () => {
    const [quotes , setQuotes] = useState([]);
    const [order , setOrder] = useState('');
    const orderRef = useRef(null);
    const quotesRef = useRef(null);
    orderRef.current = order;
    quotesRef.current = quotes;
    const params = useParams();
    const sortKey = "time";
    const sortOrder = {
        ascending: 'ascending',
        descending: 'descending'
    }
    const headers = {
        price : 'Price',
        time: 'Timestamp',
        valid_till : "Valid Till"
    }
    

    const sortByTimestamp = (data , key , order) =>{
       
        if(order === sortOrder.ascending){
            data.sort((a,b) => (Date.parse(a[key]) - Date.parse(b[key])));
            
        }else {
            data.sort((a,b) => (Date.parse(b[key]) - Date.parse(a[key])));
        }
        
        setQuotes([...data]);
    };

    const handleAscendingSort = (data , key) => {
        setOrder(sortOrder.ascending);
        sortByTimestamp(data, key , sortOrder.ascending);
    };

    const handleDescendingSort = (data , key ) => {
        setOrder(sortOrder.descending);
        sortByTimestamp(data, key , sortOrder.descending)
    };

    const fetchQuotes = useCallback(async() => {
        try{
            const res = await fetchPriceQuotes(params.id);
            const resData = await res.json();
            const stockPriceData = resData.payload[params.id];
            if(JSON.stringify(stockPriceData) === JSON.stringify(quotesRef.current)) return;
            
            if(orderRef.current === sortOrder.ascending){
                sortByTimestamp(stockPriceData ,sortKey , sortOrder.ascending )
                return;
            }
            if(orderRef.current === sortOrder.descending){
                sortByTimestamp(stockPriceData , sortKey , sortOrder.descending);
                return;
            }
            setQuotes([...stockPriceData]);
        }catch(err){
            console.log("err" , err);
        }
    },[ params.id]);

    useInterval(fetchQuotes , 3000);

    return (
        <div className='quotes-page'>
            <div className='quotes-heading'>PRICE QUOTES INFO : </div>
            <div className='quotes-subheading'>{params.id}</div>
            <div className='important'>* you can use ascending and descending w.r.t timestamp</div>
            <Table 
                headers={headers} 
                sortBy={sortKey} 
                order={order}
                handleAscendingSort={handleAscendingSort} 
                handleDescendingSort={handleDescendingSort}  
                rowData={quotes}
            />
        </div>
    )
};

export default Quotes;