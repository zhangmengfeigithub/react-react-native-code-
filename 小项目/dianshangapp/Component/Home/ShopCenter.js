/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import CommonCell from './BottomCommonCell'
import Home_D5 from '../../LocalData/XMG_Home_D5.json'
export default class ShopCenter extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
               <CommonCell
                   leftIcon="gw"
                   leftTitle="购物中心"
                   rightTitle='Home_D5.tips'
               />
               <ScrollView
               contentContainerStyle={styles.scrollViewStyle}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               >
                    {this.renderAllItem()}

               </ScrollView>
            </View>
        );
    }
    renderAllItem(){
        // 定义组件数组
        var itemArr = [];
        // 取出数据
        var shopData= Home_D5.data;
        // 遍历
        for (var i=0; i<shopData.length; i++){
           // 取出单个数据
            var data = shopData[i];
           // 创建组件装入数组
            itemArr.push(
                <ShopCenterItem
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName = {data.name}
                    detailurl = {data.detailurl}
                    key={i}
                />
            );
        }
        // 返回
        return itemArr;
    }

   
}

export class ShopCenterItem extends Component {
    render(){
        return(
           <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
               <View style={styles.itemViewStyle}>
                   <Image source={{uri: this.props.shopImage}} style={styles.imageStyle}/>
                   <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                   <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
               </View>
           </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
       marginTop:15
    },
    container: {
        marginTop:15
     },
     welcome: {
         fontSize: 20,
         textAlign: 'center',
         margin: 10,
     },
 
     imageStyle:{
         width:120,
         height:100,
         borderRadius:8
     },
 
     scrollViewStyle:{
         flexDirection:'row',
         backgroundColor:'white',
         padding:10
     },
 
     itemViewStyle:{
         margin:8
     },
 
     shopSaleStyle:{
         // 绝对定位
         position:'absolute',
         left:0,
         bottom:30,
         backgroundColor:'red',
         color:'white',
         padding:2
     },
 
     shopNameStyle:{
         textAlign:'center',
         marginTop:5
     }
});
ShopCenterItem.defaultProps={
    shopImage: '',
            shopSale:'',
            shopName: '',
            detailurl: '',
}


