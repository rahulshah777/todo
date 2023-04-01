//import necessary action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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

//define initial state
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

//define reducer function
const todosReducer = (state = initialState, action) => {
  switch (action.type) {

    //case for adding todo
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, text: action.payload, completed: false }]
      };

      //case for toggling todo
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

      // case for detele todo
    case DELETE_TODO:
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

//export the reducer function
export default todosReducer;
