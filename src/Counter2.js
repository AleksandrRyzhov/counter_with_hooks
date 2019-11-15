
import './App.css';
import Setting2 from "./Setting2";
import React, { useState, useEffect } from 'react';

import './App.css';

function Counter() {

    const [count, setCount] = useState(0);
    const [countMax, setCountMax] = useState(5);
    const [setting, setSet] = useState(false);
    const [dis, setDis] = useState(false);

    useEffect(() => {
        debugger
        if (count === countMax) {
            setDis(true)
        }
        if (count < 0 || count === countMax || countMax <= count){
            setDis(true)
        } else {
            setDis(false)
        }

    },[count, countMax]);

    let inc = ()=> setCount(count + 1)

    let res = ()=> {
        setCount(0);
        setDis(false)

    }

    let set = ()=> {
        setSet(true)

    }

    let onTitleChangedStart =(e)=>{
        setCount(Number(e.currentTarget.value))

    }
    let onTitleChangedMaxStart =(e)=>{
        setCountMax(Number(e.currentTarget.value))


    };



    let saveAllSetting = ()=> {
        setSet(false)
    }

    const textDisable  = count === countMax ? "text-red" : ""

    return (
        <div className="App">
            <header className="App-header">
                { setting ?
                    <Setting2 saveAllSetting={saveAllSetting}
                             onTitleChangedStart={onTitleChangedStart}
                             onTitleChangedMaxStart={onTitleChangedMaxStart}
                             count={count} countMax={countMax}
                              dis ={dis}
                    /> :
                    <div>
                        <div className={textDisable}>
                            {count}
                        </div>

                        <button disabled={dis} onClick={inc}> inc </button>{" "}
                        <button onClick={res}> res </button>{" "}
                        <button onClick={set}> set </button>
                    </div> }
            </header>
        </div>
    );
}

export default Counter;
