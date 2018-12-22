import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native'

export default class ShowImage extends React.Component{

  render(){
    let pic = {
      uri: "http://siweitech.b0.upaiyun.com//image/1104/fruit_apple.jpg"
    }
    return (
      <Image source={pic} style={{width: 300, height: 400}}/>
    )
  }
}
