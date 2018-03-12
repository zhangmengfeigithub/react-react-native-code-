import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    let style={
        left:this.props.index*-500,
        width:(this.props.items.length+1)*500,
        transitionDuration:this.props.speed+'s'
    }
    return (
      <div>
         <ul className="sliders" style={style}>
          {this.props.items.map((item,index)=>(
              <li key={index} className="slider"><img src={item.src}  alt={item.alt}></img></li>
          ))}
              <li key={this.props.items.length} className="slider"><img src={this.props.items[0].src}></img></li>
          
        </ul>
      </div>
    )
  }
}
