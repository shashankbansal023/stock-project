import React from 'react';
import TableHeaders from './TableHeader'
import TableRows from './TableRows';

const Table = ({headers ,sortBy,handleAscendingSort, handleDescendingSort,  rowData , onRowClick ,order=""}) => {
    return (
        <table>
            <TableHeaders 
                headers={headers}
                rowData={rowData}
                sortBy={sortBy}
                order={order}
                handleAscendingSort={handleAscendingSort}
                handleDescendingSort={handleDescendingSort}
            />
            <TableRows 
                headers={headers}
                rowData={rowData}
                onRowClick={onRowClick}
            />
        </table>
    )
} ;

export default React.memo(Table);