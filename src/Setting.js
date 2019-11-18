import React from "react";
import './App.css';

class Setting extends React.Component {


    state = {
        disabled: false,
        startValueTitle: 0,
        startMaxValueTitle: 1
    };

    sevSetting = ()=> {
        let newStartValueTitle = Number(this.state.startValueTitle);
        let newStartMaxValueTitle = Number(this.state.startMaxValueTitle);

        this.props.sevAllSetting(newStartValueTitle, newStartMaxValueTitle)

    }

    onTitleChangedStart = (e)=> {
        this.setState({startValueTitle: e.currentTarget.value}, ()=> {
            if (this.state.startValueTitle <= -1 || this.state.startValueTitle >= this.state.startMaxValueTitle) {
                this.setState({disabled: true})
            } else {
                this.setState({disabled: false})
            }
        })
    }
    onTitleChangedMaxStart = (e)=> {
        this.setState({startMaxValueTitle: e.currentTarget.value}, ()=>{
            if (this.state.startMaxValueTitle <= 0 || this.state.startMaxValueTitle <= this.state.startValueTitle) {
                this.setState({disabled: true})
            } else {
                this.setState({disabled: false})
            }
        })
    }



    render = () => {

        let classForError = this.state.disabled ? "red" : " "

        return (
            <div>
                <div >
                start Value: <input className={classForError} value={this.state.startValueTitle}
                                    onChange={this.onTitleChangedStart}
                                     type="number"
                                    placeholder="New Value"/>
                </div>
                <div >
                max Value: <input className={classForError} value={this.state.startMaxValueTitle}
                                    onChange={this.onTitleChangedMaxStart}
                                   type="number"
                                  placeholder="New Value"/>
                </div>
                <button disabled={this.state.disabled} onClick={this.sevSetting}>sev</button>
            </div>
        )
    }

}

export default Setting
