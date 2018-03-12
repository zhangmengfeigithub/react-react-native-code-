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
  View
} from 'react-native';
import CommonView from './MiddleCommonView.js'
import Home_D4 from '../../LocalData/XMG_Home_D4.json'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MiddleBottomView extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                    {/*上部分*/}
                    <View style={styles.topViewStyle}>

                    </View>
                    {/*下部分*/}
                    <View style={styles.bottomViewStyle}>
                        {this.renderBottomItem()}
                    </View>
            </View>
        );
    }
  renderBottomItem(){
    // 组件数组
     var itemArr = [];
    // 拿到对应的数据
     var dataArr = Home_D4.data;
    // 遍历
     for(var i=0; i<dataArr.length; i++){
         // 取出单独的数据
         var itemData = dataArr[i];
         // 创建组件,装入数组
         itemArr.push(
             <CommonView
                 title={itemData.maintitle}
                 subTitle={itemData.deputytitle}
                 rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                 titleColor={itemData.typeface_color}
                 key={i}
             />
         );
     }

     // 返回组件数组
     return itemArr;
 }
 dealWithImgUrl(url){
    if (url.search('w.h') == -1){ // 没有找到,正常返回
        return url;
    }else{
        return url.replace('w.h', '120.90');
    }
 }
}

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },

    topViewStyle:{

    },

    bottomViewStyle:{
       // 设置主轴的方向
       flexDirection:'row',
       flexWrap:'wrap'
    }
});
