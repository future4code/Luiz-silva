import React from 'react';
import './style.css'

function CardPequeno({imagem, nome, descricao}) {
    return (
        <div className="bigcard-container">
            <img src={ imagem } alt=''/>
            <div>
                <h4>{ nome }</h4>
                <p>{ descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;