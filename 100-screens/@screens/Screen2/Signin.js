import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import {useState} from "react"
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Signin = ({ navigation }) => {
  const [input, setInput] = useState({
    email: "",
    password: ""

  })
  const handleFormChange = (event) => {
    const { email } = event.target
setInput((prev)=>({...prev, [email]:value}))
  }
  const handleSubmit = (event) => {
        event.preventDefault();
 navigation.navigate("Dashboard");
  }
  
  

  return (
    <View style={styles.container}>
      <View style={styles.sign}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ color: "grey" }}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 60 }}>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Log In</Text>
        <View style={{ marginVertical: 30 }}>
          <View>
            <Text
              style={{
                color: "grey",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Your Email
            </Text>
            <TextInput
              style={styles.input}
              value={input.email}
              onChange={handleFormChange}
            ></TextInput>
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text
              style={{
                color: "grey",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Password
            </Text>
            <View>
              <TextInput
                style={styles.input}
                value={input.password}
                onChange={handleFormChange}
                secureTextEntry={true}
              />
              
            </View>
          </View>
          <Pressable
            style={{ backgroundColor: "#1B1212", borderRadius: 50 }}
            onPress={handleSubmit}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff5ee",
                padding: 15,
              }}
            >
              {" "}
              Login
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginVertical: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Or Sign in with these social account
          </Text>
        </View>
        <View
          style={{
            marginVertical: 30,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              width: 150,
              borderRadius: 50,
              borderWidth: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <FontAwesome name="facebook" size={24} color="black" />
            <Text style={{ paddingHorizontal: 10 }}>Facebook</Text>
          </Pressable>
          <Pressable
            style={{
              width: 150,
              borderRadius: 50,
              borderWidth: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome6 name="square-x-twitter" size={24} color="black" />
            <Text style={{ paddingHorizontal: 10 }}>Twitter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fee1cc",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  sign: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {},
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});

export default Signin;
