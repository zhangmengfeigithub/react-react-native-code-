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
  ListView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class List1 extends Component<Props> {
  constructor(props) {
    super(props);//这一句不能省略，照抄即可
    this.state = {
        dataSource:new ListView.DataSource({
            rowHasChanged:(row1,row2)=> row1 !== row2,
        }),
    };
}
componentWillMount() {
  this.dsfetchData();
}

dsfetchData(){
  this.setState({
      dataSource: this.state.dataSource.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
  });
}

render(){

  return(
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{backgroundColor:'blue',height:50}}>{rowData}</Text>}
          style={styles.listView}
          />
  );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
},
thumbnail: {
    width: 53,
    height: 81,

},
//让rightContainer在父容器中占据Image之外剩下的全部空间。

rightContainer: {
    flex: 1,
},
title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
},
year: {
    textAlign: 'center',
},

});


