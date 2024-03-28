import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { SQL_DATABASE } from '../constants/databaseSetup'
import sqlTableName from '../constants/sqlTableName'
import { PropsUserForm } from '../types/navigationTypes'

const FormScreen = ({navigation}:PropsUserForm) => {
  const first_name = useRef<HTMLInputElement>(null)
  const last_name = useRef<HTMLInputElement>(null)
  const address = useRef<HTMLInputElement>(null)

  const onSubmit = ()=>{
    const query = `INSERT INTO ${sqlTableName.USER_LIST_TABLE}(first_name,last_name,location) VALUES(?,?,?)`
    SQL_DATABASE.execute(query,[first_name.current?.value,last_name.current?.value,address.current?.value])
    navigation.goBack()
  }
  return (
    <View style={{marginTop:25}}>
      <TextInput ref={first_name} onChangeText={(e)=>first_name?.current?first_name.current.value=e:null} placeholder='first name' style={{borderColor:"#000000",borderWidth:1,marginVertical:5}} />
      <TextInput ref={last_name}  onChangeText={(e)=>last_name?.current?last_name.current.value=e:null} placeholder='last name' style={{borderColor:"#000000",borderWidth:1,marginVertical:5}} />
      <TextInput ref={address} onChangeText={(e)=>address?.current?address.current.value=e:null} placeholder='address' style={{borderColor:"#000000",borderWidth:1,marginVertical:5}} />
    
      <TouchableOpacity onPress={()=>onSubmit()} style={{backgroundColor:"orange",marginTop:20,justifyContent:"center",alignItems:"center",width:200,alignSelf:"center",borderRadius:10,height:50,}}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({})