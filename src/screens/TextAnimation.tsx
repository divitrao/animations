import { StyleSheet, Text, View, Animated, Dimensions, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TextAnimation = () => {

const {width} = Dimensions.get("window")
const [isExpanded, setIsExpanded] = useState(false)

const myAnimation = useRef(new Animated.Value(0)).current

const upperView = myAnimation.interpolate({
    inputRange:[0,0.5],
    outputRange:[100,width-40],
    extrapolate:"clamp"
})

const TextViewWidth = myAnimation.interpolate({
    inputRange:[0.7,1],
    outputRange:[0,width-40],
    extrapolate:"clamp"
})

const opacityBar = myAnimation.interpolate({
    inputRange:[0,1],
    outputRange:[0,1],
    extrapolate:"clamp"
})

const opacityBarStyle = {
    opacity:opacityBar
}
const borderTabBarRadius = myAnimation.interpolate({
    inputRange:[0,1],
    outputRange:[10,0],
    extrapolate:"clamp"
})

const rotateWholeView = myAnimation.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','360deg'],
    extrapolate:"clamp"
})

const rotateMyView = {
transform:[{rotate:rotateWholeView}]
}

const opacityTextView = myAnimation.interpolate({
    inputRange:[0.7,1],
    outputRange:[0,1],
    extrapolate:"clamp"
})

const heightInterPOlcate = myAnimation.interpolate({
    inputRange:[0.7,1],
    outputRange:[0,150],
    extrapolate:"clamp"
})

const heightTextStyle = {
    height:heightInterPOlcate,
    opacity:opacityTextView,
    width:TextViewWidth
}

const expand = ()=>{
let toValue
if(isExpanded){
    toValue = 0
}
else{
    toValue = 1
}
Animated.timing(myAnimation,{
    toValue,
    duration:1000,
    useNativeDriver:false
}).start(()=>{
    setIsExpanded(!isExpanded)
})
}

  return (
    <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
      <Animated.View  style={[{width:upperView,borderWidth:0,height:30,flexDirection:"row",alignItems:"center",backgroundColor:"#6d9ff2",borderTopLeftRadius:10,borderTopRightRadius:10},{borderBottomRightRadius:borderTabBarRadius,borderBottomLeftRadius:borderTabBarRadius},rotateMyView]} >
        <Animated.View style={[{flexDirection:"row"},opacityBarStyle]}>
        <Text style={{marginRight:5,marginLeft:5}}>B</Text>
        <Text style={{marginRight:5}}>I</Text>
        <Text style={{marginRight:5}}>U</Text>
        </Animated.View>
        <View style={[{flex:1,alignItems:"center",borderWidth:0,justifyContent:"center"},StyleSheet.absoluteFill]}>
            <TouchableOpacity onPress={()=>expand()}>
            <Text>WRITE</Text>
            </TouchableOpacity>
        </View>
        <Animated.View style={[{flexDirection:"row",flex:1,justifyContent:"flex-end"},opacityBarStyle]}>
        <Text style={{marginRight:5}}>B</Text>
        <Text style={{marginRight:5}}>I</Text>
        <Text style={{marginRight:5}}>U</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View style={[{height:150,overflow:"hidden",borderWidth:0,backgroundColor:"#dfe7f5",borderBottomLeftRadius:10,borderBottomRightRadius:10},heightTextStyle]}>
        <TextInput style={[{overflow:"hidden"}]} numberOfLines={20} placeholder='type' />
      </Animated.View>
    </View>
  )
}

export default TextAnimation

const styles = StyleSheet.create({})