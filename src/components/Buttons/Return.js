import React from 'react'
import { View, Text, Image, TouchableOpacity, Button, ScrollView, FlatList, StyleSheet } from 'react-native'




const Return = () => {

    return (
        <View>
            <TouchableOpacity style = {styles.button}>
            <Text>Retour</Text>
            </TouchableOpacity>
        </View>
  
    )
}

export default Return

const styles = StyleSheet.create ({
    button : {
    backgroundColor: "blue",
    alignItems: "center",
    width: 150,
    height: 50,
    justifyContent: "center", 
    color: "white",
    borderRadius: 15
    }
})