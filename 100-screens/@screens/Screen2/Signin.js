import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import {useState} from "react"
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Signin = ({ navigation }) => {
  
  
  

  return (
    <View style={styles.container}>
      <View style={styles.sign}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: "grey" }}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 60 }}>
        <Text style={{ fontSize: 20, fontWeight: 900 }}>Log In</Text>
        <View style={{ marginVertical: 30 }}>
          <View style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "grey",
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              Your Email
            </Text>
            <TextInput></TextInput>
          </View>
          <View style={{ marginVertical: 30, borderBottomColor: "grey", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "grey",
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              Password
            </Text>
            <View>
              <TextInput secureTextEntry={true} />
            </View>
          </View>
          <Pressable style={{ backgroundColor: "#1B1212", borderRadius: 50 }}>
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
              width: 160,
              borderRadius: 50,
              borderWidth: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <FontAwesome name="facebook" size={24} color="black" />
            <Text style={{ paddingHorizontal: 10 }}>Facebook</Text>
          </Pressable>
          <Pressable
            style={{
              width: 160,
              borderRadius: 50,
              borderWidth: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
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
    backgroundColor: "#dbc1ac",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  sign: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default Signin;
