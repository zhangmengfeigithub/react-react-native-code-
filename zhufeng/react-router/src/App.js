import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import ProtectRoute from './components/ProtectRoute'
import Login from './components/Login.js'
import MenuLink from './components/MenuLink'
import NotFound from './components/NotFound'

export default (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">用户管理系统</div>
          </div>
          <div>
          <ul className="nav navbar-nav">
           <MenuLink to='/home' label='首页'></MenuLink>
           <MenuLink to='user' label='用户管理'></MenuLink>
           <MenuLink to='profile' label='个人设置'></MenuLink>
          </ul>

          </div>
          
        </div>
      </nav>
      <div className="container">
        <div className="row">  
          <div className="col-sm-12">
          <Switch>
            <Route exact path="/" render={props=><div>首页</div>}/>
            {/* <Route path="/:name" render={props=><div>{props.match.params.name}</div>}/> */}
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            {/* <Route path="/profile" component={Profile} /> */}
            <ProtectRoute path="/profile" component={Profile}></ProtectRoute>
            <Route  component={NotFound} />
          </Switch>
            
          </div>
        </div>
      </div>
    </div>
  </Router>
);
