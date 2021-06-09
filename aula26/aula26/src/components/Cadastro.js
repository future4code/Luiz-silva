import React, {Component} from 'react';
import axios from 'axios';

export default class Cadastro extends Component {
  state = {
    nome: "",
    email: ""
  }

  handleNome = (event) => {
    this.setState({nome: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  const fazerCadastro = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: "this.state.nome",
      name: "this.state.email",
    }
    const response = await axios.post(url, body, {
      headers: {
        Authorization: "luiz-silva-munoz"
      }
    })
  }
  render() {
    return(
      <div>
        <button onClick={this.props.irParaLista}>Ir Para Lista de usuarios</button>
        <h1>Cadastro</h1>
        <input 
        type="text" 
        placeholder={"nome"}
        value={this.state.nome}
        onChange={this.handleNome}
        />
        <input 
        type="text" 
        placeholder={"email"}
        value={this.state.email}
        onChange={this.handleEmail}
        />
        
        <button onClick={this.fazerCadastro}>cadastrar</button>
      </div>
    )
  }
}