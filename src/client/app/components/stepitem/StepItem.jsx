import React from 'react';

const StepItem = (props) => {

    return (
        <div className="si-container">
            <div className="si-number">{props.step.stepNumber}</div>
            <div className="si-name">{props.step.displayName}</div>
            <img src="../../DESIGN_ASSETS/images/ham_menu_icon.png" />
        </div>
    );
};

export default StepItem;