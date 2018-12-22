import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class Home extends React.Component{
  static navigationOptions = {
    title: "Home"
  }

  render(){
    return (
      <Button
        title = "click and jump"
        onPress = { () =>
          this.props.navigation.navigate('AboutUs', { name: 'Siwei'})
        }
      />
    )
  }
}
