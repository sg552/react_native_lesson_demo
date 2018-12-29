/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 以下为 为调用Redux 而新增的代码
// 这句话虽然没有被显示调用，但是不加会报错， 在 const myProvider那里。
import React from 'react'
import configureStore from './redux_demo/store'
import { Provider } from 'react-redux'
const store = configureStore()
const myProvider = () => {

  // 这里要记得使用 return , 否则会报错：
  // 网上这个例子是错的：
  // 参考：https://stackoverflow.com/questions/49075731/invariant-violation-app-nothing-was-returned-from-render-this-usually-me?rq=1
  return(
    <Provider store = {store} >
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => myProvider);
