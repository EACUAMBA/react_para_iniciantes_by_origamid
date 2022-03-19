import React, {useState} from 'react';

function Moeda(props) {
    const [moeda, setMoeda] = useState(0)
    const [moedaCambeada, setMoedaCambeada] = useState(0)

    const handleChangeMoeda = function (event) {
        setMoeda(event.target.value)

    }
    const handleKeyUpMoeda = function (event) {
        setMoedaCambeada((moeda/props.valor) * props.metical)
    }
    return (
            <tr>
                <th scope={'row'}>
                    {props.indice}
                </th>
                <td>
                    {props.moeda}
                </td>
                <td>
                    {props.pais}
                </td>
                <td>
                    <input type={'text'} value={moeda} className={'form-control'} onChange={handleChangeMoeda} onKeyUp={handleKeyUpMoeda} />
                </td>
                <td>
                    {Number(moedaCambeada).toLocaleString('pt-MZ', {style: 'currency',currency: 'MZN'})}
                </td>
            </tr>
    );
}

export default Moeda;
