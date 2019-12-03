import React from 'react';
import './Combination.css'

class Combination extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>C</h1>
                <div className="numbrid">
                    <input className="arv" type="number"></input>
                    <input className="arvust" type="number"></input>
                </div>
            </div>
        )
    }
}

export default Combination;