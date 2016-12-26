import React from 'react';
import StepItem from '../stepitem/StepItem.jsx';

class StepList extends React.Component {

    render() {
        return (
            <div className="steplist-container">
                <div className="labels">
                    <p className="trigger">Triggers</p>
                    <p className="step">Steps</p>
                    <StepItem/>
                </div>
            </div>
        );
    }

}

export default StepList;