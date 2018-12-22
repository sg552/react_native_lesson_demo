import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class Home extends React.Component{
  static navigationOptions = {
    title: "Home"
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <Button
        title = "click and jump"
        onPress = { () =>
          navigate('AboutUs', { name: 'Siwei'})
        }
      />
    )
  }
}
