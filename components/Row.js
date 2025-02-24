import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const Row = ({ item, handleRemoveTodo}) => {
  return (
    <Pressable onPress={() => handleRemoveTodo(item.id)} android_ripple={{ color: "#dddddd" }}>
      <Text style={styles.row}>{item.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Row;
