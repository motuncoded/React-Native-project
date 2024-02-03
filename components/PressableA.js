import { View, Text, Pressable, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const PressableA = () => {

  const [showMenu, setShowMenu] = useState(false)
  return (

    <View style={viewStyle.container}>
      <Text style={viewStyle.header}>About Arm Furnitures</Text>
      <Text style={viewStyle.paragraph}>We are a full-service interior design and manufacturing company characterized by our uncompromising quality and innovative design solutions. With innovation, functionality, and style at the heart and soul of our company, we deliver perfection consistently. From our signature classics to our custom project designs we have managed to build a stellar reputation for excellence, quality, reliability and integrity.

We pride ourselves in our ability to interpret the essence of our clients through manufacturing and design. By working closely with each client we are able to create spaces that embody their being, because regardless of whether they are individuals, brands or establishments to us each project is personal.</Text>
        <Pressable style={viewStyle.button} onPress={()=> setShowMenu(!showMenu)}>
          <Text style={viewStyle.buttonText}>
              {showMenu ? " Home" : "View More"}
        </Text>
        {showMenu && (<View>
          <Text style={viewStyle.heading}> Features</Text>
          <Text style={viewStyle.paragraph}>
            <ul>
              <li>Quality Furniture</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

            </ul>
          </Text>
        </View>)

 }
    </Pressable>
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
    fontSize: 40,
  },
  paragraph: {
    fontSize: 18,
    padding: 20,
    color: "#fafafa",
    },
  button: {

    borderColor: "#fafafa",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fafafa",
    fontSize: 22,
    borderWidth: 2,
    borderRadius: 12,
    margin: 40,
    width: 100,
    flexWrap:"wrap"
   

    
      
    }

})