import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const MyLister = () => {

    let f= useRef()

    useEffect(()=>{
        console.log(f.current.measureLayout(f.current,(x,y,width,height,l,j)=>{
            console.log(l,j)
        }))
    },[])
  return (
    <View ref={f} onLayout={(e)=>{console.log(e.nativeEvent.layout.y,"ooo6766")}} style={{height:100,width:"100%",borderWidth:1,margin:5}}>
      <Text>MyLister</Text>
    </View>
  )
}

export default MyLister

const styles = StyleSheet.create({})