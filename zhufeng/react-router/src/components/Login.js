import React, { Component } from 'react';

export default class Login extends Component {
  render() {
      let props=this.props
    return (
     <button onClick={()=>{
         localStorage.setItem('login','true')
         props.history.push(props.location.state.from)
     }} className="btn btn-primary">登录</button>
    )
  }
};
