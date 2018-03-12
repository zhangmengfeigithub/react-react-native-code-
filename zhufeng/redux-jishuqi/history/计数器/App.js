import React, { Component } from 'react'
import {createStore} from './redux'
let INCREASE = 'INCREMENT'
let DECREASE = 'DECREMENT'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      number:store.getState().number
    }
  }
  componentWillMount(){
    this.unsubscribe=store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  render() {
    return (
      <div>
       <div id="counter">{this.state.number}</div>
       <button onClick={()=>store.dispatch({type:INCREASE,amount:2})} id="addBtn">+</button>
       <button onClick={()=>store.dispatch({type:INCREASE,amount:3})} id="minusBtn">-</button>
      </div>
    )
  }
}
var reducer = (state = {number:0}, action) => {
  if (!action) return state;
  console.log(action);
  switch (action.type) {
      case 'INCREMENT':
          return {number:state.number+action.amount}
      case 'DECREMENT':
          return {number:state.number-action.amount}
      default:
          return state;
  }
}
var store = createStore(reducer);


