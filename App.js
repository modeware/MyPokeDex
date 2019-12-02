import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import PokemonDetailsScreen from './screens/PokemonDetailsScreen';
import SearchScreen from './screens/SearchScreen';

import store from './redux/store'
import {Provider}  from 'react-redux'
import {connect} from 'react-redux'
const PokeStackNavigator=createStackNavigator(
  {
  
  PokeHome:HomeScreen,
  PokemonDetails:PokemonDetailsScreen,
  SearchScreen:SearchScreen
},
  {
    initialRouteName:'PokeHome'
  
}
)

const SettingsTab=createStackNavigator(
  {
  
  Settings:SettingsScreen,

}
)

const TabNavigator=createBottomTabNavigator({

  Home:PokeStackNavigator,
  Settings:SettingsTab,
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor:"black",
      style:{
        backgroundColor:"red",
      },
      labelStyle: {
        fontSize: 20,
        margin: 0,
        padding: 0,
      },
    }
  }  
  )



const AppContainer=createAppContainer(TabNavigator)

export default class App extends React.Component{
  render(){
      return (
        <Provider store={store}>   
             <AppContainer screenProps={{color:store.getState().darkMode[0].mode}}/>
        </Provider>

      );

          }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
