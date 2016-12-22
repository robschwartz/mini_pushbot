import React from 'react';
import NavBar from '../navbar/NavBar.jsx';
import StepList from '../steplist/StepList.jsx';

class MainComponent extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <StepList />
            </div>
        );
    }

}

export default MainComponent;