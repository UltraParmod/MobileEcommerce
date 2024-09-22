import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { configureProps } from 'react-native-reanimated/lib/typescript/ConfigHelper'
import { hp, wp } from '../Utils/Responsive'
import Colors from '../Utils/Colors'
import { jsiConfigureProps } from 'react-native-reanimated/lib/typescript/core'

export default function SingleProducts({route}) {
const navigation=useNavigation()
const allData = route?.params?.item;


// console.log( allData)/

    // useEffect(()=>{
    //     const unsubscribe=navigation.addListener('focus',()=>{
            
    //     })
    //     return unsubscribe
    // },[navigation])

  return (
    <View style={{flex:1,backgroundColor:Colors.White}}>
      <View style={{borderBottomWidth:1,height:hp(35),borderColor:'rgba(0,0,0,.2)',paddingVertical:hp(2)}}>
            <Image source={{uri:allData?.image}} style={{width:'100%',height:'100%'}} resizeMode='center' />
      </View>
      <View style={{margin:wp(4)}}>
      <Text style={{color:Colors.Black,fontSize:hp(2.2),fontWeight:'500',width:'80%'}} numberOfLines={2}>{allData?.title}</Text>
      <Text style={{color:Colors.Black,fontSize:hp(1.8),fontWeight:'500',}} numberOfLines={2}>{allData?.category}</Text>
      <Text style={{color:Colors.Black,fontSize:hp(1.3),fontWeight:'500',marginVertical:hp(1)}} numberOfLines={2}>{allData?.description}</Text>
      <Text style={{color:Colors.Black,fontSize:hp(2.3),fontWeight:'500',width:'80%'}} numberOfLines={2}>₹ {allData?.price}</Text>
      </View>

      <View style={{flexDirection:'column',justifyContent:'flex-end',flex:1,marginBottom:hp(2)}}>
        <TouchableOpacity style={{
              backgroundColor:Colors.Primary,
              justifyContent:'center',
              alignItems:'center',
              width:'90%',
              alignSelf:'center',
              paddingVertical:hp(1.5),
              borderRadius:wp(10)
            
        }}>
            <Text style={{color:Colors.White,fontSize:hp(2.2),fontWeight:'500',textTransform:'uppercase'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})