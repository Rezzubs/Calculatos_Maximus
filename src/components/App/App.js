import React from 'react';
import './App.css';
import Combination from '../Combination/Combination';
import Variation from '../Variation/Variation';
import { tsConstructorType } from '@babel/types';
import C from '../Combination/C.png'
import V from '../Variation/V.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: '2'
    };

    this.changeToC = this.changeToC.bind(this);
    this.changeToV = this.changeToV.bind(this);
  }

  changeToC() {
    this.setState({
      currentDisplay: 1
    })
  }

  changeToV() {
    this.setState({
      currentDisplay: 2
    })
  }

  displayElement() {
    if (this.state.currentDisplay == 1) {
      return <Combination />
    } else if (this.state.currentDisplay == 2) {
      return <Variation />
    }
  }


  render(){
    return (
      <div className="App">
        <div className="navbar">
          <div onClick={this.changeToC} id="1" className="navContainer">
            <img className="navImg" src={C}></img>
          </div>
          <div onClick={this.changeToV} id="2" className="navContainer">
            <img className="navImg" src={V}></img>
          </div>
          <div onClick={this.elementChange} id="3" className="navContainer">
            <img className="navImg"></img>
          </div>
        </div>
        {this.displayElement()}
      </div>
    )
  }
}

export default App;
