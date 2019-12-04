import React from 'react';
import './Combination.css'
import C from './C.png'
import equals from './Equals.png'

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
                        <img src={equals}></img>
                    </div>
                    <div className="awnser">
                        <h1>4732489351889215475643575646</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Combination;