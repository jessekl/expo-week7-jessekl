import uuid from "react-native-uuid";

const initialState = {
  todos: [],
  input: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, input: action.payload };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: uuid.v4(), text: state.input }],
        input: "",
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      throw new Error();
  }
};

export { initialState, todoReducer };
