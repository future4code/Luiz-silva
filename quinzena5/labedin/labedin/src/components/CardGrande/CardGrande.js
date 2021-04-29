import React from 'react';
import './CardGrande.css'

function CardGrande({imagem, nome, descricao}) {
    return (
        <CardGrande>
            <img src={ imagem } alt=''/>
            <div>
                <h4>{ nome }</h4>
                <p>{ descricao }</p>
            </div>
        </CardGrande>
    )
}

export default CardGrande;