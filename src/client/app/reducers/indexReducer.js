import { combineReducers } from 'redux'



// import process from './processReducer';
import stepReducer from 'stepReducers';

const initialState = {
    process: [],
    steps: [],
    users: []
};

const reducer = combineReducers({
    steps: stepReducer
});

export default reducer