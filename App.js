import { FlatList, StyleSheet, View, Text} from "react-native";
import { todoReducer, initialState } from "./hooks/todoReducer";
import Row from "./components/Row";
import Input from "./components/Input";
import { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleAddTodo = () => {
    if (state.input && state.input !== null) {
      dispatch({ type: "ADD_TODO" });
    }
  };

  return (
    <View style={styles.container}>
      <Input state={state} dispatch={dispatch} handleAddTodo={handleAddTodo} />
      <FlatList
        data={state.todos}
        renderItem={({ item }) => (
          <Row item={item} handleRemoveTodo={handleRemoveTodo} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 24,
  },
  list: {
    flexDirection: "column",
    marginLeft: "8",
    marginRight: "8",
  },
});
