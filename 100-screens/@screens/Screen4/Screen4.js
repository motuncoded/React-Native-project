import { Pressable, ScrollView, StyleSheet, Text, View, Image, FlatList, Dimensions, SafeAreaView, TouchableOpacity, } from 'react-native';
import React, { useState } from "react";




const COLOURS =  {black:"#101720", white:"#ffffff", }
const { width, height } = Dimensions.get("window");

    const slides = [
      {
        id: "1",
        bgColor: "#fff",
        image: require("./young-woman.jpg"),
        title: "Your One Stop Shop For Everything",
        subTitle: "Browse our curated collections and get personalized recommendation based on your perferences",
      },
      {
        id: "2",
        bgColor: "#fff",
        image: require("./pretty-woman.jpg"),
        title: "Discover A Better Way To Shop Online",
        subTitle: "Browse our curated collections and get personalized recommendation based on your perferences",
      },
      {
        id: "3",
        bgColor: "#fff",
        image: require("./stylish-woman.jpg"),
        title: "Your one stop shop for everything",
        subTitle: "Browse our curated collections and get personalized recommendation based on your perferences",
      },
    ];


const Slide = ({ item, index }) => {

  return (
    <View
      style={{
        width: 412,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={item.image}
        style={{
          height: 450,
          width: 412,
          alignItems: "center",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
        resizeMode="cover"
      />
      <View>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 700,
            paddingVertical: 10,
            paddingHorizontal: 20,
            color: COLOURS.black,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 300,
            paddingBottom: 20,
            paddingHorizontal: 20,
            color: COLOURS.black,
          }}
        >
          {item.subTitle}
        </Text>
      </View>
    </View>
  );
};

const Screen4 = () => {



  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      ></FlatList>
      <View >
        <Pressable
          style={{
            backgroundColor: COLOURS.black,
            color: COLOURS.white,
            padding: 20,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: COLOURS.white,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </Pressable>
        <Pressable
          style={{
            color: COLOURS.white,
            padding: 20,
            margin: 10,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              color: COLOURS.black,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Skip
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Screen4

const styles = StyleSheet.create({
});