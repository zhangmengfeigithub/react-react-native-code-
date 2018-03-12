import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MessageList from './components/messageList'
import MessageForm from './components/messageForm'
class App extends React.Component {
  constructor(){
    super()
    this.state={
     messages:[]
    }
  }
  addMessage=(message)=>{
    let messages=[...this.state.messages,message]
    this.setState({
      messages
    })
  }
  removeMessage=(index)=>{
   this.state.messages.splice(index,1)
   this.setState({
     messages:[...this.state.messages]
   })
  }
  render(){
    return(
      <div className="container">
       <div className="row">
       <div className="col-sm-8 col-sm-offset-2">
         <div className="panel panel-default">
         <div className="panel-heading">
          <h2>欢迎来到珠峰留言板</h2>
         </div>
         <div className="panel-body">
         <MessageList removeMessage={this.removeMessage} messages={this.state.messages}></MessageList>
         </div>
         <div className="panel-footer">
         <MessageForm addMessage={this.addMessage}></MessageForm>
         </div>
         </div>
       </div>
       </div>
      </div>
    )
  }
}

export default App;
