import React from 'react'
import { View, Text, Image, TouchableOpacity, Button, ScrollView, FlatList, StyleSheet , TextInput} from 'react-native'




const LogScreen = ({navigation}) => {

    return (
        <View style = {styles.background}
        >
            <Text style ={{marginTop: 50, color: "white", fontSize: 32}}>Bienvenue sur IzyDrive</Text>
            <View style ={{marginTop: 50}}>
                <TextInput
                style={styles.input}
                >
                </TextInput>
                <View style ={{marginTop: 50}}></View>
                <TextInput
                style={styles.input}
                >
                </TextInput>
            </View>
            <View
            style ={{flex: 1, alignItems: "center", justifyContent:"center"}}
            >
            <TouchableOpacity
            onPress={
                () => navigation.navigate("TabBar")
            }
            style = {styles.button}
            >
                <Text
                style ={{color: "white"}}>Valider</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogScreen

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
    input : {
        alignItems: "center",
        width: 300,
        height: 50,
        justifyContent: "center", 
        backgroundColor: "white" 
    },
    background : {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#9ab7ff"
    }
    
})