import React from "react";
import './App.css';
import Setting1 from "./Setting1";
import {connect} from "react-redux";

class Counter extends React.Component {

   componentDidUpdate(prevProps) {
        if ((this.props.startValue === prevProps.maxValue) && (this.props.disabled === false)) {
            this.props.changeDisable();
        }
    }
    increment = ()=> {
        this.props.increment()
    }

    reset = ()=> {
        this.props.reset()
          }

    openSetting =()=>{
       this.props.openSetting()
           }

    sevAllSetting = ()=> {
        this.setState({
            setSetting: false
        }, ()=> {
            this.saveState();
        })

    }

    onTitleChangedStart = (e)=> {
        this.setState({startValue: Number(e.currentTarget.value)}, ()=> {
            if (this.state.startValue <= -1 || this.state.startValue >= this.state.maxValue) {
                this.setState({disabled: true})
            } else {
                this.setState({disabled: false})
            }
        })
    }
    onTitleChangedMaxStart = (e)=> {
        this.setState({maxValue: Number(e.currentTarget.value)}, ()=>{
            if (this.state.maxValue <= 0 || this.state.maxValue <= this.state.startValue || this.state.startValue <= -1) {
                this.setState({disabled: true})
            } else {
                this.setState({disabled: false})
            }
        })
    }

    render = () => {
        let disableColor = this.props.disabled ? "text-red" : ""

        return (
            <div>
                {this.props.setSetting ? <Setting1 /> :
                    <div>
                <div className={disableColor}>
                     {this.props.startValue}
                </div>
                <div>
                    {this.props.maxValue}
                </div>
                <button disabled={this.props.disabled} onClick={this.increment} >add</button>{" "}
                <button onClick={this.reset}>res</button>{" "}
                <button onClick={this.openSetting}>set</button>{" "}
                    </div>}
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
        increment: ()=>{
            const action = {
                type: "INCREMENT",

            }
            dispatch(action)
        },
        reset: ()=>{
            const action = {
                type: "RESET",

            }
            dispatch(action)
        },

        changeDisable: () => {
            const action = {
                type: "CHANGE_DISABLE",

            }
            dispatch(action)
        },
        openSetting: () => {
            const action = {
                type: "OPEN_SETTING",
            }
            dispatch(action)
        }

    }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;


