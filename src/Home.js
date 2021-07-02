/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeNavSelection } from "./app/counterSlice";
import "./Home.css";
import Fade from "react-reveal/Fade";
function Home() {
  const dispatch = useDispatch();
  const handImg =
    "https://firebasestorage.googleapis.com/v0/b/danishpanditaportfolio.appspot.com/o/helloSign.png?alt=media&token=f73d02cf-76a3-4d98-b661-0426716aa4d7";
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="homeDetails">
        <div className="helloHeading">
          <Fade top duration={1500}>
            <h1>
              Hello, There{" "}
              <img className="helloSignImage" src={handImg} alt="" />
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
