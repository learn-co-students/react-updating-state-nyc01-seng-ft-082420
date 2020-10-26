// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super()
        this.state = {
        hasBeenClicked: false
    }
        this.count = {
            count: 0
        }


    
    }

    handleClick = () => {
        let newCount = this.state.count + 1
        console.log('been clicked')
        console.log(newCount)
        console.log(this.hasBeenClicked)
        this.setState({
            hasBeenClicked: true
            
        })

        

        
    }

    
    render() {
        return (<div>
            <p>
                I have {this.hasBeenClicked ? null : 'not'} been clicked!
            </p>
            <button onClick={this.handleClick}>
                Click Me!
            </button>
        </div>)
    }
    
}

export default ClickityClick


/* this.setState({
  addressInfo: {
    ...this.state.addressInfo,
    city: 'New York City'
  }
})*/

/*It's important to note the difference between changes in state and changes in props. Changes in state and/or props will both trigger a re-render of our React component. However, changes in state can only happen internally due to components changing their own state. Thus, a component can trigger changes in its own state.

A component cannot change its props. Changes in props can only happen externally, meaning the parent or grandparent component changes the values it passing down to its children.

 */