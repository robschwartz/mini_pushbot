import React from 'react';

const StepItem = (props) => {

    return (
        <div className="stepitem-container">
            {props.step.stepName}
        </div>
    );
};

export default StepItem;