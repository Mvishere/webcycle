import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import QuizApp from "./components/Quiz/Quiz";
import Footer from "./components/Footer/Footer";
import Programmes from "./components/Programmes/Programmes";
import Login from "./components/Login/Login";
import Signup from "./components/Login/SignUp";
import Profile from "./components/Profile/profile";
import LoginMessage from "./components/Alert/Alert";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/CountactUs";
import Blog from "./components/Blogs/components/BlogPage";
import EcoFriendly from "./components/eco-friendly/Eco_Friendly";
import "./App.css";

function App() {
  const [Username, setUsername] = useState("");
  const [login, setLogin] = useState(false);
  const [mode, setMode] = useState("light");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function showpopup(message) {
    setLoggedIn(true);
    setMessage(message);
    setTimeout(() => setLoggedIn(false), 3000);
  }

  function setUser(username) {
    setUsername(username);
    setLogin(true);
    window.localStorage.setItem("username", username);
    showpopup("You have logged in!");
  }

  function signOut() {
    setUsername("");
    setLogin(false);
    window.localStorage.removeItem("username");
    showpopup("You have logged out!");
  }

  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    window.localStorage.username
      ? setUsername(window.localStorage.username)
      : setUsername("");
    window.localStorage.username ? setLogin(true) : setLogin(false);
  }, []);

  return (
    <Router>
      <div
        className="app-container"
        style={
          mode === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <LoginMessage show={loggedIn} message={message} />
        <Navbar
          changeMode={toggleMode}
          username={Username}
          login={login}
          signout={signOut}
        />
        <Switch>
          <Route exact path="/">
            <Home mode={mode} />
          </Route>
          <Route path="/Quiz">
            <QuizApp username={Username} setAlert={showpopup} />
          </Route>
          <Route path="/Programmes">
            <Programmes mode={mode} />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/login">
            <Login setuser={setUser} setAlert={showpopup} />
          </Route>
          <Route path="/sign-up">
            <Signup setuser={setUser} setAlert={showpopup} />
          </Route>
          <Route exact path="/Profile">
            <Profile username={Username} />
          </Route>
          <Route path="/About">
            <AboutUs mode={mode} />
          </Route>
          <Route path="/Contact">
            <ContactUs mode={mode} />
          </Route>
          <Route path="/ecofriendly">
            <EcoFriendly />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;