import { View, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import React from 'react'

const More = () => {
  return (
    <View style={{ flex: 1 }} >
      <View style={{  backgroundColor: "red",height:200, alignItems:"center", justifyContent:"center", }}>
        <Text style={{ color: "#fafafa", fontSize:24 }}>Passariellos</Text>
      </View>
      <View>
        <View style={{justifyContent:'space-between', padding:5, flexDirection:"row"}}>
          <Text style={{fontSize:15,fontWeight:400}}>CONTACT INFORMATION</Text>
          <Pressable >
            <Text style={{color:"red"}}>UPDATE</Text>
          </Pressable>
        </View>
        <View style={{backgroundColor:"white", margin:10,padding:10}}>
          <View style={{ flexDirection: "row", alignItems: "center", paddingBottom:10}}>
            <MaterialIcons name="person-outline" size={24} color="red" />
            <Text style={{fontStyle:"italic",padding:5}}>Name is required **</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",paddingBottom:10 }}>
            <MaterialIcons name="email" size={24} color="red" />
            <Text style={{fontStyle:"italic",paddingLeft:10}}>Email is required **</Text>
</View>
          
          <View style={{ flexDirection: "row", alignItems: "center",paddingBottom:10 }}>
            <Feather name="phone" size={24} color="red" />
                        <Text style={{fontStyle:"italic",padding:5}}>Phone is required **</Text>

          </View>

 </View>
</View>
    </View>
  )
}

export default More