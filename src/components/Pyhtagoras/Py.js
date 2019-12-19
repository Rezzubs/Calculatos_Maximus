import React from 'react';
import './Py.css'

class Py extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aValue: '',
            bValue: '',
            cValue: ''
        };

        this.getValue = this.getValue.bind(this);
        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearAll = this.clearAll.bind(this);
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

        if (a && b && !c) {
            this.setState({
                cValue: Math.sqrt(a2 + b2)                
            });
            document.getElementById('cInput').value = this.state.cValue;
        }
    }

    clearValue(e) {
        e.target.value = ''
    }

    clearAll() {
        this.setState({
            aValue: '',
            bValue: '',
            cValue: ''
        })
    }

    async handleChange() {
        this.getValue();
        this.calculate();
        
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
            </div>
        )
    }
}

export default Py;