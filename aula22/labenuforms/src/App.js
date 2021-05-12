/* eslint-disable react/jsx-no-undef */
import React, {Component} from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import {Div} from './styles';

class App extends Component {
  state = {
    etapa: 1
  };


  renderizaEtapa = () => {
    // eslint-disable-next-line default-case
    switch(this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
    }
  }

  irParaProximaEtapa = () => {
    if(this.state.etapa === 1){
      this.setState( {etapa: 2});
    }else if(this.state.etapa === 2) {
      this.setState({etapa: 3})
    }else if(this.state.etapa === 3) {
      this.setState({etapa: 4})
    }
  }
  render() {
    return(
      <Div>
        {this.renderizaEtapa() }
        <button onClick={this.irParaProximaEtapa}> Próxima Etapa </button>
      </Div>
    )
  }
}

export default App;