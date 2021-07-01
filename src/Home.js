/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { changeNavSelection } from "./app/counterSlice";
import "./Home.css";
import image from "./img/helloSign.png";
import Zoom from "react-reveal/Zoom";
function Home() {
  const dispatch = useDispatch();

  return (
    <div className="home">
      <div className="homeDetails">
        <div className="helloHeading">
          <Zoom top duration={1500}>
            <h1>
              Hello, There <img className="helloSignImage" src={image} alt="" />
            </h1>
          </Zoom>
        </div>
        <Zoom top delay={1000}>
          <p>My name is </p>
        </Zoom>
        <Zoom top delay={1500}>
          <h2>Danish Pandita</h2>
        </Zoom>
        <div className="homeOwnDetails">
          <Zoom top delay={2000}>
            <p>I'm a front-end developer!</p>
          </Zoom>
          <Zoom top delay={2500}>
            <p>Ready to learn anytime !!!</p>
          </Zoom>
        </div>
        <Zoom top delay={3000}>
          <p>Check out more about me </p>
        </Zoom>
        <Zoom top delay={3000}>
          <p
            onClick={() => {
              dispatch(changeNavSelection("Profile"));
            }}
            className="gotoprofile">
            GO TO Profile
          </p>
        </Zoom>
      </div>
    </div>
  );
}

export default Home;
