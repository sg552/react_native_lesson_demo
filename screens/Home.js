import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class Home extends React.Component{
  static navigationOptions = {
    title: "Home"
  }

  render(){
    const message = "明日ReactNative 大神就要诞生了！"
    return (
      <View>
        <Text>
          {message}
        </Text>
        <Button
          title = "click and jump"
          onPress = { () =>
            this.props.navigation.navigate('AboutUs')
          }
        />
        <Button title = "传递参数到新页面: （打个招呼) "
          onPress = {
            () => this.props.navigation.navigate("SayHi", { name: 'Siwei'})
          }
        />
        <Button title = "显示图片页面 "
          onPress = {
            () => this.props.navigation.navigate("ShowImage")
          }
        />
        <Button title = "View Component的例子 "
          onPress = {
            () => this.props.navigation.navigate("ViewComponent")
          }
        />
        <Button title = "State的例子 "
          onPress = {
            () => this.props.navigation.navigate("StateDemo")
          }
        />
        <Button title = "进入到siwei.me文章列表"
          onPress = {
            () => this.props.navigation.navigate("BlogList")
          }
        />

        <Button title = "自动的StorageDemo"
          onPress = {
            () => this.props.navigation.navigate("AutoStorageDemo")
          }
        />

        <Button title = "手动的StorageDemo"
          onPress = {
            () => this.props.navigation.navigate("ManualStorageDemo")
          }
        />

        <Button title = "国际化 i18n"
          onPress = {
            () => this.props.navigation.navigate("I18nDemo")
          }
        />
      </View>
    )
  }
}
