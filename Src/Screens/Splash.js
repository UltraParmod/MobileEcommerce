import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { hp } from '../Utils/Responsive'
import Colors from '../Utils/Colors'
import StatusBarr from '../Components/StatusBarr'

export default function Splash() {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
        navigation.replace('Home')
    },2000)
  },[])
  return (
    <View style={{backgroundColor:Colors.Primary,flex:1,justifyContent:'center',alignItems:'center'}}>
      <StatusBarr backgroundColor={Colors.Primary}/>
      <Text style={{fontSize:hp(3),color:Colors.White}}>Mobile E-commirce </Text>
    </View>
  )
}

const styles = StyleSheet.create({})