// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super();
     
        // Define the initial state to 0
        this.state = {
            toggled: false
        };
    }

    handleClick = () => {
        // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
        this.setState(previousState => {
          return {
            toggled: !previousState.toggled
          }
        })
    }

    render() {
        return (
          <div>
            <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
          </div>
        );
    }
}


export default ClickityClick;