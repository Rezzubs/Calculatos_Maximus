import React from 'react';
import './Py.css'

class Py extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aValue: '',
            bValue: '',
            cValue: '',
            displayRound: 0,
            rounding: 100
        };

        this.getValue = this.getValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.roundInput = this.roundInput.bind(this);
        this.displayRound = this.displayRound.bind(this);
        this.roundChange = this.roundChange.bind(this)
    }

    getValue() {
        const a = document.getElementById('aInput').value;
        const b = document.getElementById('bInput').value;
        const c = document.getElementById('cInput').value;

        this.setState({
            aValue: a,
            bValue: b,
            cValue: c
        })
    }

    calculate() {
        const a = document.getElementById('aInput').value;
        const b = document.getElementById('bInput').value;
        const c = document.getElementById('cInput').value;

        const a2 = a * a;
        const b2 = b * b;
        const c2 = c * c;

        let rounding = this.state.rounding;

        if (a && b) {
            let answer = Math.sqrt(a2 + b2);
            answer = Math.round(answer * rounding) / rounding;
            this.setState({
                cValue: answer
            });
            document.getElementById('cInput').value = this.state.cValue;
        } else if (b && c) {
            let answer = Math.sqrt(c2 - b2);
            answer = Math.round(answer * rounding) / rounding;
            this.setState({
                aValue: answer
            });
        } else if (a && c) {
            let answer = Math.sqrt(c2 - a2);
            answer = Math.round(answer * rounding) / rounding;
            this.setState({
                bValue: answer
            });
        }
    }

    handleChange() {
        this.getValue();
        this.calculate();
    }


    clearHandle
    clearValue(e) {
        e.target.value = '';
        this.setState({
            aValue: document.getElementById('aInput').value,
            bValue: document.getElementById('bInput').value,
            cValue: document.getElementById('cInput').value
        })
    }

    clearAll() {
        this.setState({
            aValue: '',
            bValue: '',
            cValue: ''
        })
    }

    // roundJS
    displayRound() {
        if (this.state.displayRound == 0) {
            this.setState({
                displayRound: 1
            });
        } else {
            this.setState({
                displayRound: 0
            });
        }
    }

    roundInput() {
        if (this.state.displayRound == 1) {
            return (
                <div className="roundInputDiv">
                    <input onChange={this.roundChange} id="roundInput" className="roundInput"></input>
                </div>
            )
        }
    }

    roundChange(e) {
        this.setState({
            rounding: e.target.value
        })
    }


    render() {
        return (
            <div className="container">
                <div className="Py">
                    <div className="a">
                        <h1>a</h1>
                        <input onChange={this.handleChange} id="aInput" onClick={this.clearValue} onDoubleClick={this.clearAll} value={this.state.aValue}></input>
                    </div>
                    <div className="b">
                        <h1>b</h1>
                        <input onChange={this.handleChange} id="bInput" onClick={this.clearValue} onDoubleClick={this.clearAll} value={this.state.bValue}></input>
                    </div>
                    <div className="c">
                        <h1>c</h1>
                        <input onChange={this.handleChange} id="cInput" onClick={this.clearValue} onDoubleClick={this.clearAll} value={this.state.cValue}></input>
                    </div>
                </div>

                <div onClick={this.displayRound} className="round" >
                    <h2>R</h2>
                </div>
                {this.roundInput()}
            </div>
        )
    }
}

export default Py;