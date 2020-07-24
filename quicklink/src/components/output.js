import React, {Component} from 'react';
import '../stylesheets/output.css'
import {apply, checkIn, invite} from '../templates/linkedin.js'
import $ from 'jquery';

class Template {
    static APPLY = 'apply';
    static CHECK_IN = 'check-in';
    static INVITE = 'invite';
}

class Output extends Component {

    constructor(props) {
        super(props);
        this.editableTextClickHandler = this.editableTextClickHandler.bind(this);
    }

    state = {
        name: '',
        pos: '',
        coy: '',
        rName: '',
        rPos: '',
        rCoy: '',
        template: Template.INVITE,
    }

    editableTextClickHandler(e) {
        this.saveToSessionStorage();
        this.copyToClipboard();
        this.animateCopyToClipboard();
    }

    saveToSessionStorage() {
        sessionStorage.setItem('name', this.state.name);
        sessionStorage.setItem('pos', this.state.pos);
        sessionStorage.setItem('coy', this.state.coy);
        sessionStorage.setItem('rName', this.state.rName);
        sessionStorage.setItem('rPos', this.state.rPos);
        sessionStorage.setItem('rCoy', this.state.rCoy);
    }

    copyToClipboard() {
        const editableText = $(this.state.template);
        editableText.select();
        document.execCommand('copy');
        editableText.blur()
    }

    animateCopyToClipboard() {
        const output = $('#output'), copied = $('#copied'), ripple = $('#ripple');
        copied.remove();
        ripple.remove();
        output.prepend("<span id='copied'>Copied!</span>");
        output.prepend("<span id='ripple'/>");
        $('#copied').addClass('copiedEffect');
        $('#ripple').addClass('rippleEffect');
    };


    componentDidMount() {
        const nameIn = $('#name_in');
        const posIn = $('#pos_in');
        const coyIn = $('#coy_in');
        const rNameIn = $('#r_name_in');
        const rPosIn = $('#r_pos_in');
        const rCoyIn = $('#r_coy_in');

        nameIn.keyup(() => {
            this.setState({name: nameIn.val()});
        });
        posIn.keyup(() => {
            this.setState({pos: posIn.val()});
        });
        coyIn.keyup(() => {
            this.setState({coy: coyIn.val()});
        });
        rNameIn.keyup(() => {
            this.setState({rName: rNameIn.val()});
        });
        rPosIn.keyup(() => {
            this.setState({rPos: rPosIn.val()});
        });
        rCoyIn.keyup(() => {
            this.setState({rCoy: rCoyIn.val()});
        });
    }

    render() {
        const MAP = new Map();
        MAP.set('apply', apply(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy));
        MAP.set('check-in', checkIn(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy));
        MAP.set('invite', invite(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy));
        return (
            <div id='output'>
                <p className='editable-text' onClick={this.editableTextClickHandler}
                   id={this.state.template}> {MAP.get(this.state.template)}</p>
            </div>
        );
    }
}

export default Output;