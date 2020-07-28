import React, {Component} from "react";
import "../stylesheets/input.css"

class Input extends Component {
    state = {
        name: sessionStorage.getItem('name') || '',
        pos: sessionStorage.getItem('pos') || '',
        coy: sessionStorage.getItem('coy') || '',
        rName: sessionStorage.getItem('rName') || '',
        rPos: sessionStorage.getItem('rPos') || '',
        rCoy: sessionStorage.getItem('rCoy') || '',
    }

    lastCellKeyPressHandler(e) {
        // if (e.keycode === 13) {
        //
        // }
    }

    render() {
        return (
            <div id="input">
                <form>
                    {/*YOUR DETAILS*/}
                    <div className="row">
                        <label>
                            <input id="name_in" type="text" placeholder="Your Name"
                                   defaultValue={this.state.name ? this.state.name : null}/>
                            <span>Your Name</span>
                        </label>

                        <label>
                            <input id="pos_in" type="text" placeholder="Your Position"
                                   defaultValue={this.state.pos ? this.state.pos : null}/>
                            <span>Your Position</span>
                        </label>

                        <label>
                            <input id="coy_in" type="text" placeholder="Your Company"
                                   defaultValue={this.state.coy ? this.state.coy : null}/>
                            <span>Your Company</span>
                        </label>
                    </div>

                    {/*RECRUITER'S DETAILS*/}
                    <div className="row">
                        <label>
                            <input id="r_name_in" type="text" placeholder="Recruiter's Name"
                                   defaultValue={this.state.rName ? this.state.rName : null}/>
                            <span>Recruiter's Name</span>
                        </label>

                        <label>
                            <input id="r_pos_in" type="text" placeholder="Recruiter's Position"
                                   defaultValue={this.state.rPos ? this.state.rPos : null}/>
                            <span>Recruiter's Position</span>
                        </label>

                        <label>
                            <input id="r_coy_in" type="text" placeholder="Recruiter's Company"
                                   defaultValue={this.state.rCoy ? this.state.rCoy : null}
                                   onKeyPress={this.lastCellKeyPressHandler}/>
                            <span>Recruiter's Company</span>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;