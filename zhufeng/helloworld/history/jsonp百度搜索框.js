import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import jsonp from 'jsonp'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      words:[],
      index:-1
    }
  }
  handleChange=(event)=>{
    let wd=event.target.value
    this.wd=wd
    jsonp(`http://www.baidu.com/su?wd=${wd}`,{
      param:'cb'
    },(err,data)=>{
        this.setState({
          words:data.s
        })
    })

  }
  handleKeyDown=(event)=>{
    let code =event.keyCode
    if(code==38||code==40){
      let index = this.state.index
      if(code==38){
        index--
        if(index==-2){
          index=this.state.words.length-1
        }

      }else if(code==40){
        index++
        if(index==this.state.words.length){
          index=-1
        }
      }
      this.setState({
        index
      })
    }else if(event.keyCode==13){
      window.location.href=`http://www.baidu.com/s?wd=${event.target.value}`
    }
  }
  render(){
    return(
      <div className="container">
       <div className="row">
       <div className="col-sm-8 col-sm-offset-2">
         <div className="panel panel-default">
         <div className="panel-heading">
           <input value={this.state.index==-1?this.wd:this.state.words[this.state.index]} onKeyDown={this.handleKeyDown} type="text" className="form-control" onChange={this.handleChange}/>
         </div>
         <div className="panel-body">
           <ul className="list-group">
            { this.state.words.map((word,index)=>(<li className={"list-group-item "+(index===this.state.index?'active':'' )} key={index}>{word}</li>)) }
           </ul>
         </div>
         </div>
       </div>
       </div>
      </div>
    )
  }
}

export default App;
