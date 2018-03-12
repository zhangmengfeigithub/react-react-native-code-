/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  TextInput
} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var BadgeData = require('./BadgeData.json');
var {width, height} = Dimensions.get('window');
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/*返回6个包, this代表这个类,调用类里面的方法 */}
        {this.renderAllBadge()}
        <View>
        <TextInput
        placeholder={'请输入...'}
        style={styles.inputStyle}
        clearButtonMode={'always'}
        keyboardType={'number-pad'}
        
        >

        </TextInput>
      </View>
      </View>
     
    );
  }

  // 返回所有的包
  renderAllBadge(){
    // 定义数组装所有的子组件
    var allBadge = [];
    // 遍历json数据
    for(var i=0; i<BadgeData.data.length; i++){
       // 取出单独的数据对象
       var badge = BadgeData.data[i];
       // 直接转入数组
      allBadge.push(
          <View key={i} style={styles.outViewStyle}>
             <Image source={{uri: badge.icon}} style={styles.imageStyle}/>
             <Text style={styles.mainTitleStyle}>
               {badge.title}
             </Text>
          </View>
      );
    }
    // 返回数组
    return allBadge;
  }
  
}

const styles = StyleSheet.create({
  container: {

    // 确定主轴的方向
    flexDirection:'row',

    // 换行显示
    flexWrap:'wrap'

  },

  outViewStyle:{
     backgroundColor:'red',
     // 设置侧轴的对齐方式
     alignItems:'center',
     width:boxW,
     height:boxW,
     marginLeft:vMargin,
     marginTop:hMargin
  },

  imageStyle:{
     width:80,
     height:80
  },

  mainTitleStyle:{
    
  },
  inputStyle:{
    width: 300,
    height: 20,
    borderColor: 'red',
    borderWidth: 2,
    marginTop:20,
    marginLeft:20
  }
});
