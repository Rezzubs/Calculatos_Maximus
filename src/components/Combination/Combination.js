import React from 'react';
import './Combination.css'
import C from './C.png'

class Combination extends React.Component {
    render() {
        return (
            <div className="arvutusContainer">
                <div className="arvutus">
                    <div>
                        <img className="C" src={C}></img>
                    </div>
                    <div className="numbrid">
                        <input></input>
                        <input></input>
                    </div>
                </div>
                <div className="vastus">vastus</div>
            </div>
        )
    }
}

export default Combination;