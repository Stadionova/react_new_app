import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

const dialogsData = [
  { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
  { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
  { id: 3, name: 'Yulia', message: 'Ok, back off!' },
  { id: 4, name: 'Sveta', message: 'bye!' }
];

const messagesData = [
  { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
  { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
  { id: 3, name: 'Yulia', message: 'Ok, back off!' }
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className='app-wrapper__mainContent'>
          <Route path='/profile' render={() => <Profile messagesData={messagesData} />} />
          <Route path='/messages' render={() => <Dialogs dialogsData={dialogsData} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
