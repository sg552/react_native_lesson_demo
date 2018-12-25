import React,  { Component} from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'

import i18n from '../translation/i18n'

// i18n.defaultLocale = 'zh'
i18n.locale = 'en'

export default class I18nDemo extends React.Component{

  render(){
    return (
      <View>
        <Text>
        I18n Demo
        </Text>
        <Text>
        book: { i18n.t('book', {language: 'zh'}) }
        </Text>
        <Text>
        apple: {  i18n.t('apple', {language: 'en'}) }
        </Text>
      </View>
    )
  }
}
