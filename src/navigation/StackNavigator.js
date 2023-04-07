
import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Toto1 from '../screens/Toto1';
import Toto2 from '../screens/Toto2';
import LogScreen from '../screens/LogScreen';
import MyAccount from '../screens/MyAccount';
import GalerieScreen from '../screens/GalerieScreen';
import TabBar from './TabBar';





const Stack = createStackNavigator();


const StackNavigator = () => (
   
            <Stack.Navigator initialRouetName="LogScreen"
            screenOptions={{
                headerShown: false
              }}>
                 <Stack.Screen name="LogScreen" component={LogScreen} />
                <Stack.Screen name="toto1" component={Toto1} />
                <Stack.Screen name="toto2" component={Toto2} />            
                <Stack.Screen name="MyAccount" component={MyAccount} />
                <Stack.Screen name="GalerieScreen" component={GalerieScreen} />
                <Stack.Screen name="TabBar" component={TabBar} />
            </Stack.Navigator>
   
    )


export default StackNavigator