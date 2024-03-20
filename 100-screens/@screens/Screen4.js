import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Screen4 = () => {
  const quotes = [
    {
      id: 1,
      message: "You do not find the happy life. You make it.",
      author: "Camilla Eyring Kimball",
      bcg: "#8A2BE2",
    }
   
  ];
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.card2]}></View>
        <View
          style={[
            styles.card,
            styles.card1,
            styles.elevation,
            styles.shadowProp,
          ]}
        >
          {quotes.map((quote) => {
            return (
              <View style={styles.quoteContainer}>
                <View style={{
                  display: "flex",
                }}>
                <Text style={styles.marks}>"</Text>
                <Text style={styles.quote}>{quote.message}</Text>
                </View>
                <Text style={styles.author}>{quote.author}</Text>
              </View>
            );

          })}
        </View>
      </View>
      <View style={styles.circleContainer}>
        <Pressable style={styles.circle}></Pressable>
        <Pressable style={styles.circle}></Pressable>
        <Pressable style={styles.circle}></Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A2BE2",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginHorizontal: 50,
  },
  card: {
    width: 300,
    height: 500,
    backgroundColor: "#f1faee",
    position: "absolute",
    borderRadius: 20,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#000000",
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  card1: {
    zIndex: 2,
    position: "relative",
  },
  card2: {
    zIndex: 1,
    backgroundColor: "#f1faee",
    transform: [{ rotateZ: "-5deg" }],
    backfaceVisibility: "hidden",
  },

  card3: {
    zIndex: 1,
    transformOrigin: "top right",
  },
  quoteContainer: {
    marginTop: 280,
  },
  quote: {
    fontSize: 40,
   
  },
  marks: {
    fontSize: 50,
    color: "gray",
  },
  author: {
    paddingHorizontal: 10,
    paddingVertical:20
  },

  circleContainer: {
    marginVertical: 80,
    flexDirection: "row",
  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: "#fafafa",
    borderRadius: 50,
    margin: 2,
  },
});

export default Screen4;
