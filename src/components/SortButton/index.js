import React from 'react';

const SortButton = ({rowData, sortBy , handleAscendingSort , handleDescendingSort ,order}) => {
    return (
        <div className='sort-button'>
            <div className={`ascending ${order === 'ascending' ? 'ascending-active' : ''}`} onClick={()=>handleAscendingSort(rowData, sortBy)}/>
            <div className={`descending ${order === "descending" ? 'descending-active' : ''}`} onClick={()=>handleDescendingSort(rowData, sortBy)}/>
        </div>
    )
};

export default SortButton;