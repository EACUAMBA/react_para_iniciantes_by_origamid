import React, {useState} from 'react';


function Compras(props) {
    const [count, setCount] = useState(0);

    const handleCompras = function (event) {
        setCount(count+1);
        console.log(count)
    }
    return (
        <div>
            <button className={'btn btn-primary btn-lg'} onClick={handleCompras}>{`Compras: ${count}`}</button>
        </div>
    );
}


export default Compras;