import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
        first component return simple HTML
        <li>FIRST COMPONENT HEADER</li>
        <li><Header /></li>
    </div>
  );
}

const Header = () => {
  return (
    <div className="App">
        second component Header put into first App component
        <li>SECOND COMPONENT HEADER</li>
    </div>
  );
}

export default App;
