/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ListView } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
import List1 from "./List1.js";
// import List2 from './List2.js'
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <List1 />
        {/* <List2></List2> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  listView: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  //让rightContainer在父容器中占据Image之外剩下的全部空间。

  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  }
});
