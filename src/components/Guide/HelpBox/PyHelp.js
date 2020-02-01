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
                    <p>Click on and input to clear the value</p>
                    <p>Double Click on and input to clear all values</p>
                </div>
                <br></br>
                <div className='imgDiv'>
                    <img className='helpImg' src={Py1}></img>
                    <img className='helpImg' src={Py2}></img>
                </div>
                <span>further reading <a href='https://www.mathsisfun.com/pythagoras.html' target='blank'>mathisfun.com</a></span>
            </div>
        )
    }
}

export default PyHelp