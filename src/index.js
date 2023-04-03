import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom'; // Importing the ReactDOM library
import { BrowserRouter } from 'react-router-dom'; // Importing the BrowserRouter component from the react-router-dom library
import { Provider } from 'react-redux'; // Importing the Provider component from the react-redux library
import store from './store'; // Importing the store object from the store.js file
import App from './App'; // Importing the main App component from the App.js file

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') // Mounting the application on the root element of the HTML document
);
