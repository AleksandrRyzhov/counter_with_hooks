import './App.css';
import Setting2 from "./Setting2";
import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {INC, RES, SET} from "./reducer";

function Counter(props) {

    const {count, countMax, setting} = useSelector(state => ({
        count: state.count,
        countMax: state.countMax,
        setting: state.setting
    }));

    const dispatch = useDispatch();

    const textDisable = count >= countMax ? "text-red" : ""

    return (
        <div className="App">
            <header className="App-header">
                {setting ?
                    <Setting2/> :
                    <div>
                        <div className={textDisable}>
                            {count}
                        </div>
                        <div>
                            {countMax}
                        </div>

                        <button disabled={count >= countMax} onClick={() => dispatch({type: INC})}> inc</button>
                        {" "}
                        <button onClick={() => dispatch({type: RES})}> res</button>
                        {" "}
                        <button onClick={() => dispatch({type: SET})}> set</button>
                    </div>}
            </header>
        </div>
    );
}

export default Counter;
