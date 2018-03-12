import React, { Component } from 'react';
import './messageList.css'
export default class MessageList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group" style={{listStyle:'none'}}>
           {this.props.messages.map((message,index)=>(<li className="list-group-item" key={index} >{message.username}:{message.content} <span className="pull-right">{message.createAt.toLocaleDateString()}</span><button onClick={()=>{this.props.removeMessage(index)}} className="btn btn-danger btn-sm">删除</button></li>))}
        </ul>
      </div>
    )
  }
};
