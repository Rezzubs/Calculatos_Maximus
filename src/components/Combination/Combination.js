import React from 'react';
import './Combination.css'
import C from './C.png'

class Combination extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="combination">
                    <div className="CImg">
                        <img src={C}></img>
                    </div>
                    <div className="input">
                        <input className="upper"></input>
                        <input className="lower"></input>
                    </div>
                    <div className="equals">
                        
                    </div>
                    <div className="awnser">20503</div>
                </div>
            </div>
        )
    }
}

export default Combination;