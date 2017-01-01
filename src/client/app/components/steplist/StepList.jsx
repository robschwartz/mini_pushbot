import React from 'react';
import StepItem from '../stepitem/StepItem.jsx';

const StepList = (props) => {
    const stepItems = props.steps.map((step) => {
        return <StepItem key={step.stepNumber} step={step} />
    });

    return (
        <div className="steplist-container">
            <div className="labels">
                <p className="trigger">Triggers</p>
                <p className="step">Steps</p>
                {stepItems}
            </div>
        </div>
    );
};

export default StepList;