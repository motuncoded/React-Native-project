import { Pressable, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Screen4 = () => {
    const OnboardingScreen = [
        {
        image: <Image resizeMode='cover' source={require("./young-woman.jpg")} />,
        title: "Your one stop shop for everything",
        subTitle:"Browsea our curated collections and get personalized recommendation based on your perferences"
        },
        {
            image: <Image  resizeMode='cover' source={require("./pretty-woman.jpg")} />,
        title: "Your one stop shop for everything",
        subTitle:"Browseb our curated collections and get personalized recommendation based on your perferences"
        },  {
            image: <Image  resizeMode='cover' source={require("./stylish-woman.jpg")} />,
        title: "Your one stop shop for everything",
        subTitle:"Browsec our curated collections and get personalized recommendation based on your perferences"
        }
]

  return (
    <View>
          {OnboardingScreen.map((screen, index) => {
              return (
                <ScrollView key={index}>
                  <View style={{ width: 375, height:375 }}>{screen.image}</View>
                  <Text>{screen.title}</Text>
                  <Text>{screen.subTitle}</Text>
                </ScrollView>
              );
      })}
      <View>
        <Pressable>
          <Text>Next</Text>
        </Pressable>
        <Pressable>
          <Text>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Screen4

const styles = StyleSheet.create({})