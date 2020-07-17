import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
};

export default App;
