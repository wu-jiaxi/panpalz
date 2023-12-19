// RadioList.js

import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import RadioListItem from "./RadioListItem";

const RadioList = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RadioListItem
          item={item}
          isSelected={item === selectedItem}
          onSelect={() => handleSelect(item)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginTop: 20,
  },
});

export default RadioList;
