import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Screen2 = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../assets/image-qr-code.png")}
          style={styles.image}
                  resizeMode="cover"
        />
      </View>
    </View>
  );
}

export default Screen2

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
})
