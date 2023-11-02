// import {useState, useEffect} from 'react';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import ConfirmationButton from './components/ConfirmationButton/ConfirmationButton';
import ShoppingList from './components/ShoppingList/ShoppingList';

import './App.css';


function App() {
  // let btnText = '';
  // The goal: get the button text each time it gets changed. 
  // Watch it and update it on the App() level.
  return (
    <div className="App">
      <Header/>
      <ConfirmationButton />
      <div className="profile_wrapper">
        <Profile />
      </div>
      <div className="shopping-list_wrapper">
        <ShoppingList />
      </div>
    </div>
  );
}

export default App;
