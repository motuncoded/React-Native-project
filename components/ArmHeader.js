import * as React from "react";
import { View,  Text } from "react-native";



export default function ArmHeader() {
  return (
      <View style={{flex: .1, backgroundColor: "#1a1a1a", marginTop:20}}>
          <Text  style={{padding:10, fontSize:25, color:"#fafafa", textAlign:"center"}}>Welcome to Arm Furnitures</Text>
    </View>
  );
}
