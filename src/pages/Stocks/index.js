import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchStocks } from '../../helper';

const Stocks = () => {
    const [stocksData , setStockData] = useState([]);
    const [filteredStocks , setFilteredStocks] = useState([]);
    const navigate = useNavigate();

    const navigateToQuotesPage = (symbol) => {
        navigate(`/quotes/${symbol}`)
    }
    const searchParameters = ['name' , 'symbol'];
    const headers = {
            symbol: 'Symbol' , 
            name: 'Name' ,
            category:  'Category'
        };

    const updateData = (data) => {
        setFilteredStocks(data);
    }
    
    const convertCSVtoJSON = (data) => {
        const lines = data.split('\n');
        const keys = Object.keys(headers);
        return lines.slice(1, lines.length - 1).map(line => {
            return line.split(',').slice(0,3).reduce((acc, cur, i) => {
                const obj = {};
                obj[keys[i]] = cur;
                return { ...acc, ...obj };
            }, {});
        });
    }
    
    useEffect(()=>{
        const  fetchAllStocks = async() => {
            const res = await fetchStocks();
            const data = await res.text();
            const stockData = convertCSVtoJSON(data);
            setStockData(stockData);
        }

        fetchAllStocks();
    },[]);
    return(
        <div>Stocks Page</div>
    )
};

export default Stocks;