import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      color:'black'
    }

  }
  render() {
    return (
      <div className="panel panel-default">
      <button onClick={()=>this.setState({color:'red'})}>红</button>
      <button onClick={()=>this.setState({color:'green'})}>绿</button>
         <PanelHead color={this.state.color} head='头'></PanelHead> 
         <PanelBody color={this.state.color} body='体'></PanelBody>
         <PanelFooter color={this.state.color} footer='尾'></PanelFooter>
      </div>
      
    );
  }
}
class PanelHead extends Component {
  render() {
    return (
     <div style={{color:this.props.color}} className="panel-heading">
      {this.props.head}
     </div>
    );
  }
}
class PanelBody extends Component {
  render() {
    return (
      <div  style={{color:this.props.color}} className="panel-body">
        {this.props.body}
      </div>
    );
  }
}
class PanelFooter extends Component {
  render() {
    return (
      <div style={{color:this.props.color}} className="panel-footer">
       {this.props.footer}
      </div>
    );
  }
}

export default App;
