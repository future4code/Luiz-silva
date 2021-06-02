import React, {Component} from 'react';
import axios from 'axios';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';
export default class App extends Component {
  state = {
    telaAtual: "cadastro"
  }
  escolheTela = () => {
    switch(this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
        case "lista":
          return <ListaUsuarios irParaCadastro={this.irParaCadastro}/>
          default:
            return <div><h1>PAgina não encontrada</h1></div>
    }
  }

  irParaCadastro = () => {
    this.setState(telaAtual: "cadastro")
  }
  
  irParaLista = () => {
    this.setState(telaAtual: "lista")

  }

  render() {
    return(
      <>
      {this.escolheTela()}
      </>
    )
  }
}