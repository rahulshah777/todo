//import necessary libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './NavBar';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import './App.css';

//function to return App
function App() {
  return (
    <Provider store={store}>
        <NavBar />
      <div>
        {/* routers */}
        <Routes>
    
        <Route path="/todo" element={[<TodoList />,<ContactForm/>]} />
          
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </div>
    </Provider>
  );
}

//export
export default App;
