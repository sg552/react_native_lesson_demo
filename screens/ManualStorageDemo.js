    import React,  { Component} from 'react';
    import {Image, Platform, StyleSheet, Text, View, Button, Alert} from 'react-native'
    import { AsyncStorage } from "react-native"

    export default class ManualStorageDemo extends Component{

      constructor(props){
        super(props)

        this.setStateAndVisitTimes()
        this.state = {
          isLoaded: false
        }
      }

      // 初始化 计数器
      setStateAndVisitTimes = async () => {
        count = parseInt(await AsyncStorage.getItem("count")  || 0 ) + 1
        this.setState({
          isLoaded: true,
          count: count
        })
        await AsyncStorage.setItem("count", count + "")
      }

      async mySaveThenAlert(){
        try{
          await AsyncStorage.setItem("count", 888 +"")
          const value = await AsyncStorage.getItem("visitTimes")
          Alert.alert("visitTimes: " + value)
        }catch(error){
          console.error(error)
        }
      }

      render() {

        if(this.state.isLoaded){
          return(
            <View>
              <Text>Loaded!  </Text>
              <Text>value is: {this.state.count} </Text>
            </View>
          )
        }else{
          return(
            <View>
              <Text>Before loading visitTimes... </Text>
              <Button
                title="Let's load the data!"
                onPress={this.readData} />
              <Button
                title="save to 888!"
                onPress={this.mySaveThenAlert} />
            </View>
          )
        }

      }
    }
