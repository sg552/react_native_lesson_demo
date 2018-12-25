import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native'
import { AsyncStorage } from "react-native"

export default class StorageDemo extends Component{

  constructor(props){
    super(props)
    AsyncStorage.setItem("visitTimes", 100)
    this.state = {
      isLoaded: false,
      visitTimes: 0
    }
  }

  readData = async () => {
    try{
      const result = await AsyncStorage.getItem("visitTimes")
      this.setState(
        {
          visitTimes: result,
          isLoaded: true
        }
      )
      console.info("== loaded, this.state: ")
    }catch(error){
      console.error(error)
    }
  }

  render() {
    this.readData()

    if(this.state.isLoaded){
      return(
        <View>
          <Text>Loaded!  </Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text>Loading... </Text>
        </View>
      )
    }

  }
}
