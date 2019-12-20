import React from 'react';
import './Help.css';
import VImg from './VHelp.png'
import VImg2 from './VHelp2.png'

class VHelp extends React.Component {
    render() {
        return (
            <div className='helpBox'>
                <h1>Variations (<a href="https://en.wikipedia.org/wiki/Permutation" target="_blank"><em>permutations</em></a>)</h1>
                <div className='textAndImg'>
                    <div>
                        <br></br>
                        <p><b>Click</b> on an input to clear it</p>

                    </div>
                    <div className='imgDiv'>
                        
                        <img src={VImg} className='helpImg'></img>
                        <img src={VImg2} className='helpImg'></img>
                    </div>
                    <span>image credit and further reading: <a href="https://www.mathsisfun.com/combinatorics/combinations-permutations.html" target="_blank">mathisfun.com</a></span>
                </div>

            </div>
        )
    }
}

export default VHelp