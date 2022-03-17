import React from "react";
import Home from './Pages/Home.js';
import Produtos from "./Pages/Produtos";
import Lista from './Components/Lista.js';
import Atributos from "./Components/Atributos";


const App = () => {
    return (
        <div>
            App
            <Home/>
            <Produtos/>
            <Lista/>
            <Atributos/>
        </div>
    )
}

export default App;