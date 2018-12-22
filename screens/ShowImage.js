import React,  { Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native'

export default class ShowImage extends React.Component{

  render(){
    let pic = {
      url: "http://siweitech.b0.upaiyun.com//image/1104/fruit_apple.jpg"
    }
    return (
      <Image source={pic} />
    )
  }

}
