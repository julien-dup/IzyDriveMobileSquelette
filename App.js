import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState, useEffect } from 'react'
import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";
import { NavigationContainer } from '@react-navigation/native';
import GalerieScreen from './src/screens/GalerieScreen';
import TabBar from './src/navigation/TabBar';

import Toto1 from './src/screens/Toto1';


const App = () => (

 <NavigationContainer>

 <TabBar/>

 </NavigationContainer>
)

export default App