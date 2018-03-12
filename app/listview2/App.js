

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image,
} from 'react-native';
import Car from './Car.json'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    var getSectionData=(dataBlob,sectionID)=>{
      return dataBlob[sectionID]
    }
    var getRowData=(dataBlob,sectionID,rowID)=>{
      return dataBlob[sectionID+':'+rowID]
    }
    this.state={
      dataSource: new ListView.DataSource({
        getSectionData: getSectionData, // 获取组中数据
        getRowData: getRowData, // 获取行中的数据
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged:(s1, s2) => s1 !== s2
      })
    }
  }


  componentDidMount(){
    this.loadDataFromJson()
  }
  loadDataFromJson(){
    var jsonData = Car.data
    var dataBlob = {}
    sectionIDs = []
    rowIDs = []
    cars =[]
    for(var i = 0;i<jsonData.length;i++){
      sectionIDs.push(i)
      dataBlob[i] = jsonData[i].title
      cars= jsonData[i].cars
      rowIDs[i] =[]
      for (var j=0;j<cars.length;j++){
        rowIDs[i].push(j);
        dataBlob[i+':'+j] = cars[j]
      }
    }
  this.setState({
    dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
  })
  }
  
  render(){
    return(
        <View style={styles.outerViewStyle}>
            {/*头部*/}
            <View style={styles.headerViewStyle}>
                <Text style={{color:'white', fontSize:25}}>SeeMyGo品牌</Text>
            </View>
            {/*ListView*/}
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            />
        </View>
    );
 }

 // 每一行的数据
 renderRow(rowData){
     return(
         <TouchableOpacity activeOpacity={0.5}>
             <View style={styles.rowStyle}>
                <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}/>
                <Text style={{marginLeft:5}}>{rowData.name}</Text>
             </View>
         </TouchableOpacity>
     );
 }

 // 每一组中的数据
 renderSectionHeader(sectionData, sectionID){
     return(
         <View style={styles.sectionHeaderViewStyle}>
            <Text style={{marginLeft:5, color:'red'}}>{sectionData}</Text>
         </View>
     );
 }




}

const styles = StyleSheet.create({
  outerViewStyle:{
    //占满窗口
      flex:1
  },

  headerViewStyle:{
      height:64,
      backgroundColor:'orange',

      justifyContent:'center',
      alignItems:'center'
  },

  rowStyle:{
      // 设置主轴的方向
      flexDirection:'row',
      // 侧轴方向居中
      alignItems:'center',
      padding:10,

      borderBottomColor:'#e8e8e8',
      borderBottomWidth:0.5
  },

  rowImageStyle:{
      width:70,
      height:70,
  },

  sectionHeaderViewStyle:{
      backgroundColor:'#e8e8e8',
      height:25,

      justifyContent:'center'
  }
});
