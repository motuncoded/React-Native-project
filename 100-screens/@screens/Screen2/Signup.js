import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sign}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Signin")}>
          <Text style={{ color: "grey" }}>Login</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 60 }}>
        <Text style={{ fontSize: 20, fontWeight: 900 }}>Sign up</Text>
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
            <TextInput
            // keyboardType={ }
            ></TextInput>
          </View>
          <View style={{ borderBottomColor: "grey", borderBottomWidth: 1, marginVertical: 30 }}>
            <Text
              style={{
                color: "grey",
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              Name
            </Text>
            <TextInput />
          </View>
          <View style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "grey",
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              Password
            </Text>
            <TextInput secureTextEntry={true} />
          </View>
          <Pressable style={{ backgroundColor: "#1B1212", borderRadius: 50, marginTop: 30 }}>
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
            Or Sign up with these social account
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
      <Text
        style={{
          textAlign: "center",
          paddingHorizontal: 10,
        }}
      >
        By signing up you have agreed to the{" "}
        <Text
          style={{
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#000",
          }}
        >
          Terms and Use{" "}
        </Text>
        <Text> and </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#000",
          }}
        >
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece0d1",

    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  sign: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});


export default Signup