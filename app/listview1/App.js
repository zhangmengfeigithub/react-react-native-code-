

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
  AlertIOS,
  Dimensions
  
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var shareData = require('./shareData.json');

// 一些常量设置
var cols = 3;
var cellWH = 100;
var screenWidth = Dimensions.get('window').width;
var vMargin = (screenWidth - cellWH * cols) / (cols + 1);
var hMargin = 25;

export default class App extends Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(shareData.data)
  }
}
render(){
  return(
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          contentContainerStyle={styles.listViewStyle}
      />
  );
}

// 单独的cell
renderRow(rowData){
 return(
     <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('哈哈')}}>
       <View style={styles.innerViewStyle}>
           <Image source={{uri: rowData.icon}} style={styles.iconStyle}/>
           <Text>{rowData.title}</Text>
       </View>
     </TouchableOpacity>
 );
}
}

const styles = StyleSheet.create({
  listViewStyle:{
    // 改变主轴的方向
    flexDirection:'row',
    // 多行显示
    flexWrap:'wrap'
 },

 iconStyle:{
    width:80,
    height:80,
    borderColor: 'black',
    borderWidth: 2,
 },

innerViewStyle:{
   width:cellWH,
   height:cellWH,
   marginLeft:vMargin,
   marginTop:hMargin,

   // 居中
   alignItems:'center'
}
});
