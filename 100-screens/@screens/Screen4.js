import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";

const Screen4 = () => {
  const quotes = [
    {
      message: "You do not find the happy life. You make it.",
      author: "Camilla Eyring Kimball",
    },
    {
      message: "You do not find the happy life. You make it.",
      author: "Camilla Eyring Kimballc",
    },
  ];
  const [current, setCurrent] = useState(0);
 const [backgroundColor, setBackgroundColor] = useState(
   styles.container.backgroundColor,
  )
   const [color, setColor] = useState(
   styles.icon.backgroundColor
   )
  
  const Length = quotes.length;

  const prevSlide = () => {
    setCurrent(current === Length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? Length - 1 : current - 1);
  };

  if (!Array.isArray(quotes) || quotes.length <= 0) {
    return null;
  }

  const goToQuote = (quoteIndex) => {
    setCurrent(quoteIndex);
    setBackgroundColor("#000000");
      setColor("#000000");

  };

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          {quotes.map((quote, quoteIndex) => {
            return (
              <View>
                {quoteIndex === current && (
                  <View style={styles.quoteContainer} key={quoteIndex}>
                    <Text style={{ color: Color,  }}>
                      <Fontisto name="quote-a-right" size={24} />
                    </Text>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.quote}>{quote.message}</Text>
                      <Text style={styles.author}>{quote.author}</Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.circleContainer}>
        {quotes.map((quote, quoteIndex) => {
          return (
            <Pressable
              key={quoteIndex}
              onPress={({ pressed }) => goToQuote(quoteIndex)}
              style={styles.circle}
            ></Pressable>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
      justifyContent : "center",
    alignItems: "center",
  },
  red: {
        backgroundColor: "red",

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
    marginTop: 200,
    marginHorizontal:20,
    flexDirection: "row",
  },
  quote: {
    fontSize: 38,
    paddingHorizontal:20
  },
 
  author: {
        paddingHorizontal:20,

    paddingVertical: 20,
  },

  circleContainer: {
    display: "flex",
    flexDirection: "row",
    height: 50,
  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: "#fafafa",
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: 2,
  },
});

export default Screen4;
