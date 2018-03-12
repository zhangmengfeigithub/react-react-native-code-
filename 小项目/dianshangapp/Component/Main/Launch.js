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
  NavigatorIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Main from './Main.js'
export default class Launch extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <Image source={require('../img/launchimage.png')} style={{flex:1}}>

       </Image>
       
      </View>
    );
  }
  componentDidMount(){
      setTimeout(() => {
        this.props.Navigator.replace({
            component:Main,
            title:Main
        })
      }, 2000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginTop: 300,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
