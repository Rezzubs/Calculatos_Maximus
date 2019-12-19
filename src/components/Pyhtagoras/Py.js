import React from 'react';
import './Py.css'

class Py extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="Py">
                    <div className="a">
                        <h1>a</h1>
                        <input></input>
                    </div>
                    <div className="b">
                        <h1>b</h1>
                        <input></input>
                    </div>
                    <div className="c">
                        <h1>c</h1>
                        <input></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Py;