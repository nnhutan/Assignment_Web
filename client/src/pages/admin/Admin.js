import React, { useEffect, useState } from "react";
import API from "../../API/api.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Category from "./Category";
import Feedback from "./Feedback";
import Order from "./Order";
import Product from "./Product";
import User from "./User";
import App from "../../App";
import Contact from "./Contact";
import News from "./News";

function Admin() {
  const [state, setState] = useState({
    isLoading: true,
    isLoggedIn: false,
    user: {},
  });
  useEffect(() => {
    axios
      .post(
        //API + `authentication.php`,
        API+'autth.php/login',
        {
          action: "login",
        },
        { withCredentials: true }
      )
      .then((res) => {
        //if (res.data.status === 1)
          setState({ isLoggedIn: true, user: res.data });
        //else setState({ isLoggedIn: false, user: {} });
        // window.location.href = "/admin";
      }).catch(res => {
        console.log(res)
        setState({ isLoggedIn: false, user: {} })
      });
  }, []);

  const clickHandler = () => {
    axios
      .post(
        //API + `authentication.php`,
        API+'autth.php/logout',
        {
          action: "logout",
        },
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data);
        //if (res.data.status === 1)
          setState({ isLoggedIn: false, user: {} });
        // window.location.href = "/admin";
      }).catch(res => {
        alert(res)
      });
  };

  return state.isLoggedIn && state.user.role_id === "1" ? (
    <Router>
      <div>
        <Switch>
          <Route path="/admin/category">
            <Category clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin/feedback">
            <Feedback clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin/order">
            <Order clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin/product">
            <Product clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin/user">
            <User clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin/contact">
            <Contact clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin/news">
            <News clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/admin">
            <Home clickHandler={clickHandler} currUser={state.user} />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : state.isLoading ? (
    "Loading..."
  ) : (
    <Redirect to="/" />
  );
}

export default Admin;
