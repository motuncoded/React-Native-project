import { View, Text, Pressable, } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import React from 'react'
import { useNavigation } from '@react-navigation/native';



const More = () => {
  
const navigation = useNavigation(); 

  return (
    <View style={{ flex: 1 }} >
      <View style={{  backgroundColor: "#890101",height:200, alignItems:"center", justifyContent:"center", }}>
        <Text style={{ color: "#fafafa", fontSize:24 }}>Passariellos</Text>
      </View>
      <View>
        <View style={{justifyContent:'space-between', padding:5, flexDirection:"row"}}>
          <Text style={{fontSize:15,fontWeight:400}}>CONTACT INFORMATION</Text>
          <Pressable   onPress={() => navigation.navigate('Contact')} style={{ color: "#890101" }}>
            <Text>UPDATE</Text>
          </Pressable>
        </View>
        <View style={{backgroundColor:"white", margin:10,padding:10}}>
          <View style={{ flexDirection: "row", alignItems: "center", padding:10, paddingBottom:5}}>
            <MaterialIcons name="person-outline" size={24} color="#890101" />
            <Text style={{fontStyle:"italic",paddingLeft:10}}>Name is required **</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",padding:10,paddingBottom:5 }}>
            <MaterialIcons name="email" size={24} color="#890101" />
            <Text style={{fontStyle:"italic",paddingLeft:10}}>Email is required **</Text>
</View>
          
          <View style={{ flexDirection: "row", alignItems: "center",padding:10,paddingBottom:5, }}>
            <Feather name="phone" size={24} color="#890101" />
                        <Text style={{fontStyle:"italic",paddingLeft:10, }}>Phone is required **</Text>
          </View>

        </View>
        <View style={{backgroundColor:"white", margin:10,padding:10}}>
          <View style={{ flexDirection: "row", alignItems: "center", padding:10,borderBottomColor:"gray", borderBottomWidth:.5}}>
                  <Feather name="shopping-bag" size={28} color="#890101" />
            <Text style={{paddingLeft:10,fontSize:20 }}>My Orders</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",padding:10,borderBottomColor:"gray", borderBottomWidth:.5 }}>
            <FontAwesome5 name="address-book" size={28} color="#890101" />
            <Text style={{paddingLeft:10,fontSize:20 }}>Address Book</Text>
</View>
          
          <View style={{ flexDirection: "row", alignItems: "center",padding:10,borderBottomColor:"gray", borderBottomWidth:.5 }}>
            <MaterialIcons name="payment" size={28} color="#890101" />
            <Text style={{paddingLeft:10,fontSize:20 }}>Payments</Text>

          </View>
          <View style={{ flexDirection: "row", alignItems: "center",padding:10, borderBottomColor:"gray", borderBottomWidth:0.2 }}>
            <Feather name="phone" size={28} color="#890101" />
            <Text style={{paddingLeft:10,fontSize:20 }}>Join Passariellos Club</Text>

          </View>
          <View style={{ flexDirection: "row", alignItems: "center", padding: 10,}}>
            <Feather name="gift" size={24} color="#890101" />
            <Text style={{paddingLeft:10,fontSize:20 }}>E-gift Card</Text>

          </View>

 </View>
      </View>
     
    </View>
  )
}

export default More