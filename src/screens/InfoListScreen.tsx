import { FlatList, StyleSheet, Text, TouchableOpacity, View, Animated,TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SQL_DATABASE } from '../constants/databaseSetup'
import sqlTableName from '../constants/sqlTableName'
import { PropsUserInfoList } from '../types/navigationTypes'
import navigationPaths from '../constants/navigationPaths'
import {useIsFocused} from '@react-navigation/native';
import { SQLrowUserInfo } from '../types/rowsType'

const InfoListScreen = ({navigation}:PropsUserInfoList) => {

    const [dataStored,setDataStored] = useState<SQLrowUserInfo>()

    let isFocused = useIsFocused()
    useEffect(()=>{
      let {rows} = SQL_DATABASE.execute(`select * from ${sqlTableName.USER_LIST_TABLE}`)
      console.log(rows,"hjhjh")
      setDataStored(rows)
    },[isFocused])
    
    const colorBack = new Animated.Value(0)
    const scaleAni = new Animated.Value(1)
    const transl = new Animated.Value(0)

    const backInterpolate = colorBack.interpolate({
      inputRange:[0,1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })
    const boxie = {
      backgroundColor: backInterpolate,
      transform:[{scale:scaleAni},{translateY:transl}]
    }
    const toTheForm = ()=>{
        navigation.navigate(navigationPaths.FORM_FILL)
    }
    // const animated_ref = new Animated.Value(1)
    // const trans_ref = new Animated.Value(0)
    // const xInterpolate = animated_ref.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ["0deg", "360deg"],
    // });

    // const yInterpolate = animated_ref.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: ["0deg", "180deg", "360deg"],
    // });
    // const animatedStyles = {
    //   transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }],
    // };

    const Sc = ()=>{
      Animated.parallel([
        Animated.timing(colorBack,{
          toValue:1,
          duration:3000,
          useNativeDriver:false
        }),
        Animated.timing(scaleAni,{
          toValue:2,
          duration:2000,
          useNativeDriver:false
        }),
        Animated.timing(transl,{
          toValue:100,
          duration:2000,
          useNativeDriver:false
        })
      ]).start(
        ()=>{
          Animated.parallel([
            Animated.timing(colorBack,{
              toValue:0,
              duration:3000,
              useNativeDriver:false
            }),
            Animated.timing(scaleAni,{
              toValue:0.5,
              duration:2000,
              useNativeDriver:false
            }),
            Animated.timing(transl,{
              toValue:0,
              duration:2000,
              useNativeDriver:false
            })
          ]).start()
        }
      )
      // console.log("oioioi")
      // Animated.timing(animated_ref, {
      //   toValue: 1,
      //   duration: 1500,
      //   useNativeDriver:false
      // }).start(() => {
      //   animated_ref.setValue(0);
      // });
      //   Animated.timing(animated_ref,{
      //     toValue:-2,
      //     duration:1500
      //   }).start()
        
      //   Animated.timing(trans_ref,{
      //     toValue:100,
      //     duration:1500
      //   }).start()
    }
  return (
    <View style={{flex:1}}>
      {dataStored?.length===0?<View style={{alignItems:"center",justifyContent:"center",flex:1}}><Text>No Data available</Text></View>:
      <View>
        
        <FlatList 
        
        data={dataStored?._array}
        renderItem={({item})=>{
          return(
            <View>

              <Text>{item.first_name}</Text>
            </View>
          )
        }}
        />
        </View>}
        <TouchableOpacity onPress={()=>toTheForm()} style={{height:50,width:50,borderRadius:25,backgroundColor:"black",position:'absolute',
    bottom:50,right:20}}>

        </TouchableOpacity>

        <View style={[styles.container,{borderWidth:2}]}>
          <TouchableOpacity onPress={()=>Sc()} >
            <Animated.View style={[styles.box]}>
              <Text>hi</Text>
            </Animated.View>
          </TouchableOpacity>
        <TouchableWithoutFeedback style={{borderWidth:60,backgroundColor:"red",height:50,width:50}} onPress={()=>Sc()}>
          <Animated.View style={[styles.box, boxie]}>
            <Text style={styles.text}>Hello Parallel</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default InfoListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  }
})