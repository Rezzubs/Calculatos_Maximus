import React from 'react';
import './Help.css';
import CImg from './CHelp.png';

class CHelp extends React.Component {
    render() {
        return (
            <div className='helpBox'>
                <div className='text'>
                    <h2>Combinations</h2>
                    <p>Click on and input to clear the value</p>
                    <p>Double Click on and input to clear all values</p>
                </div>
                <br></br>
                <div className='imgDiv'>
                    <img className='helpImg' src={CImg}></img>
                </div>
                <span>further reading <a href='https://www.mathsisfun.com/combinatorics/combinations-permutations.html' target='blank'>mathisfun.com</a></span>
                <br></br>
            </div>
        )
    }
}

export default CHelp