/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import List from './src/pages/List.js'
import Detail from './src/pages/Detail.js'
import Cinemas from './src/pages/Cinemas.js'
import Mymovies from './src/pages/MyMovies.js'
const MyTab = TabNavigator({
  List: {screen: List},
  Cinemas:{screen:Cinemas},
  Mymovies:{screen:Mymovies},
},{
  tabBarPosition:'bottom',
  tabBarOptions:{
    activeTintColor:'#0390eb',
    inactiveTintColor:'#fff',
    labelStyle:{
      fontSize:20,
      marginBottom:16
    },
    style:{
      backgroundColor:'#222'
    }
  }
}
);
const App = StackNavigator({
  MyTab: {screen: MyTab},
  Detail: {screen: Detail},
});
export default App;