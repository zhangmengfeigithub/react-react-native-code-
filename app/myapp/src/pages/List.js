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

import Item from '../components/item.js'
import movies from '../../movies.json'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const api='https://api.douban.com/v2/movie/in_theaters'
export default class List extends Component<{}> {
    static navigationOptions = {
        title: '上映',
      };
  state={
    movies:movies.subjects,
    refreshing:false
  }
  refreshing=false
  start=0
  count=12
  fetchData = (start = 0,count = 12)=>{
    if(this.refreshing){
      return;
    }
    this.setState={
      refreshing:true
    }
    this.refreshing=true
    return fetch(`${api}?start=${start}&count=${count}`)
    .then((reaponse)=>response.text)
    .then((responseText)=>{
      const json = JSON.parse(responseText)
      this.setState({
        // movies:json.subjects,
        refreshing:false
      }) 
      this.refreshing=false
      return json
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  freshData=()=>{
    this.fetchData().then(json=>{
      this.setState({
        movies:json.subjects
      })
    })
  }
  fetchMore= async ()=>{
    const json=await this.fetchData(this.start,this.count);
    this.start+=this.count-1
    this.setState({
      movies:this.state.movies.concat(json.subjects)
    })
  }
  componentDidMount(){
    this.fetchData()
  }
  render(){
    const { navigate } = this.props.navigation;
    const {movies,refreshing}=this.state
    return (
        
      <View>
      <FlatList 
      onRefresh={this.fetchData}
      onEndReached={this.fetchMore}
      refreshing={refreshing}
      onEndReachedThreshold={0}
      style={styles.row}
      numColumns={3}
      data={movies}
      keyExtractor={item=>item.id}
      renderItem={({item})=>{
        return (
          <Item 
          title={item.title} 
          image={item.images.medium}
          stars={item.rating.stars}
          rating={item.rating.average}
          onPress={()=>navigate('detail',{
              id:item.id
          })}
          />
        )}
      }
     
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row:{
   
    paddingHorizontal:15 ,
  }
});
