import { Text, View, StyleSheet, TextInput, Animated, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
const NotificationScreen = () => {

const dy_opcity = new Animated.Value(0);


const {width,height} = Dimensions.get('screen')
const dyna_trans = new Animated.Value(width*-1)
const handlePress = ()=>{
    console.log("rrrrrrrrrrrrr")
    Animated.sequence([
    Animated.parallel([
        Animated.timing(dy_opcity,{
            toValue:1,
            duration:800,
            useNativeDriver:false
        }),
        Animated.timing(dyna_trans,{
            toValue:0,
            duration:900,
            useNativeDriver:false
        })
    ]),
    Animated.delay(1500),
    Animated.parallel([
      Animated.timing(dy_opcity,{
        toValue:0,
        duration:800,
        useNativeDriver:false
    }),
    Animated.timing(dyna_trans,{
        toValue:width*2,
        duration:900,
        useNativeDriver:false
    }),
    
    ]),
    Animated.timing(dyna_trans,{
      toValue:width*-1,
      useNativeDriver:false
  })
        
   
    
    ]).start()

    
}

 const dyna_stle = {
    opacity:dy_opcity,
    transform: [
        {
          translateX: dyna_trans,
        },
      ],
 } 

  return (
    <View style={styles.container}>
      <Animated.View
      style={[{ position: "absolute",
      paddingHorizontal: 7,
      paddingVertical: 15,
      left: 0,
      top: 0,
      right: 0,
      backgroundColor: "tomato",},dyna_stle]}
      >

      </Animated.View>
      <TouchableOpacity onPress={()=>handlePress()}>
        <Text>press me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})