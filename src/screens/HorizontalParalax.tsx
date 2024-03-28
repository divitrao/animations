import { StyleSheet, Text, View, Animated, ScrollView, Dimensions } from 'react-native'
import React, { useRef } from 'react'

const HorizontalParalax = () => {

    const paralx = useRef(new Animated.Value(0)).current
    const {width,height} = Dimensions.get("window")

  return (
    <View>
      <ScrollView 
      pagingEnabled
      horizontal
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: paralx } } }],
        { useNativeDriver: false }
      )}
      >
        {[1,2,3].map((item,index)=>{
            const getInter = (paral,i) =>{
                console.log(width,"]]",i)
                const input = [(i-1)*width,i*width,(i+1)*width]
                const outRange = i===0?[0,0,150]:[-300,0,150]
                return paral.interpolate({inputRange:input,outputRange:outRange,extrapolate:"clamp"})
                // return paral.interpolate({input,outRange,extrapolate:"clamp"})
            }
            console.log(getInter(paralx,index))
            const animatedStle = {transform:[{translateX:getInter(paralx,index)}]}
            return(
                <View key={index} style={{width:width,height:height,overflow:"hidden"}}>
                    <Animated.Image 
                    source={require("../assets/images/er.jpg")}
                    style={[{height:null,width:null,flex:1},animatedStle]}
                    resizeMode={"cover"}
                    />
                </View>
            )
        })}
        </ScrollView>
    </View>
  )
}

export default HorizontalParalax

const styles = StyleSheet.create({})