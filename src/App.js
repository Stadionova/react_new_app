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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation friends={props.stateData.friends} />
        <div className='app-wrapper__mainContent'>
          <Route path='/profile' render={() => <Profile
            dispatch={props.dispatch}
            inputValue={props.stateData.inputValue}
            messagesData={props.stateData.dialogsState}
            addPost={props.addPost}
            updateInputValue={props.updateInputValue} />} />
          <Route path='/messages' render={() => <Dialogs
            dispatch={props.dispatch}
            dialogsData={props.stateData.messagesState} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
