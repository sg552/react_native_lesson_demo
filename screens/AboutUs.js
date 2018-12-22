import React,  { Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native'

export default class AboutUs extends React.Component{

  render(){
    const {navigate, goBack} = this.props.navigation
    return (
      <View>
        <Text onPress = {() => this.props.navigation.navigate('AboutUs')}
                  >I am AboutUs</Text>
        <Button
          title="再次打开该页面"
          //onPress={() => this.props.navigation.navigate("AboutUs")}
          //onPress={() => this.props.navigation.push("AboutUs")}
          onPress={() => navigate("AboutUs")}
          />

        <Button
          title = '返回上个页面'
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => goBack()}
          />

        <Button
          title = '回到首页'
          onPress={() => this.props.navigation.navigate('Home')}
          />

      </View>

    )
  }

}
