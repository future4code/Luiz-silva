import React, {Component} from 'react';

export default class Cadastro extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.irParaLista}>Ir Para Lista de usuarios</button>
        <h1>Cadastro</h1>
      </div>
    )
  }
}