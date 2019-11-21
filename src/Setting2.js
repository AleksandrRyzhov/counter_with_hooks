import React from 'react';

import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_MAX_VALUE, CHANGE_START_VALUE, SAVE_ALL_SETTING} from "./reducer";

function Setting() {

    const {count, countMax} = useSelector(state => ({
        count: state.count,
        countMax: state.countMax,
        setting: state.setting
    }));

    const dispatch = useDispatch();

    let onTitleChangedStart = (e) => {
        dispatch({type: CHANGE_START_VALUE, e})
    }
    let onTitleChangedMaxStart = (e) => {
        dispatch({type: CHANGE_MAX_VALUE, e})
    }

    const textDisable = ((count >= countMax) ||(count < 0)) ? "text-red" : ""
    return (
        <div className="App">
            <header className="App-header">
          <span className={textDisable}>
          start Value: <input onChange={e => onTitleChangedStart(Number(e.currentTarget.value))} value={count}
                              type="number"/>
          </span>
                <span className={textDisable}>
          max Value: <input onChange={e => onTitleChangedMaxStart(Number(e.currentTarget.value))} value={countMax}
                            type="number"/>
          </span>

                <button disabled={(count < 0) || (count >= countMax) || (countMax < 0)}
                        onClick={() => dispatch({type: SAVE_ALL_SETTING})}> set
                </button>

            </header>
        </div>
    );
}

export default Setting;
