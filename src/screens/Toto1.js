import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'




const Toto1 = ({navigation}) => {

    return (
        <View
        style ={{flex: 1}}>
            <Text>Welcome to TOTO1</Text>
            <View
            style ={{flex: 1, alignItems: "center", justifyContent:"center"}}
            >
            <TouchableOpacity
            onPress={
                () => navigation.navigate("toto2")
            }
            style = {styles.button}
            >
                <Text
                style ={{color: "white"}}>Vers ToTo 2</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Toto1

const styles = StyleSheet.create ({
    button : {
    backgroundColor: "blue",
    alignItems: "center",
    width: 150,
    height: 50,
    justifyContent: "center",
    color: "white"
    }
})