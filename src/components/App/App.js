import React from 'react';
import './App.css';

//component
import Combination from '../Combination/Combination';
import Variation from '../Variation/Variation';
import Py from '../Pyhtagoras/Py'

//img
import C from '../Combination/C.png'
import V from '../Variation/V.png';
import PyImg from '../Pyhtagoras/Py.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: '1'
    };

    this.changeToC = this.changeToC.bind(this);
    this.changeToV = this.changeToV.bind(this);
    this.changeToPy = this.changeToPy.bind(this);
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

  changeToPy() {
    this.setState({
      currentDisplay: 3
    })
  }

  displayElement() {
    if (this.state.currentDisplay == 1) {
      return <Combination currentDisplay={this.state.currentDisplay}/>
    } else if (this.state.currentDisplay == 2) {
      return <Variation currentDisplay={this.state.currentDisplay}/>
    } else if (this.state.currentDisplay == 3) {
      return <Py currentDisplay={this.state.currentDisplay}/>
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
          <div onClick={this.changeToPy} id="3" className="navContainer">
            <img className="navImg" src={PyImg}></img>
          </div>
        </div>
        {this.displayElement()}
      </div>
    )
  }
}

export default App;
