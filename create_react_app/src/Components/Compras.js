import React, {useState, useEffect} from 'react';


function Compras(props) {
    const [count, setCount] = useState(0);

    const handleCompras = function (event) {
        setCount(count + 1);
        console.log(count)
    }
    const cores = ['red', 'blue', 'green', 'pink'];
    const [cor, setCor] = useState('white');
    const estilo = {backgroundColor: cor};

    const handleClick = function (event){
        setCor(event.target.innerText);
        console.log(event.target.innerText)
    }

    let colors = cores.map((c, index) => {
        return <button onClick={handleClick} key={index}>{c}</button>
    })
    return (
        <div>
            <div className={'square'} style={estilo}>{cor}</div>
            {cores.map((c, index) => {
                return <button onClick={handleClick} key={index}>{c}</button>
            })}
            <button className={'btn btn-primary btn-lg'} onClick={handleCompras}>{`Compras: ${count}`}</button>
        </div>
    );
}


export default Compras;