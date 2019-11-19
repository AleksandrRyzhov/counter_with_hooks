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
            return {count: state.count + 1, countMax: state.countMax}
        case RES:
            return {count: 0, countMax: state.countMax}
            case SET:
            return {setting: true, count: state.count, countMax: state.countMax}
            case SAVE_ALL_SETTING:
            return {setting: false, count: state.count, countMax: state.countMax}
            case CHANGE_START_VALUE:
            return { count: action.e, countMax: state.countMax, setting: true}
            case CHANGE_MAX_VALUE:
            return { count: state.count, countMax: action.e, setting: true}

    }
    return state;
}


