import React from 'react';
import './Guide.css'
import PyHelp from './HelpBox/PyHelp'

class Guide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHelp: 0
        }

        this.displayHelp = this.displayHelp.bind(this)
    }

    PyGuide() {
        return (
            <PyHelp />
        )
    }

    helpBox() {
        if (this.props.currentDisplay == 1 && this.state.displayHelp){
            return (
                <div>tere</div>
            )
        }else if (this.props.currentDisplay == 2 && this.state.displayHelp) {
            return (
                <div>jah</div>
            )
        } else if (this.props.currentDisplay == 3 && this.state.displayHelp) {
            return (
                this.PyGuide()
            )
        }
    }

    displayHelp() {
        if (!this.state.displayHelp) {
            this.setState({
                displayHelp: 1
            })
        } else {
            this.setState({
                displayHelp: 0
            })
        }
    }


    render() {
        return (
            <div className='Guide'>
                <div onClick={this.displayHelp} className='guideButton'>
                    <h1 className="QM">?</h1>
                </div>
                {this.helpBox()}
            </div>
        )
    }
}

export default Guide