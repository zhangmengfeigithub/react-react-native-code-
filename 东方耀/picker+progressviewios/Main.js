/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    Picker,
    View,
    ProgressViewIOS
    } from 'react-native';



 export default class DongFang1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      language:null
    };
  }


  //箭头函数 ES6

  render() {

    return (

        <View style={[styles.flex,{marginTop:45}]}>

<Text style={styles.welcome}>ProgressViewIOS使用实例</Text>
           <ProgressViewIOS style={styles.progressView} progress={0.3}/>
           <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2}/>
           <ProgressViewIOS style={styles.progressView} progressTintColor='red' trackTintColor='black' progress={0.4}/>
           <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={0.6}/>
           <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={0.8}/>
           <ProgressViewIOS style={styles.progressView} progressTintColor='red' progressViewStyle='bar' progress={0.5}/>

          <Text>Picker组件</Text>

          <Picker
              selectedValue={this.state.language}
              onValueChange={lang => this.setState({language: lang})}
              mode="dialog"
             
              >

            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="C语言" value="c" />
            <Picker.Item label="PHP开发" value="php" />
          </Picker>

          <Text>{this.state.language}</Text>




        </View>

    );
  }


}




const styles = StyleSheet.create({





  flex:{
    flex:1,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
   },
   progressView: {
    marginTop: 20,
    marginLeft:10,
    marginRight:10,
   }

});


