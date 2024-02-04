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
=======
  const [firstName onchangeFirstName] = useState("")
  return (
    <ScrollView KeyboardDismissMode="on-drag"  style={styles.container}>
      <Text style={styles.header}>TextInput with KeyboardDismissMode</Text>
      <Text>The keyboardDismissMode is set in the ScrollView, its prop by default has the value none, which means the drags do not dismiss the keyboard and can be change to on-drag prop to ensure the keyboard dismisses when scrolling or draging</Text>
  <TextInput value={firstName}
    placeholder="firstName"
      onchangeText={onchangeFirstName}/>
        <TextInput value={firstName}
    placeholder="firstName"
      onchangeText={onchangeFirstName}/>
    <TextInput value={firstName}
    placeholder="firstName"
      onchangeText={onchangeFirstName}/>
    </ScrollView>
  )
}

export default TextInputA;

const styles = StyleSheet.create({
  container: {
  
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
 backgroundColor: "#495e57",
    },
  header:{
    fontSize:20,
  }
})
