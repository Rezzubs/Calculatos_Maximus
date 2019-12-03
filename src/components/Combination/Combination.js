import React from 'react';
import './Combination.css'
import C from './C.png'

class Combination extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="arvutus">
                    <img className="C"></img>
                    arvutus
                </div>
                <div className="vastus">vastus</div>
            </div>
        )
    }
}

export default Combination;