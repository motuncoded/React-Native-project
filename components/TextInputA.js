import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

const TextInputA = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.header}>Welcome to Arm Furnitures</Text>
        <Text style={styles.paragraph}>
          Maintaining furniture can seem like a daunting task, but it does not
          have to be! With the right tips and techniques, you can keep your
          furniture looking like new for years to come.Subscribe to get daily
          tips and practices on how to keep our furnitures clean and make brand
          new.
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
          placeholder="Message"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputA;

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
    fontSize: 15,
    color: "#fafafa",
    padding: 20,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    borderWidth: 1,
    backgroundColor: "#fafafa",
    margin: 12,
  },
  messageInput: {
    paddingBottom: 40,
    paddingLeft: 10,
    backgroundColor: "#fafafa",
    margin: 20,
  },
});
