import React from 'react';

function Lista() {
    const produtos = ["Notebook", "Smartphone", "Tablet"];
    const produtosMap = produtos.map((item, index)=>{
        return <li key={index}>{`${item} + ${index}`} </li>;
    })

    const livros = [
        { nome: "A Clash of Kings", ano: 1996 },
        { nome: "A Game of Thrones", ano: 1999 },
        { nome: "A Storm of Swords", ano: 2000 }
    ];

    return (
        <div>
            <h1>Lista</h1>
            <ul>{produtosMap}</ul>
            <ol>
                {
                    livros.filter((livro) => livro.ano > 1998)
                        .map((livro, index)=><li key={index}>{livro.nome}</li>)
                }
            </ol>
        </div>
    );
}

export default Lista;