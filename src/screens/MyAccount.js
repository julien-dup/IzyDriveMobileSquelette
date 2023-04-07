import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

const MyAccount = () => {

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
    <View>
      <Text>MuAccount</Text>

    </View>
  )
}

export default MyAccount