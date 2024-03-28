import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BoxRatation = () => {

  const rot = useRef(new Animated.Value(0)).current
  const rotIn = useRef(new Animated.Value(0)).current
  const [outHidden,setOutHidden] = useState(false)
  const [inHidden,setInHidden] = useState(false)

  const outerRot = rot.interpolate({
    inputRange:[0,0.5,1],
    outputRange:["0deg","360deg","720deg"],
    extrapolate:"clamp"
  })

  const scaleOut = rot.interpolate({
    inputRange:[0,0.5,1],
    outputRange:[1,0.5,0],
    extrapolate:"clamp"
  })
  const inRot = rotIn.interpolate({
    inputRange:[0,0.5,1],
    outputRange:["0deg","360deg","720deg"],
    extrapolate:"clamp"
  })

  const scalein = rotIn.interpolate({
    inputRange:[0,0.5,1],
    outputRange:[1,0.5,0],
    extrapolate:"clamp"
  })

  const outerRotStyle = {transform:[{rotate:outerRot},{scale:scaleOut}]}
  const inRotStyle = {transform:[{rotate:inRot},{scale:scalein}]}

  const rotOut = ()=>{
    if(!outHidden){
      setOutHidden(true)
      setInHidden(true)
      Animated.parallel([
        Animated.timing(rot,{toValue:1,duration:2000,useNativeDriver:false}),
        // Animated.timing(rotIn,{toValue:1,duration:2000,useNativeDriver:false})
      ]).start()
    return
    }
    setOutHidden(false)
    setInHidden(false)
    Animated.parallel([
      Animated.timing(rot,{toValue:0,duration:2000,useNativeDriver:false}),
      // Animated.timing(rotIn,{toValue:0,duration:2000,useNativeDriver:false})
    ]).start()
    return
  }

  const rotInF = ()=>{
          if(!inHidden){
            setInHidden(true)
            Animated.timing(rotIn,{toValue:1,duration:2000,useNativeDriver:false}).start()
            return
          }
          setInHidden(false)
          Animated.timing(rotIn,{toValue:0,duration:2000,useNativeDriver:false}).start()
          return
  }

  return (
    <View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <View>

      <Animated.View renderToHardwareTextureAndroid={true} style={[outerRotStyle,{height:250,width:250,backgroundColor:"#8893f7",justifyContent:"center",alignItems:"center",marginTop:50,borderRadius:30}]}>
        <Animated.View renderToHardwareTextureAndroid={true}  style={[inRotStyle,{height:100,width:100,backgroundColor:"#5565fa",borderRadius:30}]}>

        </Animated.View >
      </Animated.View >

      <TouchableOpacity style={{marginTop:100}} onPress={()=>rotOut()}>
        <Text>Hide outer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}} onPress={()=>rotInF()}>
        <Text>Hide inner</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default BoxRatation

const styles = StyleSheet.create({})