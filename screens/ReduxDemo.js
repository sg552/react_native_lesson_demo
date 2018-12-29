import React,  { Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native'

// 1. 导入相关的文件
import {connect } from 'react-redux'
import {increaseCount} from '../redux_demo/action_creators'

class ReduxDemo extends Component{

  // 4. 定义被触发的事件。
  clickButton = () => {
    // 4.1 该方法来自于下面的 mapDispatchToProps
    // 在 6.2 步骤中
    this.props.increaseCountByOne()
  }

  render(){
    return(
      <View>
        <Text>本例子演示Redux在React Native中的使用： 保存数据和状态。 {"\n"}
        1. 点击之后，计数器 + 1 {"\n"}

        </Text>
        { /* 3. 在 View中增加对应的事件。 */}
        <Button
          title="点击计数！"
          onPress={this.clickButton}
          />
        <Text>
        {  console.info("== this.props")  }
        {  console.info(this.props)  }
          您点击了：{this.props.count}  {"\n"} （请使用 根目录下的 "AppWithRedux.js "进入到本页面。 否则页面看不到效果。（只能在console 中看到效果) ）
        </Text>
      </View>
    )
  }
}

// 5. 把state 映射到 props中。
const mapStateToProps = state => {

  console.info("== state.count: " , state)   // '== state.count: ', { countReducer: { count: 0 } } 
  return {
    // 5.1 务必注意，这里是 store.countReducer.count  不是 state.count
    count: state.countReducer.count
  }
}
// 6. 把 dispatch 映射到 props中
const mapDispatchToProps = dispatch => {
  return {
    // 6.1 定义了一个方法，该方法会在 Component中被调用
    increaseCountByOne: () => {
      // 6.2 increaseCount() 方法来自于 action_creators.js中定义的
      dispatch(increaseCount())
    }
  }
}

// 7. 让上面两个映射生效。  废代码，没意义，但是没它不行。 就得这样写。
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
