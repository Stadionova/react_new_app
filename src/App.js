import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
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
      <HeaderContainer />
      <Navigation props={props} />
      <div className='app-wrapper__mainContent'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        {/* <Route path='/users' render={() => <div>USERS</div>} /> */}
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;