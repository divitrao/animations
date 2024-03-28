import { Animated, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import MyAni from '../components/MyAni'

const AnimationScreens = () => {
    const flatListRef = useRef(null);
    // console.log(flatListRef,"ddddddddddddddddddd")
  return (
    <View>
      <Animated.FlatList 
      ref={flatListRef}
      data={Array(25).fill(1)}
      onScroll={(event) => {
        // const scrollX = event.nativeEvent.contentOffset.x;
        // const screenWidth = Dimensions.get('window').width;
        // const centerX = scrollX + screenWidth / 2;
    
        // // Calculate distance for each child
        // const items = flatListRef.current.getVisibleItems();
        // items.forEach((item) => {
        //   const itemX = item.viewPosition.x;
        //   const distance = Math.abs(centerX - itemX);
        //   // Pass distance to the component
        //   item.item.distance = distance;
        // });
      }}
      renderItem={({item,index,onLayout})=>{
        // console.log(onLayout,"iii")
        return(
           <MyAni index={index} item={item}/>
        )
      }}
      
      />
    </View>
  )
}

export default AnimationScreens

const styles = StyleSheet.create({})