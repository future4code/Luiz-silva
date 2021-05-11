import React, {Component} from 'react';
import { Title, Texto, Div} from '../styles';

class Etapa2 extends Component {
  render() {
    return(
      <Div>
       <Title>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </Title>

       <Texto> 5 - Qual o curso ?</Texto>
       <input type="text"/>

       <Texto> 6 - Qual a sua idade ?</Texto>
       <input type="text"/>
      </Div>
    )
  }
}

export default Etapa2;