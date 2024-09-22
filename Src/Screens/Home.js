import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import {AllProductsApi} from '../Apis/AllProductsApi';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Header from '../Components/Header';
import VectorIcon from '../Utils/VectorIcon';
import StatusBarr from '../Components/StatusBarr';
import DrawerContent from '../Components/DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastProvider, useToast} from 'react-native-toast-notifications';
import SingleProducts from './SingleProducts';
// import SingleProducts from './SingleProducts';

// Start ..............createDrawerNavigator ########################################
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="SingleProducts"
          component={SingleProducts}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
// Start ..............createDrawerNavigator ########################################
export const Ratingg = () => {
  return (
    <VectorIcon type={'Entypo'} name={'star'} color={'#ffd250'} size={17} />
  );
};

// AsyncStorage.clear
export function Home() {
  const navigation=useNavigation()
  // const toast = useToast();
  const toast = useToast();

  const [count, setCount] = useState(0);
  const wishlist = async id => {
    // console.log('data...', values)
    valuesWish = [];
    let values = await AsyncStorage.getItem('wishItems');

    values = JSON.parse(values);
    console.log(values);

    let valuesWish = [...new Set(values)];

    // const array=[]
    if (valuesWish.length > 0) {
      valuesWish.push(id);

      let cnt = Object.keys(valuesWish).length;
      // useEffect(() => {
      //   const data = (showToast = () => {
      //     toast.show('This is a toast message!', {
      //       type: 'success', // or 'danger', 'warning'
      //       duration: 3000, // duration in milliseconds
      //       animationType: 'slide-in', // animation type
      //     });
      //   });
      //   data();
      // }, []);
      // if()
      setCount(cnt);
      console.log('data', cnt);

      await AsyncStorage.setItem('CountWishlist', JSON.stringify(cnt));

      console.log('id', valuesWish);

      try {
        await AsyncStorage.setItem('wishItems', JSON.stringify(valuesWish));
      } catch (error) {
        console.log(error);
      }
    } else {
      let array = [];
      array.push(id);

      try {
        await AsyncStorage.setItem('wishItems', JSON.stringify(array));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const renderItem = ({item, index,}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          marginVertical: hp(1),
          alignItems: 'center',
          borderRadius: wp(2),
          marginHorizontal: wp(2),
          minHeight: hp(30),
          maxHeight: hp(40),
          paddingHorizontal: wp(2),
          paddingVertical: hp(1),
        }}>
        <View style={{width: wp(39)}}>
          <View
            style={{
              zIndex: 999,
              position: 'absolute',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: wp(10),
                height: wp(10),
                paddingHorizontal: wp(0.5),
                borderRadius: wp(10),
                backgroundColor: 'green',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontWeight: '600',
                color: Colors.White,
                fontSize: hp(1.5),
              }}>
              10% off
            </Text>
            <TouchableOpacity
              onPress={() => wishlist(item?.id)}
              style={{
                borderColor: 'rgba(0,0,0,.5)',
                padding: wp(1),
              }}>
              <VectorIcon
                name={'hearto'}
                type={'AntDesign'}
                size={20}
                color={Colors.Black}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={{uri: item?.image}}
              style={{width: '100%', minHeight: hp(18)}}
              resizeMode="center"
            />
          </View>

          <View style={{marginTop: hp(0.5)}}>
            <Text
              style={{
                width: '80%',
                alignSelf: 'center',
                color: Colors.Black,
                fontWeight: '600',
                fontSize: hp(2),
              }}
              numberOfLines={1}>
              {item?.title}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: Colors.Black,
                fontWeight: '600',
                fontSize: hp(2),
              }}
              numberOfLines={1}>
              ₹ {item?.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            bottom: hp(1.5),
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ratingg />
            <Ratingg />
            <Ratingg />
            <Ratingg />
            <Ratingg />
          </View>

          <TouchableOpacity
            onPress={()=>navigation.navigate('SingleProducts',{item:item})}
          
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,.5)',
              backgroundColor: 'green',
            }}>
            <VectorIcon
              type={'Ionicons'}
              name={'add'}
              color={Colors.White}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: Colors.White, flex: 1}}>
      <StatusBarr backgroundColor={Colors.White} barStyle={'dark-content'} />
      <Header />

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={AllProductsApi}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: wp(2),
          }}
          ItemSeparatorComponent={() => <View style={{width: 0}}></View>}
          ListFooterComponent={() => (
            <View style={{marginBottom: hp(15)}}></View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
