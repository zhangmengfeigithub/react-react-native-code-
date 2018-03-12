/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class BottomCommonCell extends Component<{}> {
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('0k')}}>
        <View style={styles.container}>
          <View style={styles.leftViewStyle}>
            <Image source={{uri:this.props.leftIcon}} style={{width:23, height:23, marginRight:5}}></Image>
            <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
          </View>
          <View style={styles.rightViewStyle}>
            <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:44,
    flexDirection:'row',
    backgroundColor:'white',

    alignItems:'center',

    // 设置对齐方式
    justifyContent:'space-between',

    // 设置下边框
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5
 },

 leftViewStyle:{
   // 改变主轴的方向
    flexDirection:'row',
    alignItems:'center',

    marginLeft:8
 },

 rightViewStyle:{
     // 改变主轴的方向
     flexDirection:'row',
     alignItems:'center'
 }
})
BottomCommonCell.defaultProps={
    leftIcon: '',
    leftTitle: '',
    rightTitle: ''
}
