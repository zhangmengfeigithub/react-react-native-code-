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
  ListView,
  TouchableOpacity,
  Image,
  
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var Wine = require('./Wine.json'); // 数组

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
export default class App extends Component<{}> {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Wine)
  }
}
  render() {
    return(
       <ListView
           dataSource={this.state.dataSource}  // 数据源
           renderRow={this.renderRow}
       />
    );
  }

 // 返回具体的cell
 renderRow(rowData,sectionID,rowID,highlightRow){
     return(
       <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
         <View style={styles.cellViewStyle}>
           {/*左边的图片*/}
           <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
           {/*右边的View*/}
           <View style={styles.rightViewStyle}>
             {/*上边的Text*/}
             <Text style={styles.topTitleStyle}>{rowData.name}</Text>
             {/*下边的Text*/}
             <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
           </View>
         </View>
       </TouchableOpacity>
     );
 }
}

const styles = StyleSheet.create({
  cellViewStyle:{
      padding:10,
      backgroundColor:'white',
      // 下划线
      borderBottomWidth:0.5,
      borderBottomColor:'#e8e8e8',

      // 确定主轴的方向
      flexDirection:'row'
  },

  leftImageStyle:{
    width:60,
    height:60,
    marginRight:15
  },

  rightViewStyle:{
     // 主轴的对齐方式
     justifyContent:'center'
  },

  topTitleStyle:{
     color:'red',
     fontSize:15,
     width:width * 0.7,
     marginBottom:8
  },

  bottomTitleStyle:{
    color:'blue',
  }
});
