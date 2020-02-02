import React from 'react';
import './Help.css';
import Py1 from './Py1.png';
import Py2 from './Py2.png';

class PyHelp extends React.Component {
    render() {
        return (
            <div className='helpBox'>
                <div className='text'>
                    <h2>Pythagoras Theorem</h2>
                    <p><strong>Click</strong> on and input to clear the value</p>
                    <p><strong>Double Click</strong> on and input to clear all values</p>
                    <p><strong>Rounding</strong> changes the rounding decimal:</p>
                    <p>1 -> 0.1, 2 -> 0.01 etc. default is 2</p>
                </div>
                <br></br>
                <div className='imgDiv'>
                    <img className='helpImg' src={Py1} alt="Pythagoras explenation"></img>
                    <img className='helpImg' src={Py2} alt="Pythagoras explenation 2"></img>
                </div>
                <span>further reading <a href='https://www.mathsisfun.com/pythagoras.html' target='blank'>mathisfun.com</a></span>
            </div>
        )
    }
}

export default PyHelp