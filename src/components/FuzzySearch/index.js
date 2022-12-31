import React, {useState } from 'react';
import Fuse from 'fuse.js';
import './fuzzySearch.css';

const FuzzySearch = ({list ,searchParameters , updateData }) => {
    const [query , setQuery] = useState('');

    const fuse = new Fuse(list , {
        keys: [ ...searchParameters]
        })

    const handleInputChange = (e)=> {
        setQuery(e.target.value);
        if(!e.target.value){
            updateData(list);
            return;
        }
        const results = fuse.search(e.target.value).map(obj => obj.item );
        updateData(results);
    };

    return (
        <div className="searchBox">
            <input type="search" placeholder='Search Stocks' value={query} onChange={handleInputChange}/>
        </div>
    )
};

export default FuzzySearch;