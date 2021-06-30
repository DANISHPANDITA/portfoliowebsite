/** @format */

import React from "react";
import "./SkillPage.css";
import { LinearProgress } from "@material-ui/core";

function SkillPage() {
  return (
    <div className="skillPage">
      <p className="skillListTitle">Skills / Programming Languages known</p>
      <ul className="skillsList">
        <li>
          C/C++{" "}
          <LinearProgress
            color="secondary"
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={80}
          />
          <p>80 % </p>
        </li>
        <li>
          Python
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={85}
          />
          <p>85 % </p>
        </li>
        <li>
          Javascript
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={85}
          />
          <p>85 % </p>
        </li>
        <li>
          Java
          <LinearProgress
            color="secondary"
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={70}
          />
          <p>70 % </p>
        </li>
        <li>
          HTML
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={95}
          />
          <p>95 % </p>
        </li>
        <li>
          CSS
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={95}
          />
          <p>95 % </p>
        </li>
        <li>
          Git
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={85}
          />
          <p>85 % </p>
        </li>
        <li>
          MongoDB
          <LinearProgress
            color="secondary"
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={80}
          />
          <p>80 % </p>
        </li>
        <li>
          React.js/Node
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={85}
          />
          <p>85 % </p>
        </li>
        <li>
          MySQL
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={80}
          />
          <p>80 % </p>
        </li>
        <li>
          Firebase
          <LinearProgress
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={90}
          />
          <p>90 % </p>
        </li>
        <li>
          Photoshop
          <LinearProgress
            color="secondary"
            style={{
              marginTop: "0.5vh",
              height: "0.7vh",
              borderRadius: "10vh",
            }}
            variant="determinate"
            value={75}
          />
          <p>75 % </p>
        </li>
      </ul>
    </div>
  );
}

export default SkillPage;
