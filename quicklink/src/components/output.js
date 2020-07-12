import React, {Component} from "react";
import "../stylesheets/output.css"

class Output extends Component {
    state = {
        name: "", pos: "", coy: "",
        rName: "", rPos: "", rCoy: "",
    }

    componentDidMount() {

        function transfer(get, set) {
            set.textContent = get.value;
        }

        const nameIn = document.getElementById("name_in");
        const posIn = document.getElementById("pos_in");
        const coyIn = document.getElementById("coy_in");
        const rNameIn = document.getElementById("r_name_in");
        const rPosIn = document.getElementById("r_pos_in");
        const rCoyIn = document.getElementById("r_coy_in");

        const nameOut = document.getElementById("name_out");
        const posOut = document.getElementById("pos_out");
        const coyOut = document.getElementById("coy_out");
        const rNameOut = document.getElementById("r_name_out");
        const rPosOut = document.getElementById("r_pos_out");
        const rCoyOut = document.getElementById("r_coy_out");


        nameIn.onkeyup = () => transfer(nameIn, nameOut)
        posIn.onkeyup = () => transfer(posIn, posOut)
        coyIn.onkeyup = () => transfer(coyIn, coyOut)
        rNameIn.onkeyup = () => transfer(rNameIn, rNameOut)
        rPosIn.onkeyup = () => transfer(rPosIn, rPosOut)
        rCoyIn.onkeyup = () => transfer(rCoyIn, rCoyOut)
    }

    render() {
        return (
            <div>
                <p id="name_out">{this.state.name}</p>
                <p id="pos_out">{this.state.pos}</p>
                <p id="coy_out">{this.state.coy}</p>
                <p id="r_name_out">{this.state.rName}</p>
                <p id="r_pos_out">{this.state.rPos}</p>
                <p id="r_coy_out">{this.state.rCoy}</p>
            </div>
        );
    }
}

export default Output;