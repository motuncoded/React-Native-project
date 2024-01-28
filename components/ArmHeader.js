import * as React from "react";
import { View,  Text } from "react-native";



export default function ArmHeader() {
  return (
      <View style={{flex: .2, backgroundColor: "#1a1a1a"}}>
          <Text  style={{padding:20, fontSize:25, color:"#fafafa", textAlign:"center"}}>Welcome to Arm Furnitures</Text>
    </View>
  );
}
