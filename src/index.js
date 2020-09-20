import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Style.css";

import { Home } from "./Pages/Home/Home";
import { Register } from "./Pages/Home/Register/Register";
import { Login } from "./Pages/Home/Login/Login";
import { AboutUs } from "./Pages/Home/AboutUs/AboutUs";
import { ContactUs } from "./Pages/Home/ContactUs/ContactUs";

import { Portal } from "./Pages/Portal/Portal";
import { Courses } from "./Pages/Portal/Courses/Courses";
import { Profile } from "./Pages/Portal/Profile/Profile";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/portal" component={Portal} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
