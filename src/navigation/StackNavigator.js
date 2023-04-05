
import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Toto1 from '../screens/Toto1';
import Toto2 from '../screens/Toto2';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '../navigation/TabBar';


const Stack = createStackNavigator();


const StackNavigator = () => (
   
            <Stack.Navigator initialRouetName="toto1">
                <Stack.Screen name="toto1" component={Toto1} />
                <Stack.Screen name="toto2" component={Toto2} />
            </Stack.Navigator>
   
    )


export default StackNavigator