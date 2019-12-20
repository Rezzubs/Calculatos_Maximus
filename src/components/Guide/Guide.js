import React from 'react';
import './Guide.css';
import PyHelp from './HelpBox/PyHelp';
import VHelp from './HelpBox/VHelp';
import CHelp from './HelpBox/CHelp'

class Guide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHelp: 0
        }

        this.displayHelp = this.displayHelp.bind(this)
    }

    helpBox() {
        if (this.props.currentDisplay == 1 && this.state.displayHelp){
            return (
                <CHelp />
            )
        }else if (this.props.currentDisplay == 2 && this.state.displayHelp) {
            return (
                <VHelp />
            )
        } else if (this.props.currentDisplay == 3 && this.state.displayHelp) {
            return (
                <PyHelp />
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