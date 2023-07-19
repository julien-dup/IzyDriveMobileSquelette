import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Button, ScrollView, FlatList, StyleSheet , TextInput} from 'react-native'

const image = {uri: 'https://img.freepik.com/photos-gratuite/essai-routier-berline-sport-bleue-route_114579-4055.jpg?size=626&ext=jpg'};




const LogScreen = ({navigation}) => {

    return (
        <View style = {styles.background}
        >
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            <Text style ={{marginTop: 50, color: "white", fontSize: 32}}>Bienvenue sur IzyDrive</Text>
            <View style ={{marginTop: 50}}>
            <View style={{display : 'flex' , justifyContent : 'center', alignItems: 'center'}}>
            <Text style ={{marginTop: 50, color: "white", fontSize: 24 ,justifyContent: 'center'}}>Identifiant :</Text>
            </View>
            
                <TextInput
                style={styles.input}
                >
                </TextInput>
                <View style ={{marginTop: 50}}></View>
                <View style={{display : 'flex' , justifyContent : 'center', alignItems: 'center'}}>
                <Text style ={{marginTop: 50, color: "white", fontSize: 24 }}>Mot de passe :</Text>
                </View>
                <TextInput
                style={styles.input}
                >
                </TextInput>
                
            </View>
            
            
            </ImageBackground>
            
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
                style ={{color: "white" ,fontSize: 24}}>Valider</Text>
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
    },
    image : {
      marginTop: 50,
    },
    containImage : {
       width : 150,
       height: 150
    }
})