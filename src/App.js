import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ExplorePage from "./pages/explore/ExplorePage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
