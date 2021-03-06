import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Tongue&skinColor=DarkBrown" 
          nome="Luiz Henrique Silva" 
          descricao="Oi, eu sou o Luiz Henrique. Sou aluno da Labenu.
          Tenho conhecimentos FullStack, mas meu <3 é Front End"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
        imagem='data:image/png;base64,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'
        nome="EMAIL: " 
        descricao='luiz.henriquems@hotmail.com'
        />
        <CardPequeno 
        imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpx7wdysRQf1klMau5BSVtCZey7_UNB9tesw&usqp=CAU'
        nome="ENDEREÇO: " 
        descricao='Rua do Bobos - N: 0'
        />
        <CardPequeno 
        imagem='data:image/png;base64,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'
        nome="WhatsApp:" 
        descricao=' (31) 9 9999 - 9999'
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Estudante Front End" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ugyhyFoJd77_iDNUV-o-jfObHxWdmn9-Qw1Wt-jmJtbrSTWAOa5-1Cmv6espnzn1ipE&usqp=CAU" 
          nome="Wquarks" 
          descricao="Estagiário web FullStack" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
