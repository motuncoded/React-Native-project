import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const Signup = ({navigation}) => {
  return (
      <View style={styles.container}>
          <View style={styles.login}>
        <Pressable onPress={() => navigation.navigate('Signin')}>
                  <Text>Login</Text>
              </Pressable>
      </View>
      <Text>Sign up</Text>
      <View style={styles.form}>
        <View>
          <Text>Your email</Text>
          <TextInput></TextInput>
        </View>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0BFB8",
    flex: 1,
    padding: 20,
  },
  login: {},
});

export default Signup