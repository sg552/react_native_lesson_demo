import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from 'screens/Home'
import AboutUs from 'screens/AboutUs'
import SayHi from 'screens/SayHi'
import BlogList from 'screens/BlogList'
import ShowImage from 'screens/ShowImage'
import ViewComponent from 'screens/ViewComponent'

const myNavigator = createStackNavigator(
  {
    Home: Home,
    AboutUs: AboutUs,
    SayHi: SayHi,
    BlogList: BlogList,
    ShowImage: ShowImage,
    ViewComponent: ViewComponent
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(myNavigator)
