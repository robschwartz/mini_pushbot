import React from 'react';
import NavBar from '../navbar/NavBar.jsx';
import StepList from '../steplist/StepList.jsx';
import DetailView from '../detailview/DetailView.jsx';

class MainComponent extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <StepList />
                <DetailView />
            </div>
        );
    }

}

export default MainComponent;