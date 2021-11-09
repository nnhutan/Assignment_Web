import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "./API/api";

function TestAPI() {
  useEffect(() => {
    axios
      .get(API + "autth.php/getRole", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return <div></div>;
}

export default TestAPI;
