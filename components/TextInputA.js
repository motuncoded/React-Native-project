import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextInputA = () => {
  return (
    <ScrollView KeyboardDismissMode="on-drag"  style={styles.container}>
      <Text style={styles.header}>TextInput with KeyboardDismissMode</Text>
      <Text>The keyboardDismissMode is set in the ScrollView, its prop by default has the value none, which means the drags do not dismiss the keyboard and can be change to on-drag prop to ensure the keyboard dismisses when scrolling or draging</Text>
    </Scroll View>
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
