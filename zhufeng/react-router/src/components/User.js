import React, { Component } from 'react'
import {Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'
export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <ul className="nav nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">新增用户</Link></li>
          </ul>
        </div>
        <div className="col-sm-10">
        <Route path="/user/list" component={UserList}></Route>
        <Route path="/user/add"  component={UserAdd}></Route>
        <Route path="/user/detail/:id"  component={UserDetail}></Route>
        </div>
      </div>
    )
  }
}
