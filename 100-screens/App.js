import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './@screens/Screen1';
import Screen2 from './@screens/Screen2';
import Screen3 from "./@screens/Screen2";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen1 /> */}
      {/* <Screen2/> */}
      <Screen3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
