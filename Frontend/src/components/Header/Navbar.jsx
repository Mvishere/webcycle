import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

export default function Navbar(props) {
  const [showNavItems, setShowNavItems] = useState(false);

  function handleClick() {
    setShowNavItems((prev) => !prev);
  }

  return (
    <div className="header">
      <ul className="menu">
        <li className="navitem">
          <Link to="/">Home</Link>
        </li>
        <li className="navitem">
          <Link to="/Blog">News & Blogs</Link>
        </li>
        <li className="navitem">
          <Link to="/Quiz">Quizzes</Link>
        </li>
        <li className="navitem">
          <Link to="/Programmes">Programmes</Link>
        </li>
        <li className="navitem">
          <Link to="/ecofriendly">Eco-Friendly</Link>
        </li>
        <li className="navitem">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="navitem">
          <Link to="/About">About Us</Link>
        </li>
        <div className="hamburger-menu">
          <span onClick={handleClick}>
            <GiHamburgerMenu />
          </span>
        </div>
        <li>
          <label className="theme-slider" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onClick={props.changeMode} />
            <div className="round slider"></div>
          </label>
        </li>
        <div className="login">
          {!props.login && (
            <li className="navitemm">
              <Link to="/login">Log In</Link>
            </li>
          )}
          {!props.login && (
            <li className="navitemm">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          )}
          {props.login && (
            <li className="navitemm">
              <Link to="/profile">{props.username}</Link>
            </li>
          )}
          {props.login && (
            <li className="navitemm">
              <Link to="" onClick={props.signout}>
                Sign Out
              </Link>
            </li>
          )}
        </div>
        <div className={showNavItems ? "mobile-version-menu" : "inactive"}>
          <li className="navitemm">
            <Link to="/">Home</Link>
          </li>
          <li className="navitemm">
            <Link to="/Blog">News & Blogs</Link>
          </li>
          <li className="navitemm">
            <Link to="/Quiz">Quizzes</Link>
          </li>
          <li className="navitemm">
            <Link to="/Programmes">Programmes</Link>
          </li>
          <li className="navitemm">
            <Link to="/ecofriendly">Eco-Friendly</Link>
          </li>
          <li className="navitemm">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="navitemm">
            <Link to="/About">About Us</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
