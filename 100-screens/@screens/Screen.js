import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";

const Screen4 = () => {
  const quotes = [
    {
      message: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      message: "Coding like poetry should be short and concise.",
      author: "Santosh Kalwar",
    },
    {
      message: "Code is like humor. When you have to explain it, it is bad.",
      author: "Cory House",
    },
    {
      message:
        "Clean code always looks like it was written by someone who cares..",
      author: "Robert C. Martin",
    },
    {
      message: "Confusion is part of programming. ",
      author: "Felienne Hermans",
    },
  ];
  const [current, setCurrent] = useState(0);
 const [backgroundColor, setBackgroundColor] = useState(
   styles.container.backgroundColor,
  )
   const [color, setColor] = useState(
   styles.icon.color
   )
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

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
    setBackgroundColor(colors[quoteIndex]);
      setColor(colors[quoteIndex]);

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
                    <Text style={{ color: color }}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "green",
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
    marginVertical: 60,
    marginHorizontal: 20,

    justifyContent: "center",
    flexDirection: "row",
  },
  quote: {
    fontSize: 38,
    paddingHorizontal: 20,
  },

  author: {
    paddingHorizontal: 25,

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
