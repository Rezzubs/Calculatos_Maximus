import React from 'react';
import './Help.css';
import CImg from './CHelp.png';

class CHelp extends React.Component {
    render() {
        return (
            <div className='helpBox'>
                <h1>Combinations</h1>
                <div className='textAndImg'>
                    <div>
                        <br></br>
                        <p><b>Click</b> on an input to clear it</p>

                    </div>
                    <div className='imgDiv'>
                        
                        <img src={CImg} className='helpImg'></img>
                    </div>
                    <span>further reading: <a href="https://www.mathsisfun.com/combinatorics/combinations-permutations.html" target="_blank">mathisfun.com</a></span>
                </div>

            </div>
        )
    }
}

export default CHelp