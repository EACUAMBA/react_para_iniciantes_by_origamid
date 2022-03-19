import React from "react";
import {Routes, Route} from 'react-router';
import Home from './Pages/Home.js';
import Menu from "./Components/Menu/Menu";
import Produtos from "./Pages/Produtos";
import SobreNos from "./Pages/SobreNos/SobreNos";
import Moedas from "./Components/Moedas/Moedas";


const App = () => {
    return (
        <>
            <Menu/>
            <div className={'container'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/produtos'} element={<Produtos/>}/>
                    <Route path={'/sobre-nos'} element={<SobreNos/>}/>
                    <Route path={'/moedas'} element={<Moedas/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
