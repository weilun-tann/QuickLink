import React, {Component} from 'react';
import './stylesheets/App.css';
import Input from "./components/input"
import Options from "./components/options"
import Output from "./components/output";
import {apply, followUp, invite} from "./templates/linkedin";
import $ from 'jquery'

class Template {
    static APPLY = 'apply';
    static FOLLOW_UP = 'check-in';
    static INVITE = 'invite';
}

class App extends Component {
    state = {
        name: '',
        pos: '',
        coy: '',
        rName: '',
        rPos: '',
        rCoy: '',
        content: '',
        template: Template.INVITE,
    }

    componentDidMount() {
        this.loadFromSessionStorage();
        const nameIn = $('#name_in');
        const posIn = $('#pos_in');
        const coyIn = $('#coy_in');
        const rNameIn = $('#r_name_in');
        const rPosIn = $('#r_pos_in');
        const rCoyIn = $('#r_coy_in');

        nameIn.keyup(() => {
            this.setState({name: nameIn.val()});
            this.getContent();
        });
        posIn.keyup(() => {
            this.setState({pos: posIn.val()});
            this.getContent();
        });
        coyIn.keyup(() => {
            this.setState({coy: coyIn.val()});
            this.getContent();
        });
        rNameIn.keyup(() => {
            this.setState({rName: rNameIn.val()});
            this.getContent();
        });
        rPosIn.keyup(() => {
            this.setState({rPos: rPosIn.val()});
            this.getContent();
        });
        rCoyIn.keyup(() => {
            this.setState({rCoy: rCoyIn.val()});
            this.getContent();
        });
    }

    outputTextClickHandler(e) {
        this.animateCopyToClipboard();
        this.copyToClipboard();
        this.saveToSessionStorage();
    }

    animateCopyToClipboard() {
        const copiedSnackbar = $('#copied-snackbar')
        copiedSnackbar.addClass('show');
        setTimeout(() => copiedSnackbar.removeClass('show'), 3000);
    };

    copyToClipboard() {
        const editableText = $(`#${this.state.template}`);
        console.log(editableText)
        console.log(editableText.text())
        this.copyText(editableText.text());
    }

    copyText (textToCopy) {
        const textarea = document.createElement('textarea')
        textarea.value = textToCopy
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select()
        var successful = document.execCommand('copy');
        textarea.remove()
    }

    loadFromSessionStorage() {
        this.setState({
            name: sessionStorage.getItem('name'),
            pos: sessionStorage.getItem('pos'),
            coy: sessionStorage.getItem('coy'),
            rName: sessionStorage.getItem('rName'),
            rPos: sessionStorage.getItem('rPos'),
            rCoy: sessionStorage.getItem('rCoy'),
        }, this.getContent)
    }

    saveToSessionStorage() {
        sessionStorage.setItem('name', this.state.name);
        sessionStorage.setItem('pos', this.state.pos);
        sessionStorage.setItem('coy', this.state.coy);
        sessionStorage.setItem('rName', this.state.rName);
        sessionStorage.setItem('rPos', this.state.rPos);
        sessionStorage.setItem('rCoy', this.state.rCoy);
    }

    getContent() {
        const MAP = new Map();
        MAP.set(Template.APPLY, () => apply(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy))
        MAP.set(Template.FOLLOW_UP, () => followUp(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy))
        MAP.set(Template.INVITE, () => invite(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy))
        this.setState({
            content: MAP.get(this.state.template)(),
        })
    }

    /* CLICK HANDLERS FOR OPTIONS HEADER */
    applicationOnClickHandler(e) {
        this.setState({
            content: apply(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy),
            template: Template.APPLY
        })
    }

    followUpOnClickHandler(e) {
        this.setState({
            content: followUp(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy),
            template: Template.FOLLOW_UP
        })
    }

    invitationOnClickHandler(e) {
        this.setState({
            content: invite(this.state.name, this.state.pos, this.state.coy, this.state.rName, this.state.rPos, this.state.rCoy),
            template: Template.INVITE
        })
    }

    render() {
        return (
            <div className="App">
                <Input name={this.state.name} pos={this.state.pos} coy={this.state.coy}
                       rName={this.state.rName} rPos={this.state.rPos} rCoy={this.state.rCoy}/>
                <Options applicationOnClickHandler={this.applicationOnClickHandler.bind(this)}
                         followUpOnClickHandler={this.followUpOnClickHandler.bind(this)}
                         invitationOnClickHandler={this.invitationOnClickHandler.bind(this)}/>
                <Output content={this.state.content}
                        outputTextClickHandler={this.outputTextClickHandler.bind(this)}
                        template={this.state.template}/>
            </div>
        )
    }
}

export default App;
