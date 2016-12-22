import React from 'react';

class StepList extends React.Component {

    render() {
        return (
            <div className="steplist-container">
                <div className="labels">
                    <p className="trigger">Triggers</p>
                    <p className="step">Steps</p>
                </div>
            </div>
        );
    }

}

export default StepList;