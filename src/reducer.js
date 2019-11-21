
export const INC = "INC"
export const RES = "RES"
export const SET = "SET"
export const SAVE_ALL_SETTING = "SAVE_ALL_SETTING"
export const CHANGE_START_VALUE = "CHANGE_START_VALUE"
export const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE"


const initialState = {
    count: 0,
    countMax: 5,
    setting: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {...state, count: state.count + 1}
        case RES:
            return {...state, count: 0}
        case SET:
            return {...state, setting: true}
        case SAVE_ALL_SETTING:
            return {...state, setting: false}
        case CHANGE_START_VALUE:
            return {...state, count: action.e}
        case CHANGE_MAX_VALUE:
            return {...state, countMax: action.e}
        default:
    }
    return state;
}


