import { Home } from "@material-ui/icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
