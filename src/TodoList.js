import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter } from './todosReducer';
import './App.css';

function TodoList({ todos, visibilityFilter, addTodo, toggleTodo, deleteTodo, setVisibilityFilter }) {
 
 // Define local state for input value
  const [inputValue, setInputValue] = useState('');

   // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

    // Handle todo item toggle
  const handleTodoToggle = (id) => {
    toggleTodo(id);
  };

  // Handle todo item delete
  const handleTodoDelete = (id) => {
    deleteTodo(id);
  };

    // Handle filter change
  const handleFilterChange = (event) => {
    setVisibilityFilter(event.target.value);
  };

   // Filter todos based on current visibility filter
  const filteredTodos = todos.filter(todo => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todo.completed;
      case 'SHOW_ACTIVE':
        return !todo.completed;
      case 'SHOW_ALL':
      default:
        return true;
    }
  });

  return (
    <div className="todo-container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo-input">Todo Item:</label>
        <input
          type="text"
          id="todo-input"
          placeholder="Enter todo item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div className="filter-container">
        <label htmlFor="filter-select">Show:</label>
        <select id="filter-select" value={visibilityFilter} onChange={handleFilterChange}>
          <option value="SHOW_ALL">All</option>
          <option value="SHOW_COMPLETED">Completed</option>
          <option value="SHOW_ACTIVE">Active</option>
        </select>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <button onClick={() => handleTodoToggle(todo.id)}>Toggle</button>
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

// Connect component to Redux store and export it
export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo, setVisibilityFilter })(TodoList);
