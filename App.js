import * as React from "react";
import { View, Text } from "react-native";
import ArmHeader from "./components/ArmHeader";
import FlatListA from "./components/FlatListA";



export default function App() {
  return (
    <View style={{ flex: 1, justifyContent:"flex-start", padding:25, backgroundColor: "#fafafa"}}>
      <ArmHeader />
      <FlatListA/>
    </View>
  );
}
