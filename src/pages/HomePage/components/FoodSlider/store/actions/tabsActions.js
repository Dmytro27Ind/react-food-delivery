import { CHANGE_TABS_VALUE } from './constants'

const changeTabsValue = (value) => {
    return {
        type: CHANGE_TABS_VALUE,
        payload: value
    }
}

export {changeTabsValue}