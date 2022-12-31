import React from 'react';

const TableRows = ({headers , rowData , onRowClick}) => {

    return (
        <tbody>
        {   rowData.map(row => {
            return (
                <tr key={JSON.stringify(row)} onClick={() => {onRowClick && onRowClick(row.symbol)}}>
                    {
                        Object.keys(headers).map(header => {
                            return <td key={JSON.stringify(header)}>{row[header]}</td>
                        })
                    }
                </tr>
            )
        })
        }
        </tbody>
    )
};

export default TableRows;
