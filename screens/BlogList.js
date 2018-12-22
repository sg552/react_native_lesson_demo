import React,  { Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native'

export default class BlogList extends React.Component{

  // 1. 要定义好这个 constructor
  constructor(props){
    super(props)

    // 2. 增加这个state , 用来标记页面是否在加载中
    this.state = {
      isLoading: true
    }
  }

  // 3. 定义这个钩子方法，
  componentDidMount(){
    // 3.1 发起http 请求
    return fetch("http://siwei.me/interface/blogs/all")
      // 3.2 第一次，把response 转换成json
      .then((response) => {
        let result = response.json()
        console.log(result)
        return result
      })
      // 3.2 把值赋到本地的state变量中
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.blogs
        }, function(){} )  // 3.3 这个函数表示没有正常返回时候的处理
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // 4. 开始渲染
  render(){

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
            <Text>{item.id}, {item.title}</Text>
          }
          keyExtractor={({id}, index) => id }
        />

      </View>
    )
  }

}
