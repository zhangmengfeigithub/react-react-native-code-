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
  ScrollView,
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入计时器类库
var TimerMixin = require('react-timer-mixin');

// 引入json数据
var ImageData = require('./ImageData.json');
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
      currentPage: 0
    }
  }
  render(){
    return(
       <View style={styles.container}>
          <ScrollView
              ref="scrollView"
              horizontal={true}
              // 隐藏水平滚动条
              showsHorizontalScrollIndicator={false}
              // 自动分页
              pagingEnabled={true}
              // 当一帧滚动结束
              onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
              // 开始拖拽
              onScrollBeginDrag={this.onScrollBeginDrag}
              // 停止拖拽
              onScrollEndDrag={this.onScrollEndDrag}
          >
            {this.renderAllImage()}
          </ScrollView>
          <View style={styles.pageViewStyle}>
            {/*返回5个圆点*/}
            {this.renderPageCircle()}
          </View> 
       </View>
    );
 }
 renderAllImage(){
  // 数组
  var allImage = [];
  // 拿到图像数组
  var imgsArr = ImageData.data;
  // 遍历
  for(var i=0; i<imgsArr.length; i++){
      // 取出单独的每一个对象
      var imgItem = imgsArr[i];
      // 创建组件装入数组
      allImage.push(
          <Image key={i} source={{uri: imgItem.img}} style={{width:width, height:120}}/>
      );
  }
  // 返回数组
  return allImage;
}
renderPageCircle(){
  // 定义一个数组放置所有的圆点
  var indicatorArr = [];
  var style;
  // 拿到图像数组
  var imgsArr = ImageData.data;
  // 遍历
  for(var i=0; i<imgsArr.length; i++){

     // 判断
     style = (i==this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};

    // 把圆点装入数组
    indicatorArr.push(
        <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
    );
  }
  // 返回
  return indicatorArr;
}
onAnimationEnd(e){
  // 1.求出水平方向的偏移量
  var offSetX = e.nativeEvent.contentOffset.x;

  // 2.求出当前的页数
  var currentPage = Math.floor(offSetX / width);
  // console.log(currentPage);

  // 3.更新状态机,重新绘制UI
  this.setState({
    // 当前的页码
    currentPage: currentPage
  });
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
