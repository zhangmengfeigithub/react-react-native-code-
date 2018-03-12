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
  TouchableOpacity,
  Dimensions
} from 'react-native';
const {width}=Dimensions.get('window')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MiddleCommonView extends Component<{}> {
  render() {
    return (
      <TouchableOpacity>
          <View style={styles.container}>
            <View>
            <Text style={[{color:this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
            <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
            </View>
            <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43, resizeMode:'contain'}}></Image>
          </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({



    
    container: {
        backgroundColor:'white',
        width:width * 0.5 - 1,
        height:59,
        marginBottom:1,
        marginRight:1,
 
        // 改变主轴的方向
        flexDirection:'row',
 
        alignItems:'center',
        justifyContent:'space-around'
     },
 
     titleStyle:{
         fontSize:18,
         fontWeight:'bold'
     },
 
     subTitleStyle:{
         color:'gray'
     }
});
MiddleCommonView.defaultProps={
    title:'',
    subTitle: '',
    rightIcon: '',
    titleColor: '',
}
