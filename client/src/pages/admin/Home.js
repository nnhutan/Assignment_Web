import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Header from "../../components/admin/Header";

function Home({ clickHandler, currUser }) {
  return (
    <div className="container-fluid p-0">
      <Header clickHandler={clickHandler} currPage="home" currUser={currUser} />
    </div>
  );
}

export default Home;
