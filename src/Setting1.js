import React from "react";
import './App.css';
import {connect} from "react-redux";

class Setting extends React.Component {

    componentDidUpdate(prevProps) {
        if ((this.props.startValue >= this.props.maxValue)||
            (this.props.startValue <=-1) ||
            (this.props.maxValue <= this.props.startValue)||
            (this.props.maxValue <= 0)) {
            this.props.changeDisable();
        } else {
            this.props.changeDisableFalse()
        }
    }

    sevAllSetting =()=>{
        this.props.sevAllSetting()
    }

    onTitleChangedStart =(e)=> {
        let newStartValue = Number(e.currentTarget.value)
        debugger
        this.props.onTitleChangedStart(newStartValue)
    }

    onTitleChangedMaxStart =(e)=> {
        let newMaxValue = Number(e.currentTarget.value)
        this.props.onTitleChangedMaxStart(newMaxValue)
    }



    render = () => {

        let classForError = this.props.disabled ? "red" : " "

        return (
            <div>
                <div >
                start Value: <input className={classForError} value={this.props.startValue}
                                    onChange={this.onTitleChangedStart}
                                     type="number"
                                    placeholder="New Value"/>
                </div>
                <div >
                max Value: <input className={classForError} value={this.props.maxValue}
                                    onChange={this.onTitleChangedMaxStart}
                                   type="number"
                                  placeholder="New Value"/>
                </div>
                <button disabled={this.props.disabled} onClick={this.sevAllSetting}>sev</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        startValue: state.startValue,
        maxValue: state.maxValue,
        disabled: state.disabled,
        setSetting: state.setSetting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sevAllSetting: ()=>{
            const action = {
                type: "SAVE_ALL_SETTING",
            }
            dispatch(action)
        },
        onTitleChangedStart: (newStartValue)=>{
            debugger
            const action = {
                type: "CHANGE_START_VALUE",
                newStartValue,
            }
            dispatch(action)
        },
        onTitleChangedMaxStart: (newMaxValue)=>{
            const action = {
                type: "CHANGE_MAX_VALUE",
                newMaxValue,
            }
            dispatch(action)
        },
        changeDisable: () => {
            const action = {
                type: "CHANGE_DISABLE",

            }
            dispatch(action)
        },
        changeDisableFalse: () => {
            const action = {
                type: "CHANGE_DISABLE_FALSE",

            }
            dispatch(action)
        },
    }
}


const ConnectedSetting = connect(mapStateToProps, mapDispatchToProps)(Setting);
export default ConnectedSetting;

