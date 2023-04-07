
import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/navigation/TabBar';
import LogScreen from './src/screens/LogScreen';
import StackNavigator from './src/navigation/StackNavigator';



const App = () => (

 <NavigationContainer>

 <StackNavigator/>

 </NavigationContainer>
)

export default App