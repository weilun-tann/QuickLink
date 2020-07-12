import React from 'react';
import './stylesheets/App.css';
import Input from "./components/input"
import Options from "./components/options"
import Output from "./components/output";


function App() {
    return (
        <div className="App">
            <Input/>
            <Options/>
            <Output/>
        </div>
    )
}

export default App;
