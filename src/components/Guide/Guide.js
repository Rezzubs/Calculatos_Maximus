import React from 'react';
import './Guide.css';
import PyHelp from './HelpBox/PyHelp';
import VHelp from './HelpBox/VHelp';
import CHelp from './HelpBox/CHelp'

class Guide extends React.Component {
    helpBox() {
        if (this.props.currentDisplay === 1 && this.props.displayHelp === 1){
            return (
                <CHelp />
            )
        }else if (this.props.currentDisplay === 2 && this.props.displayHelp === 1) {
            return (
                <VHelp />
            )
        } else if (this.props.currentDisplay === 3 && this.props.displayHelp === 1) {
            return (
                <PyHelp />
            )
        }
    }

    


    render() {
        return (
            <div className='Guide'>
                {this.helpBox()}
            </div>
        )
    }
}

export default Guide