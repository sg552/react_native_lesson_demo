import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native'

export default class MyFavorateBooks extends Component{
  constructor(props){
    super(props)
    this.state = {
      isToChange: false
    }
  }
  change = () => {

    // 由于 state变量的每次发生变化，都是跟之前的有一定的关系的， 所以这里的函数有一个参数: previousState
    this.setState(previousState => (
      {
        isToChange: !previousState.isToChange
      }
    ))
  }

  // 为了演示方便，我没有把下面的代码做重构， 直接用最原始的方式来表现了。
  render(){
    if(!this.state.isToChange){
      return(
        <View>
          <Text>早上起来， 拥抱太阳 </Text>
          <Button
            title="看下一句歌词"
            onPress={this.change}
            />
        </View>
      )
    }
    else{
      return(
        <View>
          <Text>让身体充满， 灿烂的阳光！ </Text>
          <Button
            title="看前一句歌词"
            onPress={this.change}
            />
        </View>
      )
    }
  }
}
