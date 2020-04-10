import React from 'react';
import './App.css';

//component
import Combination from '../Combination/Combination';
import Variation from '../Variation/Variation';
import Py from '../Pythagoras/Py';

//img
import C from './navC.png';
import V from './navV.png';
import PyImg from './navPy.png';
import helpToggle from '../Guide/HelpBox/helpswitch.png';


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
    if (this.state.currentDisplay === 1) {
      return <Combination currentDisplay={this.state.currentDisplay} displayHelp={this.state.displayHelp} />
    } else if (this.state.currentDisplay === 2) {
      return <Variation currentDisplay={this.state.currentDisplay} displayHelp={this.state.displayHelp} />
    } else if (this.state.currentDisplay === 3) {
      return <Py currentDisplay={this.state.currentDisplay} displayHelp={this.state.displayHelp} />
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


  render() {
    return (
      <div className="App">
        <div className="navbar">
          <ul className="navItems">
            <li className="navItem" onClick={this.changeToC} id="1">
              <img className="navImg" src={C} alt='Combinations'></img>
            </li>
            <li className="navItem" onClick={this.changeToV} id="2">
              <img className="navImg" src={V} alt='Variations'></img>
            </li >
            <li className="navItem" onClick={this.changeToPy} id="3">
              <img className="navImg" src={PyImg} alt='Pythagoras'></img>
            </li>
          </ul>

          <div className="helpSwitch" onClick={this.helpSwitch}>
            <img className="helpImg" src={helpToggle} alt='help'></img>
          </div>
          {/* closehelp() ja helpswitch() vaja kasutada!!! */}
          
        </div>
        {this.displayElement()}

      </div>
    )
  }
}

export default App;
