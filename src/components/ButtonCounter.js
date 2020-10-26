import React from 'react'
import ClickityClick from './components/ClickityClick'

class ButtonCounter extends React.Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    handleClicked() {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })


    }
    
}

export default ButtonCounter