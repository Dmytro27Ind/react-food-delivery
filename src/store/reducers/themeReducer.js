import { SWITCH_THEME } from '../actions/constants'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'
console.log('defaultTheme: ' + defaultTheme);

const defaultState = {
    theme: localStorage.getItem('theme') || defaultTheme
}

const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            let th = (state.theme === 'light')? 'dark' : 'light'
            localStorage.setItem('theme', th)
            return {...state, theme: th};
        default:
            return state;
    }
}

export default themeReducer;