import React from 'react';
import './Help.css';
import VImg from './VHelp.png'
import VImg2 from './VHelp2.png'

class VHelp extends React.Component {
    render() {
        return (
            <div className='helpBox'>
                <div className='text'>
                    <h2>Variations</h2>
                    <p>Click on and input to clear the value</p>
                    <p>Double Click on and input to clear all values</p>
                </div>
                <br></br>
                <div className='imgDiv'>
                    <img className='helpImg' src={VImg}></img>
                    <img className='helpImg' src={VImg2}></img>
                </div>
                <span>further reading <a href='https://www.mathsisfun.com/combinatorics/combinations-permutations.html' target='blank'>mathisfun.com</a></span>
            </div>
        )
    }
}

export default VHelp