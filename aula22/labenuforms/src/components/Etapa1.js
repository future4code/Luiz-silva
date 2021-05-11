import React, {Component} from 'react';
import {Title, Texto, Div} from '../styles';

class Etapa1 extends Component {
  render() {
    return(
      <Div>
       <Title> ETAPA 1 - DADOS GERAIS </Title>

       <Texto>1 - Qual o seu nome ?</Texto>
       <input type="text"/>

       <Texto>2 - Qual a sua idade ?</Texto>
       <input type="text"/>

       <Texto>3 - Qual o seu email ?</Texto>
       <input type="text"/>

       <Texto>4 - Qual a sua escolaridade ?</Texto>
       <select name="" id="">
         <option value="Ensino médio incompleto">Ensino médio incompleto</option>
         <option value="Ensino médio completo">Ensino médio completo</option>
         <option value="Ensino superior incompleto">Ensino superior incompleto</option>
         <option value="Ensino superior completo">Ensino superior completo</option>
       </select>
       
      </Div>
    )
  }
}

export default Etapa1;