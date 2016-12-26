function stepReducer(state = [], action) {
    switch (action.type) {
        case SET_STEPS:
            return action.data;

        case EDIT_NAME:
            return action.data;

        case EDIT_DESCRIPTION:
            return action.data;

        case SET_USER:
            return action.data;

        case EDIT_USER:
            return action.data;

        case SET_CURRENT_STEP:
            return action.data;

        default:
            // For now, don't handle any actions
            // and just return the state given to us.
            return state
    }
}

export default stepReducer;