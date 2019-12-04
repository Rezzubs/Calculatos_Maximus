import React from 'react';
import './Combination.css'
import C from './C.png'
import equals from './Equals.png'
import { Logic } from './Logic'



class Combination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            awnser: '',
            upperValue: '',
            lowerValue: ''
        };

        //binds
        this.handleUpperChange = this.handleUpperChange.bind(this);
        this.handleLowerChange = this.handleLowerChange.bind(this);
    }

    handleUpperChange(e) {
        this.setState({ upperValue: e.target.value })
    }

    handleLowerChange(e) {
        this.setState({ lowerValue: e.target.value })
    }
    
    render() {
        return (
            <div className="container">
                <div className="combination">
                    <div className="CImg">
                        <img src={C}></img>
                    </div>
                    <div className="input">
                        <input className="upper"  onChange={this.handleUpperChange}></input>
                        <input className="lower"  onChange={this.handleLowerChange}></input>
                    </div>
                    <div className="equals">
                        <img src={equals}></img>
                    </div>
                    <div className="awnser">
                        <h1>{this.state.lowerValue}</h1>
                    </div>
                </div>
            </div>
        )
    }
}



export default Combination;