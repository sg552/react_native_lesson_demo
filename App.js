import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from 'screens/Home'
import AboutUs from 'screens/AboutUs'
import SayHi from 'screens/SayHi'
import BlogList from 'screens/BlogList'
import ShowImage from 'screens/ShowImage'
import ViewComponent from 'screens/ViewComponent'
import StateDemo from 'screens/StateDemo'
import AutoStorageDemo from 'screens/AutoStorageDemo'
import ManualStorageDemo from 'screens/ManualStorageDemo'
import I18nDemo from 'screens/I18nDemo'
import ReduxDemo from 'screens/ReduxDemo'

// Redux
import { connect } from 'react-redux'
import { increaseCount } from './redux_demo/action_creators'

const myNavigator = createStackNavigator(
  {
    Home: Home,
    AboutUs: AboutUs,
    SayHi: SayHi,
    BlogList: BlogList,
    ShowImage: ShowImage,
    ViewComponent: ViewComponent,
    StateDemo: StateDemo,
    AutoStorageDemo: AutoStorageDemo,
    ManualStorageDemo: ManualStorageDemo,
    I18nDemo: I18nDemo,
    ReduxDemo: ReduxDemo
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(myNavigator)
