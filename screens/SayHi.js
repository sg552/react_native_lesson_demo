import React,  { Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native'

export default class SayHi extends React.Component{

  render(){
    const name = this.props.navigation.getParam('name', '')
    return (
      <View>
        <Text>
        你好啊， {name }
        </Text>
      </View>

    )
  }

}
