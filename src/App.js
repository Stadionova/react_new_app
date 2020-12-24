import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
// Route компонента отвечает за путь в адресной строке (в зависмости от активной вкладки в Navbar)
// и подставляет нужную компоненту вместо этого пути
// каждая Route компонента отвечает за одну компоненту
// в Navbar 5 вкладок - значит и Route компонент тоже будет 5
// Route компонента просто подставляет свою компоненту (за которую ота отвечает) на основании урла
// чтобы каждая Route компонента понимала, за какую компоненту она отвечает
// мы прописываем в ней путь/path (который и будет меняться в урле)

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation props={props} />
      <div className='app-wrapper__mainContent'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <div>USERS</div>} />
      </div>
    </div>
  );
};

export default App;