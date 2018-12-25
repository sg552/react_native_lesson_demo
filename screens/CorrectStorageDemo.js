import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native'
import { AsyncStorage } from "react-native"

export default class StorageDemo extends Component{

  constructor(props){
    super(props)
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

    if(this.state.isLoaded){
      return(
        <View>
          <Text>Loaded! {this.state.visitTimes} </Text>
          <Button
           onPress={() =>  {
            AsyncStorage.setItem("visitTimes", 100)
            this.setState({isLoaded: false})
            }}
           title="Set Storage Item"
           />
        </View>
      )
    }else{
      return(
        <View>
          <Button
          onPress={this.readData}
          title="Load from async storage"></Button>
        </View>
      )
    }

  }
}
