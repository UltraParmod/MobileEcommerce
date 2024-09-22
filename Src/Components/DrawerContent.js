import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePath from '../Utils/ImagePath';
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function DrawerContent(props) {
  return (
    <View
      style={{backgroundColor: 'red', flex: 1, backgroundColor: Colors.White}}>
      <ImageBackground
        source={ImagePath.UserProfile}
        style={{
          height: hp(25),
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="cover">
        <View
          style={{
            width: wp(26),
            height: wp(26),
            borderRadius: wp(100),
            backgroundColor: Colors.White,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ImagePath.Drawerbackground}
            style={{width: wp(25), height: wp(25), borderRadius: wp(25)}}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
