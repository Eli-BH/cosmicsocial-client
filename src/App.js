import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ExplorePage from "./pages/explore/ExplorePage";
import LikedPage from "./pages/likedPage/LikedPage";
import SearchPage from "./pages/search/SearchPage";

const App = () => {
  const user = localStorage.getItem("userId");

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <HomePage /> : <RegisterPage />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <RegisterPage />}
          </Route>
          <Route path="/profile/:id">
            {user ? <ProfilePage /> : <Login />}
          </Route>
          <Route path="/explore">{user ? <ExplorePage /> : <Login />}</Route>
          <Route path="/liked">{user ? <LikedPage /> : <Login />}</Route>
          <Route path="/search">{user ? <SearchPage /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
