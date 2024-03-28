import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const LoadingAnimation = () => {

  const SIZE = 100

  const styleRef = useRef(new Animated.Value(0)).current

  const [isRunning,setIsrunnig] = useState(false)

  const butPress = ()=>{
    console.log("dsds")
    if(isRunning){
        styleRef.stopAnimation()
        setIsrunnig(false)
        return
    }
    setIsrunnig(true)
    Animated.loop(
        Animated.sequence([
            Animated.timing(styleRef,{
                toValue:1,
                duration:1000,
                useNativeDriver:false
            }),
            Animated.timing(styleRef,{
                toValue:0,
                duration:1000,
                useNativeDriver:false
            })
        ])
    ).start()
    // Animated.timing(styleRef,{
    //     toValue:1,
    //     duration:400,
    //     useNativeDriver:false
    // }).start(()=>{
    //     Animated.timing(styleRef,{
    //         toValue:0,
    //         duration:600,
    //         useNativeDriver:false
    //     }).start()
    // })
  }

  const borderwidthAni = styleRef.interpolate({
    inputRange:[0,1],
    outputRange:[SIZE/2,0]
  })

  const heightAni = styleRef.interpolate({
    inputRange:[0,1],
    outputRange:[SIZE,0]
  })
  const widthAni = styleRef.interpolate({
    inputRange:[0,1],
    outputRange:[SIZE,0]
  })
  const borderwidthAnii = styleRef.interpolate({
    inputRange:[0,1],
    outputRange:[SIZE/10,0]
  })

  const shadowAni = styleRef.interpolate({
    inputRange:[0,1],
    outputRange:[SIZE/2,0]
  })


  const borderwiSt = {borderRadius:borderwidthAni,height:heightAni,width:widthAni,borderWidth:borderwidthAnii}

  const secondStyle = {borderWidth:borderwidthAnii,elevation:shadowAni}
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"}}>
        <Animated.View style={[borderwiSt,{backgroundColor:"#fff",
        borderColor:"#000",shadowColor:"#orange",elevation:10,shadowOpacity:1,position:"absolute"
       }]}  />
       <Animated.View style={[secondStyle,{borderRadius:SIZE/2,height:SIZE,width:SIZE},{backgroundColor:"#fff",
        borderColor:"#000",shadowColor:"#orange",shadowOpacity:1,position:"absolute",left:0
       }]}  />

        <TouchableOpacity onPress={()=>butPress()} style={{backgroundColor:"#fff",marginTop:300}}>
                <Text>Press </Text>
        </TouchableOpacity>
    </View>


  )
}

export default LoadingAnimation

const styles = StyleSheet.create({})