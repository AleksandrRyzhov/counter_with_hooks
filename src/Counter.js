import React from "react";
import './App.css';
import Setting from "./Setting";

class Counter extends React.Component {

    state = {
        startValue: 0,
        maxValue: 5,
        disabled: false,
        setSetting: false
    }

    increment = ()=> {
        debugger
        this.setState({ startValue: this.state.startValue + 1}, () => {
            if (this.state.startValue >= this.state.maxValue) {
                this.setState({
                    disabled: true
                })

            }

        })
    }

    reset = ()=> {
        this.setState({
            disabled: false,
            startValue: 0
        })
    }

    openSetting =()=>{
        this.setState({
            setSetting: true
        })
    }

    sevAllSetting = (newStartValueTitle, newStartMaxValueTitle)=> {
        debugger
        this.setState({
            setSetting: false,
            startValue: newStartValueTitle,
            maxValue: newStartMaxValueTitle
        })
    }

    render = () => {
        let disableColor = this.state.disabled ? "red" : ""

        return (
            <div>
                {this.state.setSetting ? <Setting disabled={this.state.disabled} sevAllSetting={this.sevAllSetting}/> :
                    <div>
                <div className={disableColor}>
                     {this.state.startValue}
                </div>
                <div>
                    {this.state.maxValue}
                </div>
                <button disabled={this.state.disabled} onClick={this.increment} >add</button>{" "}
                <button onClick={this.reset}>res</button>{" "}
                <button onClick={this.openSetting}>set</button>{" "}
                    </div>}
            </div>
        )
    }

}

export default Counter
