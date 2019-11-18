import {createStore} from "redux";

const initialState = {
    startValue: 0,
    maxValue: 5,
    disabled: false,
    setSetting: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, startValue: state.startValue + 1}
        case "RESET":
            return {...state, startValue: 0, disabled: false}
        case "CHANGE_DISABLE":
            return {...state, disabled: true}
        case "CHANGE_DISABLE_FALSE":
            return {...state, disabled: false}
        case "OPEN_SETTING":
            return {...state, setSetting: true}
        case "SAVE_ALL_SETTING":
            return {...state, setSetting: false}
        case "CHANGE_START_VALUE":
            return {...state, startValue: action.newStartValue}
        case "CHANGE_MAX_VALUE":
            return {...state, maxValue: action.newMaxValue}


    }
    return state;
}


const store = createStore(reducer);
export default store;
