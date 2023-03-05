import { CHANGE_TABS_VALUE } from '../actions/constants'

const defaultState = {
    value: parseInt(localStorage.getItem('tabsValue')) || 0
}

const tabsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TABS_VALUE:
            localStorage.setItem('tabsValue', action.payload)
            return {...state, value: action.payload};
        default:
            return state;
    }
}

export default tabsReducer;