import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      num:0
    }

  }
  handleClick=()=>{
    //setState是异步的，不能再赋值以后立即获得最新的值，可以在回调函数中获取
    this.setState({num:this.state.num+1},function(){
      console.log(this.state.num)
    })
  }
  shouldComponentUpdate(newProps,newState){
    if(newState.num%5===0){
      return true
    }else{
      return false
    }
  }
  render() {
    return (
      <div style={{border:'1px solid black',padding:10,}}>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>加1</button>
        <SubCount num={this.state.num}></SubCount>
      </div>
      
    );
  }
}
class SubCount extends Component{
  componentWillReceiveProps(){
    console.log('sub componentWillReceiveProps')
  }
  shouldComponentUpdate(newProps,newState){
    if(newProps.num%3===0){
      return true
    }else{
      return false
    }
  }
  render(){
    return(
      <div style={{border:'1px solid red'}}>
        <p>{this.props.num}</p>
      </div>
    )
  }
}


export default App;
