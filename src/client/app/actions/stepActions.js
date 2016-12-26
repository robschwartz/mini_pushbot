/*
 * action types
 */

export const EDIT_NAME = 'EDIT_NAME';
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION';
export const SET_USER = 'SET_USER';
export const EDIT_USER = 'EDIT_USER';
export const SET_STEPS = 'SET_STEPS';
export const SET_CURRENT_STEP = 'SET_CURRENT_STEPS';

/*
 * action creators
 */

export function editName(text) {
    return { type: EDIT_NAME, text }
}

export function editDescription(text) {
    return { type: EDIT_DESCRIPTION, text }
}

export function setUser(user) {
    return { type: SET_USER, user }
}

export function setSteps(steps) {
    return { type: SET_STEPS, steps }
}

export function setCurrentStep(step) {
    return { type: SET_CURRENT_STEP, step }
}

export function editUser(user) {
    return { type: EDIT_USER, user }
}