import React from 'react';

function PaisRow(props) {
    return (
        <tr>
            <td>{props.pais[0]}</td>
            <td>{props.pais[1]}</td>
        </tr>
    );
}

export default PaisRow;
