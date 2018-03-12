import React, { Component } from 'react'
import redux from 'redux'
import {createStore} from './redux'
const ADD_TODO='ADD_TODO'
const DELETE_TODO='DELETE_TODO'
var reducer = (state={list:[]}, action) => {
  if (!action) return state;
  console.log(action);
  switch (action.type) {
      case ADD_TODO:
          return {list:[...state.list,action.text]}
      case DELETE_TODO:
      let list=state.list
      list.splice(action.index,1)
          return {list:[...list]}
      default:
          return state;
  }
}
var store = createStore(reducer);



export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list:store.getState().list
    }
  }
  componentWillMount(){
    this.unsubscribe=store.subscribe(()=>{
      this.setState({
        
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  handleKeyDown=(event)=>{
    if(event.keyCode==13&&event.target.value.length>0){
      store.dispatch({type:ADD_TODO,text:event.target.value})
      let list=this.state.list
      list.push(event.target.value)
      this.setState({
        list:list
      })
    }
    event.target.value=''
    
  }
  deleteTodo=(index)=>{
    store.dispatch({
      type:DELETE_TODO,
      index
    })
  }
  componentWillMount(){
    let unSubscribe=store.subscribe(()=>{
      this.setState({
        list:store.getState().list
      })
    })
  }
  componentWillUnmount(){
    this.unSubscribe()
  }
  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown} />
        <ul>
           {this.state.list.map((todo,index)=>(<li index={index}>{todo} <button onClick={()=>this.deleteTodo(index)}>-</button></li>))}
        </ul>
      </div>
    )
  }
}



