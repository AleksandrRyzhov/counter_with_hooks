import React from 'react';

import './App.css';

function Setting(props) {


    return (
        <div className="App">
            <header className="App-header">
          <span>
          start Value: <input onChange={props.onTitleChangedStart} value={props.count} type="number"/>
          </span>
                <span>
          max Value: <input onChange={props.onTitleChangedMaxStart} value={props.countMax} type="number"/>
          </span>

                <button disabled={props.dis} onClick={props.saveAllSetting}> set </button>

            </header>
        </div>
    );
}

export default Setting;
