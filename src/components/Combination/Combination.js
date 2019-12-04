import React from 'react';
import './Combination.css'
import C from './C.png'
import equals from './Equals.png'
import factorial from '../Factorial/Factorial'



class Combination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
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

    calculate() {
        const upper = this.state.upperValue;
        const lower = this.state.lowerValue;
        const nMinusK = lower - upper;

        const facUpper = factorial(upper)
        const facLower = factorial(lower)
        const facNMinusK = factorial (nMinusK)

        const answer = Math.round(facLower / (facUpper * facNMinusK))
        return (
            answer
        )
    }
    
    render() {
        return (
            <div className="container">
                <div className="combination">
                    <div className="CImg">
                        <img src={C}></img>
                    </div>
                    <div className="input">
                        <input className="upper" upperValue={this.state.upperValue} onChange={this.handleUpperChange}></input>
                        <input className="lower" lowerValue={this.state.lowerValue} onChange={this.handleLowerChange}></input>
                    </div>
                    <div className="equals">
                        <img src={equals}></img>
                    </div>
                    <div className="answer">
                        <h1>{this.calculate()}</h1>
                    </div>
                </div>
            </div>
        )
    }
}



export default Combination;