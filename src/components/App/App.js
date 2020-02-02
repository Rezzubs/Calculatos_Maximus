import React from 'react';
import './App.css';
import Guide from '../Guide/Guide'

//component
import Combination from '../Combination/Combination';
import Variation from '../Variation/Variation';
import Py from '../Pythagoras/Py'

//img
import C from '../Combination/C.png'
import V from '../Variation/V.png';
import PyImg from '../Pythagoras/Py.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: 3,
      displayHelp: 0
    };

    this.changeToC = this.changeToC.bind(this);
    this.changeToV = this.changeToV.bind(this);
    this.changeToPy = this.changeToPy.bind(this);
    this.helpSwitch = this.helpSwitch.bind(this);
    this.closeHelp = this.closeHelp.bind(this);
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
      return <Combination currentDisplay={this.state.currentDisplay} displayHelp={this.state.displayHelp}/>
    } else if (this.state.currentDisplay == 2) {
      return <Variation currentDisplay={this.state.currentDisplay} displayHelp={this.state.displayHelp}/>
    } else if (this.state.currentDisplay == 3) {
      return <Py currentDisplay={this.state.currentDisplay} displayHelp={this.state.displayHelp}/>
    }
  }

  helpSwitch() {
    if (!this.state.displayHelp) {
        this.setState({
            displayHelp: 1
        })
    } else {
        this.setState({
            displayHelp: 0
        })
    }
}

  closeHelp() {
    this.setState({
      displayHelp: 0
    })
  }


  render(){
    return (
      <div className="App">
        <div className="navbar">
          <div className="linkContainer" onClick={this.closeHelp}>
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
          <div className="settings" onClick={this.helpSwitch}>
            <i className="material-icons" id="settings">more_horiz</i>
          </div>
        </div>
        {this.displayElement()}
        
      </div>
    )
  }
}

export default App;
