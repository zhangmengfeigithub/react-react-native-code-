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
  NavigatorIOS,
  Dimensions
  
} from 'react-native';
const width=Dimensions.get('window').width
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import More from '../More/More'
import Mine from '../Mine/Mine'
export default class Main extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      selectedTabItem:0
    }
  }
  render() {
    return (
      <View style={styles.container}>
                    <TabBarIOS
                        style={{height:49, width: width}}
                        tintColor="green"
                        barTintColor="black"
                        translucent={false}
                    >
                        <TabBarIOS.Item
                            systemIcon="bookmarks"  // 系统图标(bookmarks)
                            onPress={() => {this.setState({selectedTabItem:0})}}
                            selected={this.state.selectedTabItem == 0}
                        >
                           <Home></Home>
       
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="contacts"  // 系统图标(contacts)
                            onPress={() => {this.setState({selectedTabItem:1})}}
                            selected={this.state.selectedTabItem == 1}
                        >
                            <NavigatorIOS
                            initialRoute={{
                                component: Shop,    // 要跳转的页面
                                title:'商家',    // 跳转页面导航栏标题
                               
                            }}
                            configureScene = {(route)=>{
                              return NavigatorIOS.SceneConfigs.FloatFromBottom
                            }}
                            renderScene={(route,navigator)=>{
                              let Home = route.component
                              return <Home  {...route.params} navigator={navigator}/>
                            }}
                            
                            style={{flex:1}}  // 此项不设置,创建的导航控制器只能看见导航条而看不到界面
                        />
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="downloads"  // 系统图标(downloads)
                            onPress={() => {this.setState({selectedTabItem:2})}}
                            selected={this.state.selectedTabItem == 2}
                        >
                         <Mine></Mine>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="favorites"  // 系统图标(favorites)
                            onPress={() => {this.setState({selectedTabItem:3})}}
                            selected={this.state.selectedTabItem == 3}
                        >
                          <More></More>
                        </TabBarIOS.Item>
                        
                    </TabBarIOS>
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
