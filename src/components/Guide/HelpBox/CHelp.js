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
                </div>
            </div>
        )
    }
}

export default CHelp