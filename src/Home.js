/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeNavSelection } from "./app/counterSlice";
import "./Home.css";
import image from "./img/helloSign.png";
import Fade from "react-reveal/Fade";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="homeDetails">
        <div className="helloHeading">
          <Fade top duration={1500}>
            <h1>
              Hello, There <img className="helloSignImage" src={image} alt="" />
            </h1>
          </Fade>
        </div>
        <Fade left duration={1500} delay={1500}>
          <p>My name is </p>
        </Fade>
        <Fade right duration={1500} delay={2000}>
          <h2>Danish Pandita</h2>
        </Fade>
        <div className="homeOwnDetails">
          <Fade left duration={1500} delay={2500}>
            <p>A front-end enthusiast!!</p>
          </Fade>
          <Fade right duration={1500} delay={3000}>
            <p>Ready to learn anytime !!!</p>
          </Fade>
        </div>
        <Fade left duration={1500} delay={3500}>
          <p>Check out more about me </p>
        </Fade>
        <Fade bottom duration={1500} delay={4500}>
          <p
            onClick={() => {
              dispatch(changeNavSelection("Profile"));
            }}
            className="gotoprofile">
            GO TO <em>Profile</em>
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
