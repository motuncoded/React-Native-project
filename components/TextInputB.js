import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";

const TextInputB = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.header}>Welcome to Arm Furnitures</Text>
        <Text style={styles.paragraph}>Login to our website.</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Enter your email"
          keyboardType={"email-address"}
          onFocus={() => Alert.alert("Input your email address")}
          clearButtonMode={"always"}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Enter your  password"
          keyboardType={"default"}
          secureTextEntry={true}
          onBlur={() => Alert.alert("Input your email address")}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputB;

const styles = StyleSheet.create({
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
    fontSize: 30,
    color: "#fafafa",
    padding: 20,
    textAlign: "center",
    marginVertical: 8,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    borderWidth: 1,
    backgroundColor: "#fafafa",
    margin: 12,
  },
});
