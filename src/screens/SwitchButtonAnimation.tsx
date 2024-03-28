import { Animated, StyleSheet, Text, TouchableOpacity, View,NativeModule, NativeModules } from 'react-native'
import React, { useRef, useState } from 'react'

const SwitchButtonAnimation = () => {

    const mod = NativeModules.CUSTOM_SCREEN

    const [switchOn,setSwitchOn] = useState(false)

    const scaleWidth = 150
    const ballradius = 25
    const innerCircle = 30


    const switchAni = useRef(new Animated.Value(0)).current

    const onSwitchPress = ()=>{
        if(!switchOn){
        Animated.timing(switchAni,{toValue:1,duration:1000,useNativeDriver:false}).start(()=>{
          mod.goToNextScreen()
        })
        setSwitchOn(true)
        return
        }
        Animated.timing(switchAni,{toValue:0,duration:1000,useNativeDriver:false}).start()
        setSwitchOn(false)


    }

    const transalateBut = switchAni.interpolate({
        inputRange:[0,1],
        outputRange:[-25,scaleWidth-ballradius]
    })

    const OpacityAni = switchAni.interpolate({
        inputRange:[0,1],
        outputRange:[0.3,1]
    })
    const signStyle = switchAni.interpolate({
        inputRange:[0,1],
        outputRange:[innerCircle,0]
    })

    const widthSytle = {width:signStyle}

    const transastyle = {transform:[{translateX:transalateBut}]}
    const OpacityStyle = {opacity:OpacityAni}

  return (
    <View style={{flex:1}}>
      <View style={{borderWidth:1,justifyContent:"center",alignItems:"center",flex:1,}}>
        {/* <Animated.View  style={[{backgroundColor:"#454545",height:30,width:scaleWidth,justifyContent:"center",borderRadius:20},OpacityStyle]}>
            <TouchableOpacity activeOpacity={1} onPress={()=>onSwitchPress()}>
            <Animated.View style={[{height:50,width:50,backgroundColor:"#fff",borderRadius:25},transastyle]}>

            </Animated.View>
            </TouchableOpacity>
        </Animated.View > */}
       <View style={{height:50,width:scaleWidth,justifyContent:"center",alignItems:"center"}}>
       <Animated.View  style={[{backgroundColor:"#454545",height:30,width:scaleWidth,justifyContent:"center",borderRadius:20,position:"absolute"},OpacityStyle]}/>
       <TouchableOpacity style={{position:"absolute",left:0}} activeOpacity={1} onPress={()=>onSwitchPress()}>
            <Animated.View style={[{height:50,width:50,backgroundColor:"#fff",borderRadius:25,alignItems:"center",justifyContent:"center"},transastyle]}>
                <Animated.View style={[{height:innerCircle,borderRadius:innerCircle/2,borderWidth:5},widthSytle]} />
            </Animated.View>
            </TouchableOpacity>
       </View>
        
      </View>
    </View>
  )
}

export default SwitchButtonAnimation

const styles = StyleSheet.create({})