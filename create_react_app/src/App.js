import React from "react";
import Home from './Pages/Home.js';
import Produtos from "./Pages/Produtos";
import Lista from './Components/Lista.js';
import Atributos from "./Components/Atributos";
import Compras from "./Components/Compras";
import ComprasEffect from "./Components/ComprasEffect";


const App = () => {
    return (
        <div>
            App
            <Compras/>
            <Home/>
            <Produtos/>
            <Lista/>
            <Atributos/>
            <ComprasEffect/>
        </div>
    )
}

export default App;