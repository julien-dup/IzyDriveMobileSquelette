import * as React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import MyAccount from '../screens/MyAccount';
import GalerieScreen from '../screens/GalerieScreen';
import Toto1 from '../screens/Toto1';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  
  return (

   
       
    <Tab.Navigator
    initialRouteName='Profil'
      screenOptions={({ route }) => ({
        tabBarStyle: {
                  backgroundColor: '#6e64e7',             
                  borderTopColor: '#6e64e7',
                },
                headerShown: false,
                tabBarLabelStyle : {
                  color : 'white'
                },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Mon Compte') {
            iconName = 'home'
          } else if (route.name === 'Images') {
            iconName = 'list'
          }
          else if (route.name === 'toto') {
            iconName = 'list'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color='white'} />
          
        }

      })}
    >
      
      <Tab.Screen name="Mon Compte" component={GalerieScreen} />
      <Tab.Screen name="Mes reservations" component={MyAccount}  />
      <Tab.Screen name="User Info" component={StackNavigator}  />
      
    </Tab.Navigator>
   
   
    
  )
}

export default TabBar