/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';

const {width,height} =Dimensions.get('window')
const thirdwidth=width/3
const imagewidth=thirdwidth-10*2
const imageheight=imagewidth/0.697

const styles = StyleSheet.create({
  root:{
    marginTop:20,
    width:imagewidth,
    marginLeft: 15,
  },
  image:{
    width:imagewidth,
    height:imageheight
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5
  },
  stars:{
    width:10,
    height:10,
  },
  starsWrapper:{
    flexDirection: 'row',
  }

});
const renderStars=(stars)=>{
    const total = 5
    let full, half, empty
    full=parseInt(stars[0])-1
    if(stars=='00'){
      return;
    }
    if(stars[1]=='5'){
      full++
      half=0
      empty=total - full
    }else{
      half = 1
      empty =total - full - half
    }
    const results = []
    let i 
    for (i=0;i<full;i++){
      results.push(
        <Image
        key={i}
        style={styles.stars}
        source={require('../img/star-full.png')}
        ></Image> 
      )
    }
    if(half){
      results.push(
        <Image
        key={i}
        style={styles.stars}
        source={require('../img/star-half.png')}
        ></Image> 
      )
    }
    for (let j=0;j<empty;j++){
      results.push(
        <Image
        key={i+j+1}
        style={styles.stars}
        source={require('../img/star-empty.png')}
        ></Image> 
      )
    }
    return (
      <View style={styles.starsWrapper}>
        {results}
      </View>  
    )
}
const Item =(props)=>{
  const{title,image,stars,rating,onPress} = props
  
    return (
      <TouchableOpacity style={styles.root} onPress={onPress}>
        <Image
        source={{uri:image}}
        style={styles.image}
        />
        <Text
          numberOfLines={1}
          style={styles.title}>
          {title}
        </Text>
        {renderStars(stars)}

      </TouchableOpacity>
    )
}


export default Item
