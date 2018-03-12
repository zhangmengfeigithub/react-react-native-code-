import React, { Component } from 'react'
import {Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
export default class UserList extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentWillMount(){
        let userStr=localStorage.getItem('users')
      let users=userStr?JSON.parse(userStr):[]
      this.setState({users})
    }
  render() {
    return (
      <ul className="list-group">
      {this.state.users.map(user=>(
          <li className="list-group-item">
          <Link to={"/user/detail/"+user.id}>{user.name}</Link>
          </li>
      ))}
      </ul>
    )
  }
}
