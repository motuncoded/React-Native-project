import { View, Text,StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'



const ImageArm = () => {
  return (
          <ScrollView tyle={styles.container}>
                        <Text style={styles.header}>Welcome to Arm furnitures</Text>

        <Image source={require('../assets/swing-chair.jpg')} resizeMode="contain" style={styles.img}/>    
            <Image source={require('../assets/chair.jpg')} resizeMode="contain" style={styles.img}/>
      <Image source={require('../assets/side-puff-puff.jpg')} resizeMode="contain" style={styles.img} />
              <Image source={require('../assets/alara-wardrobe.jpg')} resizeMode="contain" style={styles.img}/>

<Pressable style={styles.button}>
  <Text style={styles.btn}>View More</Text>
</Pressable>

          </ScrollView>
  )
}

export default ImageArm
const styles = StyleSheet.create({
  container: {
    flex: 1,
 justifyContent: 'center',
    alignItems: 'center',    
  },
  header: {
    color: "#495e57",
    textAlign: "center",
    fontSize: 35,
    marginTop:40,
    
  },


  img: {
 alignSelf:"center",
 margin:10,
    height:200,
    width:350
    

   
  },
  button: {
    borderColor: "#495e57",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#495e57",
    fontSize: 22,
    borderWidth: 2,
    borderRadius: 5,
    alignSelf:"center"
   
    },
    btn:{
color:"#fafafa"
    }
});
