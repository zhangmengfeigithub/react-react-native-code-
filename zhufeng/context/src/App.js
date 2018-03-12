import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PropTypes} from 'prop-types'
class App extends Component {
  constructor(props){
    super(props)
    this.state={message:[1,2,3,4]}
  }
  getChildContext(){
    return {color:'red'}
  }
  render() {
    return (
      <div className="App">
       <MessageList message={this.state.message}></MessageList>
      </div>
    );
  }
}
class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.message.map((message,index)=><Message key={index} message={message}/>)}
      </ul>
    );
  }
}
class Message extends Component {
  render() {
    return (
      <div>
        <li style={{color:this.context.color}}>{this.props.message}</li>
      </div>
    );
  }
}

export default App;
App.childContextTypes={
  color:PropTypes.string
}
Message.contextTypes={
  color:PropTypes.string
}
