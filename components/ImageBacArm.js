import { ImageBackground, StyleSheet, Text, View,Dimensions, Pressable } from 'react-native'
import React from 'react'



const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

const ImageBacArm = () => {
  return (
    <View>
          <ImageBackground source={require("../assets/swing-chair.jpg")} resizeMode='contain' style={styles.img}>
              <Text style={styles.header}>Welcome to Arm furnitures</Text>
              <Pressable style={styles.button}>
  <Text style={styles.btn}>Login</Text>
</Pressable>
          </ImageBackground>

    </View>
  )
}

export default ImageBacArm

const styles = StyleSheet.create({ 
  img: { 
    height: screenHeight, 
    width: screenWidth, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
 header: {
    color: "#495e57",
    textAlign: "center",
     fontSize: 35,
     bottom: 100,
    position:"absolute"
    
  },
    button: {
    borderColor: "#495e57",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#495e57",
    fontSize: 22,
    borderWidth: 2,
    borderRadius: 5,
        alignSelf: "center",
         bottom: 50,
    position:"absolute"
    
   
    },
     btn:{
color:"#fafafa"
    }

})