/*
 * action types
 */

export const EDIT_NAME = 'EDIT_NAME'
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION'

/*
 * action creators
 */

export function editName(text) {
    return { type: EDIT_NAME, text }
}

export function editDescription(text) {
    return { type: EDIT_DESCRIPTION, text }
}