import React, {Component} from 'react';

export default class ListaUsuarios extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.irParaCadastro}> Ir Para tela de cadastro </button>
        <h1>Lista de Usuários</h1>
        </div>
    )
  }
}