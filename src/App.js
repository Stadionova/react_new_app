import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="app-wrapper__header">HEADER</header>
      <nav className="app-wrapper__navigation">SIDEBAR</nav>
      <main className="app-wrapper__main-content">MAIN CONTENT</main>
    </div>
  );
};

export default App;