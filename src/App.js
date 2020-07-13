import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="app-wrapper__header">
        <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/line_style_2.png"></img>
      </header>
      <nav className="app-wrapper__navigation">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <main className="app-wrapper__main-content">MAIN CONTENT</main>
    </div>
  );
};

export default App;
