import { View, Image, Text,ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';



const Vehicules = () => {
 
    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      //connect to API and get data from there 
      fetch("https://izydrive.herokuapp.com/api/v1/cars")
        .then(res => res.json())
        .then(data => {
          setCarData(data);
          setLoading(false)
        })
        .catch(err => {
          setError(err);
          setLoading(false)
        })
    }, [])
  
  console.log(carData);
    return (
<ScrollView style={{flex:1}} >
     {carData.map((item) => (
            <View style={{flex:1,margin:5}}>
                <View style={{height:300,width:350,alignSelf:'center'}}>
                    <Image source={{
                        uri: item.image,
                        }}
                        style={{
                       flex:0.8, resizeMode:'cover', height: 300, width: 350
                        }}/>
                </View>
                <View style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',flex:0.5,justifyContent:'center'}}>{item.brand}</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',flex:0.5,justifyContent:'center'}}>{item.model}</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',flex:0.5,justifyContent:'center'}}>{item.availability?'Disponible' : 'Indisponible'}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{backgroundColor:'#000d6b',borderRadius:3, width:170}}>
                        <Text style={{fontSize:35, color:'white',alignSelf:'center'}}>Reserver</Text>
                    </View>
                    <View style={{backgroundColor:'#9ab7ff',width:150,borderRadius:3}}>
                        <Text style={{fontSize:35,color:'white',alignSelf:'center'}}>Details</Text>
                    </View>
                </View>
            
            </View>
            ))}
</ScrollView>            
    )
  }
  
  export default Vehicules;