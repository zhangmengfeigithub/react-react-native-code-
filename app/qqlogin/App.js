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
  Image,
  TextInput,
  Dimensions

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var {width,height} = Dimensions.get('window');
export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            {/*头像*/}
            <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
            {/*账号和密码*/}
            <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
            <TextInput placeholder={'请输入密码'}  password={true}  style={styles.textInputStyle} />
            {/*登录*/}
            <View style={styles.loginBtnStyle}>
                <Text style={{color:'white'}}>登录</Text>
            </View>
            {/*设置*/}
            <View style={styles.settingStyle}>
                <Text>无法登录</Text>
                <Text>新用户</Text>
            </View>
            {/*其他的登录方式*/}
            <View style={styles.otherLoginStyle}>
                <Text>其他登录方式: </Text>
                <Image  source={require('./img/icon3.png')}  style={styles.otherImageStyle} />
                <Image  source={require('./img/icon7.png')}   style={styles.otherImageStyle} />
                <Image  source={require('./img/icon8.png')}   style={styles.otherImageStyle} />
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#dddddd',
      // 设置侧轴的对齐方式
      alignItems:'center'
  },

  iconStyle:{
     marginTop:50,
     marginBottom:30,
     width:80,
     height:80,
     borderRadius:40,
     borderWidth:2,
     borderColor:'white'
  },

  textInputStyle:{
      width:width*0.99,
      height:38,
      backgroundColor:'white',
      marginBottom:1,
      // 内容居中
      textAlign:'center'
  },

  loginBtnStyle:{
      height:35,
      width:width*0.9,
      backgroundColor:'blue',
      marginTop:30,
      marginBottom:20,

      justifyContent:'center',
      alignItems:'center',

      borderRadius:8
  },

  settingStyle:{
      // 设置主轴的方向
      flexDirection:'row',
      // backgroundColor:'red',

      // 主轴的对齐方式
      width:width*0.9,
      justifyContent:'space-between'
  },

  otherLoginStyle:{
      // backgroundColor:'red',

      // 设置主轴的方向
      flexDirection:'row',

      // 设置侧轴的对齐方式
      alignItems:'center',

      // 绝对定位
      position:'absolute',
      bottom:10,
      left:20
  },

  otherImageStyle:{
      width:50,
      height:50,
      borderRadius:25,
      marginLeft:8
  }
});
