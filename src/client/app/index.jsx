import React from 'react';
import {render} from 'react-dom';
import MainComponent from './components/main/MainComponent.jsx';

var css = require('./components/main/main.styl');

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                <MainComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));