import React from 'react';

function Home() {
    //Poso colocar código JS.
    const nav = (
        <nav>
            <ul>
                <li><a>Link</a></li>
                <li><a>Link2</a></li>
                <li><a>Link2</a></li>
            </ul>
        </nav>
    );

    const idade = 50;

    return (
        <div>
            <h1>Home</h1>
            {nav}
            <p>{idade >= 30 ? "Velho" : "Jovem" }</p>
            {Date.now()}
        </div>
    );
}

export default Home;