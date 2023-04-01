//this is store.js
import { createStore } from 'redux';
import todosReducer from './todosReducer';

const store = createStore(todosReducer);

//export default store
export default store;
