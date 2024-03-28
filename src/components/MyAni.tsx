import { Animated, StyleSheet, Text, View, NativeModules, NativeModule, PanResponder} from 'react-native'
import {PanGestureHandler } from 'react-native-gesture-handler'
import React, { useEffect, useRef } from 'react'
import {useAnimatedRef,useAnimatedGestureHandler,} from 'react-native-reanimated'

const MyAni = ({index,item}:props) => {
    let re_val = useRef(null)
    let an = new Animated.Value(1)
    let animation =  new Animated.ValueXY()
    // console.log(re_val,"opopop",item.distance)

    // let animated_Styles = {
    //     transform:[{scale:an}],
     
    // }

    const panResponser  = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animation.extractOffset();
      },
      onPanResponderMove: (evt,gestureState)=>{
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr",gestureState,"----------> ",index)
        Animated.event([
          null,
          {
            dx: animation.x,
            dy: animation.y,
          },
        ])
      },
    });
    

  return (
    <Animated.View
  
          style={[styles.box, styles.center]}
        >
          <Text>Box</Text>
        </Animated.View>
   
  )
}

export default MyAni

const styles = StyleSheet.create({
    boxie:{
        height:50,
        width:50,
        borderWidth:1,
        marginVertical:20,
        marginLeft:30
    },
    box: {
        margin: 16,
        border: '1px solid #ccc',
        backgroundColor: '#eee',
      },
      center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})