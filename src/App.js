import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ExplorePage from "./pages/explore/ExplorePage";
import LikedPage from "./pages/likedPage/LikedPage";
import SearchPage from "./pages/search/SearchPage";

import { useSelector } from "react-redux";
import { authLoginSelector } from "./slices/login";

const App = () => {
  const { authData } = useSelector(authLoginSelector);
  console.log(authData);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/liked">
            <LikedPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            {authData.length ? <HomePage /> : <RegisterPage />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
