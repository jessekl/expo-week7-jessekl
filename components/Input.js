import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";

const Input = ({ state, dispatch, handleAddTodo }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={state.input}
        onChangeText={(text) => dispatch({ type: "INPUT", payload: text })}
        placeholder="Enter task"
        onSubmitEditing={handleAddTodo}
      />
      <Pressable onPress={handleAddTodo} android_ripple={{ color: "#dddddd" }}>
        <Text style={styles.save}>Save</Text>
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  save: {
    fontSize: 20,
    color: "#0077EE",
    padding: "8",
  },
});
