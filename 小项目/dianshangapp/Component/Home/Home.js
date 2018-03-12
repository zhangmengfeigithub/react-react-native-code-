/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Touch,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView
} from "react-native";


var { width, height } = Dimensions.get("window");
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
import TopView from "./TopView"
import MiddleView from './HomeMiddleView'
import HomeDetail from "./HomeDetail.js";
import MiddleBottomView from './MiddleBottomView.js'
import ShopCeneter from './ShopCenter'
import GeustYouLike from './GeustYouLike'
export default class Home extends Component<{}> {
  rendeNravBar() {
    return (
      <View>
<View style={styles.navBarStyle}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.push({
              component: HomeDetail, // 需要跳转的页面
              title: "HomeDetail" // 跳转页面导航栏标题
            });
          }}
        >
          <Text style={{ color: "white", marginTop: 15 ,fontSize:16}}>广州</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.topInputStyle}
          placeholder="请输入商家，商品"
        />
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity>
            <Image
              source={require("../img/icon_homepage_message.png")}
              style={styles.navRightImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../img/icon_homepage_scan.png")}
              style={styles.navRightImgStyle}
            />
          </TouchableOpacity>
        </View>
       
      </View>
       <ScrollView
       showsVerticalScrollIndicator={false}
       >
       <TopView />
       <MiddleView></MiddleView>
       <MiddleBottomView></MiddleBottomView>
       <ShopCeneter></ShopCeneter>
       <GeustYouLike></GeustYouLike>
     </ScrollView>

      </View>
      
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.rendeNravBar()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8"
  },
  welcome: {
    marginTop: 300,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  navBarStyle: {
    marginTop: 0,
    height: 64,
    backgroundColor: "rgba(255,96,0,1.0)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  topInputStyle: {
    marginTop: 16,
    width: width * 0.7,
    height: 30,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 8
    // marginLeft: 6,
  },
  navRightImgStyle: {
    width: 25,
    height: 25,
    marginLeft: 3
  },
  rightNavViewStyle: {
    flexDirection: "row",
    //   backgroundColor:'blue',
    marginTop: 15
    //   marginLeft:6
  }
});
