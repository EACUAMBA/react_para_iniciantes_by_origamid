import React from "react";
import Home from './Pages/Home.js';
import Produtos from "./Pages/Produtos";
import Lista from './Components/Lista.js';


const App = () => {
    return (
        <div>
            App
            <Home/>
            <Produtos/>
            <Lista/>
        </div>
    )
}

export default App;