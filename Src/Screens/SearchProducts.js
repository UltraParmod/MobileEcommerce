import {Alert, FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import {AllProductsApi} from '../Apis/AllProductsApi';
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import filter from 'lodash.filter';

export default function SearchProducts() {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          marginVertical: hp(1),
          paddingVertical: hp(1),
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,.3)',
          borderRadius: wp(2),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: wp(15),
            borderWidth: 1,
            marginHorizontal: wp(2),
            borderColor: 'rgba(0,0,0,.3)',
            borderRadius: wp(2),
            paddingVertical: hp(0.5),
          }}>
          <Image
            source={{uri: item.image}}
            style={{width: '100%', height: hp(8)}}
            resizeMode="center"
          />
        </View>
        <View style={{flex: 1, paddingBottom: hp(0)}}>
          <Text
            numberOfLines={1}
            style={{
              width: '80%',
              fontWeight: '500',
              color: Colors.Black,
              fontSize: hp(2.1),
            }}>
            {item.title}
          </Text>
          <Text
            style={{fontWeight: '400', color: Colors.Black, fontSize: hp(2)}}>
            {item.category}
          </Text>

          <Text
            style={{
              fontWeight: '800',
              verticalAlign: 'bottom',
              flexDirection: 'column',
              flex: 1,
              color: Colors.Primary,
              fontSize: hp(2),
            }}>
            ₹ {item.price}
          </Text>
        </View>
      </View>
    );
  };

  
  const [searchData,setSearchData]=useState('')
  const filteredData = filter(AllProductsApi, item =>
    item.title.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.White,
        paddingHorizontal: wp(4),
      }}>
        <View style={{borderWidth:1,borderColor:'rgba(0,0,0,.5)',height:hp(6.6),paddingHorizontal:wp(2),marginTop:hp(2),marginBottom:hp(1),borderRadius:wp(3)}}>
            <TextInput clearButtonMode='always' value={searchData} onChangeText={(text)=>setSearchData(text)} placeholder='Search..' style={{padding:0,height:'100%',flex:1}} placeholderTextColor={Colors.Black}/>
        </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <View style={{marginBottom: hp(4)}}></View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
