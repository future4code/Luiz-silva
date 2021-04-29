import React from 'react';
import './ImagemButton.css'

function ImagemButton({imagem, texto}) {
    return (
        <div className="image-button-container">
            <img src={ imagem } alt=''/>
            <p>{ texto }</p>
        </div>

    )
}

export default ImagemButton;