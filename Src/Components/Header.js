import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VectorIcon from '../Utils/VectorIcon';
import Colors from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import { useNavigation } from '@react-navigation/native';

const iconsSize = hp(3);
export default function Header() {
    const navigation=useNavigation()
  return (
    <View style={{paddingHorizontal: wp(4),backgroundColor:Colors.White}}>
          {/* first part notifaction cart search  */}
          {/* ........................Importent very ###################################################### */}
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: hp(1),
          paddingBottom:hp(0)
        }}>
        <Text
          style={{fontSize: hp(2.5), fontWeight: '600', color: Colors.Black}}>
          All Products
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{padding: wp(1)}}>
            <VectorIcon
              name={'search1'}
              type={'AntDesign'}
              size={iconsSize}
              color={Colors.Black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: wp(1)}}>
            <VectorIcon
              name={'hearto'}
              type={'AntDesign'}
              size={iconsSize}
              color={Colors.Black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: wp(1)}}>
            <VectorIcon
              name={'bell-o'}
              type={'FontAwesome'}
              size={iconsSize}
              color={Colors.Black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: wp(1)}}>
            <VectorIcon
              name={'shoppingcart'}
              type={'AntDesign'}
              size={iconsSize}
              color={Colors.Black}
            />
          </TouchableOpacity>
        </View>
      </View> */}
          {/* Second part menu  */}
      <View style={{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       backgroundColor:Colors
      }}>
      <TouchableOpacity 
        onPress={()=>navigation.openDrawer()}
      style={{padding: wp(1),paddingLeft:0}}>
            <VectorIcon
              name={'menu'}
              type={'Feather'}
              size={iconsSize}
              color={Colors.Black}
            />
          </TouchableOpacity>
      <Text style={{fontSize:hp(3),textAlign:'center',color:Colors.Black,marginVertical:hp(1),fontWeight:'bold'}}> ᴍᴏʙɪʟᴇ ᴇ-ᴄᴏᴍᴍᴇʀɪᴄᴇ</Text>
      <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
