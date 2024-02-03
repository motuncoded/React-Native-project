import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemsDisplay = [
  {
    title: "SectionList",
    data: [
      "Fully cross-platform",
      "Configurable viewability callbacks",
      "List header support",
      "List footer support",
      "Item separator support",
      "Section header support",
      "Section separator support",
      "Heterogeneous data and item rendering support",
      "Pull to Refresh",
      "Scroll loading",
    ],
  },
  {
    title: "FlatList",
    data: [
      "Fully cross-platform",
      "Optional horizontal mode",
      "Configurable viewability callbacks",
      "Header support",
      "Footer support",
      "Separator support",
      "Pull to Refresh",
      "Scroll loading",
      "ScrollToIndex support",
      "Multiple column support",
    ],
  },
];

const SectionListA = () => {
  return (
    <View style={{ backgroundColor: "#0a0a0a", flex: 1 }}>
      <Text
        style={{
          padding: 10,
          fontSize: 25,
          color: "#fafafa",
          textAlign: "center",
        }}
      >
        Features of SectionList and FlatList
      </Text>
      <SectionList
        sections={ItemsDisplay}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: "#fafafa",
                textAlign: "center",
              }}
            >
              {item}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default SectionListA;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#0a0a0a",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    padding: 10,
    marginVertical: 1,
  },
  header: {
    fontSize: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
