import React from 'react';
import ProcessInfo from '../processinfo/ProcessInfo.jsx';
import StepInfo from '../stepinfo/StepInfo.jsx';


class DetailView extends React.Component {
    //proptypes

    render() {
        return (
            <div className="dv-container">
                <ProcessInfo/>
                <StepInfo/>
            </div>
        );
    }

}

export default DetailView;