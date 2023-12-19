// RadioListItem.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioListItem = ({ item, isSelected, onSelect }) => {
  return (
    <View>
      <TouchableOpacity onPress={onSelect} style={styles.container}>
        <View style={[styles.radio, isSelected && styles.radioSelected]}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
        <Text>{item}</Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3498db", // Radio border color
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    borderColor: "#3498db", // Selected radio border color
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#3498db", // Selected radio fill color
  },
});

export default RadioListItem;
