import React, {Component} from 'react';
import { Title, Texto, Div } from '../styles';

class Etapa3 extends Component {
  render() {
    return(
      <Div>
       <Title>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </Title>

       
       <Texto>5. Por que você não terminou um curso de graduação?</Texto>
       <input type="text"/>
       
       <Texto>6. Você fez algum curso complementar?</Texto>
       <select name="" id="">
         <options value='Nenhum'> Nenhum </options>
         <options value='Curso técnico'> Curso técnico </options>
         <options value='Curso de inglês'> Curso de inglês </options>
       </select>
      </Div>
    )
  }
}

export default Etapa3;