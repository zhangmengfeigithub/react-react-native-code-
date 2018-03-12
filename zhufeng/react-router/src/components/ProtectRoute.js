import React, { Component } from 'react'
import { Route, Link,Switch,Redirect } from "react-router-dom";


export default function({component:Component,...rest}) {
  
    return (
      <Route {...rest} render={(props)=>
    localStorage.getItem('login')?<Component></Component>:<Redirect
    to={{
        pathname:'/login',
        state:{from:props.location.pathname}
}}
    ></Redirect>
    }></Route>
    )
  
}
