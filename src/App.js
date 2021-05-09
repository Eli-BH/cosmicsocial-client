import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";

const App = () => {
  return (
    <div>
      <RegisterPage />
    </div>
  );
};

export default App;
