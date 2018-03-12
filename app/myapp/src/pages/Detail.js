import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Detail extends Component<{}> {
    static navigationOptions = {
        title: '详情页',
      };
  render(){
    const {movies,refreshing}=this.state
    const {state,goBack} =this.props.navigation
    return (
      <View>
      <Text>电影详情页</Text>  
      <Text>电影id:{state.params.id}</Text>
      <Text onPress={()=>goBack()}>返回</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row:{
   
    paddingHorizontal:15 ,
  }
});
