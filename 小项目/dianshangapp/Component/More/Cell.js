/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Cell extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      isOn:false
    }
  }
  render() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <Text style={{marginLeft: 8}} >
            {this.props.title}
            </Text>
            {this.renderRightView()}
           </View>
        </TouchableOpacity>
      
    );
  }
  renderRightView(){
    if(this.props.isSwitch){
      return(
        <Switch value={this.state.isOn==true} onValueChange={()=>this.setState({isOn:!this.state.isOn})}></Switch>
      )
    }else{
      return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
          {this.rightTitle()}
          <Image
          source={require('../img/home_arrow.png')} style={{width: 8,height: 13,marginRight:8}}
        ></Image>
        </View>
       
      )
    }
  }
  rightTitle(){
    if(this.props.rightTitle.length > 0){
        return(
            <Text style={{color:'gray', marginRight:3}}>{this.props.rightTitle}</Text>
        )
    }
}
}

const styles = StyleSheet.create({
  container: {
    height:40,
    backgroundColor:'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom:5,
    marginTop: 0,
  }
});
Cell.defaultProps={
    title:'',
    isSwitch:false,
    rightTitle:''
}
