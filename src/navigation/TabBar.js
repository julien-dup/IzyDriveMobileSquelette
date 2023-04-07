import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-ionicons'
import Reservation from '../screens/Reservation';
import MonCompte from '../screens/MyAccount';
import 'react-native-gesture-handler'
import Toto1 from '../screens/Toto1';
import Toto2 from '../screens/Toto2';



const Tab = createBottomTabNavigator();

const TabBar = () => {

  const [showLabel, setShowLabel] = useState(false); // Etat pour afficher ou masquer le label
  const hideLabel = () => {
    setShowLabel(true);
  }

 
  return (

    <Tab.Navigator
    initialRouteName='Mon Compte'
      screenOptions={({ route }) => ({
        tabBarStyle: {
                  backgroundColor: '#6e64e7',             
                  borderTopColor: '#6e64e7',
                },
                headerShown: false,
                tabBarLabelStyle : {
                  color : 'white'
                },
        // tabBarShowLabel: false,  //permet de cacher le label de l'icône
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Mon Compte') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Mes reservations') {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'User Info') {
            iconName = focused ? 'home' : 'home-outline';
          }   else if (route.name === 'Toto2') {
            iconName = ''
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color='white'} />
          
        }

      })}
    >
      
      <Tab.Screen name="Mon Compte" component={MonCompte} />
      <Tab.Screen name="Mes reservations" component={Reservation}  />
       <Tab.Screen name="User Info" component={Toto1}    tabBarOptions={{
        showLabel: true, // Afficher les labels par défaut
        tabBarShowLabel: false // Masquer tous les labels
      }}/>
       {showLabel && <Tab.Screen name="Toto2" component={Toto2}  />}
    </Tab.Navigator>
   
   
    
  )
}

export default TabBar