import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextInputA = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TextInput with KeyboardDismissMode</Text>
      <Text></Text>
    </View>
  )
}

export default TextInputA

const styles = StyleSheet.create({
    container: {
    flex: 1,
 backgroundColor: "#495e57",
    },
  header:{
    fontSize:20,
  }
})
