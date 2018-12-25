import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button, Alert} from 'react-native'
import { AsyncStorage } from "react-native"

export default class AutoStorageDemo extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: ''
    }
    this.setStateAndVisitTimes()
  }

  // 初始化 计数器
  setStateAndVisitTimes = async () => {
    count = parseInt(await AsyncStorage.getItem("count")  || 0 ) + 1
    this.setState({
      count: count
    })
    await AsyncStorage.setItem("count", count + "")
  }

  render() {
      return(
        <View>
          <Text>这是您的第{this.state.count}次访问本页面 </Text>
        </View>
      )
  }
}
