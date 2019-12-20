import React from 'react';
import './Help.css';
import Py1 from './Py1.png';
import Py2 from './Py2.png';

class PyHelp extends React.Component {
    render() {
        return (
            <div className='helpBox'>
                <h1>Pythagoras Theorem</h1>
                <div className='textAndImg'>
                    <div>
                        <br></br>
                        <p><b>Click</b> on an input to clear it</p>
                        <p><b>Double Click</b> on an input to clear all inputs</p>
                        <br></br>
                        <p><b>R</b> lets you change the rounding decimal point:</p>
                        <p>1 = 0.1; 2 = 0,01; 3 = 0,001 etc.</p>
                    </div>
                    <div className='imgDiv'>
                        <img className='helpImg' src={Py1}></img>
                        <img className='helpImg' src={Py2}></img>
                    </div>
                    <span>imgage credit <a href="https://www.mathsisfun.com/pythagoras.html">mathisfun.com</a></span>
                </div>

            </div>
        )
    }
}

export default PyHelp