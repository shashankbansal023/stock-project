import React from 'react';
import './tableHeader.css';
import SortButton from '../../SortButton';

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