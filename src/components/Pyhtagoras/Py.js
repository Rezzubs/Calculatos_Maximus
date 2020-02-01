import React from 'react';
import './Py.css'
import Guide from '../Guide/Guide'

const defaultRounding = 100

class Py extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aValue: '',
            bValue: '',
            cValue: '',
            displayRoundBox: 0,
            rounding: defaultRounding
        };

        this.getValue = this.getValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.roundInput = this.roundInput.bind(this);
        this.displayRoundBox = this.displayRoundBox.bind(this);
        this.roundChange = this.roundChange.bind(this);
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


    // clearHandle
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
    displayRoundBox() {
        if (this.state.displayRoundBox == 0) {
            this.setState({
                displayRoundBox: 1
            });
        } else {
            this.setState({
                displayRoundBox: 0,
                rounding: defaultRounding
            });
        }
    }

    roundInput() {
        if (this.state.displayRoundBox == 1) {
            return (
                <div className="roundInputDiv">
                    <input onChange={this.roundChange} id="roundInput" className="roundInput" onClick={this.clearValue}></input>
                </div>
            )
        }
    }

    roundChange(e) {
        let newValue = 1
        if (!e.target.value) {
            newValue = defaultRounding;
        }

        for (let i = 0; i < e.target.value; i++) {
            newValue += '0'
        }
        this.setState({
            rounding: newValue
        })

        //freeze prevention
        const maxValue = 1000

        if (e.target.value > maxValue) {
            e.target.value = maxValue;
        }
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
                <Guide currentDisplay={this.props.currentDisplay} displayHelp={this.props.displayHelp}/>
            </div>
        )
    }
}

export default Py;