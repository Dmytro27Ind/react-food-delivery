import { CHANGE_NAV_VALUE } from '../actions/constants'

const changeNavValue = (value) => {
    return {
        type: CHANGE_NAV_VALUE,
        payload: value
    }
}

export {changeNavValue}