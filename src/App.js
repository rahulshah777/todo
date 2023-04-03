import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './NavBar';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Routes>
          {/* The root path will render both the TodoList and ContactForm components */}
          <Route path="/todo" element={[<TodoList />, <ContactForm />]} />
          {/* The TodoList path will only render the TodoList component */}
          <Route path="/todo-list" element={<TodoList />} />
          {/* The ContactForm path will only render the ContactForm component */}
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
