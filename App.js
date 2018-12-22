import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from 'screens/Home'
import AboutUs from 'screens/AboutUs'

const myNavigator = createStackNavigator({
  Home: Home,
  AboutUs: AboutUs
})

const AppContainer = createAppContainer(myNavigator)

export default class App extends React.Compoent {
  render(){
    return <AppContainer />
  }
}
