import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./@screens/Screen2/AuthStack";
import Screen4 from "./@screens/Screen4/Screen4";

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <AuthStack />
      </NavigationContainer> */}
      <StatusBar hidden />
      <Screen4 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
