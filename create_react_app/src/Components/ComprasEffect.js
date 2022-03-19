import React, {useState, useEffect} from 'react';
import PaisRow from "./PaisRow";


function ComprasEffect(props) {

    const [getTitle, setTitle] = useState("React");
    const [count, setCount] = useState(1);
    const [moedas, setMoedas] = useState([])

    useEffect(()=>{
        document.title = getTitle;
    }, [getTitle]);

    useEffect(()=>{
        fetch("https://currencyapi.net/api/v1/currencies?key=7JhHIydpksuvlRBzR7KsFR1FTvQ4Oib8S3BB&output=JSON")
            .then((response)=>{
                console.log(response)
                return response.json();
            }).then((data)=>{
               setMoedas(Object.entries(data.currencies))
        })
    }, [count])

    function handleChange(event){
        console.log(event.target.value)
        setTitle(event.target.value);
    }
    function handleChangeCount(event){
        console.log(event.target.value)
        setCount(event.target.value);
    }

    return (
        <div>
            <input type={'text'} name={'title'} onChange={handleChange}/>
            <input type={'number'} name={'count'} onChange={handleChangeCount}/>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Moeda</th>
                        <th>País</th>
                    </tr>
                    </thead>
                    <tbody>
                    {moedas.map((m)=>{
                        return (
                            <PaisRow pais={m}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default ComprasEffect;
