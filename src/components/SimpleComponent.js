// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mood:'happy'
    }
  }

  handleClick = () => {
    const changedMood = this.state.mood === 'happy'? 'sad':'happy'
    this.setState({mood:changedMood})
  }

  render(){
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}
