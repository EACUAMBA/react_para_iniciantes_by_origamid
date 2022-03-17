import React from "react";
import Home from './Pages/Home.js';
import Produtos from "./Pages/Produtos";
import Lista from './Components/Lista.js';
import Atributos from "./Components/Atributos";
import Compras from "./Components/Compras";


const App = () => {
    return (
        <div>
            App
            <Compras/>
            <Home/>
            <Produtos/>
            <Lista/>
            <Atributos/>
        </div>
    )
}

export default App;