import { View, Text, Pressable, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const PressableA = () => {

  const [showMenu, setShowMenu] = useState(false)
  return (

    <View style={viewStyle.container}>
      <Text style={viewStyle.header}> Arm Furnitures</Text>
      <Text style={viewStyle.heading}> About Us</Text>
      <Text style={viewStyle.paragraph}>We are a full-service interior design and manufacturing company characterized by our uncompromising quality and innovative design solutions. With innovation, functionality, and style at the heart and soul of our company, we deliver perfection consistently. From our signature classics to our custom project designs we have managed to build a stellar reputation for excellence, quality, reliability and integrity.

We pride ourselves in our ability to interpret the essence of our clients through manufacturing and design. By working closely with each client we are able to create spaces that embody their being, because regardless of whether they are individuals, brands or establishments to us each project is personal.</Text>
          {showMenu && (<View style={viewStyle.textContainer}>
        <Text style={viewStyle.heading}> Features</Text>
        <Text style={viewStyle.text}>High  Quality Furnitures</Text>
          <Text style={viewStyle.text}>Easy to use</Text>
        <Text style={viewStyle.text}>Easy to clean and maintain</Text>
        <Text style={viewStyle.text}>Durable and reliable</Text>
        <Text style={viewStyle.text}>Good design</Text>

      </View>)
      }
      
      <View style={viewStyle.btnContainer}>
        <Pressable style={viewStyle.button} onPress={() => setShowMenu(!showMenu)}>
          <Text style={viewStyle.buttonText}>
              {showMenu ? " Home" : "View More"}
        </Text>
      
      </Pressable></View>
    
    
    </View>
        
  )
}


export default PressableA
const viewStyle= StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#495e57",
    color: "#fafafa",
  },
    header: {
    color: "#fafafa",
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
  },
  heading: {
       fontSize: 25,
    padding: 10,
    color: "#fafafa",
        textAlign: "center",


    },
  paragraph: {
    textAlign: "center",
    fontSize: 15,
    padding: 20,
    color: "#fafafa",
  },
  textContainer: {
   marginBottom:20 
  },
  text: {
     textAlign: "center",
    fontSize: 15,
    color: "#fafafa",
    padding:2.5,
  },
  btnContainer:{
display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  button: {
    
    borderColor: "#fafafa",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fafafa",
    fontSize: 22,
    borderWidth: 2,
    borderRadius: 5,
   

    
      
    }

})