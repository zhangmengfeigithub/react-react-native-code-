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
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Cell from './Cell.js'
export default class More extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            {/*导航条*/}
            {this.renderNavBar()}

            <ScrollView>
               <View>
                   <Cell
                      title="扫一扫"
                   />
               </View>
               <View style={{marginTop:15}}>
                   <Cell
                      title="省流量模式"
                      isSwitch={true}
                   />
                   <Cell
                      title="消息提醒"
                      
                   />
                   <Cell
                      title="邀请好友"
                      
                   />
                   <Cell
                      title="清空缓存"
                      rightTitle='2.35M'
                      
                   />
                   
               </View>
               <View style={{marginTop:15}}>
                   <Cell
                      title="问卷调查"
                      isSwitch={true}
                   />
                   <Cell
                      title="支付帮助"
                      
                   />
                   <Cell
                      title="网络诊断"
                      
                   />
                   <Cell
                      title="关于码团"
                   />
                   <Cell
                      title="我要应聘"
                   />
                   
               </View>
               <View style={{marginTop:15}}>
                   <Cell
                      title="精品应用"
                   />
               </View>
            </ScrollView>
        </View>
    );
}

// 导航条
renderNavBar(){
    return(
        <View style={styles.navOutViewStyle}>
            <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>更多</Text>
            <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightViewStyle}>
               <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
navOutViewStyle:{
height:64,
backgroundColor:'rgba(255,96,0,1.0)',
flexDirection: 'row',
alignItems: 'center',
justifyContent:'center'
},
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  navImageStyle:{
    width: 30,
    height: 30,
   
  },
  welcome: {
    marginTop: 300,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  rightViewStyle:{
    position:'absolute',
    right:10,
    bottom:15,
  }
});
