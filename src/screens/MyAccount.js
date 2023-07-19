import React from 'react'
import { View, Text, Image, TouchableOpacity, Button, ScrollView, FlatList , StyleSheet} from 'react-native'




const MonCompte = () => {

    return (
        <View style = {styles.background}>
            <Text style ={{color: "white"}}>Welcome to mon compte</Text>
        </View>
  
    )
}

export default MonCompte

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