// Code SimpleComponent Here

import React, {Component} from 'react'

class SimpleComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            mood: "happy"
        };

    }
      
   
    handleClick = () => {
      this.setState({
          mood: !this.state.mood
      })
    }
   
    render() {
        return(
            <div onClick={this.props.handleClick}></div>
        )
    }
  }
