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
  TabBarIOS,
  
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
      selectedTabBarItem: 'home'
     }
  }
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.headerViewStyle}>
       <Text style={{color:'white'}}>Tab选项卡的切换</Text>
       </View>
       <TabBarIOS
      barTintColor='orange'
      tintColor = 'purple'
       >
         <TabBarIOS.Item
          systemIcon="downloads"
          title="张三"
          selected={this.state.selectedTabBarItem=='home'}
          onPress={()=>this.setState({ selectedTabBarItem: 'home'})}
          >
           <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                   <Text>首页</Text>
               </View>
         </TabBarIOS.Item>
         <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTabBarItem=='second'}
          onPress={()=>this.setState({ selectedTabBarItem: 'second'})}
         >
            <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                    <Text>第二页</Text>
                </View>
         </TabBarIOS.Item>
         <TabBarIOS.Item
          systemIcon="downloads"
          selected={this.state.selectedTabBarItem=='three'}
          onPress={()=>this.setState({ selectedTabBarItem: 'three'})}
         >
           
           <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                    <Text>第三页</Text>
                </View>
         </TabBarIOS.Item>
         <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTabBarItem=='four'}
          onPress={()=>this.setState({ selectedTabBarItem: 'four'})}
         >
           <View style={[styles.commonViewStyle,{backgroundColor:'purple'}]}>
                    <Text>第四页</Text>
                </View>
         </TabBarIOS.Item>
       </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerViewStyle:{
    height:64,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
 },

 commonViewStyle:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'

}
  
});
