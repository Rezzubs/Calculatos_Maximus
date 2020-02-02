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
            rounding: defaultRounding,
            focusOrder: ''
        };

        this.getValue = this.getValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.roundChange = this.roundChange.bind(this);
        this.clearRound = this.clearRound.bind(this);
        this.aFocus = this.aFocus.bind(this);
        this.bFocus = this.bFocus.bind(this);
        this.cFocus = this.cFocus.bind(this);
        this.holdStringAtTwo = this.holdStringAtTwo.bind(this);
        this.holdStringAtOne = this.holdStringAtOne.bind(this);
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

    aFocus(){
        this.setState({
            focusOrder: this.state.focusOrder + 'a'
        })
    }

    bFocus() {
        this.setState({
            focusOrder: this.state.focusOrder + 'b'
        })
    }

    cFocus(){
        this.setState({
            focusOrder: this.state.focusOrder + 'c'
        })
    }

    holdStringAtTwo() {
        let newString = this.state.focusOrder;
            newString = newString.split("");
            newString = newString.reverse();
            newString = newString.join("");
            newString = newString.slice(0, 2);

            this.setState({
                focusOrder: newString
            })
    }

    holdStringAtOne() {
        let newString = this.state.focusOrder;
            newString = newString.split("");
            newString = newString.reverse();
            newString = newString.join("");
            newString = newString.slice(0, 1);

            this.setState({
                focusOrder: newString
            })
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

    clearAll(e) {
        this.setState({
            aValue: '',
            bValue: '',
            cValue: '',
        })

        this.holdStringAtOne()
    }

    // roundJS
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

    clearRound(e) {
        e.target.value = '';
        this.setState({
            rounding: defaultRounding
        })
    }

    calculate() {
        const a = document.getElementById('aInput').value;
        const b = document.getElementById('bInput').value;
        const c = document.getElementById('cInput').value;

        if (!a && !b && !c) {
            this.setState({
                focusOrder: ''
            })
        }

        const a2 = a * a;
        const b2 = b * b;
        const c2 = c * c;

        let rounding = this.state.rounding;

        if (this.state.focusOrder.length > 2) {
            this.holdStringAtTwo()
        }

        //bug prevention
        if ((this.state.focusOrder === 'ab' || this.state.focusOrder === 'ba') && (!b || !a)) {
            this.setState({
                cValue: ''
            })
        } else if ((this.state.focusOrder === 'cb' || this.state.focusOrder === 'bc') && (!c || !b)) {
            this.setState({
                aValue: ''
            })
        } else if ((this.state.focusOrder === 'ca' || this.state.focusOrder === 'ac') && (!c || !a)) {
            this.setState({
                bValue: ''
            })  //bug end
        } /*main calc*/ else if (this.state.focusOrder === 'ab' || this.state.focusOrder === 'ba') {
            let answer = Math.sqrt(a2 + b2);
            answer = Math.round(answer * rounding) / rounding;
            this.setState({
                cValue: answer
            });
            document.getElementById('cInput').value = this.state.cValue;
        } else if (this.state.focusOrder === 'cb' || this.state.focusOrder === 'bc') {
            let answer = Math.sqrt(c2 - b2);
            answer = Math.round(answer * rounding) / rounding;
            this.setState({
                aValue: answer
            });
        } else if (this.state.focusOrder === 'ca' || this.state.focusOrder === 'ac') {
            this.setState({
                bValue: ''
            });
            let answer = Math.sqrt(c2 - a2);
            answer = Math.round(answer * rounding) / rounding;
            this.setState({
                bValue: answer
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="Py">
                    <div className="a">
                        <h1>a</h1>
                        <input onFocus={this.aFocus} onChange={this.handleChange} id="aInput" onClick={this.clearValue} onDoubleClick={this.clearAll} value={this.state.aValue}></input>
                    </div>
                    <div className="b">
                        <h1>b</h1>
                        <input onFocus={this.bFocus} onChange={this.handleChange} id="bInput" onClick={this.clearValue} onDoubleClick={this.clearAll} value={this.state.bValue}></input>
                    </div>
                    <div className="c">
                        <h1>c</h1>
                        <input onFocus={this.cFocus} onChange={this.handleChange} id="cInput" onClick={this.clearValue} onDoubleClick={this.clearAll} value={this.state.cValue}></input>
                    </div>
                    <div className="roundInputDiv">
                        <input placeholder="Rounding" onChange={this.roundChange} id="roundInput" className="roundInput" onClick={this.clearRound}></input>
                    </div>
                </div>
                <Guide currentDisplay={this.props.currentDisplay} displayHelp={this.props.displayHelp} />
            </div>
        )
    }
}

export default Py;