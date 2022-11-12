import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Swipe from './swipe';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Container = () => {
  return (
    <View style={s.main} >
    <View style={s.inner} >
    <Swipe/>
    </View>
    </View>
  )
}

export default Container;

const s = StyleSheet.create({
    main: {
        backgroundColor:"ivory",
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH
    },
    inner:{
        borderBottomLeftRadius: 20,
        backgroundColor:"ivory",
        height: SCREEN_HEIGHT-80,
        width: SCREEN_WIDTH,
        borderBottomRightRadius:20
    }
})