import * as React from "react";
import { View, Text, Pressable } from "react-native";
import ArmHeader from "./components/ArmHeader";
import FlatListA from "./components/FlatListA";
import SectionListA from "./components/SectionListA";
import TextInputA from "./components/TextInputA";
import TextInputB from "./components/TextInputB";
import PressableA from "./components/PressableA";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#fafafa",
      }}
    >
      {/*<ArmHeader />
<FlatListA/>
  <SectionListA/>*
      
    <TextInputA/> */}
      <PressableA/>
    </View>
  );
}
