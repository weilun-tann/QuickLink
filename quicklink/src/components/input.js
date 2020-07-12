import React, {Component} from "react";
import "../stylesheets/input.css"

class Input extends Component {
    render() {
        return (
            <div>
                <form>
                    {/*NAME*/}
                    <div className="row">
                        <label>
                            <input id="name_in" type="text" placeholder="Your Name"/>
                            <span>Your Name</span>
                        </label>

                        <label>
                            <input id="r_name_in" type="text" placeholder="Recruiter's Name"/>
                            <span>Recruiter's Name</span>
                        </label>
                    </div>

                    {/*POSITION*/}
                    <div className="row">
                        <label>
                            <input id="pos_in" type="text" placeholder="Your Position"/>
                            <span>Your Position</span>
                        </label>

                        <label>
                            <input id="r_pos_in" type="text" placeholder="Recruiter's Position"/>
                            <span>Recruiter's Position</span>
                        </label>
                    </div>

                    {/*COMPANY*/}
                    <div className="row">
                        <label>
                            <input id="coy_in" type="text" placeholder="Your Company"/>
                            <span>Your Company</span>
                        </label>

                        <label>
                            <input id="r_coy_in" type="text" placeholder="Recruiter's Company"/>
                            <span>Recruiter's Company</span>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;