import {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Profile, {user} from './components/Profile/Profile';
import ConfirmationButton from './components/ConfirmationButton/ConfirmationButton';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
  // let btnText = '';
  // The goal: get the button text each time it gets changed. 
  // Watch it and update it on the App() level.
  return (
    <div className="App">
      <header className="App-header">
        {/* {btnText} */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Test of export: {user.name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (1)
        </a>
      </header>
      <ConfirmationButton />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;
