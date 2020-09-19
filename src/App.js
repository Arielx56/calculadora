import React, {Component} from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import ClearButton from './Components/ClearButton';
import * as math from 'mathjs';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }
  anadirValoresAlInput = valor => {
    this.setState({ input: this.state.input + valor });
  }
  accionResultado = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  }

  render() {
    return (
      <>
        <div className='app'>
          <div className='calculadora'>
            <Input input={this.state.input}></Input>
            <div className='row'> 
              <div className='nueva'>
              <ClearButton handleClear={()=> this.setState({input:""})}>C</ClearButton>
            </div>
            <Button handleClic={this.anadirValoresAlInput}>/</Button>
            </div>
          <div className='row'>
            <Button handleClic={this.anadirValoresAlInput}>8</Button>
            <Button handleClic={this.anadirValoresAlInput}>7</Button>
            <Button handleClic={this.anadirValoresAlInput}>9</Button>
            <Button handleClic={this.anadirValoresAlInput}>x</Button>
          </div>
          <div className='row'>
            <Button handleClic={this.anadirValoresAlInput}>4</Button>
            <Button handleClic={this.anadirValoresAlInput}>5</Button>
            <Button handleClic={this.anadirValoresAlInput}>6</Button>
            <Button handleClic={this.anadirValoresAlInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClic={this.anadirValoresAlInput}>1</Button>
            <Button handleClic={this.anadirValoresAlInput}>2</Button>
            <Button handleClic={this.anadirValoresAlInput}>3</Button>
            <Button handleClic={this.anadirValoresAlInput}>-</Button>
          </div>
            <div className='row'> 
              <div className='nueva'>
              <Button handleClic={this.anadirValoresAlInput} >.</Button>
              <Button handleClic={this.anadirValoresAlInput} >0</Button>
            </div>
            <Button handleClic={()=>this.accionResultado()}>=</Button>
            </div>
          </div>
        </div>
     
      </>
    );
  }
}

export default App;
