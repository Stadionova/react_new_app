import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className='app-wrapper__mainContent'>
        <Profile />
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
