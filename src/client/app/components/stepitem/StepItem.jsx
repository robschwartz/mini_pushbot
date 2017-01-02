import React from 'react';

const StepItem = (props) => {
    const requiredStep = () => {
        if (props.step.requiredPreviousSteps){
            return props.step.requiredPreviousSteps;
        }
    };

    return (
        <div className="si-container">
            <div className="si-number">{props.step.stepNumber}</div>
            <div className="si-name">{props.step.displayName}</div>
            <img src="../../DESIGN_ASSETS/images/ham_menu_icon.png" />
            <div className="si-required-step">{requiredStep()}</div>
        </div>
    );
};

export default StepItem;