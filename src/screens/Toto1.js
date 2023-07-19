import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState, useEffect } from 'react'
import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";



const Toto1 = ({navigation}) => {

  const Permission = async () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
      title: "Storage Permission",
      message: "Storage Permission is needed to access your photos",
      buttonPositive: "OK"
    }).then(() => {
      console.log("Storage Permission Granted");
    }
    ).catch(err => {
      console.log("Storage Permission Denied");
    }
    );
  }
  
    const  picture = async () => {
    await CameraRoll.getPhotos({
      first: 10,
      assetType: 'Photos',
    })
    .then(r => {
      setPhotos(r.edges)
     })
     .catch(err => {
      console.log(err);
      }
    );
  }
      
    const  [image, setImage] = useState("https://image.noelshack.com/fichiers/2019/30/2/1563894770-artworks-000134228809-cfnoad-t500x500.jpg");
    const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
  
    picture()
    Permission();
  
    setImage(image)
  }
  , [image]);

    return (
        <View
        style = {styles.background}>
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
            <TouchableOpacity
            
            style = {styles.button}
            onPress={
                () => {
                  launchCamera({
                    noData: true,
                    mediaType: 'photo',
                    quality: 10,
                    maxWidth: 200,
                    maxHeight: 200,
                    saveToPhotos:true,
                    storageOptions: {
                      skipBackup: true,
                      
                    }
                  }).then(image => {
                    //console.log(image);
                    setImage(image.assets[0].uri);
                  })
                  .catch(err => {
                   // console.log(err);
                  }
                )
                }
            }>
                <Text
                style ={{color: "white"}}>Camera</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Toto1

const styles = StyleSheet.create ({
    button : {
    marginTop: 50,
    backgroundColor: "blue",
    alignItems: "center",
    width: 150,
    height: 50,
    justifyContent: "center",
    color: "white"
    },
    background : {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#9ab7ff"
  }
})