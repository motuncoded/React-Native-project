import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Screen3 = () => {
  return (
    <View
          style={{
              flex: 1, paddingVertical: 60,
              paddingHorizontal: 30,
              justifyContent: "center",
              alignItems: "center"
          }}
    >
          <View style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 35
          }}>
        <Image
          source={require("../assets/image-qr-code.png")}
          resizeMode="cover"
          style={{ width: 375, height: 375, borderRadius: 10 }}
        />
      </View>

      <Text
        style={{
          fontWeight: 700,
          fontSize: 25,
          textAlign: "center",
          color: "#333300",
          paddingBottom: 10,
        }}
      >
        Improve your front-end skills by building projects
      </Text>
      <Text
        style={{
          color: "#999999",
          fontSize: 15,
          fontWeight: 400,
          textAlign: "center",
          paddingHorizontal: 10,
        }}
      >
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </Text>
    </View>
  );
};

export default Screen3;

