import { combineReducers } from 'redux';

const contributorReducer = (state = [], action) => {
    if(action.type === 'SET_CONTRIBUTOR') {
        return action.payload;
    }
    return state;
}

const employeeResults = (state = [], action) => {
    switch(action.type){
        case('SET_EMPLOYEE_RESULTS'):
            return action.payload;
        default:
            return state;
    }
}

const pending = (state = [], action) => {
    switch (action.type) {
        case ('ADD_PENDING_CONTRIBUTORS'):
            return [...state,  action.payload];
        case ('REMOVE_PENDING_CONTRIBUTOR'):
            return state.filter( item => item !== action.payload );
        default:
            return state;
    }
}

export default combineReducers({
    contributorReducer,
    employeeResults,
    pending,
});