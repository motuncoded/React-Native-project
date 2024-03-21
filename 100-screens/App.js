import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './@screens/Screen1';
import Screen2 from './@screens/Screen2';
import Screen3 from "./@screens/Screen2";
import Screen4 from "./@screens/Screen4";



export default function App() {
  return (
    <View style={styles.container}>
      <Screen4 />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});

