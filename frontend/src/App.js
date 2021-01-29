import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/homePage/Home";
import Login from "./components/loginPage/Login";
import Register from "./components/registerPage/Register";
import Profile from "./components/profilePage/Profile";
import Maps from "./components/mapsPage/Maps";
import UserContext from "./context/UserContext";
import Axios from "axios";

import "./style.css";

/**
 * Main component for entire app
 * @param {json} userData stores state of user
 *  if user not logged stete is undefined
 *  if logged stores nickname and token of user
 *
 * @function useEffect check if any of given state changed
 *  if changed runs [] - run only one, when website loaded
 */

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    email: undefined,
    nickname: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://127.0.0.1:5000/users/tokenIsValid",
        null,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      if (tokenRes.data) {
        try {
          const userRes = await Axios.get("http://127.0.0.1:5000/users/", {
            headers: {
              "x-auth-token": token,
            },
          });
          setUserData({
            token,
            email: userRes.data.email,
            nickname: userRes.data.nickname,
          });
        } catch (error) {}
      }
    };
    checkLoggedIn();
  }, []);

  return (
    //Router, component that allow us handle routes
    //npm install -save react-router-dom
    //Parameter exact in route gives as only "/" page without its subpages
    //Without it we would load Home component for every subpage
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={() =>
              !userData.nickname ? <Login /> : <Redirect to="/" />
            }
          />
          <Route
            path="/register"
            render={() =>
              !userData.nickname ? <Register /> : <Redirect to="/" />
            }
          />
          <Route
            path="/profile"
            render={() =>
              !userData.nickname ? <Redirect to="/" /> : <Profile />
            }
          />
          <Route
            path="/maps"
            render={() => (!userData.nickname ? <Redirect to="/" /> : <Maps />)}
          />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
