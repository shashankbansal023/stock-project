import React from 'react';
import './tableHeader.css';

const SortButton = ({rowData, sortBy , handleAscendingSort , handleDescendingSort ,order}) => {
    return (
        <div className='sort-button'>
            <div className={`ascending ${order === 'ascending' ? 'ascending-active' : ''}`} onClick={()=>handleAscendingSort(rowData, sortBy)}/>
            <div className={`descending ${order === "descending" ? 'descending-active' : ''}`} onClick={()=>handleDescendingSort(rowData, sortBy)}/>
        </div>
    )
}

const TableHeaders = ({headers , sortBy="" , handleAscendingSort, handleDescendingSort, order, rowData}) => {
    return (
        <thead>
            <tr>
                {
                    Object.keys(headers).map(item => {
                        return <th key={JSON.stringify(item)}>{headers[item]} 
                            {sortBy && item===sortBy &&( 
                                <SortButton 
                                    rowData={rowData} 
                                    sortBy={sortBy}
                                    order={order}
                                    handleAscendingSort={handleAscendingSort} 
                                    handleDescendingSort={handleDescendingSort}/>)}
                            </th>
                    })
                }
            </tr>
        </thead>
    )
}  ;
export default TableHeaders; 