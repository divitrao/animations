import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { GestureHandlerRootView, TapGestureHandler, Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated'

const DoubleTap = () => {

    const scale = useSharedValue(1)

    const doubleaTappa = Gesture.Tap().onEnd((e,suc)=>{
        console.log("][][][")
    })

    const doubletap = useCallback(()=>{
        console.log("popopoo")
        scale.value = withSpring(1,undefined,(isFinished)=>{
            if(isFinished){
                scale.value = withDelay(100,withSpring(0))
            }
        })
    },[])

    const animationStlyes = useAnimatedStyle(()=>{
        return {transform:[{scale:Math.max(scale.value,0)}]}
    })

  return (
    

        // <TapGestureHandler  numberOfTaps={2} maxDelayMs={250} onHandlerStateChange={()=>console.log("][][]")} onActivated={()=>console.log("[p[p[p[p")}>
            <GestureDetector gesture={doubleaTappa}>
            <Animated.View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ImageBackground source={(require("../assets/images/er.jpg"))}  style={{height:400,width:"100%",justifyContent:"center",alignItems:"center"}}>
                <Animated.View renderToHardwareTextureAndroid={true} style={[styles.heart,]}>
                    <View renderToHardwareTextureAndroid={true} style={[styles.leftHeart, styles.heartShape]} />
                    <View renderToHardwareTextureAndroid={true} style={[styles.rightHeart, styles.heartShape]} />
                </Animated.View>
            </ImageBackground>
            </Animated.View>
            </GestureDetector>
        // </TapGestureHandler>

   
  )
}

export default DoubleTap

const styles = StyleSheet.create({
    heart: {
        width: 50,
        height: 50,
        // backgroundColor: 'red',
        // position: 'absolute',
        // transform: [{ rotate: '-45deg' }],

      },
      heartShape: {
        width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'red',
      },
      leftHeart: {
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10,
        transform: [{ rotate: '-45deg' }],
        left: 5,
      },
      rightHeart: {
        // borderTopRightRadius: 10,
        // borderBottomRightRadius: 10,
        transform: [{ rotate: '45deg' }],
        right: 5,
      },
})