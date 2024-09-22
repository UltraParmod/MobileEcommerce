import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Src/Screens/Splash';
import Login from './Src/Screens/Login';
import Signup from './Src/Screens/Signup';
import DashBoard from './Src/Screens/DashBoard';
import Delete from './Src/Screens/Delete';
import Home from './Src/Screens/Home';
import ZPractice from './ZPractice';
import VectorIcon from './Src/Utils/VectorIcon';
import { hp, wp } from './Src/Utils/Responsive';
import SearchProducts from './Src/Screens/SearchProducts';
import Colors from './Src/Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastProvider } from 'react-native-toast-notifications';
import SingleProducts from './Src/Screens/SingleProducts';


const iconsSize = hp(3);
const Stack = createNativeStackNavigator();
export default function App() {
  const [count,setCount]=useState()


  useEffect(() => {
   AsyncStorage.getItem('CountWishlist')
      .then(valuesll => {
        setCount(valuesll)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 
  
  return (
    
    <NavigationContainer>
      <ToastProvider>
      {/* <YourComponent /> */}
   
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        {/* <Stack.Screen name="ZPractice" component={ZPractice} options={{headerShown:false}}/> */}

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SearchProducts" component={SearchProducts} options={{headerShown:false}}/>

        <Stack.Screen 
          options={({navigation})=>({headerShown:true,
            
//  .........................importent ######################################### 

              headerRight:()=>(
                <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: hp(1),
          paddingBottom:hp(0),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('SearchProducts')}
          style={{padding: wp(1)}}>
            <VectorIcon
              name={'search1'}
              type={'AntDesign'}
              size={iconsSize}
              color={Colors.Black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: wp(1)}} 
          >
            <VectorIcon
              name={'hearto'}
              type={'AntDesign'}
              size={iconsSize}
              color={Colors.Black}
            />
              <Text style={{position:'absolute',backgroundColor:Colors.Black,width:wp(4.5),height:wp(4.5),borderRadius:wp(4.5),color:Colors.White,textAlign:'center',verticalAlign:'middle',fontSize:hp(1.5),fontWeight:'600'}}>{count}</Text>
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
      </View>
              ),
              title: 'All Product List',
            })}
        name="Home" component={Home} 
        // options=
        // options={{headerShown:false}}

//  .........................importent ######################################### 

        />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="SingleProducts" component={SingleProducts} options={{headerShown:false}}/>

        
        <Stack.Screen name="Delete" component={Delete} />
      </Stack.Navigator>
      </ToastProvider>
    </NavigationContainer> 
  )
}

const styles = StyleSheet.create({})