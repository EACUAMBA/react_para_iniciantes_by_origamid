import React, {useEffect, useState} from 'react';
import {getCurrencies, getCurrenciesRate} from '../../services/CurrenciesService'
import Moeda from "../Moeda/Moeda";
import BouncingBall from "../../assets/animations/bouncing-ball";
import './processing.css'

function Moedas(props) {

    const [currencies, setCurrencies] = useState([]);
    const [currenciesRate, setCurrenciesRate] = useState({});
    const [moedaSearch, setMoedaSearch] = useState("");
    const [paisSearch, setPaisSearch] = useState("");
    const [search, setSearch] = useState(0);

    useEffect(
        () => {
            setTimeout(()=>{
                getCurrenciesRate(setCurrenciesRate)
                getCurrencies(setCurrencies)
            }, 2000)
        }, [search]);

    const handlePaisKeyUp = function (event){
        const filter = event.target.value

        const currenciesFiltered = currencies.filter((c)=>{
            console.log()
            if(String(c.pais).search(filter) !== -1)
                return true;
            else
                return false
        })

        if(currenciesFiltered.length === 0 || String(filter).trim().length === 0)
            setSearch(Math.random)

        setCurrencies(currenciesFiltered);
    }


    return (
        <div>
            <h1>Moedas</h1>

            <table className={'table table-hover table-dark'}>
                <thead>
                <tr>
                    <th scope={'col'}>#</th>
                    <th scope={'col'}>Moeda</th>
                    <th scope={'col'}>Pais</th>
                    <th scope={'col'}>Origem</th>
                    <th scope={'col'}>Destino (em Meticais)</th>
                </tr>
                <tr>
                    <th scope={'col'}></th>
                    <th scope={'col'}><input className={'form-control'} onChange={(event)=>{setMoedaSearch(event.target.value)}}/></th>
                    <th scope={'col'}><input className={'form-control'} onChange={(event)=>{setPaisSearch(event.target.value)}} onKeyUp={handlePaisKeyUp}/></th>
                    <th scope={'col'}></th>
                    <th scope={'col'}></th>
                </tr>
                </thead>
                <tbody>
                {
                    (currencies && currenciesRate.valid) ?
                        currencies.map((currency) => {
                           return <Moeda moeda={currency.moeda} pais={currency.pais} key={currency.indice}
                                          indice={currency.indice} valor={currenciesRate.rates[currency.moeda]} metical={currenciesRate.rates['MZN']}/>
                        })
                        :
                        <tr>
                            <td colSpan={'5'} rowSpan={'10'}>
                                <div className={'processing'}><BouncingBall/></div>
                            </td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Moedas;
