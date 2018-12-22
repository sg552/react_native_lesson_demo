import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native'

class Book extends Component{
  render (){
    return(
      <View style={{alignItems: 'center'}}>
        <Text> 《{this.props.name}》
        </Text>
      </View>
    )
  }
}

export default class MyFavorateBooks extends Component{

  render(){
    return(
      <View>
        <Book name="三体1:" />
        <Book name="三体2：黑暗森林" />
        <Book name="三体3：死神永生" />
      </View>
    )
  }
}
