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
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import MyCell from './Mycell'
import Middle from './Middle'
import HeaderView from './HeaderView'
export default class Mine extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <ScrollView
    //    style={styles.scrollViewStyle}
    //    contentInset = {{top: -200}}
    //    contentOffset = {{y:200}}
       >
       <HeaderView></HeaderView>
       <View style={{marginTop:20}}>
       <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName="collect"
                       leftTitle="我的订单"
                       rightTitle="查看全部订单"
                   />
               </View>
               <Middle></Middle>
                   <MyCell
                       leftIconName="draft"
                       leftTitle="飞哥钱包"
                       rightTitle="账户余额:¥100"
                   />

                   <MyCell
                       leftIconName="like"
                       leftTitle="抵用券"
                       rightTitle="10张"
                   />
               </View>


               <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName="card"
                       leftTitle="积分商城"
                   />
               </View>

               <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName="new_friend"
                       leftTitle="今日推荐"
                       rightIconName="me_new"
                   />
               </View>

               <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName="pay"
                       leftTitle="我要合作"
                       rightTitle="轻松开店,招财进宝"
                   />
               </View>
       </ScrollView>
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  welcome: {
      marginTop: 300,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
 
});
