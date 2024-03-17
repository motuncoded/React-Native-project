import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";


const Screen1 = () => {
  const items = ["Design", "Wireframe", "Prototype"]
  return (
    <ImageBackground
      source={require("../assets/people.jpg")}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.searchContainer}>
        <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
          <Text style={styles.heading}>Meet</Text>
          <Text style={styles.heading}>Likeminded </Text>
          <Text style={styles.heading}>People</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="What are your interests"
            placeholderTextColor="#536872"
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 25,
            marginHorizontal: 50,
            flexDirection: "row",
          }}
        >
          {items.map((item) => {
              return(
              <Pressable key={item} style={styles.keyword}>
                          <Text style={{ color: "#fff", fontSize: 15 }}>{item}
                           <FontAwesome name="times" size={12} color="#fff" />
                          </Text>
                        </Pressable>)
            })}
            

        
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Pressable style={styles.button}>
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>
              Search
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "#000035",
    marginTop: 270,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontSize: 40,
    color: "#fafafa",
    lineHeight: 50,
    fontWeight: "700",
  },
  input: {
    borderWidth: 2,
    borderColor: "#536872",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,

    marginHorizontal: 45,
  },
  keyword: {
    backgroundColor: "#003262",
    opacity: 0.5,
    padding: 10,
    marginHorizontal: 2,
    borderRadius: 40,
  },
  button: {
    padding: 10,
    width: 100,
    backgroundColor: "#FF5733",
    color: "#fafafa",
    borderRadius: 40,
    textAlign: "center",
    alignItems:"center"
  },
});

export default Screen1;
