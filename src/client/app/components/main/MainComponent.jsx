import React, { Component } from 'react';
import NavBar from '../navbar/NavBar.jsx';
import StepList from '../steplist/StepList.jsx';
import DetailView from '../detailview/DetailView.jsx';
import steps from '../../../../../data/steps.json';


class MainComponent extends Component {
    constructor(props){
        super(props);

        this.state = { steps: steps };
    }

    render() {
        return (
            <div>
                <NavBar/>
                <StepList steps={this.state.steps}/>
                <DetailView />
            </div>
        );
    }

}

export default MainComponent;