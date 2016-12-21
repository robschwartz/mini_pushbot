import React from 'react';
import {render} from 'react-dom';
import MainComponent from './MainComponent.jsx';
var css = require('./main.styl');

class App extends React.Component {
    render () {
        return (
            <div>
                <MainComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));