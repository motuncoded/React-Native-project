import * as React from "react";
import { View, Text } from "react-native";
import ArmHeader from "./components/ArmHeader";
import FlatListA from "./components/FlatListA";
import SectionListA from "./components/SectionListA";
import TextInputA from "./components/TextInputA";



export default function App() {
  return (
    <View style={{ flex: 1, justifyContent:"flex-start", backgroundColor: "#fafafa"}}>
      {/*<ArmHeader />
      <FlatListA/>
  <SectionListA/>*/}
  <TextInputA/>
    </View>
  );
}
