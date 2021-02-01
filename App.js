import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MakeStory from './screens/makeStory'
import Read from './screens/readStory'
export default class App extends React.Component {
  render()
  {
  return (
 
      <AppContainer/>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: MakeStory},
  Search: {screen: Read},
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    
    if(routeName === "Transaction"){
      return(
        <Image
        source={require("./assets/write.png")}
        style={{width:40, height:40}}
      />
      )
      
    }
    else if(routeName === "Search"){
      return(
        <Image
        source={require("./assets/read.png")}
        style={{width:40, height:40}}
      />)
      
    }
  }
})
}
);
const AppContainer =  createAppContainer(TabNavigator);