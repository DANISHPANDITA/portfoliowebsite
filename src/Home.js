/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { changeNavSelection } from "./app/counterSlice";
import "./Home.css";
import image from "./img/helloSign.png";
function Home() {
  const dispatch = useDispatch();

  return (
    <div className="home">
      <div className="homeDetails">
        <div className="helloHeading">
          <h1>
            Hello, There <img className="helloSignImage" src={image} alt="" />
          </h1>
        </div>
        <p>My name is </p>
        <h2>Danish Pandita</h2>
        <div className="homeOwnDetails">
          <p>I'm a front-end developer!</p>
          <p>Ready to learn anytime !!!</p>
        </div>
        <p>Check out more about me </p>
        <p
          onClick={() => {
            dispatch(changeNavSelection("Profile"));
          }}
          className="gotoprofile">
          GO TO Profile
        </p>
      </div>
    </div>
  );
}

export default Home;
