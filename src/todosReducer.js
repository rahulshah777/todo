// Action types for managing todos
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Action creators for adding, toggling and deleting todos
export const addTodo = (text) => {
  return { type: ADD_TODO, payload: text };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: id };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, payload: filter };
};

// Initial state for todos
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

// Reducer for managing todos
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, text: action.payload, completed: false }]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      // Remove a todo from the list of todos
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload
      };
    default:
      return state;
  }
};

export default todosReducer;
