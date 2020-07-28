import React, {Component} from "react";
import "../stylesheets/options.css"

class Options extends Component {
    render() {
        return (
            <div id='options'>
                <ul id='options-items'>
                    <li tabIndex='0' onClick={this.props.invitationOnClickHandler}>Invitation</li>
                    <li tabIndex='1' onClick={this.props.applicationOnClickHandler}>Application</li>
                    <li tabIndex='2' onClick={this.props.followUpOnClickHandler}>Follow-up</li>
                </ul>
            </div>
        );
    }
}

export default Options;