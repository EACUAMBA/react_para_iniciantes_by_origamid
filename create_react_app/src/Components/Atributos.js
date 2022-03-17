import React from 'react';

function Atributos() {
    const abre = 5;
    const estilo = {fontFamily: ["Arial", "serif"], fontSize: "5rem", color: "green"};
    const handleClick = function (event) {
        console.log('Click', event.target);
    }
    return (
        <div >
            <p className={abre > 8 ? 'aberto' : ''} style={estilo}>Funcionamento</p>

            <button className={'btn btn-primary'} onClick={handleClick}>Salvar</button>
        </div>
    );
}

export default Atributos;