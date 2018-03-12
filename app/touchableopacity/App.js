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
  TouchableOpacity,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      title:'点击事件'
    }
  }
  activeEvent(event){
    // 更新状态机
     this.setState({
        title: event,
        person:'李四'
     })

    // 拿到View
    this.refs.topView
    this.refs.event
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>this.activeEvent('点击')}
        onPressIn={()=>this.activeEvent('按下')}
        onPressOut={()=>this.activeEvent('抬起')}
        onLongPress={()=>this.activeEvent('长按')}
        >
        <View style={styles.innerViewStyle}>
              <Text ref="event">常用的事件</Text>
            </View>
        </TouchableOpacity>

        <View>
              <Text>{this.state.title}</Text>
          </View>
      </View>
    );
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
