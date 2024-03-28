import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

const HearBeat = () => {

    const her = useRef(new Animated.Value(1)).current

    const handleAnimation = ()=>{

        Animated.loop(
            Animated.sequence([
                Animated.timing(her,{
                    toValue:2,
                    duration:200,
                    useNativeDriver:false
                }),
                Animated.timing(her,{
                    toValue:3,
                    duration:200,
                    useNativeDriver:false
                }),
                Animated.timing(her,{
                    toValue:0,
                    duration:400,
                    useNativeDriver:false
                })
            ])
        ).start()

       
    }

    const animatedStyle = {
        transform:[{
            scale:her
        }]
    }
  return (
    <View style={{borderWidth:1,flex:1,alignContent:"center",justifyContent:"center",alignItems:"center"}}>
    <Animated.View renderToHardwareTextureAndroid={true} style={[styles.heart,animatedStyle]}>
      <View renderToHardwareTextureAndroid={true} style={[styles.leftHeart, styles.heartShape]} />
      <View renderToHardwareTextureAndroid={true} style={[styles.rightHeart, styles.heartShape]} />
    </Animated.View>
    <TouchableOpacity style={{height:20,width:20,backgroundColor:"orange"}} onPress={()=>handleAnimation()} />
    </View>
  )
}

export default HearBeat

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
    backgroundColor: '#6427d1',
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