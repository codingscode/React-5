import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pessoa from './Pessoa/Pessoa'; 

class App extends Component {

  state = {  
    pessoas: [
     {nome: 'Tom', idade: 21},
     {nome: 'Julia', idade: 22},
     {nome: 'William', idade: 23}
    ],
    outroState: 'algum outro valor',
    mostrarPessoas: false
  }  

  switchManipuladorNome = (novoNome) => {  
    
    this.setState({
      pessoas: [
        {nome: novoNome, idade: 15},
        {nome: 'Jefferson', idade: 20},
        {nome: 'Esther', idade: 19}
      ]
    })
  }

  nomeManipuladorAlterado = (event) => {
    this.setState({
      pessoas: [
        {nome: 'Tomas', idade: 40},
        {nome: event.target.value, idade: 30},
        {nome: 'Angela', idade: 45}
      ]
    })
  }

  toogleManipuladorPessoas = () => {
    const fazerMostrar = this.state.mostrarPessoas;
    this.setState({mostrarPessoas: !fazerMostrar});
  }

  render() {
    const estilo = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let pessoas = null;
    if (this.state.mostrarPessoas) {
      pessoas = (
        <div>
        {this.state.pessoas.map(pessoa => {
          return <Pessoa 
          nome={pessoa.nome} 
          idade={pessoa.idade}/>
        })}
        
      </div>

      );
    }

    return (
      <div className="App">
        <h1>Olá, Sou um aplicativo React</h1>
        <p>Isto está funcionando</p>
        <button 
        style={estilo}
        onClick={this.toogleManipuladorPessoas}>Alternancia de Pessoas
        </button> 
        {pessoas}
      </div> 
    ); 
    
    
  }
}

export default App;

