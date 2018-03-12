import React, { Component } from 'react'
import "./Slider.css"
import SliderItem from './SliderItem.js'
import SliderArrow from './SliderArrows'
import SliderDot from './SliderDot.js'
export default class Slider extends Component {
    constructor(){
        super();
        this.state = {index:0};
    }
    turn=(step)=>{
      let index = this.state.index + step
      if(index<0){
          this.$slider.style.transitionDuration='0s'
          this.$slider.style.left=-500*(this.props.items.length-1)+"px"
          setTimeout(() => {
              
            index=this.props.items.length-1
            this.$slider.style.transitionDuration = this.props.speed+'s'
            this.setState({index})  
          
            }, 0);
            return;
      }
      if(index>this.props.items.length){ 
          this.$slider.style.transitionDuration = '0s'
          this.$slider.style.left=0
          setTimeout(() => {
              
          index=1
          this.$slider.style.transitionDuration = this.props.speed+'s'
          this.setState({index})  
        
          }, 0);
          return;
      }

      this.setState({index})      
    }
    go=()=>{
        this.$timer=setInterval(()=>{
            this.turn(1)
         },this.props.delay*1000)
    }
    componentDidMount(){
        this.$slider=document.querySelector('.sliders')
        if(this.props.auto){
           this.go()
        }
    }

  render() {
     
    return (
      <div onMouseOut={()=>this.go()} onMouseOver={()=>clearInterval(this.$timer)} className="slider-wrapper">
       <SliderItem speed={this.props.speed} items={this.props.items} index={this.state.index}></SliderItem>
       <SliderArrow turn={this.turn}></SliderArrow>
       <SliderDot items={this.props.items} index={this.state.index} turn={this.turn}></SliderDot>
      </div>
    )
  }
}
