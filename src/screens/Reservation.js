import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Reservation = () => {

  

  return (
    <View style = {styles.background}>
      <Text>Welcome to Reservation</Text>
    </View>
  )
}

export default Reservation

const styles = StyleSheet.create ({
  button : {
  backgroundColor: "blue",
  alignItems: "center",
  width: 150,
  height: 50,
  justifyContent: "center", 
  color: "white",
  borderRadius: 15
  },
  background : {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#9ab7ff"
  }
  
})