import { CHANGE_NAV_VALUE } from '../actions/constants'
import { HOME } from '../../../router'

const defaultState = {
    value: localStorage.getItem('navValue') || HOME
}

const navReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAV_VALUE:
            localStorage.setItem('navValue', action.payload)
            return {...state, value: action.payload};
        default:
            return state;
    }
}

export default navReducer;