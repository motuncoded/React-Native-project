import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
 import Img from "./people-illustration.jpg"
const Onboarding  = () => {
  return (
      <View style={styles.container}>
          <Text style={{
              fontSize: 30,
              textAlign: "center"
          }}>Welcome </Text>
    </View>
  )
}

export default Onboarding 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor:"#fff5ee"
    }
})