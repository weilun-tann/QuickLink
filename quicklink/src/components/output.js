import React, {Component} from 'react';
import '../stylesheets/output.css'

class Output extends Component {
    render() {
        return (
            <div id='output'>
                <p id={this.props.template} className='output-text' title='Copy'
                   onClick={this.props.outputTextClickHandler}> {this.props.content}</p>
                <div id='copied-snackbar' className='snackbar'>✔ Copied</div>
            </div>
        );
    }
}

export default Output;