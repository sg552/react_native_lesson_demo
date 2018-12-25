import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button, Alert} from 'react-native'
import { AsyncStorage } from "react-native"

export default class ManualStorageDemo extends Component{
  // 定义一个 class variable 
  key = "manual_count"
  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      manual_count: ''
    }
  }

  // 没有使用箭头符号， 那么在View中就要  .bind(this) , 否则会报错  this.setState 找不到
  async readData () {
    try{
      const manual_count = await AsyncStorage.getItem(this.key) || '0'
      if(isNaN(manual_count)){
        manual_count = 1
      }
      this.setState({
        isLoaded: true,
        manual_count: manual_count
      })
    }catch(error){
      console.error(error)
    }

  }

  // 使用箭头符号，就可以在view中调用的时候，不写  .bind(this)
  mySaveThenAlert = async () => {
  // async mySaveThenAlert(){
    try{
      await AsyncStorage.setItem(this.key, 888 +"")
      const manual_count = await AsyncStorage.getItem(this.key)
      this.setState({
        isLoaded: true,
        manual_count: manual_count
      })
      Alert.alert("您设置成的手动干预的计数器: " + manual_count)
    }catch(error){
      console.error(error)
    }
  }

  render() {

    if(this.state.isLoaded){
      return(
        <View>
          <Text>页面加载成功!</Text>
          <Text>访问次数： {this.state.manual_count} </Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text>尚未加载成功，请点击下面的按钮进行手动加载 ... </Text>
          <Button
            title="手动加载"
            onPress={this.readData.bind(this)} />
          <Button
            title="手动干预：修改访问次数为 + 888"
            onPress={this.mySaveThenAlert} />
        </View>
      )
    }

  }
}
