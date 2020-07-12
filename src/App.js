import React from 'react';
import './App.css';
import LiElements from './LiElements.js';
import Header from './Header.js';

const App = () => {
  return (
    <div className="App">
        first component return simple HTML
        <li>FIRST COMPONENT HEADER</li>
        <Header />
        <LiElements />
    </div>
  );
}

export default App;