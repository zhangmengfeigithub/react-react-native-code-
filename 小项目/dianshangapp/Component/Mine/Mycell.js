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
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Mycell extends Component<{}> {
    constructor(props){
        super(props)
        
    }
  render() {
    return (
      <TouchableOpacity>
          <View style={styles.container}>
          <View style={styles.leftViewStyle}>
            <Image source={{uri:this.props.leftIconName}}  style={styles.leftImgStyle}></Image>
            <Text  style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>
          <View style={styles.leftViewStyle}>
              {this.rightSubView()}
          </View>
          </View>
      </TouchableOpacity>
    );
  }
  rightSubView(){
      return (
          <View style={{flexDirection:'row', alignItems:'center'}}>
          {this.renderRightContent()}
          <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
          </View>
      )
  }
  renderRightContent(){
      if(this.props.rightIconName.length == 0){
          return(
            <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
          )
      }else{
          return (
            <Image source={{uri: this.props.rightIconName}}  style={{width:24, height:13}}/>
          )
      }
  }
}

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:40,
        width: width,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
    },

    rightViewStyle:{

    },

    leftImgStyle:{ // 左边的图片
       width:24,
       height:24,
       marginRight:6,
       // 圆角
       borderRadius:12
    },

    leftTitleStyle:{
       fontSize:16
    }
})
Mycell.defaultProps={
    leftIconName: '',
    leftTitle: '',
    rightIconName: '',
    rightTitle: ''
}